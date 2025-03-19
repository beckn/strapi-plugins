import type { Core } from '@strapi/strapi';

const subscribers = ({ strapi }: { strapi: Core.Strapi }) => ({
  async subscribe(ctx) {
    try {
      console.log('ctx.request', ctx.request);
      ctx.body = { message: 'Subscription successful!' };
    } catch (error) {
      ctx.throw(500, error);
    }
  },
});

export default subscribers;
