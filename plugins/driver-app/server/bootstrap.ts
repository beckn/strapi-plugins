// @ts-nocheck
import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.db.lifecycles.subscribe({
    models: ["api::order-fulfillment.order-fulfillment"],
    async afterCreate(event) {
      strapi
        .plugin("driver-app")
        .controller("rideController")
        .sendRideToDriver(event.result);
    },
    async afterUpdate(event) {
      strapi
        .plugin("driver-app")
        .controller("rideController")
        .sendRideStatus(event.result);
    }
  });

  const io = require("socket.io")(strapi.server.httpServer, {
    cors: {
      origin: "*", // Adjust this according to your CORS policy
      methods: ["GET", "POST"]
    }
  });
  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    const agentId = socket.handshake.query.agentId;

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    // Make the socket instance accessible globally
    strapi.io = io;
    strapi.agent = { agentId };
  });
};
