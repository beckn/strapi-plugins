import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
    async track({ message }) {
        const {
            order_id,
        } = message;
        const order = await strapi.entityService.findMany('api::order-fulfillment.order-fulfillment', {
            filters: {
                order_id
            },
            populate: {
                order_tracking_id: {},
                order_fulfillment_location_id: {}
            }
        });
        return order[0] || {};
    }
});
