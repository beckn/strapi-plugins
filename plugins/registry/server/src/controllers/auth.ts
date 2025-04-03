import { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async login(ctx: any) {
        try {
            const authService = strapi.plugin("registry").service("auth");
            return await authService.login(ctx);
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async sendEmailConfirmation(ctx: any) {
        try {
            const authService = strapi.plugin("registry").service("auth");
            await authService.sendEmailConfirmation(ctx.request.body.email);
            ctx.send({ message: "Email confirmation link has been sent to your email address" });
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async emailConfirmation(ctx: any) {
        try {
            const authService = strapi.plugin("registry").service("auth");
            return await authService.emailConfirmation(ctx);
        } catch (error) {
            ctx.badRequest(error);
        }
    }
})
