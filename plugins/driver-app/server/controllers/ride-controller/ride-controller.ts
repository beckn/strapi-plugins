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
        .showMobilityOrders(RIDE_STATUS_CODE.AWAITING_DRIVER_APPROVAL, null);
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
          return (
            distance(agentService.location_id.gps, startLocation.gps) <= 2 &&
            order.order_id.items[0].item_fulfillment_ids.find(
              (fulfillment) =>
                fulfillment.fulfilment_id.service.id === agentService.id
            )
          );
        }
      });

      return (ctx.body = {
        message: "Rides Fetched",
        data: { validOrders }
      });
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async showRideSummary(ctx) {
    try {
      if (!ctx.request.body?.order_id || ctx.request.body.order_id === "") {
        throw new Error("Order Id is required");
      }
      const order_details: any[] = await services
        .rideService({ strapi })
        .showMobilityOrder(
          ctx.request.body.order_id,
          ctx.state.user?.agent?.id
        );
      if (!order_details.length || order_details.length > 1) {
        throw new Error("Invalid Order Id");
      }
      const startLocation = order_details[0].stops.find(
        (stop) => stop.type === "start"
      );
      const endLocation = order_details[0].stops.find(
        (stop) => stop.type === "end"
      );
      const total_distance = distance(startLocation.gps, endLocation.gps);
      const total_price =
        total_distance *
        order_details[0].order_id.items[0].sc_retail_product.min_price;
      await services
        .rideService({ strapi })
        .updateOrderPrice(
          ctx.request.body.order_id,
          parseFloat(total_price.toFixed(2))
        );
      return (ctx.body = {
        message: "Rides Summary",
        data: {
          ...order_details[0],
          total_distance_in_km: parseFloat(total_distance.toFixed(2)),
          total_price_in_rs: parseFloat(total_price.toFixed(2))
        }
      });
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async updateRide(ctx) {
    try {
      const { order_id, order_status } = ctx.request.body;
      const agentId = ctx.state.user?.agent?.id;
      if (agentId) {
        if (
          order_id &&
          order_status &&
          Object.values(RIDE_STATUS_CODE).includes(order_status)
        ) {
          const updateRideStatus = await services
            .rideService({ strapi })
            .updateRide(agentId, order_id, order_status);
          return (ctx.body = {
            status: "success",
            code: 200,
            data: updateRideStatus
          });
        } else {
          throw new Error("Invalid Order Id or Order Status");
        }
      } else {
        throw new Error("Invalid user");
      }
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async rideStatus(ctx) {
    try {
      const { order_id } = ctx.request.params;
      const order_detail: any = await services
        .rideService({ strapi })
        .rideStatus(order_id);
      return (ctx.body = {
        status: "success",
        code: 200,
        data: order_detail
      });
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async myRides(ctx) {
    try {
      const agentId = ctx.state.user?.agent?.id;
      const myRides = await services
        .rideService({ strapi })
        .showMobilityOrders(null, agentId);
      return (ctx.body = {
        message: "Rides Fetched",
        data: { my_rides: myRides }
      });
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async sendRideToDriver(orderFulfillment: any = {}) {
    const { id } = orderFulfillment;
    if (!id) {
      return;
    }
    try {
      const order = await services
        .rideService({ strapi })
        .getOrderFulfillment(id);

      const agentServices = await strapi.entityService.findMany(
        "api::service.service",
        {
          populate: {
            agent: {},
            location_id: {}
          }
        }
      );
      const startLocation =
        order.stops.find((stop) => stop.type === "start") || order.stops[0];

      if (startLocation?.gps) {
        const validDrivers = agentServices.filter((driver: any) => {
          console.log(
            "is in radius",
            driver,
            distance(driver.location_id.gps, startLocation.gps) <= 2
          );
          console.log(
            "is valid driver",
            driver,
            order.order_id.items[0].item_fulfillment_ids.find(
              (fulfillment) =>
                fulfillment.fulfilment_id.service.id === driver.id
            )
          );
          console.log(
            JSON.stringify(order.order_id.items[0].item_fulfillment_ids)
          );
          if (
            distance(driver.location_id.gps, startLocation.gps) <= 2 &&
            order.order_id.items[0].item_fulfillment_ids.find(
              (fulfillment) =>
                fulfillment.fulfilment_id.service.id === driver.id
            )
          ) {
          }
        });
        console.log("Valid Drivers ---->", validDrivers);
        validDrivers.forEach((driver) => {
          // @ts-ignore
          strapi.io
            .to(driver.agent.connection_id)
            .emit("show-rides", { validOrders: [order] });
        });
      }

      // if (startLocation?.gps) {
      //   if (
      //     distance(agentService.location_id.gps, startLocation.gps) <= 2 &&
      //     order.order_id.items[0].item_fulfillment_ids.find(
      //       (fulfillment) =>
      //         fulfillment.fulfilment_id.service.id === agentService.id
      //     )
      //   ) {
      //     // @ts-ignore
      //     strapi.io.to().emit("show-rides", { validOrders: [order] });
      //   }
      // }

      // const validOrders = availableOrders?.filter((order) => {

      // });
    } catch (error) {
      console.log("Error:", error);
    }
  },
  async sendRideStatus(orderFulfillment: any = {}) {
    const { id } = orderFulfillment;
    if (!id) {
      return;
    }
    try {
      const order = await services
        .rideService({ strapi })
        .getOrderFulfillment(id);
      // @ts-ignore
      strapi.io.emit("ride-status", order);
    } catch (error) {
      console.log("Error:", error);
    }
  }
});
