import { Strapi } from "@strapi/strapi";
import { FilterUtil, isEnergy, ObjectUtil, TradeUtil } from "../../util";
import { KeyValuePair } from "../../types";
import { PLUGIN, DEFAULT_INITIAL_STATE } from "../../constants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    try {
      if (isEnergy(context)) {
        await TradeUtil.addTradeLog({
          transactionId: context.transaction_id,
          event_name: 'beckn_confirm',
          description: 'Order confirmation received',
          data: {}
        });
      }
      const { items, provider, billing, fulfillments } = message.order;
      const { domain, transaction_id, bap_id, bap_uri } = context;
      //only for p2p energy trade
      const itemQuantity = items[0]?.quantity?.selected?.count;
      const currentDate = new Date();
      const isoString = currentDate.toISOString();
      let orderId;
      let orderFulFillmentId;

      // Extract billing details
      const billingInfo = {
        first_name: billing?.name || "",
        address_line_1: billing?.address || "",
        state: billing?.state?.name || billing?.state?.code || "",
        city: billing?.city?.name || billing?.city?.code || "",
        email: billing?.email || "",
        phone: billing?.phone || "",
        publishedAt: isoString,
        postcode: billing?.area_code || "",
        tax_id: billing?.tax_id || ""
      };

      // Extract customer details
      const customer = fulfillments[0]?.customer || {
        person: {
          name: billing?.name
        },
        contact: {
          email: billing?.email,
          phone: billing?.phone
        }
      };
      const custEmail = customer?.contact?.email;

      const custData = {
        first_name: customer?.person?.name?.split(" ")?.[0],
        last_name: customer?.person?.name?.split(" ")?.[1],
        email: custEmail,
        contact: customer?.contact?.phone,
        publishedAt: isoString
      };

      // Extract shipping details
      const shipping =
        (fulfillments[0]?.stops
          ? fulfillments[0]?.stops.find((elem: any) => elem.type === "start") ||
          fulfillments[0]?.stops[0]
          : undefined) || billing;
      const shippingDetail = {
        gps: shipping?.location?.gps || "",
        city_name: shipping?.location?.city?.name || "",
        city_code: shipping?.location?.city?.code || "",
        state_code: shipping?.location?.state?.name || "",
        state_name: shipping?.location?.state?.code || "",
        country_name: shipping?.location?.country?.name || "",
        country_code: shipping?.location?.country?.code || "",
        area_code: shipping?.location?.area_code || "",
        address: shipping?.location?.address || "",
        publishedAt: isoString,
        type: shipping?.type || "start"
      };

      const endLocation = fulfillments[0]?.stops
        ? fulfillments[0]?.stops.find((elem: any) => elem.type === "end")
          ? fulfillments[0]?.stops.find((elem: any) => elem.type === "end")
          : undefined
        : undefined;

      let endLocationDetail: undefined | KeyValuePair;
      if (endLocation) {
        endLocationDetail = {
          gps: endLocation?.location?.gps || "",
          city_name: endLocation?.location?.city?.name || "",
          city_code: endLocation?.location?.city?.code || "",
          state_code: endLocation?.location?.state?.name || "",
          state_name: endLocation?.location?.state?.code || "",
          country_name: endLocation?.location?.country?.name || "",
          country_code: endLocation?.location?.country?.code || "",
          area_code: endLocation?.location?.area_code || "",
          address: endLocation?.location?.address || "",
          publishedAt: isoString,
          type: endLocation?.type || "end"
        };
      }

      // Extract item values
      const itemValue = items.map((obj: { id: string }) => `${obj.id}`);

      // Start transaction
      await strapi.db.transaction(async ({ trx }) => {
        try {
          const orderData = {
            status: "ACTIVE",
            items: itemValue,
            order_transaction_id: transaction_id,
            publishedAt: isoString,
            domain,
            bap_id,
            bap_uri
          };
          // Create order
          const createOrder = await strapi.entityService.create(
            "api::order.order",
            { data: orderData }
          );
          orderId = createOrder.id;

          // Create order address
          const onConfirm = async (message) => {
            try {
              // Ensure that the orderData has the expected structure
              if (
                message &&
                message.order &&
                Array.isArray(message.order.items) &&
                message.order.items.length > 0
              ) {
                const items = message.order.items;
          
                console.log("message", message);
                // Iterate over each item in the order
                for (const item of items) {
                  // Validate that the item has tags
                  if (Array.isArray(item.tags) && item.tags.length > 0) {
                    // Iterate over each tag within the item
                    for (const tag of item.tags) {
                      // Validate that the tag has a list
                      if (Array.isArray(tag.list) && tag.list.length > 0) {
                        // Iterate over each entry in the tag's list
                        for (const listEntry of tag.list) {
                          const code = listEntry.code;
          
                          if (code) {
                            // Search for the tag in Strapi by code
                            const matchingTags = await strapi.entityService.findMany("api::tag.tag", {
                              filters: { tag_name: code },
                              limit: 1,
                            });
                            console.log('matchingTags',matchingTags);
          
                            if (matchingTags.length > 0) {
                              const tagId = matchingTags[0].id;
          
                              // Add the tagId to the list entry
                              listEntry.id = tagId;
          
                              strapi.log.info(`Added tag ID ${tagId} to list entry with code: ${code}`);
                            } else {
                              strapi.log.warn(`No matching tags found for code: ${code}`);
                            }
                          } else {
                            strapi.log.warn("List entry is missing the 'code' property.");
                          }
                        }
                      } else {
                        strapi.log.warn(`Tag is missing the 'list' array or it is empty for tag descriptor code: ${tag.descriptor.code}`);
                      }
                    }
                  } else {
                    strapi.log.warn(`Item with ID ${item.id} is missing 'tags' or 'tags' is not an array.`);
                  }
                }
          
                // After processing all items, update the order in Strapi
                // Assuming you have the order ID available; adjust accordingly
                // const orderId = message.order.id; // Adjust this path based on actual order ID location
          
                if (!orderId) {
                  strapi.log.warn("Order ID is missing in orderData.message.order.");
                  return;
                }
          
                // Update the order with the modified tags
                console.log('Orderis', orderId);
                await strapi.entityService.update("api::order.order", orderId, {
                  data: {
                    tags: items, // Assuming 'items' is a writable field; adjust based on your Strapi schema
                  },
                });
          
                strapi.log.info(`Order ${orderId} has been successfully updated with tag IDs.`);
              } else {
                strapi.log.warn("OrderData structure is invalid or missing required fields.");
              }
            } catch (error) {
              strapi.log.error("Error in onConfirm service:", error);
            }
          };
          const orderAddressData = {
            order_id: orderId.toString(),
            ...billingInfo,
            publishedAt: isoString
          };
          await strapi.entityService.create(
            "api::order-address.order-address",
            { data: orderAddressData }
          );

          // Find or create customer
          const [existingCustomer] = await strapi.entityService.findMany(
            "api::customer.customer",
            { filters: { email: custEmail } }
          );

          const custId = existingCustomer
            ? existingCustomer.id
            : (
              await strapi.entityService.create("api::customer.customer", {
                data: custData
              })
            ).id;

          // Create shipping location
          const createShipping = await strapi.entityService.create(
            "api::order-fulfillment-location.order-fulfillment-location",
            { data: shippingDetail }
          );
          const stopsIds = [createShipping.id];

          if (endLocationDetail) {
            const createdEndLocation = await strapi.entityService.create(
              "api::order-fulfillment-location.order-fulfillment-location",
              { data: endLocationDetail }
            );
            stopsIds.push(createdEndLocation.id);
          }
          // Create tracking details
          const trackingDetail = {
            url: `${process.env.BPP_ADAPTER_PLUGIN_URL}/tracking/${orderId}`,
            status: "active",
            publishedAt: isoString
          };
          const createTracking = await strapi.entityService.create(
            "api::order-tracking.order-tracking",
            { data: trackingDetail }
          );
          const trackingId = createTracking.id;

          // Create Initial Order Fulfillment State
          const defaultState = DEFAULT_INITIAL_STATE.filter(
            (elem) => elem.domain === domain
          )?.[0] || {
            state: {
              state_code: "ORDER_RECEIVED",
              state_value: "ORDER RECEIVED"
            }
          };
          // Create order fulfillment
          const orderFulfillmentDetail = {
            fulfilment_id: fulfillments[0].id,
            order_id: orderId,
            customer_id: custId,
            stops: stopsIds,
            order_tracking_id: trackingId,
            state_code: defaultState.state.state_code,
            state_value: defaultState.state.state_value,
            publishedAt: isoString,
            quantity: message.order?.items[0]?.quantity?.selected?.count || 5
          };

          const orderFulfillmentRes = await strapi.entityService.create(
            "api::order-fulfillment.order-fulfillment",
            { data: orderFulfillmentDetail }
          );
          orderFulFillmentId = orderFulfillmentRes.id;

          await onConfirm(message);
          trx.commit();
        } catch (err) {
          trx.rollback();
        }
      });
      const filters: KeyValuePair = provider
        ? FilterUtil.getProviderFilter(provider)
        : {};

      const itemId: KeyValuePair = items
        ? FilterUtil.getItemsFilter(items)
        : {};
      const itemFilter = {
        id: {
          $in: itemId
        }
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

      const itemDetails = await strapi.entityService.findMany(
        "api::provider.provider",
        {
          filters,
          populate
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
      const orderFulfillment = await commonService.getOrderFulfillmentById(
        orderFulFillmentId,
        {
          order_id: {},
          fulfilment_id: {}
        }
      );
      const billingDetails = billing;
      const fulfillmentDetails = fulfillments;

      const confirmDetails = itemDetails.map((item) => ({
        ...item,
        billing: billingDetails,
        fulfillment: fulfillmentDetails,
        orderFulfillment: {
          ...orderFulfillment,
          fulfilment_id: {
            ...(orderFulfillment?.fulfilment_id || {}),
            state_code: orderFulfillment.state_code,
            state_value: orderFulfillment.state_value
          }
        },
        order_id: orderId
      }));
      if (isEnergy(context)) {
        const { min_price: itemPrice, id: scRetailId, stock_quantity: oldItemQuantity } = itemDetails[0].items[0].sc_retail_product;
        TradeUtil.addTradeLog({
          transactionId: context.transaction_id,
          event_name: 'beckn_on_confirm',
          description: 'Order Confirmation sent',
          data: { price: itemPrice, scRetailId, itemQuantity, oldItemQuantity }
        });
      }
      return confirmDetails;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
});
