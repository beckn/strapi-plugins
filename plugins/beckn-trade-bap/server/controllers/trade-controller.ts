import { Strapi } from "@strapi/strapi";
import { ETradeStatus } from "../constant";

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
      const trades = await tradeService.getTrade(id, ctx.state.user);
      ctx.body = trades;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async startTrade(ctx: any) {
    try {
      if (ctx.state.user.role.name !== "Admin") {
        throw new Error("Only admin Can start the trade");
      }
      const trades = await strapi.entityService.findMany("api::trade.trade", {
        filters: {
          status: ETradeStatus.RECEIVED
        },
        populate: {
          profile: {}
        }
      });
      const tradeService = strapi
        .plugin("beckn-trade-bap")
        .service("tradeService");
      tradeService.startTrade();

      ctx.body = { message: "Trades will be executed", trades };
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
  },
  async updateTradeById(ctx: any) {
    try {
      const userService = strapi
        .plugin("beckn-trade-bap")
        .service("userService");
      const deleteDerResp = await userService.updateTradeById(
        ctx.state.user.id,
        ctx.params.id,
        ctx.request.body
      );
      return (ctx.body = deleteDerResp);
    } catch (error: any) {
      console.log(error);
      return ctx.badRequest(error.message);
    }
  },
});
