import { Strapi } from '@strapi/strapi';
import axios from 'axios';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.db.lifecycles.subscribe({
    //@ts-ignore
    models: ["api::order-fulfillment.order-fulfillment"],
    async afterCreate(event) {
      strapi.eventHub.emit("order-fulfillment-event-emitter.created", event);
    },
  });

  strapi.eventHub.on("order-fulfillment-event-emitter.created", async (event) => {
    try {
      const orderDetails = await getOrderDetails(strapi, event.result.id);
      const item = orderDetails[0]?.order_id.items[0];
      const scProduct = item?.sc_retail_product;
      const provider = item?.provider;

      if (!scProduct || !provider) throw new Error("Product or Provider information is missing.");

      await reduceProductUnits(strapi, scProduct.id, scProduct.sku);
      await sendWebhook(buildPayload(provider.short_desc, scProduct.sku));
    } catch (error) {
      console.error("ptop-energy-plugin Error:", error.message);
    }
  });
};

async function getOrderDetails(strapi: Strapi, fulfillmentId: number) {
  return await strapi.entityService.findMany("api::order-fulfillment.order-fulfillment", {
    filters: { id: fulfillmentId },
    populate: ["order_id", "order_id.items", "order_id.items.sc_retail_product", "order_id.items.provider"],
  });
}

async function reduceProductUnits(strapi: Strapi, productId: number, currentSku: string) {
  return await strapi.entityService.update("api::sc-product.sc-product", productId, {
    data: { sku: (Number(currentSku) - 5).toString() },
  });
}

function buildPayload(phone: string, unitAvailable: string) {
  return { phone, unitAvailable, unitListed: 10, unitSold: 5, amount: 7 };
}

async function sendWebhook(payload: object) {
  return await axios.post(`${process.env.BECKN_GEMINI_AI_URL}/energy-sold`, payload);
}