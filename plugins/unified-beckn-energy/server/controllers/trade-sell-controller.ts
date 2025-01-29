import { Strapi } from "@strapi/strapi";
export default ({ strapi }: { strapi: Strapi }) => ({
  
  async addTradeRequest(ctx) {
    try {
      const tradeSellService = strapi
        .plugin("unified-beckn-energy")
        .service("tradeSellService");
      const providerId = ctx.state.user.agent?.provider_id?.id;
      const userId = ctx.state.user.id;
      const result = await tradeSellService.addTradeRequest(ctx.request.body, {
        providerId,
        userId
      });
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getTrade(ctx) {
    try {
      const tradeSellService = strapi
        .plugin("unified-beckn-energy")
        .service("tradeSellService");
      const { id: tradeId } = ctx.request.query;
      const agentId = ctx.state.user.agent.id;
      const result = await tradeSellService.getTrade({ tradeId, agentId });
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getTradePreference(ctx) {
    try {
      const tradeSellService = strapi
        .plugin("unified-beckn-energy")
        .service("tradeSellService");
      const user = ctx.state.user;
      const result = await tradeSellService.getTradePreference(user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async updateTradePreference(ctx) {
    try {
      const tradeSellService = strapi
        .plugin("unified-beckn-energy")
        .service("tradeSellService");
      const user = ctx.state.user;
      const updateTradePrefDto = ctx.request.body;
      const result = await tradeSellService.updateTradePreference(updateTradePrefDto, user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
