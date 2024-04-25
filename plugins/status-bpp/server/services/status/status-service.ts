import { Strapi } from "@strapi/strapi";
import axios from 'axios';
import { CONTENT_TYPE, COMPLETED_STATUS,SUCCESSFUL_COMPLETION_MESSAGE ,ORDER_NOT_FOUND_MESSAGE} from '../../constants';
import { TLService } from "../../tl/tl.service";
import axiosInstance from "axios";
import https from "https";
import webhookService from "../webhook/webhook-service";


export default ({ strapi }: { strapi: Strapi }) => ({
  async index(data) {
    
    try {
      const populate: any = {
        order_id: {
          populate: {
            items: {
              populate: {
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
                        agent_ids: {}
                      }
                    },
                    location_id: {},
                  },
                },
                item_meta_id: {
                  populate: {
                    fulfilment_id: {},
                    location_id: {},
                  },
                },
                provider: {
                  populate: {
                    logo: {},
                    location_id: {},
                    category_ids: {},
                    fulfillments: {},
                    payment_methods: {},
                  },
                },
                service: {},
              },
            },
            order_address: {},
          },
        },
        fulfilment_id: {},
        customer_id: {},
        agent_id: {},
        order_fulfillment_location_id: {},
      };
      console.log('Populate', populate);
      
      const orderDetails = await strapi.entityService.findOne(
        "api::order-fulfillment.order-fulfillment",
        data.id,
        {
          populate,
        }
      );

      //const commonService = strapi.plugin(PLUGIN).service("commonService");
      console.log('Order fulfillment service data: ', orderDetails.order_id);
      for(let item of orderDetails.order_id.items) {
        console.log('Order fulfillment items data: ', item);
        console.log('Order fulfillment items cat tag relation: ', item.cat_attr_tag_relations);
      }
      //console.log('Order fulfillment items data: ', JSON.stringify(orderDetails.items));

      const commonService = strapi.plugin('status-bpp').service("commonService");
      
      if (orderDetails && orderDetails.order_id && orderDetails.order_id.items) {
        for (const item of orderDetails.order_id.items) {
            if (item.cat_attr_tag_relations) {
                for (const taxanomy of item.cat_attr_tag_relations) {
                    if (taxanomy.taxanomy === "CATEGORY") {
                        taxanomy.taxanomy_id = await commonService.getCategoryById(
                            taxanomy.taxanomy_id,
                            { parent_id: {} }
                        );
                    } else if (taxanomy.taxanomy === "TAG") {
                        taxanomy.taxanomy_id = await commonService.getTagById(
                            taxanomy.taxanomy_id,
                            { tag_group_id: {} }
                        );
                    }
                }
            }
        }
    }
      console.log('Order details after modification: ', orderDetails);
      const { domain, bap_id, bap_uri } = orderDetails.order_id;

      const context = {
        domain,
        bap_id,
        bap_uri
      }
      const transformedResult = await TLService.transform({ message: orderDetails, context }, 'on_status');
      const p = await webhookService.webhookCall(transformedResult, 'on_status');
      console.log('Response from prtotocal server, ', p);

    } catch (error) {
      console.error("Error processing index function:", error);
      throw error;
    }
  },
});
