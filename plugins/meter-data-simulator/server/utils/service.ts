import { Strapi } from '@strapi/strapi';

const pluginName = "meter-data-simulator";
const meterApiIdentifier = "api::meter.meter";
const energyResourceApiIdentifier = "api::energy-resource.energy-resource";

export const getMeterPluginService = (strapi: Strapi) => {
    return strapi.plugin(pluginName).service("meter");
};

export const getMeterApiService = (strapi: Strapi) => {
    return strapi.service(meterApiIdentifier);
};

export const getEnergyResourceApiService = (strapi: Strapi) => {
    return strapi.service(energyResourceApiIdentifier);
};