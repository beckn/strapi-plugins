import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async getCountries() {
    try {
      const countriesList = await strapi.entityService.findMany(
        "api::country.country",
        {
          filters: {}
        }
      );
      return countriesList;
    } catch (error) {
      console.log("Error Occured:: ", error.message);

      throw new Error(error.message);
    }
  },
  async getCompanies(payload: any) {
    try {
      const companies = await strapi.entityService.findMany(
        "api::utility-company.utility-company",
        {
          filters: {
            country: {
              code: payload.country_code
            }
          },
          populate: {
            country: {}
          }
        }
      );
      return companies;
    } catch (error) {
      console.log("Error Occured:: ", error.message);

      throw new Error(error.message);
    }
  },
  async mitigationActivate(ctx) {
    try {
      const matchedOrders = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            order_id: {
              items: {
                id: ctx.request.body.itemId
              }
            }
          },
          populate: {
            order_id: {
              populate: {
                items: {}
              }
            }
          }
        }
      );

      const response = await Promise.all(
        matchedOrders.map(async (order) => {
          await strapi.entityService.update(
            "api::order.order",
            order.order_id.id,
            {
              data: {
                bap_id: "bap2-ps-network-deg.becknprotocol.io",
                bap_uri: "https://bap2-ps-network-deg.becknprotocol.io"
              }
            }
          );
          return await strapi.entityService.update(
            "api::order-fulfillment.order-fulfillment",
            order.id,
            {
              data: {
                state_code: "Reduce Load By 30%",
                state_value: "ACTIVATED"
              },
              populate: {
                order_id: {}
              }
            }
          );
        })
      );

      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
});
