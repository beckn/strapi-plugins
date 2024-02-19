import { Strapi } from '@strapi/strapi';
import { ObjectUtil, FilterUtil } from '../../util';
import { KeyValuePair } from '.././../types';

export default ({ strapi }: { strapi: Strapi }) => ({
    async search(message, domain?: string) {
        const {
            item,
            provider,
            category
        } = message.intent;
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
                    sc_retail_product: {}
                }
            },
            category_ids: {}
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
        console.log("providers::",providers)
        return providers;
    },
});


