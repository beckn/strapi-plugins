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
      console.log(
        "\n\n\n",
        "ProviderData=====>",
        JSON.stringify(providerData),
        "\n\n"
      );
      // changes made from here

      const newItems: any[] = [];
      for (let i = 0; i < providerData.items.length; i++) {
        let item = providerData.items[i];

        if (item?.tag_group_id) {
          console.log(
            "\n\n\nTag Group Id====>",
            JSON.stringify(item),
            "\n\n\n"
          );
          const tag_group = await strapi.entityService.findMany(
            "api::tag.tag",
            {
              filter: {
                tag_group_id: item.tag_group_id
              }
            }
          );
          item = { ...item, tag_group_id: tag_group };
        }
        if (item.cat_attr_tag_relations.length) {
          let category_attr_tag_relations: any[] = [];
          for (let j = 0; j < item.cat_attr_tag_relations.length; j++) {
            if (item.cat_attr_tag_relations[j].taxanomy === "CATEGORY") {
              const relation = await strapi.entityService.findOne(
                "api::category.category",
                item.cat_attr_tag_relations[j].taxanomy_id,
                {
                  parent_id: {}
                }
              );
              category_attr_tag_relations = [
                ...category_attr_tag_relations,
                { ...item.cat_attr_tag_relations[j], taxanomy_id: relation }
              ];
            }
            if (item.cat_attr_tag_relations[j].taxanomy === "TAG") {
              const relation = await strapi.entityService.findOne(
                "api::tag.tag",
                item.cat_attr_tag_relations[j].taxanomy_id,
                {
                  tag_group_id: {}
                }
              );
              category_attr_tag_relations = [
                ...category_attr_tag_relations,
                { ...item.cat_attr_tag_relations[j], taxanomy_id: relation }
              ];
            }
          }
          item = {
            ...item,
            cat_attr_tag_relations: category_attr_tag_relations
          };
        }
        newItems.push(item);
      }
      return {
        ...providerData,
        items: newItems
      };

      // await providerData.items.map(async (item) => {
      //   await Promise.all([
      //     ...item["cat_attr_tag_relations"]?.map(async (taxanomy) => {
      //       if (taxanomy.taxanomy === "CATEGORY") {
      //         taxanomy.taxanomy_id = await strapi.entityService.findOne(
      //           "api::category.category",
      //           parseInt(taxanomy.taxanomy_id),
      //           {
      //             parent_id: {}
      //           }
      //         );
      //       } else if (taxanomy.taxanomy === "TAG") {
      //         taxanomy.taxanomy_id = await strapi.entityService.findOne(
      //           "api::tag.tag",
      //           parseInt(taxanomy.taxanomy_id),
      //           {
      //             tag_group_id: {}
      //           }
      //         );
      //       }
      //     }),

      //     (async () => {
      //       return item?.tag_group_id
      //         ? await strapi.entityService.findMany("api::tag.tag", {
      //             filter: {
      //               tag_group_id: item.tag_group_id
      //             },
      //             populate: {
      //               tag_group_id: {}
      //             }
      //           })
      //         : null;
      //     })()
      //   ]);
      // });

      // // to here
      // // return providerData
      // return providerData;
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
                  },
                  domain_id: {
                    DomainName: "deg:finance"
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
                    sc_retail_product: {}
                  }
                }
              }
            },
            customer_id: {}
          }
        }
      );
      return { orders };
    } catch (error) {
      console.log("Failed to get the orders: ", error);
      throw error;
    }
  }
});
