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
            order_fulfillment_location_id: true
          }
        }
      );

      return orders;
    } catch (error) {
      throw new Error(error.message);
    }
  }
});
