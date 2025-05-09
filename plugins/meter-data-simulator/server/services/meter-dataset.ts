import { Strapi } from '@strapi/strapi';
import { getMeterDatasetApiService, getMeterApiService, getEnergyResourceApiService } from '../utils/service';

export default ({ strapi }: { strapi: Strapi }) => ({
  async get(ctx) {
    try {
      const meters = await getMeterDatasetApiService(strapi).find(ctx.query);
      return ctx.send({ message: "Meter Datasets fetched successfully", data: meters }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async getById(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest('Invalid meter dataset ID');
      }

      const existingMeterDataset = await getMeterDatasetApiService(strapi).findOne(id);
      if (!existingMeterDataset) {
        return ctx.notFound('Meter Dataset not found');
      }

      const meterDataset = await getMeterDatasetApiService(strapi).findOne(id, ctx.query);
      return ctx.send({ message: "Meter Dataset fetched successfully", data: meterDataset }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
