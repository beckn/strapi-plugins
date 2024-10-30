import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createConsumptionLog({ id, customer_id }) {
    try {
      const lastLog = await strapi.entityService.findMany(
        "api::consumption-log.consumption-log",
        {
          filters: {
            customer: {
              customer_id: { $eq: customer_id },
            },
          },
          sort: { createdAt: "desc" },
          limit: 1,
        }
      );

      let previousMeterReading = 1900;

      if (lastLog?.length > 0) {
        previousMeterReading = Number(lastLog?.[0].current_meter_reading);
      }

      const unitConsumed = Number((Math.random() * (0.2 - 0.08) + 0.08).toFixed(2));
      const currentMeterReading = (previousMeterReading + unitConsumed).toFixed(2);
      const newLog = await strapi.entityService.create(
        "api::consumption-log.consumption-log",
        {
          data: {
            customer: id,
            unit_consumed: unitConsumed.toString(),
            current_meter_reading: currentMeterReading,
            publishedAt: new Date(),
            createdAt: new Date(),
          },
        }
      );

      return newLog;
    } catch (error) {
      console.error("Error in createConsumptionLog:", error);
      throw new Error(error.message);
    }
  },
  async createProductionLog({ id, customer_id }) {
    try {
      const lastLog = await strapi.entityService.findMany(
        "api::production-log.production-log",
        {
          filters: {
            customer: {
              customer_id: { $eq: customer_id },
            },
          },
          sort: { createdAt: "desc" },
          limit: 1,
        }
      );

      let previousMeterReading = 2000;

      if (lastLog?.length > 0) {
        previousMeterReading = Number(lastLog?.[0].current_meter_reading);
      }

      const unitProduced = Number((Math.random() * (0.4 - 0.2) + 0.2).toFixed(2));
      const currentMeterReading = (previousMeterReading + unitProduced).toFixed(2);

      const newLog = await strapi.entityService.create(
        "api::production-log.production-log",
        {
          data: {
            customer: id,
            unit_produced: unitProduced.toString(),
            current_meter_reading: currentMeterReading,
            publishedAt: new Date(),
            createdAt: new Date()
          },
        }
      );

      return newLog;
    } catch (error) {
      console.error("Error in createProductionLog:", error);
      throw new Error(error.message);
    }
  },
});
