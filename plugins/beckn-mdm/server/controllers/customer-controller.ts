import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('beckn-mdm')
      .service('myService')
      .getWelcomeMessage();
  },
  async getCustomer(ctx) {
    try {
      const customerService = strapi
        .plugin("beckn-mdm")
        .service("customerService");
      const result = await customerService.getCustomer(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getStatistics(ctx) {
    try {
      const customerService = strapi
       .plugin("beckn-mdm")
       .service("customerService");
      const result = await customerService.getStatistics(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
