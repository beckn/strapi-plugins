import { Strapi } from '@strapi/strapi';
import { ObjectUtil, FilterUtil } from '../../util';
import { KeyValuePair } from '.././../types';
import { PLUGIN } from '../../constants';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index({ message }) {
        try {
            const {
                order,
            } = message;
            if (order) {
                const result = await strapi.entityService.findMany('api::order-fulfillment.order-fulfillment', {
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
                                        sc_retail_product: {},
                                        item_fulfillment_id: {
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
                });
                const orderResponse = result[0] || {};
                const customerId = orderResponse?.customer_id?.id;
                if (customerId) {
                    await strapi.entityService.update('api::customer.customer', customerId, {
                        data: {
                            contact: order.fulfillments[0].customer.contact.phone
                        },
                    });

                    const commonService = strapi
                        .plugin(PLUGIN)
                        .service('commonService');

                    await Promise.all(await (orderResponse?.order_id?.items || []).map(async (item) => {
                        await Promise.all(item['cat_attr_tag_relations']?.map(async (taxanomy) => {
                            if (taxanomy.taxanomy === "CATEGORY") {
                                taxanomy.taxanomy_id = await commonService.getCategoryById(taxanomy.taxanomy_id, {
                                    parent_id: {}
                                });
                            } else if (taxanomy.taxanomy === "TAG") {
                                taxanomy.taxanomy_id = await commonService.getTagById(taxanomy.taxanomy_id, {
                                    tag_group_id: {}
                                });
                            }
                        }));
                    }));
                    return {
                        ...orderResponse,
                        provider: (orderResponse?.order_id?.items || [])[0]?.provider
                    };
                }
            }
            return {};
        } catch (e) {
            console.log('Error', e);
        }
    }
});


