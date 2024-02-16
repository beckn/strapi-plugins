"use strict";

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  },
  emitOrderCreatedEvent(order) {
    if (order.domain.toUpperCase().trim() === "IND4.0") {
      strapi.eventHub.emit("orders-event-emitter.order.created", order);
      console.log("An event is emitted", order);
    }
  },
});
