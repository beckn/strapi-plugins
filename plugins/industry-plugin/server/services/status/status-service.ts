import { Strapi } from "@strapi/strapi";
import axios from 'axios';
import { CONTENT_TYPE, COMPLETED_STATUS,SUCCESSFUL_COMPLETION_MESSAGE ,ORDER_NOT_FOUND_MESSAGE} from '../../constants';



export default ({ strapi }: { strapi: Strapi }) => ({
  async index(data) {
    if (!shouldProcessOrder(data)) return data;

    try {
    const apiUrl = `${process.env.MACHINEAPI_URL || ''}/status`;
      const response = await axios.post(apiUrl, { order_id: String(data.order_id) }, { headers: { "Content-Type": CONTENT_TYPE } });

      if (response.data.message === ORDER_NOT_FOUND_MESSAGE) {
        throw new Error(ORDER_NOT_FOUND_MESSAGE);
      }

      await updateOrderFulfillment(strapi, data.order_id, response.data.data.status);

      if (response.data.data.status.trim() === SUCCESSFUL_COMPLETION_MESSAGE) {
        await strapi.entityService.update("api::order.order", data.order_id, { data: { status: COMPLETED_STATUS } });
      }

    } catch (error) {
      console.error("Error processing index function:", error);
      throw error;
    }

    return data;
  },
});

function shouldProcessOrder({ order_status, domain }) {
  return order_status !== COMPLETED_STATUS && domain === "supply-chain-services:assembly";
}



async function updateOrderFulfillment(strapi, orderId, status) {
  const [orderFulfillment] = await strapi.entityService.findMany("api::order-fulfillment.order-fulfillment", {
    filters: { order_id: orderId },
  });

  if (!orderFulfillment) throw new Error("Order fulfillment not found.");

  await strapi.entityService.update("api::order-fulfillment.order-fulfillment", orderFulfillment.id, {
    data: { state_code: status, state_value: status.toLowerCase() },
  });
}
