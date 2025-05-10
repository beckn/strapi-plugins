import { Strapi } from '@strapi/strapi';
import { getMeterApiService, getEnergyResourceApiService } from '../utils/service';
import { MeterControlLogType } from '../constant';

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

      const meter = await getMeterApiService(strapi).findOne(id, ctx.query);
      
      if (!meter) {
        return ctx.notFound('Meter not found');
      }

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

  async control(ctx) {
    try {
      const {
        meter_id,
        parent_meter_id,
        appliance_type,
        pincode,
        load_factor,
        log_type
      } = ctx.request.body;

      // Build query filters
      const filters: any = {};
      
      if (meter_id) {
        filters.code = meter_id;
      }
      
      if (parent_meter_id) {
        filters.parent = {
          code: parent_meter_id
        };
      }
      
      if (pincode) {
        filters.pincode = pincode;
      }
      
      if (appliance_type && appliance_type.length > 0) {
        filters.appliances = {
          name: {
            $in: appliance_type
          }
        };
      }

      // Add energy resource type filter based on log_type
      if (log_type === MeterControlLogType.CONSUMER) {
        filters.energyResource = {
          type: MeterControlLogType.CONSUMER
        };
      } else if (log_type === MeterControlLogType.PROSUMER) {
        filters.energyResource = {
          type: MeterControlLogType.PROSUMER
        };
      } else if (log_type === MeterControlLogType.BOTH) {
        filters.energyResource = {
          type: {
            $in: [MeterControlLogType.CONSUMER, MeterControlLogType.PROSUMER]
          }
        };
      }

      // Find meters based on filters
      const meters = await getMeterApiService(strapi).find({
        filters,
        populate: ['parent', 'children', 'energyResource', 'appliances']
      });

      if (!meters.results || meters.results.length === 0) {
        return ctx.notFound('No meters found matching the criteria');
      }

      // Update load factors based on energy resource type
      const updates = meters.results.map(meter => {
        const updateData: any = {};
        
        if (meter.energyResource) {
          if (meter.energyResource.type === MeterControlLogType.CONSUMER) {
            updateData.consumptionLoadFactor = load_factor;
          } else if (meter.energyResource.type === MeterControlLogType.PROSUMER) {
            updateData.productionLoadFactor = load_factor;
          }
        }

        return getMeterApiService(strapi).update(meter.id, {
          data: updateData,
          populate: {
            parent: true,
            energyResource: true,
            children: true,
            appliances: true
          }
        });
      });

      const updatedMeters = await Promise.all(updates);

      return ctx.send({
        message: "Meters updated successfully",
        data: updatedMeters,
        meta: {
          count: updatedMeters.length
        }
      }, 200);
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  },
});
