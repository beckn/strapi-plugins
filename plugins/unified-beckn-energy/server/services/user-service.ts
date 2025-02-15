import { Strapi } from "@strapi/strapi";
const fs = require("fs").promises;
import axios from "axios";
import { walletTxnType } from "../constant";
const bcrypt = require("bcryptjs");

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
                    credentials: true
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
        const der = await strapi.entityService.delete(
          "api::credential.credential",
          credId
        );
        return der;
      } else {
        throw new Error(
          "This Credential is not linked to your profile. You are not authorized to delete it!"
        );
      }
    } catch (error) {
      console.log("Delete Cred Error: ", error);
      throw new Error(`Unable to delete Cred: ${error.message}`);
    }
  },
  async updateUserProfile({ fullname, address }, user) {
    try {
      const agentProfile = user.agent?.agent_profile;
      const agent = user.agent;
      if (!agent || !agentProfile) {
        throw new Error("No Profile Exists for this user");
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
      console.log("Updated Agent: ", updatedAgent);
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
      console.log("Updated Agent Profile: ", updatedProfile);
      return {
        fullname,
        address
      };
    } catch (error) {
      console.log("Failed to update user profile: ", error);
      throw new Error(`Failed to update user profile: ${error.message}`);
    }
  },
  getUserProfile(user) {
    const agentProfile = user.agent?.agent_profile;
    const agent = user.agent;
    if (!agent || !agentProfile) {
      throw new Error("No Profile Exists for this user");
    }
    return {
      fullname: agent.first_name,
      customer_id: agentProfile.customer_id,
      address: agentProfile.address,
      phone_number: agentProfile.phone_number,
      email: user.email,
      utility_name: agentProfile.utility_name
    };
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
          if (
            createDerDto.type.toUpperCase() !== "PROSUMER" &&
            createDerDto.type.toUpperCase() !== "CONSUMER"
          ) {
            throw new Error("Invalid type provided for creating DER");
          }
          if (!Array.isArray(filesDto)) {
            filesDto = [filesDto];
          }
          const hash = await this.createHashFromFile(filesDto[0].path);

          // Step 1: Generate credentials (as per your existing code)
          const getCreds = await axios.post(`${process.env.ISSUER_URL}/cred`, {
            schemaId:
              "schema:cord:s356EvHMCEdivwpM2srB7s5etUAJB69erN8vHKzoog8E1VkBv",
            properties: {
              type: createDerDto.type,
              category: createDerDto.category,
              proof: hash
            }
          });
          console.log("Credential generated:", getCreds.data);
          // Step 2: Store the credential
          const cred = await strapi.entityService.create(
            "api::credential.credential",
            {
              data: {
                vc: getCreds.data.vc
              }
            }
          );

          const uploadedFiles = await Promise.all(
            filesDto.map(async (fileDto) => {
              const fileToUpload = {
                path: fileDto.path,
                name: fileDto.name,
                type: fileDto.type,
                size: fileDto.size
              };
              return await strapi.plugins.upload.services.upload.upload({
                data: { fileInfo: { name: fileDto.name, type: fileDto.type } },
                files: fileToUpload
              });
            })
          );
          console.log("Uploaded Files:", uploadedFiles);

          if (
            uploadedFiles.some(
              (fileArray) => !fileArray || fileArray.length === 0
            )
          ) {
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
              category: createDerDto.category
            }
          });
          console.log("Created Der id: ", der.id);

          const agentProfile = await strapi.entityService.update(
            "api::agent-profile.agent-profile",
            user.agent.agent_profile.id,
            {
              data: {
                ders: {
                  connect: [der.id]
                },
                publishedAt: new Date()
              }
            }
          );
          console.log("Agent profile updated: ", agentProfile);

          // Step 6: Commit the transaction
          await trx.commit();
          return (result = der);
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
  async getDer({ agentProfileId }) {
    try {
      console.log("Agent profile: ", agentProfileId);

      const agentProfile = await strapi.entityService.findOne(
        "api::agent-profile.agent-profile",
        agentProfileId,
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
        }
      );

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
  async createRentCatalogue(
    user: any,
    providerDetails: any,
    walletId: string,
    startTime: string,
    endTime: string,
    price: string
  ) {
    const agentId = user.agent.id;
    const { provider: providerData, items } = providerDetails.data[0].message;
    const item = items[0];
    try {
      let result = {};
      await strapi.db.transaction(async ({ trx }) => {
        try {
          let providerId = user?.deg_wallet?.provider?.id;
          let createdProvider = user?.deg_wallet?.provider;

          if (!providerId) {
            //no provider found for this user
            providerData.agents = [agentId];
            //create category or get category id
            const category = await strapi.entityService.findMany(
              "api::category.category",
              {
                filters: {
                  value: "BATTERY RENTAL",
                  category_code: "BATTERY_RENTAL"
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
                    title: "BATTERY RENTAL",
                    value: "BATTERY RENTAL",
                    category_code: "BATTERY_RENTAL",
                    publishedAt: new Date()
                  }
                }
              );
              console.log("createdCategory:: ", createdCategory);
              categoryId = createdCategory.id;
            }

            const domain = await strapi.entityService.findMany(
              "api::domain.domain",
              {
                filters: {
                  DomainName: "deg:rental"
                }
              }
            );
            let domainId;
            if (domain && domain.length) {
              domainId = domain[0].id;
            } else {
              throw new Error("Create Catalogue: Domain Not Found");
            }
            const createPaymentMethod = await strapi.entityService.create(
              "api::payment-method.payment-method",
              {
                data: {
                  type: "Cash on Delivery",
                  description: "COD Payment Method",
                  payment_gateway: "",
                  gateway_url: "",
                  bank_account_number: "",
                  bank_code: "",
                  bank_name: "",
                  publishedAt: new Date().toISOString()
                }
              }
            );
            console.log(
              "Created First Payment Method: ",
              JSON.stringify(createPaymentMethod)
            );
            const createPaymentMethod2 = await strapi.entityService.create(
              "api::payment-method.payment-method",
              {
                data: {
                  type: "UEI Wallet",
                  description: "UEI Wallet",
                  payment_gateway: "UEI Wallet Payment Gateway",
                  gateway_url: "https://uei-wallet.in",
                  bank_account_number: "UEI Wallet Payment Bank Account Number",
                  bank_code: "UEI Wallet Bank Code",
                  bank_name: "UEI Wallet Bank Name",
                  publishedAt: new Date().toISOString()
                }
              }
            );
            console.log(
              "Created Second Payment Method: ",
              JSON.stringify(createPaymentMethod2)
            );
            let imageId;
            if (
              providerData.images &&
              providerData.images.length &&
              providerData.images[0].url
            ) {
              const createImageUrlEntry = await strapi.entityService.create(
                "api::media.media",
                {
                  data: {
                    url: providerData.images[0].url,
                    publishedAt: new Date()
                  }
                }
              );
              imageId = createImageUrlEntry.id;
              console.log("createImageUrlEntry===>", createImageUrlEntry);
            }
            const createProvider = await strapi.db
              .query("api::provider.provider")
              .create({
                data: {
                  provider_name:
                    `${user?.agent?.first_name} Battery Rental Company` ||
                    providerData.name,
                  domain_id: domainId,
                  ...(imageId && { logo: imageId }),
                  ...(providerData.short_desc && {
                    short_desc: providerData.short_desc
                  }),
                  ...(providerData.long_desc && {
                    long_desc: providerData.long_desc
                  }),
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
                  ...(providerData.rating && {
                    provider_rating: providerData.rating
                  }),
                  payment_methods: [
                    createPaymentMethod.id,
                    createPaymentMethod2.id
                  ],
                  publishedAt: new Date()
                }
              });
            console.log("Created provider: ", createProvider);
            providerId = createProvider.id;
            createdProvider = createProvider;

            //Link Wallet to provider
            const existingWallet = await strapi.entityService.findMany(
              "api::deg-wallet.deg-wallet",
              {
                filters: {
                  users_permissions_user: user.id
                },
                populate: {
                  users_permissions_user: {}
                }
              }
            );

            if (existingWallet && existingWallet.length) {
              const wallet = await strapi.entityService.update(
                "api::deg-wallet.deg-wallet",
                existingWallet[0].id,
                {
                  data: {
                    provider: providerId
                  }
                }
              );
              console.log("updatedWallet::", wallet);
            }

            // const createdWallet = await strapi.entityService.create(
            //   "api::deg-wallet.deg-wallet",
            //   {
            //     data: {
            //       users_permissions_user: user.id,
            //       provider: providerId,
            //       energy_identities_consent: true,
            //       energy_assets_consent: true,
            //       energy_transactions_consent: true,
            //       deg_wallet_id: walletId,
            //       publishedAt: new Date()
            //     }
            //   }
            // );
          }

          const createBasePricePerHr = await strapi.entityService.create(
            "api::price-bareakup.price-bareakup",
            {
              data: {
                title: "BASE PRICE (Rs. Per Hour)",
                currency: "INR",
                value: Number(price),
                publishedAt: new Date()
              }
            }
          );
          const createTaxeBreakup = await strapi.entityService.create(
            "api::price-bareakup.price-bareakup",
            {
              data: {
                title: "Taxes",
                currency: "INR",
                value: Number(price) * 0.18,
                publishedAt: new Date()
              }
            }
          );

          const createScProduct = await strapi.entityService.create(
            "api::sc-product.sc-product",
            {
              data: {
                min_price: Number(price),
                stock_quantity: 1000,
                quantity_unit: "per hour",
                currency: item?.price?.currency || "INR",
                price_bareakup_ids: [
                  createBasePricePerHr.id,
                  createTaxeBreakup.id
                ],

                publishedAt: new Date()
              }
            }
          );
          console.log("createScProduct::", createScProduct);

          //Add Image to item

          let itemImageId;
          if (item.images && item.images.length && item.images[0].url) {
            const createItemImageUrlEntry = await strapi.entityService.create(
              "api::media.media",
              {
                data: {
                  url: item.images[0].url,
                  publishedAt: new Date()
                }
              }
            );
            itemImageId = createItemImageUrlEntry.id;
            console.log("createItemImage===>", createItemImageUrlEntry);
          }

          const createEnergyItem = await strapi.entityService.create(
            "api::item.item",
            {
              data: {
                name: item?.name || "Battery Rent",
                short_desc:
                  item?.short_desc ||
                  "Excess power from my battery system to sell",
                code: item?.code || "energy",
                image: [itemImageId],
                sc_retail_product: createScProduct.id,
                provider: providerId,
                max_quantity: 1,
                min_quantity: 20,
                publishedAt: new Date()
              }
            }
          );
          console.log("Created item: ", createEnergyItem);
          //Create Fulfillment
          const startFullfillment = await strapi.entityService.create(
            "api::fulfilment.fulfilment",
            {
              data: {
                type: "RENTAL_START",
                rating: "4",
                rateable: true,
                state_code: "timestamp",
                state_value: startTime,
                timestamp: new Date().toISOString(),
                publishedAt: new Date().toISOString()
              }
            }
          );
          console.log("endFullfillment===>", startFullfillment);

          const endFullfillment = await strapi.entityService.create(
            "api::fulfilment.fulfilment",
            {
              data: {
                type: "RENTAL_END",
                rating: "4",
                rateable: true,
                state_code: "timestamp",
                state_value: endTime,
                timestamp: new Date().toISOString(),
                publishedAt: new Date().toISOString()
              }
            }
          );
          console.log("endFullfillment===>", endFullfillment);

          // create item-fulfillment
          const startItemFullfillment = await strapi.entityService.create(
            "api::item-fulfillment.item-fulfillment",
            {
              data: {
                item_id: createEnergyItem.id,
                fulfilment_id: startFullfillment.id,
                publishedAt: new Date().toISOString()
              }
            }
          );
          console.log("startItemFullfillment===>", startItemFullfillment);

          const endItemFulfillment = await strapi.entityService.create(
            "api::item-fulfillment.item-fulfillment",
            {
              data: {
                item_id: createEnergyItem?.id,
                fulfilment_id: endFullfillment.id,
                publishedAt: new Date()
              }
            }
          );
          console.log("endItemFulfillment::", endItemFulfillment);
          await trx.commit();
          return (result = createdProvider);
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
  async getRentCatalogues(user: any) {
    try {
      const providerId = user?.deg_wallet?.provider?.id;
      if (!providerId) {
        throw new Error("No Provider is linked to this user to get catalogues");
      }
      const providerData = await strapi.entityService.findOne(
        "api::provider.provider",
        providerId,
        {
          populate: {
            items: {
              populate: {
                sc_retail_product: true
              }
            }
          }
        }
      );
      return providerData;
    } catch (error) {
      console.log("Failed to fetch rent catalogues: ", error);
      throw error;
    }
  },
  async getWalletBalance(userId: number) {
    try {
      const walletData = await strapi.entityService.findMany(
        "api::wallet.wallet",
        {
          filters: {
            user: {
              id: userId
            }
          },
          sort: { updatedAt: "desc" }
        }
      );
      if (!walletData || !walletData.length) {
        return {
          data: {
            balance: 0
          }
        };
      }
      const balance = walletData[0].closing_balance;
      return {
        data: {
          balance
        }
      };
    } catch (error) {
      console.error("Error in get wallet balance:", error);
      throw new Error(`Error while wallet balance: ${error.message}`);
    }
  },
  async getWalletTransactions(
    userId: number,
    pageNo: number | string,
    startDate: string,
    endDate: string
  ) {
    try {
      const start = pageNo ? Number(pageNo) - 1 : 0;
      const walletData = await strapi.entityService.findMany(
        "api::wallet.wallet",
        {
          filters: {
            user: {
              id: userId
            },
            ...(startDate || endDate
              ? {
                  updatedAt: {
                    ...(startDate && {
                      $gte: new Date(
                        new Date(startDate).setHours(0, 0, 0, 0)
                      ).toISOString()
                    }),
                    ...(endDate && {
                      $lte: new Date(
                        new Date(endDate).setHours(23, 59, 59, 999)
                      ).toISOString()
                    })
                  }
                }
              : {})
          },
          start: start * 10,
          limit: 10,
          sort: { updatedAt: "desc" }
        }
      );
      if (!walletData || !walletData.length) {
        return [];
      }
      return walletData;
    } catch (error) {
      console.error("Error in get wallet transactions:", error);
      throw new Error(`Error while wallet transactions: ${error.message}`);
    }
  },
  async getUserPreference(user) {
    try {
      if (!user.agent || !user.agent.agent_profile) {
        throw new Error("No user profile found!");
      }
      const { cred_required, trusted_source } = user.agent.agent_profile;
      {
        return {
          trustedSource: trusted_source,
          credRequired: cred_required
        };
      }
    } catch (error) {
      console.log("Get User Pref Error: ", error.message);
      throw new Error(error.message);
    }
  },
  async updateUserPreference({ trustedSource, credRequired }, user) {
    try {
      if (!user.agent || !user.agent.agent_profile) {
        throw new Error("No user profile found!");
      }
      const updatedTradePreference = await strapi.entityService.update(
        "api::agent-profile.agent-profile",
        user.agent.agent_profile.id,
        {
          data: {
            trusted_source: trustedSource,
            cred_required: credRequired,
            publishedAt: new Date()
          }
        }
      );
      return {
        trustedSource: updatedTradePreference.trusted_source,
        credRequired: updatedTradePreference.cred_required
      };
    } catch (error) {
      console.log("Update User Pref Error: ", error.message);
      throw new Error(error.message);
    }
  },
  async updateWalletFund(
    userId: number,
    transactionType: string,
    transactionAmount: number
  ) {
    try {
      //Fetch latest wallet fund
      if (!Object.values(walletTxnType).includes(transactionType)) {
        throw new Error(`Invalid transaction type: ${transactionType}.`);
      }
      const walletData = await strapi.entityService.findMany(
        "api::wallet.wallet",
        {
          filters: {
            user: {
              id: userId
            }
          },
          limit: 1,
          sort: { updatedAt: "desc" }
        }
      );
      let existingBalance = 0;
      if (walletData && walletData.length) {
        existingBalance = walletData[0].closing_balance;
      }
      let updatedBalance;
      if (transactionAmount < 0) {
        throw new Error("Transaction Amount must be greater than 0");
      }
      if (transactionType === walletTxnType.ADD) {
        const resp = await strapi.entityService.create("api::wallet.wallet", {
          data: {
            user: userId,
            opening_balance: existingBalance,
            closing_balance: existingBalance + transactionAmount,
            transaction_amount: transactionAmount,
            transaction_type: walletTxnType.ADD,
            publishedAt: new Date()
          }
        });
        updatedBalance = existingBalance + transactionAmount;
      } else if (transactionType === walletTxnType.WITHDRAW) {
        if (existingBalance < transactionAmount) {
          throw new Error(
            "You do not have sufficient balance to withdraw this amount!"
          );
        }
        const resp = await strapi.entityService.create("api::wallet.wallet", {
          data: {
            user: userId,
            opening_balance: existingBalance,
            closing_balance: existingBalance - transactionAmount,
            transaction_amount: transactionAmount,
            transaction_type: walletTxnType.WITHDRAW,
            publishedAt: new Date()
          }
        });
        updatedBalance = existingBalance - transactionAmount;
      }
      return {
        message: "Wallet Updated Successfully",
        data: {
          updatedBalance
        }
      };
    } catch (error) {
      console.log("Update Wallet: ", error.message);
      throw new Error(error.message);
    }
  }
});
