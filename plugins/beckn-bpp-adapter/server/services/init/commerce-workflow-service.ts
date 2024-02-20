import { Strapi } from "@strapi/strapi";
import { FilterUtil, ObjectUtil } from "../../util";
import { KeyValuePair } from ".././../types";
import { PLUGIN } from "../../constants";



export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    const { items, provider, billing } = message.order;
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
          sc_retail_product: {
            populate: {
              price_bareakup_ids: {},
            },
          },
          item_fulfillment_id: {
            populate: {
              fulfilment_id: {},
            },
          },
          item_meta_id: {
            populate: {
              fulfilment_id: {},
              location_id: {},
            },
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

    const itemDetails = await strapi.entityService.findMany(
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
    const billingInfo = billing
    const initDetails = itemDetails.map(item => ({
      ...item,
      billing: billingInfo
    }));
    return initDetails;
  },
});