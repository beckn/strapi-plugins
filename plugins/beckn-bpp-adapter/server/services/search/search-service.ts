import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index(filter) {
        const { context, message } = filter;
        const { item } = message.intent;
        const { domain } = context;
        const providers1 = await strapi.entityService.findMany('api::provider.provider', {
            filters: {
                items: {
                    name: item.descriptor.name,
                },
                domain_id: {
                    DomainName: domain
                },
            },
            populate: {
                items: {
                    filters: {
                        name: item.descriptor.name,
                    }
                }
            }
        });
        return providers1
    },
});
