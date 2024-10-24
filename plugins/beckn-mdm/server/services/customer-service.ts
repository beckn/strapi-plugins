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
});
