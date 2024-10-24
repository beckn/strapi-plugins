import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async createConsumptionLog (ctx) {
    try {
      const logService = strapi
        .plugin("beckn-mdm")
        .service("logService");
      const result = await logService.createConsumptionLog(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async createProductionLog (ctx) {
    try {
      const logService = strapi
        .plugin("beckn-mdm")
        .service("logService");
      const result = await logService.createProductionLog(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
