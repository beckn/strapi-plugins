import { Strapi } from "@strapi/strapi";
import driverProfileService from "../../services";
export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("driver-app")
      .service("myService")
      .getWelcomeMessage();
  },
  async login(ctx) {
    try {
      const driverService = strapi
        .plugin("driver-app")
        .service("driverProfileService");
      const result = await driverService.login(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async toggleAvailability(ctx) {
    try {
      const { available = false, location = { lat: "", long: "" } } =
        ctx.request.body;
      const agentId = ctx.state.user?.agent?.id;
      if (agentId) {
        if (available) {
          if (location.lat && location.long) {
            const toggleAvailabiltiyResponse = await driverProfileService
              .driverProfileService({ strapi })
              .toggleAgentAvailabilityService(agentId, available);
            const updateLocationResponse = await driverProfileService
              .driverProfileService({ strapi })
              .updateLocationService(agentId, location);
            return (ctx.body = {
              toggleAvailabiltiyResponse,
              updateLocationResponse
            });
          } else {
            throw new Error("GPS location is required!");
          }
        } else {
          const toggleAvailabiltiyResponse = await driverProfileService
            .driverProfileService({ strapi })
            .toggleAgentAvailabilityService(agentId, available);
          return (ctx.body = toggleAvailabiltiyResponse);
        }
      }
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async updateLocation(ctx) {
    try {
      const { location = { lat: "", long: "" } } = ctx.request.body;
      const agentId = ctx.state.user?.agent?.id;
      if (agentId) {
        if (location.lat && location.long) {
          const updateLocationResponse = await driverProfileService
            .driverProfileService({ strapi })
            .updateLocationService(agentId, location);
          return (ctx.body = {
            updateLocationResponse
          });
        } else {
          throw new Error("GPS location is required!");
        }
      }
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async create(ctx) {
    console.log("Inside create:: ", ctx.state.user);
    ctx.body = ctx.state.user;
  },
  async myProfile(ctx) {
    try {
      const { user } = ctx.state;
      const profile = {
        user_details: {
          email: user.email,
          username: user.username,
          name: `${user.agent.first_name} ${user.agent.last_name}`,
          description: user.agent.description,
          phone_number: user.agent.agent_profile.phone_number
        },
        vehicle_details: {
          registration_no: user.agent.agent_profile.registration_no,
          vehicle_make: user.agent.agent_profile.vehicle_make,
          vehicle_model: user.agent.agent_profile.vehicle_model,
          power_source: user.agent.agent_profile.power_source
        }
      };
      return (ctx.body = profile);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
