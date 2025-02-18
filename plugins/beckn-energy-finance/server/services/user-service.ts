import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async getFinanceCatalogues(user: any) {
    try {
      const providerId = user?.agent?.provider_id?.id;
      if (!providerId) {
        throw new Error("No Provider is linked to this user to get catalogues");
      }
      const providerData = await strapi.entityService.findOne(
        "api::provider.provider",
        providerId,
        {
          populate: {
            items: {
              populate: {
                sc_retail_product: true,
                cat_attr_tag_relations: true
              }
            }
          }
        }
      );
      // changes made from here
      const providerDataWithTag = await Promise.all(
        await providerData.items.map(async (item) => {
          await Promise.all([
            ...item["cat_attr_tag_relations"]?.map(async (taxanomy) => {
              if (taxanomy.taxanomy === "CATEGORY") {
                taxanomy.taxanomy_id = await strapi.entityService.findOne(
                  "api::category.category",
                  taxanomy.taxanomy_id,
                  {
                    parent_id: {}
                  }
                );
              } else if (taxanomy.taxanomy === "TAG") {
                taxanomy.taxanomy_id = await strapi.entityService.findOne(
                  "api::tag.tag",
                  taxanomy.taxanomy_id,
                  {
                    tag_group_id: {}
                  }
                );
              }
            }),
            ...[
              async () => {
                return await strapi.entityService.findMany("api::tag.tag", {
                  filter: {
                    tag_group_id: item.tag_group_id
                  },
                  populate: {
                    tag_group_id: {}
                  }
                });
              }
            ]
          ]);
        })
      );
      // to here
      // return providerData
      return providerDataWithTag;
    } catch (error) {
      console.log("Failed to fetch finance catalogues: ", error);
      throw error;
    }
  },

  async getOrders(user: any) {
    try {
      if (!user?.agent?.id) {
        throw new Error("User agent not found");
      }
      const orders = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            order_id: {
              items: {
                provider: {
                  agents: {
                    id: user.agent.id
                  }
                }
              }
            }
          },
          populate: ["order_id.items"]
        }
      );
      return { orders };
    } catch (error) {
      console.log("Failed to get the orders: ", error);
      throw error;
    }
  }
});
