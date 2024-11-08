import { Strapi } from "@strapi/strapi";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.db.lifecycles.subscribe({
    //@ts-ignore
    models: ["api::order-fulfillment.order-fulfillment"],
    async afterCreate(event) {
      strapi.eventHub.emit("order-fulfillment-event-emitter.created", event);
    }
  });

  strapi.eventHub.on(
    "order-fulfillment-event-emitter.created",
    async (event) => {
      try {
        await delay(500);
        const orderDetails = await getOrderDetails(strapi, event.result.id);
        console.log(
          "\n\n====>orderDetails",
          JSON.stringify(orderDetails),
          "\n\n\n"
        );
        const item = orderDetails[0]?.order_id.items[0];
        const scProduct = item?.sc_retail_product;
        const provider = item?.provider;

        if (!scProduct || !provider)
          throw new Error("Product or Provider information is missing.");

        await reduceProductUnits(
          strapi,
          scProduct.id,
          scProduct.stock_quantity,
          orderDetails[0].quantity
        );
        await sendWebhook(
          buildPayload(
            provider?.agents?.[0]?.agent_profile?.phone_number || "1234567890",
            scProduct.stock_quantity,
            Number(scProduct.min_price),
            orderDetails[0].quantity
          )
        );
      } catch (error) {
        console.error("ptop-energy-plugin Error:", error);
      }
    }
  );
};

async function getOrderDetails(strapi: Strapi, fulfillmentId: number) {
  return await strapi.entityService.findMany(
    "api::order-fulfillment.order-fulfillment",
    {
      filters: { id: fulfillmentId },
      populate: [
        "order_id",
        "order_id.items",
        "order_id.items.sc_retail_product",
        "order_id.items.provider",
        "order_id.items.provider.agents",
        "order_id.items.provider.agents.agent_profile"
      ]
    }
  );
}

async function reduceProductUnits(
  strapi: Strapi,
  productId: number,
  currentStockQuantity: number,
  unitsold: number
) {
  console.log("Reducing Stock Quantity===>");
  console.log("Current Quantity===>", currentStockQuantity);
  console.log("Reduced Quantity===>", currentStockQuantity - unitsold);
  return await strapi.entityService.update(
    "api::sc-product.sc-product",
    productId,
    {
      data: { stock_quantity: Number(currentStockQuantity) - unitsold }
    }
  );
}

function buildPayload(
  phone: string,
  unitAvailable: string,
  price: number,
  unitsold: number
) {
  const totalAmount =
    unitsold * price + unitsold * 0.5 + 2 * (unitsold * price * 0.05) + 1;
  return { phone, unitAvailable, unitsold, amount: totalAmount };
}

async function sendWebhook(payload: object) {
  return await axios.post(
    `${process.env.BECKN_GEMINI_AI_URL}/energy-sold`,
    payload
  );
}
