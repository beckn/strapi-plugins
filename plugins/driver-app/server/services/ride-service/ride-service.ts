import { Strapi } from "@strapi/strapi";
import { MOBILITY_DOMAIN, RIDE_STATUS_CODE } from "../../../contstants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async showMobilityOrders(status_code: RIDE_STATUS_CODE) {
    try {
      const orders = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            state_code: { $eq: status_code },
            order_id: {
              items: {
                provider: {
                  domain_id: {
                    DomainName: MOBILITY_DOMAIN
                  }
                }
              }
            }
          },
          populate: {
            order_id: {
              populate: {
                items: {
                  populate: {
                    provider: {
                      populate: {
                        domain_id: true
                      }
                    }
                  }
                }
              }
            },
            stops: true
          }
        }
      );

      return orders;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async showMobilityOrder(order_id: number, agent_id: number) {
    try {
      const orders = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            order_id,
            state_value: RIDE_STATUS_CODE.RIDE_COMPLETED,
            agent_id
          },
          populate: {
            customer_id: {},
            order_id: {
              populate: {
                items: {
                  populate: {
                    provider: {
                      populate: {
                        domain_id: true
                      }
                    },
                    sc_retail_product: {}
                  }
                }
              }
            },
            stops: true
          }
        }
      );

      return orders;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async updateRide(agent_id: number, order_id: number, order_status: string) {
    try {
      let orderFulfillment = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            order_id
          }
        }
      );
      if (!orderFulfillment.length) {
        throw new Error("No order fulfillment exists for this order");
      }
      orderFulfillment = orderFulfillment[0];
      const rideStatus = RIDE_STATUS_CODE;
      let validStatus = false;
      order_status = order_status.trim();
      for (const status in rideStatus) {
        if (rideStatus[status].trim() === order_status) {
          validStatus = true;
          break;
        }
      }
      if (!validStatus) {
        throw new Error("Invalid order status provided");
      }
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
