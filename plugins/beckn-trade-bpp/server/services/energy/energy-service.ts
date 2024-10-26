import { Strapi } from "@strapi/strapi";
const fs = require("fs");
import axios from "axios";

type AddTradeDto = {
    quantity: number;
    unit: string;
    item_name: string;
    trusted_source: boolean;
    cred_required: boolean;
    recurring: boolean
};

export default ({ strapi }: { strapi: Strapi }) => ({
    async login(loginDto: any) {
        try {
            const { email, password } = loginDto;           
            const user = await strapi
                .query("plugin::users-permissions.user")
                .findOne({
                    where: { email: { $eqi: email } },
                    populate: {
                        agent: true,
                        provider: true,
                    },
                });
            if (!user) {
                throw new Error("Email Not found");
            }
            // Request API.
            const response = await axios.post(
                `${process.env.STRAPI_BPP_URL}/api/auth/local`,
                {
                    identifier: email,
                    password,
                });
            delete user.password;
            return { ...response.data, user };
        } catch (error) {
            console.log("Error Occured:: ", error.message);
            if (error.message === "Email Not found") {
                throw error;
            }
            throw new Error("Wrong Password");
        }
    },
    async generateCredential(credDto: any) {
        const { first_name, last_name, email } = credDto;

        const cred = await axios.post(`${process.env.ISSUER_URL}/cred`,
            {
                schemaId: "schema:cord:s31vxjAmMazwHtGY6hn2f9nNkcuD9yxMDCGirRuzYCVFjGq5M",
                properties: {
                    name: first_name + ' ' + last_name,
                    email
                }
            }
        );
        return cred.data.vc;
    },
    async getCredential(userId: number) {
        try {
            if (!userId) {
                throw new Error('No userId provided to get credential');
            }
            const userInfo = await strapi.entityService.findOne('plugin::users-permissions.user', userId, {
                populate: {
                    agent: {
                        populate: {
                            agent_profile: {
                                populate: {
                                    credential: true,
                                    ders: {
                                        populate: {
                                            credential: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            const cred = userInfo.agent.agent_profile.credential;
            let ders = userInfo.agent.agent_profile.ders;
            ders = ders.map(der => {
                const der_id = der.id;
                return {
                    der_id,
                    type: 'DER',
                    credential: der.credential
                }
            });
            const userCred = {
                cred_id: cred.id,
                type: 'USER_CREDENTIAL',
                credential: cred.vc
            }
            return [userCred, ...ders];

        } catch (error) {

        }

    },
    async signup(signupDto: any) {
        try {
            let result = {};
            await strapi.db.transaction(async ({ trx }) => {
                try {
                    const { phone_no, utility_name } = signupDto;
                    let mdmUser: any = {};
                    try {
                        const mdm = await axios.post(`${process.env.MDM_URL}/getCustomer`, {
                            phone_no,
                            utility_name
                        });
                        mdmUser = mdm?.data?.data;
                        console.log('MDM User', mdmUser);
                        if (!mdmUser || !mdmUser?.customer_id) {
                            throw new Error("No MDM user found");
                        }
                    } catch(error) {
                        throw new Error(error?.response?.data?.error?.message || "No MDM user found");
                    }
                    let user = await strapi
                        .query("plugin::users-permissions.user")
                        .findOne({ where: { email: { $eqi: signupDto.email } } });
                    if (user) {
                        throw new Error("Email already used. Signup with other email!");
                    }
                    const { email, password, first_name, last_name, phone_number } =
                        signupDto;

                    const agentProfile = await strapi.entityService.create(
                        "api::agent-profile.agent-profile",
                        {
                            data: {
                                phone_number,
                                customer_id: mdmUser.customer_id,
                                publishedAt: new Date()
                            },

                        }
                    );
                    console.log("Created agent profile: ", agentProfile);
                    const agent = await strapi.entityService.create("api::agent.agent", {
                        data: {
                            first_name,
                            last_name,
                            agent_profile: agentProfile.id,
                            publishedAt: new Date()
                        },

                    });
                    console.log("Created agent : ", agent);
                    const createdUser = await strapi.entityService.create(
                        "plugin::users-permissions.user",
                        {
                            data: {
                                email,
                                password,
                                username: email,
                                confirmed: true,
                                agent: agent.id,
                                provider: 'local',
                                publishedAt: new Date()
                            },
                        }
                    );
                    const jwt = await strapi.plugins['users-permissions'].services.jwt.issue({
                        id: createdUser.id,
                    });
                    console.log("Created user: ", createdUser);
                    //Issue Credential using Dhiway SDK
                    const vc = await this.generateCredential({ email, first_name, last_name });
                    //store the credential and update it in agent profile
                    const cred = await strapi.entityService.create(
                        "api::credential.credential",
                        {
                            data: {
                                vc,
                                publishedAt: new Date()
                            },
                        }
                    );
                    //update the agent profile table
                    const agentProfileUpdated = await strapi.entityService.update(
                        "api::agent-profile.agent-profile",
                        agentProfile.id,
                        {
                            data: {
                                credential: cred.id,
                                publishedAt: new Date()
                            },
                        }
                    );

                    delete createdUser.password;
                    //add catalogues
                    const { providerData } = signupDto;
                    if (providerData && Object.keys(providerData).length > 0) {
                        providerData.agents = [agent.id];
                        await this.createCatalogue(providerData, agent.id);
                    }
                    await trx.commit();
                    return result = { jwt, user: createdUser };
                } catch (error) {
                    await trx.rollback();
                    throw error;
                }
            });
            return result;
        } catch (error) {
            console.log("Error Occured while signup", error.message);
            if (error.message === "Email Not found") {
                throw error;
            }
            throw new Error(error.message);
        }
    },
    // Helper function using streams
    createHashFromFile(filePath) {
        return new Promise((resolve, reject) => {
            const crypto = require("crypto");
            const fs = require("fs");

            const hashAlgorithm = "sha256";
            const hash = crypto.createHash(hashAlgorithm);
            const stream = fs.createReadStream(filePath);

            stream.on("error", (err) => reject(err));

            stream.on("data", (chunk) => {
                hash.update(chunk);
            });

            stream.on("end", () => {
                const digest = hash.digest("hex");
                resolve(digest);
            });
        });
    },
    async createDer(createDerDto, filesDto, user) {

        try {
            let result = {};
            await strapi.db.transaction(async ({ trx }) => {
                try {
                    // Step 0: Generate hash from buffer
                    const hash = await this.createHashFromFile(filesDto.path);

                    // Step 1: Generate credentials (as per your existing code)
                    const getCreds = await axios.post(
                        `${process.env.ISSUER_URL}/cred`,
                        {
                            schemaId:
                                "schema:cord:s356EvHMCEdivwpM2srB7s5etUAJB69erN8vHKzoog8E1VkBv",
                            properties: {
                                type: createDerDto.type,
                                category: createDerDto.category,
                                proof: hash,
                            },
                        }
                    );
                    console.log("Credential generated:", getCreds.data);

                    // Step 2: Store the credential
                    const cred = await strapi.entityService.create(
                        "api::credential.credential",
                        {
                            data: {
                                vc: getCreds.data.vc,
                            },
                        }
                    );

                    console.log("file path", filesDto.path);
                    const fileBuffer = fs.readFileSync(filesDto.path);
                    console.log("fileBuffer", fileBuffer);
                    // Step 3: Upload the file
                    const fileToUpload = {
                        path: filesDto.path,
                        name: filesDto.name,
                        type: filesDto.type,
                        size: filesDto.size,
                    };

                    const uploadedFiles = await strapi.plugins.upload.services.upload.upload({
                        data: {
                            fileInfo: {
                                name: filesDto.name,
                                type: filesDto.type,
                            },
                        },
                        files: fileToUpload, // The binary file object
                    });
                    console.log("UploadedFiles", uploadedFiles);

                    // Ensure a file was uploaded
                    if (!uploadedFiles || uploadedFiles.length === 0) {
                        throw new Error("File upload failed");
                    }

                    const uploadedFile = uploadedFiles[0];

                    // Step 4: Create the der entity and associate the uploaded file
                    const der = await strapi.entityService.create("api::der.der", {
                        data: {
                            proof: uploadedFile.id,
                            credential: cred.id,
                            type:
                                createDerDto.type.toUpperCase() === "CONSUMER"
                                    ? "CONSUMER"
                                    : "PROSUMER",
                            category: createDerDto.category,
                        }
                    });
                    if (!user) {
                        throw new Error("User id not found");
                    }
                    console.log('Der id: ', der.id);

                    const agentProfile = await strapi.entityService.update(
                        "api::agent-profile.agent-profile",
                        user.agent.agent_profile.id,
                        {
                            data: {
                                ders: {
                                    connect: [der.id],
                                },
                                publishedAt: new Date()
                            },
                        }
                    );
                    console.log('Agent profile: ', agentProfile);

                    // Step 6: Commit the transaction
                    await trx.commit();
                    return result = der;
                } catch (error) {
                    await trx.rollback();
                    throw error;
                }
            });
            return result;

        } catch (error) {
            // Roll back the transaction in case of error
            console.error("Error in createDer:", error);
            throw new Error(`Error while creating der: ${error.message}`);
        }
    },
    async getDer({ agentProfileId } ) {
        try {
            console.log('Agent profile: ', agentProfileId);
            
            const agentProfile = await strapi.entityService.findOne("api::agent-profile.agent-profile", agentProfileId,
                {
                    populate: ["ders", "ders.credential"],
                });

            if (!agentProfile.ders.length) {
                throw new Error(`No Ders found for this user`);
            }
            return agentProfile.ders;
        } catch (error) {
            console.error("Error in getDer:", error);
            throw new Error(`Error while retrieving der: ${error.message}`);
        }
    },
    async createCatalogue(providerData: any, agentId: number) {
        try {
            let result = {};
            await strapi.db.transaction(async ({ trx }) => {
                try {
                    const { item = {} } = providerData;
                    providerData.agents = [agentId];
                    //create category or get category id
                    const category = await strapi.entityService.findMany("api::category.category", {
                        filters: {
                            value: 'SOLAR ENERGY',
                            category_code: 'SOLAR_ENERGY'
                        }
                    });
                    let categoryId;
                    if (category && category.length) {
                        categoryId = category[0].id;
                    } else {
                        //create category
                        const createdCategory = await strapi.entityService.create(
                            "api::category.category",
                            {
                                data: {
                                    value: 'SOLAR ENERGY',
                                    category_code: 'SOLAR_ENERGY',
                                    publishedAt: new Date()
                                },
                            }
                        );
                        console.log('createdCategory:: ', createdCategory);
                        categoryId = createdCategory.id;
                    }
                    const createProvider = await strapi.db
                        .query("api::provider.provider")
                        .create({
                            data: {
                                ...(providerData.provider_name && {
                                    provider_name: providerData.provider_name,
                                }),
                                ...(providerData.domain_id && {
                                    domain_id: providerData.domain_id,
                                }),
                                ...(providerData.location_id && {
                                    location_id: providerData.location_id,
                                }),
                                ...(providerData.short_desc && {
                                    short_desc: providerData.short_desc,
                                }),
                                ...(providerData.long_desc && {
                                    long_desc: providerData.long_desc,
                                }),
                                ...(providerData.logo && { logo: providerData.logo }),
                                ...(providerData.provider_id && {
                                    provider_id: providerData.provider_id,
                                }),
                                ...(providerData.provider_url && {
                                    provider_url: providerData.provider_url,
                                }),
                                category_ids: [categoryId],
                                ...(providerData.agents &&
                                    providerData.agents.length > 0 && {
                                    agents: providerData.agents,
                                }),
                                ...(providerData.input &&
                                    providerData.input.length > 0 && { input: providerData.input }),
                                ...(providerData.fullfillments &&
                                    providerData.fullfillments.length > 0 && {
                                    fullfillments: providerData.fullfillments,
                                }),
                                ...(providerData.provider_rating && {
                                    provider_rating: providerData.provider_rating,
                                }),
                                ...(providerData.payment_methods && {
                                    payment_methods: providerData.payment_methods,
                                }),
                                publishedAt: new Date()
                            },
                        });
                    console.log('Created provider: ', createProvider);

                    const createScProduct = await strapi.entityService.create(
                        "api::sc-product.sc-product",
                        {
                            data: {
                                minPrice: 7,
                                maxPrice: 8,
                                stock_quantity: 0,
                                quantity_unit: "kWH",
                                publishedAt: new Date()
                            },
                        }
                    );
                    console.log("createScProduct::", createScProduct);

                    const createEnergyItem = await strapi.entityService.create(
                        "api::item.item",
                        {
                            data: {
                                name: item?.name || "Energy",
                                short_desc: item?.short_desc || "Excess power from my rooftop system to sell",
                                code: item?.code || "energy",
                                sc_retail_product: createScProduct.id,
                                provider: createProvider.id,
                                max_quantity: 1,
                                min_quantity: 20,
                                publishedAt: new Date()
                            },
                        }
                    );
                    console.log('Created item: ', createEnergyItem);

                    const createFullfillmentIds = await strapi.entityService.create(
                        "api::item-fulfillment.item-fulfillment",
                        {
                            data: {
                                item_id: createEnergyItem?.id,
                                fulfilment_id: 1,
                                location_id: createProvider?.location_id?.id,
                                timestamp: new Date()
                            },
                        }
                    );

                    console.log("createFullfillmentIds::", createFullfillmentIds);
                    const nextYear = new Date();
                    nextYear.setFullYear(nextYear.getFullYear() + 1);

                    const createFullfillmentIdsNextYear = await strapi.entityService.create(
                        "api::item-fulfillment.item-fulfillment",
                        {
                            data: {
                                item_id: createEnergyItem.id,
                                fulfilment_id: 2,
                                location_id: createProvider?.location_id?.id,
                                timestamp: nextYear.toISOString(),
                                publishedAt: new Date()
                            },
                        }
                    );
                    console.log("createFullfillmentIdsNextYear::", createFullfillmentIdsNextYear);
                    /*
                    1. Check category if value = 'SOLAR ENERGY' and category_code = 'SOLAR_ENERGY'
                        If exists take it id, otherwise create it with same value and code
                    2. cat_attr_tag_relation table:
                        create { taxonomy: "CATEGORY", taxonomy_id: created category's id, item : created item's (connect it) }
                    3. link created category to provider
                    */
                    //add in cat_attr_tag_relation table
                    const createdCAttrTagRelation = await strapi.entityService.create(
                        "api::cat-attr-tag-relation.cat-attr-tag-relation",
                        {
                            data: {
                                taxanomy: 'CATEGORY',
                                taxanomy_id: categoryId.toString(),
                                item: createEnergyItem.id,
                                publishedAt: new Date()
                            },
                        }
                    );
                    console.log('createdCAttrTagRelation:: ', createdCAttrTagRelation);
                    await trx.commit();
                    return result = createProvider;
                } catch (error) {
                    await trx.rollback();
                    console.log('Failed to add catalogue: ', error);
                    throw error;
                }
            });
            return result;
        } catch (error) {
            console.error("Error in creating catalogue:", error);
            throw new Error(error.message);
        }
    },
    async addTradeRequest(tradeDto: AddTradeDto, { providerId, userId }) {
        try {
            if(!providerId) {
                throw new Error('Provider not found to add trade');
            }
            const provider = await strapi.entityService.findOne(
                "api::provider.provider", providerId,
                {
                    populate: ["items", "items.sc_retail_product"],
                }
            );
            if (!provider) {
                throw new Error("Provider not found");
            }
            console.log("provider::", provider);
            console.log(
                "provider.items.sc_retail_product.sku::",
                JSON.stringify(provider.items[0])
            );
              
            if (provider.items.length > 0) {
                let id = provider.items[0].sc_retail_product.id;
                const { quantity, unit, item_name, trusted_source = false, cred_required = false, recurring = false  } = tradeDto;
                const updateScProduct = await strapi.entityService.update(
                    "api::sc-product.sc-product",
                    id,
                    {
                        data: {
                            stock_quantity: 
                                Number(provider.items[0].sc_retail_product.stock_quantity) +
                                Number(quantity),
                            quantity_unit: unit,
                            trusted_source,
                            cred_required,
                            recurring,
                            publishedAt: new Date()
                        },
                    }
                );
                if(provider.items[0].name !== item_name) {
                    //update item name
                    const updatedItem = await strapi.entityService.update(
                        "api::item.item",
                        id,
                        {
                            data: {
                                name: item_name,
                                publishedAt: new Date()
                            },
                        }
                    );
                }
                return { "sc-product": updateScProduct, provider };
            }
        } catch(error) {
            throw new Error(`Unable to add trade data', ${error}`);
        } 

    },
    async getDashboard(customerId: number) {
        try {
            const dashboardData = await axios.post(`${process.env.MDM_URL}/statistics`, {
                customerId
            });
            return dashboardData.data;
        } catch (error) {
            throw new Error('Failed to fetch dashboard data from MDM');
        }
    },
    async getTrade({ tradeId, agentId }) {
        try {

            //get trade by id
            const trade = await strapi.entityService.findMany
                (
                    "api::trade.trade",
                    {
                        filters: {
                            ...(tradeId && {
                                id: tradeId,
                            }),
                            agent: {
                                id: agentId
                            }
                        },
                        populate: {
                            trade_events: true
                        }
                    }
                );
            console.log('Trade:, ', trade);
            
            if (!trade || !trade.length) {
                throw new Error("Trade not found");
            }
            return trade;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async addTradeLog({ transactionId, event_name, description, data = {} }) {
        try {
            if(!transactionId) {
                throw new Error('Transaction id not provided to add trade logs');
            } 
            //fetch trade details by transactionId
            const trade = await strapi.entityService.findMany
                (
                    "api::trade.trade",
                    {
                        filters: {
                            transaction_id: transactionId
                        },
                    }
                );
            
            if (!trade || !trade.length) {
                throw new Error("Trade not found");
            }
            const tradeId = trade[0].id;
            const tradeEvent = await strapi.entityService.create(
                "api::trade-event.trade-event",
                {
                    data: {
                        event_name,
                        description,
                        data,
                        trade: tradeId,
                        publishedAt: new Date()
                    },
                }
            );
            return tradeEvent;
        } catch(error) {
            throw new Error(error.message);
        }
        
    }
});
