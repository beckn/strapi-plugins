import { Strapi } from "@strapi/strapi";
import { FilterUtil, ObjectUtil } from "../../util";
import { KeyValuePair } from "../../types";
import { PLUGIN } from "../../constants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    try {
      const { items, provider, billing, fulfillments } = message.order;
      const { domain, transaction_id } = context;
      const currentDate = new Date();
      const isoString = currentDate.toISOString();
      let orderId;

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
        tax_id: billing?.tax_id || "",
      };

      // Extract customer details
      const customer = fulfillments[0].customer;
      const custEmail = customer?.contact?.email || billing?.email;
      const custData = {
        first_name: customer?.person?.name,
        email: custEmail,
        contact: customer?.contact?.phone,
        publishedAt: isoString,
      };

      // Extract shipping details
      const shipping =
        (fulfillments[0]?.stops
          ? fulfillments[0]?.stops[0]?.location
          : undefined) || billing;
      const shippingDetail = {
        gps: shipping?.gps || "",
        city_name: shipping?.city?.name || "",
        city_code: shipping?.city?.code || "",
        state_code: shipping?.state?.name || "",
        state_name: shipping?.state?.code || "",
        country_name: shipping?.country?.name || "",
        country_code: shipping?.country?.code || "",
        area_code: shipping?.area_code || "",
        address: shipping?.address || "",
        publishedAt: isoString,
      };

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
          };
          // Create order
          const createOrder = await strapi.entityService.create(
            "api::order.order",
            { data: orderData }
          );
          orderId = createOrder.id;

          // Create order address
          const orderAddressData = {
            order_id: orderId.toString(),
            ...billingInfo,
            publishedAt: isoString,
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
                data: custData,
              })
            ).id;

          // Create shipping location
          const createShipping = await strapi.entityService.create(
            "api::order-fulfillment-location.order-fulfillment-location",
            { data: shippingDetail }
          );
          const shippingLocationId = createShipping.id;

          // Create tracking details
          const trackingDetail = {
            url: `${process.env.BPP_ADAPTER_PLUGIN_URL}/tracking/${orderId}`,
            status: "active",
            publishedAt: isoString,
          };
          const createTracking = await strapi.entityService.create(
            "api::order-tracking.order-tracking",
            { data: trackingDetail }
          );
          const trackingId = createTracking.id;

          // Create order fulfillment
          const orderFulfillmentDetail = {
            fulfilment_id: fulfillments[0].id,
            order_id: orderId,
            customer_id: custId,
            order_fulfillment_location_id: shippingLocationId,
            order_tracking_id: trackingId,
            publishedAt: isoString,
          };

          await strapi.entityService.create(
            "api::order-fulfillment.order-fulfillment",
            { data: orderFulfillmentDetail }
          );
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
          $in: itemId,
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
            sc_retail_product: {
              populate: {
                price_bareakup_ids: {},
                product_cancel: {
                  populate: {
                    cancel_term_id: {},
                  },
                },
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
      const billingDetails = billing;
      const fulfillmentDetails = fulfillments;
      const confirmDetails = itemDetails.map((item) => ({
        ...item,
        billing: billingDetails,
        fulfillment: fulfillmentDetails,
        order_id: orderId,
      }));
      return confirmDetails;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  },
});
