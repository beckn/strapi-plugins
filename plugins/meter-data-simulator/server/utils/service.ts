import { Strapi } from '@strapi/strapi';

const pluginName = "meter-data-simulator";
const meterApiIdentifier = "api::meter.meter";
const energyResourceApiIdentifier = "api::energy-resource.energy-resource";
const meterDatasetApiIdentifier = "api::meter-dataset.meter-dataset";

// Meter
export const getMeterPluginService = (strapi: Strapi) => {
    return strapi.plugin(pluginName).service("meter");
};

export const getMeterApiService = (strapi: Strapi) => {
    return strapi.service(meterApiIdentifier);
};

// Meter Dataset
export const getMeterDatasetPluginService = (strapi: Strapi) => {
    return strapi.plugin(pluginName).service("meterDataset");
};

export const getMeterDatasetApiService = (strapi: Strapi) => {
    return strapi.service(meterDatasetApiIdentifier);
};

// Energy Resource
export const getEnergyResourcePluginService = (strapi: Strapi) => {
    return strapi.plugin(pluginName).service("energyResource");
};

export const getEnergyResourceApiService = (strapi: Strapi) => {
    return strapi.service(energyResourceApiIdentifier);
};