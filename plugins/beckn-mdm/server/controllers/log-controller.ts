import { Strapi } from "@strapi/strapi";
import { ROLES } from "../../constants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createLog() {
    try {
      let customers = await strapi.entityService.findMany("api::customer.customer", {});

      if (!customers?.length) {
        throw new Error("No customer found");
      }

      const logService = strapi.plugin("beckn-mdm").service("logService");
      
      customers.forEach(async (customer) => {
        if (customer.role === ROLES.CONSUMER) {
          const result = await logService.createConsumptionLog(customer);
          console.log("Consumer Log created:", result);
        } else if (customer.role === ROLES.PROSUMER) {
          const result = await logService.createProductionLog(customer);
          console.log("Prosumer Log created:", result);
        }
      });
      return;
    } catch (error) {
      throw error;
    }
  },
});
