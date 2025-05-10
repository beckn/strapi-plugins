import { Strapi } from '@strapi/strapi';
import { getMeterDatasetPluginService } from '../utils/service';

export default ({ strapi }: { strapi: Strapi }) => ({
  async get(ctx) {
    await getMeterDatasetPluginService(strapi).get(ctx);
  },
  async getById(ctx) {
    await getMeterDatasetPluginService(strapi).getById(ctx);
  },
});
