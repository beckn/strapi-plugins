// @ts-nocheck
import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createOrderInOrderHistory(ctx: any) {
    try {
      const orderHistoryService = strapi
        .plugin("unified-beckn-energy")
        .service("orderHistoryService");

      const processedData = orderHistoryService.buildData({
        ...ctx.request.body,
        user: ctx.state.user.id
      });
      console.log(processedData);
      const createOrderHistoryResponse = await strapi.entityService.create(
        "api::order-bap.order-bap",
        {
          data: { ...processedData, publishedAt: new Date() }
        }
      );
      return (ctx.body = createOrderHistoryResponse);
    } catch (error) {
      console.log(error);
      ctx.badRequest(error.message);
    }
  },
  async getOrderHistory(ctx: any) {
    try {
      const filters = {
        ...ctx.query.filters,
        user: parseInt(ctx.state.user.id)
      };
      console.log(filters);

      const createOrderHistoryResponse = await strapi.entityService.findMany(
        "api::order-bap.order-bap",
        {
          filters: filters
        }
      );

      return (ctx.body = createOrderHistoryResponse);
    } catch (error) {
      console.log(error);
      ctx.badRequest(error.message);
    }
  }
});
