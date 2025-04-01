import { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async local(ctx) {
        try {
            const authService = strapi.plugin("registry").service("auth");
            return await authService.local(ctx);
        } catch (error) {
            ctx.badRequest(error);
        }
    }
})
