import { Strapi } from "@strapi/strapi";
import { MOBILITY_DOMAIN, RIDE_STATUS_CODE } from "../../../contstants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async showMobilityOrders(status_code: RIDE_STATUS_CODE) {
    try {
      const orders = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            state_value: { $eq: status_code },
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
  async updateRide(
    agent_id: number,
    order_id: number,
    order_status: RIDE_STATUS_CODE
  ) {
    try {
      let orderFulfillment = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            order_id: {
              id: order_id,
              items: {
                item_fulfillment_ids: {
                  fulfilment_id: {
                    service: {
                      agent_id: agent_id
                    }
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
                    item_fulfillment_ids: {
                      populate: {
                        fulfilment_id: {
                          populate: {
                            service: {
                              populate: { agent_id: {} }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      );
      if (!orderFulfillment.length) {
        throw new Error("No order fulfillment exists for this order");
      }
      orderFulfillment = orderFulfillment[0];
      const fulfilmentService =
        orderFulfillment?.order_id?.items[0]?.item_fulfillment_ids?.find(
          (id: any) => id?.fulfilment_id?.service?.agent_id?.id === agent_id
        );

      const updatedRide = await strapi.entityService.update(
        "api::order-fulfillment.order-fulfillment",
        orderFulfillment.id,
        {
          data: {
            ...(order_status === RIDE_STATUS_CODE.RIDE_ACCEPTED
              ? { fulfilment_id: fulfilmentService.fulfilment_id.id }
              : {}),
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
