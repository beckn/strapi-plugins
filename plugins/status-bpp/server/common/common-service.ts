import { Strapi } from '@strapi/strapi';
import { KeyValuePair } from '../types/common-types';

export default ({ strapi }: { strapi: Strapi }) => ({
    async getCategoryById(id: string, populate: KeyValuePair = {}) {
        return await strapi.entityService.findOne('api::category.category', id, {
            populate
        });
    },
    async getTagById(id: string, populate: KeyValuePair = {}) {
        return await strapi.entityService.findOne('api::tag.tag', id, {
            populate
        });
    },
    async getOrderFulfillmentById(id: string, populate: KeyValuePair = {}) {
        return await strapi.entityService.findOne('api::order-fulfillment.order-fulfillment', id, {
            populate
        });
    }
});
