import { Strapi } from "@strapi/strapi";
import { ObjectUtil, FilterUtil } from "../../util";
import { KeyValuePair } from ".././../types";
import { PLUGIN } from "../../constants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    const { item, provider, category } = message?.intent || {};
    const { domain } = context;

    const filters: KeyValuePair = provider
      ? FilterUtil.getProviderFilter(provider)
      : {};
    const populate: KeyValuePair = {
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
          item_fulfillment_id: {
            populate: {
              fulfilment_id: {
                populate: {
                  agent_ids: {}
                }
              },
              location_id: {}
            }
          }
        }
      },
      payment_methods: {},
      category_ids: {},
      location_id: {},
      fulfillments: {}
    };

    if (domain) {
      filters.domain_id = {
        DomainName: domain
      };
    }

    if (item) {
      const itemFilter = ObjectUtil.removeEmptyObjectKeys(
        FilterUtil.getItemFilter(item)
      );
      if (Object.keys(itemFilter).length) {
        populate.items.filters = filters.items = itemFilter;
      }
    }

    if (category) {
      const categoryFilter = ObjectUtil.removeEmptyObjectKeys(
        FilterUtil.getCategoryFilter(category)
      );
      if (Object.keys(categoryFilter).length) {
        populate.category_ids.filters = filters.category_ids = categoryFilter;
      }
    }
    ObjectUtil.removeEmptyObjectKeys(filters);
    ObjectUtil.removeEmptyKeys(populate);
    const providers = await strapi.entityService.findMany(
      "api::provider.provider",
      {
        filters,
        populate
      }
    );
    const commonService = strapi.plugin(PLUGIN).service("commonService");

    await Promise.all(
      providers.map(async (provider: KeyValuePair) => {
        await Promise.all(
          await provider.items.map(async (item) => {
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
    const newProviders = providers.map((provider: any) => {
      const filteredItems = provider?.items?.filter((itemFromStrapi) => {
        const isMatch = item?.tags?.[0]?.list?.some((listItem: any) =>
          itemFromStrapi?.cat_attr_tag_relations?.some(
            (tag: any) =>
              tag?.taxanomy_id?.code === listItem?.descriptor?.code &&
              tag?.taxanomy_id?.value === listItem?.value
          )
        );
        if (isMatch) {
          return itemFromStrapi;
        }
      });

      if (filteredItems?.length) {
        return { ...provider, items: filteredItems };
      }
      return null;
    });
    if ((newProviders as any[]).every((elem: any) => elem === null)) {
      return providers;
    } else {
      return newProviders;
    }
  }
});
