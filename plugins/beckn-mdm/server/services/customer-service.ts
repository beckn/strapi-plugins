import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },
  async getCustomer({ phone_no, utility_name }) {
    try {
      if (!(phone_no && utility_name)) {
        throw new Error("phone_no and utility_name should not be empty");
      }
      const customerServices = await strapi.entityService.findMany(
        "api::customer.customer",
        {
          filters: {
            phone_no: { $containsi: phone_no },
            utility: {
              name: { $containsi: utility_name },
            },
          },
          populate: "utility",
        }
      );
      if (!customerServices?.length) {
        throw new Error("No customer found");
      }
      const agentService = customerServices[0];
      return {
        data: {
          customer_id: agentService.customer_id,
          phone_no: agentService.phone_no,
          billing_address: agentService.billing_address,
          role: agentService.role,
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
  async getStatistics({ customerId }) {
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
      const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfCurrentMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

      const startOfPreviousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      // const endOfPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 0);

      const consumptionLogs = await strapi.entityService.findMany(
        "api::consumption-log.consumption-log",
        {
          filters: {
            customer: {
              customer_id: { $eq: customer_id },
              createdAt: {
                $gte: startOfPreviousMonth,
                $lte: endOfCurrentMonth,
              },
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
              createdAt: {
                $gte: startOfPreviousMonth,
                $lte: endOfCurrentMonth,
              },
            },
          },
          sort: { createdAt: "desc" },
        }
      );

      let consumption = {
        previous_month: 0,
        current_month: 0,
        average: 0,
      };
      let production = {
        previous_month: 0,
        current_month: 0,
        average: 0,
      };

      if (consumptionLogs?.length) {
        const currentMonthFromDate = new Date(consumptionLogs[consumptionLogs.length - 1].createdAt)
        const currentMonthToDate = new Date(consumptionLogs[0].createdAt)
        
        const diffInMilliseconds = currentMonthToDate.getTime() - currentMonthFromDate.getTime()
        const totalDaysInCurrentMonth = Math.round(diffInMilliseconds / (1000 * 60 * 60 * 24)) + 1;
      
        consumptionLogs.forEach((log) => {
          const logDate = new Date(log.createdAt);
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
        const totalDaysInCurrentMonth = Math.round(diffInMilliseconds / (1000 * 60 * 60 * 24)) + 1;

        productionLogs.forEach((log) => {
          const logDate = new Date(log.createdAt);
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
});
