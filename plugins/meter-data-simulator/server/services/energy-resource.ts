import { Strapi } from '@strapi/strapi';
import { getEnergyResourceApiService } from '../utils/service';
import { getMeterApiService } from '../utils/service';

export default ({ strapi }: { strapi: Strapi }) => ({
  async create(ctx) {
    try {
      const energyResource = await getEnergyResourceApiService(strapi).create(ctx.request.body);
      return ctx.send({ message: "Energy resource created successfully", data: energyResource }, 201);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async update(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest('Invalid energy resource ID');
      }

      const existingEnergyResource = await getEnergyResourceApiService(strapi).findOne(id);
      if (!existingEnergyResource) {
        return ctx.notFound('Energy resource not found');
      }

      const reqBody  = ctx.request.body;

      if (reqBody.data?.meter) {
        const isExistMeter = await getMeterApiService(strapi).findOne(reqBody.data.meter);
        if (!isExistMeter) {
          return ctx.notFound('Meter not found');
        }
      }

      const energyResource = await getEnergyResourceApiService(strapi).update(id, {
        ...reqBody,
        populate: {
          meter: {
            populate: {
              appliances: true,
              children: true
            }
          }
        }
      });
      return ctx.send({ message: "Energy resource updated successfully", data: energyResource }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async get(ctx) {
    try {
      const energyResources = await getEnergyResourceApiService(strapi).find(ctx.query);
      return ctx.send({ message: "Energy resources fetched successfully", data: energyResources }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async getById(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest('Invalid energy resource ID');
      }

      const energyResource = await getEnergyResourceApiService(strapi).findOne(id, ctx.query);
      
      if (!energyResource) {
        return ctx.notFound('Energy resource not found');
      }

      return ctx.send({ message: "Energy resource fetched successfully", data: energyResource }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async delete(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest('Invalid energy resource ID');
      }

      const existingEnergyResource = await getEnergyResourceApiService(strapi).findOne(id);
      if (!existingEnergyResource) {
        return ctx.notFound('Energy resource not found');
      }

      await getEnergyResourceApiService(strapi).delete(id);
      return ctx.send({ message: "Energy resource deleted successfully" }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
});
