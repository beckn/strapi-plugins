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
export const getDeDiService = (strapi: Core.Strapi) => {
    return strapi.plugin(pluginName).service("dedi");
}

export const getSubscribersService = (strapi: Core.Strapi) => {
    return strapi.plugin(pluginName).service("subscribers");
}

export const getPSService = (strapi: Core.Strapi) => {
    return strapi.plugin(pluginName).service('psService');
}

export const getUserNetworkSubscriberService = (strapi: Core.Strapi) => {
    return strapi.service('api::user-network-subscriber.user-network-subscriber');
}
