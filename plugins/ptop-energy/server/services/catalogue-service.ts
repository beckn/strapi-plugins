import { Strapi } from "@strapi/strapi";
import { AddEnergyEntry, Provider } from "../types/catalogue.types";

export default ({ strapi: any }: { strapi: Strapi }) => {
  return {
    async createCatalogue(providerData: Provider) {
      try {
        const createProvider = await strapi.db
          .query("api::provider.provider")
          .create({
            data: {
              ...(providerData.provider_name && {
                provider_name: providerData.provider_name
              }),
              ...(providerData.domain_id && {
                domain_id: providerData.domain_id
              }),
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
              ...(providerData.category_ids && {
                category_ids: providerData.category_ids
              }),
              ...(providerData.agents &&
                providerData.agents.length > 0 && {
                  agents: providerData.agents
                }),
              ...(providerData.items && { items: providerData.items }),
              ...(providerData.input &&
                providerData.input.length > 0 && { input: providerData.input }),
              ...(providerData.fullfillments &&
                providerData.fullfillments.length > 0 && {
                  fullfillments: providerData.fullfillments
                }),
              ...(providerData.provider_rating && {
                provider_rating: providerData.provider_rating
              }),
              ...(providerData.payment_methods && {
                payment_methods: providerData.payment_methods
              })
            }
          });
        return createProvider;
      } catch (error) {
        console.error("Error in creating catalogue:", error);
        throw error;
      }
    },
    async createCatalogueEnergyEntry(energyData: AddEnergyEntry) {
      try {
        console.log("hello their");
        const provider = await strapi.entityService.findMany(
          "api::provider.provider",
          {
            filters: {
              short_desc: energyData.phone
            },
            populate: ["items", "items.sc_retail_product"]
          }
        );

        if (!provider.length) {
          throw new Error("Provider is not Registered as Seller");
        }
        console.log("provider::", provider);
        console.log(
          "provider.items.sc_retail_product.sku::",
          JSON.stringify(provider[0].items[0])
        );

        if (provider[0].items.length > 0) {
          let id = provider[0].items[0].sc_retail_product.id;
          const updateScProduct = await strapi.entityService.update(
            "api::sc-product.sc-product",

            id,
            {
              data: {
                stock_quantity:
                  Number(
                    provider[0].items[0].sc_retail_product.stock_quantity
                  ) + Number(energyData.unit)
              }
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
                stock_quantity: 10,
                sku: energyData.unit.toString(),
                quantity_unit: "kWH",
                publishedAt: new Date().toISOString()
              }
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
                provider: provider[0].id,
                max_quantity: 10,
                min_quantity: 20,
                publishedAt: new Date().toISOString()
              }
            }
          );

          const createFullfillmentIds = await strapi.entityService.create(
            "api::item-fulfillment.item-fulfillment",
            {
              data: {
                item_id: createEnergyItem.id,
                fulfilment_id: 1,
                location_id: provider[0].location_id.id,
                timestamp: new Date().toISOString()
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
                  location_id: provider[0].location_id.id,
                  timestamp: nextYear.toISOString()
                }
              }
            );

          return { item: createEnergyItem, "sc-product": createScProduct };
        }
      } catch (error) {
        console.error("Error in updating catalogue:", error);
        throw error;
      }
    }
  };
};
