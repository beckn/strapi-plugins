import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi, nexus: any }) => ({
    init() {
        const extensionService = strapi.service("plugin::graphql.extension");
        extensionService?.use(({ strapi }) => ({
            typeDefs: `
                type Query {
                    itemSearch(filters: ProviderFiltersInput): [ProviderEntityResponse]
                }
            `,
            resolvers: {
                Query: {
                    itemSearch: {
                        resolve: async (parent, args, context) => {
                            const { items, domain_id, category_ids, provider_name } = args.filters;
                            console.log(JSON.stringify(args.filters));
                            const { toEntityResponse } = strapi.service(
                                "plugin::graphql.format"
                            ).returnTypes;
                            // const data = await strapi.services["api::provider.provider"].find({
                            //     filters: { provider_name: provider_name.containsi },
                            // });
                            const data = await strapi.entityService.findMany('api::provider.provider', {
                                filters: {
                                    provider_name: {
                                        $containsi: provider_name.containsi,
                                    },
                                    domain_id: {
                                        DomainName: {
                                            $eq: domain_id.DomainName.eq
                                        }
                                    },
                                }
                            });

                            let filter: any = {};

                            if (provider_name) {
                                filter = {
                                    ...filter,
                                    provider_name: {
                                        $containsi: provider_name.containsi,
                                    }
                                }
                            }


                            const response: any[] = []
                            data?.forEach((item) => {
                                response.push(toEntityResponse(item));
                            });
                            return response;
                        },
                    },
                },
            },
        }));
    }
});
