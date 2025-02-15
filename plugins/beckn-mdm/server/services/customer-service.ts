import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },
  async createUtilities({ utilities }) {
    try {
      if (!utilities.length) {
        throw new Error("please provide at least one utility");
      }

      utilities.forEach(async (utility) => {
        await strapi.entityService.create("api::utility-master.utility-master", {
          data: { ...utility, publishedAt: new Date() },
        });
      });
      return { message: "Utilities created successfully" };
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getCustomer({ phone_no, utility_name, role }) {
    try {
      if (!(phone_no && utility_name)) {
        throw new Error("phone_no, utility_name and role should not be empty");
      }
      const customers = await strapi.entityService.findMany(
        "api::customer.customer",
        {
          filters: {
            phone_no: { $eq: phone_no },
            utility: {
              name: { $eqi: utility_name },
            },
          },
          populate: ["utility"],
        }
      );
      if (!customers?.length) {
        throw new Error("No customer found");
      }
      const agentService = customers[0];
      return {
        data: {
          customer_id: agentService.customer_id,
          phone_no: agentService.phone_no,
          billing_address: agentService.billing_address,
          utility: {
            id: agentService.utility.id,
            name: agentService.utility.name,
          },
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getStatistics({ customerId, startDate, endDate }) {
    try {
      let customer = await strapi.entityService.findMany(
        "api::customer.customer",
        {
          filters: { customer_id: customerId },
        }
      );

      if (!customer?.length) {
        throw new Error("Customer not found");
      }

      const { customer_id } = customer[0];

      const now = new Date();
      const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
      const endOfCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString();

      const startOfPreviousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString();
      // const endOfPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 0);

      const consumptionLogs = await strapi.entityService.findMany(
        "api::consumption-log.consumption-log",
        {
          filters: {
            customer: {
              customer_id: { $eq: customer_id },
            },
            createdAt: {
              $gte: startOfPreviousMonth,
              $lte: endOfCurrentMonth,
            },
          },
          sort: { createdAt: "desc" },
        }
      );
      const productionLogs = await strapi.entityService.findMany(
        "api::production-log.production-log",
        {
          filters: {
            customer: {
              customer_id: { $eq: customer_id },
            },
            createdAt: {
              $gte: startOfPreviousMonth,
              $lte: endOfCurrentMonth,
            },
          },
          sort: { createdAt: "desc" },
        }
      );

      let consumption: any = {
        previous_month: 0,
        current_month: 0,
        average: 0,
      };
      let production: any = {
        previous_month: 0,
        current_month: 0,
        average: 0,
      };
      if(startDate && endDate) {
        const total = await this.getEnergyData({ customerId, startDate, endDate });
        consumption = {
          ...consumption,
          totalInRange: total.totalConsumed
        };
        production = {
          ...production,
          totalInRange: total.totalProduced
        }
      }

      if (consumptionLogs?.length) {
        const currentMonthFromDate = new Date(consumptionLogs[consumptionLogs.length - 1].createdAt);
        const currentMonthToDate = new Date(consumptionLogs[0].createdAt);
        
        const diffInMilliseconds = currentMonthToDate.getTime() - currentMonthFromDate.getTime()
        const totalDaysInCurrentMonth = new Date().getDate();
      
        consumptionLogs.forEach((log) => {
          const logDate = new Date(log.createdAt).toISOString();;
          const units = Number(log.unit_consumed);

          if (logDate >= startOfCurrentMonth) {
            consumption.current_month += units;
          } else if (logDate >= startOfPreviousMonth && logDate < startOfCurrentMonth) {
            consumption.previous_month += units;
          }
        });
        consumption.previous_month = Number(consumption.previous_month.toFixed(2));
        consumption.current_month = Number(consumption.current_month.toFixed(2));
        consumption.average = Number((consumption.current_month / totalDaysInCurrentMonth).toFixed(2));
      }
      
      if (productionLogs?.length) {
        const currentMonthFromDate = new Date(productionLogs[productionLogs.length - 1].createdAt)
        const currentMonthToDate = new Date(productionLogs[0].createdAt)

        const diffInMilliseconds = currentMonthToDate.getTime() - currentMonthFromDate.getTime()
        const totalDaysInCurrentMonth = new Date().getDate();

        productionLogs.forEach((log) => {
          const logDate = new Date(log.createdAt).toISOString();;
          const units = Number(log.unit_produced);

          if (logDate >= startOfCurrentMonth) {
            production.current_month += units;
          } else if (logDate >= startOfPreviousMonth && logDate < startOfCurrentMonth) {
            production.previous_month += units;
          }
        });
        production.previous_month = Number(production.previous_month.toFixed(2));
        production.current_month = Number(production.current_month.toFixed(2));
        production.average = Number((production.current_month / totalDaysInCurrentMonth).toFixed(2));
      }
      return {
        data: { consumption, production }
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getEnergyData({ customerId, startDate, endDate }) {
    //make sure startDate and endDate is in standard format: YYYY-MM-DD, not DD-MM-YYYY
    try {
      const now = new Date();
      const consumptionLogs = await strapi.entityService.findMany(
        "api::consumption-log.consumption-log",
        {
          filters: {
            customer: { customer_id: { $eq: customerId } },
            createdAt: { 
              $gte: new Date(new Date(startDate).setHours(0, 0, 0, 0)).toISOString(), 
              $lte: new Date(new Date(endDate).setHours(23, 59, 59, 999)).toISOString()
            }
          },
          populate: ["unit_consumed"],
          sort: { createdAt: "desc" },
        }
      );
      const productionLogs = await strapi.entityService.findMany(
        "api::production-log.production-log",
        {
          filters: {
            customer: { customer_id: { $eq: customerId } },
            createdAt: { 
              $gte: new Date(new Date(startDate).setHours(0, 0, 0, 0)).toISOString(), 
              $lte: new Date(new Date(endDate).setHours(23, 59, 59, 999)).toISOString()
            }
          },
          populate: ["unit_produced"],
          sort: { createdAt: "desc" },
        }
      );

      console.log("Consumption Logs:", consumptionLogs.length);
      console.log("Production Logs:", productionLogs.length);

      // Calculate the sum of `unit_consumed`
      const totalConsumed = consumptionLogs.reduce(
        (acc, log) => Number(acc) + (Number(log.unit_consumed) || 0),
        0
      );

      // Calculate the sum of `unit_produced`
      const totalProduced = productionLogs.reduce(
        (acc, log) => Number(acc) + (Number(log.unit_produced) || 0),
        0
      );

      return {
        customerId,
        totalConsumed,
        totalProduced,
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
});
