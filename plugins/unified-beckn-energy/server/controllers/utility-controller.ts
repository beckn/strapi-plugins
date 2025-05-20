import { Strapi } from "@strapi/strapi";
import { getRegistryRecords } from "../utils/dhiway-utils";
export default ({ strapi }: { strapi: Strapi }) => ({
  async getUtilityCompanies(ctx) {
    try {
      if (!ctx?.query?.country_code) {
        ctx.status = 400;
        ctx.body = { message: "Country is required" };
        return;
      }

      const utilityService = strapi
        .plugin("unified-beckn-energy")
        .service("utilityService");

      const result = await utilityService.getCompanies({
        country_code: ctx?.query?.country_code
      });
      ctx.status = 200;
      ctx.body = {
        utility_companies: result
      };
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: error.message };
    }
  },
  async getCountries(ctx) {
    try {
      const utilityService = strapi
        .plugin("unified-beckn-energy")
        .service("utilityService");

      const result = await utilityService.getCountries();
      ctx.status = 200;
      ctx.body = {
        countries: result
      };
      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: error.message };
    }
  },
  async mitigationActivate(ctx) {
    try {
      const utilityService = strapi
        .plugin("unified-beckn-energy")
        .service("utilityService");

      const matcherOrders = await utilityService.mitigationActivate({});
      ctx.status = 200;
      ctx.body = {
        countries: matcherOrders
      };
      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: error.message };
      return;
    }
  }
});
