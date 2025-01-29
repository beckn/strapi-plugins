import { Strapi } from "@strapi/strapi";
const fs = require("fs").promises;
import axios from "axios";
const bcrypt = require('bcryptjs');

export default ({ strapi }: { strapi: Strapi }) => ({
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
          console.error("Error in uploading credential:", error);
          throw new Error(`${error.message}`);
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
                console.log(`No Ders found for this user`);
                return [];
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
});
