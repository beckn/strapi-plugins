import { Strapi } from "@strapi/strapi";
import axios from 'axios';
import { CONTENT_TYPE,DEFAULT_STATE } from '../../constants';



export default ({ strapi }: { strapi: Strapi }) => ({
  async index(data) {
    try {
      const apiUrl = `${process.env.MACHINEAPI_URL || ''}/confirm`;
      const specification = await getSpecification(strapi, data.order_transaction_id);

      
      if (!specification || specification.length === 0) {
        throw new Error("Specification not found.");
      }

      const { width, height } = specification[0].form_data;
      const body = {
        order_id: data.id.toString(),
        order_specification: { width, height },
      };

      const response = await axios.post(apiUrl, body, {
        headers: { "Content-Type": CONTENT_TYPE },
      });

      await updateOrderFulfillment(strapi, data.id, response?.data?.order_details?.order_status);

      return data;
    } catch (error) {
      console.error("Error processing index function:", error);
      throw error; 
    }
  },
});

async function getSpecification(strapi, transactionId) {
  return strapi.entityService.findMany("api::input-detail.input-detail", {
    filters: { transaction_id: transactionId },
  });
}

async function updateOrderFulfillment(strapi, orderId, orderStatus) {
  const [orderFulfillments] = await strapi.entityService.findMany("api::order-fulfillment.order-fulfillment", {
    filters: { order_id: orderId },
  });

  if (!orderFulfillments ) {
    throw new Error("Order fulfillment not found.");
  }

  const stateCode = orderStatus || DEFAULT_STATE;
  const stateValue = orderStatus ? orderStatus.toLowerCase() : DEFAULT_STATE;

  await strapi.entityService.update("api::order-fulfillment.order-fulfillment", orderFulfillments.id, {
    data: { state_code: stateCode, state_value: stateValue },
  });
}
