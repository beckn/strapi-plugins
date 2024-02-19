import { Strapi } from '@strapi/strapi';
import { KeyValuePair } from '.././../types';

export default ({ strapi }: { strapi: Strapi }) => ({
    async getCategoryId(id: string, populate: KeyValuePair = {}) {
        return await strapi.entityService.findOne('api::category.category', id, {
            populate
        });
    },
    async getTagById(id: string, populate: KeyValuePair = {}) {
        return await strapi.entityService.findOne('api::tag.tag', id, {
            populate
        });
    }
});
