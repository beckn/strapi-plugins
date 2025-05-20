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
  async mitigationActivate(payload: any) {
    try {
      const matchedOrders = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            order_id: {
              filters: {
                items: {
                  name: "Home Battery Discharge Program"
                }
              }
            }
          }
        }
      );
      return matchedOrders;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
});
