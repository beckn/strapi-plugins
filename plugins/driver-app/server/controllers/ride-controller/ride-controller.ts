import { Strapi } from "@strapi/strapi";
import { RIDE_STATUS_CODE } from "../../../contstants";
import services from "../../services";
import { distance } from "../../../utils/location_utils";
export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("driver-app")
      .service("myService")
      .getWelcomeMessage();
  },
  async showAvailableRides(ctx) {
    try {
      const availableOrders = await services
        .rideService({ strapi })
        .showMobilityOrders(RIDE_STATUS_CODE.AWAITING_DRIVER_APPROVAL);
      const agentService = (
        await strapi.entityService.findMany("api::service.service", {
          filters: {
            agent_id: ctx.state.user?.agent?.id
          },
          populate: {
            agent: {},
            location_id: {}
          }
        })
      )[0];
      const validOrders = availableOrders?.filter((order) => {
        const startLocation =
          order.stops.find((stop) => stop.type === "start") || order.stops[0];
        if (startLocation?.gps) {
          return distance(agentService.location_id.gps, startLocation.gps) <= 2;
        }
      });

      return (ctx.body = {
        message: "Rides Fetched",
        data: { validOrders }
      });
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
