import { Strapi } from "@strapi/strapi";
import { FilterUtil, ObjectUtil } from "../../util";
import { KeyValuePair } from ".././../types";
import { PLUGIN } from "../../constants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    try {
      const { items, provider } = message.order;
      const { domain } = context;
      const filters: KeyValuePair = provider
        ? FilterUtil.getProviderFilter(provider)
        : {};
      const itemValue: KeyValuePair = items
        ? FilterUtil.getItemsFilter(items)
        : {};
      const itemFilter = {
        id: {
          $in: itemValue,
        },
      };
      const populate: KeyValuePair = {
        category_ids: {},
        location_id: {},
        fulfillments: {},
        payment_methods: {},
        items: {
          populate: {
            cat_attr_tag_relations: {
              filters: {
                taxanomy: {
                  $in: ["TAG", "CATEGORY"],
                },
              },
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
              },
            },
            item_meta_id: {
              populate: {
                fulfilment_id: {},
                location_id: {},
              },
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
          },
        },
      };

      if (domain) {
        filters.domain_id = {
          DomainName: domain,
        };
      }

      if (items) {
        populate.items.filters = filters.items = itemFilter;
      }

      ObjectUtil.removeEmptyObjectKeys(filters);
      ObjectUtil.removeEmptyKeys(filters);
      ObjectUtil.removeEmptyKeys(populate);

      let itemDetails = await strapi.entityService.findMany(
        "api::provider.provider",
        {
          filters,
          populate,
        }
      );

      const commonService = strapi.plugin(PLUGIN).service("commonService");
      await Promise.all(
        itemDetails.map(async (itemDetail) => {
          await Promise.all(
            await itemDetail.items.map(async (item) => {
              await Promise.all(
                item["cat_attr_tag_relations"]?.map(async (taxanomy) => {
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
      itemDetails = itemDetails.map((provider) => {
        provider.items = provider.items.map((responseItem) => {
          // Find the matching item in request body by id
          const bodyItem = items.find(
            (item) => Number(item.id) === responseItem.id
          );
          if (bodyItem && bodyItem?.tags?.length) {
            // Filter `cat_attr_tag_relations` based on the tags in the body item
            responseItem.cat_attr_tag_relations =
              responseItem?.cat_attr_tag_relations?.filter((relation) => {
                return bodyItem?.tags?.some((tagGroup) =>
                  tagGroup?.list?.some(
                    (tag) => tag?.code === relation?.taxanomy_id?.tag_name
                  )
                );
              });
          }
          return responseItem;
        });
        return provider;
      });
      return itemDetails;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  },
});
