import { Strapi } from "@strapi/strapi";
import { FilterUtil, ObjectUtil } from "../../util";
import { KeyValuePair } from ".././../types";
import { PLUGIN } from "../../constants";
import { isDegRental } from "../../util";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    try {
      const { items, provider, fulfillments, tags } = message.order;
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
                  type: {},
                  state_code: {},
                  state_value: {},
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
      const quantitySelected = {
        quantity: items[0]?.quantity?.selected?.measure?.value || 0
      };
      itemDetails[0] = { ...itemDetails[0], ...quantitySelected };

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
                    (tag) => tag?.code === relation?.taxanomy_id?.tag_name // Check code if provided in request
                  )
                );
              });
          }
          return responseItem;
        });

        return provider;
      });

      if (isDegRental(context)) {
        const itemFulfillments = fulfillments?.filter((fulfillment) => items[0]?.fulfillment_ids?.find((id) => id == fulfillment?.id));

        const requestRentalStart = parseInt(itemFulfillments?.find((item) => item.type === "RENTAL_START")?.state?.name, 10);
        const requestRentalEnd = parseInt(itemFulfillments?.find((item) => item.type === "RENTAL_END")?.state?.name, 10);

        if (itemDetails[0]?.items) {
          itemDetails[0].items = await Promise.all(
            itemDetails[0]?.items.map(async (item) => {
              // Extract rental start and end from the item
              const rentalStartEpoch = parseInt(item?.item_fulfillment_ids?.find((fulfillment) => fulfillment?.fulfilment_id?.type === "RENTAL_START")?.fulfilment_id?.state_value, 10);
              const rentalEndEpoch = parseInt(item?.item_fulfillment_ids?.find((fulfillment) => fulfillment?.fulfilment_id?.type === "RENTAL_END")?.fulfilment_id?.state_value, 10);

              // ✅ Step 1: Check if requested time falls within allowed rental period
              if (!(rentalStartEpoch <= requestRentalStart && rentalEndEpoch >= requestRentalEnd)) {
                return null; // ❌ Item is NOT valid, remove it
              }

              // ✅ Step 2: Fetch existing booked slots
              const orderFulfillments = await strapi.db.query("api::order-fulfillment.order-fulfillment").findMany({
                where: {
                  order_id: { items: item?.id },
                  fulfilment_id: { type: { $in: ["RENTAL_START", "RENTAL_END"] } }
                },
                populate: ["order_id", "fulfilment_id", "state_code", "state_value"]
              });

              // ✅ Step 3: Group by `order_id` to separate `RENTAL_START` and `RENTAL_END`
              const groupedFulfillments = orderFulfillments.reduce((acc, fulfillment) => {
                const orderId = fulfillment.order_id?.id;
                if (!acc[orderId]) {
                  acc[orderId] = { order_id: orderId, RENTAL_START: null, RENTAL_END: null };
                }

                if (fulfillment.fulfilment_id.type === "RENTAL_START") {
                  acc[orderId].RENTAL_START = fulfillment;
                } else if (fulfillment.fulfilment_id.type === "RENTAL_END") {
                  acc[orderId].RENTAL_END = fulfillment;
                }

                return acc;
              }, {});

              // ✅ Step 4: Check if requested rental period overlaps with existing bookings
              const isAvailable = Object.values(groupedFulfillments).every(({ RENTAL_START, RENTAL_END }) => {
                const existingStart = parseInt(RENTAL_START?.state_value, 10);
                const existingEnd = parseInt(RENTAL_END?.state_value, 10);

                // ✅ Overlap logic:
                return !(requestRentalStart <= existingEnd && requestRentalEnd >= existingStart);
              });

              return isAvailable ? item : null; // ✅ Return the item if available
            })
          );

          // ✅ Remove `null` items (which had overlap)
          itemDetails[0].items = itemDetails[0].items.filter(Boolean);
        }
        return itemDetails;
      }

      return itemDetails;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
});
