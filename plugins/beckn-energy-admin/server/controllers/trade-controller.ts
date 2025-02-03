import { Strapi } from '@strapi/strapi';
import { ETradeStatus } from "../constant";

export default ({ strapi }: { strapi: Strapi }) => ({
    async getTrade(ctx: any) {
        try {
          const { id = null } = ctx.request.query;
          const tradeService = strapi
            .plugin("beckn-energy-admin")
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
            .plugin("beckn-energy-admin")
            .service("tradeService");
          const tradeResp = await tradeService.startTrade();
          ctx.body = tradeResp;
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
            .plugin("beckn-energy-admin")
            .service("tradeService");
          const trades = await tradeService.getPendingTrades();
          ctx.body = trades ?? [];
        } catch (error) {
          ctx.badRequest(error.message);
        }
      },
      async updateMarketStatus(ctx: any) {
        try {
            if (ctx.state.user.role.name !== "Admin") {
              throw new Error("Only admin Can Access this Details");
            }
            const tradeService = strapi
              .plugin("beckn-energy-admin")
              .service("tradeService");
            const { status } = ctx.request.body;
            if(!status) {
                throw new Error('No status provided to update market status');
            }
            const trades = await tradeService.updateMarketStatus(status);
            ctx.body = trades ?? [];
          } catch (error) {
            ctx.badRequest(error.message);
          }
      }
});
