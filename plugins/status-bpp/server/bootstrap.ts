import { Strapi } from "@strapi/strapi";
import { PLUGIN } from "./constants";

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.db.lifecycles.subscribe({
    // @ts-ignore
    models: ["api::order-fulfillment.order-fulfillment"],

    async afterUpdate(event) {
      // @ts-ignore
      const { result } = event;
      console.log('After order-fulfillment update event:: ', event);
      
      strapi.eventHub.emit("order-fulfillment-event-emitter.updated", event);
    },
  });
  strapi.eventHub.on("order-fulfillment-event-emitter.updated", async (event) => {
    try {
      strapi
        .plugin(PLUGIN)
        .controller("statusUpdateController")
        .index(event.result);
    } catch (error) {
      console.error("Error calling external API:", error);
    }
  });
};
