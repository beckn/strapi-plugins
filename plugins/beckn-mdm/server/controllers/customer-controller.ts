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
      const mdmService = strapi
        .plugin("beckn-mdm")
        .service("customerService");
      const result = await mdmService.getCustomer(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
