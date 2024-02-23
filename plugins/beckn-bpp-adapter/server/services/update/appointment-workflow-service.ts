import { Strapi } from '@strapi/strapi';
import { ObjectUtil, FilterUtil } from '../../util';
import { KeyValuePair } from '.././../types';
import { PLUGIN } from '../../constants';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index({ message, context }) {
        const {
            order_id,
        } = message;
        const order = await strapi.entityService.findMany('api::order-fulfillment.order-fulfillment', {
            filters: {
                order_id
            },
            populate: {
                order_id: {}
            }
        });
        return order[0] || {};
    }
});
