import { Strapi } from '@strapi/strapi';
import { ObjectUtil, FilterUtil } from '../../util';
import { KeyValuePair } from '../../types';

export default ({ strapi }: { strapi: Strapi }) => ({
    async init(message, domain?: string) {
        const {
            items,
        } = message.order;
        console.log("ITEM::::",items)
        const itemValue: KeyValuePair = items ? FilterUtil.getItemsFilter(items) : {};
        const itemFilter={
            id:{
                $in:itemValue
            }
        }
        console.log("itemFilter",itemFilter)
        const itemDetail = await strapi.entityService.findMany('api::item.item', {
            filters: itemFilter,populate:{service:true}
        });
        console.log("ITEMDETAIL::::",itemDetail)
        return itemDetail;
    },
});


