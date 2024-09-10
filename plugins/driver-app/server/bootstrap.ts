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
    const agentId = socket.handshake.query.agentId;
    console.log(
      "a user connected on strapi driver plugin ",
      socket.id,
      "agentID",
      agentId
    );
    if (agentId) {
      strapi.entityService.update("api::agent.agent", agentId, {
        data: {
          connection_id: socket.id
        }
      });
      strapi.io = io;
      strapi.agent = { agentId };
    }
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    // Make the socket instance accessible globally
  });
};
