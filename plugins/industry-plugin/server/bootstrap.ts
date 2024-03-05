import { Strapi } from "@strapi/strapi";
import { PLUGIN } from "./constants";

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.db.lifecycles.subscribe({
    // @ts-ignore
    models: ["api::order.order"],

    async afterCreate(event) {
      // @ts-ignore
      const { result } = event;

      if (result.domain.trim() === "supply-chain-services:assembly") {
        strapi.eventHub.emit("orders-event-emitter.created", event);
        console.log("Event emitted")
      }
    },
  });
  strapi.eventHub.on("orders-event-emitter.created", async (event) => {
    try {
      strapi
        .plugin(PLUGIN)
        .controller("confirmHandlerController")
        .index(event.result);
    } catch (error) {
      console.error("Error calling external API:", error);
    }
  });

  strapi.eventHub.on("status.request", async (event) => {
    try {
      strapi.plugin(PLUGIN).controller("statusHandlerController").index(event);
    } catch (error) {
      console.error("Error calling external API:", error);
    }
  });
};
