import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async login(ctx) {
    try {
      const authService = strapi
        .plugin("beckn-energy-admin")
        .service("authService");
      const result = await authService.login(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
