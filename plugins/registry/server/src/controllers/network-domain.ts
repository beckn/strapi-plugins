import { Core } from '@strapi/strapi';
import { getNetworkDomainService } from '../utils/service';

export default ({ strapi }: { strapi: Core.Strapi }) => ({

    async getNetworkDomain(ctx: any) {
        try {
            const networkDomain = await getNetworkDomainService(strapi).getNetworkDomain(ctx);
            ctx.send(networkDomain);
        } catch (error) {
            ctx.badRequest(error);
        }
    },
    async getNetworkDomains(ctx: any) {
        try {
            const networkDomains = await getNetworkDomainService(strapi).getNetworkDomains(ctx);
            ctx.send(networkDomains);
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async createNetworkDomain(ctx: any) {
        try {
            const networkDomain = await getNetworkDomainService(strapi).createNetworkDomain(ctx);
            ctx.send(networkDomain, 201);
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async updateNetworkDomain(ctx: any) {
        try {
            const networkDomain = await getNetworkDomainService(strapi).updateNetworkDomain(ctx);
            ctx.send(networkDomain);
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async deleteNetworkDomain(ctx: any) {
        try {
            await getNetworkDomainService(strapi).deleteNetworkDomain(ctx);
            ctx.send({ message: 'Network domain deleted successfully' });
        } catch (error) {
            ctx.badRequest(error);
        }
    }
})
