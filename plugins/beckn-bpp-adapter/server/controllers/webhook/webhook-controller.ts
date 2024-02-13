import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index(ctx) {
        try {
            const { body = {} } = ctx.request;
            const { context, message } = body;
            await strapi.eventHub.emit('webhook.request', { context, message });
            ctx.body = {
                ACK: true
            }
        } catch (error) {
            throw error;
        }
    }
});
