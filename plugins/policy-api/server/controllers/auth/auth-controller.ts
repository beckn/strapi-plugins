import { Strapi } from "@strapi/strapi";
import { PLUGIN } from "../../../contstants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async auth(ctx) {
    try {
      const authService = strapi
        .plugin(PLUGIN)
        .service("authService");
      const result = await authService.auth(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
