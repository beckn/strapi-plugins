import { Strapi } from "@strapi/strapi";
const fs = require("fs");
import axios from "axios";

import { DateTime } from "@strapi/strapi/lib/types/core/attributes";



type AddEnergyEntry = {
    id: number;
    unit: number;
    start_date: DateTime;
    end_date: DateTime;
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
                        role: true,
                        agent: true,
                        provider: true,
                    },
                });
            console.log("User info::: ", user);
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

        const cred = await axios.post('https://issuer-agent.demo.dhiway.com/api/v1/cred',
            {
                schemaId: "schema:cord:s31vxjAmMazwHtGY6hn2f9nNkcuD9yxMDCGirRuzYCVFjGq5M",
                properties: {
                    name: first_name + ' ' + last_name,
                    email
                }
            }
        );
        console.log('cred generated: ', cred.data);
        return cred.data.vc;
    },
    async getCredential(userId: number) {
        try {
            if (!userId) {
                throw new Error('No userId provided to get credential');
            }
            console.log('UserId: ', userId);

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
        const trx: any = await strapi.db.transaction();
        console.log("Created txn: ", trx);

        try {
            //fetch mdm user
            //if mdm user does not exist throw error
            //const mdmUser = await axios.get('http://127.0.0.1:1339/mdm-user/getConsumer', );
            const mdm = {
                data: {
                    customer_id: "23145",
                },
            };
            const mdmUser = mdm?.data;
            if (!mdmUser || !Object.keys(mdmUser).length) {
                throw new Error("No MDM user found");
            }
            let user = await strapi
                .query("plugin::users-permissions.user")
                .findOne({ where: { email: { $eqi: signupDto.email } } });
            console.log("User info::: ", user);
            if (user) {
                throw new Error("Email already used. Signup with other email!");
            }
            //add agent profile then agent and then user
            const { email, password, first_name, last_name, phone_number } =
                signupDto;

            const agentProfile = await strapi.entityService.create(
                "api::agent-profile.agent-profile",
                {
                    data: {
                        phone_number,
                        customer_id: mdmUser.customer_id,
                    },
                    transaction: trx,
                }
            );
            console.log("Created agent profile: ", agentProfile);

            const agent = await strapi.entityService.create("api::agent.agent", {
                data: {
                    first_name,
                    last_name,
                    agent_profile: agentProfile.id,
                },
                transaction: trx,
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
                    },
                    transaction: trx,
                }
            );
            console.log("Created user: ", createdUser);
            //Issue Credential using Dhiway SDK

            // Request API.
            // const response = await axios.post(
            //     `${process.env.STRAPI_BPP_URL}/api/auth/local/register`,
            //     {
            //         username: email,
            //         password,
            //         email,
            //     }
            // );
            //get credentails
            const vc = await this.getCredential(signupDto);
            //store the credential and update it in agent profile
            const cred = await strapi.entityService.create(
                "api::credential.credential",
                {
                    data: {
                        vc,
                    },
                    transaction: trx,
                }
            );
            //update the agent profile table
            const agentProfileUpdated = await strapi.entityService.update(
                "api::agent-profile.agent-profile",
                agentProfile.id,
                {
                    data: {
                        credential: cred.id,
                    },
                    transaction: trx,
                }
            );
            await trx.commit();
            delete createdUser.password;
            return createdUser;
        } catch (error) {
            await trx.rollback();
            console.log("Error Occured:: ", error);
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
    async createDer(createDerDto, filesDto) {
        const trx: any = await strapi.db.transaction();
        try {
            console.log("Form Data:", createDerDto);
            console.log("File Data:", filesDto);

            // Step 0: Generate hash from buffer

            const hash = await this.createHashFromFile(filesDto.path);

            console.log("hash", hash);
            // Step 1: Generate credentials (as per your existing code)
            const getCreds = await axios.post(
                "https://issuer-agent.demo.dhiway.com/api/v1/cred",
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
                        // type: 'DER' //TODO - add in VC
                    },
                    transaction: trx,
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
                }, // Additional data if needed
                files: fileToUpload, // The binary file object
                transaction: trx,
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
                        createDerDto.type.toUpperCase() === "PROSUMER"
                            ? "PROSUMER"
                            : "CONSUMER",
                    category: createDerDto.category,
                },
                transaction: trx,
            });

            // Step 6: Update relation of der in agent profile, Which we will get from token (user id)
            const user = await strapi
                .query("plugin::users-permissions.user")
                .findOne({
                    where: { id: { $eqi: 1 } },
                    populate: {
                        role: true,
                        agent: {
                            populate: {
                                agent_profile: {
                                    populate: {
                                        details: true,
                                    },
                                },
                            },
                        },
                        provider: true,
                    },
                });

            console.log("User info::: ", user);
            if (!user) {
                throw new Error("User id not found");
            }

            const agentProfile = await strapi.entityService.update(
                "api::agent-profile.agent-profile",
                user.agent.agent_profile.id,
                {
                    data: {
                        ders: {
                            connect: [der.id],
                        },
                    },
                    //   populate: '*',
                }
            );

            // Step 6: Commit the transaction
            await trx.commit();

            // Return the created der entity
            return der;
        } catch (error) {
            // Roll back the transaction in case of error
            await trx.rollback();
            console.error("Error in createDer:", error);
            throw new Error(`Error while creating der: ${error.message}`);
        }
    },
    async getDer(id) {
        try {
            if (!id) {
                throw new Error("ID is required to retrieve the der entity.");
            }

            const der = await strapi.entityService.findOne("api::der.der", id, {
                populate: ["proof", "credential"],
            });

            if (!der) {
                throw new Error(`Der entity with ID ${id} not found.`);
            }

            return der;
        } catch (error) {
            console.error("Error in getDer:", error);
            throw new Error(`Error while retrieving der: ${error.message}`);
        }
    },

    async createCatalogueEnergyEntry(energyData: AddEnergyEntry) {
        try {
            console.log("hello their");
            const provider = await strapi.entityService.findOne(
                "api::provider.provider", energyData.id,
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
                const updateScProduct = await strapi.entityService.update(
                    "api::sc-product.sc-product",

                    id,
                    {
                        data: {
                            sku: (
                                Number(provider.items[0].sc_retail_product.sku) +
                                Number(energyData.unit)
                            ).toString(),
                        },
                    }
                );
                return { "sc-product": updateScProduct, provider };
            } else {
                console.log("provider::", provider);
                const createScProduct = await strapi.entityService.create(
                    "api::sc-product.sc-product",
                    {
                        data: {
                            minPrice: 7,
                            maxPrice: 8,
                            stock_quantity: 0,
                            sku: energyData.unit.toString(),
                            quantity_unit: "kWH",
                            publishedAt: new Date().toISOString(),
                        },
                    }
                );
                console.log("createScProduct::", createScProduct);

                const createEnergyItem = await strapi.entityService.create(
                    "api::item.item",
                    {
                        data: {
                            name: "Energy",
                            short_desc: "Excess power from my rooftop system to sell",
                            code: "energy",
                            sc_retail_product: createScProduct.id,
                            provider: provider.id,
                            max_quantity: 1,
                            min_quantity: 20,
                            publishedAt: new Date().toISOString(),
                        },
                    }
                );

                const createFullfillmentIds = await strapi.entityService.create(
                    "api::item-fulfillment.item-fulfillment",
                    {
                        data: {
                            item_id: createEnergyItem.id,
                            fulfilment_id: 1,
                            location_id: provider.location_id.id,
                            timestamp: new Date().toISOString(),
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
                            location_id: provider.location_id.id,
                            timestamp: nextYear.toISOString(),
                        },
                    }
                );

                return { item: createEnergyItem, "sc-product": createScProduct };
            }
        } catch (error) {
            console.error("Error in updating catalogue:", error);
            throw error;
        }
    },
});
