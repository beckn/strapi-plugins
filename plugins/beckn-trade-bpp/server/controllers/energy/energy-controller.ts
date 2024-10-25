import { Strapi } from "@strapi/strapi";
export default ({ strapi }: { strapi: Strapi }) => ({
    async login(ctx) {
        try {
            const energyService = strapi
                .plugin("beckn-trade-bpp")
                .service("energyService");
            const result = await energyService.login(ctx.request.body);
            ctx.body = result;
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },
    async signup(ctx) {
        try {
            const energyService = strapi
                .plugin("beckn-trade-bpp")
                .service("energyService");
            const result = await energyService.signup(ctx.request.body);
            ctx.body = result;
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },
    async getCredential(ctx) {
        try {
            const energyService = strapi
                .plugin("beckn-trade-bpp")
                .service("energyService");
            const { userId } = ctx.request.query;
            console.log('Req: ', ctx.request);
            console.log('query: ', ctx.request.query);
            const result = await energyService.getCredential(Number(userId));
            ctx.body = result;
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },
    async createDer(ctx) {
        try {
            const { files, body } = ctx.request;
            console.log(files.proof);
            const energyService = strapi
                .plugin("beckn-trade-bpp")
                .service("energyService");
            const result = await energyService.createDer(body, files.proof);
            ctx.body = result;
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },
    async getDer(ctx) {
        try {
            const energyService = strapi
                .plugin("beckn-trade-bpp")
                .service("energyService");
            const result = await energyService.getDer(ctx.query.id);
            ctx.body = result;
        } catch (error) {
            ctx.badRequest(error.message);
        }
    }
});
