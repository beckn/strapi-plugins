import { Strapi } from "@strapi/strapi";
import { 
  getEnergyResourceApiService,
  getMeterApiService,
  getEntityService,
  getDerApiService
} from "../utils/service.js";

export default ({ strapi }: { strapi: Strapi }) => ({
  async create(ctx) {
    try {
      const { appliances } = ctx.request.body.data;
      
      // 1. Create Energy Resource
      const createdER = await getEnergyResourceApiService(strapi).create({
        data: ctx.request.body.data
      });

      // 2. If appliances exist, create DERs
      if (appliances && appliances.length) {
        const isExistAppliances = await getEntityService(strapi).findMany(
          "api::appliance.appliance",
          {
            filters: {
              name: { $in: appliances }
            }
          }
        );

        console.log('Dank Found appliances:', isExistAppliances);

        // 3. Create DERs one by one
        const derIds = [];
        // Convert to array if not already
        const appliancesArray = Array.isArray(isExistAppliances) ? isExistAppliances : [isExistAppliances];
        
        for (const appliance of appliancesArray) {
          const der = await getDerApiService(strapi).create({
            data: {
              switched_on: false,
              appliance: appliance.id,
              energy_resource: createdER.id
            }
          });
          derIds.push(der.id);
        }

        // 4. Update ER with DER IDs
        const updatedER = await getEnergyResourceApiService(strapi).update(
          createdER.id,
          {
            data: {
              ders: derIds
            },
            populate: {
              ders: {
                populate: ['appliance']
              }
            }
          }
        );

        return ctx.send({
          message: "Energy resource and DERs created successfully",
          data: updatedER
        }, 201);
      }

      return ctx.send({
        message: "Energy resource created successfully",
        data: createdER
      }, 201);

    } catch (error) {
      console.error('Error creating ER and DERs:', error);
      return ctx.badRequest(error.message);
    }
  },

  async update(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest("Invalid energy resource ID");
      }

      // Get existing ER with its DERs and their appliances
      const existingER = await getEnergyResourceApiService(strapi).findOne(id, {
        populate: {
          ders: {
            populate: ['appliance']
          }
        }
      });
      
      console.log('Existing ER:', JSON.stringify(existingER, null, 2));
      
      if (!existingER) {
        return ctx.notFound("Energy resource not found");
      }

      const reqBody = ctx.request.body;

      // Handle meter updates
      if (reqBody.data?.meter) {
        const isExistMeter = await getMeterApiService(strapi).findOne(
          reqBody.data.meter
        );
        if (!isExistMeter) {
          return ctx.notFound("Meter not found");
        }
      }

      // Handle appliance/DER updates
      const { appliances } = reqBody.data;
      if (appliances && appliances.length) {
        // Get all requested appliances
        const newAppliances = await getEntityService(strapi).findMany(
          "api::appliance.appliance",
          {
            filters: {
              name: { $in: appliances }
            }
          }
        );

        // Get current DER appliance IDs - with safe access
        const currentDERs = existingER?.ders || [];
        console.log('Current DERs:', JSON.stringify(currentDERs, null, 2));

        const currentApplianceIds = currentDERs
          .filter(der => der && der.appliance)
          .map(der => der.appliance.id);

        console.log('Current Appliance IDs:', currentApplianceIds);

        // Find appliances to add and remove
        const newApplianceIds = newAppliances.map(app => app.id);
        const appliancesToAdd = newAppliances.filter(
          app => !currentApplianceIds.includes(app.id)
        );
        const dersToRemove = currentDERs.filter(
          der => der.appliance && !newApplianceIds.includes(der.appliance.id)
        );

        // Create new DERs
        for (const appliance of appliancesToAdd) {
          await getDerApiService(strapi).create({
            data: {
              switched_on: false,
              appliance: appliance.id,
              energy_resource: id
            }
          });
        }

        // Delete removed DERs
        for (const der of dersToRemove) {
          await getDerApiService(strapi).delete(der.id);
        }
      }

      // Update ER
      const updatedER = await getEnergyResourceApiService(strapi).update(id, {
        data: reqBody.data,
        populate: {
          ders: {
            populate: ['appliance']
          },
          meter: {
            populate: ['children']
          }
        }
      });

      return ctx.send({
        message: "Energy resource updated successfully",
        data: updatedER
      }, 200);

    } catch (error) {
      console.error('Error updating ER:', error);
      return ctx.badRequest(error.message);
    }
  },

  async get(ctx) {
    try {
      const energyResources = await getEnergyResourceApiService(strapi).find(
        ctx.query
      );
      return ctx.send(
        {
          message: "Energy resources fetched successfully",
          data: energyResources
        },
        200
      );
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async getById(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest("Invalid energy resource ID");
      }

      const energyResource = await getEnergyResourceApiService(strapi).findOne(
        id,
        ctx.query
      );

      if (!energyResource) {
        return ctx.notFound("Energy resource not found");
      }

      return ctx.send(
        {
          message: "Energy resource fetched successfully",
          data: energyResource
        },
        200
      );
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async delete(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest("Invalid energy resource ID");
      }

      const existingEnergyResource = await getEnergyResourceApiService(
        strapi
      ).findOne(id);
      if (!existingEnergyResource) {
        return ctx.notFound("Energy resource not found");
      }

      await getEnergyResourceApiService(strapi).delete(id);
      return ctx.send({ message: "Energy resource deleted successfully" }, 200);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async linkMeter(ctx) {
    try {
      const { meter_id, er_id } = ctx.request.body;

      if (!meter_id || !er_id) {
        return ctx.badRequest("Both meter_id and er_id are required");
      }

      // Check if ER exists
      const existingER = await getEnergyResourceApiService(strapi).findOne(er_id);
      if (!existingER) {
        return ctx.notFound("Energy Resource not found");
      }

      // Check if meter exists
      const existingMeter = await getMeterApiService(strapi).findOne(meter_id);
      if (!existingMeter) {
        return ctx.notFound("Meter not found");
      }

      // Check if meter is already linked to another ER
      if (existingMeter.energyResource) {
        return ctx.badRequest("Meter is already linked to another Energy Resource");
      }

      // Check if ER is already linked to another meter
      if (existingER.meter) {
        return ctx.badRequest("Energy Resource is already linked to another meter");
      }

      // Update the meter with ER reference
      const updatedMeter = await getMeterApiService(strapi).update(meter_id, {
        data: {
          energyResource: er_id
        }
      });

      return ctx.send({
        message: "Meter linked successfully",
        data: updatedMeter
      }, 200);

    } catch (error) {
      return ctx.badRequest(error.message);
    }
  }
});
