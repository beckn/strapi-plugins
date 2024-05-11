import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("driver-app")
      .service("myService")
      .getWelcomeMessage();
  },
  async login(ctx) {
    try {
      const driverService = strapi
        .plugin("driver-app")
        .service("driverProfileService");
      const result = await driverService.login(ctx.request.body);
      ctx.body = result;
    } catch (error) {    
      ctx.badRequest(error.message);
    }

  },
  async create(ctx) {
    console.log('Inside create:: ', ctx.state.user);
    ctx.body = ctx.state.user;
  }
});
