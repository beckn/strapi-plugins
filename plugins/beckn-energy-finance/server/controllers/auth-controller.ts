import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async login(ctx) {
    try {
      const authService = strapi
        .plugin("unified-beckn-energy")
        .service("authService");
      const result = await authService.login(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async mobileLogin(ctx) {
    try {
      const authService = strapi
        .plugin("unified-beckn-energy")
        .service("authService");
      const result = await authService.mobileLogin(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
