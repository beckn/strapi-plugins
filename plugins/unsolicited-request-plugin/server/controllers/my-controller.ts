import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('order-status-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
