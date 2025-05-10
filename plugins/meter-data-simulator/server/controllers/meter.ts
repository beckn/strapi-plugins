import { Strapi } from '@strapi/strapi';
import { getMeterPluginService } from '../utils/service';

export default ({ strapi }: { strapi: Strapi }) => ({
  async create(ctx) {
    await getMeterPluginService(strapi).create(ctx);

  },
  async update(ctx) {
    await getMeterPluginService(strapi).update(ctx);
  },
  async get(ctx) {
    await getMeterPluginService(strapi).get(ctx);
  },
  async getById(ctx) {
    await getMeterPluginService(strapi).getById(ctx);
  },
  async delete(ctx) {
    await getMeterPluginService(strapi).delete(ctx);
  },
  async control(ctx) {
    await getMeterPluginService(strapi).control(ctx);
  },
});
