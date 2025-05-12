import { Strapi } from '@strapi/strapi';
import { getEnergyResourcePluginService } from '../utils/service';

export default ({ strapi }: { strapi: Strapi }) => ({
  async create(ctx) {
    await getEnergyResourcePluginService(strapi).create(ctx);

  },
  async update(ctx) {
    await getEnergyResourcePluginService(strapi).update(ctx);
  },
  async get(ctx) {
    await getEnergyResourcePluginService(strapi).get(ctx);
  },
  async getById(ctx) {
    await getEnergyResourcePluginService(strapi).getById(ctx);
  },
  async delete(ctx) {
    await getEnergyResourcePluginService(strapi).delete(ctx);
  },
  async linkMeter(ctx) {
    await getEnergyResourcePluginService(strapi).linkMeter(ctx);
  },
});
