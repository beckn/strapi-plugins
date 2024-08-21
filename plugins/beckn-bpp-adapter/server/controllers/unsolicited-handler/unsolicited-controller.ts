/* eslint-disable indent */
import { Strapi } from '@strapi/strapi';
import { PLUGIN } from '../../constants'

export default ({ }: { strapi: Strapi }) => ({
    async orderStatusUpdate(data: any) {
        //Fetch order_id from order_fulfillment
        const populate = {
            order_id: true
        };
        const orderDetails = await strapi.entityService.findOne(
            "api::order-fulfillment.order-fulfillment",
            data.id,
            {
                populate,
            }
        ) || {};
        const { id, domain, bap_id, bap_uri } = orderDetails?.order_id;

        const payload = {
            message: {
                order_id: id
            },
            context: {
                domain,
                action: "status",
                bap_id,
                bap_uri
            }
        };
        try {
            await strapi
                .plugin(PLUGIN)
                .controller("eventHandlerController")
                .index(payload);
        } catch (error) {
            console.log("Unsolicited Controller Order Status Update Error calling external API: ", error);
        }
    }
});
