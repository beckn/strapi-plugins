// @ts-nocheck
"use strict";

module.exports = () => {
  strapi.db.lifecycles.subscribe({
    // @ts-ignore
    models: ["api::order.order"],

    async afterCreate(event) {
      // @ts-ignore
      const { result } = event;
      strapi.plugins["machineapi"].services["machineApi"].emitOrderCreatedEvent(
        event.result
      );
    },
  });
  strapi.eventHub.on("orders-event-emitter.order.created", async (order) => {
    try {
      await strapi.plugins["machineapi"].services["apiService"].callMachineApi(
        order
      );
      console.log("Successfully called external API with order data");
    } catch (error) {
      console.error("Error calling external API:", error);
    }
  });
};
