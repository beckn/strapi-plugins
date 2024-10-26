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
            const userId = ctx.state.user.id;
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
            const result = await energyService.createDer(body, files.proof, ctx.state.user);
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
    },
    async addProfile(ctx) {
        try {
            const energyService = strapi
                .plugin("beckn-trade-bpp")
                .service("energyService");
            const agentId = ctx.state.user.agent.id;
            const result = await energyService.createCatalogue(ctx.request.body, agentId);
            ctx.body = result;
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },
    async addTradeRequest(ctx) {
        try {
            const energyService = strapi
                .plugin("beckn-trade-bpp")
                .service("energyService");
            const providerId = ctx.state.user.agent?.provider_id?.id;
            const userId = ctx.state.user.id;
            const result = await energyService.addTradeRequest(ctx.request.body, { providerId, userId } );
            ctx.body = result;
        } catch (error) {
            ctx.badRequest(error.message);
        }
    },
    async getTrade(ctx) {
        try {
            const energyService = strapi
                .plugin("beckn-trade-bpp")
                .service("energyService");
            const providerId = ctx.state.user.agent?.provider_id?.id;
            const userId = ctx.state.user.id;
            const result = await energyService.addTradeRequest(ctx.request.body, { providerId, userId } );
            ctx.body = result;
        } catch (error) {
            ctx.badRequest(error.message);
        }
    }
});
