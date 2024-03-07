import { Strapi } from "@strapi/strapi";
import { KeyValuePair } from "../../types";
import { PLUGIN } from "../../constants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    try {
      const { order_id, cancellation_reason_id, descriptor } = message;
      const { domain } = context;
      const cancelMedia = [
        ...(descriptor?.media || []),
        ...(descriptor?.images || [])
      ].filter(Boolean);
      const cancelMediaResponse = await createMediaEntries(cancelMedia);
      delete descriptor?.media;
      delete descriptor?.images;
      const cancelMediaId = cancelMediaResponse.map(
        (obj: { id: string }) => obj.id
      );

      await strapi.entityService.create(
        "api::return-cancellation.return-cancellation",
        {
          data: {
            reason_id: cancellation_reason_id || "",
            reason: descriptor.short_desc || "",
            action_date_time: new Date().toISOString(),
            done_by: context.bap_id,
            media: {
              connect: cancelMediaId
            },
            publishedAt: new Date().toISOString()
          }
        }
      );
      const orderFulfillment = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: { order_id: order_id }
        }
      );
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
                item_fulfillment_id: {
                  populate: {
                    fulfilment_id: {}
                  }
                },
                item_meta_id: {
                  populate: {
                    fulfilment_id: {},
                    location_id: {}
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
                service: {}
              }
            },
            order_address: {}
          }
        },
        fulfilment_id: {},
        customer_id: {},
        agent_id: {},
        order_fulfillment_location_id: {}
      };
      const cancelDetails = await strapi.entityService.update(
        "api::order-fulfillment.order-fulfillment",
        orderFulfillment[0].id,
        {
          data: {
            state_code: "USER CANCELLED",
            state_value: message?.descriptor?.short_desc || "cancelled by user"
          },
          populate
        }
      );

      const commonService = strapi.plugin(PLUGIN).service("commonService");

      await Promise.all(
        await cancelDetails.order_id.items.map(async (item) => {
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

      return cancelDetails;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
});

async function createMediaEntries(mediaItems) {
  if (!mediaItems.length) return [];

  return Promise.all(
    mediaItems.map((item) =>
      strapi.entityService.create("api::media.media", {
        data: {
          url: item.url,
          size_type: item.size_type,
          publishedAt: new Date().toISOString()
        }
      })
    )
  );
}
