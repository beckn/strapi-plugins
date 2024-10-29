/* eslint-disable indent */
import { Strapi } from '@strapi/strapi';
import { PLUGIN } from '../../constants'
import { isEnergy, TradeUtil } from '../../util';

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
        console.log("Order details fetched: ", orderDetails.order_id);
        const { id, domain, bap_id, bap_uri, order_transaction_id } = orderDetails?.order_id;

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
            if (isEnergy({ domain })) {
                let eventDescription = '';
                if (orderDetails[0]?.state_code.toLowerCase() === 'order_transmission') {
                    eventDescription = 'Energy transmission started'
                }

                if (orderDetails[0]?.state_value.toLowerCase() === 'order_completed') {
                    eventDescription = 'Energy transmission completed'
                }
                TradeUtil.addTradeLog({
                    transactionId: order_transaction_id,
                    event_name: 'beckn_on_status',
                    description: eventDescription,
                    data: {}
                });
            }
            await strapi
                .plugin(PLUGIN)
                .controller("eventHandlerController")
                .index(payload);
        } catch (error) {
            console.log("Unsolicited Controller Order Status Update Error calling external API: ", error);
        }

    }

});
