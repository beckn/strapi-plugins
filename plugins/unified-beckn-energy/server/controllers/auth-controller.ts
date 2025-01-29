import { Strapi } from '@strapi/strapi';

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
  async signup(ctx) {
    try {
      const authService = strapi
        .plugin("unified-beckn-energy")
        .service("authService");
      const result = await authService.signup(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async verifyOtp(ctx) {
    try {
      const authService = strapi
        .plugin("unified-beckn-energy")
        .service("authService");
      const { otp } = ctx.request.body;
      const userId = ctx.state.user.id;
      const result = await authService.verifyOtp(userId, otp);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
