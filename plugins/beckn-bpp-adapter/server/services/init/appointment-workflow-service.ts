import { Strapi } from '@strapi/strapi';
import { FilterUtil } from '../../util';
import { KeyValuePair } from '../../types';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index({ message }) {
        const {
            items,
        } = message.order;
        const itemValue: KeyValuePair = items ? FilterUtil.getItemsFilter(items) : {};
        const itemFilter = {
            id: {
                $in: itemValue
            }
        }
        const itemDetail = await strapi.entityService.findMany('api::item.item', {
            filters: itemFilter, populate: { service: true }
        });
        return itemDetail;
    },
});