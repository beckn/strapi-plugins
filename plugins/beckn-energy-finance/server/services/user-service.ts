import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  
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
                value: `${Number(price)}`,
                publishedAt: new Date()
              }
            }
          );
          const createTaxeBreakup = await strapi.entityService.create(
            "api::price-bareakup.price-bareakup",
            {
              data: {
                title: "TAXES",
                currency: "INR",
                value: `${Number(price) * 0.18}`,
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
      const providerId = user?.agent?.provider_id?.id;
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
});
