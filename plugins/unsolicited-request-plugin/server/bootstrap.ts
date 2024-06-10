import { Strapi } from '@strapi/strapi';
import { BPP_ADAPTER_PLUGIN } from './constants';
export default ({ strapi }: { strapi: Strapi }) => {
  strapi.db.lifecycles.subscribe({
    // @ts-ignore
    models: ["api::order-fulfillment.order-fulfillment"],

    async afterUpdate(event) {
      strapi.eventHub.emit("order-fulfillment-event-emitter.updated", event);
    },
  });
  strapi.eventHub.on("order-fulfillment-event-emitter.updated", async (event) => {
    try {
      strapi
        .plugin(BPP_ADAPTER_PLUGIN)
        .controller("unsolicitedController")
        .orderStatusUpdate(event.result);
    } catch (error) {
      console.error("Unsolicited-request-plugin Bootstrap Error calling external API:", error);
    }
  });
};
