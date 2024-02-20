import { Strapi } from '@strapi/strapi';
import { ObjectUtil, FilterUtil } from '../../util';
import { KeyValuePair } from '.././../types';
import { PLUGIN } from '../../constants';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index({ message, context }) {
        const {
            item,
            provider,
            category
        } = message.intent || {};
        const { domain } = context;
        const filters: KeyValuePair = provider ? FilterUtil.getProviderFilter(provider) : {};
        const populate: KeyValuePair = {
            items: {
                populate: {
                    cat_attr_tag_relations: {
                        filters: {
                            taxanomy: {
                                $in: ['TAG', 'CATEGORY']
                            }
                        }
                    },
                    image: {},
                    service: {},
                    item_fulfillment_id: {
                        populate: {
                            fulfilment_id: {}
                        }
                    }
                }
            },
            category_ids: {},
            location_id: {},
            fulfillments: {}
        }

        if (domain) {
            filters.domain_id = {
                DomainName: domain
            }
        }
        if (item) {
            populate.items.filters = filters.items = FilterUtil.getItemFilter(item);
        }

        if (category) {
            populate.category_ids.filters = filters.category_ids = FilterUtil.getCategoryFilter(category);
        }
        ObjectUtil.removeEmptyObjectKeys(filters);
        ObjectUtil.removeEmptyKeys(populate);
        const providers = await strapi.entityService.findMany('api::provider.provider', {
            filters,
            populate
        });

        const commonService = strapi
            .plugin(PLUGIN)
            .service('commonService');
        await Promise.all(providers.map(async (provider) => {
            await Promise.all(await provider.items.map(async (item) => {
                await Promise.all(item['cat_attr_tag_relations']?.map(async (taxanomy) => {
                    if (taxanomy.taxanomy === "CATEGORY") {
                        taxanomy.taxanomy_id = await commonService.getCategoryById(taxanomy.taxanomy_id);
                    } else if (taxanomy.taxanomy === "TAG") {
                        taxanomy.taxanomy_id = await commonService.getTagById(taxanomy.taxanomy_id);
                    }
                }));
            }));
        }));
        return providers;
    }
});
