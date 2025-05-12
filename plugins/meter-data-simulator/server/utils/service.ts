import { Strapi } from "@strapi/strapi";

const pluginName = "meter-data-simulator";
const meterApiIdentifier = "api::meter.meter";
const energyResourceApiIdentifier = "api::energy-resource.energy-resource";
const meterDatasetApiIdentifier = "api::meter-dataset.meter-dataset";
const p2pTradeApiIdentifier = "api::p2p-trade.p2p-trade";
const applianceApiIdentifier = "api::appliance.appliance";
const derApiIdentifier = "api::der.der";

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

// P2P Trade
export const getP2PTradePluginService = (strapi: Strapi) => {
  return strapi.plugin(pluginName).service("p2pTrade");
};

export const getP2PTradeApiService = (strapi: Strapi) => {
  return strapi.service(p2pTradeApiIdentifier);
};

export const getEntityService = (strapi: Strapi) => {
  return strapi.entityService;
};

// DER
export const getDerPluginService = (strapi: Strapi) => {
  return strapi.plugin(pluginName).service("der");
};

export const getDerApiService = (strapi: Strapi) => {
  return strapi.service(derApiIdentifier);
};
