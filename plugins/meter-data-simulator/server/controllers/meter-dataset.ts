import { Strapi } from "@strapi/strapi";
import { getMeterDatasetPluginService } from "../utils/service";

export default ({ strapi }: { strapi: Strapi }) => ({
  async get(ctx) {
    await getMeterDatasetPluginService(strapi).get(ctx);
  },
  async getById(ctx) {
    await getMeterDatasetPluginService(strapi).getById(ctx);
  },
  async getStreamedById(ctx) {
    await getMeterDatasetPluginService(strapi).getStreamedById(ctx);
  },

  async getGridLoads(ctx) {
    await getMeterDatasetPluginService(strapi).getGridLoads(ctx);
  },
  async getTransformerLoadStreamedById(ctx) {
    await getMeterDatasetPluginService(strapi).getTransformerLoadStreamedById(
      ctx
    );
  }
});
