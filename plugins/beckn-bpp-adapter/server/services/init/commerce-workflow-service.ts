import { Strapi } from "@strapi/strapi";
import {
  FilterUtil,
  ObjectUtil,
  SearchUtil,
  InitUtil,
  TradeUtil,
  isEnergy
} from "../../util";
import { KeyValuePair } from ".././../types";
import { PLUGIN } from "../../constants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    try {
      const { items, provider, billing, fulfillments, tags } = message.order;
      const { domain } = context;
      const filters: KeyValuePair = provider
        ? FilterUtil.getProviderFilter(provider)
        : {};
      const itemValue: KeyValuePair = items
        ? FilterUtil.getItemsFilter(items)
        : {};
      const itemFilter = {
        id: {
          $in: itemValue
        }
      };
      const populate: KeyValuePair = {
        agents: {
          populate: {
            agent_profile: {
              credential: {}
            }
          }
        },
        category_ids: {},
        location_id: {},
        fulfillments: {
          populate: {
            tag_ids: {
              populate: {
                tag_group_id: {}
              }
            }
          }
        },
        payment_methods: {},
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
            }
          }
        }
      };

      if (domain) {
        filters.domain_id = {
          DomainName: domain
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
          populate
        }
      );

      if (tags?.find(tag => tag?.descriptor?.code === "preFinanced" && tag?.descriptor?.name === "true")) {
        itemDetails.forEach(provider => {
          provider.items.forEach(item => {
            if (item.sc_retail_product) {
              // Update the code and price value
              if (item?.code)
                item.code = `${parseInt(item.code) + 10}`;
              if (item?.sc_retail_product?.min_price)
                item.sc_retail_product.min_price = `${parseInt(item.sc_retail_product.min_price) - 2}`;
              if (item?.sc_retail_product?.max_price)
                item.sc_retail_product.max_price = `${parseInt(item.sc_retail_product.max_price) - 2}`;
            }
          });
        });
      }

      // Request for Cred from BPP is not required as of now
      // itemDetails = await SearchUtil.filterTrustedSource(itemDetails, context);

      await InitUtil.createTrade(context, message.order, itemDetails[0]);
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

      const billingInfo = billing;
      let initDetails = itemDetails.map((item) => ({
        ...item,
        billing: billingInfo,
        fulfillments: fulfillments || []
      }));
      if (isEnergy(context)) {
        TradeUtil.addTradeLog({
          transactionId: context.transaction_id,
          event_name: "beckn_on_init",
          description: "Sending Order terms",
          data: initDetails
        });
      }
      initDetails = initDetails.map((provider) => {
        provider.items = provider.items.map((responseItem) => {
          const bodyItem = items.find(
            (item) => Number(item.id) === responseItem.id
          );
          if (bodyItem && bodyItem?.tags?.length) {
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
      return initDetails;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
});
