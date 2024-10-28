import { Strapi } from "@strapi/strapi";
import { KeyValuePair } from "../../types";
import { PLUGIN } from "../../constants";
import { isEnergy, TradeUtil } from "../../util";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    try {
      const { order_id } = message;
      const { domain } = context;
      const populate: KeyValuePair = {
        order_id: {
          filters: {
            domain: {
              $eq: domain.trim()
            }
          },
          populate: {
            items: {
              populate: {
                cat_attr_tag_relations: {
                  filters: {
                    taxanomy: {
                      $in: ["TAG", "CATEGORY"]
                    }
                  }
                },
                image: {},
                item_fulfillment_ids: {
                  populate: {
                    fulfilment_id: {
                      populate: {
                        service: {
                          populate: {
                            location_id: {},
                            service_availabilities: {},
                            agent_id: {
                              populate: {
                                agent_profile: {}
                              }
                            }
                          }
                        }
                      }
                    },
                    location_id: {}
                  }
                },
                item_meta_id: {
                  populate: {
                    fulfilment_id: {},
                    location_id: {}
                  }
                },
                sc_retail_product: {
                  populate: {
                    price_bareakup_ids: {},
                    product_cancel: {
                      populate: {
                        cancel_term_id: {}
                      }
                    }
                  }
                },
                provider: {
                  populate: {
                    logo: {},
                    location_id: {},
                    category_ids: {},
                    fulfillments: {},
                    payment_methods: {}
                  }
                }
              }
            },
            order_address: {}
          }
        },
        fulfilment_id: {},
        customer_id: {},
        agent_id: {
          populate: {
            agent_profile: {}
          }
        },
        stops: {}
      };

      const orderDetails = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: { order_id: order_id },
          populate
        }
      );

      const commonService = strapi.plugin(PLUGIN).service("commonService");
      await Promise.all(
        orderDetails.map(async (orderDetail) => {
          await Promise.all(
            await orderDetail.order_id.items.map(async (item) => {
              await Promise.all(
                item["cat_attr_tag_relations"]?.map(async (taxanomy) => {
                  if (taxanomy.taxanomy === "CATEGORY") {
                    taxanomy.taxanomy_id = await commonService.getCategoryById(
                      taxanomy.taxanomy_id,
                      {
                        parent_id: {}
                      }
                    );
                  } else if (taxanomy.taxanomy === "TAG") {
                    taxanomy.taxanomy_id = await commonService.getTagById(
                      taxanomy.taxanomy_id,
                      {
                        tag_group_id: {}
                      }
                    );
                  }
                })
              );
            })
          );
        })
      );
      const eventData = {
        order_id: orderDetails[0]?.order_id.id,
        order_status: orderDetails[0]?.order_id.status,
        domain: orderDetails[0]?.order_id.domain
      };
      strapi.eventHub.emit("status.request", eventData);
      if (isEnergy(context)) {
        let eventDescription = '';
        if (orderDetails[0]?.state_value.toLowerCase() === 'order_placed') {
          eventDescription = 'Energy transmission started'
        }

        if (orderDetails[0]?.state_value.toLowerCase() === 'order_completed') {
          eventDescription = 'Energy transmission completed'
        }
        TradeUtil.addTradeLog({
          transactionId: context.transaction_id,
          event_name: 'beckn_on_status',
          description: eventDescription,
          data: {}
        });
      }
      return orderDetails;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
});
