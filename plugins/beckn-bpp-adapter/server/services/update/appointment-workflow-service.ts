import { Strapi } from "@strapi/strapi";
import { PLUGIN } from "../../constants";
import { ObjectUtil } from "../../util";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message }) {
    try {
      const { order } = message;
      if (order) {
        const result = await strapi.entityService.findMany(
          "api::order-fulfillment.order-fulfillment",
          {
            filters: {
              order_id: order.id
            },
            populate: {
              order_id: {
                filters: {
                  id: order.id
                },
                populate: {
                  items: {
                    populate: {
                      cat_attr_tag_relations: {},
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
                          fulfilment_id: {}
                        }
                      },
                      provider: {
                        populate: {
                          category_ids: {},
                          logo: {},
                          location_id: {},
                          fulfillments: {},
                          payment_methods: {}
                        }
                      }
                    }
                  },
                  order_address: {}
                }
              },
              fulfilment_id: {},
              customer_id: {},
              order_fulfillment_location_id: {}
            }
          }
        );
        const orderResponse = result[0] || {};

        const customerId = orderResponse?.customer_id?.id;
        if (customerId) {
          await this.update(order, customerId);
          const commonService = strapi.plugin(PLUGIN).service("commonService");
          await Promise.all(
            await (orderResponse?.order_id?.items || []).map(async (item) => {
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
          const provider =
            (orderResponse?.order_id?.items || [])[0]?.provider || {};
          return {
            ...orderResponse,
            provider: {
              ...provider,
              payment_methods: {
                ...provider.payment_methods[0],
                price: this.getItemTotalPrice(orderResponse?.order_id?.items)
              }
            }
          };
        }
      }
      return {};
    } catch (e) {
      console.log("Error", e);
    }
  },
  async update(order, customerId) {
    const { billing = {} } = order;
    const { customer = {} } = order?.fulfillments?.[0] || {};
    if (Object.keys(billing).length) {
      const billingData = ObjectUtil.removeEmptyKeys({
        first_name: billing?.name || "",
        address_line_1: billing?.address || "",
        state: billing?.state?.name || billing?.state?.code || "",
        city: billing?.city?.name || billing?.city?.code || "",
        email: billing?.email || "",
        phone: billing?.phone || "",
        postcode: billing?.area_code || "",
        tax_id: billing?.tax_id || ""
      });

      const orderDetails = await strapi.entityService.findOne(
        "api::order.order",
        order.id,
        {
          populate: { order_address: true }
        }
      );
      console.log(billingData);

      await strapi.entityService.update(
        "api::order-address.order-address",
        orderDetails?.order_address?.id,
        {
          data: billingData
        }
      );
    }
    if (Object.keys(customer).length) {
      const customerData = ObjectUtil.removeEmptyKeys({
        contact: customer?.contact?.phone,
        first_name: customer?.person?.name.split(" ")?.[0],
        last_name: customer?.person?.name.split(" ")?.[1],
        email: customer?.contact?.email
      });
      await strapi.entityService.update("api::customer.customer", customerId, {
        data: customerData
      });
    }
  },
  getItemTotalPrice(items) {
    let value = 0;
    let currency = "";
    items.map((item) => {
      value += Number(item.sc_retail_product.min_price);
      currency = item.sc_retail_product.currency;
    });
    return {
      value,
      currency
    };
  }
});
