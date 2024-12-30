import { Strapi } from "@strapi/strapi";
const fs = require("fs").promises;
import axios from "axios";

type AddTradeDto = {
  quantity: number;
  unit: string;
  item_name: string;
  trusted_source: boolean;
  cred_required: boolean;
  recurring: boolean;
  price: number;
};

export default ({ strapi }: { strapi: Strapi }) => ({
  async login(loginDto: any) {
    try {
      const { email, password } = loginDto;
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: {
            email: { $eqi: email },
            role: { name: { $eqi: "Prosumer" } }
          },
          populate: {
            agent: true,
            provider: true,
            role: true
          }
        });
      if (!user) {
        throw new Error("Email Not found");
      }
      // Request API.
      const response = await axios.post(
        `${process.env.STRAPI_URL}/api/auth/local`,
        {
          identifier: email,
          password
        }
      );
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

    const cred = await axios.post(`${process.env.ISSUER_URL}/cred`, {
      schemaId: "schema:cord:s31vxjAmMazwHtGY6hn2f9nNkcuD9yxMDCGirRuzYCVFjGq5M",
      properties: {
        name: first_name + " " + last_name,
        email
      }
    });
    return cred.data.vc;
  },
  async getCredential(userId: number) {
    try {
      if (!userId) {
        throw new Error("No userId provided to get credential");
      }
      const userInfo = await strapi.entityService.findOne(
        "plugin::users-permissions.user",
        userId,
        {
          populate: {
            agent: {
              populate: {
                agent_profile: {
                  populate: {
                    credentials: true,
                  }
                }
              }
            }
          }
        }
      );
      let creds = userInfo.agent.agent_profile.credentials;
      creds = creds.map((cred) => {
        const cred_id = cred.id;
        return {
          cred_id,
          type: "USER_CREDENTIAL",
          credential: cred?.vc
        };
      });

      return creds;
    } catch (error) {}
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
              utility_name,
              role: 'PROSUMER'
            });
            mdmUser = mdm?.data?.data;
            console.log("MDM User", mdmUser);
            if (!mdmUser || !mdmUser?.customer_id) {
              throw new Error("No MDM user found");
            }
          } catch (error) {
            throw new Error(
              error?.response?.data?.error?.message || "No MDM user found"
            );
          }
          const {
            email,
            password,
            first_name,
            last_name,
            fullname,
            address,
            phone_no: phone_number
          } = signupDto;
          if (!fullname && !first_name) {
            throw new Error("Name not provided for signup");
          }
          const users = await strapi.entityService.findMany(
            "plugin::users-permissions.user",
            {
              filters: {
                $or: [
                  {
                    $and: [
                      { email: { $eqi: email } }, // Filter by email and role
                      { role: { name: { $eq: "Prosumer" } } }
                    ]
                  },
                  {
                    agent: {
                      agent_profile: { phone_number: { $eq: phone_number } }
                    }
                  }
                ]
              }
            }
          );
          console.log("Users", users);

          if (users && users.length) {
            throw new Error("Email or Phone already taken");
          }
          const agentProfile = await strapi.entityService.create(
            "api::agent-profile.agent-profile",
            {
              data: {
                phone_number,
                customer_id: mdmUser.customer_id,
                address,
                utility_name,
                publishedAt: new Date()
              }
            }
          );
          console.log("Created agent profile: ", agentProfile);
          const agent = await strapi.entityService.create("api::agent.agent", {
            data: {
              first_name: fullname,
              agent_profile: agentProfile.id,
              publishedAt: new Date()
            }
          });
          console.log("Created agent : ", agent);
          //Fetch role id
          const role = await strapi.entityService.findMany("plugin::users-permissions.role", {
            filters: { name: "Prosumer" },
          });
          if (!role.length) {
            throw new Error("Role not found");
          }
          const roleId = role[0].id;
          const createdUser = await strapi.entityService.create(
            "plugin::users-permissions.user",
            {
              data: {
                email,
                password,
                username: email,
                confirmed: true,
                agent: agent.id,
                provider: "local",
                role: roleId,
                publishedAt: new Date()
              }
            }
          );
          const jwt = await strapi.plugins[
            "users-permissions"
          ].services.jwt.issue({
            id: createdUser.id
          });
          console.log("Created user: ", createdUser);
          //Issue Credential using Dhiway SDK
          // const vc = await this.generateCredential({
          //   email,
          //   first_name,
          //   last_name
          // });
          // //store the credential and update it in agent profile
          // const cred = await strapi.entityService.create(
          //   "api::credential.credential",
          //   {
          //     data: {
          //       vc,
          //       publishedAt: new Date()
          //     }
          //   }
          // );
          //update the agent profile table
          // const agentProfileUpdated = await strapi.entityService.update(
          //   "api::agent-profile.agent-profile",
          //   agentProfile.id,
          //   {
          //     data: {
          //       credentials: [cred.id],
          //       publishedAt: new Date()
          //     }
          //   }
          // );
          delete createdUser.password;
          //add catalogues
          const { providerData } = signupDto;
          if (providerData && Object.keys(providerData).length > 0) {
            providerData.agents = [agent.id];
            await this.createCatalogue(providerData, agent.id);
          }
          await trx.commit();
          return (result = { jwt, user: createdUser });
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
                if(createDerDto.type.toUpperCase() !== 'PROSUMER' && createDerDto.type.toUpperCase() !== 'CONSUMER') {
                    throw new Error('Invalid type provided for creating DER');
                }
                if(!Array.isArray(filesDto)) {
                    filesDto = [filesDto];
                }
                const hash = await this.createHashFromFile(filesDto[0].path);

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

                const uploadedFiles = await Promise.all(
                    filesDto.map(async (fileDto) => {
                        const fileToUpload = {
                            path: fileDto.path,
                            name: fileDto.name,
                            type: fileDto.type,
                            size: fileDto.size,
                        };
                        return await strapi.plugins.upload.services.upload.upload({
                            data: { fileInfo: { name: fileDto.name, type: fileDto.type } },
                            files: fileToUpload,
                        });
                    })
                );
                console.log("Uploaded Files:", uploadedFiles);

                if (uploadedFiles.some((fileArray) => !fileArray || fileArray.length === 0)) {
                    throw new Error("File upload failed for one or more files");
                }

                const fileProofIds = uploadedFiles.flat().map((file) => file.id);

                // Step 4: Create the der entity and associate the uploaded file
                const der = await strapi.entityService.create("api::der.der", {
                    data: {
                        proof: fileProofIds,
                        credential: cred.id,
                        type:
                            createDerDto.type.toUpperCase() === "CONSUMER"
                                ? "CONSUMER"
                                : "PROSUMER",
                        category: createDerDto.category,
                    }
                });
                console.log('Created Der id: ', der.id);

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
                console.log('Agent profile updated: ', agentProfile);

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
        console.error("Error in createDer:", error);
        throw new Error(`Error while creating der: ${error.message}`);
    }
  },
  async getDer({ agentProfileId } ) {
    try {
        console.log('Agent profile: ', agentProfileId);
        
        const agentProfile = await strapi.entityService.findOne("api::agent-profile.agent-profile", agentProfileId,
            {
                populate: {
                    ders: {
                        populate: {
                            credential: true,
                            proof: {
                                fields: ["id", "name", "url", "mime"]
                            }
                        }
                    }
                }
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
          const category = await strapi.entityService.findMany(
            "api::category.category",
            {
              filters: {
                value: "SOLAR ENERGY",
                category_code: "SOLAR_ENERGY"
              }
            }
          );
          let categoryId;
          if (category && category.length) {
            categoryId = category[0].id;
          } else {
            //create category
            const createdCategory = await strapi.entityService.create(
              "api::category.category",
              {
                data: {
                  title: "SOLAR ENERGY",
                  value: "SOLAR ENERGY",
                  category_code: "SOLAR_ENERGY",
                  publishedAt: new Date()
                }
              }
            );
            console.log("createdCategory:: ", createdCategory);
            categoryId = createdCategory.id;
          }
          if(!providerData.domain_name) {
            throw new Error('Domain Name not provided');
          }
          const domain = await strapi.entityService.findMany("api::domain.domain", {
            filters: {
                DomainName: providerData.domain_name
            }
          });
          let domainId;
          if (domain && domain.length) {
            domainId = domain[0].id;
          } else {
            throw new Error('Create Catalogue: Domain Not Found');
          }
          const createProvider = await strapi.db
            .query("api::provider.provider")
            .create({
              data: {
                ...(providerData.provider_name && {
                  provider_name: providerData.provider_name
                }),
                domain_id: domainId,
                ...(providerData.location_id && {
                  location_id: providerData.location_id
                }),
                ...(providerData.short_desc && {
                  short_desc: providerData.short_desc
                }),
                ...(providerData.long_desc && {
                  long_desc: providerData.long_desc
                }),
                ...(providerData.logo && { logo: providerData.logo }),
                ...(providerData.provider_id && {
                  provider_id: providerData.provider_id
                }),
                ...(providerData.provider_url && {
                  provider_url: providerData.provider_url
                }),
                category_ids: [categoryId],
                ...(providerData.agents &&
                  providerData.agents.length > 0 && {
                    agents: providerData.agents
                  }),
                ...(providerData.input &&
                  providerData.input.length > 0 && {
                    input: providerData.input
                  }),
                ...(providerData.fullfillments &&
                  providerData.fullfillments.length > 0 && {
                    fullfillments: providerData.fullfillments
                  }),
                ...(providerData.provider_rating && {
                  provider_rating: providerData.provider_rating
                }),
                ...(providerData.payment_methods && {
                  payment_methods: providerData.payment_methods
                }),
                publishedAt: new Date()
              }
            });
          console.log("Created provider: ", createProvider);

          const createScProduct = await strapi.entityService.create(
            "api::sc-product.sc-product",
            {
              data: {
                min_price: item.price,
                stock_quantity: 0,
                quantity_unit: "KWh",
                currency: item.currency,
                publishedAt: new Date()
              }
            }
          );
          console.log("createScProduct::", createScProduct);

          const createEnergyItem = await strapi.entityService.create(
            "api::item.item",
            {
              data: {
                name: item?.name || "Energy",
                short_desc:
                  item?.short_desc ||
                  "Excess power from my rooftop system to sell",
                code: item?.code || "energy",
                sc_retail_product: createScProduct.id,
                provider: createProvider.id,
                max_quantity: 1,
                min_quantity: 20,
                publishedAt: new Date()
              }
            }
          );
          console.log("Created item: ", createEnergyItem);

          const createFullfillmentIds = await strapi.entityService.create(
            "api::item-fulfillment.item-fulfillment",
            {
              data: {
                item_id: createEnergyItem?.id,
                fulfilment_id: 1,
                location_id: createProvider?.location_id?.id,
                timestamp: new Date(),
                publishedAt: new Date()
              }
            }
          );

          console.log("createFullfillmentIds::", createFullfillmentIds);
          const nextYear = new Date();
          nextYear.setFullYear(nextYear.getFullYear() + 1);

          const createFullfillmentIdsNextYear =
            await strapi.entityService.create(
              "api::item-fulfillment.item-fulfillment",
              {
                data: {
                  item_id: createEnergyItem.id,
                  fulfilment_id: 2,
                  location_id: createProvider?.location_id?.id,
                  timestamp: nextYear.toISOString(),
                  publishedAt: new Date()
                }
              }
            );
          console.log(
            "createFullfillmentIdsNextYear::",
            createFullfillmentIdsNextYear
          );
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
                taxanomy: "CATEGORY",
                taxanomy_id: categoryId.toString(),
                item: createEnergyItem.id,
                publishedAt: new Date()
              }
            }
          );
          console.log("createdCAttrTagRelation:: ", createdCAttrTagRelation);
          await trx.commit();
          return (result = createProvider);
        } catch (error) {
          await trx.rollback();
          console.log("Failed to add catalogue: ", error);
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
      if (!providerId) {
        throw new Error("Provider not found to add trade");
      }
      const provider = await strapi.entityService.findOne(
        "api::provider.provider",
        providerId,
        {
          populate: ["items", "items.sc_retail_product"]
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
        const {
          quantity,
          unit,
          item_name,
          price,
          trusted_source = false,
          cred_required = false,
          recurring = false
        } = tradeDto;
        if(quantity < 0) {
            throw new Error('Quantity must be greater than 0');
        }
        const updateScProduct = await strapi.entityService.update(
          "api::sc-product.sc-product",
          id,
          {
            data: {
              stock_quantity:
                Number(provider.items[0].sc_retail_product.stock_quantity) +
                Number(quantity),
              min_price: price.toString(),
              quantity_unit: unit,
              trusted_source,
              cred_required,
              recurring,
              publishedAt: new Date()
            }
          }
        );
        if (provider.items[0].name !== item_name) {
          //update item name
          const updatedItem = await strapi.entityService.update(
            "api::item.item",
            id,
            {
              data: {
                name: item_name,
                publishedAt: new Date()
              }
            }
          );
        }
        return { "sc-product": updateScProduct, provider };
      }
    } catch (error) {
      throw new Error(`Unable to add trade data', ${error}`);
    }
  },
  async getDashboard(customerId: number, startDate: string, endDate: string) {
    try {
      console.log("Dashboard body: ", customerId, startDate, endDate);

      const dashboardData = await axios.post(
        `${process.env.MDM_URL}/getStatistics`,
        {
          customerId,
          startDate,
          endDate
        }
      );
      return dashboardData.data;
    } catch (error) {
      console.log("Error dash: ", error);

      throw new Error("Failed to fetch dashboard data from MDM");
    }
  },
  async getTrade({ tradeId, agentId }) {
    try {
      let trades = await strapi.entityService.findMany("api::trade.trade", {
        filters: {
          ...(tradeId && {
            id: tradeId
          }),
          agent: {
            id: agentId
          }
        },
        populate: {
          trade_events: true
        },
        sort: { updatedAt: 'desc' }
      });
      console.log("Trade:, ", trades);

      if (!trades || !trades.length) {
        throw new Error("Trade not found");
      }
      const updatedTrades = trades.map(trade => ({
        ...trade,
        status: 'SUCCESS'
      }));
      return tradeId ? (updatedTrades && updatedTrades.length ? updatedTrades[0] : []) : updatedTrades;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async addTradeLog({ transactionId, event_name, description, data = {} }) {
    try {
      if (!transactionId) {
        throw new Error("Transaction id not provided to add trade logs");
      }
      //fetch trade details by transactionId
      const trade = await strapi.entityService.findMany("api::trade.trade", {
        filters: {
          transaction_id: transactionId
        }
      });

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
          }
        }
      );
      return tradeEvent;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async deleteDerById(agentProfileId: number, derId: number) {
    try {
      console.log(
        "AgentProfileId: ",
        agentProfileId,
        "-- ",
        derId,
        ": ",
        derId
      );

      if (!derId) {
        throw new Error("Der Id not provided to delete");
      }
      //check if this der belongs to this user or not
      let agentProfile = await strapi.entityService.findMany(
        "api::agent-profile.agent-profile",
        {
          filters: {
            id: agentProfileId,
            ders: {
              id: derId
            }
          },
          populate: ["ders"]
        }
      );

      if (agentProfile && agentProfile.length) {
        const der = await strapi.entityService.delete("api::der.der", derId);
        return der;
      } else {
        throw new Error(
          "This der is not linked to your profile. You cannot delete it"
        );
      }
    } catch (error) {
      console.log("Delete DER error: ", error);

      throw new Error(`${error.message}`);
    }
  },
  async uploadUserCredential(jsonFile, user) {
    try {
      let result = {};
      await strapi.db.transaction(async ({ trx }) => {
        try {
          const fileContent = await fs.readFile(jsonFile.path, "utf8");
          const vc = JSON.parse(fileContent);
          console.log("Parsed JSON file: ", vc);

          // NOTE: Commenting the verify certificates since DHIWAY api is down, uncomment it later

          // Step 1: Verify credentials
          // const getCreds = await axios.post(
          //   `${process.env.VERIFY_CRED_URL}`,
          //   vc
          // );
          // console.log("Credential Verified:", getCreds.data);
          // const verfiedCred = getCreds.data;
          // if (!verfiedCred || verfiedCred.error.length) {
          //   throw new Error(
          //     "Could not verify the provided credential, Unable to upload it!"
          //   );
          // }
          // Step 4: Create the der entity and associate the uploaded file
          const cred = await strapi.entityService.create(
            "api::credential.credential",
            {
              data: {
                vc,
                publishedAt: new Date()
              }
            }
          );

          console.log("Cred id: ", cred.id);

          const agentProfile = await strapi.entityService.update(
            "api::agent-profile.agent-profile",
            user.agent.agent_profile.id,
            {
              data: {
                credentials: {
                  connect: [cred.id]
                },
                publishedAt: new Date()
              }
            }
          );
          console.log("Agent profile: ", agentProfile);

          // Step 6: Commit the transaction
          await trx.commit();
          return (result = cred);
        } catch (error) {
          await trx.rollback();
          throw error;
        }
      });
      return result;
    } catch (error) {
      // Roll back the transaction in case of error
      console.error("Error in uploading credential:", error);
      throw new Error(`${error.message}`);
    }
  },
  getUserProfile(user) {
    const agentProfile = user.agent?.agent_profile;
    const agent = user.agent;
    if(!agent || !agentProfile) {
      throw new Error('No Profile Exists for this user');
    }
    return {
      fullname: agent.first_name,
      customer_id: agentProfile.customer_id,
      address: agentProfile.address,
      phone_number: agentProfile.phone_number,
      email: user.email,
      utility_name: agentProfile.utility_name
    }
  },
  async updateUserProfile({ fullname, address }, user) {
    try {
      const agentProfile = user.agent?.agent_profile;
      const agent = user.agent;
      if (!agent || !agentProfile) {
        throw new Error('No Profile Exists for this user');
      }
      const updatedAgent = await strapi.entityService.update(
        "api::agent.agent",
        user.agent.id,
        {
          data: {
            first_name: fullname,
            publishedAt: new Date()
          }
        }
      );
      console.log('Updated Agent: ', updatedAgent);
      const updatedProfile = await strapi.entityService.update(
        "api::agent-profile.agent-profile",
        user.agent.agent_profile.id,
        {
          data: {
            address,
            publishedAt: new Date()
          }
        }
      );
      console.log('Updated Agent Profile: ', updatedProfile);
      return {
        fullname,
        address
      }
    } catch (error) {
      console.log('Failed to update user profile: ', error);
      throw new Error(`Failed to update user profile: ${error.message}`);
    }
  },
  async getTradePreference(user) {
    try {
      const provider = user?.agent?.provider_id;
      if(!provider) {
        throw new Error('No Provider found');
      }
      const providerId = provider.id;
      const providerData = await strapi.entityService.findOne(
        "api::provider.provider",
        providerId,
        {
          populate: ["items", "items.sc_retail_product"]
        }
      );
      if(providerData.items.length > 0) {
        const prefData = providerData.items[0].sc_retail_product;
        if(!prefData) {
          throw new Error('No preference found');
        }
        return {
          prefId: prefData.id,
          price: prefData.min_price,
          quantity: prefData.stock_quantity,
          unit: prefData.quantity_unit,
          trusted_source: prefData.trusted_source,
          cred_required: prefData.cred_required,
          recurring: prefData.recurring
        } 
      }
      throw new Error('No preference found');
    } catch(error) {
      console.log('Get Trade Pref Error: ', error.message);
      throw new Error(error.message);
    }
  },
  async deleteCredById(agentProfileId, credId) {
    try {
      if (!credId) {
        throw new Error("Der Id not provided to delete");
      }
      //check if this credential belongs to this user or not
      let agentProfile = await strapi.entityService.findMany(
        "api::agent-profile.agent-profile",
        {
          filters: {
            id: agentProfileId,
            credentials: {
              id: credId
            }
          },
          populate: ["credentials"]
        }
      );

      if (agentProfile && agentProfile.length) {
        const der = await strapi.entityService.delete("api::credential.credential", credId);
        return der;
      } else {
        throw new Error(
          "This Credential is not linked to your profile. You are not authorized to delete it!"
        );
      }
    } catch (error) {
      console.log('Delete Cred Error: ', error);
      throw new Error(`Unable to delete Cred: ${error.message}`);
    }
  },
  async updateTradePreference({ quantity, price, unit, trusted_source, cred_required, recurring }, user) {
    try {
      const provider = user?.agent?.provider_id;
      if(!provider) {
        throw new Error('No Provider found');
      }
      const providerId = provider.id;
      const providerData = await strapi.entityService.findOne(
        "api::provider.provider",
        providerId,
        {
          populate: ["items", "items.sc_retail_product"]
        }
      );
      if(providerData.items.length > 0) {
        const prefData = providerData.items[0].sc_retail_product;
        if(!prefData) {
          throw new Error('No preference found');
        }
        const updatedTradePreference = await strapi.entityService.update(
          "api::sc-product.sc-product", 
          prefData.id,
          {
            data: {
              ...(quantity && { stock_quantity: Number(quantity) }),
              ...(price && { min_price: price.toString() }),
              ...(unit && { quantity_unit: unit }),
              ...(trusted_source && { trusted_source }),
              ...(cred_required && { cred_required }),
              ...(recurring && { recurring }),
              publishedAt: new Date()
            }
          }
        )
        return {
          prefId: updatedTradePreference.id,
          price: updatedTradePreference.min_price,
          quantity: updatedTradePreference.stock_quantity,
          unit: updatedTradePreference.quantity_unit,
          trusted_source: updatedTradePreference.trusted_source,
          cred_required: updatedTradePreference.cred_required,
          recurring: updatedTradePreference.recurring
        } 
      }
      throw new Error('No preference found');
    } catch(error) {
      console.log('Update Trade Pref Error: ', error.message);
      throw new Error(error.message);
    }
  },
});
