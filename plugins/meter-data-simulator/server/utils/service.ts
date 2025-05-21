import { Strapi } from "@strapi/strapi";

const pluginName = "meter-data-simulator";
const meterApiIdentifier = "api::meter.meter";
const energyResourceApiIdentifier = "api::energy-resource.energy-resource";
const meterDatasetApiIdentifier = "api::meter-dataset.meter-dataset";
const p2pTradeApiIdentifier = "api::p2p-trade.p2p-trade";
const applianceApiIdentifier = "api::appliance.appliance";
const derApiIdentifier = "api::der.der";
const gridLoadApiIdentifier = "api::grid-load.grid-load";

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

// Grid Load
export const getGridLoadPluginService = (strapi: Strapi) => {
  return strapi.plugin(pluginName).service("gridLoad");
};

export const getGridLoadApiService = (strapi: Strapi) => {
  return strapi.service(gridLoadApiIdentifier);
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

export const getInitialStateService = () => {
  return [
    {
      id: 25,
      name: "Pacific Gas and Electric Company",
      city: "San Francisco",
      state: "CA",
      latitude: "37.7929",
      longtitude: "-122.3969",
      pincode: "94105",
      createdAt: "2025-05-20T11:48:15.928Z",
      updatedAt: "2025-05-20T11:48:15.928Z",
      publishedAt: "2025-05-20T11:48:15.928Z",
      substations: [
        {
          id: 50,
          name: "SF Mission Substation",
          city: "San Francisco",
          state: "CA",
          latitude: "37.784317",
          longtitude: "-122.441556",
          pincode: "94103",
          createdAt: "2025-05-20T11:48:15.937Z",
          updatedAt: "2025-05-20T11:48:15.937Z",
          publishedAt: "2025-05-20T11:48:15.937Z",
          max_capacity_KW: 1000,
          transformers: [
            {
              id: 205,
              name: "Dolores MSS-TX01",
              city: "San Francisco",
              state: "CA",
              latitude: "37.746698",
              longtitude: "-122.500327",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.960Z",
              updatedAt: "2025-05-20T11:48:15.960Z",
              publishedAt: "2025-05-20T11:48:15.960Z",
              max_capacity_KW: 90,
              meters: [
                {
                  id: 1995,
                  code: "MTR-0001",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.81,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.028Z",
                  updatedAt: "2025-05-20T11:48:16.028Z",
                  publishedAt: "2025-05-20T11:48:16.028Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2703,
                    name: "William Flores",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.519Z",
                    updatedAt: "2025-05-20T11:48:16.519Z",
                    publishedAt: "2025-05-20T11:48:16.519Z",
                    ders: [
                      {
                        id: 5140,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.393Z",
                        updatedAt: "2025-05-20T11:48:18.393Z",
                        publishedAt: "2025-05-20T11:48:18.393Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5146,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.416Z",
                        updatedAt: "2025-05-20T11:48:18.416Z",
                        publishedAt: "2025-05-20T11:48:18.416Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5149,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.428Z",
                        updatedAt: "2025-05-20T11:48:18.428Z",
                        publishedAt: "2025-05-20T11:48:18.428Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5155,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.444Z",
                        updatedAt: "2025-05-20T11:48:18.444Z",
                        publishedAt: "2025-05-20T11:48:18.444Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5161,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.460Z",
                        updatedAt: "2025-05-20T11:48:18.460Z",
                        publishedAt: "2025-05-20T11:48:18.460Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1998,
                  code: "MTR-0004",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.028Z",
                  updatedAt: "2025-05-20T11:48:16.028Z",
                  publishedAt: "2025-05-20T11:48:16.028Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2632,
                    name: "John Thomas",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.523Z",
                    updatedAt: "2025-05-20T11:48:16.523Z",
                    publishedAt: "2025-05-20T11:48:16.523Z",
                    ders: [
                      {
                        id: 4924,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.666Z",
                        updatedAt: "2025-05-20T11:48:17.666Z",
                        publishedAt: "2025-05-20T11:48:17.666Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4933,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.699Z",
                        updatedAt: "2025-05-20T11:48:17.699Z",
                        publishedAt: "2025-05-20T11:48:17.699Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 4941,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.721Z",
                        updatedAt: "2025-05-20T11:48:17.721Z",
                        publishedAt: "2025-05-20T11:48:17.721Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4943,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.734Z",
                        updatedAt: "2025-05-20T11:48:17.734Z",
                        publishedAt: "2025-05-20T11:48:17.734Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4947,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.751Z",
                        updatedAt: "2025-05-20T11:48:17.751Z",
                        publishedAt: "2025-05-20T11:48:17.751Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1996,
                  code: "MTR-0002",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.028Z",
                  updatedAt: "2025-05-20T11:48:16.028Z",
                  publishedAt: "2025-05-20T11:48:16.028Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2760,
                    name: "Brandon Sanchez",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.519Z",
                    updatedAt: "2025-05-20T11:48:16.519Z",
                    publishedAt: "2025-05-20T11:48:16.519Z",
                    ders: [
                      {
                        id: 5412,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.218Z",
                        updatedAt: "2025-05-20T11:48:19.218Z",
                        publishedAt: "2025-05-20T11:48:19.218Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5417,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.238Z",
                        updatedAt: "2025-05-20T11:48:19.238Z",
                        publishedAt: "2025-05-20T11:48:19.238Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5423,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.255Z",
                        updatedAt: "2025-05-20T11:48:19.255Z",
                        publishedAt: "2025-05-20T11:48:19.255Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5431,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.276Z",
                        updatedAt: "2025-05-20T11:48:19.276Z",
                        publishedAt: "2025-05-20T11:48:19.276Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5439,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.294Z",
                        updatedAt: "2025-05-20T11:48:19.294Z",
                        publishedAt: "2025-05-20T11:48:19.294Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1994,
                  code: "MTR-0000",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.028Z",
                  updatedAt: "2025-05-20T11:48:16.028Z",
                  publishedAt: "2025-05-20T11:48:16.028Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2616,
                    name: "Jacob Porter",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.524Z",
                    updatedAt: "2025-05-20T11:48:16.524Z",
                    publishedAt: "2025-05-20T11:48:16.524Z",
                    ders: [
                      {
                        id: 4875,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.477Z",
                        updatedAt: "2025-05-20T11:48:17.477Z",
                        publishedAt: "2025-05-20T11:48:17.477Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4880,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.498Z",
                        updatedAt: "2025-05-20T11:48:17.498Z",
                        publishedAt: "2025-05-20T11:48:17.498Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4885,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.511Z",
                        updatedAt: "2025-05-20T11:48:17.511Z",
                        publishedAt: "2025-05-20T11:48:17.511Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4889,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.524Z",
                        updatedAt: "2025-05-20T11:48:17.524Z",
                        publishedAt: "2025-05-20T11:48:17.524Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4895,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.544Z",
                        updatedAt: "2025-05-20T11:48:17.544Z",
                        publishedAt: "2025-05-20T11:48:17.544Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1997,
                  code: "MTR-0003",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.38,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.028Z",
                  updatedAt: "2025-05-20T11:48:16.028Z",
                  publishedAt: "2025-05-20T11:48:16.028Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2695,
                    name: "John Hill",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.526Z",
                    updatedAt: "2025-05-20T11:48:16.526Z",
                    publishedAt: "2025-05-20T11:48:16.526Z",
                    ders: [
                      {
                        id: 5099,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.269Z",
                        updatedAt: "2025-05-20T11:48:18.269Z",
                        publishedAt: "2025-05-20T11:48:18.269Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5105,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.288Z",
                        updatedAt: "2025-05-20T11:48:18.288Z",
                        publishedAt: "2025-05-20T11:48:18.288Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5111,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.311Z",
                        updatedAt: "2025-05-20T11:48:18.311Z",
                        publishedAt: "2025-05-20T11:48:18.311Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5119,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.332Z",
                        updatedAt: "2025-05-20T11:48:18.332Z",
                        publishedAt: "2025-05-20T11:48:18.332Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5127,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.356Z",
                        updatedAt: "2025-05-20T11:48:18.356Z",
                        publishedAt: "2025-05-20T11:48:18.356Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1999,
                  code: "MTR-0005",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.029Z",
                  updatedAt: "2025-05-20T11:48:16.029Z",
                  publishedAt: "2025-05-20T11:48:16.029Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2694,
                    name: "Samuel Brennan",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.527Z",
                    updatedAt: "2025-05-20T11:48:16.527Z",
                    publishedAt: "2025-05-20T11:48:16.527Z",
                    ders: [
                      {
                        id: 5081,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.209Z",
                        updatedAt: "2025-05-20T11:48:18.209Z",
                        publishedAt: "2025-05-20T11:48:18.209Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5094,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.251Z",
                        updatedAt: "2025-05-20T11:48:18.251Z",
                        publishedAt: "2025-05-20T11:48:18.251Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5100,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.274Z",
                        updatedAt: "2025-05-20T11:48:18.274Z",
                        publishedAt: "2025-05-20T11:48:18.274Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5107,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.295Z",
                        updatedAt: "2025-05-20T11:48:18.295Z",
                        publishedAt: "2025-05-20T11:48:18.295Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5115,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.318Z",
                        updatedAt: "2025-05-20T11:48:18.318Z",
                        publishedAt: "2025-05-20T11:48:18.318Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2000,
                  code: "MTR-0006",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.029Z",
                  updatedAt: "2025-05-20T11:48:16.029Z",
                  publishedAt: "2025-05-20T11:48:16.029Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2763,
                    name: "Elizabeth Wood",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.558Z",
                    updatedAt: "2025-05-20T11:48:16.558Z",
                    publishedAt: "2025-05-20T11:48:16.558Z",
                    ders: [
                      {
                        id: 5422,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.253Z",
                        updatedAt: "2025-05-20T11:48:19.253Z",
                        publishedAt: "2025-05-20T11:48:19.253Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5429,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.273Z",
                        updatedAt: "2025-05-20T11:48:19.273Z",
                        publishedAt: "2025-05-20T11:48:19.273Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5436,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.291Z",
                        updatedAt: "2025-05-20T11:48:19.291Z",
                        publishedAt: "2025-05-20T11:48:19.291Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5443,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.309Z",
                        updatedAt: "2025-05-20T11:48:19.309Z",
                        publishedAt: "2025-05-20T11:48:19.309Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5450,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.326Z",
                        updatedAt: "2025-05-20T11:48:19.326Z",
                        publishedAt: "2025-05-20T11:48:19.326Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2003,
                  code: "MTR-0009",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.38,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.029Z",
                  updatedAt: "2025-05-20T11:48:16.029Z",
                  publishedAt: "2025-05-20T11:48:16.029Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2620,
                    name: "Taylor Wolfe",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.564Z",
                    updatedAt: "2025-05-20T11:48:16.564Z",
                    publishedAt: "2025-05-20T11:48:16.564Z",
                    ders: [
                      {
                        id: 4905,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.584Z",
                        updatedAt: "2025-05-20T11:48:17.584Z",
                        publishedAt: "2025-05-20T11:48:17.584Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4908,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.597Z",
                        updatedAt: "2025-05-20T11:48:17.597Z",
                        publishedAt: "2025-05-20T11:48:17.597Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4911,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.610Z",
                        updatedAt: "2025-05-20T11:48:17.610Z",
                        publishedAt: "2025-05-20T11:48:17.610Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4913,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.615Z",
                        updatedAt: "2025-05-20T11:48:17.615Z",
                        publishedAt: "2025-05-20T11:48:17.615Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4914,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.621Z",
                        updatedAt: "2025-05-20T11:48:17.621Z",
                        publishedAt: "2025-05-20T11:48:17.621Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2001,
                  code: "MTR-0007",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.5,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.029Z",
                  updatedAt: "2025-05-20T11:48:16.029Z",
                  publishedAt: "2025-05-20T11:48:16.029Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2709,
                    name: "Stephanie Stephens",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.567Z",
                    updatedAt: "2025-05-20T11:48:16.567Z",
                    publishedAt: "2025-05-20T11:48:16.567Z",
                    ders: [
                      {
                        id: 5154,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.441Z",
                        updatedAt: "2025-05-20T11:48:18.441Z",
                        publishedAt: "2025-05-20T11:48:18.441Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5159,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.457Z",
                        updatedAt: "2025-05-20T11:48:18.457Z",
                        publishedAt: "2025-05-20T11:48:18.457Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5166,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.476Z",
                        updatedAt: "2025-05-20T11:48:18.476Z",
                        publishedAt: "2025-05-20T11:48:18.476Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5173,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.497Z",
                        updatedAt: "2025-05-20T11:48:18.497Z",
                        publishedAt: "2025-05-20T11:48:18.497Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5182,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.521Z",
                        updatedAt: "2025-05-20T11:48:18.521Z",
                        publishedAt: "2025-05-20T11:48:18.521Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2002,
                  code: "MTR-0008",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.029Z",
                  updatedAt: "2025-05-20T11:48:16.029Z",
                  publishedAt: "2025-05-20T11:48:16.029Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2724,
                    name: "Tammy Parsons",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.570Z",
                    updatedAt: "2025-05-20T11:48:16.570Z",
                    publishedAt: "2025-05-20T11:48:16.570Z",
                    ders: [
                      {
                        id: 5233,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.673Z",
                        updatedAt: "2025-05-20T11:48:18.673Z",
                        publishedAt: "2025-05-20T11:48:18.673Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5239,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.696Z",
                        updatedAt: "2025-05-20T11:48:18.696Z",
                        publishedAt: "2025-05-20T11:48:18.696Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5246,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.720Z",
                        updatedAt: "2025-05-20T11:48:18.720Z",
                        publishedAt: "2025-05-20T11:48:18.720Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5251,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.742Z",
                        updatedAt: "2025-05-20T11:48:18.742Z",
                        publishedAt: "2025-05-20T11:48:18.742Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5257,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.761Z",
                        updatedAt: "2025-05-20T11:48:18.761Z",
                        publishedAt: "2025-05-20T11:48:18.761Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 206,
              name: "Twin Peaks SFMSN-T1",
              city: "San Francisco",
              state: "CA",
              latitude: "37.805272",
              longtitude: "-122.423360",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.960Z",
              updatedAt: "2025-05-21T06:08:53.370Z",
              publishedAt: "2025-05-20T11:48:15.960Z",
              max_capacity_KW: 80,
              meters: [
                {
                  id: 1984,
                  code: "MTR-0010",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.38,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.016Z",
                  updatedAt: "2025-05-20T11:48:16.016Z",
                  publishedAt: "2025-05-20T11:48:16.016Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2698,
                    name: "Adam Conley",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.512Z",
                    updatedAt: "2025-05-20T11:48:16.512Z",
                    publishedAt: "2025-05-20T11:48:16.512Z",
                    ders: [
                      {
                        id: 5106,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.292Z",
                        updatedAt: "2025-05-20T11:48:18.292Z",
                        publishedAt: "2025-05-20T11:48:18.292Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5113,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.315Z",
                        updatedAt: "2025-05-20T11:48:18.315Z",
                        publishedAt: "2025-05-20T11:48:18.315Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5121,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.337Z",
                        updatedAt: "2025-05-20T11:48:18.337Z",
                        publishedAt: "2025-05-20T11:48:18.337Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5129,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.361Z",
                        updatedAt: "2025-05-20T11:48:18.361Z",
                        publishedAt: "2025-05-20T11:48:18.361Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5135,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.378Z",
                        updatedAt: "2025-05-20T11:48:18.378Z",
                        publishedAt: "2025-05-20T11:48:18.378Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1987,
                  code: "MTR-0013",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.016Z",
                  updatedAt: "2025-05-20T11:48:16.016Z",
                  publishedAt: "2025-05-20T11:48:16.016Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2677,
                    name: "Adam Robinson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.515Z",
                    updatedAt: "2025-05-20T11:48:16.515Z",
                    publishedAt: "2025-05-20T11:48:16.515Z",
                    ders: [
                      {
                        id: 5008,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.993Z",
                        updatedAt: "2025-05-20T11:48:17.993Z",
                        publishedAt: "2025-05-20T11:48:17.993Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5012,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.005Z",
                        updatedAt: "2025-05-20T11:48:18.005Z",
                        publishedAt: "2025-05-20T11:48:18.005Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5014,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.010Z",
                        updatedAt: "2025-05-20T11:48:18.010Z",
                        publishedAt: "2025-05-20T11:48:18.010Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5016,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.016Z",
                        updatedAt: "2025-05-20T11:48:18.016Z",
                        publishedAt: "2025-05-20T11:48:18.016Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5020,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.041Z",
                        updatedAt: "2025-05-20T11:48:18.041Z",
                        publishedAt: "2025-05-20T11:48:18.041Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1988,
                  code: "MTR-0014",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.51,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.018Z",
                  updatedAt: "2025-05-20T11:48:16.018Z",
                  publishedAt: "2025-05-20T11:48:16.018Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2517,
                    name: "Amanda Johnson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.516Z",
                    updatedAt: "2025-05-20T11:48:16.516Z",
                    publishedAt: "2025-05-20T11:48:16.516Z",
                    ders: [
                      {
                        id: 4810,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.833Z",
                        updatedAt: "2025-05-20T11:48:16.833Z",
                        publishedAt: "2025-05-20T11:48:16.833Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4811,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.850Z",
                        updatedAt: "2025-05-20T11:48:16.850Z",
                        publishedAt: "2025-05-20T11:48:16.850Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4812,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.880Z",
                        updatedAt: "2025-05-20T11:48:16.880Z",
                        publishedAt: "2025-05-20T11:48:16.880Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 4813,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.893Z",
                        updatedAt: "2025-05-20T11:48:16.893Z",
                        publishedAt: "2025-05-20T11:48:16.893Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4814,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.897Z",
                        updatedAt: "2025-05-20T11:48:16.897Z",
                        publishedAt: "2025-05-20T11:48:16.897Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1985,
                  code: "MTR-0011",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.74,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.016Z",
                  updatedAt: "2025-05-20T11:48:16.016Z",
                  publishedAt: "2025-05-20T11:48:16.016Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2681,
                    name: "Pamela Garcia",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.515Z",
                    updatedAt: "2025-05-20T11:48:16.515Z",
                    publishedAt: "2025-05-20T11:48:16.515Z",
                    ders: [
                      {
                        id: 5023,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.048Z",
                        updatedAt: "2025-05-20T11:48:18.048Z",
                        publishedAt: "2025-05-20T11:48:18.048Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5030,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.068Z",
                        updatedAt: "2025-05-20T11:48:18.068Z",
                        publishedAt: "2025-05-20T11:48:18.068Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5037,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.086Z",
                        updatedAt: "2025-05-20T11:48:18.086Z",
                        publishedAt: "2025-05-20T11:48:18.086Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5044,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.106Z",
                        updatedAt: "2025-05-20T11:48:18.106Z",
                        publishedAt: "2025-05-20T11:48:18.106Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5048,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.119Z",
                        updatedAt: "2025-05-20T11:48:18.119Z",
                        publishedAt: "2025-05-20T11:48:18.119Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1986,
                  code: "MTR-0012",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.016Z",
                  updatedAt: "2025-05-20T11:48:16.016Z",
                  publishedAt: "2025-05-20T11:48:16.016Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2615,
                    name: "Danielle Shields",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.520Z",
                    updatedAt: "2025-05-20T11:48:16.520Z",
                    publishedAt: "2025-05-20T11:48:16.520Z",
                    ders: [
                      {
                        id: 4874,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.476Z",
                        updatedAt: "2025-05-20T11:48:17.476Z",
                        publishedAt: "2025-05-20T11:48:17.476Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4879,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.497Z",
                        updatedAt: "2025-05-20T11:48:17.497Z",
                        publishedAt: "2025-05-20T11:48:17.497Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4884,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.510Z",
                        updatedAt: "2025-05-20T11:48:17.510Z",
                        publishedAt: "2025-05-20T11:48:17.510Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4888,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.523Z",
                        updatedAt: "2025-05-20T11:48:17.523Z",
                        publishedAt: "2025-05-20T11:48:17.523Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4894,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.543Z",
                        updatedAt: "2025-05-20T11:48:17.543Z",
                        publishedAt: "2025-05-20T11:48:17.543Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1989,
                  code: "MTR-0015",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.018Z",
                  updatedAt: "2025-05-20T11:48:16.018Z",
                  publishedAt: "2025-05-20T11:48:16.018Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2700,
                    name: "Eileen Phillips",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.517Z",
                    updatedAt: "2025-05-20T11:48:16.517Z",
                    publishedAt: "2025-05-20T11:48:16.517Z",
                    ders: [
                      {
                        id: 5112,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.313Z",
                        updatedAt: "2025-05-20T11:48:18.313Z",
                        publishedAt: "2025-05-20T11:48:18.313Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5120,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.335Z",
                        updatedAt: "2025-05-20T11:48:18.335Z",
                        publishedAt: "2025-05-20T11:48:18.335Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5128,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.358Z",
                        updatedAt: "2025-05-20T11:48:18.358Z",
                        publishedAt: "2025-05-20T11:48:18.358Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5134,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.377Z",
                        updatedAt: "2025-05-20T11:48:18.377Z",
                        publishedAt: "2025-05-20T11:48:18.377Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5141,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.396Z",
                        updatedAt: "2025-05-20T11:48:18.396Z",
                        publishedAt: "2025-05-20T11:48:18.396Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1990,
                  code: "MTR-0016",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.019Z",
                  updatedAt: "2025-05-20T11:48:16.019Z",
                  publishedAt: "2025-05-20T11:48:16.019Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2690,
                    name: "Phillip Wilson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.518Z",
                    updatedAt: "2025-05-20T11:48:16.518Z",
                    publishedAt: "2025-05-20T11:48:16.518Z",
                    ders: [
                      {
                        id: 5061,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.159Z",
                        updatedAt: "2025-05-20T11:48:18.159Z",
                        publishedAt: "2025-05-20T11:48:18.159Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5066,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.172Z",
                        updatedAt: "2025-05-20T11:48:18.172Z",
                        publishedAt: "2025-05-20T11:48:18.172Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5074,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.197Z",
                        updatedAt: "2025-05-20T11:48:18.197Z",
                        publishedAt: "2025-05-20T11:48:18.197Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5083,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.220Z",
                        updatedAt: "2025-05-20T11:48:18.220Z",
                        publishedAt: "2025-05-20T11:48:18.220Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5090,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.239Z",
                        updatedAt: "2025-05-20T11:48:18.239Z",
                        publishedAt: "2025-05-20T11:48:18.239Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1993,
                  code: "MTR-0019",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.51,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.019Z",
                  updatedAt: "2025-05-20T11:48:16.019Z",
                  publishedAt: "2025-05-20T11:48:16.019Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2663,
                    name: "Mark Burgess",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.522Z",
                    updatedAt: "2025-05-20T11:48:16.522Z",
                    publishedAt: "2025-05-20T11:48:16.522Z",
                    ders: [
                      {
                        id: 4988,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.908Z",
                        updatedAt: "2025-05-20T11:48:17.908Z",
                        publishedAt: "2025-05-20T11:48:17.908Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4991,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.920Z",
                        updatedAt: "2025-05-20T11:48:17.920Z",
                        publishedAt: "2025-05-20T11:48:17.920Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4994,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.932Z",
                        updatedAt: "2025-05-20T11:48:17.932Z",
                        publishedAt: "2025-05-20T11:48:17.932Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4997,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.940Z",
                        updatedAt: "2025-05-20T11:48:17.940Z",
                        publishedAt: "2025-05-20T11:48:17.940Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4999,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.947Z",
                        updatedAt: "2025-05-20T11:48:17.947Z",
                        publishedAt: "2025-05-20T11:48:17.947Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1991,
                  code: "MTR-0017",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.43,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.019Z",
                  updatedAt: "2025-05-20T11:48:16.019Z",
                  publishedAt: "2025-05-20T11:48:16.019Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2526,
                    name: "Sara Johnson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.524Z",
                    updatedAt: "2025-05-20T11:48:16.524Z",
                    publishedAt: "2025-05-20T11:48:16.524Z",
                    ders: [
                      {
                        id: 4815,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.913Z",
                        updatedAt: "2025-05-20T11:48:16.913Z",
                        publishedAt: "2025-05-20T11:48:16.913Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 4816,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.930Z",
                        updatedAt: "2025-05-20T11:48:16.930Z",
                        publishedAt: "2025-05-20T11:48:16.930Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4817,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.950Z",
                        updatedAt: "2025-05-20T11:48:16.950Z",
                        publishedAt: "2025-05-20T11:48:16.950Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4818,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.955Z",
                        updatedAt: "2025-05-20T11:48:16.955Z",
                        publishedAt: "2025-05-20T11:48:16.955Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4819,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.960Z",
                        updatedAt: "2025-05-20T11:48:16.960Z",
                        publishedAt: "2025-05-20T11:48:16.960Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1992,
                  code: "MTR-0018",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.019Z",
                  updatedAt: "2025-05-20T11:48:16.019Z",
                  publishedAt: "2025-05-20T11:48:16.019Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2715,
                    name: "Brenda Macias",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.525Z",
                    updatedAt: "2025-05-20T11:48:16.525Z",
                    publishedAt: "2025-05-20T11:48:16.525Z",
                    ders: [
                      {
                        id: 5184,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.520Z",
                        updatedAt: "2025-05-20T11:48:18.520Z",
                        publishedAt: "2025-05-20T11:48:18.520Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5191,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.545Z",
                        updatedAt: "2025-05-20T11:48:18.545Z",
                        publishedAt: "2025-05-20T11:48:18.545Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5199,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.570Z",
                        updatedAt: "2025-05-20T11:48:18.570Z",
                        publishedAt: "2025-05-20T11:48:18.570Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5204,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.587Z",
                        updatedAt: "2025-05-20T11:48:18.587Z",
                        publishedAt: "2025-05-20T11:48:18.587Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5211,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.608Z",
                        updatedAt: "2025-05-20T11:48:18.608Z",
                        publishedAt: "2025-05-20T11:48:18.608Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 207,
              name: "Bay Current SFMIS-TX-A",
              city: "San Francisco",
              state: "CA",
              latitude: "37.703571",
              longtitude: "-122.489972",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.960Z",
              updatedAt: "2025-05-20T11:48:15.960Z",
              publishedAt: "2025-05-20T11:48:15.960Z",
              max_capacity_KW: 85,
              meters: [
                {
                  id: 1974,
                  code: "MTR-0020",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2505,
                    name: "Jocelyn Flores",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.505Z",
                    updatedAt: "2025-05-20T11:48:16.505Z",
                    publishedAt: "2025-05-20T11:48:16.505Z",
                    ders: [
                      {
                        id: 4800,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.759Z",
                        updatedAt: "2025-05-20T11:48:16.759Z",
                        publishedAt: "2025-05-20T11:48:16.759Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4802,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.780Z",
                        updatedAt: "2025-05-20T11:48:16.780Z",
                        publishedAt: "2025-05-20T11:48:16.780Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4804,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.797Z",
                        updatedAt: "2025-05-20T11:48:16.797Z",
                        publishedAt: "2025-05-20T11:48:16.797Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4807,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.809Z",
                        updatedAt: "2025-05-20T11:48:16.809Z",
                        publishedAt: "2025-05-20T11:48:16.809Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4809,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.817Z",
                        updatedAt: "2025-05-20T11:48:16.817Z",
                        publishedAt: "2025-05-20T11:48:16.817Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1975,
                  code: "MTR-0021",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2504,
                    name: "Lisa Kim",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.501Z",
                    updatedAt: "2025-05-20T11:48:16.501Z",
                    publishedAt: "2025-05-20T11:48:16.501Z",
                    ders: [
                      {
                        id: 4795,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.695Z",
                        updatedAt: "2025-05-20T11:48:16.695Z",
                        publishedAt: "2025-05-20T11:48:16.695Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4796,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.718Z",
                        updatedAt: "2025-05-20T11:48:16.718Z",
                        publishedAt: "2025-05-20T11:48:16.718Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 4797,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.730Z",
                        updatedAt: "2025-05-20T11:48:16.730Z",
                        publishedAt: "2025-05-20T11:48:16.730Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4798,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.738Z",
                        updatedAt: "2025-05-20T11:48:16.738Z",
                        publishedAt: "2025-05-20T11:48:16.738Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4799,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.745Z",
                        updatedAt: "2025-05-20T11:48:16.745Z",
                        publishedAt: "2025-05-20T11:48:16.745Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1976,
                  code: "MTR-0022",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2619,
                    name: "Frank Bailey",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.504Z",
                    updatedAt: "2025-05-20T11:48:16.504Z",
                    publishedAt: "2025-05-20T11:48:16.504Z",
                    ders: [
                      {
                        id: 4876,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.479Z",
                        updatedAt: "2025-05-20T11:48:17.479Z",
                        publishedAt: "2025-05-20T11:48:17.479Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4881,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.499Z",
                        updatedAt: "2025-05-20T11:48:17.499Z",
                        publishedAt: "2025-05-20T11:48:17.499Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4886,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.513Z",
                        updatedAt: "2025-05-20T11:48:17.513Z",
                        publishedAt: "2025-05-20T11:48:17.513Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4891,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.526Z",
                        updatedAt: "2025-05-20T11:48:17.526Z",
                        publishedAt: "2025-05-20T11:48:17.526Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4896,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.547Z",
                        updatedAt: "2025-05-20T11:48:17.547Z",
                        publishedAt: "2025-05-20T11:48:17.547Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1977,
                  code: "MTR-0023",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.44,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2640,
                    name: "Nicole Kim",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.509Z",
                    updatedAt: "2025-05-20T11:48:16.509Z",
                    publishedAt: "2025-05-20T11:48:16.509Z",
                    ders: [
                      {
                        id: 4951,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.769Z",
                        updatedAt: "2025-05-20T11:48:17.769Z",
                        publishedAt: "2025-05-20T11:48:17.769Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4954,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.780Z",
                        updatedAt: "2025-05-20T11:48:17.780Z",
                        publishedAt: "2025-05-20T11:48:17.780Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4957,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.788Z",
                        updatedAt: "2025-05-20T11:48:17.788Z",
                        publishedAt: "2025-05-20T11:48:17.788Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4961,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.797Z",
                        updatedAt: "2025-05-20T11:48:17.797Z",
                        publishedAt: "2025-05-20T11:48:17.797Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4964,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.806Z",
                        updatedAt: "2025-05-20T11:48:17.806Z",
                        publishedAt: "2025-05-20T11:48:17.806Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1978,
                  code: "MTR-0025",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.51,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2637,
                    name: "Dave Marshall",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.507Z",
                    updatedAt: "2025-05-20T11:48:16.507Z",
                    publishedAt: "2025-05-20T11:48:16.507Z",
                    ders: [
                      {
                        id: 4923,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.669Z",
                        updatedAt: "2025-05-20T11:48:17.669Z",
                        publishedAt: "2025-05-20T11:48:17.669Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4929,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.688Z",
                        updatedAt: "2025-05-20T11:48:17.688Z",
                        publishedAt: "2025-05-20T11:48:17.688Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4938,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.709Z",
                        updatedAt: "2025-05-20T11:48:17.709Z",
                        publishedAt: "2025-05-20T11:48:17.709Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4942,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.726Z",
                        updatedAt: "2025-05-20T11:48:17.726Z",
                        publishedAt: "2025-05-20T11:48:17.726Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4945,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.739Z",
                        updatedAt: "2025-05-20T11:48:17.739Z",
                        publishedAt: "2025-05-20T11:48:17.739Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1979,
                  code: "MTR-0026",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2625,
                    name: "Robert Hudson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.508Z",
                    updatedAt: "2025-05-20T11:48:16.508Z",
                    publishedAt: "2025-05-20T11:48:16.508Z",
                    ders: [
                      {
                        id: 4906,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.586Z",
                        updatedAt: "2025-05-20T11:48:17.586Z",
                        publishedAt: "2025-05-20T11:48:17.586Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4909,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.601Z",
                        updatedAt: "2025-05-20T11:48:17.601Z",
                        publishedAt: "2025-05-20T11:48:17.601Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4910,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.608Z",
                        updatedAt: "2025-05-20T11:48:17.608Z",
                        publishedAt: "2025-05-20T11:48:17.608Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4912,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.613Z",
                        updatedAt: "2025-05-20T11:48:17.613Z",
                        publishedAt: "2025-05-20T11:48:17.613Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4916,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.624Z",
                        updatedAt: "2025-05-20T11:48:17.624Z",
                        publishedAt: "2025-05-20T11:48:17.624Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1981,
                  code: "MTR-0028",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.39,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2631,
                    name: "Valerie Jenkins",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.513Z",
                    updatedAt: "2025-05-20T11:48:16.513Z",
                    publishedAt: "2025-05-20T11:48:16.513Z",
                    ders: [
                      {
                        id: 4917,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.630Z",
                        updatedAt: "2025-05-20T11:48:17.631Z",
                        publishedAt: "2025-05-20T11:48:17.631Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4921,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.655Z",
                        updatedAt: "2025-05-20T11:48:17.655Z",
                        publishedAt: "2025-05-20T11:48:17.655Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4927,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.678Z",
                        updatedAt: "2025-05-20T11:48:17.678Z",
                        publishedAt: "2025-05-20T11:48:17.678Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4932,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.695Z",
                        updatedAt: "2025-05-20T11:48:17.695Z",
                        publishedAt: "2025-05-20T11:48:17.695Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4937,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.708Z",
                        updatedAt: "2025-05-20T11:48:17.708Z",
                        publishedAt: "2025-05-20T11:48:17.708Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1982,
                  code: "MTR-0029",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2617,
                    name: "Glenn Russell",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.511Z",
                    updatedAt: "2025-05-20T11:48:16.511Z",
                    publishedAt: "2025-05-20T11:48:16.511Z",
                    ders: [
                      {
                        id: 4877,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.480Z",
                        updatedAt: "2025-05-20T11:48:17.480Z",
                        publishedAt: "2025-05-20T11:48:17.480Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4882,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.501Z",
                        updatedAt: "2025-05-20T11:48:17.501Z",
                        publishedAt: "2025-05-20T11:48:17.501Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4890,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.525Z",
                        updatedAt: "2025-05-20T11:48:17.525Z",
                        publishedAt: "2025-05-20T11:48:17.525Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4897,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.553Z",
                        updatedAt: "2025-05-20T11:48:17.553Z",
                        publishedAt: "2025-05-20T11:48:17.553Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4901,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.568Z",
                        updatedAt: "2025-05-20T11:48:17.568Z",
                        publishedAt: "2025-05-20T11:48:17.568Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1983,
                  code: "MTR-0024",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2595,
                    name: "Robert Zavala",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.514Z",
                    updatedAt: "2025-05-20T11:48:16.514Z",
                    publishedAt: "2025-05-20T11:48:16.514Z",
                    ders: [
                      {
                        id: 4859,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.343Z",
                        updatedAt: "2025-05-20T11:48:17.343Z",
                        publishedAt: "2025-05-20T11:48:17.343Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4861,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.358Z",
                        updatedAt: "2025-05-20T11:48:17.358Z",
                        publishedAt: "2025-05-20T11:48:17.358Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4863,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.370Z",
                        updatedAt: "2025-05-20T11:48:17.370Z",
                        publishedAt: "2025-05-20T11:48:17.370Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4864,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.374Z",
                        updatedAt: "2025-05-20T11:48:17.374Z",
                        publishedAt: "2025-05-20T11:48:17.374Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4865,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.377Z",
                        updatedAt: "2025-05-20T11:48:17.377Z",
                        publishedAt: "2025-05-20T11:48:17.377Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 1980,
                  code: "MTR-0027",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.36,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.005Z",
                  updatedAt: "2025-05-20T11:48:16.005Z",
                  publishedAt: "2025-05-20T11:48:16.005Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2510,
                    name: "Tyler Callahan",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.510Z",
                    updatedAt: "2025-05-20T11:48:16.510Z",
                    publishedAt: "2025-05-20T11:48:16.510Z",
                    ders: [
                      {
                        id: 4801,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.760Z",
                        updatedAt: "2025-05-20T11:48:16.760Z",
                        publishedAt: "2025-05-20T11:48:16.760Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4803,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.786Z",
                        updatedAt: "2025-05-20T11:48:16.786Z",
                        publishedAt: "2025-05-20T11:48:16.786Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4805,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.799Z",
                        updatedAt: "2025-05-20T11:48:16.799Z",
                        publishedAt: "2025-05-20T11:48:16.799Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4806,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.811Z",
                        updatedAt: "2025-05-20T11:48:16.811Z",
                        publishedAt: "2025-05-20T11:48:16.811Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4808,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:16.816Z",
                        updatedAt: "2025-05-20T11:48:16.816Z",
                        publishedAt: "2025-05-20T11:48:16.816Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 208,
              name: "Fogline MSN33-TX1",
              city: "San Francisco",
              state: "CA",
              latitude: "37.729064",
              longtitude: "-122.430954",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.960Z",
              updatedAt: "2025-05-21T06:06:12.242Z",
              publishedAt: "2025-05-20T11:48:15.960Z",
              max_capacity_KW: 90,
              meters: [
                {
                  id: 2004,
                  code: "MTR-0031",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.43,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2534,
                    name: "Sean Carter",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.677Z",
                    updatedAt: "2025-05-20T11:48:16.677Z",
                    publishedAt: "2025-05-20T11:48:16.677Z",
                    ders: [
                      {
                        id: 4820,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.000Z",
                        updatedAt: "2025-05-20T11:48:17.000Z",
                        publishedAt: "2025-05-20T11:48:17.000Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4821,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.026Z",
                        updatedAt: "2025-05-20T11:48:17.026Z",
                        publishedAt: "2025-05-20T11:48:17.026Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4822,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.038Z",
                        updatedAt: "2025-05-20T11:48:17.038Z",
                        publishedAt: "2025-05-20T11:48:17.038Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4823,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.043Z",
                        updatedAt: "2025-05-20T11:48:17.043Z",
                        publishedAt: "2025-05-20T11:48:17.043Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4824,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.049Z",
                        updatedAt: "2025-05-20T11:48:17.049Z",
                        publishedAt: "2025-05-20T11:48:17.049Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4825,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.052Z",
                        updatedAt: "2025-05-20T11:48:17.052Z",
                        publishedAt: "2025-05-20T11:48:17.052Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4826,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.056Z",
                        updatedAt: "2025-05-20T11:48:17.056Z",
                        publishedAt: "2025-05-20T11:48:17.056Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4827,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.060Z",
                        updatedAt: "2025-05-20T11:48:17.060Z",
                        publishedAt: "2025-05-20T11:48:17.060Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4828,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.064Z",
                        updatedAt: "2025-05-20T11:48:17.064Z",
                        publishedAt: "2025-05-20T11:48:17.064Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4829,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.069Z",
                        updatedAt: "2025-05-20T11:48:17.069Z",
                        publishedAt: "2025-05-20T11:48:17.069Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4830,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.073Z",
                        updatedAt: "2025-05-20T11:48:17.073Z",
                        publishedAt: "2025-05-20T11:48:17.073Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4831,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.076Z",
                        updatedAt: "2025-05-20T11:48:17.076Z",
                        publishedAt: "2025-05-20T11:48:17.076Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4832,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.080Z",
                        updatedAt: "2025-05-20T11:48:17.080Z",
                        publishedAt: "2025-05-20T11:48:17.080Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4833,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.083Z",
                        updatedAt: "2025-05-20T11:48:17.083Z",
                        publishedAt: "2025-05-20T11:48:17.083Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4834,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.086Z",
                        updatedAt: "2025-05-20T11:48:17.086Z",
                        publishedAt: "2025-05-20T11:48:17.086Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4835,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.089Z",
                        updatedAt: "2025-05-20T11:48:17.089Z",
                        publishedAt: "2025-05-20T11:48:17.089Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2009,
                  code: "MTR-0036",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.48,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2536,
                    name: "Matthew Wilson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.678Z",
                    updatedAt: "2025-05-20T11:48:16.678Z",
                    publishedAt: "2025-05-20T11:48:16.678Z",
                    ders: [
                      {
                        id: 4836,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.103Z",
                        updatedAt: "2025-05-20T11:48:17.103Z",
                        publishedAt: "2025-05-20T11:48:17.103Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4837,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.123Z",
                        updatedAt: "2025-05-20T11:48:17.123Z",
                        publishedAt: "2025-05-20T11:48:17.123Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4838,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.130Z",
                        updatedAt: "2025-05-20T11:48:17.130Z",
                        publishedAt: "2025-05-20T11:48:17.130Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4839,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.138Z",
                        updatedAt: "2025-05-20T11:48:17.138Z",
                        publishedAt: "2025-05-20T11:48:17.138Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4840,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.142Z",
                        updatedAt: "2025-05-20T11:48:17.142Z",
                        publishedAt: "2025-05-20T11:48:17.142Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2005,
                  code: "MTR-0032",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.43,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2738,
                    name: "Richard Combs",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.683Z",
                    updatedAt: "2025-05-20T11:48:16.683Z",
                    publishedAt: "2025-05-20T11:48:16.683Z",
                    ders: [
                      {
                        id: 5301,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.902Z",
                        updatedAt: "2025-05-20T11:48:18.902Z",
                        publishedAt: "2025-05-20T11:48:18.902Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5307,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.922Z",
                        updatedAt: "2025-05-20T11:48:18.922Z",
                        publishedAt: "2025-05-20T11:48:18.922Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5313,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.942Z",
                        updatedAt: "2025-05-20T11:48:18.942Z",
                        publishedAt: "2025-05-20T11:48:18.942Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5319,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.959Z",
                        updatedAt: "2025-05-20T11:48:18.959Z",
                        publishedAt: "2025-05-20T11:48:18.959Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5325,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.976Z",
                        updatedAt: "2025-05-20T11:48:18.976Z",
                        publishedAt: "2025-05-20T11:48:18.976Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2006,
                  code: "MTR-0033",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.44,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2633,
                    name: "Melissa Stewart",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.678Z",
                    updatedAt: "2025-05-20T11:48:16.678Z",
                    publishedAt: "2025-05-20T11:48:16.678Z",
                    ders: [
                      {
                        id: 4919,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.652Z",
                        updatedAt: "2025-05-20T11:48:17.652Z",
                        publishedAt: "2025-05-20T11:48:17.652Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4925,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.674Z",
                        updatedAt: "2025-05-20T11:48:17.674Z",
                        publishedAt: "2025-05-20T11:48:17.674Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 4930,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.692Z",
                        updatedAt: "2025-05-20T11:48:17.692Z",
                        publishedAt: "2025-05-20T11:48:17.692Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4935,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.705Z",
                        updatedAt: "2025-05-20T11:48:17.705Z",
                        publishedAt: "2025-05-20T11:48:17.705Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4939,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.719Z",
                        updatedAt: "2025-05-20T11:48:17.719Z",
                        publishedAt: "2025-05-20T11:48:17.719Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2007,
                  code: "MTR-0034",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2684,
                    name: "Linda Campbell",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.687Z",
                    updatedAt: "2025-05-20T11:48:16.687Z",
                    publishedAt: "2025-05-20T11:48:16.687Z",
                    ders: [
                      {
                        id: 5029,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.063Z",
                        updatedAt: "2025-05-20T11:48:18.063Z",
                        publishedAt: "2025-05-20T11:48:18.063Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5036,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.082Z",
                        updatedAt: "2025-05-20T11:48:18.082Z",
                        publishedAt: "2025-05-20T11:48:18.082Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5043,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.103Z",
                        updatedAt: "2025-05-20T11:48:18.103Z",
                        publishedAt: "2025-05-20T11:48:18.103Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5051,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.124Z",
                        updatedAt: "2025-05-20T11:48:18.124Z",
                        publishedAt: "2025-05-20T11:48:18.124Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5055,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.139Z",
                        updatedAt: "2025-05-20T11:48:18.139Z",
                        publishedAt: "2025-05-20T11:48:18.139Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2008,
                  code: "MTR-0035",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.44,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2704,
                    name: "Daryl Collins",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.683Z",
                    updatedAt: "2025-05-20T11:48:16.683Z",
                    publishedAt: "2025-05-20T11:48:16.683Z",
                    ders: [
                      {
                        id: 5138,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.386Z",
                        updatedAt: "2025-05-20T11:48:18.386Z",
                        publishedAt: "2025-05-20T11:48:18.386Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5144,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.405Z",
                        updatedAt: "2025-05-20T11:48:18.405Z",
                        publishedAt: "2025-05-20T11:48:18.405Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5147,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.421Z",
                        updatedAt: "2025-05-20T11:48:18.421Z",
                        publishedAt: "2025-05-20T11:48:18.421Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5152,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.434Z",
                        updatedAt: "2025-05-20T11:48:18.434Z",
                        publishedAt: "2025-05-20T11:48:18.434Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5158,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.451Z",
                        updatedAt: "2025-05-20T11:48:18.451Z",
                        publishedAt: "2025-05-20T11:48:18.451Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2010,
                  code: "MTR-0037",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2710,
                    name: "Jennifer Bowen",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.783Z",
                    updatedAt: "2025-05-20T11:48:16.783Z",
                    publishedAt: "2025-05-20T11:48:16.783Z",
                    ders: [
                      {
                        id: 5160,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.458Z",
                        updatedAt: "2025-05-20T11:48:18.458Z",
                        publishedAt: "2025-05-20T11:48:18.458Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5167,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.478Z",
                        updatedAt: "2025-05-20T11:48:18.478Z",
                        publishedAt: "2025-05-20T11:48:18.478Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5174,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.498Z",
                        updatedAt: "2025-05-20T11:48:18.498Z",
                        publishedAt: "2025-05-20T11:48:18.498Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5183,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.522Z",
                        updatedAt: "2025-05-20T11:48:18.522Z",
                        publishedAt: "2025-05-20T11:48:18.522Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5189,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.539Z",
                        updatedAt: "2025-05-20T11:48:18.539Z",
                        publishedAt: "2025-05-20T11:48:18.539Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2012,
                  code: "MTR-0030",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.5,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2642,
                    name: "Kristen Shannon",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.791Z",
                    updatedAt: "2025-05-20T11:48:16.791Z",
                    publishedAt: "2025-05-20T11:48:16.791Z",
                    ders: [
                      {
                        id: 4946,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.740Z",
                        updatedAt: "2025-05-20T11:48:17.740Z",
                        publishedAt: "2025-05-20T11:48:17.740Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4948,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.755Z",
                        updatedAt: "2025-05-20T11:48:17.755Z",
                        publishedAt: "2025-05-20T11:48:17.755Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4950,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.763Z",
                        updatedAt: "2025-05-20T11:48:17.763Z",
                        publishedAt: "2025-05-20T11:48:17.763Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4953,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.775Z",
                        updatedAt: "2025-05-20T11:48:17.775Z",
                        publishedAt: "2025-05-20T11:48:17.775Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4955,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.783Z",
                        updatedAt: "2025-05-20T11:48:17.783Z",
                        publishedAt: "2025-05-20T11:48:17.783Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4958,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.789Z",
                        updatedAt: "2025-05-20T11:48:17.789Z",
                        publishedAt: "2025-05-20T11:48:17.789Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4959,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.793Z",
                        updatedAt: "2025-05-20T11:48:17.793Z",
                        publishedAt: "2025-05-20T11:48:17.793Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4962,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.799Z",
                        updatedAt: "2025-05-20T11:48:17.799Z",
                        publishedAt: "2025-05-20T11:48:17.799Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4963,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.804Z",
                        updatedAt: "2025-05-20T11:48:17.804Z",
                        publishedAt: "2025-05-20T11:48:17.804Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4965,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.810Z",
                        updatedAt: "2025-05-20T11:48:17.810Z",
                        publishedAt: "2025-05-20T11:48:17.810Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4966,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.814Z",
                        updatedAt: "2025-05-20T11:48:17.814Z",
                        publishedAt: "2025-05-20T11:48:17.814Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4968,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.823Z",
                        updatedAt: "2025-05-20T11:48:17.823Z",
                        publishedAt: "2025-05-20T11:48:17.823Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4970,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.840Z",
                        updatedAt: "2025-05-20T11:48:17.840Z",
                        publishedAt: "2025-05-20T11:48:17.840Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4972,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.847Z",
                        updatedAt: "2025-05-20T11:48:17.847Z",
                        publishedAt: "2025-05-20T11:48:17.847Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4975,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.856Z",
                        updatedAt: "2025-05-20T12:57:06.223Z",
                        publishedAt: "2025-05-20T11:48:17.856Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4977,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.861Z",
                        updatedAt: "2025-05-20T12:57:11.876Z",
                        publishedAt: "2025-05-20T11:48:17.861Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4979,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.867Z",
                        updatedAt: "2025-05-20T12:57:01.971Z",
                        publishedAt: "2025-05-20T11:48:17.867Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4981,
                        switched_on: false,
                        createdAt: "2025-05-20T11:48:17.874Z",
                        updatedAt: "2025-05-20T11:48:17.874Z",
                        publishedAt: "2025-05-20T11:48:17.874Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4983,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.878Z",
                        updatedAt: "2025-05-20T11:48:17.878Z",
                        publishedAt: "2025-05-20T11:48:17.878Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2011,
                  code: "MTR-0038",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.38,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2688,
                    name: "Richard Johnson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.793Z",
                    updatedAt: "2025-05-20T11:48:16.793Z",
                    publishedAt: "2025-05-20T11:48:16.793Z",
                    ders: [
                      {
                        id: 5057,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.149Z",
                        updatedAt: "2025-05-20T11:48:18.149Z",
                        publishedAt: "2025-05-20T11:48:18.149Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5067,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.175Z",
                        updatedAt: "2025-05-20T11:48:18.175Z",
                        publishedAt: "2025-05-20T11:48:18.175Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5076,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.201Z",
                        updatedAt: "2025-05-20T11:48:18.201Z",
                        publishedAt: "2025-05-20T11:48:18.201Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5085,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.224Z",
                        updatedAt: "2025-05-20T11:48:18.224Z",
                        publishedAt: "2025-05-20T11:48:18.224Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5092,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.243Z",
                        updatedAt: "2025-05-20T11:48:18.243Z",
                        publishedAt: "2025-05-20T11:48:18.243Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2013,
                  code: "MTR-0039",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.81,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.045Z",
                  updatedAt: "2025-05-20T11:48:16.045Z",
                  publishedAt: "2025-05-20T11:48:16.045Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2683,
                    name: "William Russo",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.790Z",
                    updatedAt: "2025-05-20T11:48:16.790Z",
                    publishedAt: "2025-05-20T11:48:16.790Z",
                    ders: [
                      {
                        id: 5054,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.136Z",
                        updatedAt: "2025-05-20T11:48:18.136Z",
                        publishedAt: "2025-05-20T11:48:18.136Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5060,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.156Z",
                        updatedAt: "2025-05-20T11:48:18.156Z",
                        publishedAt: "2025-05-20T11:48:18.156Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5065,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.170Z",
                        updatedAt: "2025-05-20T11:48:18.170Z",
                        publishedAt: "2025-05-20T11:48:18.170Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5073,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.192Z",
                        updatedAt: "2025-05-20T11:48:18.192Z",
                        publishedAt: "2025-05-20T11:48:18.192Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5082,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.217Z",
                        updatedAt: "2025-05-20T11:48:18.217Z",
                        publishedAt: "2025-05-20T11:48:18.217Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 209,
              name: "Valencia SF-MISSION-TX-01",
              city: "San Francisco",
              state: "CA",
              latitude: "37.722924",
              longtitude: "-122.364946",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.960Z",
              updatedAt: "2025-05-21T06:09:22.850Z",
              publishedAt: "2025-05-20T11:48:15.960Z",
              max_capacity_KW: 90,
              meters: [
                {
                  id: 2014,
                  code: "MTR-0040",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.38,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2679,
                    name: "Misty George",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.847Z",
                    updatedAt: "2025-05-20T11:48:16.847Z",
                    publishedAt: "2025-05-20T11:48:16.847Z",
                    ders: [
                      {
                        id: 5018,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.025Z",
                        updatedAt: "2025-05-20T11:48:18.025Z",
                        publishedAt: "2025-05-20T11:48:18.025Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5025,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.051Z",
                        updatedAt: "2025-05-20T11:48:18.051Z",
                        publishedAt: "2025-05-20T11:48:18.051Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5033,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.070Z",
                        updatedAt: "2025-05-20T11:48:18.070Z",
                        publishedAt: "2025-05-20T11:48:18.070Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5039,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.089Z",
                        updatedAt: "2025-05-20T11:48:18.089Z",
                        publishedAt: "2025-05-20T11:48:18.089Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5046,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.109Z",
                        updatedAt: "2025-05-20T11:48:18.109Z",
                        publishedAt: "2025-05-20T11:48:18.109Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2015,
                  code: "MTR-0041",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2717,
                    name: "Mary Fox",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.849Z",
                    updatedAt: "2025-05-20T11:48:16.849Z",
                    publishedAt: "2025-05-20T11:48:16.849Z",
                    ders: [
                      {
                        id: 5197,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.566Z",
                        updatedAt: "2025-05-20T11:48:18.566Z",
                        publishedAt: "2025-05-20T11:48:18.566Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5203,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.585Z",
                        updatedAt: "2025-05-20T11:48:18.585Z",
                        publishedAt: "2025-05-20T11:48:18.585Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5210,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.606Z",
                        updatedAt: "2025-05-20T11:48:18.606Z",
                        publishedAt: "2025-05-20T11:48:18.606Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5218,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.628Z",
                        updatedAt: "2025-05-20T11:48:18.628Z",
                        publishedAt: "2025-05-20T11:48:18.628Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5226,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.650Z",
                        updatedAt: "2025-05-20T11:48:18.650Z",
                        publishedAt: "2025-05-20T11:48:18.650Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2022,
                  code: "MTR-0044",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.48,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2726,
                    name: "Fernando Little",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.856Z",
                    updatedAt: "2025-05-20T11:48:16.856Z",
                    publishedAt: "2025-05-20T11:48:16.856Z",
                    ders: [
                      {
                        id: 5245,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.716Z",
                        updatedAt: "2025-05-20T11:48:18.716Z",
                        publishedAt: "2025-05-20T11:48:18.716Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5256,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.753Z",
                        updatedAt: "2025-05-20T11:48:18.753Z",
                        publishedAt: "2025-05-20T11:48:18.753Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5262,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.774Z",
                        updatedAt: "2025-05-20T11:48:18.774Z",
                        publishedAt: "2025-05-20T11:48:18.774Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5268,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.802Z",
                        updatedAt: "2025-05-20T11:48:18.802Z",
                        publishedAt: "2025-05-20T11:48:18.802Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5276,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.824Z",
                        updatedAt: "2025-05-20T11:48:18.824Z",
                        publishedAt: "2025-05-20T11:48:18.824Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2023,
                  code: "MTR-0049",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.5,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2622,
                    name: "Ann Adams",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.848Z",
                    updatedAt: "2025-05-20T11:48:16.848Z",
                    publishedAt: "2025-05-20T11:48:16.848Z",
                    ders: [
                      {
                        id: 4887,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.516Z",
                        updatedAt: "2025-05-20T11:48:17.516Z",
                        publishedAt: "2025-05-20T11:48:17.516Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4892,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.534Z",
                        updatedAt: "2025-05-20T11:48:17.534Z",
                        publishedAt: "2025-05-20T11:48:17.534Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4898,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.557Z",
                        updatedAt: "2025-05-20T11:48:17.557Z",
                        publishedAt: "2025-05-20T11:48:17.557Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4900,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.565Z",
                        updatedAt: "2025-05-20T11:48:17.565Z",
                        publishedAt: "2025-05-20T11:48:17.565Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4902,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.571Z",
                        updatedAt: "2025-05-20T11:48:17.571Z",
                        publishedAt: "2025-05-20T11:48:17.571Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2017,
                  code: "MTR-0043",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2687,
                    name: "Justin Freeman",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.849Z",
                    updatedAt: "2025-05-20T11:48:16.849Z",
                    publishedAt: "2025-05-20T11:48:16.849Z",
                    ders: [
                      {
                        id: 5053,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.134Z",
                        updatedAt: "2025-05-20T11:48:18.134Z",
                        publishedAt: "2025-05-20T11:48:18.134Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5059,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.154Z",
                        updatedAt: "2025-05-20T11:48:18.154Z",
                        publishedAt: "2025-05-20T11:48:18.154Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5064,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.168Z",
                        updatedAt: "2025-05-20T11:48:18.168Z",
                        publishedAt: "2025-05-20T11:48:18.168Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5071,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.188Z",
                        updatedAt: "2025-05-20T11:48:18.188Z",
                        publishedAt: "2025-05-20T11:48:18.188Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5079,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.213Z",
                        updatedAt: "2025-05-20T11:48:18.213Z",
                        publishedAt: "2025-05-20T11:48:18.213Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2018,
                  code: "MTR-0045",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2736,
                    name: "Erin Murphy",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.854Z",
                    updatedAt: "2025-05-20T11:48:16.854Z",
                    publishedAt: "2025-05-20T11:48:16.854Z",
                    ders: [
                      {
                        id: 5294,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.882Z",
                        updatedAt: "2025-05-20T11:48:18.882Z",
                        publishedAt: "2025-05-20T11:48:18.882Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5303,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.905Z",
                        updatedAt: "2025-05-20T11:48:18.905Z",
                        publishedAt: "2025-05-20T11:48:18.905Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5308,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.924Z",
                        updatedAt: "2025-05-20T11:48:18.924Z",
                        publishedAt: "2025-05-20T11:48:18.924Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5314,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.944Z",
                        updatedAt: "2025-05-20T11:48:18.944Z",
                        publishedAt: "2025-05-20T11:48:18.944Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5320,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.961Z",
                        updatedAt: "2025-05-20T11:48:18.961Z",
                        publishedAt: "2025-05-20T11:48:18.961Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2019,
                  code: "MTR-0046",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2719,
                    name: "Eric Hall",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.857Z",
                    updatedAt: "2025-05-20T11:48:16.857Z",
                    publishedAt: "2025-05-20T11:48:16.857Z",
                    ders: [
                      {
                        id: 5208,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.598Z",
                        updatedAt: "2025-05-20T11:48:18.598Z",
                        publishedAt: "2025-05-20T11:48:18.598Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5215,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.620Z",
                        updatedAt: "2025-05-20T11:48:18.620Z",
                        publishedAt: "2025-05-20T11:48:18.620Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5223,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.641Z",
                        updatedAt: "2025-05-20T11:48:18.641Z",
                        publishedAt: "2025-05-20T11:48:18.641Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5231,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.663Z",
                        updatedAt: "2025-05-20T11:48:18.663Z",
                        publishedAt: "2025-05-20T11:48:18.663Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5237,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.685Z",
                        updatedAt: "2025-05-20T11:48:18.685Z",
                        publishedAt: "2025-05-20T11:48:18.685Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2016,
                  code: "MTR-0042",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.39,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2748,
                    name: "Victor Walters",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.854Z",
                    updatedAt: "2025-05-20T11:48:16.854Z",
                    publishedAt: "2025-05-20T11:48:16.854Z",
                    ders: [
                      {
                        id: 5344,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.032Z",
                        updatedAt: "2025-05-20T11:48:19.032Z",
                        publishedAt: "2025-05-20T11:48:19.032Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5353,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.052Z",
                        updatedAt: "2025-05-20T11:48:19.052Z",
                        publishedAt: "2025-05-20T11:48:19.052Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5358,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.070Z",
                        updatedAt: "2025-05-20T11:48:19.070Z",
                        publishedAt: "2025-05-20T11:48:19.070Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5366,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.089Z",
                        updatedAt: "2025-05-20T11:48:19.089Z",
                        publishedAt: "2025-05-20T11:48:19.089Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5372,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.106Z",
                        updatedAt: "2025-05-20T11:48:19.106Z",
                        publishedAt: "2025-05-20T11:48:19.106Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2021,
                  code: "MTR-0048",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.45,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2548,
                    name: "Darrell Arellano",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.852Z",
                    updatedAt: "2025-05-20T11:48:16.852Z",
                    publishedAt: "2025-05-20T11:48:16.852Z",
                    ders: [
                      {
                        id: 4841,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.155Z",
                        updatedAt: "2025-05-20T11:48:17.155Z",
                        publishedAt: "2025-05-20T11:48:17.155Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4842,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.175Z",
                        updatedAt: "2025-05-20T11:48:17.175Z",
                        publishedAt: "2025-05-20T11:48:17.175Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4843,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.181Z",
                        updatedAt: "2025-05-20T11:48:17.181Z",
                        publishedAt: "2025-05-20T11:48:17.181Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4844,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.187Z",
                        updatedAt: "2025-05-20T11:48:17.187Z",
                        publishedAt: "2025-05-20T11:48:17.187Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4845,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.190Z",
                        updatedAt: "2025-05-20T11:48:17.190Z",
                        publishedAt: "2025-05-20T11:48:17.190Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2020,
                  code: "MTR-0047",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.43,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.075Z",
                  updatedAt: "2025-05-20T11:48:16.075Z",
                  publishedAt: "2025-05-20T11:48:16.075Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2654,
                    name: "Nicole Dudley",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.853Z",
                    updatedAt: "2025-05-20T11:48:16.853Z",
                    publishedAt: "2025-05-20T11:48:16.853Z",
                    ders: [
                      {
                        id: 4987,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.899Z",
                        updatedAt: "2025-05-20T11:48:17.899Z",
                        publishedAt: "2025-05-20T11:48:17.899Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4990,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.912Z",
                        updatedAt: "2025-05-20T11:48:17.912Z",
                        publishedAt: "2025-05-20T11:48:17.912Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4993,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.925Z",
                        updatedAt: "2025-05-20T11:48:17.925Z",
                        publishedAt: "2025-05-20T11:48:17.925Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4996,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.937Z",
                        updatedAt: "2025-05-20T11:48:17.937Z",
                        publishedAt: "2025-05-20T11:48:17.937Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4998,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.943Z",
                        updatedAt: "2025-05-20T11:48:17.943Z",
                        publishedAt: "2025-05-20T11:48:17.943Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          id: 52,
          name: "SF Richmond Substation",
          city: "San Francisco",
          state: "CA",
          latitude: "37.711013",
          longtitude: "-122.473928",
          pincode: "94103",
          createdAt: "2025-05-20T11:48:15.937Z",
          updatedAt: "2025-05-20T11:48:15.937Z",
          publishedAt: "2025-05-20T11:48:15.937Z",
          max_capacity_KW: 1000,
          transformers: [
            {
              id: 210,
              name: "Sutro – RCHD-TX01",
              city: "San Francisco",
              state: "CA",
              latitude: "37.790832",
              longtitude: "-122.475965",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.968Z",
              updatedAt: "2025-05-20T11:48:15.968Z",
              publishedAt: "2025-05-20T11:48:15.968Z",
              max_capacity_KW: 80,
              meters: [
                {
                  id: 2048,
                  code: "MTR-0105",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.7,
                  longitude: -122.45,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.108Z",
                  updatedAt: "2025-05-20T11:48:16.108Z",
                  publishedAt: "2025-05-20T11:48:16.108Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2692,
                    name: "Ashley Gallegos",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.890Z",
                    updatedAt: "2025-05-20T11:48:16.890Z",
                    publishedAt: "2025-05-20T11:48:16.890Z",
                    ders: [
                      {
                        id: 5068,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.179Z",
                        updatedAt: "2025-05-20T11:48:18.179Z",
                        publishedAt: "2025-05-20T11:48:18.179Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5077,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.205Z",
                        updatedAt: "2025-05-20T11:48:18.205Z",
                        publishedAt: "2025-05-20T11:48:18.205Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5086,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.228Z",
                        updatedAt: "2025-05-20T11:48:18.228Z",
                        publishedAt: "2025-05-20T11:48:18.228Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5093,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.246Z",
                        updatedAt: "2025-05-20T11:48:18.246Z",
                        publishedAt: "2025-05-20T11:48:18.246Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5098,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.268Z",
                        updatedAt: "2025-05-20T11:48:18.268Z",
                        publishedAt: "2025-05-20T11:48:18.268Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2044,
                  code: "MTR-0101",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.107Z",
                  updatedAt: "2025-05-20T11:48:16.107Z",
                  publishedAt: "2025-05-20T11:48:16.107Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2722,
                    name: "Stacey Meza",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.891Z",
                    updatedAt: "2025-05-20T11:48:16.891Z",
                    publishedAt: "2025-05-20T11:48:16.891Z",
                    ders: [
                      {
                        id: 5222,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.637Z",
                        updatedAt: "2025-05-20T11:48:18.637Z",
                        publishedAt: "2025-05-20T11:48:18.637Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5230,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.659Z",
                        updatedAt: "2025-05-20T11:48:18.659Z",
                        publishedAt: "2025-05-20T11:48:18.659Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5235,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.679Z",
                        updatedAt: "2025-05-20T11:48:18.679Z",
                        publishedAt: "2025-05-20T11:48:18.679Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5242,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.704Z",
                        updatedAt: "2025-05-20T11:48:18.704Z",
                        publishedAt: "2025-05-20T11:48:18.704Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5248,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.726Z",
                        updatedAt: "2025-05-20T11:48:18.726Z",
                        publishedAt: "2025-05-20T11:48:18.726Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2046,
                  code: "MTR-0103",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.51,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.108Z",
                  updatedAt: "2025-05-20T11:48:16.108Z",
                  publishedAt: "2025-05-20T11:48:16.108Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2788,
                    name: "Dawn Johnson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.902Z",
                    updatedAt: "2025-05-20T11:48:16.902Z",
                    publishedAt: "2025-05-20T11:48:16.902Z",
                    ders: [
                      {
                        id: 5546,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.599Z",
                        updatedAt: "2025-05-20T11:48:19.599Z",
                        publishedAt: "2025-05-20T11:48:19.599Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5552,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.612Z",
                        updatedAt: "2025-05-20T11:48:19.612Z",
                        publishedAt: "2025-05-20T11:48:19.612Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5555,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.625Z",
                        updatedAt: "2025-05-20T11:48:19.625Z",
                        publishedAt: "2025-05-20T11:48:19.625Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5559,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.632Z",
                        updatedAt: "2025-05-20T11:48:19.632Z",
                        publishedAt: "2025-05-20T11:48:19.632Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5563,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.641Z",
                        updatedAt: "2025-05-20T11:48:19.641Z",
                        publishedAt: "2025-05-20T11:48:19.641Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2045,
                  code: "MTR-0102",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.107Z",
                  updatedAt: "2025-05-20T11:48:16.107Z",
                  publishedAt: "2025-05-20T11:48:16.107Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2705,
                    name: "Justin Wilkins",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.917Z",
                    updatedAt: "2025-05-20T11:48:16.917Z",
                    publishedAt: "2025-05-20T11:48:16.917Z",
                    ders: [
                      {
                        id: 5165,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.473Z",
                        updatedAt: "2025-05-20T11:48:18.473Z",
                        publishedAt: "2025-05-20T11:48:18.473Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5171,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.492Z",
                        updatedAt: "2025-05-20T11:48:18.492Z",
                        publishedAt: "2025-05-20T11:48:18.492Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5179,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.515Z",
                        updatedAt: "2025-05-20T11:48:18.515Z",
                        publishedAt: "2025-05-20T11:48:18.515Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5187,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.535Z",
                        updatedAt: "2025-05-20T11:48:18.535Z",
                        publishedAt: "2025-05-20T11:48:18.535Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5193,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.555Z",
                        updatedAt: "2025-05-20T11:48:18.555Z",
                        publishedAt: "2025-05-20T11:48:18.555Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2047,
                  code: "MTR-0104",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.7,
                  longitude: -122.43,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.108Z",
                  updatedAt: "2025-05-20T11:48:16.108Z",
                  publishedAt: "2025-05-20T11:48:16.108Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2749,
                    name: "Matthew Chapman",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.919Z",
                    updatedAt: "2025-05-20T11:48:16.919Z",
                    publishedAt: "2025-05-20T11:48:16.919Z",
                    ders: [
                      {
                        id: 5352,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.050Z",
                        updatedAt: "2025-05-20T11:48:19.050Z",
                        publishedAt: "2025-05-20T11:48:19.050Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5359,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.075Z",
                        updatedAt: "2025-05-20T11:48:19.075Z",
                        publishedAt: "2025-05-20T11:48:19.075Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5367,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.092Z",
                        updatedAt: "2025-05-20T11:48:19.092Z",
                        publishedAt: "2025-05-20T11:48:19.092Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5373,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.109Z",
                        updatedAt: "2025-05-20T11:48:19.109Z",
                        publishedAt: "2025-05-20T11:48:19.109Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5379,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.128Z",
                        updatedAt: "2025-05-20T11:48:19.128Z",
                        publishedAt: "2025-05-20T11:48:19.128Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2051,
                  code: "MTR-0108",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.5,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.108Z",
                  updatedAt: "2025-05-20T11:48:16.108Z",
                  publishedAt: "2025-05-20T11:48:16.108Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2579,
                    name: "Rachel Smith",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.922Z",
                    updatedAt: "2025-05-20T11:48:16.922Z",
                    publishedAt: "2025-05-20T11:48:16.922Z",
                    ders: [
                      {
                        id: 4856,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.310Z",
                        updatedAt: "2025-05-20T11:48:17.310Z",
                        publishedAt: "2025-05-20T11:48:17.310Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4857,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.317Z",
                        updatedAt: "2025-05-20T11:48:17.317Z",
                        publishedAt: "2025-05-20T11:48:17.317Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4858,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.341Z",
                        updatedAt: "2025-05-20T11:48:17.341Z",
                        publishedAt: "2025-05-20T11:48:17.341Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4860,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.356Z",
                        updatedAt: "2025-05-20T11:48:17.356Z",
                        publishedAt: "2025-05-20T11:48:17.356Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 4862,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.363Z",
                        updatedAt: "2025-05-20T11:48:17.363Z",
                        publishedAt: "2025-05-20T11:48:17.363Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2049,
                  code: "MTR-0106",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.108Z",
                  updatedAt: "2025-05-20T11:48:16.108Z",
                  publishedAt: "2025-05-20T11:48:16.108Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2739,
                    name: "Christopher Cox",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.929Z",
                    updatedAt: "2025-05-20T11:48:16.929Z",
                    publishedAt: "2025-05-20T11:48:16.929Z",
                    ders: [
                      {
                        id: 5310,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.929Z",
                        updatedAt: "2025-05-20T11:48:18.929Z",
                        publishedAt: "2025-05-20T11:48:18.929Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5316,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.948Z",
                        updatedAt: "2025-05-20T11:48:18.948Z",
                        publishedAt: "2025-05-20T11:48:18.948Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5322,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.965Z",
                        updatedAt: "2025-05-20T11:48:18.965Z",
                        publishedAt: "2025-05-20T11:48:18.965Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5328,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.981Z",
                        updatedAt: "2025-05-20T11:48:18.981Z",
                        publishedAt: "2025-05-20T11:48:18.981Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5332,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.996Z",
                        updatedAt: "2025-05-20T11:48:18.996Z",
                        publishedAt: "2025-05-20T11:48:18.996Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2052,
                  code: "MTR-0109",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.51,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.108Z",
                  updatedAt: "2025-05-20T11:48:16.108Z",
                  publishedAt: "2025-05-20T11:48:16.108Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2747,
                    name: "Andrew Knight",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.928Z",
                    updatedAt: "2025-05-20T11:48:16.928Z",
                    publishedAt: "2025-05-20T11:48:16.928Z",
                    ders: [
                      {
                        id: 5340,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.021Z",
                        updatedAt: "2025-05-20T11:48:19.021Z",
                        publishedAt: "2025-05-20T11:48:19.021Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5346,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.038Z",
                        updatedAt: "2025-05-20T11:48:19.038Z",
                        publishedAt: "2025-05-20T11:48:19.038Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5354,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.056Z",
                        updatedAt: "2025-05-20T11:48:19.056Z",
                        publishedAt: "2025-05-20T11:48:19.056Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5362,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.076Z",
                        updatedAt: "2025-05-20T11:48:19.076Z",
                        publishedAt: "2025-05-20T11:48:19.076Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5369,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.095Z",
                        updatedAt: "2025-05-20T11:48:19.095Z",
                        publishedAt: "2025-05-20T11:48:19.095Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2053,
                  code: "MTR-0100",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.107Z",
                  updatedAt: "2025-05-20T11:48:16.107Z",
                  publishedAt: "2025-05-20T11:48:16.107Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2758,
                    name: "Caitlin Gates",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.934Z",
                    updatedAt: "2025-05-20T11:48:16.934Z",
                    publishedAt: "2025-05-20T11:48:16.934Z",
                    ders: [
                      {
                        id: 5420,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.247Z",
                        updatedAt: "2025-05-20T11:48:19.247Z",
                        publishedAt: "2025-05-20T11:48:19.247Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5427,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.269Z",
                        updatedAt: "2025-05-20T11:48:19.269Z",
                        publishedAt: "2025-05-20T11:48:19.269Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5434,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.288Z",
                        updatedAt: "2025-05-20T11:48:19.288Z",
                        publishedAt: "2025-05-20T11:48:19.288Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5442,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.307Z",
                        updatedAt: "2025-05-20T11:48:19.307Z",
                        publishedAt: "2025-05-20T11:48:19.307Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5449,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.324Z",
                        updatedAt: "2025-05-20T11:48:19.324Z",
                        publishedAt: "2025-05-20T11:48:19.324Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2050,
                  code: "MTR-0107",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.81,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.108Z",
                  updatedAt: "2025-05-20T11:48:16.108Z",
                  publishedAt: "2025-05-20T11:48:16.108Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2725,
                    name: "Robert Richardson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.927Z",
                    updatedAt: "2025-05-20T11:48:16.927Z",
                    publishedAt: "2025-05-20T11:48:16.927Z",
                    ders: [
                      {
                        id: 5240,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.698Z",
                        updatedAt: "2025-05-20T11:48:18.698Z",
                        publishedAt: "2025-05-20T11:48:18.698Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5247,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.722Z",
                        updatedAt: "2025-05-20T11:48:18.722Z",
                        publishedAt: "2025-05-20T11:48:18.722Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5252,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.744Z",
                        updatedAt: "2025-05-20T11:48:18.744Z",
                        publishedAt: "2025-05-20T11:48:18.744Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5258,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.763Z",
                        updatedAt: "2025-05-20T11:48:18.763Z",
                        publishedAt: "2025-05-20T11:48:18.763Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5263,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.783Z",
                        updatedAt: "2025-05-20T11:48:18.783Z",
                        publishedAt: "2025-05-20T11:48:18.783Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 211,
              name: "Golden Beam – SFRC-TX02",
              city: "San Francisco",
              state: "CA",
              latitude: "37.78561",
              longtitude: "-122.506056",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.968Z",
              updatedAt: "2025-05-20T11:48:15.968Z",
              publishedAt: "2025-05-20T11:48:15.968Z",
              max_capacity_KW: 85,
              meters: [
                {
                  id: 2054,
                  code: "MTR-0140",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.74,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2752,
                    name: "Todd Bailey",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.928Z",
                    updatedAt: "2025-05-20T11:48:16.928Z",
                    publishedAt: "2025-05-20T11:48:16.928Z",
                    ders: [
                      {
                        id: 5382,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.131Z",
                        updatedAt: "2025-05-20T11:48:19.131Z",
                        publishedAt: "2025-05-20T11:48:19.131Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5389,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.154Z",
                        updatedAt: "2025-05-20T11:48:19.154Z",
                        publishedAt: "2025-05-20T11:48:19.154Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5396,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.175Z",
                        updatedAt: "2025-05-20T11:48:19.175Z",
                        publishedAt: "2025-05-20T11:48:19.175Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5402,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.192Z",
                        updatedAt: "2025-05-20T11:48:19.192Z",
                        publishedAt: "2025-05-20T11:48:19.192Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5408,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.210Z",
                        updatedAt: "2025-05-20T11:48:19.210Z",
                        publishedAt: "2025-05-20T11:48:19.210Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2062,
                  code: "MTR-0148",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.81,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2751,
                    name: "Brian Smith",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.924Z",
                    updatedAt: "2025-05-20T11:48:16.924Z",
                    publishedAt: "2025-05-20T11:48:16.924Z",
                    ders: [
                      {
                        id: 5364,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.085Z",
                        updatedAt: "2025-05-20T11:48:19.085Z",
                        publishedAt: "2025-05-20T11:48:19.085Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5370,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.102Z",
                        updatedAt: "2025-05-20T11:48:19.102Z",
                        publishedAt: "2025-05-20T11:48:19.102Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5377,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.121Z",
                        updatedAt: "2025-05-20T11:48:19.121Z",
                        publishedAt: "2025-05-20T11:48:19.121Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5384,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.140Z",
                        updatedAt: "2025-05-20T11:48:19.140Z",
                        publishedAt: "2025-05-20T11:48:19.140Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5391,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.159Z",
                        updatedAt: "2025-05-20T11:48:19.159Z",
                        publishedAt: "2025-05-20T11:48:19.159Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2058,
                  code: "MTR-0144",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.7,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2740,
                    name: "Jordan Jennings",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.931Z",
                    updatedAt: "2025-05-20T11:48:16.931Z",
                    publishedAt: "2025-05-20T11:48:16.931Z",
                    ders: [
                      {
                        id: 5312,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.940Z",
                        updatedAt: "2025-05-20T11:48:18.940Z",
                        publishedAt: "2025-05-20T11:48:18.940Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5318,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.957Z",
                        updatedAt: "2025-05-20T11:48:18.957Z",
                        publishedAt: "2025-05-20T11:48:18.957Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5324,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.974Z",
                        updatedAt: "2025-05-20T11:48:18.974Z",
                        publishedAt: "2025-05-20T11:48:18.974Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5330,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.989Z",
                        updatedAt: "2025-05-20T11:48:18.989Z",
                        publishedAt: "2025-05-20T11:48:18.989Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5334,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.002Z",
                        updatedAt: "2025-05-20T11:48:19.002Z",
                        publishedAt: "2025-05-20T11:48:19.002Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2063,
                  code: "MTR-0149",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.45,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2729,
                    name: "Tiffany Brown",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.932Z",
                    updatedAt: "2025-05-20T11:48:16.932Z",
                    publishedAt: "2025-05-20T11:48:16.932Z",
                    ders: [
                      {
                        id: 5253,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.747Z",
                        updatedAt: "2025-05-20T11:48:18.747Z",
                        publishedAt: "2025-05-20T11:48:18.747Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5260,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.767Z",
                        updatedAt: "2025-05-20T11:48:18.767Z",
                        publishedAt: "2025-05-20T11:48:18.767Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5265,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.788Z",
                        updatedAt: "2025-05-20T11:48:18.788Z",
                        publishedAt: "2025-05-20T11:48:18.788Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5273,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.818Z",
                        updatedAt: "2025-05-20T11:48:18.818Z",
                        publishedAt: "2025-05-20T11:48:18.818Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5281,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.839Z",
                        updatedAt: "2025-05-20T11:48:18.839Z",
                        publishedAt: "2025-05-20T11:48:18.839Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2055,
                  code: "MTR-0141",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.44,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2721,
                    name: "Angela Conway",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.933Z",
                    updatedAt: "2025-05-20T11:48:16.933Z",
                    publishedAt: "2025-05-20T11:48:16.933Z",
                    ders: [
                      {
                        id: 5217,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.624Z",
                        updatedAt: "2025-05-20T11:48:18.624Z",
                        publishedAt: "2025-05-20T11:48:18.624Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5225,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.645Z",
                        updatedAt: "2025-05-20T11:48:18.645Z",
                        publishedAt: "2025-05-20T11:48:18.645Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5232,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.666Z",
                        updatedAt: "2025-05-20T11:48:18.666Z",
                        publishedAt: "2025-05-20T11:48:18.666Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5238,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.689Z",
                        updatedAt: "2025-05-20T11:48:18.689Z",
                        publishedAt: "2025-05-20T11:48:18.689Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5244,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.713Z",
                        updatedAt: "2025-05-20T11:48:18.713Z",
                        publishedAt: "2025-05-20T11:48:18.713Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2057,
                  code: "MTR-0143",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.38,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2697,
                    name: "Misty Rubio MD",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.934Z",
                    updatedAt: "2025-05-20T11:48:16.934Z",
                    publishedAt: "2025-05-20T11:48:16.934Z",
                    ders: [
                      {
                        id: 5103,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.283Z",
                        updatedAt: "2025-05-20T11:48:18.283Z",
                        publishedAt: "2025-05-20T11:48:18.283Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5109,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.305Z",
                        updatedAt: "2025-05-20T11:48:18.305Z",
                        publishedAt: "2025-05-20T11:48:18.305Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5117,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.327Z",
                        updatedAt: "2025-05-20T11:48:18.327Z",
                        publishedAt: "2025-05-20T11:48:18.327Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5124,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.348Z",
                        updatedAt: "2025-05-20T11:48:18.348Z",
                        publishedAt: "2025-05-20T11:48:18.348Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5132,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.371Z",
                        updatedAt: "2025-05-20T11:48:18.371Z",
                        publishedAt: "2025-05-20T11:48:18.371Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2056,
                  code: "MTR-0142",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2708,
                    name: "Sean Smith",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.942Z",
                    updatedAt: "2025-05-20T11:48:16.942Z",
                    publishedAt: "2025-05-20T11:48:16.942Z",
                    ders: [
                      {
                        id: 5151,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.430Z",
                        updatedAt: "2025-05-20T11:48:18.430Z",
                        publishedAt: "2025-05-20T11:48:18.430Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5156,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.446Z",
                        updatedAt: "2025-05-20T11:48:18.446Z",
                        publishedAt: "2025-05-20T11:48:18.446Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5162,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.463Z",
                        updatedAt: "2025-05-20T11:48:18.463Z",
                        publishedAt: "2025-05-20T11:48:18.463Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5168,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.481Z",
                        updatedAt: "2025-05-20T11:48:18.481Z",
                        publishedAt: "2025-05-20T11:48:18.481Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5175,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.503Z",
                        updatedAt: "2025-05-20T11:48:18.503Z",
                        publishedAt: "2025-05-20T11:48:18.503Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2061,
                  code: "MTR-0147",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2711,
                    name: "Seth Juarez",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.937Z",
                    updatedAt: "2025-05-20T11:48:16.937Z",
                    publishedAt: "2025-05-20T11:48:16.937Z",
                    ders: [
                      {
                        id: 5164,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.466Z",
                        updatedAt: "2025-05-20T11:48:18.466Z",
                        publishedAt: "2025-05-20T11:48:18.466Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5172,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.493Z",
                        updatedAt: "2025-05-20T11:48:18.493Z",
                        publishedAt: "2025-05-20T11:48:18.493Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5180,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.516Z",
                        updatedAt: "2025-05-20T11:48:18.516Z",
                        publishedAt: "2025-05-20T11:48:18.516Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5188,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.536Z",
                        updatedAt: "2025-05-20T11:48:18.536Z",
                        publishedAt: "2025-05-20T11:48:18.536Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5194,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.556Z",
                        updatedAt: "2025-05-20T11:48:18.556Z",
                        publishedAt: "2025-05-20T11:48:18.556Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2059,
                  code: "MTR-0145",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2741,
                    name: "Ricardo Welch",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.936Z",
                    updatedAt: "2025-05-20T11:48:16.936Z",
                    publishedAt: "2025-05-20T11:48:16.936Z",
                    ders: [
                      {
                        id: 5348,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.037Z",
                        updatedAt: "2025-05-20T11:48:19.037Z",
                        publishedAt: "2025-05-20T11:48:19.037Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5361,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.072Z",
                        updatedAt: "2025-05-20T11:48:19.072Z",
                        publishedAt: "2025-05-20T11:48:19.072Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5375,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.105Z",
                        updatedAt: "2025-05-20T11:48:19.105Z",
                        publishedAt: "2025-05-20T11:48:19.105Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5386,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.138Z",
                        updatedAt: "2025-05-20T11:48:19.138Z",
                        publishedAt: "2025-05-20T11:48:19.138Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5394,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.170Z",
                        updatedAt: "2025-05-20T11:48:19.170Z",
                        publishedAt: "2025-05-20T11:48:19.170Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2060,
                  code: "MTR-0146",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.117Z",
                  updatedAt: "2025-05-20T11:48:16.117Z",
                  publishedAt: "2025-05-20T11:48:16.117Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2678,
                    name: "Samantha Norman",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.943Z",
                    updatedAt: "2025-05-20T11:48:16.943Z",
                    publishedAt: "2025-05-20T11:48:16.943Z",
                    ders: [
                      {
                        id: 5011,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.000Z",
                        updatedAt: "2025-05-20T11:48:18.000Z",
                        publishedAt: "2025-05-20T11:48:18.000Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5013,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.007Z",
                        updatedAt: "2025-05-20T11:48:18.007Z",
                        publishedAt: "2025-05-20T11:48:18.007Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5015,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.012Z",
                        updatedAt: "2025-05-20T11:48:18.012Z",
                        publishedAt: "2025-05-20T11:48:18.012Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5019,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.028Z",
                        updatedAt: "2025-05-20T11:48:18.028Z",
                        publishedAt: "2025-05-20T11:48:18.028Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5026,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.053Z",
                        updatedAt: "2025-05-20T11:48:18.053Z",
                        publishedAt: "2025-05-20T11:48:18.053Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 213,
              name: "Seacliff – RCHD-TX-A",
              city: "San Francisco",
              state: "CA",
              latitude: "37.710678",
              longtitude: "-122.494126",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.968Z",
              updatedAt: "2025-05-21T06:07:47.743Z",
              publishedAt: "2025-05-20T11:48:15.968Z",
              max_capacity_KW: 70,
              meters: [
                {
                  id: 2074,
                  code: "MTR-0110",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.74,
                  longitude: -122.45,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2745,
                    name: "Sue Curtis",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.006Z",
                    updatedAt: "2025-05-20T11:48:17.006Z",
                    publishedAt: "2025-05-20T11:48:17.006Z",
                    ders: [
                      {
                        id: 5360,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.073Z",
                        updatedAt: "2025-05-20T11:48:19.073Z",
                        publishedAt: "2025-05-20T11:48:19.073Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5368,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.093Z",
                        updatedAt: "2025-05-20T11:48:19.093Z",
                        publishedAt: "2025-05-20T11:48:19.093Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5374,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.110Z",
                        updatedAt: "2025-05-20T11:48:19.110Z",
                        publishedAt: "2025-05-20T11:48:19.110Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5380,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.129Z",
                        updatedAt: "2025-05-20T11:48:19.129Z",
                        publishedAt: "2025-05-20T11:48:19.129Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5387,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.148Z",
                        updatedAt: "2025-05-20T11:48:19.148Z",
                        publishedAt: "2025-05-20T11:48:19.148Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2076,
                  code: "MTR-0111",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.38,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2766,
                    name: "Joshua Bates",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.011Z",
                    updatedAt: "2025-05-20T11:48:17.011Z",
                    publishedAt: "2025-05-20T11:48:17.011Z",
                    ders: [
                      {
                        id: 5459,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.349Z",
                        updatedAt: "2025-05-20T11:48:19.349Z",
                        publishedAt: "2025-05-20T11:48:19.349Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5463,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.368Z",
                        updatedAt: "2025-05-20T11:48:19.368Z",
                        publishedAt: "2025-05-20T11:48:19.368Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5469,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.386Z",
                        updatedAt: "2025-05-20T11:48:19.386Z",
                        publishedAt: "2025-05-20T11:48:19.386Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5475,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.401Z",
                        updatedAt: "2025-05-20T11:48:19.401Z",
                        publishedAt: "2025-05-20T11:48:19.401Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5483,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.418Z",
                        updatedAt: "2025-05-20T11:48:19.418Z",
                        publishedAt: "2025-05-20T11:48:19.418Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2077,
                  code: "MTR-0114",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2691,
                    name: "Jessica Henry",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.012Z",
                    updatedAt: "2025-05-20T11:48:17.012Z",
                    publishedAt: "2025-05-20T11:48:17.012Z",
                    ders: [
                      {
                        id: 5063,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.166Z",
                        updatedAt: "2025-05-20T11:48:18.166Z",
                        publishedAt: "2025-05-20T11:48:18.166Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5072,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.190Z",
                        updatedAt: "2025-05-20T11:48:18.190Z",
                        publishedAt: "2025-05-20T11:48:18.190Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5080,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.215Z",
                        updatedAt: "2025-05-20T11:48:18.215Z",
                        publishedAt: "2025-05-20T11:48:18.215Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5089,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.236Z",
                        updatedAt: "2025-05-20T11:48:18.236Z",
                        publishedAt: "2025-05-20T11:48:18.236Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5095,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.255Z",
                        updatedAt: "2025-05-20T11:48:18.255Z",
                        publishedAt: "2025-05-20T11:48:18.255Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2078,
                  code: "MTR-0115",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2755,
                    name: "Scott Parker",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.015Z",
                    updatedAt: "2025-05-20T11:48:17.015Z",
                    publishedAt: "2025-05-20T11:48:17.015Z",
                    ders: [
                      {
                        id: 5385,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.141Z",
                        updatedAt: "2025-05-20T11:48:19.141Z",
                        publishedAt: "2025-05-20T11:48:19.141Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5392,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.160Z",
                        updatedAt: "2025-05-20T11:48:19.160Z",
                        publishedAt: "2025-05-20T11:48:19.160Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5398,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.179Z",
                        updatedAt: "2025-05-20T11:48:19.179Z",
                        publishedAt: "2025-05-20T11:48:19.179Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5404,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.197Z",
                        updatedAt: "2025-05-20T11:48:19.197Z",
                        publishedAt: "2025-05-20T11:48:19.197Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5409,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.214Z",
                        updatedAt: "2025-05-20T11:48:19.214Z",
                        publishedAt: "2025-05-20T11:48:19.214Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2075,
                  code: "MTR-0112",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2762,
                    name: "Tracy Brown",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.018Z",
                    updatedAt: "2025-05-20T11:48:17.018Z",
                    publishedAt: "2025-05-20T11:48:17.018Z",
                    ders: [
                      {
                        id: 5418,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.243Z",
                        updatedAt: "2025-05-20T11:48:19.243Z",
                        publishedAt: "2025-05-20T11:48:19.243Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5425,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.261Z",
                        updatedAt: "2025-05-20T11:48:19.261Z",
                        publishedAt: "2025-05-20T11:48:19.261Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5433,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.282Z",
                        updatedAt: "2025-05-20T11:48:19.282Z",
                        publishedAt: "2025-05-20T11:48:19.282Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5441,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.299Z",
                        updatedAt: "2025-05-20T11:48:19.299Z",
                        publishedAt: "2025-05-20T11:48:19.299Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5447,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.315Z",
                        updatedAt: "2025-05-20T11:48:19.315Z",
                        publishedAt: "2025-05-20T11:48:19.315Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2080,
                  code: "MTR-0116",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.7,
                  longitude: -122.5,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2699,
                    name: "Robert Lawrence",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.015Z",
                    updatedAt: "2025-05-20T11:48:17.015Z",
                    publishedAt: "2025-05-20T11:48:17.015Z",
                    ders: [
                      {
                        id: 5114,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.317Z",
                        updatedAt: "2025-05-20T11:48:18.317Z",
                        publishedAt: "2025-05-20T11:48:18.317Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5123,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.344Z",
                        updatedAt: "2025-05-20T11:48:18.344Z",
                        publishedAt: "2025-05-20T11:48:18.344Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5131,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.367Z",
                        updatedAt: "2025-05-20T11:48:18.367Z",
                        publishedAt: "2025-05-20T11:48:18.367Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5137,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.385Z",
                        updatedAt: "2025-05-20T11:48:18.385Z",
                        publishedAt: "2025-05-20T11:48:18.385Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5143,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.404Z",
                        updatedAt: "2025-05-20T11:48:18.404Z",
                        publishedAt: "2025-05-20T11:48:18.404Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2079,
                  code: "MTR-0113",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2733,
                    name: "Joseph Powell",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.017Z",
                    updatedAt: "2025-05-20T11:48:17.017Z",
                    publishedAt: "2025-05-20T11:48:17.017Z",
                    ders: [
                      {
                        id: 5271,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.812Z",
                        updatedAt: "2025-05-20T11:48:18.812Z",
                        publishedAt: "2025-05-20T11:48:18.812Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5279,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.834Z",
                        updatedAt: "2025-05-20T11:48:18.834Z",
                        publishedAt: "2025-05-20T11:48:18.834Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5285,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.853Z",
                        updatedAt: "2025-05-20T11:48:18.853Z",
                        publishedAt: "2025-05-20T11:48:18.853Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5292,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.876Z",
                        updatedAt: "2025-05-20T11:48:18.876Z",
                        publishedAt: "2025-05-20T11:48:18.876Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5299,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.899Z",
                        updatedAt: "2025-05-20T11:48:18.899Z",
                        publishedAt: "2025-05-20T11:48:18.899Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2081,
                  code: "MTR-0117",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.39,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2765,
                    name: "Donna Sutton",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.021Z",
                    updatedAt: "2025-05-20T11:48:17.021Z",
                    publishedAt: "2025-05-20T11:48:17.021Z",
                    ders: [
                      {
                        id: 5430,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.274Z",
                        updatedAt: "2025-05-20T11:48:19.274Z",
                        publishedAt: "2025-05-20T11:48:19.274Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5437,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.292Z",
                        updatedAt: "2025-05-20T11:48:19.292Z",
                        publishedAt: "2025-05-20T11:48:19.292Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5444,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.310Z",
                        updatedAt: "2025-05-20T11:48:19.310Z",
                        publishedAt: "2025-05-20T11:48:19.310Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5451,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.327Z",
                        updatedAt: "2025-05-20T11:48:19.327Z",
                        publishedAt: "2025-05-20T11:48:19.327Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5455,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.342Z",
                        updatedAt: "2025-05-20T11:48:19.342Z",
                        publishedAt: "2025-05-20T11:48:19.342Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2082,
                  code: "MTR-0118",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2612,
                    name: "John Ramsey",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.019Z",
                    updatedAt: "2025-05-20T11:48:17.019Z",
                    publishedAt: "2025-05-20T11:48:17.019Z",
                    ders: [
                      {
                        id: 4893,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.535Z",
                        updatedAt: "2025-05-20T11:48:17.535Z",
                        publishedAt: "2025-05-20T11:48:17.535Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4899,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.559Z",
                        updatedAt: "2025-05-20T11:48:17.559Z",
                        publishedAt: "2025-05-20T11:48:17.559Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4903,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.572Z",
                        updatedAt: "2025-05-20T11:48:17.572Z",
                        publishedAt: "2025-05-20T11:48:17.572Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4904,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.580Z",
                        updatedAt: "2025-05-20T11:48:17.580Z",
                        publishedAt: "2025-05-20T11:48:17.580Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4907,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.593Z",
                        updatedAt: "2025-05-20T11:48:17.593Z",
                        publishedAt: "2025-05-20T11:48:17.593Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2083,
                  code: "MTR-0119",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.44,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.148Z",
                  updatedAt: "2025-05-20T11:48:16.148Z",
                  publishedAt: "2025-05-20T11:48:16.148Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2754,
                    name: "Jon Bowman",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.031Z",
                    updatedAt: "2025-05-20T11:48:17.031Z",
                    publishedAt: "2025-05-20T11:48:17.031Z",
                    ders: [
                      {
                        id: 5381,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.132Z",
                        updatedAt: "2025-05-20T11:48:19.132Z",
                        publishedAt: "2025-05-20T11:48:19.132Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5388,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.151Z",
                        updatedAt: "2025-05-20T11:48:19.151Z",
                        publishedAt: "2025-05-20T11:48:19.151Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5395,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.172Z",
                        updatedAt: "2025-05-20T11:48:19.172Z",
                        publishedAt: "2025-05-20T11:48:19.172Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5401,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.189Z",
                        updatedAt: "2025-05-20T11:48:19.189Z",
                        publishedAt: "2025-05-20T11:48:19.189Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5407,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.207Z",
                        updatedAt: "2025-05-20T11:48:19.207Z",
                        publishedAt: "2025-05-20T11:48:19.207Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 214,
              name: "Cabrillo – RCHD33-TX1",
              city: "San Francisco",
              state: "CA",
              latitude: "37.734297",
              longtitude: "-122.482955",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.968Z",
              updatedAt: "2025-05-20T11:48:15.968Z",
              publishedAt: "2025-05-20T11:48:15.968Z",
              max_capacity_KW: 75,
              meters: [
                {
                  id: 2064,
                  code: "MTR-0120",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.130Z",
                  updatedAt: "2025-05-20T11:48:16.130Z",
                  publishedAt: "2025-05-20T11:48:16.130Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2590,
                    name: "Jessica Mathis",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.935Z",
                    updatedAt: "2025-05-20T11:48:16.935Z",
                    publishedAt: "2025-05-20T11:48:16.935Z",
                    ders: [
                      {
                        id: 4866,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.382Z",
                        updatedAt: "2025-05-20T11:48:17.382Z",
                        publishedAt: "2025-05-20T11:48:17.382Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4867,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.419Z",
                        updatedAt: "2025-05-20T11:48:17.419Z",
                        publishedAt: "2025-05-20T11:48:17.419Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4868,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.427Z",
                        updatedAt: "2025-05-20T11:48:17.427Z",
                        publishedAt: "2025-05-20T11:48:17.427Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4869,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.432Z",
                        updatedAt: "2025-05-20T11:48:17.432Z",
                        publishedAt: "2025-05-20T11:48:17.432Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 4870,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.435Z",
                        updatedAt: "2025-05-20T11:48:17.435Z",
                        publishedAt: "2025-05-20T11:48:17.435Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2065,
                  code: "MTR-0121",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.81,
                  longitude: -122.5,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.130Z",
                  updatedAt: "2025-05-20T11:48:16.130Z",
                  publishedAt: "2025-05-20T11:48:16.130Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2696,
                    name: "Lonnie Brooks",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.965Z",
                    updatedAt: "2025-05-20T11:48:16.965Z",
                    publishedAt: "2025-05-20T11:48:16.965Z",
                    ders: [
                      {
                        id: 5104,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.286Z",
                        updatedAt: "2025-05-20T11:48:18.286Z",
                        publishedAt: "2025-05-20T11:48:18.286Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5110,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.309Z",
                        updatedAt: "2025-05-20T11:48:18.309Z",
                        publishedAt: "2025-05-20T11:48:18.309Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5118,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.331Z",
                        updatedAt: "2025-05-20T11:48:18.331Z",
                        publishedAt: "2025-05-20T11:48:18.331Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5126,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.352Z",
                        updatedAt: "2025-05-20T11:48:18.352Z",
                        publishedAt: "2025-05-20T11:48:18.352Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5133,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.374Z",
                        updatedAt: "2025-05-20T11:48:18.374Z",
                        publishedAt: "2025-05-20T11:48:18.374Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2072,
                  code: "MTR-0128",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.131Z",
                  updatedAt: "2025-05-20T11:48:16.131Z",
                  publishedAt: "2025-05-20T11:48:16.131Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2732,
                    name: "Robert Cook",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.967Z",
                    updatedAt: "2025-05-20T11:48:16.967Z",
                    publishedAt: "2025-05-20T11:48:16.967Z",
                    ders: [
                      {
                        id: 5267,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.795Z",
                        updatedAt: "2025-05-20T11:48:18.795Z",
                        publishedAt: "2025-05-20T11:48:18.795Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5275,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.821Z",
                        updatedAt: "2025-05-20T11:48:18.821Z",
                        publishedAt: "2025-05-20T11:48:18.821Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5282,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.844Z",
                        updatedAt: "2025-05-20T11:48:18.844Z",
                        publishedAt: "2025-05-20T11:48:18.844Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5288,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.864Z",
                        updatedAt: "2025-05-20T11:48:18.864Z",
                        publishedAt: "2025-05-20T11:48:18.864Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5295,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.886Z",
                        updatedAt: "2025-05-20T11:48:18.886Z",
                        publishedAt: "2025-05-20T11:48:18.886Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2067,
                  code: "MTR-0123",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.44,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.130Z",
                  updatedAt: "2025-05-20T11:48:16.130Z",
                  publishedAt: "2025-05-20T11:48:16.130Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2689,
                    name: "Jason Adams",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.975Z",
                    updatedAt: "2025-05-20T11:48:16.975Z",
                    publishedAt: "2025-05-20T11:48:16.975Z",
                    ders: [
                      {
                        id: 5056,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.146Z",
                        updatedAt: "2025-05-20T11:48:18.146Z",
                        publishedAt: "2025-05-20T11:48:18.146Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5062,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.164Z",
                        updatedAt: "2025-05-20T11:48:18.164Z",
                        publishedAt: "2025-05-20T11:48:18.164Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5069,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.181Z",
                        updatedAt: "2025-05-20T11:48:18.181Z",
                        publishedAt: "2025-05-20T11:48:18.181Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5078,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.206Z",
                        updatedAt: "2025-05-20T11:48:18.206Z",
                        publishedAt: "2025-05-20T11:48:18.206Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5087,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.230Z",
                        updatedAt: "2025-05-20T11:48:18.230Z",
                        publishedAt: "2025-05-20T11:48:18.230Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2069,
                  code: "MTR-0125",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.5,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.131Z",
                  updatedAt: "2025-05-20T11:48:16.131Z",
                  publishedAt: "2025-05-20T11:48:16.131Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2707,
                    name: "Miguel Smith",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.976Z",
                    updatedAt: "2025-05-20T11:48:16.976Z",
                    publishedAt: "2025-05-20T11:48:16.976Z",
                    ders: [
                      {
                        id: 5150,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.426Z",
                        updatedAt: "2025-05-20T11:48:18.426Z",
                        publishedAt: "2025-05-20T11:48:18.426Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5157,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.448Z",
                        updatedAt: "2025-05-20T11:48:18.448Z",
                        publishedAt: "2025-05-20T11:48:18.448Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5163,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.465Z",
                        updatedAt: "2025-05-20T11:48:18.465Z",
                        publishedAt: "2025-05-20T11:48:18.465Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5169,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.483Z",
                        updatedAt: "2025-05-20T11:48:18.483Z",
                        publishedAt: "2025-05-20T11:48:18.483Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5176,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.504Z",
                        updatedAt: "2025-05-20T11:48:18.504Z",
                        publishedAt: "2025-05-20T11:48:18.504Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2071,
                  code: "MTR-0127",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.131Z",
                  updatedAt: "2025-05-20T11:48:16.131Z",
                  publishedAt: "2025-05-20T11:48:16.131Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2723,
                    name: "Rebecca Mitchell",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.971Z",
                    updatedAt: "2025-05-20T11:48:16.971Z",
                    publishedAt: "2025-05-20T11:48:16.971Z",
                    ders: [
                      {
                        id: 5228,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.655Z",
                        updatedAt: "2025-05-20T11:48:18.655Z",
                        publishedAt: "2025-05-20T11:48:18.655Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5236,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.683Z",
                        updatedAt: "2025-05-20T11:48:18.683Z",
                        publishedAt: "2025-05-20T11:48:18.683Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5243,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.709Z",
                        updatedAt: "2025-05-20T11:48:18.709Z",
                        publishedAt: "2025-05-20T11:48:18.709Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5250,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.730Z",
                        updatedAt: "2025-05-20T11:48:18.730Z",
                        publishedAt: "2025-05-20T11:48:18.730Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5255,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.751Z",
                        updatedAt: "2025-05-20T11:48:18.751Z",
                        publishedAt: "2025-05-20T11:48:18.751Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2070,
                  code: "MTR-0126",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.39,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.131Z",
                  updatedAt: "2025-05-20T11:48:16.131Z",
                  publishedAt: "2025-05-20T11:48:16.131Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2727,
                    name: "Melissa Carter",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.976Z",
                    updatedAt: "2025-05-20T11:48:16.976Z",
                    publishedAt: "2025-05-20T11:48:16.976Z",
                    ders: [
                      {
                        id: 5270,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.797Z",
                        updatedAt: "2025-05-20T11:48:18.797Z",
                        publishedAt: "2025-05-20T11:48:18.797Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5284,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.842Z",
                        updatedAt: "2025-05-20T11:48:18.842Z",
                        publishedAt: "2025-05-20T11:48:18.842Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5291,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.870Z",
                        updatedAt: "2025-05-20T11:48:18.870Z",
                        publishedAt: "2025-05-20T11:48:18.870Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5298,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.894Z",
                        updatedAt: "2025-05-20T11:48:18.894Z",
                        publishedAt: "2025-05-20T11:48:18.894Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5305,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.916Z",
                        updatedAt: "2025-05-20T11:48:18.916Z",
                        publishedAt: "2025-05-20T11:48:18.916Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2073,
                  code: "MTR-0129",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.131Z",
                  updatedAt: "2025-05-20T11:48:16.131Z",
                  publishedAt: "2025-05-20T11:48:16.131Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2743,
                    name: "Hunter Williams",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.973Z",
                    updatedAt: "2025-05-20T11:48:16.973Z",
                    publishedAt: "2025-05-20T11:48:16.973Z",
                    ders: [
                      {
                        id: 5323,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.970Z",
                        updatedAt: "2025-05-20T11:48:18.970Z",
                        publishedAt: "2025-05-20T11:48:18.970Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5331,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.990Z",
                        updatedAt: "2025-05-20T11:48:18.990Z",
                        publishedAt: "2025-05-20T11:48:18.990Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5335,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.003Z",
                        updatedAt: "2025-05-20T11:48:19.003Z",
                        publishedAt: "2025-05-20T11:48:19.003Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5339,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.018Z",
                        updatedAt: "2025-05-20T11:48:19.018Z",
                        publishedAt: "2025-05-20T11:48:19.018Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5345,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.035Z",
                        updatedAt: "2025-05-20T11:48:19.035Z",
                        publishedAt: "2025-05-20T11:48:19.035Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2066,
                  code: "MTR-0122",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.51,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.130Z",
                  updatedAt: "2025-05-20T11:48:16.130Z",
                  publishedAt: "2025-05-20T11:48:16.130Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2734,
                    name: "Gerald Weiss DDS",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.969Z",
                    updatedAt: "2025-05-20T11:48:16.969Z",
                    publishedAt: "2025-05-20T11:48:16.969Z",
                    ders: [
                      {
                        id: 5278,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.830Z",
                        updatedAt: "2025-05-20T11:48:18.830Z",
                        publishedAt: "2025-05-20T11:48:18.830Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5286,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.854Z",
                        updatedAt: "2025-05-20T11:48:18.854Z",
                        publishedAt: "2025-05-20T11:48:18.854Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5293,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.877Z",
                        updatedAt: "2025-05-20T11:48:18.877Z",
                        publishedAt: "2025-05-20T11:48:18.877Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5300,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.901Z",
                        updatedAt: "2025-05-20T11:48:18.901Z",
                        publishedAt: "2025-05-20T11:48:18.901Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5306,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.920Z",
                        updatedAt: "2025-05-20T11:48:18.920Z",
                        publishedAt: "2025-05-20T11:48:18.920Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2068,
                  code: "MTR-0124",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.48,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.130Z",
                  updatedAt: "2025-05-20T11:48:16.130Z",
                  publishedAt: "2025-05-20T11:48:16.130Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2601,
                    name: "Erin Cook",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.974Z",
                    updatedAt: "2025-05-20T11:48:16.974Z",
                    publishedAt: "2025-05-20T11:48:16.974Z",
                    ders: [
                      {
                        id: 4871,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.448Z",
                        updatedAt: "2025-05-20T11:48:17.448Z",
                        publishedAt: "2025-05-20T11:48:17.448Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 4872,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.455Z",
                        updatedAt: "2025-05-20T11:48:17.455Z",
                        publishedAt: "2025-05-20T11:48:17.455Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4873,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.475Z",
                        updatedAt: "2025-05-20T11:48:17.475Z",
                        publishedAt: "2025-05-20T11:48:17.475Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4878,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.495Z",
                        updatedAt: "2025-05-20T11:48:17.495Z",
                        publishedAt: "2025-05-20T11:48:17.495Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 4883,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.509Z",
                        updatedAt: "2025-05-20T11:48:17.509Z",
                        publishedAt: "2025-05-20T11:48:17.509Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 215,
              name: "Argonaut – SFRCH-TX03",
              city: "San Francisco",
              state: "CA",
              latitude: "37.758112",
              emergency_service: true,
              longtitude: "-122.477705",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.968Z",
              updatedAt: "2025-05-20T11:48:15.968Z",
              publishedAt: "2025-05-20T11:48:15.968Z",
              max_capacity_KW: 80,
              meters: [
                {
                  id: 2034,
                  code: "MTR-0130",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.48,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.098Z",
                  updatedAt: "2025-05-20T11:48:16.098Z",
                  publishedAt: "2025-05-20T11:48:16.098Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2680,
                    name: "Heather Davis",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.873Z",
                    updatedAt: "2025-05-20T11:48:16.873Z",
                    publishedAt: "2025-05-20T11:48:16.873Z",
                    ders: [
                      {
                        id: 5022,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.043Z",
                        updatedAt: "2025-05-20T11:48:18.043Z",
                        publishedAt: "2025-05-20T11:48:18.043Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5028,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.062Z",
                        updatedAt: "2025-05-20T11:48:18.062Z",
                        publishedAt: "2025-05-20T11:48:18.062Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5035,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.081Z",
                        updatedAt: "2025-05-20T11:48:18.081Z",
                        publishedAt: "2025-05-20T11:48:18.081Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5042,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.101Z",
                        updatedAt: "2025-05-20T11:48:18.101Z",
                        publishedAt: "2025-05-20T11:48:18.101Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5047,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.115Z",
                        updatedAt: "2025-05-20T11:48:18.115Z",
                        publishedAt: "2025-05-20T11:48:18.115Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2035,
                  code: "MTR-0132",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.098Z",
                  updatedAt: "2025-05-20T11:48:16.098Z",
                  publishedAt: "2025-05-20T11:48:16.098Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2713,
                    name: "Jason Nguyen",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.876Z",
                    updatedAt: "2025-05-20T11:48:16.876Z",
                    publishedAt: "2025-05-20T11:48:16.876Z",
                    ders: [
                      {
                        id: 5181,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.517Z",
                        updatedAt: "2025-05-20T11:48:18.517Z",
                        publishedAt: "2025-05-20T11:48:18.517Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5196,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.553Z",
                        updatedAt: "2025-05-20T11:48:18.553Z",
                        publishedAt: "2025-05-20T11:48:18.553Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5207,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.593Z",
                        updatedAt: "2025-05-20T11:48:18.593Z",
                        publishedAt: "2025-05-20T11:48:18.593Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5214,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.614Z",
                        updatedAt: "2025-05-20T11:48:18.614Z",
                        publishedAt: "2025-05-20T11:48:18.614Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5221,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.635Z",
                        updatedAt: "2025-05-20T11:48:18.635Z",
                        publishedAt: "2025-05-20T11:48:18.635Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2036,
                  code: "MTR-0133",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.098Z",
                  updatedAt: "2025-05-20T11:48:16.098Z",
                  publishedAt: "2025-05-20T11:48:16.098Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2742,
                    name: "Mary Vazquez",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.879Z",
                    updatedAt: "2025-05-20T11:48:16.879Z",
                    publishedAt: "2025-05-20T11:48:16.879Z",
                    ders: [
                      {
                        id: 5329,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.986Z",
                        updatedAt: "2025-05-20T11:48:18.986Z",
                        publishedAt: "2025-05-20T11:48:18.986Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5333,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.000Z",
                        updatedAt: "2025-05-20T11:48:19.000Z",
                        publishedAt: "2025-05-20T11:48:19.000Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5338,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.013Z",
                        updatedAt: "2025-05-20T11:48:19.013Z",
                        publishedAt: "2025-05-20T11:48:19.013Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5343,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.029Z",
                        updatedAt: "2025-05-20T11:48:19.029Z",
                        publishedAt: "2025-05-20T11:48:19.029Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5350,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.047Z",
                        updatedAt: "2025-05-20T11:48:19.047Z",
                        publishedAt: "2025-05-20T11:48:19.047Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2039,
                  code: "MTR-0136",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.44,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.099Z",
                  updatedAt: "2025-05-20T11:48:16.099Z",
                  publishedAt: "2025-05-20T11:48:16.099Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2718,
                    name: "Whitney Nolan",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.882Z",
                    updatedAt: "2025-05-20T11:48:16.882Z",
                    publishedAt: "2025-05-20T11:48:16.882Z",
                    ders: [
                      {
                        id: 5201,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.573Z",
                        updatedAt: "2025-05-20T11:48:18.573Z",
                        publishedAt: "2025-05-20T11:48:18.573Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5206,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.591Z",
                        updatedAt: "2025-05-20T11:48:18.591Z",
                        publishedAt: "2025-05-20T11:48:18.591Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5213,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.613Z",
                        updatedAt: "2025-05-20T11:48:18.613Z",
                        publishedAt: "2025-05-20T11:48:18.613Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5220,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.634Z",
                        updatedAt: "2025-05-20T11:48:18.634Z",
                        publishedAt: "2025-05-20T11:48:18.634Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5229,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.657Z",
                        updatedAt: "2025-05-20T11:48:18.657Z",
                        publishedAt: "2025-05-20T11:48:18.657Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2038,
                  code: "MTR-0135",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.098Z",
                  updatedAt: "2025-05-20T11:48:16.098Z",
                  publishedAt: "2025-05-20T11:48:16.098Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2569,
                    name: "Eric Benitez",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.884Z",
                    updatedAt: "2025-05-20T11:48:16.884Z",
                    publishedAt: "2025-05-20T11:48:16.884Z",
                    ders: [
                      {
                        id: 4851,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.258Z",
                        updatedAt: "2025-05-20T11:48:17.258Z",
                        publishedAt: "2025-05-20T11:48:17.258Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4852,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.265Z",
                        updatedAt: "2025-05-20T11:48:17.265Z",
                        publishedAt: "2025-05-20T11:48:17.265Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4853,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.285Z",
                        updatedAt: "2025-05-20T11:48:17.285Z",
                        publishedAt: "2025-05-20T11:48:17.285Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4854,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.290Z",
                        updatedAt: "2025-05-20T11:48:17.290Z",
                        publishedAt: "2025-05-20T11:48:17.290Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4855,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.296Z",
                        updatedAt: "2025-05-20T11:48:17.296Z",
                        publishedAt: "2025-05-20T11:48:17.296Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2040,
                  code: "MTR-0137",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.52,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.099Z",
                  updatedAt: "2025-05-20T11:48:16.099Z",
                  publishedAt: "2025-05-20T11:48:16.099Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2750,
                    name: "Scott Williams",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.887Z",
                    updatedAt: "2025-05-20T11:48:16.887Z",
                    publishedAt: "2025-05-20T11:48:16.887Z",
                    ders: [
                      {
                        id: 5351,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.049Z",
                        updatedAt: "2025-05-20T11:48:19.049Z",
                        publishedAt: "2025-05-20T11:48:19.049Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5357,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.066Z",
                        updatedAt: "2025-05-20T11:48:19.066Z",
                        publishedAt: "2025-05-20T11:48:19.066Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5365,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.087Z",
                        updatedAt: "2025-05-20T11:48:19.087Z",
                        publishedAt: "2025-05-20T11:48:19.087Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5371,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.104Z",
                        updatedAt: "2025-05-20T11:48:19.104Z",
                        publishedAt: "2025-05-20T11:48:19.104Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5378,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.122Z",
                        updatedAt: "2025-05-20T11:48:19.122Z",
                        publishedAt: "2025-05-20T11:48:19.122Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2037,
                  code: "MTR-0134",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.51,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.098Z",
                  updatedAt: "2025-05-20T11:48:16.098Z",
                  publishedAt: "2025-05-20T11:48:16.098Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2735,
                    name: "Gina Gay",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.885Z",
                    updatedAt: "2025-05-20T11:48:16.885Z",
                    publishedAt: "2025-05-20T11:48:16.885Z",
                    ders: [
                      {
                        id: 5289,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.862Z",
                        updatedAt: "2025-05-20T11:48:18.862Z",
                        publishedAt: "2025-05-20T11:48:18.862Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5296,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.889Z",
                        updatedAt: "2025-05-20T11:48:18.889Z",
                        publishedAt: "2025-05-20T11:48:18.889Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5304,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.911Z",
                        updatedAt: "2025-05-20T11:48:18.911Z",
                        publishedAt: "2025-05-20T11:48:18.911Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5311,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.931Z",
                        updatedAt: "2025-05-20T11:48:18.931Z",
                        publishedAt: "2025-05-20T11:48:18.931Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5317,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.949Z",
                        updatedAt: "2025-05-20T11:48:18.949Z",
                        publishedAt: "2025-05-20T11:48:18.949Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2041,
                  code: "MTR-0138",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.099Z",
                  updatedAt: "2025-05-20T11:48:16.099Z",
                  publishedAt: "2025-05-20T11:48:16.099Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2686,
                    name: "Angelica Scott",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.883Z",
                    updatedAt: "2025-05-20T11:48:16.883Z",
                    publishedAt: "2025-05-20T11:48:16.883Z",
                    ders: [
                      {
                        id: 5070,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.184Z",
                        updatedAt: "2025-05-20T11:48:18.184Z",
                        publishedAt: "2025-05-20T11:48:18.184Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5088,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.226Z",
                        updatedAt: "2025-05-20T11:48:18.226Z",
                        publishedAt: "2025-05-20T11:48:18.226Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5096,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.257Z",
                        updatedAt: "2025-05-20T11:48:18.257Z",
                        publishedAt: "2025-05-20T11:48:18.257Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5101,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.276Z",
                        updatedAt: "2025-05-20T11:48:18.276Z",
                        publishedAt: "2025-05-20T11:48:18.276Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5108,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.297Z",
                        updatedAt: "2025-05-20T11:48:18.297Z",
                        publishedAt: "2025-05-20T11:48:18.297Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2042,
                  code: "MTR-0139",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.099Z",
                  updatedAt: "2025-05-20T11:48:16.099Z",
                  publishedAt: "2025-05-20T11:48:16.099Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2685,
                    name: "Sonya Kim",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.887Z",
                    updatedAt: "2025-05-20T11:48:16.887Z",
                    publishedAt: "2025-05-20T11:48:16.887Z",
                    ders: [
                      {
                        id: 5032,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.066Z",
                        updatedAt: "2025-05-20T11:48:18.066Z",
                        publishedAt: "2025-05-20T11:48:18.066Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5040,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.095Z",
                        updatedAt: "2025-05-20T11:48:18.095Z",
                        publishedAt: "2025-05-20T11:48:18.095Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5050,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.121Z",
                        updatedAt: "2025-05-20T11:48:18.121Z",
                        publishedAt: "2025-05-20T11:48:18.121Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5052,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.132Z",
                        updatedAt: "2025-05-20T11:48:18.132Z",
                        publishedAt: "2025-05-20T11:48:18.132Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5058,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.152Z",
                        updatedAt: "2025-05-20T11:48:18.152Z",
                        publishedAt: "2025-05-20T11:48:18.152Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2043,
                  code: "MTR-0131",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.7,
                  longitude: -122.39,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.098Z",
                  updatedAt: "2025-05-20T11:48:16.098Z",
                  publishedAt: "2025-05-20T11:48:16.098Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2702,
                    name: "Nicole Parker",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.888Z",
                    updatedAt: "2025-05-20T11:48:16.888Z",
                    publishedAt: "2025-05-20T11:48:16.888Z",
                    ders: [
                      {
                        id: 5125,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.350Z",
                        updatedAt: "2025-05-20T11:48:18.350Z",
                        publishedAt: "2025-05-20T11:48:18.350Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5139,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.382Z",
                        updatedAt: "2025-05-20T11:48:18.382Z",
                        publishedAt: "2025-05-20T11:48:18.382Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5145,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.410Z",
                        updatedAt: "2025-05-20T11:48:18.410Z",
                        publishedAt: "2025-05-20T11:48:18.410Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5148,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.424Z",
                        updatedAt: "2025-05-20T11:48:18.424Z",
                        publishedAt: "2025-05-20T11:48:18.424Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5153,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.438Z",
                        updatedAt: "2025-05-20T11:48:18.438Z",
                        publishedAt: "2025-05-20T11:48:18.438Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          id: 51,
          name: "SF Sunset Substation",
          city: "San Francisco",
          state: "CA",
          latitude: "37.718974",
          longtitude: "-122.431845",
          pincode: "94103",
          createdAt: "2025-05-20T11:48:15.937Z",
          updatedAt: "2025-05-21T06:11:24.263Z",
          publishedAt: "2025-05-20T11:48:15.937Z",
          max_capacity_KW: 1000,
          transformers: [
            {
              id: 212,
              name: "Oceanview – SSUN-TX01",
              city: "San Francisco",
              state: "CA",
              latitude: "37.77403",
              longtitude: "-122.482047",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.973Z",
              updatedAt: "2025-05-20T11:48:15.973Z",
              publishedAt: "2025-05-20T11:48:15.973Z",
              max_capacity_KW: 90,
              meters: [
                {
                  id: 2024,
                  code: "MTR-0050",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2682,
                    name: "Joe House",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.858Z",
                    updatedAt: "2025-05-20T11:48:16.858Z",
                    publishedAt: "2025-05-20T11:48:16.858Z",
                    ders: [
                      {
                        id: 5024,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.049Z",
                        updatedAt: "2025-05-20T11:48:18.049Z",
                        publishedAt: "2025-05-20T11:48:18.049Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5031,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.069Z",
                        updatedAt: "2025-05-20T11:48:18.069Z",
                        publishedAt: "2025-05-20T11:48:18.069Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5038,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.087Z",
                        updatedAt: "2025-05-20T11:48:18.087Z",
                        publishedAt: "2025-05-20T11:48:18.087Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5045,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.107Z",
                        updatedAt: "2025-05-20T11:48:18.107Z",
                        publishedAt: "2025-05-20T11:48:18.107Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5049,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.120Z",
                        updatedAt: "2025-05-20T11:48:18.120Z",
                        publishedAt: "2025-05-20T11:48:18.120Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2025,
                  code: "MTR-0051",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2731,
                    name: "David Velazquez",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.858Z",
                    updatedAt: "2025-05-20T11:48:16.858Z",
                    publishedAt: "2025-05-20T11:48:16.858Z",
                    ders: [
                      {
                        id: 5269,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.791Z",
                        updatedAt: "2025-05-20T11:48:18.791Z",
                        publishedAt: "2025-05-20T11:48:18.791Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5277,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.825Z",
                        updatedAt: "2025-05-20T11:48:18.825Z",
                        publishedAt: "2025-05-20T11:48:18.825Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5283,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.847Z",
                        updatedAt: "2025-05-20T11:48:18.847Z",
                        publishedAt: "2025-05-20T11:48:18.847Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5290,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.867Z",
                        updatedAt: "2025-05-20T11:48:18.867Z",
                        publishedAt: "2025-05-20T11:48:18.867Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5297,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.891Z",
                        updatedAt: "2025-05-20T11:48:18.891Z",
                        publishedAt: "2025-05-20T11:48:18.891Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2026,
                  code: "MTR-0052",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.74,
                  longitude: -122.39,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2716,
                    name: "Rhonda Ford",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.863Z",
                    updatedAt: "2025-05-20T11:48:16.863Z",
                    publishedAt: "2025-05-20T11:48:16.863Z",
                    ders: [
                      {
                        id: 5195,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.560Z",
                        updatedAt: "2025-05-20T11:48:18.560Z",
                        publishedAt: "2025-05-20T11:48:18.560Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5202,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.581Z",
                        updatedAt: "2025-05-20T11:48:18.581Z",
                        publishedAt: "2025-05-20T11:48:18.581Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5209,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.600Z",
                        updatedAt: "2025-05-20T11:48:18.600Z",
                        publishedAt: "2025-05-20T11:48:18.600Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5216,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.622Z",
                        updatedAt: "2025-05-20T11:48:18.622Z",
                        publishedAt: "2025-05-20T11:48:18.622Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5224,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.643Z",
                        updatedAt: "2025-05-20T11:48:18.643Z",
                        publishedAt: "2025-05-20T11:48:18.643Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2029,
                  code: "MTR-0055",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.75,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2714,
                    name: "Jose Berg",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.869Z",
                    updatedAt: "2025-05-20T11:48:16.869Z",
                    publishedAt: "2025-05-20T11:48:16.869Z",
                    ders: [
                      {
                        id: 5178,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.507Z",
                        updatedAt: "2025-05-20T11:48:18.507Z",
                        publishedAt: "2025-05-20T11:48:18.507Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5186,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.531Z",
                        updatedAt: "2025-05-20T11:48:18.531Z",
                        publishedAt: "2025-05-20T11:48:18.531Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5192,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.548Z",
                        updatedAt: "2025-05-20T11:48:18.548Z",
                        publishedAt: "2025-05-20T11:48:18.548Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5200,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.572Z",
                        updatedAt: "2025-05-20T11:48:18.572Z",
                        publishedAt: "2025-05-20T11:48:18.572Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5205,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.589Z",
                        updatedAt: "2025-05-20T11:48:18.589Z",
                        publishedAt: "2025-05-20T11:48:18.589Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2028,
                  code: "MTR-0054",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2559,
                    name: "Maxwell Thomas",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.864Z",
                    updatedAt: "2025-05-20T11:48:16.864Z",
                    publishedAt: "2025-05-20T11:48:16.864Z",
                    ders: [
                      {
                        id: 4846,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.203Z",
                        updatedAt: "2025-05-20T11:48:17.203Z",
                        publishedAt: "2025-05-20T11:48:17.203Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4847,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.220Z",
                        updatedAt: "2025-05-20T11:48:17.220Z",
                        publishedAt: "2025-05-20T11:48:17.220Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4848,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.234Z",
                        updatedAt: "2025-05-20T11:48:17.234Z",
                        publishedAt: "2025-05-20T11:48:17.234Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4849,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.241Z",
                        updatedAt: "2025-05-20T11:48:17.241Z",
                        publishedAt: "2025-05-20T11:48:17.241Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 4850,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.245Z",
                        updatedAt: "2025-05-20T11:48:17.245Z",
                        publishedAt: "2025-05-20T11:48:17.245Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2027,
                  code: "MTR-0053",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.52,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2693,
                    name: "Gabrielle Day",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.864Z",
                    updatedAt: "2025-05-20T11:48:16.864Z",
                    publishedAt: "2025-05-20T11:48:16.864Z",
                    ders: [
                      {
                        id: 5075,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.198Z",
                        updatedAt: "2025-05-20T11:48:18.198Z",
                        publishedAt: "2025-05-20T11:48:18.198Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5084,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.222Z",
                        updatedAt: "2025-05-20T11:48:18.222Z",
                        publishedAt: "2025-05-20T11:48:18.222Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5091,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.241Z",
                        updatedAt: "2025-05-20T11:48:18.241Z",
                        publishedAt: "2025-05-20T11:48:18.241Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5097,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.261Z",
                        updatedAt: "2025-05-20T11:48:18.261Z",
                        publishedAt: "2025-05-20T11:48:18.261Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5102,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.281Z",
                        updatedAt: "2025-05-20T11:48:18.281Z",
                        publishedAt: "2025-05-20T11:48:18.281Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2031,
                  code: "MTR-0057",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2728,
                    name: "Deborah Casey",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.869Z",
                    updatedAt: "2025-05-20T11:48:16.869Z",
                    publishedAt: "2025-05-20T11:48:16.869Z",
                    ders: [
                      {
                        id: 5249,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.728Z",
                        updatedAt: "2025-05-20T11:48:18.728Z",
                        publishedAt: "2025-05-20T11:48:18.728Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5254,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.749Z",
                        updatedAt: "2025-05-20T11:48:18.749Z",
                        publishedAt: "2025-05-20T11:48:18.749Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5261,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.771Z",
                        updatedAt: "2025-05-20T11:48:18.771Z",
                        publishedAt: "2025-05-20T11:48:18.771Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5266,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.793Z",
                        updatedAt: "2025-05-20T11:48:18.793Z",
                        publishedAt: "2025-05-20T11:48:18.793Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5274,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.820Z",
                        updatedAt: "2025-05-20T11:48:18.820Z",
                        publishedAt: "2025-05-20T11:48:18.820Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2033,
                  code: "MTR-0059",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2634,
                    name: "Brenda Ross",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.862Z",
                    updatedAt: "2025-05-20T11:48:16.862Z",
                    publishedAt: "2025-05-20T11:48:16.862Z",
                    ders: [
                      {
                        id: 4920,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.653Z",
                        updatedAt: "2025-05-20T11:48:17.653Z",
                        publishedAt: "2025-05-20T11:48:17.653Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4926,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.675Z",
                        updatedAt: "2025-05-20T11:48:17.675Z",
                        publishedAt: "2025-05-20T11:48:17.675Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4931,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.693Z",
                        updatedAt: "2025-05-20T11:48:17.693Z",
                        publishedAt: "2025-05-20T11:48:17.693Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4936,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.706Z",
                        updatedAt: "2025-05-20T11:48:17.706Z",
                        publishedAt: "2025-05-20T11:48:17.706Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 4940,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.720Z",
                        updatedAt: "2025-05-20T11:48:17.720Z",
                        publishedAt: "2025-05-20T11:48:17.720Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2030,
                  code: "MTR-0056",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2657,
                    name: "Jeffrey Holden",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.868Z",
                    updatedAt: "2025-05-20T11:48:16.868Z",
                    publishedAt: "2025-05-20T11:48:16.868Z",
                    ders: [
                      {
                        id: 4973,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.849Z",
                        updatedAt: "2025-05-20T11:48:17.849Z",
                        publishedAt: "2025-05-20T11:48:17.849Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 4976,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.860Z",
                        updatedAt: "2025-05-20T11:48:17.860Z",
                        publishedAt: "2025-05-20T11:48:17.860Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 4980,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.869Z",
                        updatedAt: "2025-05-20T11:48:17.869Z",
                        publishedAt: "2025-05-20T11:48:17.869Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4982,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.876Z",
                        updatedAt: "2025-05-20T11:48:17.876Z",
                        publishedAt: "2025-05-20T11:48:17.876Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 4984,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.881Z",
                        updatedAt: "2025-05-20T11:48:17.881Z",
                        publishedAt: "2025-05-20T11:48:17.881Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2032,
                  code: "MTR-0058",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.43,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.086Z",
                  updatedAt: "2025-05-20T11:48:16.086Z",
                  publishedAt: "2025-05-20T11:48:16.086Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2701,
                    name: "Michael Owens",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:16.877Z",
                    updatedAt: "2025-05-20T11:48:16.877Z",
                    publishedAt: "2025-05-20T11:48:16.877Z",
                    ders: [
                      {
                        id: 5116,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.323Z",
                        updatedAt: "2025-05-20T11:48:18.323Z",
                        publishedAt: "2025-05-20T11:48:18.323Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5122,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.343Z",
                        updatedAt: "2025-05-20T11:48:18.343Z",
                        publishedAt: "2025-05-20T11:48:18.343Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5130,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.366Z",
                        updatedAt: "2025-05-20T11:48:18.366Z",
                        publishedAt: "2025-05-20T11:48:18.366Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5136,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.384Z",
                        updatedAt: "2025-05-20T11:48:18.384Z",
                        publishedAt: "2025-05-20T11:48:18.384Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5142,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.403Z",
                        updatedAt: "2025-05-20T11:48:18.403Z",
                        publishedAt: "2025-05-20T11:48:18.403Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 216,
              name: "Lincoln – SUNS-TX-A",
              city: "San Francisco",
              state: "CA",
              latitude: "37.759299",
              longtitude: "-122.503711",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.973Z",
              updatedAt: "2025-05-20T11:48:15.973Z",
              publishedAt: "2025-05-20T11:48:15.973Z",
              max_capacity_KW: 85,
              meters: [
                {
                  id: 2084,
                  code: "MTR-0060",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.5,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2623,
                    name: "Spencer Perry",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.227Z",
                    updatedAt: "2025-05-20T11:48:17.227Z",
                    publishedAt: "2025-05-20T11:48:17.227Z",
                    ders: [
                      {
                        id: 4915,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.622Z",
                        updatedAt: "2025-05-20T11:48:17.622Z",
                        publishedAt: "2025-05-20T11:48:17.622Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 4918,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.646Z",
                        updatedAt: "2025-05-20T11:48:17.646Z",
                        publishedAt: "2025-05-20T11:48:17.646Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 4922,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.668Z",
                        updatedAt: "2025-05-20T11:48:17.668Z",
                        publishedAt: "2025-05-20T11:48:17.668Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4928,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.686Z",
                        updatedAt: "2025-05-20T11:48:17.686Z",
                        publishedAt: "2025-05-20T11:48:17.686Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4934,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.702Z",
                        updatedAt: "2025-05-20T11:48:17.702Z",
                        publishedAt: "2025-05-20T11:48:17.702Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2085,
                  code: "MTR-0062",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2712,
                    name: "Holly Hall",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.231Z",
                    updatedAt: "2025-05-20T11:48:17.231Z",
                    publishedAt: "2025-05-20T11:48:17.231Z",
                    ders: [
                      {
                        id: 5170,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.484Z",
                        updatedAt: "2025-05-20T11:48:18.484Z",
                        publishedAt: "2025-05-20T11:48:18.484Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5177,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.505Z",
                        updatedAt: "2025-05-20T11:48:18.505Z",
                        publishedAt: "2025-05-20T11:48:18.505Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5185,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.528Z",
                        updatedAt: "2025-05-20T11:48:18.528Z",
                        publishedAt: "2025-05-20T11:48:18.528Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5190,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.544Z",
                        updatedAt: "2025-05-20T11:48:18.544Z",
                        publishedAt: "2025-05-20T11:48:18.544Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5198,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.568Z",
                        updatedAt: "2025-05-20T11:48:18.568Z",
                        publishedAt: "2025-05-20T11:48:18.568Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2086,
                  code: "MTR-0063",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2757,
                    name: "Steven Lynch",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.229Z",
                    updatedAt: "2025-05-20T11:48:17.229Z",
                    publishedAt: "2025-05-20T11:48:17.229Z",
                    ders: [
                      {
                        id: 5400,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.184Z",
                        updatedAt: "2025-05-20T11:48:19.184Z",
                        publishedAt: "2025-05-20T11:48:19.184Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5406,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.202Z",
                        updatedAt: "2025-05-20T11:48:19.202Z",
                        publishedAt: "2025-05-20T11:48:19.202Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5411,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.217Z",
                        updatedAt: "2025-05-20T11:48:19.217Z",
                        publishedAt: "2025-05-20T11:48:19.217Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5415,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.232Z",
                        updatedAt: "2025-05-20T11:48:19.232Z",
                        publishedAt: "2025-05-20T11:48:19.232Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5419,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.245Z",
                        updatedAt: "2025-05-20T11:48:19.245Z",
                        publishedAt: "2025-05-20T11:48:19.245Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2088,
                  code: "MTR-0061",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.74,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2767,
                    name: "Jacqueline Owen",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.232Z",
                    updatedAt: "2025-05-20T11:48:17.232Z",
                    publishedAt: "2025-05-20T11:48:17.232Z",
                    ders: [
                      {
                        id: 5445,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.305Z",
                        updatedAt: "2025-05-20T11:48:19.305Z",
                        publishedAt: "2025-05-20T11:48:19.305Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5453,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.333Z",
                        updatedAt: "2025-05-20T11:48:19.333Z",
                        publishedAt: "2025-05-20T11:48:19.333Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5458,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.351Z",
                        updatedAt: "2025-05-20T11:48:19.351Z",
                        publishedAt: "2025-05-20T11:48:19.351Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5462,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.365Z",
                        updatedAt: "2025-05-20T11:48:19.365Z",
                        publishedAt: "2025-05-20T11:48:19.365Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5468,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.383Z",
                        updatedAt: "2025-05-20T11:48:19.383Z",
                        publishedAt: "2025-05-20T11:48:19.383Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2087,
                  code: "MTR-0064",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2771,
                    name: "Brad Cook",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.233Z",
                    updatedAt: "2025-05-20T11:48:17.233Z",
                    publishedAt: "2025-05-20T11:48:17.233Z",
                    ders: [
                      {
                        id: 5481,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.414Z",
                        updatedAt: "2025-05-20T11:48:19.414Z",
                        publishedAt: "2025-05-20T11:48:19.414Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5493,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.440Z",
                        updatedAt: "2025-05-20T11:48:19.440Z",
                        publishedAt: "2025-05-20T11:48:19.440Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5499,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.463Z",
                        updatedAt: "2025-05-20T11:48:19.463Z",
                        publishedAt: "2025-05-20T11:48:19.463Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5506,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.484Z",
                        updatedAt: "2025-05-20T11:48:19.484Z",
                        publishedAt: "2025-05-20T11:48:19.484Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5511,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.498Z",
                        updatedAt: "2025-05-20T11:48:19.498Z",
                        publishedAt: "2025-05-20T11:48:19.498Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2091,
                  code: "MTR-0068",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.7,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2730,
                    name: "Maureen Jackson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.234Z",
                    updatedAt: "2025-05-20T11:48:17.234Z",
                    publishedAt: "2025-05-20T11:48:17.234Z",
                    ders: [
                      {
                        id: 5259,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.765Z",
                        updatedAt: "2025-05-20T11:48:18.765Z",
                        publishedAt: "2025-05-20T11:48:18.765Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5264,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.785Z",
                        updatedAt: "2025-05-20T11:48:18.785Z",
                        publishedAt: "2025-05-20T11:48:18.785Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5272,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.815Z",
                        updatedAt: "2025-05-20T11:48:18.815Z",
                        publishedAt: "2025-05-20T11:48:18.815Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5280,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.836Z",
                        updatedAt: "2025-05-20T11:48:18.836Z",
                        publishedAt: "2025-05-20T11:48:18.836Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5287,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.855Z",
                        updatedAt: "2025-05-20T11:48:18.855Z",
                        publishedAt: "2025-05-20T11:48:18.855Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2089,
                  code: "MTR-0066",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2768,
                    name: "Joshua Reese",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.268Z",
                    updatedAt: "2025-05-20T11:48:17.268Z",
                    publishedAt: "2025-05-20T11:48:17.268Z",
                    ders: [
                      {
                        id: 5482,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.417Z",
                        updatedAt: "2025-05-20T11:48:19.417Z",
                        publishedAt: "2025-05-20T11:48:19.417Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5490,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.439Z",
                        updatedAt: "2025-05-20T11:48:19.439Z",
                        publishedAt: "2025-05-20T11:48:19.439Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5497,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.457Z",
                        updatedAt: "2025-05-20T11:48:19.457Z",
                        publishedAt: "2025-05-20T11:48:19.457Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5503,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.475Z",
                        updatedAt: "2025-05-20T11:48:19.475Z",
                        publishedAt: "2025-05-20T11:48:19.475Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5509,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.492Z",
                        updatedAt: "2025-05-20T11:48:19.492Z",
                        publishedAt: "2025-05-20T11:48:19.492Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2092,
                  code: "MTR-0069",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.74,
                  longitude: -122.45,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2638,
                    name: "Stephen Lang",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.321Z",
                    updatedAt: "2025-05-20T11:48:17.321Z",
                    publishedAt: "2025-05-20T11:48:17.321Z",
                    ders: [
                      {
                        id: 4944,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.732Z",
                        updatedAt: "2025-05-20T11:48:17.732Z",
                        publishedAt: "2025-05-20T11:48:17.732Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4949,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.757Z",
                        updatedAt: "2025-05-20T11:48:17.757Z",
                        publishedAt: "2025-05-20T11:48:17.757Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4952,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.774Z",
                        updatedAt: "2025-05-20T11:48:17.774Z",
                        publishedAt: "2025-05-20T11:48:17.774Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4956,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.786Z",
                        updatedAt: "2025-05-20T11:48:17.786Z",
                        publishedAt: "2025-05-20T11:48:17.786Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 4960,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.796Z",
                        updatedAt: "2025-05-20T11:48:17.796Z",
                        publishedAt: "2025-05-20T11:48:17.796Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2090,
                  code: "MTR-0067",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2720,
                    name: "Julie Solomon",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.326Z",
                    updatedAt: "2025-05-20T11:48:17.326Z",
                    publishedAt: "2025-05-20T11:48:17.326Z",
                    ders: [
                      {
                        id: 5212,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.610Z",
                        updatedAt: "2025-05-20T11:48:18.610Z",
                        publishedAt: "2025-05-20T11:48:18.610Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5219,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.632Z",
                        updatedAt: "2025-05-20T11:48:18.632Z",
                        publishedAt: "2025-05-20T11:48:18.632Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5227,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.654Z",
                        updatedAt: "2025-05-20T11:48:18.654Z",
                        publishedAt: "2025-05-20T11:48:18.654Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5234,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.674Z",
                        updatedAt: "2025-05-20T11:48:18.674Z",
                        publishedAt: "2025-05-20T11:48:18.674Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5241,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.701Z",
                        updatedAt: "2025-05-20T11:48:18.701Z",
                        publishedAt: "2025-05-20T11:48:18.701Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2093,
                  code: "MTR-0065",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.74,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.198Z",
                  updatedAt: "2025-05-20T11:48:16.198Z",
                  publishedAt: "2025-05-20T11:48:16.198Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2770,
                    name: "Jermaine Thompson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.322Z",
                    updatedAt: "2025-05-20T11:48:17.322Z",
                    publishedAt: "2025-05-20T11:48:17.322Z",
                    ders: [
                      {
                        id: 5460,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.356Z",
                        updatedAt: "2025-05-20T11:48:19.356Z",
                        publishedAt: "2025-05-20T11:48:19.356Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5464,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.373Z",
                        updatedAt: "2025-05-20T11:48:19.373Z",
                        publishedAt: "2025-05-20T11:48:19.373Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5470,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.389Z",
                        updatedAt: "2025-05-20T11:48:19.389Z",
                        publishedAt: "2025-05-20T11:48:19.389Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5477,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.404Z",
                        updatedAt: "2025-05-20T11:48:19.404Z",
                        publishedAt: "2025-05-20T11:48:19.404Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5485,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.426Z",
                        updatedAt: "2025-05-20T11:48:19.426Z",
                        publishedAt: "2025-05-20T11:48:19.426Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 217,
              name: "Pacific Glow – SSUN33-TX1",
              city: "San Francisco",
              state: "CA",
              latitude: "37.771319",
              longtitude: "-122.438294",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.973Z",
              updatedAt: "2025-05-20T11:48:15.973Z",
              publishedAt: "2025-05-20T11:48:15.973Z",
              max_capacity_KW: 80,
              meters: [
                {
                  id: 2105,
                  code: "MTR-0071",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.45,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.230Z",
                  updatedAt: "2025-05-20T11:48:16.230Z",
                  publishedAt: "2025-05-20T11:48:16.230Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2651,
                    name: "Austin Underwood",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.338Z",
                    updatedAt: "2025-05-20T11:48:17.338Z",
                    publishedAt: "2025-05-20T11:48:17.338Z",
                    ders: [
                      {
                        id: 4985,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.886Z",
                        updatedAt: "2025-05-20T11:48:17.886Z",
                        publishedAt: "2025-05-20T11:48:17.886Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 4986,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.896Z",
                        updatedAt: "2025-05-20T11:48:17.896Z",
                        publishedAt: "2025-05-20T11:48:17.896Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4989,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.911Z",
                        updatedAt: "2025-05-20T11:48:17.911Z",
                        publishedAt: "2025-05-20T11:48:17.911Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 4992,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.923Z",
                        updatedAt: "2025-05-20T11:48:17.923Z",
                        publishedAt: "2025-05-20T11:48:17.923Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4995,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.934Z",
                        updatedAt: "2025-05-20T11:48:17.934Z",
                        publishedAt: "2025-05-20T11:48:17.934Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2104,
                  code: "MTR-0070",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.38,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.230Z",
                  updatedAt: "2025-05-20T11:48:16.230Z",
                  publishedAt: "2025-05-20T11:48:16.230Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2746,
                    name: "Emily Jordan",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.365Z",
                    updatedAt: "2025-05-20T11:48:17.365Z",
                    publishedAt: "2025-05-20T11:48:17.365Z",
                    ders: [
                      {
                        id: 5336,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.008Z",
                        updatedAt: "2025-05-20T11:48:19.008Z",
                        publishedAt: "2025-05-20T11:48:19.008Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5341,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.023Z",
                        updatedAt: "2025-05-20T11:48:19.023Z",
                        publishedAt: "2025-05-20T11:48:19.023Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5347,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.041Z",
                        updatedAt: "2025-05-20T11:48:19.041Z",
                        publishedAt: "2025-05-20T11:48:19.041Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5355,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.058Z",
                        updatedAt: "2025-05-20T11:48:19.058Z",
                        publishedAt: "2025-05-20T11:48:19.058Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5363,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.078Z",
                        updatedAt: "2025-05-20T11:48:19.078Z",
                        publishedAt: "2025-05-20T11:48:19.078Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2106,
                  code: "MTR-0072",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.230Z",
                  updatedAt: "2025-05-20T11:48:16.230Z",
                  publishedAt: "2025-05-20T11:48:16.230Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2782,
                    name: "Lindsey Burns",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.366Z",
                    updatedAt: "2025-05-20T11:48:17.366Z",
                    publishedAt: "2025-05-20T11:48:17.366Z",
                    ders: [
                      {
                        id: 5519,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.523Z",
                        updatedAt: "2025-05-20T11:48:19.523Z",
                        publishedAt: "2025-05-20T11:48:19.523Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5525,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.542Z",
                        updatedAt: "2025-05-20T11:48:19.542Z",
                        publishedAt: "2025-05-20T11:48:19.542Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5531,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.557Z",
                        updatedAt: "2025-05-20T11:48:19.557Z",
                        publishedAt: "2025-05-20T11:48:19.557Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5535,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.570Z",
                        updatedAt: "2025-05-20T11:48:19.570Z",
                        publishedAt: "2025-05-20T11:48:19.570Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5540,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.583Z",
                        updatedAt: "2025-05-20T11:48:19.583Z",
                        publishedAt: "2025-05-20T11:48:19.583Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2107,
                  code: "MTR-0073",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.230Z",
                  updatedAt: "2025-05-20T11:48:16.230Z",
                  publishedAt: "2025-05-20T11:48:16.230Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2744,
                    name: "Thomas Hughes",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.392Z",
                    updatedAt: "2025-05-20T11:48:17.392Z",
                    publishedAt: "2025-05-20T11:48:17.392Z",
                    ders: [
                      {
                        id: 5327,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.975Z",
                        updatedAt: "2025-05-20T11:48:18.975Z",
                        publishedAt: "2025-05-20T11:48:18.975Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5337,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.005Z",
                        updatedAt: "2025-05-20T11:48:19.005Z",
                        publishedAt: "2025-05-20T11:48:19.005Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5342,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.026Z",
                        updatedAt: "2025-05-20T11:48:19.026Z",
                        publishedAt: "2025-05-20T11:48:19.026Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5349,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.044Z",
                        updatedAt: "2025-05-20T11:48:19.044Z",
                        publishedAt: "2025-05-20T11:48:19.044Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5356,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.061Z",
                        updatedAt: "2025-05-20T11:48:19.061Z",
                        publishedAt: "2025-05-20T11:48:19.061Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2108,
                  code: "MTR-0074",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.81,
                  longitude: -122.37,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.230Z",
                  updatedAt: "2025-05-20T11:48:16.230Z",
                  publishedAt: "2025-05-20T11:48:16.230Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2786,
                    name: "Timothy Perez",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.396Z",
                    updatedAt: "2025-05-20T11:48:17.396Z",
                    publishedAt: "2025-05-20T11:48:17.396Z",
                    ders: [
                      {
                        id: 5543,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.592Z",
                        updatedAt: "2025-05-20T11:48:19.592Z",
                        publishedAt: "2025-05-20T11:48:19.592Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5548,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.604Z",
                        updatedAt: "2025-05-20T11:48:19.604Z",
                        publishedAt: "2025-05-20T11:48:19.604Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5553,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.617Z",
                        updatedAt: "2025-05-20T11:48:19.617Z",
                        publishedAt: "2025-05-20T11:48:19.617Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5557,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.628Z",
                        updatedAt: "2025-05-20T11:48:19.628Z",
                        publishedAt: "2025-05-20T11:48:19.628Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5562,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.637Z",
                        updatedAt: "2025-05-20T11:48:19.637Z",
                        publishedAt: "2025-05-20T11:48:19.637Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2109,
                  code: "MTR-0075",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.230Z",
                  updatedAt: "2025-05-20T11:48:16.230Z",
                  publishedAt: "2025-05-20T11:48:16.230Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2780,
                    name: "Robin Hall",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.394Z",
                    updatedAt: "2025-05-20T11:48:17.394Z",
                    publishedAt: "2025-05-20T11:48:17.394Z",
                    ders: [
                      {
                        id: 5512,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.500Z",
                        updatedAt: "2025-05-20T11:48:19.500Z",
                        publishedAt: "2025-05-20T11:48:19.500Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5517,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.518Z",
                        updatedAt: "2025-05-20T11:48:19.518Z",
                        publishedAt: "2025-05-20T11:48:19.518Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5523,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.537Z",
                        updatedAt: "2025-05-20T11:48:19.537Z",
                        publishedAt: "2025-05-20T11:48:19.537Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5529,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.553Z",
                        updatedAt: "2025-05-20T11:48:19.553Z",
                        publishedAt: "2025-05-20T11:48:19.553Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5534,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.564Z",
                        updatedAt: "2025-05-20T11:48:19.564Z",
                        publishedAt: "2025-05-20T11:48:19.564Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2110,
                  code: "MTR-0076",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.231Z",
                  updatedAt: "2025-05-20T11:48:16.231Z",
                  publishedAt: "2025-05-20T11:48:16.231Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2783,
                    name: "Frances Miranda",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.397Z",
                    updatedAt: "2025-05-20T11:48:17.397Z",
                    publishedAt: "2025-05-20T11:48:17.397Z",
                    ders: [
                      {
                        id: 5544,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.594Z",
                        updatedAt: "2025-05-20T11:48:19.594Z",
                        publishedAt: "2025-05-20T11:48:19.594Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5549,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.608Z",
                        updatedAt: "2025-05-20T11:48:19.608Z",
                        publishedAt: "2025-05-20T11:48:19.608Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5554,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.621Z",
                        updatedAt: "2025-05-20T11:48:19.621Z",
                        publishedAt: "2025-05-20T11:48:19.621Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5560,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.634Z",
                        updatedAt: "2025-05-20T11:48:19.634Z",
                        publishedAt: "2025-05-20T11:48:19.634Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5566,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.648Z",
                        updatedAt: "2025-05-20T11:48:19.648Z",
                        publishedAt: "2025-05-20T11:48:19.648Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2112,
                  code: "MTR-0078",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.4,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.231Z",
                  updatedAt: "2025-05-20T11:48:16.231Z",
                  publishedAt: "2025-05-20T11:48:16.231Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2774,
                    name: "Megan Klein",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.398Z",
                    updatedAt: "2025-05-20T11:48:17.398Z",
                    publishedAt: "2025-05-20T11:48:17.398Z",
                    ders: [
                      {
                        id: 5473,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.396Z",
                        updatedAt: "2025-05-20T11:48:19.396Z",
                        publishedAt: "2025-05-20T11:48:19.396Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5487,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.425Z",
                        updatedAt: "2025-05-20T11:48:19.425Z",
                        publishedAt: "2025-05-20T11:48:19.425Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5496,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.452Z",
                        updatedAt: "2025-05-20T11:48:19.452Z",
                        publishedAt: "2025-05-20T11:48:19.452Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5501,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.472Z",
                        updatedAt: "2025-05-20T11:48:19.472Z",
                        publishedAt: "2025-05-20T11:48:19.472Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5507,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.487Z",
                        updatedAt: "2025-05-20T11:48:19.487Z",
                        publishedAt: "2025-05-20T11:48:19.487Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2111,
                  code: "MTR-0077",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.231Z",
                  updatedAt: "2025-05-20T11:48:16.231Z",
                  publishedAt: "2025-05-20T11:48:16.231Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2764,
                    name: "Lauren Clark",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.401Z",
                    updatedAt: "2025-05-20T11:48:17.401Z",
                    publishedAt: "2025-05-20T11:48:17.401Z",
                    ders: [
                      {
                        id: 5424,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.256Z",
                        updatedAt: "2025-05-20T11:48:19.256Z",
                        publishedAt: "2025-05-20T11:48:19.256Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5432,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.277Z",
                        updatedAt: "2025-05-20T11:48:19.277Z",
                        publishedAt: "2025-05-20T11:48:19.277Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5440,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.295Z",
                        updatedAt: "2025-05-20T11:48:19.295Z",
                        publishedAt: "2025-05-20T11:48:19.295Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5446,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.312Z",
                        updatedAt: "2025-05-20T11:48:19.312Z",
                        publishedAt: "2025-05-20T11:48:19.312Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5452,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.329Z",
                        updatedAt: "2025-05-20T11:48:19.329Z",
                        publishedAt: "2025-05-20T11:48:19.329Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2113,
                  code: "MTR-0079",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.7,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.231Z",
                  updatedAt: "2025-05-20T11:48:16.231Z",
                  publishedAt: "2025-05-20T11:48:16.231Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2665,
                    name: "Eddie Williams",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.400Z",
                    updatedAt: "2025-05-20T11:48:17.400Z",
                    publishedAt: "2025-05-20T11:48:17.400Z",
                    ders: [
                      {
                        id: 5000,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.951Z",
                        updatedAt: "2025-05-20T11:48:17.951Z",
                        publishedAt: "2025-05-20T11:48:17.951Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5002,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.968Z",
                        updatedAt: "2025-05-20T11:48:17.968Z",
                        publishedAt: "2025-05-20T11:48:17.968Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5004,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.977Z",
                        updatedAt: "2025-05-20T11:48:17.977Z",
                        publishedAt: "2025-05-20T11:48:17.977Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5006,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.987Z",
                        updatedAt: "2025-05-20T11:48:17.987Z",
                        publishedAt: "2025-05-20T11:48:17.987Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5009,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.995Z",
                        updatedAt: "2025-05-20T11:48:17.995Z",
                        publishedAt: "2025-05-20T11:48:17.995Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 218,
              name: "Noriega – SUN-TX02",
              city: "San Francisco",
              state: "CA",
              latitude: "37.771089",
              longtitude: "-122.508851",
              emergency_service: true,
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.973Z",
              updatedAt: "2025-05-20T11:48:15.973Z",
              publishedAt: "2025-05-20T11:48:15.973Z",
              max_capacity_KW: 75,
              meters: [
                {
                  id: 2117,
                  code: "MTR-0083",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.36,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2756,
                    name: "Frank Love",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.402Z",
                    updatedAt: "2025-05-20T11:48:17.402Z",
                    publishedAt: "2025-05-20T11:48:17.402Z",
                    ders: [
                      {
                        id: 5393,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.161Z",
                        updatedAt: "2025-05-20T11:48:19.161Z",
                        publishedAt: "2025-05-20T11:48:19.161Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5399,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.181Z",
                        updatedAt: "2025-05-20T11:48:19.181Z",
                        publishedAt: "2025-05-20T11:48:19.181Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5405,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.199Z",
                        updatedAt: "2025-05-20T11:48:19.199Z",
                        publishedAt: "2025-05-20T11:48:19.199Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5410,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.215Z",
                        updatedAt: "2025-05-20T11:48:19.215Z",
                        publishedAt: "2025-05-20T11:48:19.215Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5414,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.230Z",
                        updatedAt: "2025-05-20T11:48:19.230Z",
                        publishedAt: "2025-05-20T11:48:19.230Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2119,
                  code: "MTR-0086",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2775,
                    name: "Cynthia Owens",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.402Z",
                    updatedAt: "2025-05-20T11:48:17.402Z",
                    publishedAt: "2025-05-20T11:48:17.402Z",
                    ders: [
                      {
                        id: 5476,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.402Z",
                        updatedAt: "2025-05-20T11:48:19.402Z",
                        publishedAt: "2025-05-20T11:48:19.402Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5484,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.423Z",
                        updatedAt: "2025-05-20T11:48:19.423Z",
                        publishedAt: "2025-05-20T11:48:19.423Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5491,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.442Z",
                        updatedAt: "2025-05-20T11:48:19.442Z",
                        publishedAt: "2025-05-20T11:48:19.442Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5498,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.459Z",
                        updatedAt: "2025-05-20T11:48:19.459Z",
                        publishedAt: "2025-05-20T11:48:19.459Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5504,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.477Z",
                        updatedAt: "2025-05-20T11:48:19.477Z",
                        publishedAt: "2025-05-20T11:48:19.477Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2116,
                  code: "MTR-0082",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.39,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2669,
                    name: "Thomas Rodriguez",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.404Z",
                    updatedAt: "2025-05-20T11:48:17.404Z",
                    publishedAt: "2025-05-20T11:48:17.404Z",
                    ders: [
                      {
                        id: 5017,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.018Z",
                        updatedAt: "2025-05-20T11:48:18.018Z",
                        publishedAt: "2025-05-20T11:48:18.018Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5021,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.042Z",
                        updatedAt: "2025-05-20T11:48:18.042Z",
                        publishedAt: "2025-05-20T11:48:18.042Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5027,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.060Z",
                        updatedAt: "2025-05-20T11:48:18.060Z",
                        publishedAt: "2025-05-20T11:48:18.060Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5034,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.079Z",
                        updatedAt: "2025-05-20T11:48:18.079Z",
                        publishedAt: "2025-05-20T11:48:18.079Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5041,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.100Z",
                        updatedAt: "2025-05-20T11:48:18.100Z",
                        publishedAt: "2025-05-20T11:48:18.100Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2118,
                  code: "MTR-0084",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.74,
                  longitude: -122.39,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2779,
                    name: "Mary Santiago",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.405Z",
                    updatedAt: "2025-05-20T11:48:17.405Z",
                    publishedAt: "2025-05-20T11:48:17.405Z",
                    ders: [
                      {
                        id: 5516,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.512Z",
                        updatedAt: "2025-05-20T11:48:19.512Z",
                        publishedAt: "2025-05-20T11:48:19.512Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5522,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.533Z",
                        updatedAt: "2025-05-20T11:48:19.533Z",
                        publishedAt: "2025-05-20T11:48:19.533Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5530,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.552Z",
                        updatedAt: "2025-05-20T11:48:19.552Z",
                        publishedAt: "2025-05-20T11:48:19.552Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5538,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.573Z",
                        updatedAt: "2025-05-20T11:48:19.573Z",
                        publishedAt: "2025-05-20T11:48:19.573Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5541,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.585Z",
                        updatedAt: "2025-05-20T11:48:19.585Z",
                        publishedAt: "2025-05-20T11:48:19.585Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2121,
                  code: "MTR-0088",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.38,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2778,
                    name: "James Maldonado",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.406Z",
                    updatedAt: "2025-05-20T11:48:17.406Z",
                    publishedAt: "2025-05-20T11:48:17.406Z",
                    ders: [
                      {
                        id: 5515,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.509Z",
                        updatedAt: "2025-05-20T11:48:19.509Z",
                        publishedAt: "2025-05-20T11:48:19.509Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5521,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.529Z",
                        updatedAt: "2025-05-20T11:48:19.529Z",
                        publishedAt: "2025-05-20T11:48:19.529Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5528,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.548Z",
                        updatedAt: "2025-05-20T11:48:19.548Z",
                        publishedAt: "2025-05-20T11:48:19.548Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5533,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.560Z",
                        updatedAt: "2025-05-20T11:48:19.560Z",
                        publishedAt: "2025-05-20T11:48:19.560Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5539,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.576Z",
                        updatedAt: "2025-05-20T11:48:19.576Z",
                        publishedAt: "2025-05-20T11:48:19.576Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2120,
                  code: "MTR-0087",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.44,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2784,
                    name: "Joseph Daniels",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.405Z",
                    updatedAt: "2025-05-20T11:48:17.405Z",
                    publishedAt: "2025-05-20T11:48:17.405Z",
                    ders: [
                      {
                        id: 5550,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.605Z",
                        updatedAt: "2025-05-20T11:48:19.605Z",
                        publishedAt: "2025-05-20T11:48:19.605Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5558,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.626Z",
                        updatedAt: "2025-05-20T11:48:19.626Z",
                        publishedAt: "2025-05-20T11:48:19.626Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5564,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.643Z",
                        updatedAt: "2025-05-20T11:48:19.643Z",
                        publishedAt: "2025-05-20T11:48:19.643Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5568,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.653Z",
                        updatedAt: "2025-05-20T11:48:19.653Z",
                        publishedAt: "2025-05-20T11:48:19.653Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5569,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.657Z",
                        updatedAt: "2025-05-20T11:48:19.657Z",
                        publishedAt: "2025-05-20T11:48:19.657Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2114,
                  code: "MTR-0080",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.47,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2785,
                    name: "Wayne Collins",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.406Z",
                    updatedAt: "2025-05-20T11:48:17.406Z",
                    publishedAt: "2025-05-20T11:48:17.406Z",
                    ders: [
                      {
                        id: 5527,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.544Z",
                        updatedAt: "2025-05-20T11:48:19.544Z",
                        publishedAt: "2025-05-20T11:48:19.544Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5537,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.569Z",
                        updatedAt: "2025-05-20T11:48:19.569Z",
                        publishedAt: "2025-05-20T11:48:19.569Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5542,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.588Z",
                        updatedAt: "2025-05-20T11:48:19.588Z",
                        publishedAt: "2025-05-20T11:48:19.588Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5545,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.597Z",
                        updatedAt: "2025-05-20T11:48:19.597Z",
                        publishedAt: "2025-05-20T11:48:19.597Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5551,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.610Z",
                        updatedAt: "2025-05-20T11:48:19.610Z",
                        publishedAt: "2025-05-20T11:48:19.610Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2115,
                  code: "MTR-0081",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2773,
                    name: "Roberto Holland",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.408Z",
                    updatedAt: "2025-05-20T11:48:17.408Z",
                    publishedAt: "2025-05-20T11:48:17.408Z",
                    ders: [
                      {
                        id: 5466,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.379Z",
                        updatedAt: "2025-05-20T11:48:19.379Z",
                        publishedAt: "2025-05-20T11:48:19.379Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5472,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.395Z",
                        updatedAt: "2025-05-20T11:48:19.395Z",
                        publishedAt: "2025-05-20T11:48:19.395Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5479,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.409Z",
                        updatedAt: "2025-05-20T11:48:19.409Z",
                        publishedAt: "2025-05-20T11:48:19.409Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5489,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.433Z",
                        updatedAt: "2025-05-20T11:48:19.433Z",
                        publishedAt: "2025-05-20T11:48:19.433Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5495,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.449Z",
                        updatedAt: "2025-05-20T11:48:19.449Z",
                        publishedAt: "2025-05-20T11:48:19.449Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2122,
                  code: "MTR-0089",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.74,
                  longitude: -122.5,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2787,
                    name: "David Davis",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.422Z",
                    updatedAt: "2025-05-20T11:48:17.422Z",
                    publishedAt: "2025-05-20T11:48:17.422Z",
                    ders: [
                      {
                        id: 5547,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.602Z",
                        updatedAt: "2025-05-20T11:48:19.602Z",
                        publishedAt: "2025-05-20T11:48:19.602Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5556,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.624Z",
                        updatedAt: "2025-05-20T11:48:19.624Z",
                        publishedAt: "2025-05-20T11:48:19.624Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5561,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.635Z",
                        updatedAt: "2025-05-20T11:48:19.635Z",
                        publishedAt: "2025-05-20T11:48:19.635Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5565,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.644Z",
                        updatedAt: "2025-05-20T11:48:19.644Z",
                        publishedAt: "2025-05-20T11:48:19.644Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5567,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.650Z",
                        updatedAt: "2025-05-20T11:48:19.650Z",
                        publishedAt: "2025-05-20T11:48:19.650Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2123,
                  code: "MTR-0085",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.243Z",
                  updatedAt: "2025-05-20T11:48:16.243Z",
                  publishedAt: "2025-05-20T11:48:16.243Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2759,
                    name: "Shannon Perez",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.459Z",
                    updatedAt: "2025-05-20T11:48:17.459Z",
                    publishedAt: "2025-05-20T11:48:17.459Z",
                    ders: [
                      {
                        id: 5426,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.263Z",
                        updatedAt: "2025-05-20T11:48:19.263Z",
                        publishedAt: "2025-05-20T11:48:19.263Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5438,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.293Z",
                        updatedAt: "2025-05-20T11:48:19.293Z",
                        publishedAt: "2025-05-20T11:48:19.293Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5448,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.320Z",
                        updatedAt: "2025-05-20T11:48:19.320Z",
                        publishedAt: "2025-05-20T11:48:19.320Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5454,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.337Z",
                        updatedAt: "2025-05-20T11:48:19.337Z",
                        publishedAt: "2025-05-20T11:48:19.337Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5457,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.350Z",
                        updatedAt: "2025-05-20T11:48:19.350Z",
                        publishedAt: "2025-05-20T11:48:19.350Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: 219,
              name: "Twin Dunes – SFSS-TX02",
              city: "San Francisco",
              state: "CA",
              latitude: "37.764487",
              emergency_service: true,
              longtitude: "-122.445644",
              pincode: "94103",
              createdAt: "2025-05-20T11:48:15.973Z",
              updatedAt: "2025-05-20T11:48:15.973Z",
              publishedAt: "2025-05-20T11:48:15.973Z",
              max_capacity_KW: 80,
              meters: [
                {
                  id: 2094,
                  code: "MTR-0090",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.220Z",
                  updatedAt: "2025-05-20T11:48:16.220Z",
                  publishedAt: "2025-05-20T11:48:16.220Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2737,
                    name: "Jennifer Kelly",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.330Z",
                    updatedAt: "2025-05-20T11:48:17.330Z",
                    publishedAt: "2025-05-20T11:48:17.330Z",
                    ders: [
                      {
                        id: 5302,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.903Z",
                        updatedAt: "2025-05-20T11:48:18.903Z",
                        publishedAt: "2025-05-20T11:48:18.903Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5309,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.925Z",
                        updatedAt: "2025-05-20T11:48:18.925Z",
                        publishedAt: "2025-05-20T11:48:18.925Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5315,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.945Z",
                        updatedAt: "2025-05-20T11:48:18.945Z",
                        publishedAt: "2025-05-20T11:48:18.945Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5321,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.962Z",
                        updatedAt: "2025-05-20T11:48:18.962Z",
                        publishedAt: "2025-05-20T11:48:18.962Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5326,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:18.979Z",
                        updatedAt: "2025-05-20T11:48:18.979Z",
                        publishedAt: "2025-05-20T11:48:18.979Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2097,
                  code: "MTR-0093",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.8,
                  longitude: -122.43,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.220Z",
                  updatedAt: "2025-05-20T11:48:16.220Z",
                  publishedAt: "2025-05-20T11:48:16.220Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2772,
                    name: "Patrick Wilkerson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.332Z",
                    updatedAt: "2025-05-20T11:48:17.332Z",
                    publishedAt: "2025-05-20T11:48:17.332Z",
                    ders: [
                      {
                        id: 5465,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.374Z",
                        updatedAt: "2025-05-20T11:48:19.374Z",
                        publishedAt: "2025-05-20T11:48:19.374Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5471,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.390Z",
                        updatedAt: "2025-05-20T11:48:19.390Z",
                        publishedAt: "2025-05-20T11:48:19.390Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5478,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.405Z",
                        updatedAt: "2025-05-20T11:48:19.405Z",
                        publishedAt: "2025-05-20T11:48:19.405Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5486,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.427Z",
                        updatedAt: "2025-05-20T11:48:19.427Z",
                        publishedAt: "2025-05-20T11:48:19.427Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5492,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.444Z",
                        updatedAt: "2025-05-20T11:48:19.444Z",
                        publishedAt: "2025-05-20T11:48:19.444Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2096,
                  code: "MTR-0092",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.45,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.220Z",
                  updatedAt: "2025-05-21T06:13:05.810Z",
                  publishedAt: "2025-05-20T11:48:16.220Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2647,
                    name: "Robert Estes",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.335Z",
                    updatedAt: "2025-05-20T11:48:17.335Z",
                    publishedAt: "2025-05-20T11:48:17.335Z",
                    ders: [
                      {
                        id: 4967,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.820Z",
                        updatedAt: "2025-05-20T11:48:17.820Z",
                        publishedAt: "2025-05-20T11:48:17.820Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 4969,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.837Z",
                        updatedAt: "2025-05-20T11:48:17.837Z",
                        publishedAt: "2025-05-20T11:48:17.837Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 4971,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.845Z",
                        updatedAt: "2025-05-20T11:48:17.845Z",
                        publishedAt: "2025-05-20T11:48:17.845Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 4974,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.854Z",
                        updatedAt: "2025-05-20T11:48:17.854Z",
                        publishedAt: "2025-05-20T11:48:17.854Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 4978,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.863Z",
                        updatedAt: "2025-05-20T11:48:17.863Z",
                        publishedAt: "2025-05-20T11:48:17.863Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2095,
                  code: "MTR-0091",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.71,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.220Z",
                  updatedAt: "2025-05-20T11:48:16.220Z",
                  publishedAt: "2025-05-20T11:48:16.220Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2776,
                    name: "James Rodriguez",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.333Z",
                    updatedAt: "2025-05-20T11:48:17.333Z",
                    publishedAt: "2025-05-20T11:48:17.333Z",
                    ders: [
                      {
                        id: 5488,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.430Z",
                        updatedAt: "2025-05-20T11:48:19.430Z",
                        publishedAt: "2025-05-20T11:48:19.430Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5494,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.447Z",
                        updatedAt: "2025-05-20T11:48:19.447Z",
                        publishedAt: "2025-05-20T11:48:19.447Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      },
                      {
                        id: 5500,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.465Z",
                        updatedAt: "2025-05-20T11:48:19.465Z",
                        publishedAt: "2025-05-20T11:48:19.465Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5505,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.482Z",
                        updatedAt: "2025-05-20T11:48:19.482Z",
                        publishedAt: "2025-05-20T11:48:19.482Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5510,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.496Z",
                        updatedAt: "2025-05-20T11:48:19.496Z",
                        publishedAt: "2025-05-20T11:48:19.496Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2098,
                  code: "MTR-0094",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.76,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.221Z",
                  updatedAt: "2025-05-20T11:48:16.221Z",
                  publishedAt: "2025-05-20T11:48:16.221Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2761,
                    name: "Sabrina Watson",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.337Z",
                    updatedAt: "2025-05-20T11:48:17.337Z",
                    publishedAt: "2025-05-20T11:48:17.337Z",
                    ders: [
                      {
                        id: 5413,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.225Z",
                        updatedAt: "2025-05-20T11:48:19.225Z",
                        publishedAt: "2025-05-20T11:48:19.225Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5416,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.236Z",
                        updatedAt: "2025-05-20T11:48:19.236Z",
                        publishedAt: "2025-05-20T11:48:19.236Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 1.2,
                          description: "",
                          createdAt: "2025-05-11T11:08:13.813Z",
                          updatedAt: "2025-05-15T14:05:45.240Z",
                          publishedAt: "2025-05-11T11:08:13.812Z"
                        }
                      },
                      {
                        id: 5421,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.252Z",
                        updatedAt: "2025-05-20T11:48:19.252Z",
                        publishedAt: "2025-05-20T11:48:19.252Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5428,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.272Z",
                        updatedAt: "2025-05-20T11:48:19.272Z",
                        publishedAt: "2025-05-20T11:48:19.272Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.75,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T11:08:13.791Z",
                          updatedAt: "2025-05-15T14:06:33.670Z",
                          publishedAt: "2025-05-11T11:08:13.791Z"
                        }
                      },
                      {
                        id: 5435,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.290Z",
                        updatedAt: "2025-05-20T11:48:19.290Z",
                        publishedAt: "2025-05-20T11:48:19.290Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2102,
                  code: "MTR-0098",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72,
                  longitude: -122.49,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.221Z",
                  updatedAt: "2025-05-20T11:48:16.221Z",
                  publishedAt: "2025-05-20T11:48:16.221Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2777,
                    name: "Richard Petty",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.335Z",
                    updatedAt: "2025-05-20T11:48:17.335Z",
                    publishedAt: "2025-05-20T11:48:17.335Z",
                    ders: [
                      {
                        id: 5502,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.473Z",
                        updatedAt: "2025-05-20T11:48:19.473Z",
                        publishedAt: "2025-05-20T11:48:19.473Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5508,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.490Z",
                        updatedAt: "2025-05-20T11:48:19.490Z",
                        publishedAt: "2025-05-20T11:48:19.490Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5513,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.504Z",
                        updatedAt: "2025-05-20T11:48:19.504Z",
                        publishedAt: "2025-05-20T11:48:19.504Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5518,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.522Z",
                        updatedAt: "2025-05-20T11:48:19.522Z",
                        publishedAt: "2025-05-20T11:48:19.522Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5524,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.541Z",
                        updatedAt: "2025-05-20T11:48:19.541Z",
                        publishedAt: "2025-05-20T11:48:19.541Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2099,
                  code: "MTR-0095",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73,
                  longitude: -122.39,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.221Z",
                  updatedAt: "2025-05-20T11:48:16.221Z",
                  publishedAt: "2025-05-20T11:48:16.221Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2781,
                    name: "Christopher Parks",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.336Z",
                    updatedAt: "2025-05-20T11:48:17.336Z",
                    publishedAt: "2025-05-20T11:48:17.336Z",
                    ders: [
                      {
                        id: 5514,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.502Z",
                        updatedAt: "2025-05-20T11:48:19.502Z",
                        publishedAt: "2025-05-20T11:48:19.502Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 1,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T11:08:13.682Z",
                          updatedAt: "2025-05-15T14:04:23.011Z",
                          publishedAt: "2025-05-11T11:08:13.682Z"
                        }
                      },
                      {
                        id: 5520,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.524Z",
                        updatedAt: "2025-05-20T11:48:19.524Z",
                        publishedAt: "2025-05-20T11:48:19.524Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5526,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.543Z",
                        updatedAt: "2025-05-20T11:48:19.543Z",
                        publishedAt: "2025-05-20T11:48:19.543Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5532,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.558Z",
                        updatedAt: "2025-05-20T11:48:19.558Z",
                        publishedAt: "2025-05-20T11:48:19.558Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5536,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.571Z",
                        updatedAt: "2025-05-20T11:48:19.571Z",
                        publishedAt: "2025-05-20T11:48:19.571Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2100,
                  code: "MTR-0097",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79,
                  longitude: -122.48,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.221Z",
                  updatedAt: "2025-05-20T11:48:16.221Z",
                  publishedAt: "2025-05-20T11:48:16.221Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2753,
                    name: "Miss Stephanie Stevens",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.339Z",
                    updatedAt: "2025-05-20T11:48:17.339Z",
                    publishedAt: "2025-05-20T11:48:17.339Z",
                    ders: [
                      {
                        id: 5376,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.118Z",
                        updatedAt: "2025-05-20T11:48:19.118Z",
                        publishedAt: "2025-05-20T11:48:19.118Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5383,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.136Z",
                        updatedAt: "2025-05-20T11:48:19.136Z",
                        publishedAt: "2025-05-20T11:48:19.136Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.075,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T11:08:13.583Z",
                          updatedAt: "2025-05-15T11:55:11.202Z",
                          publishedAt: "2025-05-11T11:08:13.583Z"
                        }
                      },
                      {
                        id: 5390,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.156Z",
                        updatedAt: "2025-05-20T11:48:19.156Z",
                        publishedAt: "2025-05-20T11:48:19.156Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5397,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.177Z",
                        updatedAt: "2025-05-20T11:48:19.177Z",
                        publishedAt: "2025-05-20T11:48:19.177Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5403,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.195Z",
                        updatedAt: "2025-05-20T11:48:19.195Z",
                        publishedAt: "2025-05-20T11:48:19.195Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2101,
                  code: "MTR-0096",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77,
                  longitude: -122.46,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.221Z",
                  updatedAt: "2025-05-20T11:48:16.221Z",
                  publishedAt: "2025-05-20T11:48:16.221Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2769,
                    name: "Kristen Hill",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.354Z",
                    updatedAt: "2025-05-20T11:48:17.354Z",
                    publishedAt: "2025-05-20T11:48:17.354Z",
                    ders: [
                      {
                        id: 5456,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.347Z",
                        updatedAt: "2025-05-20T11:48:19.347Z",
                        publishedAt: "2025-05-20T11:48:19.347Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.0102,
                          description: "Very low-power appliance",
                          createdAt: "2025-05-11T11:08:13.543Z",
                          updatedAt: "2025-05-15T14:03:58.404Z",
                          publishedAt: "2025-05-11T11:08:13.542Z"
                        }
                      },
                      {
                        id: 5461,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.362Z",
                        updatedAt: "2025-05-20T11:48:19.362Z",
                        publishedAt: "2025-05-20T11:48:19.362Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 1.5,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T11:08:13.724Z",
                          updatedAt: "2025-05-15T11:54:53.127Z",
                          publishedAt: "2025-05-11T11:08:13.723Z"
                        }
                      },
                      {
                        id: 5467,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.381Z",
                        updatedAt: "2025-05-20T11:48:19.381Z",
                        publishedAt: "2025-05-20T11:48:19.381Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.12,
                          description: "Entertainment",
                          createdAt: "2025-05-11T11:08:13.607Z",
                          updatedAt: "2025-05-15T14:05:59.184Z",
                          publishedAt: "2025-05-11T11:08:13.606Z"
                        }
                      },
                      {
                        id: 5474,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.397Z",
                        updatedAt: "2025-05-20T11:48:19.397Z",
                        publishedAt: "2025-05-20T11:48:19.397Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5480,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:19.411Z",
                        updatedAt: "2025-05-20T11:48:19.411Z",
                        publishedAt: "2025-05-20T11:48:19.411Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      }
                    ]
                  }
                },
                {
                  id: 2103,
                  code: "MTR-0099",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.41,
                  pincode: "94103",
                  createdAt: "2025-05-20T11:48:16.221Z",
                  updatedAt: "2025-05-20T11:48:16.221Z",
                  publishedAt: "2025-05-20T11:48:16.221Z",
                  max_capacity_KW: 10,
                  dfp_subscription_id: null,
                  energyResource: {
                    id: 2659,
                    name: "Heather Davis",
                    type: "CONSUMER",
                    createdAt: "2025-05-20T11:48:17.393Z",
                    updatedAt: "2025-05-20T11:48:17.393Z",
                    publishedAt: "2025-05-20T11:48:17.393Z",
                    ders: [
                      {
                        id: 5001,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.949Z",
                        updatedAt: "2025-05-20T11:48:17.949Z",
                        publishedAt: "2025-05-20T11:48:17.949Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.4998,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T11:08:13.703Z",
                          updatedAt: "2025-05-15T14:06:20.018Z",
                          publishedAt: "2025-05-11T11:08:13.703Z"
                        }
                      },
                      {
                        id: 5003,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.969Z",
                        updatedAt: "2025-05-20T11:48:17.969Z",
                        publishedAt: "2025-05-20T11:48:17.969Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.1998,
                          description: "Compressor cycles ON/OFF",
                          createdAt: "2025-05-11T11:08:13.629Z",
                          updatedAt: "2025-05-15T14:05:11.247Z",
                          publishedAt: "2025-05-11T11:08:13.629Z"
                        }
                      },
                      {
                        id: 5005,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.978Z",
                        updatedAt: "2025-05-20T11:48:17.978Z",
                        publishedAt: "2025-05-20T11:48:17.978Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.0648,
                          description: "Varies by model",
                          createdAt: "2025-05-11T11:08:13.659Z",
                          updatedAt: "2025-05-15T11:55:42.572Z",
                          publishedAt: "2025-05-11T11:08:13.658Z"
                        }
                      },
                      {
                        id: 5007,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.988Z",
                        updatedAt: "2025-05-20T11:48:17.988Z",
                        publishedAt: "2025-05-20T11:48:17.988Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 1.9998,
                          description: "Constant high power",
                          createdAt: "2025-05-11T11:08:13.749Z",
                          updatedAt: "2025-05-15T14:05:29.895Z",
                          publishedAt: "2025-05-11T11:08:13.748Z"
                        }
                      },
                      {
                        id: 5010,
                        switched_on: true,
                        createdAt: "2025-05-20T11:48:17.996Z",
                        updatedAt: "2025-05-20T11:48:17.996Z",
                        publishedAt: "2025-05-20T11:48:17.996Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 3,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T11:08:13.771Z",
                          updatedAt: "2025-05-15T11:55:26.316Z",
                          publishedAt: "2025-05-11T11:08:13.770Z"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ];
};

export const calculateBaseKWhByTransformer = (meters) => {
  const transformerMap = {};

  meters.forEach((meter) => {
    const transformerId = meter.transformer?.id;

    if (!transformerId) return;

    if (!transformerMap[transformerId]) {
      // Initialize with transformer data and baseKWh total
      transformerMap[transformerId] = {
        transformer: meter.transformer,
        totalBaseKWh: 0
      };
    }

    const ders = meter.energyResource?.ders || [];
    ders.forEach((der) => {
      const baseKWh = der.appliance?.baseKWh || 0;
      transformerMap[transformerId].totalBaseKWh += baseKWh;
    });
  });

  // Convert to array if needed
  return Object.values(transformerMap);
};
