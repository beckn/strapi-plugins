import { Strapi } from '@strapi/strapi';
import { getMeterApiService, getEnergyResourceApiService } from '../utils/service';

export default ({ strapi }: { strapi: Strapi }) => ({
  async create(ctx) {
    try {
      const meter = await getMeterApiService(strapi).create(ctx.request.body);
      return ctx.send({ message: "Meter created successfully", data: meter }, 201);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async update(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest('Invalid meter ID');
      }

      const existingMeter = await getMeterApiService(strapi).findOne(id);
      if (!existingMeter) {
        return ctx.notFound('Meter not found');
      }

      const reqBody  = ctx.request.body;
      
      if (reqBody.data?.parent) {
        if (Number(reqBody.data.parent) === Number(id)) {
          return ctx.badRequest('Cannot set meter as its own parent');
        }
        const isExistParent = await getMeterApiService(strapi).findOne(reqBody.data.parent);
        if (!isExistParent) {
          return ctx.notFound('Parent meter not found');
        }
      }

      if (reqBody.data?.energyResource) {
        const isExistEnergyResource = await getEnergyResourceApiService(strapi).findOne(reqBody.data.energyResource);
        if (!isExistEnergyResource) {
          return ctx.notFound('Energy resource not found');
        }
      }

      const meter = await getMeterApiService(strapi).update(id, {
        ...reqBody,
        populate: {
          parent: true,
          energyResource: true,
          children: true,
          appliances: true
        }
      });
      return ctx.send({ message: "Meter updated successfully", data: meter }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async get(ctx) {
    try {
      const meters = await getMeterApiService(strapi).find(ctx.query);
      return ctx.send({ message: "Meters fetched successfully", data: meters }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async getById(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest('Invalid meter ID');
      }

      const existingMeter = await getMeterApiService(strapi).findOne(id);
      if (!existingMeter) {
        return ctx.notFound('Meter not found');
      }

      const meter = await getMeterApiService(strapi).findOne(id, ctx.query);
      return ctx.send({ message: "Meter fetched successfully", data: meter }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async delete(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest('Invalid meter ID');
      }

      const existingMeter = await getMeterApiService(strapi).findOne(id);
      if (!existingMeter) {
        return ctx.notFound('Meter not found');
      }

      await getMeterApiService(strapi).delete(id);
      return ctx.send({ message: "Meter deleted successfully" }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
