import { Strapi } from "@strapi/strapi";
export default ({ strapi }: { strapi: Strapi }) => ({
  async getFinanceCatalogues(ctx) {
    try {
      const userService = strapi
        .plugin("beckn-energy-finance")
        .service("userService");
      const result = await userService.getFinanceCatalogues(ctx.state.user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
