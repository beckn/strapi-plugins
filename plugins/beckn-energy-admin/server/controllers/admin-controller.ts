import { Strapi } from '@strapi/strapi';
import { ETradeStatus } from "../constant";

export default ({ strapi }: { strapi: Strapi }) => ({
  async getTrade(ctx: any) {
    try {
      const { id = null } = ctx.request.query;
      const adminService = strapi
        .plugin("beckn-energy-admin")
        .service("adminService");
      const trades = await adminService.getTrade(id, ctx.state.user);
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
      const adminService = strapi
        .plugin("beckn-energy-admin")
        .service("adminService");
      const tradeResp = await adminService.startTrade();
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
      const adminService = strapi
        .plugin("beckn-energy-admin")
        .service("adminService");
      const trades = await adminService.getPendingTrades();
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
      const adminService = strapi
        .plugin("beckn-energy-admin")
        .service("adminService");
      const { status } = ctx.request.body;
      if (!status) {
        throw new Error('No status provided to update market status');
      }
      const trades = await adminService.updateMarketStatus(status);
      ctx.body = trades ?? [];
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getUserProfile(ctx) {
    try {
      const adminService = strapi
        .plugin("beckn-energy-admin")
        .service("adminService");
      const user = ctx.state.user;
      const result = await adminService.getUserProfile(user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async updateUserProfile(ctx) {
    try {
      const adminService = strapi
        .plugin("beckn-energy-admin")
        .service("adminService");
      const { fullname, address } = ctx.request.body
      const user = ctx.state.user;
      const result = await adminService.updateUserProfile({ fullname, address }, user);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
