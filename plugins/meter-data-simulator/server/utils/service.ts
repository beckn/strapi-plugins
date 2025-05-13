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

export const getInitialStateService = () => {
  return [
    {
      id: 1,
      name: "Pacific Gas and Electric Company",
      city: "San Francisco",
      state: "CA",
      latitude: "37.7929",
      longtitude: "-122.3969",
      pincode: "94105",
      createdAt: "2025-05-12T18:00:05.040Z",
      updatedAt: "2025-05-12T18:00:05.683Z",
      publishedAt: "2025-05-12T18:00:05.678Z",
      substations: [
        {
          id: 2,
          name: "SF Mission Substation",
          city: "San Francisco",
          state: "CA",
          latitude: "37.7668",
          longtitude: "-122.4215",
          pincode: "94103",
          createdAt: "2025-05-12T18:14:59.313Z",
          updatedAt: "2025-05-12T18:15:10.056Z",
          publishedAt: "2025-05-12T18:15:10.044Z",
          max_capacity_KW: 1000,
          transformers: [
            {
              id: 1,
              name: "Transformer1",
              city: "San Francisco",
              state: "CA",
              latitude: "37.801",
              longtitude: "-122.429",
              pincode: "94123",
              createdAt: "2025-05-12T18:28:02.459Z",
              updatedAt: "2025-05-12T18:38:43.909Z",
              publishedAt: "2025-05-12T18:28:03.022Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: 2,
                  code: "METER001",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78,
                  longitude: -122.42,
                  pincode: "94103",
                  createdAt: "2025-05-12T18:38:36.496Z",
                  updatedAt: "2025-05-12T18:38:37.073Z",
                  publishedAt: "2025-05-12T18:38:37.062Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: 3,
                    name: "John Doe Home",
                    type: "CONSUMER",
                    createdAt: "2025-05-12T18:36:15.836Z",
                    updatedAt: "2025-05-12T18:36:16.400Z",
                    publishedAt: "2025-05-12T18:36:16.395Z",
                    ders: [
                      {
                        id: 1,
                        switched_on: true,
                        createdAt: "2025-05-12T18:29:30.523Z",
                        updatedAt: "2025-05-12T20:18:16.579Z",
                        publishedAt: "2025-05-12T18:29:31.496Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance",
                          createdAt: "2025-05-11T05:38:13.724Z",
                          updatedAt: "2025-05-11T05:38:13.724Z",
                          publishedAt: "2025-05-11T05:38:13.723Z"
                        }
                      },
                      {
                        id: 2,
                        switched_on: true,
                        createdAt: "2025-05-12T18:29:40.281Z",
                        updatedAt: "2025-05-12T18:29:43.432Z",
                        publishedAt: "2025-05-12T18:29:41.080Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage",
                          createdAt: "2025-05-11T05:38:13.583Z",
                          updatedAt: "2025-05-11T05:38:13.583Z",
                          publishedAt: "2025-05-11T05:38:13.583Z"
                        }
                      },
                      {
                        id: 3,
                        switched_on: true,
                        createdAt: "2025-05-12T18:30:01.099Z",
                        updatedAt: "2025-05-12T18:30:01.735Z",
                        publishedAt: "2025-05-12T18:30:01.731Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating",
                          createdAt: "2025-05-11T05:38:13.771Z",
                          updatedAt: "2025-05-11T05:38:13.771Z",
                          publishedAt: "2025-05-11T05:38:13.770Z"
                        }
                      },
                      {
                        id: 4,
                        switched_on: true,
                        createdAt: "2025-05-12T18:30:09.899Z",
                        updatedAt: "2025-05-12T18:30:10.361Z",
                        publishedAt: "2025-05-12T18:30:10.357Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage",
                          createdAt: "2025-05-11T05:38:13.682Z",
                          updatedAt: "2025-05-11T05:38:13.682Z",
                          publishedAt: "2025-05-11T05:38:13.682Z"
                        }
                      },
                      {
                        id: 5,
                        switched_on: true,
                        createdAt: "2025-05-12T18:30:22.039Z",
                        updatedAt: "2025-05-12T18:30:22.557Z",
                        publishedAt: "2025-05-12T18:30:22.552Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load",
                          createdAt: "2025-05-11T05:38:13.703Z",
                          updatedAt: "2025-05-11T05:38:13.703Z",
                          publishedAt: "2025-05-11T05:38:13.703Z"
                        }
                      },
                      {
                        id: 6,
                        switched_on: true,
                        createdAt: "2025-05-12T18:30:35.025Z",
                        updatedAt: "2025-05-12T20:18:21.637Z",
                        publishedAt: "2025-05-12T18:30:35.535Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load",
                          createdAt: "2025-05-11T05:38:13.791Z",
                          updatedAt: "2025-05-11T05:38:13.791Z",
                          publishedAt: "2025-05-11T05:38:13.791Z"
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
