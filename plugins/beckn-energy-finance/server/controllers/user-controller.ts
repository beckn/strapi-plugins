import { Strapi } from "@strapi/strapi";
export default ({ strapi }: { strapi: Strapi }) => ({
  async createRentCatalogue(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const { providerDetails, walletId, startTime, endTime, price } = ctx.request.body;
      const result = await userService.createRentCatalogue(
        ctx.state.user,
        providerDetails,
        walletId,
        startTime,
        endTime,
        price
      );
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getRentCatalogues(ctx) {
    try {
      const userService = strapi
        .plugin("unified-beckn-energy")
        .service("userService");
      const result = await userService.getRentCatalogues(ctx.state.user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
