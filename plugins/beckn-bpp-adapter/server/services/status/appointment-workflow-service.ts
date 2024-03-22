import { Strapi } from "@strapi/strapi";
import { FilterUtil, ObjectUtil } from "../../util";
import { KeyValuePair } from "../../types";
import { PLUGIN } from "../../constants";
import { Object } from '../../interface/object'

export default ({ strapi }: { strapi: Strapi }) => ({
  async index(obj: Object) {
    try {
      const { order_id } = obj.message;
      const { domain } = obj.context;
      const populate: KeyValuePair = {
        order_id: {
          filters: {
            domain: {
              $eq: domain.trim(),
            },
          },
          populate: {
            items: {
              populate: {
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
                cat_attr_tag_relations: {
                  filters: {
                    taxanomy: {
                      $in: ["TAG", "CATEGORY"],
                    },
                  },
                },
                image: {},
                item_fulfillment_id: {
                  populate: {
                    fulfilment_id: {
                      populate: {
                        agent_ids: {}
                      }
                    },
                    location_id: {},
                  },
                },
                item_meta_id: {
                  populate: {
                    fulfilment_id: {},
                    location_id: {},
                  },
                },
                provider: {
                  populate: {
                    logo: {},
                    location_id: {},
                    category_ids: {},
                    fulfillments: {},
                    payment_methods: {},
                  },
                },
                service: {},
              },
            },
            order_address: {},
          },
        },
        fulfilment_id: {},
        customer_id: {},
        agent_id: {},
        order_fulfillment_location_id: {},
      };
      console.log(JSON.stringify(populate))
      const orderDetails = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: { order_id: order_id },
          populate,
        }
      );

      const commonService = strapi.plugin(PLUGIN).service("commonService");
      await Promise.all(
        orderDetails.map(async (orderDetail:any) => {
          await Promise.all(
            await orderDetail.order_id.items.map(async (item:any) => {
              await Promise.all(
                item["cat_attr_tag_relations"]?.map(async (taxanomy:any) => {
                  if (taxanomy.taxanomy === "CATEGORY") {
                    taxanomy.taxanomy_id = await commonService.getCategoryById(
                      taxanomy.taxanomy_id,
                      {
                        parent_id: {},
                      }
                    );
                  } else if (taxanomy.taxanomy === "TAG") {
                    taxanomy.taxanomy_id = await commonService.getTagById(
                      taxanomy.taxanomy_id,
                      {
                        tag_group_id: {},
                      }
                    );
                  }
                })
              );
            })
          );
        })
      );
      return orderDetails;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  },
});
