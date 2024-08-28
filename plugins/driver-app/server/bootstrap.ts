// @ts-nocheck
import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.db.lifecycles.subscribe({
    models: ["api::order-fulfillment.order-fulfillment"],
    async afterCreate(event) {
      strapi
        .plugin('driver-app')
        .controller("rideController")
        .sendRideToDriver(event.result);
    },
    async afterUpdate(event) {
      strapi
        .plugin('driver-app')
        .controller("rideController")
        .sendRideStatus(event.result);
    },
  });
};
