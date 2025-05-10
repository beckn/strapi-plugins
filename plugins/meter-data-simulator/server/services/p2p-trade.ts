import { Strapi } from '@strapi/strapi';
import { getP2PTradeApiService } from '../utils/service';

export default ({ strapi }: { strapi: Strapi }) => ({
  async create(ctx) {
    try {
      const p2pTrade = await getP2PTradeApiService(strapi).create(ctx.request.body);
      return ctx.send({ message: "P2P Trade created successfully", data: p2pTrade }, 201);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async get(ctx) {
    try {
      const p2pTrades = await getP2PTradeApiService(strapi).find(ctx.query);
      return ctx.send({ message: "P2P Trades fetched successfully", data: p2pTrades }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async getById(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest('Invalid P2P Trade ID');
      }

      const p2pTrade = await getP2PTradeApiService(strapi).findOne(id, ctx.query);
      
      if (!p2pTrade) {
          return ctx.notFound('P2P Trade not found');
      }

      return ctx.send({ message: "P2P Trade fetched successfully", data: p2pTrade }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
