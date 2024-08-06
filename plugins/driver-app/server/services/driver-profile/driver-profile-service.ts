import { Strapi } from "@strapi/strapi";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },
  async login(loginDto: any) {
    try {
      const { email, password } = loginDto;

      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { email: { $eqi: email } },
          populate: {
            role: true,
            agent: true,
            provider: true
          }
        });
      console.log("User info::: ", user);
      if (!user) {
        throw new Error("Email Not found");
      }

      // Request API.
      const response = await axios.post(
        `${process.env.STRAPI_BPP_URL}/api/auth/local`,
        {
          identifier: email,
          password
        }
      );
      delete user.password;
      return { ...response.data, user };
    } catch (error) {
      console.log("Error Occured:: ", error.message);
      if (error.message === "Email Not found") {
        throw error;
      }
      throw new Error("Wrong Password");
    }
  },
  async toggleAgentAvailabilityService(
    agent_id: number,
    available: boolean = false
  ) {
    console.log("agentId:::->", agent_id);
    try {
      const agentServices = await strapi.entityService.findMany(
        "api::service.service",
        {
          filters: {
            agent_id
          },
          populate: {
            agent: {},
            service_availabilities: {}
          }
        }
      );
      if (!agentServices.length) {
        throw new Error("No Service found with provided agent");
      }
      const agentService = agentServices[0];
      const updateAvailabilityResponse = await strapi.entityService.update(
        "api::service-availability.service-availability",
        agentService?.service_availabilities[0].id,
        {
          data: {
            is_available: available
          }
        }
      );
      return updateAvailabilityResponse;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async updateLocationService(
    agent_id: number,
    location: { lat: string; long: string }
  ) {
    try {
      const agentServices = await strapi.entityService.findMany(
        "api::service.service",
        {
          filters: {
            agent_id
          },
          populate: {
            agent: {},
            location_id: {}
          }
        }
      );
      if (!agentServices.length) {
        throw new Error("No Service found with provided agent");
      }
      const agentService = agentServices[0];
      const updateLocationResponse = await strapi.entityService.update(
        "api::location.location",
        agentService?.location_id.id,
        {
          data: {
            gps: `${location.lat}, ${location.long}`
          }
        }
      );
      return updateLocationResponse;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async updateRide(
    agent_id: number,
    order_id: number,
    order_status: string
  ) {
    try {
      let orderFulfillment = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            order_id
          }
        }
      );
      if(!orderFulfillment.length) {
        throw new Error('No order fulfillment exists for this order');
      }
      orderFulfillment = orderFulfillment[0];

      const updatedRide = await strapi.entityService.update(
        "api::order-fulfillment.order-fulfillment",
        orderFulfillment.id,
        {
          data: {
            agent_id,
            state_code: order_status,
            state_value: order_status
          }
        }
      );
      return updatedRide;
    } catch (error) {
      throw new Error(error.message);
    }
  }
});
