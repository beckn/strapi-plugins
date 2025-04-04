import type { Core } from '@strapi/strapi';

const pluginName = "registry";

export const getUserService = (strapi: Core.Strapi) => {
    return strapi.plugin(pluginName).service("user");
};

export const getAuthService = (strapi: Core.Strapi) => {
    return strapi.plugin(pluginName).service("auth");
}

export const getRoleService = (strapi: Core.Strapi) => {
    return strapi.plugin(pluginName).service("role");
}

export const getNetworkDomainService = (strapi: Core.Strapi) => {
    return strapi.plugin(pluginName).service("network-domain");
}

export const getDomainService = (strapi: Core.Strapi) => {
    return strapi.service("api::domain.domain");
}
