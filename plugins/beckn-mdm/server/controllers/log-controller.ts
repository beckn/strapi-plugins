import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async createConsumptionLog (requestBody) {
    try {
      const logService = strapi
        .plugin("beckn-mdm")
        .service("logService");
      const result = await logService.createConsumptionLog(requestBody);
      return result;
    } catch (error) {
      throw error;
    }
  },
  async createProductionLog (requestBody) {
    try {
      const logService = strapi
        .plugin("beckn-mdm")
        .service("logService");
      const result = await logService.createProductionLog(requestBody);
      return result;
    } catch (error) {
      throw error;
    }
  }
});
