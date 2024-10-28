import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createTrade(ctx: any) {
    try {
      const {
        quantity,
        unit,
        item_name,
        trusted_source,
        cred_required,
        recurring,
        domain
      } = ctx.request.body;
      const tradeService = strapi
        .plugin("beckn-trade-bap")
        .service("tradeService");
      const createTradeResp = await tradeService.createTrade({
        quantity,
        unit,
        item_name,
        trusted_source,
        cred_required,
        recurring,
        userId: ctx.state.user.id,
        domain
      });
      ctx.body = createTradeResp;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getTrade(ctx: any) {
    try {
      const { id = null } = ctx.request.query;
      const tradeService = strapi
        .plugin("beckn-trade-bap")
        .service("tradeService");
      const trades = await tradeService.getTrade(id, ctx.state.user.id);
      ctx.body = trades;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async startTrade(ctx: any) {
    try {
      ctx.body = { message: "ACK" };
      if (ctx.state.user.role.name !== "Admin") {
        throw new Error("Only admin Can start the trade");
      }
      const tradeService = strapi
        .plugin("beckn-trade-bap")
        .service("tradeService");
      const trades = await tradeService.startTrade();
      //   ctx.body = trades;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getPendingTrades(ctx: any) {
    try {
      if (ctx.state.user.role.name !== "Admin") {
        throw new Error("Only admin Can Access this Details");
      }
      const tradeService = strapi
        .plugin("beckn-trade-bap")
        .service("tradeService");
      const trades = await tradeService.getPendingTrades();
      ctx.body = trades ?? [];
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
