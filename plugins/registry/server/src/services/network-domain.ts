import type { Core } from '@strapi/strapi';
import { getDomainService } from '../utils/service';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async getNetworkDomain(ctx: any) {
        const { documentId } = ctx.params;
        const networkDomain = await getDomainService(strapi).findOne(documentId, ctx);
        return networkDomain;
    },

    async getNetworkDomains(ctx: any) {
        const networkDomains = await getDomainService(strapi).find(ctx.query);
        return networkDomains;
    },

    async createNetworkDomain(ctx: any) {
        const { name } = ctx.request.body;
        const existingDomains = await getDomainService(strapi).find({ filters: { name } });

        if (existingDomains?.results?.length > 0) {
            throw new Error('Domain with this name already exists');
        }

        const networkDomain = await getDomainService(strapi).create({ data: ctx.request.body });
        return networkDomain;
    },

    async updateNetworkDomain(ctx: any) {
        const { documentId } = ctx.params;
        const { name } = ctx.request.body;

        const existingDomain = await getDomainService(strapi).findOne(documentId, ctx);

        if (!existingDomain) {
            throw new Error('Network domain not found');
        }

        const existingDomains = await getDomainService(strapi).find({
            filters: {
                name,
                documentId: {
                    $ne: documentId // exclude the current document
                }
            }
        });

        if (existingDomains?.results?.length > 0) {
            throw new Error('Network domain with this name already exists');
        }
        const networkDomain = await getDomainService(strapi).update(documentId, { data: ctx.request.body });
        return networkDomain;
    },

    async deleteNetworkDomain(ctx: any) {
        const { documentId } = ctx.params;
        const existingDomain = await getDomainService(strapi).findOne(documentId, ctx);

        if (!existingDomain) {
            throw new Error('Network domain not found');
        }

        const networkDomain = await getDomainService(strapi).delete(documentId);
        return networkDomain;
    }
})
