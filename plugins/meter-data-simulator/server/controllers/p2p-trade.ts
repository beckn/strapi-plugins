import { Strapi } from '@strapi/strapi';
import { getP2PTradePluginService } from '../utils/service';

export default ({ strapi }: { strapi: Strapi }) => ({
  async create(ctx) {
    await getP2PTradePluginService(strapi).create(ctx);

  },
  async get(ctx) {
    await getP2PTradePluginService(strapi).get(ctx);
  },
  async getById(ctx) {
    await getP2PTradePluginService(strapi).getById(ctx);
  },
});
