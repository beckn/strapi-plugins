import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createConsumptionLog({ customerId }) {
    try {
      let customer = await strapi.entityService.findMany(
        "api::customer.customer",
        {
          filters: { customer_id: customerId, role: {$eqi: "consumer"}  },
        }
      );

      if (!customer?.length) {
        throw new Error("Customer not found");
      }

      const lastLog = await strapi.entityService.findMany(
        "api::consumption-log.consumption-log",
        {
          filters: {
            customer: {
              customer_id: { $eq: customerId },
            },
          },
          sort: { createdAt: "desc" },
          limit: 1,
        }
      );

      let previousMeterReading = 0;

      if (lastLog?.length > 0) {
        previousMeterReading = Number(lastLog?.[0].current_meter_reading);
      }

      const unitConsumed = Number((Math.random() * (2 - 0.5) + 0.5).toFixed(2));
      const currentMeterReading = (previousMeterReading + unitConsumed).toFixed(1);

      const newLog = await strapi.entityService.create(
        "api::consumption-log.consumption-log",
        {
          data: {
            customer: customer[0].id,
            unit_consumed: unitConsumed.toString(),
            current_meter_reading: currentMeterReading,
            publishedAt: new Date(),
            createdAt: new Date()
          },
        }
      );

      return newLog;
    } catch (error) {
      console.error("Error in createConsumptionLog:", error);
      throw new Error(error.message);
    }
  },
  async createProductionLog({ customerId }) {
    try {
      let customer = await strapi.entityService.findMany(
        "api::customer.customer",
        {
          filters: { customer_id: customerId, role: {$eqi: "prosumer"} },
        }
      );

      if (!customer?.length) {
        throw new Error("Customer not found");
      }

      const lastLog = await strapi.entityService.findMany(
        "api::production-log.production-log",
        {
          filters: {
            customer: {
              customer_id: { $eq: customerId },
            },
          },
          sort: { createdAt: "desc" },
          limit: 1,
        }
      );

      let previousMeterReading = 0;

      if (lastLog?.length > 0) {
        previousMeterReading = Number(lastLog?.[0].current_meter_reading);
      }

      const unitProduced = Number((Math.random() * (1 - 0.25) + 0.25).toFixed(2));
      const currentMeterReading = (previousMeterReading + unitProduced).toFixed(1);

      const newLog = await strapi.entityService.create(
        "api::production-log.production-log",
        {
          data: {
            customer: customer[0].id,
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
