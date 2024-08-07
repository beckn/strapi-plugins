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
            state_code: RIDE_STATUS_CODE.RIDE_COMPLETED,
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
  }
});
