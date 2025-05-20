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
      id: 1,
      name: "Pacific Gas and Electric Company",
      city: "San Francisco",
      state: "CA",
      latitude: "37.7929",
      longtitude: "-122.3969",
      pincode: "94105",
      createdAt: "2025-05-13T19:50:41.649496Z",
      updatedAt: "2025-05-13T19:50:41.649503Z",
      publishedAt: "2025-05-13T19:50:41.649505Z",
      substations: [
        {
          id: "32c8e4a9103b4ff398926839b08d45e3",
          name: "SF Mission Substation",
          city: "San Francisco",
          state: "CA",
          latitude: 37.784317,
          longtitude: -122.441556,
          pincode: "94103",
          createdAt: "2025-05-13T19:50:41.649577Z",
          updatedAt: "2025-05-13T19:50:41.649581Z",
          publishedAt: "2025-05-13T19:50:41.649584Z",
          max_capacity_KW: 1000,
          transformers: [
            {
              id: "7d8cce0a2bb040a5aceba4d6f1b4532b",
              name: "Transformer_0",
              city: "San Francisco",
              state: "CA",
              latitude: 37.746698,
              longtitude: -122.500327,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.649626Z",
              updatedAt: "2025-05-13T19:50:41.649631Z",
              publishedAt: "2025-05-13T19:50:41.649633Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "b026744fde7a4c589db8b879ef2c1716",
                  code: "MTR-0000",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.733864,
                  longitude: -122.406954,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.649666Z",
                  updatedAt: "2025-05-13T19:50:41.649668Z",
                  publishedAt: "2025-05-13T19:50:41.649670Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "c6356dd09f9f4ba5be8a237744ed6895",
                    name: "Jacob Porter",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.650042Z",
                    updatedAt: "2025-05-13T19:50:41.650046Z",
                    publishedAt: "2025-05-13T19:50:41.650048Z",
                    ders: [
                      {
                        id: "69577903ccfc423eb32be26d20d50064",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650104Z",
                        updatedAt: "2025-05-13T19:50:41.650106Z",
                        publishedAt: "2025-05-13T19:50:41.650108Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "b7280b7086704da3b225fa7b6b159e05",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650119Z",
                        updatedAt: "2025-05-13T19:50:41.650121Z",
                        publishedAt: "2025-05-13T19:50:41.650122Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "45ef0fb88cfd46babb0cd3ffe15b07c1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650132Z",
                        updatedAt: "2025-05-13T19:50:41.650134Z",
                        publishedAt: "2025-05-13T19:50:41.650135Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "8e21ee767e5741c29fad0f0926ab3ee5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650143Z",
                        updatedAt: "2025-05-13T19:50:41.650145Z",
                        publishedAt: "2025-05-13T19:50:41.650146Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "a9fab838f2f443b1ae7e92a5ce086cb0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650155Z",
                        updatedAt: "2025-05-13T19:50:41.650156Z",
                        publishedAt: "2025-05-13T19:50:41.650158Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "23293d6630c84d8eaea20b28fdc0a9f8",
                  code: "MTR-0001",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.806849,
                  longitude: -122.494627,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.650188Z",
                  updatedAt: "2025-05-13T19:50:41.650190Z",
                  publishedAt: "2025-05-13T19:50:41.650191Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "c8867655596b4ff2990572efe1d1d677",
                    name: "William Flores",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.650418Z",
                    updatedAt: "2025-05-13T19:50:41.650423Z",
                    publishedAt: "2025-05-13T19:50:41.650433Z",
                    ders: [
                      {
                        id: "3fdcc90e67f845c181dbb97ceb8a0f3b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650467Z",
                        updatedAt: "2025-05-13T19:50:41.650469Z",
                        publishedAt: "2025-05-13T19:50:41.650471Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "02a4472cd08d4000a92795480f6377cc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650482Z",
                        updatedAt: "2025-05-13T19:50:41.650484Z",
                        publishedAt: "2025-05-13T19:50:41.650486Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "d7ec04a9b22542d6acf9d0af1137f040",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650497Z",
                        updatedAt: "2025-05-13T19:50:41.650500Z",
                        publishedAt: "2025-05-13T19:50:41.650502Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "a874cbb4cca94f4088a1336da77f6939",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650514Z",
                        updatedAt: "2025-05-13T19:50:41.650516Z",
                        publishedAt: "2025-05-13T19:50:41.650519Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "4a4c343071d846eaa3d3db3e4364aae8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650531Z",
                        updatedAt: "2025-05-13T19:50:41.650533Z",
                        publishedAt: "2025-05-13T19:50:41.650535Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "06400ec93ec647da9ef425f5413c6b45",
                  code: "MTR-0002",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.713158,
                  longitude: -122.39827,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.650561Z",
                  updatedAt: "2025-05-13T19:50:41.650562Z",
                  publishedAt: "2025-05-13T19:50:41.650564Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "5fb4cfe02939490392c7da6853e045b3",
                    name: "Brandon Sanchez",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.650770Z",
                    updatedAt: "2025-05-13T19:50:41.650773Z",
                    publishedAt: "2025-05-13T19:50:41.650774Z",
                    ders: [
                      {
                        id: "ae278eb19dc346a5b62645ebef24864c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650804Z",
                        updatedAt: "2025-05-13T19:50:41.650806Z",
                        publishedAt: "2025-05-13T19:50:41.650807Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "f93261da21df4a04955a5d56deb05503",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650816Z",
                        updatedAt: "2025-05-13T19:50:41.650817Z",
                        publishedAt: "2025-05-13T19:50:41.650819Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "52e8498caed5466c98dfa742add17296",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650826Z",
                        updatedAt: "2025-05-13T19:50:41.650828Z",
                        publishedAt: "2025-05-13T19:50:41.650830Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "a21d37e22fe1410bbd188a507db2d5d0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650837Z",
                        updatedAt: "2025-05-13T19:50:41.650839Z",
                        publishedAt: "2025-05-13T19:50:41.650840Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "e69cb9c039314398873f1a4307353982",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.650848Z",
                        updatedAt: "2025-05-13T19:50:41.650849Z",
                        publishedAt: "2025-05-13T19:50:41.650851Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "d73cc23b465b42e6b07d9dea6ba875ca",
                  code: "MTR-0003",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.802649,
                  longitude: -122.375518,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.650865Z",
                  updatedAt: "2025-05-13T19:50:41.650866Z",
                  publishedAt: "2025-05-13T19:50:41.650868Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "ad4bce2f5d804854ab841f86515ad264",
                    name: "John Hill",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.651099Z",
                    updatedAt: "2025-05-13T19:50:41.651102Z",
                    publishedAt: "2025-05-13T19:50:41.651104Z",
                    ders: [
                      {
                        id: "c34aeae5b8bf4e639c43c7f7ff6af32c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651134Z",
                        updatedAt: "2025-05-13T19:50:41.651136Z",
                        publishedAt: "2025-05-13T19:50:41.651138Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "86fbf6329427419cae0b50063d973391",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651146Z",
                        updatedAt: "2025-05-13T19:50:41.651148Z",
                        publishedAt: "2025-05-13T19:50:41.651149Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "d7122a741af64731aa9a0d0358de6c7f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651157Z",
                        updatedAt: "2025-05-13T19:50:41.651158Z",
                        publishedAt: "2025-05-13T19:50:41.651160Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "befb548a497b44eb9ca3ae6c3c62d680",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651168Z",
                        updatedAt: "2025-05-13T19:50:41.651169Z",
                        publishedAt: "2025-05-13T19:50:41.651173Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "a94e9ee364cb4feca71f87c2953d55f7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651179Z",
                        updatedAt: "2025-05-13T19:50:41.651181Z",
                        publishedAt: "2025-05-13T19:50:41.651183Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "d4f9553695fc43b1965041f173ba6ea1",
                  code: "MTR-0004",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.745979,
                  longitude: -122.398444,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.651197Z",
                  updatedAt: "2025-05-13T19:50:41.651199Z",
                  publishedAt: "2025-05-13T19:50:41.651201Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "24e7e6380aa74f56a9a44e6bc343ece9",
                    name: "John Thomas",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.651376Z",
                    updatedAt: "2025-05-13T19:50:41.651379Z",
                    publishedAt: "2025-05-13T19:50:41.651380Z",
                    ders: [
                      {
                        id: "196129cf2dc840ac98a000fa2207e175",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651408Z",
                        updatedAt: "2025-05-13T19:50:41.651410Z",
                        publishedAt: "2025-05-13T19:50:41.651412Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "dfe38c6892a3437a9f88a7612fa611a5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651421Z",
                        updatedAt: "2025-05-13T19:50:41.651422Z",
                        publishedAt: "2025-05-13T19:50:41.651423Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "21ffc3f8913345a9a69219ea55723e31",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651431Z",
                        updatedAt: "2025-05-13T19:50:41.651432Z",
                        publishedAt: "2025-05-13T19:50:41.651434Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "f2ca432bc2264ee1a392a39b98f80f50",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651441Z",
                        updatedAt: "2025-05-13T19:50:41.651443Z",
                        publishedAt: "2025-05-13T19:50:41.651445Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "5c5a8ea7ee7543de99ae0b2972045ddf",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651460Z",
                        updatedAt: "2025-05-13T19:50:41.651462Z",
                        publishedAt: "2025-05-13T19:50:41.651465Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "82438c3b12cf4a078ba2e7fed9cf0c4e",
                  code: "MTR-0005",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.770991,
                  longitude: -122.365796,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.651509Z",
                  updatedAt: "2025-05-13T19:50:41.651514Z",
                  publishedAt: "2025-05-13T19:50:41.651515Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "66329f48138446a3a9f1479bc8d55140",
                    name: "Samuel Brennan",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.651690Z",
                    updatedAt: "2025-05-13T19:50:41.651693Z",
                    publishedAt: "2025-05-13T19:50:41.651694Z",
                    ders: [
                      {
                        id: "c7f3e428f050498085aa118a9abc8c2e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651723Z",
                        updatedAt: "2025-05-13T19:50:41.651726Z",
                        publishedAt: "2025-05-13T19:50:41.651728Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "093a09bc06e943d1a4bd90db7808a575",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651745Z",
                        updatedAt: "2025-05-13T19:50:41.651748Z",
                        publishedAt: "2025-05-13T19:50:41.651751Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "d0fc4c95e746463ba86b9479676cfa45",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651763Z",
                        updatedAt: "2025-05-13T19:50:41.651765Z",
                        publishedAt: "2025-05-13T19:50:41.651768Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "637f39643d0143b9971a2d24b1e0e18c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651779Z",
                        updatedAt: "2025-05-13T19:50:41.651781Z",
                        publishedAt: "2025-05-13T19:50:41.651785Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "5d50a43c8749488bb3d02e43df08ead1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.651824Z",
                        updatedAt: "2025-05-13T19:50:41.651825Z",
                        publishedAt: "2025-05-13T19:50:41.651827Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "08e740c04d31496ab3649d6fb7e56ecf",
                  code: "MTR-0006",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.804856,
                  longitude: -122.489492,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.651843Z",
                  updatedAt: "2025-05-13T19:50:41.651844Z",
                  publishedAt: "2025-05-13T19:50:41.651846Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "30bd03083a054f80b412915dc6a29b2e",
                    name: "Elizabeth Wood",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.652083Z",
                    updatedAt: "2025-05-13T19:50:41.652087Z",
                    publishedAt: "2025-05-13T19:50:41.652089Z",
                    ders: [
                      {
                        id: "8c508ac0af864b7783cf01cd4898522e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652121Z",
                        updatedAt: "2025-05-13T19:50:41.652123Z",
                        publishedAt: "2025-05-13T19:50:41.652126Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "f6f11d7e201148f0aea5dd181a95f2ac",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652138Z",
                        updatedAt: "2025-05-13T19:50:41.652141Z",
                        publishedAt: "2025-05-13T19:50:41.652143Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "a6780bde93a7468d94cb92caa6773048",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652155Z",
                        updatedAt: "2025-05-13T19:50:41.652165Z",
                        publishedAt: "2025-05-13T19:50:41.652167Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "1b5bcf478cbd4321b303782bd969af18",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652185Z",
                        updatedAt: "2025-05-13T19:50:41.652187Z",
                        publishedAt: "2025-05-13T19:50:41.652188Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "2210bf5116c840dbadcd68b9c26217e9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652196Z",
                        updatedAt: "2025-05-13T19:50:41.652197Z",
                        publishedAt: "2025-05-13T19:50:41.652199Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "add1c8a128a144d3b0e11a4669045e6f",
                  code: "MTR-0007",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72814,
                  longitude: -122.500948,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.652215Z",
                  updatedAt: "2025-05-13T19:50:41.652216Z",
                  publishedAt: "2025-05-13T19:50:41.652218Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "02e059035ad94f98be829f5e2ade8726",
                    name: "Stephanie Stephens",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.652401Z",
                    updatedAt: "2025-05-13T19:50:41.652403Z",
                    publishedAt: "2025-05-13T19:50:41.652404Z",
                    ders: [
                      {
                        id: "96a62d14c67e482d8e8dc1d69d45313c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652434Z",
                        updatedAt: "2025-05-13T19:50:41.652437Z",
                        publishedAt: "2025-05-13T19:50:41.652440Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "a00cca9d374e43628c8899e8c8457c36",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652454Z",
                        updatedAt: "2025-05-13T19:50:41.652457Z",
                        publishedAt: "2025-05-13T19:50:41.652459Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "dab4e1c67b0445e292f44993db78ba26",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652467Z",
                        updatedAt: "2025-05-13T19:50:41.652468Z",
                        publishedAt: "2025-05-13T19:50:41.652470Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "2f1553e8e3b84b1aa051db963c881e67",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652477Z",
                        updatedAt: "2025-05-13T19:50:41.652479Z",
                        publishedAt: "2025-05-13T19:50:41.652480Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "0aae4988917b4f4691f023c168f70f9f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652488Z",
                        updatedAt: "2025-05-13T19:50:41.652489Z",
                        publishedAt: "2025-05-13T19:50:41.652491Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "326e4aa6349347f88bfc96a28a47b3ab",
                  code: "MTR-0008",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.778686,
                  longitude: -122.418789,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.652521Z",
                  updatedAt: "2025-05-13T19:50:41.652523Z",
                  publishedAt: "2025-05-13T19:50:41.652525Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "bcac00b5a4d14e73a34cdfa22e1d817e",
                    name: "Tammy Parsons",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.652721Z",
                    updatedAt: "2025-05-13T19:50:41.652723Z",
                    publishedAt: "2025-05-13T19:50:41.652725Z",
                    ders: [
                      {
                        id: "7e6fc427fde74fccb09aee4516dbd5a6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652753Z",
                        updatedAt: "2025-05-13T19:50:41.652755Z",
                        publishedAt: "2025-05-13T19:50:41.652756Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "a1b4bd89bd03437baad202a9fed69c27",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652769Z",
                        updatedAt: "2025-05-13T19:50:41.652771Z",
                        publishedAt: "2025-05-13T19:50:41.652772Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "2b204e4b048d493cafd2fc7354e126ff",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652780Z",
                        updatedAt: "2025-05-13T19:50:41.652782Z",
                        publishedAt: "2025-05-13T19:50:41.652785Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "fdc1ef8c2606439cbe771665a956030f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652805Z",
                        updatedAt: "2025-05-13T19:50:41.652807Z",
                        publishedAt: "2025-05-13T19:50:41.652812Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "160635b92ff24fdfb50751b799803948",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.652847Z",
                        updatedAt: "2025-05-13T19:50:41.652849Z",
                        publishedAt: "2025-05-13T19:50:41.652852Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "746b8e3128af4f018de8bad30430418f",
                  code: "MTR-0009",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.775393,
                  longitude: -122.383939,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.652884Z",
                  updatedAt: "2025-05-13T19:50:41.652885Z",
                  publishedAt: "2025-05-13T19:50:41.652887Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "f06c44cc2df0426db4f9d80dfd6a33bd",
                    name: "Taylor Wolfe",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.653083Z",
                    updatedAt: "2025-05-13T19:50:41.653085Z",
                    publishedAt: "2025-05-13T19:50:41.653087Z",
                    ders: [
                      {
                        id: "0897f29160a74e4aafa570313f9c30f1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653116Z",
                        updatedAt: "2025-05-13T19:50:41.653118Z",
                        publishedAt: "2025-05-13T19:50:41.653119Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "d2aafd37f8f846f1b0c8e2dbcbc807f9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653127Z",
                        updatedAt: "2025-05-13T19:50:41.653129Z",
                        publishedAt: "2025-05-13T19:50:41.653130Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "244080cda634441ab6e7bee1e96338c7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653172Z",
                        updatedAt: "2025-05-13T19:50:41.653174Z",
                        publishedAt: "2025-05-13T19:50:41.653177Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "9bf32b85705f41ae83d084dadef5d151",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653187Z",
                        updatedAt: "2025-05-13T19:50:41.653189Z",
                        publishedAt: "2025-05-13T19:50:41.653191Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "018a6602b8ba434798a9f88918c6372f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653202Z",
                        updatedAt: "2025-05-13T19:50:41.653204Z",
                        publishedAt: "2025-05-13T19:50:41.653206Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "4a41e7e60f434e349092b5ba7b6e54c7",
              name: "Transformer_1",
              city: "San Francisco",
              state: "CA",
              latitude: 37.806856,
              longtitude: -122.517329,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.653241Z",
              updatedAt: "2025-05-13T19:50:41.653244Z",
              publishedAt: "2025-05-13T19:50:41.653246Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "584ab5dfa15947eaa0503f1521a8f6e8",
                  code: "MTR-0010",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.797306,
                  longitude: -122.382531,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.653275Z",
                  updatedAt: "2025-05-13T19:50:41.653277Z",
                  publishedAt: "2025-05-13T19:50:41.653279Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "05082edc89f448fda7fa84fe3dc8c2cc",
                    name: "Adam Conley",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.653448Z",
                    updatedAt: "2025-05-13T19:50:41.653452Z",
                    publishedAt: "2025-05-13T19:50:41.653454Z",
                    ders: [
                      {
                        id: "b62f74cba26449ec9481ce6e8edc1b5a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653480Z",
                        updatedAt: "2025-05-13T19:50:41.653482Z",
                        publishedAt: "2025-05-13T19:50:41.653484Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "f066cd4af9594d2ca8bca747c7ece962",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653491Z",
                        updatedAt: "2025-05-13T19:50:41.653492Z",
                        publishedAt: "2025-05-13T19:50:41.653494Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "582da20981cd44aea7cbf3eb712618d4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653500Z",
                        updatedAt: "2025-05-13T19:50:41.653502Z",
                        publishedAt: "2025-05-13T19:50:41.653503Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "a5c7471ddd66440ea7dd569ba323f142",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653511Z",
                        updatedAt: "2025-05-13T19:50:41.653512Z",
                        publishedAt: "2025-05-13T19:50:41.653513Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "5cc71768416240dba848518b7a3bce2c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653521Z",
                        updatedAt: "2025-05-13T19:50:41.653522Z",
                        publishedAt: "2025-05-13T19:50:41.653523Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "999884899c174d7b8d3574b3cc6b6c77",
                  code: "MTR-0011",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.736593,
                  longitude: -122.47146,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.653536Z",
                  updatedAt: "2025-05-13T19:50:41.653537Z",
                  publishedAt: "2025-05-13T19:50:41.653538Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "34e7032e08dc4f338c4441b731c1e33b",
                    name: "Pamela Garcia",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.653736Z",
                    updatedAt: "2025-05-13T19:50:41.653739Z",
                    publishedAt: "2025-05-13T19:50:41.653740Z",
                    ders: [
                      {
                        id: "075ff3539e744c1e823d5aa7061fc782",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653778Z",
                        updatedAt: "2025-05-13T19:50:41.653780Z",
                        publishedAt: "2025-05-13T19:50:41.653781Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "3091f33e362e400b94405799579f383d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653789Z",
                        updatedAt: "2025-05-13T19:50:41.653790Z",
                        publishedAt: "2025-05-13T19:50:41.653792Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "8a1fe79716864f7496403f1523554488",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653799Z",
                        updatedAt: "2025-05-13T19:50:41.653800Z",
                        publishedAt: "2025-05-13T19:50:41.653802Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "823a9e075812493698de4842ea8d1aa9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653808Z",
                        updatedAt: "2025-05-13T19:50:41.653810Z",
                        publishedAt: "2025-05-13T19:50:41.653811Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "8fe0cf2602794cab804b34cec44f5b39",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.653836Z",
                        updatedAt: "2025-05-13T19:50:41.653837Z",
                        publishedAt: "2025-05-13T19:50:41.653839Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "43e63dfff76d46b7a0fc0a1c0714fbd7",
                  code: "MTR-0012",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.758379,
                  longitude: -122.417827,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.653851Z",
                  updatedAt: "2025-05-13T19:50:41.653852Z",
                  publishedAt: "2025-05-13T19:50:41.653853Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "18b9c7ac5f104ad0b3a55dc0fbcd39a2",
                    name: "Danielle Shields",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.654033Z",
                    updatedAt: "2025-05-13T19:50:41.654035Z",
                    publishedAt: "2025-05-13T19:50:41.654037Z",
                    ders: [
                      {
                        id: "71bce3b0313144338bedbf90e672287f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654061Z",
                        updatedAt: "2025-05-13T19:50:41.654062Z",
                        publishedAt: "2025-05-13T19:50:41.654064Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "697a5e4d11d74b65a23be9b163533004",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654071Z",
                        updatedAt: "2025-05-13T19:50:41.654073Z",
                        publishedAt: "2025-05-13T19:50:41.654075Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "bbea8eb73333486f9d8a85098c5ec837",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654081Z",
                        updatedAt: "2025-05-13T19:50:41.654083Z",
                        publishedAt: "2025-05-13T19:50:41.654084Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "d88957bb362a4a20be8434f97c70cd58",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654094Z",
                        updatedAt: "2025-05-13T19:50:41.654095Z",
                        publishedAt: "2025-05-13T19:50:41.654097Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "af58a9257580469fae1faae0c513ae0a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654103Z",
                        updatedAt: "2025-05-13T19:50:41.654105Z",
                        publishedAt: "2025-05-13T19:50:41.654106Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "6ab6ca59d47a4d92bede3543d850378d",
                  code: "MTR-0013",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.746033,
                  longitude: -122.49189,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.654121Z",
                  updatedAt: "2025-05-13T19:50:41.654123Z",
                  publishedAt: "2025-05-13T19:50:41.654126Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "b03b952b27b146339d59b117ef5f1533",
                    name: "Adam Robinson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.654317Z",
                    updatedAt: "2025-05-13T19:50:41.654319Z",
                    publishedAt: "2025-05-13T19:50:41.654321Z",
                    ders: [
                      {
                        id: "d82963c955f04127b3999dab52bf4291",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654420Z",
                        updatedAt: "2025-05-13T19:50:41.654429Z",
                        publishedAt: "2025-05-13T19:50:41.654431Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "4e584b8d75e94aed8a8262ffcb647543",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654472Z",
                        updatedAt: "2025-05-13T19:50:41.654475Z",
                        publishedAt: "2025-05-13T19:50:41.654478Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "eda61f2de4a24fa5931be8b643726aa0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654514Z",
                        updatedAt: "2025-05-13T19:50:41.654515Z",
                        publishedAt: "2025-05-13T19:50:41.654517Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "efc179c62c7f4addaf54b294ac00a75b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654539Z",
                        updatedAt: "2025-05-13T19:50:41.654542Z",
                        publishedAt: "2025-05-13T19:50:41.654544Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "a2dd041d02094225b2ee154ca3d3dd15",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.654555Z",
                        updatedAt: "2025-05-13T19:50:41.654557Z",
                        publishedAt: "2025-05-13T19:50:41.654561Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "e297fcb0e51a4c36a870d5cfd285aa79",
                  code: "MTR-0014",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.758198,
                  longitude: -122.507876,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.654583Z",
                  updatedAt: "2025-05-13T19:50:41.654585Z",
                  publishedAt: "2025-05-13T19:50:41.654587Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "37b549fc6d26497ba37835df859a6972",
                    name: "Amanda Johnson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.655059Z",
                    updatedAt: "2025-05-13T19:50:41.655069Z",
                    publishedAt: "2025-05-13T19:50:41.655071Z",
                    ders: [
                      {
                        id: "37db1fc909dc48bfb16aeb3690165e94",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655118Z",
                        updatedAt: "2025-05-13T19:50:41.655121Z",
                        publishedAt: "2025-05-13T19:50:41.655124Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "1fc9406d3f2a4a9f9f44dc669b23a34a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655140Z",
                        updatedAt: "2025-05-13T19:50:41.655143Z",
                        publishedAt: "2025-05-13T19:50:41.655145Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "426fed8cae2142d98fe9a3a3f75f1859",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655158Z",
                        updatedAt: "2025-05-13T19:50:41.655161Z",
                        publishedAt: "2025-05-13T19:50:41.655164Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "0b097a6149f44b29bcdfc41e7f45cf70",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655241Z",
                        updatedAt: "2025-05-13T19:50:41.655244Z",
                        publishedAt: "2025-05-13T19:50:41.655245Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "0e687650dc014a0f9d0c534712626014",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655270Z",
                        updatedAt: "2025-05-13T19:50:41.655271Z",
                        publishedAt: "2025-05-13T19:50:41.655284Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "9c03e7d50cd84affa678f4bdc8ecc4dd",
                  code: "MTR-0015",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.776405,
                  longitude: -122.405743,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.655331Z",
                  updatedAt: "2025-05-13T19:50:41.655334Z",
                  publishedAt: "2025-05-13T19:50:41.655338Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "350bc7a531b743548877652a8a5dfe21",
                    name: "Eileen Phillips",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.655581Z",
                    updatedAt: "2025-05-13T19:50:41.655584Z",
                    publishedAt: "2025-05-13T19:50:41.655586Z",
                    ders: [
                      {
                        id: "7aafb9b05c5b4f0e96ebd1a42521e70c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655618Z",
                        updatedAt: "2025-05-13T19:50:41.655620Z",
                        publishedAt: "2025-05-13T19:50:41.655622Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "db85cb449b2a40de93c64935e1eeedd7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655631Z",
                        updatedAt: "2025-05-13T19:50:41.655632Z",
                        publishedAt: "2025-05-13T19:50:41.655634Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "90763e428809409fbbb8391e02d2e506",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655640Z",
                        updatedAt: "2025-05-13T19:50:41.655642Z",
                        publishedAt: "2025-05-13T19:50:41.655643Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "3d7c60ae0ee344b8af8db74a45da4002",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655650Z",
                        updatedAt: "2025-05-13T19:50:41.655652Z",
                        publishedAt: "2025-05-13T19:50:41.655653Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "c3a5127625d247b1b63c16c9f2077568",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655660Z",
                        updatedAt: "2025-05-13T19:50:41.655661Z",
                        publishedAt: "2025-05-13T19:50:41.655663Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "71d320e7d0be4946bc58dc82b6f8dfad",
                  code: "MTR-0016",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.763874,
                  longitude: -122.420634,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.655682Z",
                  updatedAt: "2025-05-13T19:50:41.655685Z",
                  publishedAt: "2025-05-13T19:50:41.655688Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "9cbdff629170483795d33de4641eb416",
                    name: "Phillip Wilson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.655927Z",
                    updatedAt: "2025-05-13T19:50:41.655930Z",
                    publishedAt: "2025-05-13T19:50:41.655931Z",
                    ders: [
                      {
                        id: "7409bbe5c30d46d887c4efefed24fd3e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655958Z",
                        updatedAt: "2025-05-13T19:50:41.655959Z",
                        publishedAt: "2025-05-13T19:50:41.655961Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "e7074a24fa544863b1d22afe95ff8497",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655968Z",
                        updatedAt: "2025-05-13T19:50:41.655970Z",
                        publishedAt: "2025-05-13T19:50:41.655971Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "f5f0a26dd1ec4e44a718ae04517bb1bb",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.655985Z",
                        updatedAt: "2025-05-13T19:50:41.655987Z",
                        publishedAt: "2025-05-13T19:50:41.655988Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "c6dde1c79fb2434ea5e28c971c13b384",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656021Z",
                        updatedAt: "2025-05-13T19:50:41.656023Z",
                        publishedAt: "2025-05-13T19:50:41.656024Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "2b7ee919c6bb47a39071229512669245",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656031Z",
                        updatedAt: "2025-05-13T19:50:41.656032Z",
                        publishedAt: "2025-05-13T19:50:41.656034Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "d5fdc01483c94b98b1c638f1095ef08b",
                  code: "MTR-0017",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.781165,
                  longitude: -122.429486,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.656047Z",
                  updatedAt: "2025-05-13T19:50:41.656049Z",
                  publishedAt: "2025-05-13T19:50:41.656050Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "a899d763b89e4c5f8c097fd5f6d2c811",
                    name: "Sara Johnson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.656219Z",
                    updatedAt: "2025-05-13T19:50:41.656221Z",
                    publishedAt: "2025-05-13T19:50:41.656222Z",
                    ders: [
                      {
                        id: "a7ee3616692e4254866947beef8b75de",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656250Z",
                        updatedAt: "2025-05-13T19:50:41.656253Z",
                        publishedAt: "2025-05-13T19:50:41.656255Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "c023558d4286476f85e66f6ca3e78882",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656265Z",
                        updatedAt: "2025-05-13T19:50:41.656266Z",
                        publishedAt: "2025-05-13T19:50:41.656268Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "288b712555354753b08d708ed69e4db0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656275Z",
                        updatedAt: "2025-05-13T19:50:41.656276Z",
                        publishedAt: "2025-05-13T19:50:41.656278Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "df1f611cfcce40769c0e2a4f5e7fac70",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656290Z",
                        updatedAt: "2025-05-13T19:50:41.656291Z",
                        publishedAt: "2025-05-13T19:50:41.656293Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "21f62e6d13de493cb07ab41c5fd987ea",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656408Z",
                        updatedAt: "2025-05-13T19:50:41.656413Z",
                        publishedAt: "2025-05-13T19:50:41.656415Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "c9e02e3ffc974f599ffc4d86c9950347",
                  code: "MTR-0018",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.770944,
                  longitude: -122.371355,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.656473Z",
                  updatedAt: "2025-05-13T19:50:41.656475Z",
                  publishedAt: "2025-05-13T19:50:41.656477Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "fcf1cf70ae07405785f776450ff9a4fd",
                    name: "Brenda Macias",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.656690Z",
                    updatedAt: "2025-05-13T19:50:41.656692Z",
                    publishedAt: "2025-05-13T19:50:41.656694Z",
                    ders: [
                      {
                        id: "91d68c3866004abc828bdaca34ac9075",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656724Z",
                        updatedAt: "2025-05-13T19:50:41.656725Z",
                        publishedAt: "2025-05-13T19:50:41.656727Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "e2d50d27950d47bb981cd8866cf0bee4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656738Z",
                        updatedAt: "2025-05-13T19:50:41.656740Z",
                        publishedAt: "2025-05-13T19:50:41.656743Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "11a5f8bcc1b740698e41ba085c4a815d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656753Z",
                        updatedAt: "2025-05-13T19:50:41.656756Z",
                        publishedAt: "2025-05-13T19:50:41.656759Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "f683993754b64fce86124236551fc1f9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656771Z",
                        updatedAt: "2025-05-13T19:50:41.656774Z",
                        publishedAt: "2025-05-13T19:50:41.656776Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "9e8cbf87a7d44426a0fd44b8b5e212bf",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.656797Z",
                        updatedAt: "2025-05-13T19:50:41.656799Z",
                        publishedAt: "2025-05-13T19:50:41.656802Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "32add293d03046e0b0dc98aff95268f3",
                  code: "MTR-0019",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.798524,
                  longitude: -122.514177,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.656825Z",
                  updatedAt: "2025-05-13T19:50:41.656834Z",
                  publishedAt: "2025-05-13T19:50:41.656836Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "85645df070644507b32bdb5d4a66d102",
                    name: "Mark Burgess",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.657052Z",
                    updatedAt: "2025-05-13T19:50:41.657055Z",
                    publishedAt: "2025-05-13T19:50:41.657056Z",
                    ders: [
                      {
                        id: "a0af4f3e729641ad93d49165cfcf9040",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657087Z",
                        updatedAt: "2025-05-13T19:50:41.657089Z",
                        publishedAt: "2025-05-13T19:50:41.657090Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "2efb7eb298f548e2b403a53dc76e4ea3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657098Z",
                        updatedAt: "2025-05-13T19:50:41.657099Z",
                        publishedAt: "2025-05-13T19:50:41.657101Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "a521d0e5dfdc4339a3ee09dc8b69a0df",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657107Z",
                        updatedAt: "2025-05-13T19:50:41.657109Z",
                        publishedAt: "2025-05-13T19:50:41.657110Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "e0c91baaf8034d4fb219e7ebc49082b1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657117Z",
                        updatedAt: "2025-05-13T19:50:41.657120Z",
                        publishedAt: "2025-05-13T19:50:41.657122Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "07ecadec88d8490cbcd91255cb3ee7ae",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657132Z",
                        updatedAt: "2025-05-13T19:50:41.657135Z",
                        publishedAt: "2025-05-13T19:50:41.657137Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "26004781ce7442a4929d93191e5ba418",
              name: "Transformer_2",
              city: "San Francisco",
              state: "CA",
              latitude: 37.703571,
              longtitude: -122.489972,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.657267Z",
              updatedAt: "2025-05-13T19:50:41.657270Z",
              publishedAt: "2025-05-13T19:50:41.657271Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "4210ad9e718b4dd29602ee018d6645a0",
                  code: "MTR-0020",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.710205,
                  longitude: -122.404028,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.657285Z",
                  updatedAt: "2025-05-13T19:50:41.657286Z",
                  publishedAt: "2025-05-13T19:50:41.657288Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "4babcdfd52744ed48dab47b7fe2070f0",
                    name: "Jocelyn Flores",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.657500Z",
                    updatedAt: "2025-05-13T19:50:41.657503Z",
                    publishedAt: "2025-05-13T19:50:41.657505Z",
                    ders: [
                      {
                        id: "1314fbee48934b9abc8e8ad3f3f1542a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657544Z",
                        updatedAt: "2025-05-13T19:50:41.657550Z",
                        publishedAt: "2025-05-13T19:50:41.657552Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "33ffd5d61dbc442f8310f0a25269d93c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657581Z",
                        updatedAt: "2025-05-13T19:50:41.657582Z",
                        publishedAt: "2025-05-13T19:50:41.657584Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "b0836ac62e2648b1824b86c62f56c5d3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657591Z",
                        updatedAt: "2025-05-13T19:50:41.657592Z",
                        publishedAt: "2025-05-13T19:50:41.657594Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "2d19adfb9a2547db8a2003ab83a9e648",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657600Z",
                        updatedAt: "2025-05-13T19:50:41.657602Z",
                        publishedAt: "2025-05-13T19:50:41.657604Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "16dad12369a649a885464c078e929b3b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657610Z",
                        updatedAt: "2025-05-13T19:50:41.657612Z",
                        publishedAt: "2025-05-13T19:50:41.657613Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "cbf1988af7d8423fbb319c9b86769b6f",
                  code: "MTR-0021",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.792267,
                  longitude: -122.460452,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.657645Z",
                  updatedAt: "2025-05-13T19:50:41.657647Z",
                  publishedAt: "2025-05-13T19:50:41.657648Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "342ce7288c02449493194aea8103f8b7",
                    name: "Lisa Kim",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.657852Z",
                    updatedAt: "2025-05-13T19:50:41.657855Z",
                    publishedAt: "2025-05-13T19:50:41.657858Z",
                    ders: [
                      {
                        id: "6009671787d24112a0027876a529aa62",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657895Z",
                        updatedAt: "2025-05-13T19:50:41.657897Z",
                        publishedAt: "2025-05-13T19:50:41.657899Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "9484c76dd82d475f9442b36dbbb9d621",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657906Z",
                        updatedAt: "2025-05-13T19:50:41.657907Z",
                        publishedAt: "2025-05-13T19:50:41.657909Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "2245435d17934bbdb998f61b2fe97f12",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657915Z",
                        updatedAt: "2025-05-13T19:50:41.657917Z",
                        publishedAt: "2025-05-13T19:50:41.657918Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "cc3ebb0bf37e4ffc93fffbd175f4b02a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657925Z",
                        updatedAt: "2025-05-13T19:50:41.657926Z",
                        publishedAt: "2025-05-13T19:50:41.657927Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "f3bd5ac5510a49f585893f4564ec1dca",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.657934Z",
                        updatedAt: "2025-05-13T19:50:41.657935Z",
                        publishedAt: "2025-05-13T19:50:41.657937Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "f4b75b34140b403ea7d0e4fa210839b4",
                  code: "MTR-0022",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.747529,
                  longitude: -122.373271,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.657950Z",
                  updatedAt: "2025-05-13T19:50:41.657951Z",
                  publishedAt: "2025-05-13T19:50:41.657953Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "69a1f5ba784d4179af5e71039a38aef7",
                    name: "Frank Bailey",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.658122Z",
                    updatedAt: "2025-05-13T19:50:41.658125Z",
                    publishedAt: "2025-05-13T19:50:41.658126Z",
                    ders: [
                      {
                        id: "81d80b757893439b971c1a224ac9a92c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658152Z",
                        updatedAt: "2025-05-13T19:50:41.658154Z",
                        publishedAt: "2025-05-13T19:50:41.658155Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "44377d9a387145beb09bca45f167dd22",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658162Z",
                        updatedAt: "2025-05-13T19:50:41.658163Z",
                        publishedAt: "2025-05-13T19:50:41.658165Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "a61bfd083a2c4ea989d49d3aa046d874",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658171Z",
                        updatedAt: "2025-05-13T19:50:41.658173Z",
                        publishedAt: "2025-05-13T19:50:41.658175Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "f6aa483457434ad48b6df13e63c0c414",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658181Z",
                        updatedAt: "2025-05-13T19:50:41.658182Z",
                        publishedAt: "2025-05-13T19:50:41.658184Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "acaa5e84be184b019d45a6796dcfd689",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658190Z",
                        updatedAt: "2025-05-13T19:50:41.658192Z",
                        publishedAt: "2025-05-13T19:50:41.658193Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "acef49e813734d6eaba3ca8e95f34611",
                  code: "MTR-0023",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.750286,
                  longitude: -122.442099,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.658208Z",
                  updatedAt: "2025-05-13T19:50:41.658210Z",
                  publishedAt: "2025-05-13T19:50:41.658211Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "bc7d902ab28043a6b00ee085f980b29a",
                    name: "Nicole Kim",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.658375Z",
                    updatedAt: "2025-05-13T19:50:41.658378Z",
                    publishedAt: "2025-05-13T19:50:41.658380Z",
                    ders: [
                      {
                        id: "5209f9eed932472a9b2b575d9aac11e6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658407Z",
                        updatedAt: "2025-05-13T19:50:41.658410Z",
                        publishedAt: "2025-05-13T19:50:41.658412Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "13412a5292084dc1a2942e0db1c9f379",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658421Z",
                        updatedAt: "2025-05-13T19:50:41.658424Z",
                        publishedAt: "2025-05-13T19:50:41.658427Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "bc232b6138174a96a9ca62520ecfb035",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658437Z",
                        updatedAt: "2025-05-13T19:50:41.658439Z",
                        publishedAt: "2025-05-13T19:50:41.658442Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "9eca2af2b7fd463db01f44519cca9f31",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658451Z",
                        updatedAt: "2025-05-13T19:50:41.658453Z",
                        publishedAt: "2025-05-13T19:50:41.658455Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "f55bb62d6fe44a508df4d720dd6646b1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658465Z",
                        updatedAt: "2025-05-13T19:50:41.658467Z",
                        publishedAt: "2025-05-13T19:50:41.658469Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "39aa97a3a7504286aedb63c9b6f6cfbd",
                  code: "MTR-0024",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.778064,
                  longitude: -122.424443,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.658499Z",
                  updatedAt: "2025-05-13T19:50:41.658502Z",
                  publishedAt: "2025-05-13T19:50:41.658505Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "d4f5ed0fa2784b50af6e8d548087ff4a",
                    name: "Robert Zavala",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.658723Z",
                    updatedAt: "2025-05-13T19:50:41.658726Z",
                    publishedAt: "2025-05-13T19:50:41.658727Z",
                    ders: [
                      {
                        id: "e8cc673e590743cca2c0aa1e298d521e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658754Z",
                        updatedAt: "2025-05-13T19:50:41.658756Z",
                        publishedAt: "2025-05-13T19:50:41.658757Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "33a82b5ee5364393b8abcaedce573124",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658764Z",
                        updatedAt: "2025-05-13T19:50:41.658766Z",
                        publishedAt: "2025-05-13T19:50:41.658767Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "458a8c1008d840baaf1b745d30957591",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658774Z",
                        updatedAt: "2025-05-13T19:50:41.658776Z",
                        publishedAt: "2025-05-13T19:50:41.658777Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "61174b5f090b473a8611a1881fd4df0c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658788Z",
                        updatedAt: "2025-05-13T19:50:41.658791Z",
                        publishedAt: "2025-05-13T19:50:41.658793Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "e186e0c8e9054c8eafb475590edb6303",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.658803Z",
                        updatedAt: "2025-05-13T19:50:41.658805Z",
                        publishedAt: "2025-05-13T19:50:41.658808Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "5d85d4c136d94fec8215c43fc0f261e4",
                  code: "MTR-0025",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.715477,
                  longitude: -122.510319,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.658835Z",
                  updatedAt: "2025-05-13T19:50:41.658837Z",
                  publishedAt: "2025-05-13T19:50:41.658838Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "24b0785715a64e93a470ed43acd814fa",
                    name: "Dave Marshall",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.658990Z",
                    updatedAt: "2025-05-13T19:50:41.658992Z",
                    publishedAt: "2025-05-13T19:50:41.658993Z",
                    ders: [
                      {
                        id: "9ccbc465350f432a8048627a07a050aa",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659017Z",
                        updatedAt: "2025-05-13T19:50:41.659019Z",
                        publishedAt: "2025-05-13T19:50:41.659020Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "144679b2d58c4228af72347eaa1f5eb9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659028Z",
                        updatedAt: "2025-05-13T19:50:41.659029Z",
                        publishedAt: "2025-05-13T19:50:41.659032Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "216e376d45064b528ad61506b8530d78",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659040Z",
                        updatedAt: "2025-05-13T19:50:41.659043Z",
                        publishedAt: "2025-05-13T19:50:41.659045Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "07b37921d35a44e9beae1200b393c321",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659057Z",
                        updatedAt: "2025-05-13T19:50:41.659059Z",
                        publishedAt: "2025-05-13T19:50:41.659061Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "d8f563d3c3f541bd83614d0a271ded77",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659072Z",
                        updatedAt: "2025-05-13T19:50:41.659074Z",
                        publishedAt: "2025-05-13T19:50:41.659077Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "b47e2b748dc14aee9c671700f5e4f2e7",
                  code: "MTR-0026",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.711289,
                  longitude: -122.396639,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.659106Z",
                  updatedAt: "2025-05-13T19:50:41.659108Z",
                  publishedAt: "2025-05-13T19:50:41.659110Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "90d8074b27ba459bbb69ab9acd32663a",
                    name: "Robert Hudson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.659270Z",
                    updatedAt: "2025-05-13T19:50:41.659272Z",
                    publishedAt: "2025-05-13T19:50:41.659273Z",
                    ders: [
                      {
                        id: "f1e73fe4bcc646aa9e7e0bac9f90a983",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659293Z",
                        updatedAt: "2025-05-13T19:50:41.659295Z",
                        publishedAt: "2025-05-13T19:50:41.659297Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "d5ca7e6a187a4266bd3e21f078cd5a89",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659308Z",
                        updatedAt: "2025-05-13T19:50:41.659311Z",
                        publishedAt: "2025-05-13T19:50:41.659313Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "1a3ac3b4cfc6424b9aef4d762f776f80",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659323Z",
                        updatedAt: "2025-05-13T19:50:41.659324Z",
                        publishedAt: "2025-05-13T19:50:41.659325Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "4af0c1d32a564b92bd22cb9fc27ce966",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659332Z",
                        updatedAt: "2025-05-13T19:50:41.659333Z",
                        publishedAt: "2025-05-13T19:50:41.659335Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "d3fd244268474f809a99d37fd3589ed8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659341Z",
                        updatedAt: "2025-05-13T19:50:41.659342Z",
                        publishedAt: "2025-05-13T19:50:41.659344Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "f35735e9099648ec9a87e4dd1f33a319",
                  code: "MTR-0027",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72958,
                  longitude: -122.361273,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.659364Z",
                  updatedAt: "2025-05-13T19:50:41.659366Z",
                  publishedAt: "2025-05-13T19:50:41.659367Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "5b648ba47fab4713bfe64819019bc43f",
                    name: "Tyler Callahan",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.659514Z",
                    updatedAt: "2025-05-13T19:50:41.659516Z",
                    publishedAt: "2025-05-13T19:50:41.659518Z",
                    ders: [
                      {
                        id: "bcaf5bf7985c497fa471b2bb600b3adb",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659539Z",
                        updatedAt: "2025-05-13T19:50:41.659542Z",
                        publishedAt: "2025-05-13T19:50:41.659544Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "99500d6a497d4307a907f3d87925bea6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659555Z",
                        updatedAt: "2025-05-13T19:50:41.659557Z",
                        publishedAt: "2025-05-13T19:50:41.659560Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "0e75830f8f8b42e9b184ab92fb5c0873",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659570Z",
                        updatedAt: "2025-05-13T19:50:41.659573Z",
                        publishedAt: "2025-05-13T19:50:41.659576Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "b03ec4e1890d4afeb7d5fe2e6bc9da89",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659585Z",
                        updatedAt: "2025-05-13T19:50:41.659588Z",
                        publishedAt: "2025-05-13T19:50:41.659590Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "574be1f21e404e6e81bb581ee70b0d2e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659599Z",
                        updatedAt: "2025-05-13T19:50:41.659600Z",
                        publishedAt: "2025-05-13T19:50:41.659602Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "d8ccdf3dcd0c4441812439a49d351600",
                  code: "MTR-0028",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77851,
                  longitude: -122.393275,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.659617Z",
                  updatedAt: "2025-05-13T19:50:41.659619Z",
                  publishedAt: "2025-05-13T19:50:41.659620Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "449475c0e2104236b10a17d267c63fd8",
                    name: "Valerie Jenkins",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.659788Z",
                    updatedAt: "2025-05-13T19:50:41.659790Z",
                    publishedAt: "2025-05-13T19:50:41.659791Z",
                    ders: [
                      {
                        id: "6b9d5752b9074c5c984e23196368c93b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659830Z",
                        updatedAt: "2025-05-13T19:50:41.659832Z",
                        publishedAt: "2025-05-13T19:50:41.659833Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "66f01d61e4914157acebc3643962106e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659849Z",
                        updatedAt: "2025-05-13T19:50:41.659851Z",
                        publishedAt: "2025-05-13T19:50:41.659852Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "a337bed70b284bb890cb74564b75ea10",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659859Z",
                        updatedAt: "2025-05-13T19:50:41.659860Z",
                        publishedAt: "2025-05-13T19:50:41.659861Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "ea3a4beebd444c359f2e281308930f69",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659868Z",
                        updatedAt: "2025-05-13T19:50:41.659869Z",
                        publishedAt: "2025-05-13T19:50:41.659871Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "a62c5256a608481c8efa95d169db607b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.659878Z",
                        updatedAt: "2025-05-13T19:50:41.659881Z",
                        publishedAt: "2025-05-13T19:50:41.659883Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "02eb27b1ddc24740a1f785517fffc4a6",
                  code: "MTR-0029",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.757895,
                  longitude: -122.45834,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.659914Z",
                  updatedAt: "2025-05-13T19:50:41.659916Z",
                  publishedAt: "2025-05-13T19:50:41.659918Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "348cdd6d496140779fb6e792da00c5b4",
                    name: "Glenn Russell",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.660066Z",
                    updatedAt: "2025-05-13T19:50:41.660068Z",
                    publishedAt: "2025-05-13T19:50:41.660069Z",
                    ders: [
                      {
                        id: "8275836e6c3c4f0d8c4ae0978a1b869d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660089Z",
                        updatedAt: "2025-05-13T19:50:41.660091Z",
                        publishedAt: "2025-05-13T19:50:41.660092Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "54f62bd251fd49dea42fb18c7e25e992",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660099Z",
                        updatedAt: "2025-05-13T19:50:41.660101Z",
                        publishedAt: "2025-05-13T19:50:41.660102Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "67b42c3086364e6daade1daf928dc871",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660109Z",
                        updatedAt: "2025-05-13T19:50:41.660110Z",
                        publishedAt: "2025-05-13T19:50:41.660111Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "178beed7f33c4f09aec0ee9e35d7362a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660122Z",
                        updatedAt: "2025-05-13T19:50:41.660125Z",
                        publishedAt: "2025-05-13T19:50:41.660127Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "dbd000f4060c4678952e753e4b371f17",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660138Z",
                        updatedAt: "2025-05-13T19:50:41.660140Z",
                        publishedAt: "2025-05-13T19:50:41.660142Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "370438f922b5400dbb053a0888b3264f",
              name: "Transformer_3",
              city: "San Francisco",
              state: "CA",
              latitude: 37.792027,
              longtitude: -122.360058,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.660174Z",
              updatedAt: "2025-05-13T19:50:41.660176Z",
              publishedAt: "2025-05-13T19:50:41.660177Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "091cf20020f24e7592cb6273ee2d96c8",
                  code: "MTR-0030",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.733864,
                  longitude: -122.499571,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.660199Z",
                  updatedAt: "2025-05-13T19:50:41.660200Z",
                  publishedAt: "2025-05-13T19:50:41.660202Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "22d82731afb54fefa6a0543f62fba1e0",
                    name: "Kristen Shannon",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.660358Z",
                    updatedAt: "2025-05-13T19:50:41.660360Z",
                    publishedAt: "2025-05-13T19:50:41.660361Z",
                    ders: [
                      {
                        id: "2707feecb2cf410eba667b2e06d0e0b0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660392Z",
                        updatedAt: "2025-05-13T19:50:41.660395Z",
                        publishedAt: "2025-05-13T19:50:41.660399Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "2001228acac64092b7182b5bf12174ea",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660409Z",
                        updatedAt: "2025-05-13T19:50:41.660410Z",
                        publishedAt: "2025-05-13T19:50:41.660411Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "731f295feb1049689851fecbb6e97ab5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660423Z",
                        updatedAt: "2025-05-13T19:50:41.660425Z",
                        publishedAt: "2025-05-13T19:50:41.660426Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "fba84e7701e04e44b46e44d990ffa560",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660434Z",
                        updatedAt: "2025-05-13T19:50:41.660435Z",
                        publishedAt: "2025-05-13T19:50:41.660437Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "4f6fbfc0b2d44990930bd52409189e8f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660451Z",
                        updatedAt: "2025-05-13T19:50:41.660452Z",
                        publishedAt: "2025-05-13T19:50:41.660454Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "4f78320e34844a5ca61fa4691c0e89e0",
                  code: "MTR-0031",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.768206,
                  longitude: -122.43238,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.660466Z",
                  updatedAt: "2025-05-13T19:50:41.660468Z",
                  publishedAt: "2025-05-13T19:50:41.660469Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "b8e867dcb9bb4cfeaf891ecaf9178282",
                    name: "Sean Carter",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.660641Z",
                    updatedAt: "2025-05-13T19:50:41.660644Z",
                    publishedAt: "2025-05-13T19:50:41.660646Z",
                    ders: [
                      {
                        id: "87fcb1c00a084c2f8e68213d1de0a80e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660679Z",
                        updatedAt: "2025-05-13T19:50:41.660681Z",
                        publishedAt: "2025-05-13T19:50:41.660682Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "70c8920c05394d4e942f309687b22be6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660693Z",
                        updatedAt: "2025-05-13T19:50:41.660694Z",
                        publishedAt: "2025-05-13T19:50:41.660696Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "0e2ded2e3f794baea9f0081229edb8e3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660703Z",
                        updatedAt: "2025-05-13T19:50:41.660705Z",
                        publishedAt: "2025-05-13T19:50:41.660706Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "2099eff64a274abb8ffa2eac6d4ef1b0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660713Z",
                        updatedAt: "2025-05-13T19:50:41.660715Z",
                        publishedAt: "2025-05-13T19:50:41.660716Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "c43f30f1fdbe4a00b8782447467abd2a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660725Z",
                        updatedAt: "2025-05-13T19:50:41.660726Z",
                        publishedAt: "2025-05-13T19:50:41.660727Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "14598aee1f7b440fa858e7b7c9f60b3c",
                  code: "MTR-0032",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.768238,
                  longitude: -122.429385,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.660740Z",
                  updatedAt: "2025-05-13T19:50:41.660742Z",
                  publishedAt: "2025-05-13T19:50:41.660745Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "68a88342eb3d40e8afe573468937e7f4",
                    name: "Richard Combs",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.660932Z",
                    updatedAt: "2025-05-13T19:50:41.660935Z",
                    publishedAt: "2025-05-13T19:50:41.660936Z",
                    ders: [
                      {
                        id: "aaf31d898b844e6fa960c91efc418a7c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660964Z",
                        updatedAt: "2025-05-13T19:50:41.660967Z",
                        publishedAt: "2025-05-13T19:50:41.660969Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "5fa1d71d0daf492f931d05995054e718",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660982Z",
                        updatedAt: "2025-05-13T19:50:41.660983Z",
                        publishedAt: "2025-05-13T19:50:41.660985Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "277a8231f31347229964909d568955cd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.660992Z",
                        updatedAt: "2025-05-13T19:50:41.660994Z",
                        publishedAt: "2025-05-13T19:50:41.660996Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "420ecd9909aa4ec7b926824b380119c3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661003Z",
                        updatedAt: "2025-05-13T19:50:41.661005Z",
                        publishedAt: "2025-05-13T19:50:41.661006Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "6751cd560e6945e2ae02811ad68633cd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661014Z",
                        updatedAt: "2025-05-13T19:50:41.661016Z",
                        publishedAt: "2025-05-13T19:50:41.661018Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "96dd95569c1f49ea82c8a6f7b45ed6a6",
                  code: "MTR-0033",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.764967,
                  longitude: -122.441619,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.661037Z",
                  updatedAt: "2025-05-13T19:50:41.661038Z",
                  publishedAt: "2025-05-13T19:50:41.661040Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "edc55e854c434e7685e89c34491372d5",
                    name: "Melissa Stewart",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.661271Z",
                    updatedAt: "2025-05-13T19:50:41.661276Z",
                    publishedAt: "2025-05-13T19:50:41.661278Z",
                    ders: [
                      {
                        id: "fe05abdc6255486a8e8abca8e9e57abc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661315Z",
                        updatedAt: "2025-05-13T19:50:41.661316Z",
                        publishedAt: "2025-05-13T19:50:41.661318Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "d1ca47ad9f1d47779d3d9d0bb0809d55",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661327Z",
                        updatedAt: "2025-05-13T19:50:41.661328Z",
                        publishedAt: "2025-05-13T19:50:41.661330Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "f30868ccb165486999ecbedf57611e02",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661337Z",
                        updatedAt: "2025-05-13T19:50:41.661339Z",
                        publishedAt: "2025-05-13T19:50:41.661340Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "6d6047e951de4957a3bed03aab0c70a5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661347Z",
                        updatedAt: "2025-05-13T19:50:41.661349Z",
                        publishedAt: "2025-05-13T19:50:41.661350Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "4f0bbca764da4e71b5a873d8040d1c75",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661357Z",
                        updatedAt: "2025-05-13T19:50:41.661359Z",
                        publishedAt: "2025-05-13T19:50:41.661360Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "cce29661e7ca4eee9dde77ca685cf5b3",
                  code: "MTR-0034",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.794694,
                  longitude: -122.395027,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.661374Z",
                  updatedAt: "2025-05-13T19:50:41.661375Z",
                  publishedAt: "2025-05-13T19:50:41.661377Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "b53fbe2068bd44fcaa0cc45044640c89",
                    name: "Linda Campbell",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.661583Z",
                    updatedAt: "2025-05-13T19:50:41.661587Z",
                    publishedAt: "2025-05-13T19:50:41.661590Z",
                    ders: [
                      {
                        id: "9c69b2ffda074851bede624b91e51e5c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661625Z",
                        updatedAt: "2025-05-13T19:50:41.661628Z",
                        publishedAt: "2025-05-13T19:50:41.661630Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "c879e2aa39c043a6abb1e09d751d98f0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661664Z",
                        updatedAt: "2025-05-13T19:50:41.661666Z",
                        publishedAt: "2025-05-13T19:50:41.661667Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "d6be274855574c3ca427d831ce7861b4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661676Z",
                        updatedAt: "2025-05-13T19:50:41.661679Z",
                        publishedAt: "2025-05-13T19:50:41.661681Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "af5be9584f1c463c883ecdb827dadae0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661693Z",
                        updatedAt: "2025-05-13T19:50:41.661695Z",
                        publishedAt: "2025-05-13T19:50:41.661698Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "b4d4a8fae98d4e21b07f6f58199484de",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661720Z",
                        updatedAt: "2025-05-13T19:50:41.661724Z",
                        publishedAt: "2025-05-13T19:50:41.661727Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "051de314501d4e9baed96d99e8899da4",
                  code: "MTR-0035",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72795,
                  longitude: -122.444789,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.661770Z",
                  updatedAt: "2025-05-13T19:50:41.661772Z",
                  publishedAt: "2025-05-13T19:50:41.661774Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "a511795de94441e5b8fafc0f7d58dae0",
                    name: "Daryl Collins",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.661951Z",
                    updatedAt: "2025-05-13T19:50:41.661954Z",
                    publishedAt: "2025-05-13T19:50:41.661955Z",
                    ders: [
                      {
                        id: "d36f0fdb42d44680bd5377694dcc4c41",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661988Z",
                        updatedAt: "2025-05-13T19:50:41.661990Z",
                        publishedAt: "2025-05-13T19:50:41.661991Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "f94f087831a043efb532bf351f63fcc1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.661999Z",
                        updatedAt: "2025-05-13T19:50:41.662000Z",
                        publishedAt: "2025-05-13T19:50:41.662002Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "b2105c126d1d4b22bbeaf3c4017dca0d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662017Z",
                        updatedAt: "2025-05-13T19:50:41.662019Z",
                        publishedAt: "2025-05-13T19:50:41.662020Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "1044fa4ed3a34e7181f1a651720a62dc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662029Z",
                        updatedAt: "2025-05-13T19:50:41.662032Z",
                        publishedAt: "2025-05-13T19:50:41.662034Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "2bac519230be4cdaa4c7ae03b70663a4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662164Z",
                        updatedAt: "2025-05-13T19:50:41.662169Z",
                        publishedAt: "2025-05-13T19:50:41.662171Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "fd9638f7c8e34305ad6073027e9eb493",
                  code: "MTR-0036",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.731358,
                  longitude: -122.479109,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.662206Z",
                  updatedAt: "2025-05-13T19:50:41.662208Z",
                  publishedAt: "2025-05-13T19:50:41.662210Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "8eb75814ec974a26bd258bb10b905400",
                    name: "Matthew Wilson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.662391Z",
                    updatedAt: "2025-05-13T19:50:41.662393Z",
                    publishedAt: "2025-05-13T19:50:41.662394Z",
                    ders: [
                      {
                        id: "d7320892e9024c1cb3415dcd6eeaee91",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662422Z",
                        updatedAt: "2025-05-13T19:50:41.662424Z",
                        publishedAt: "2025-05-13T19:50:41.662425Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "591064e2d92d4399973780399652b2cf",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662434Z",
                        updatedAt: "2025-05-13T19:50:41.662436Z",
                        publishedAt: "2025-05-13T19:50:41.662437Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "3c287528e7e649b49c8c1ce7046d840f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662444Z",
                        updatedAt: "2025-05-13T19:50:41.662445Z",
                        publishedAt: "2025-05-13T19:50:41.662447Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "2290be0de3dc49c2839b5edfa47e4808",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662453Z",
                        updatedAt: "2025-05-13T19:50:41.662455Z",
                        publishedAt: "2025-05-13T19:50:41.662456Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "d53b10d88d8e469ab30143ed7137bd03",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662467Z",
                        updatedAt: "2025-05-13T19:50:41.662468Z",
                        publishedAt: "2025-05-13T19:50:41.662470Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "46f8b78900ae431a8e508563d55e9e7e",
                  code: "MTR-0037",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.799195,
                  longitude: -122.406211,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.662493Z",
                  updatedAt: "2025-05-13T19:50:41.662495Z",
                  publishedAt: "2025-05-13T19:50:41.662496Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "b8ba9706d78c462096456572df688829",
                    name: "Jennifer Bowen",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.662660Z",
                    updatedAt: "2025-05-13T19:50:41.662663Z",
                    publishedAt: "2025-05-13T19:50:41.662664Z",
                    ders: [
                      {
                        id: "670d0c3125404dc59218b667f188e117",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662693Z",
                        updatedAt: "2025-05-13T19:50:41.662695Z",
                        publishedAt: "2025-05-13T19:50:41.662696Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "8c1074a69e0444fe9b125069fcc993e4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662706Z",
                        updatedAt: "2025-05-13T19:50:41.662707Z",
                        publishedAt: "2025-05-13T19:50:41.662709Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "116e8fab3b624ab6bbb3796e2636a405",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662716Z",
                        updatedAt: "2025-05-13T19:50:41.662718Z",
                        publishedAt: "2025-05-13T19:50:41.662719Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "2d4e719023b6455c89daad044a79ea5d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662726Z",
                        updatedAt: "2025-05-13T19:50:41.662728Z",
                        publishedAt: "2025-05-13T19:50:41.662729Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "a991f9502eef44719ce1b4482695959b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662736Z",
                        updatedAt: "2025-05-13T19:50:41.662738Z",
                        publishedAt: "2025-05-13T19:50:41.662739Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "fb3ce0a4017047ed86f03047cab4ece9",
                  code: "MTR-0038",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.72873,
                  longitude: -122.378376,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.662764Z",
                  updatedAt: "2025-05-13T19:50:41.662766Z",
                  publishedAt: "2025-05-13T19:50:41.662767Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "fdaf7d497d41414ba7dad09ad00ed203",
                    name: "Richard Johnson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.662914Z",
                    updatedAt: "2025-05-13T19:50:41.662916Z",
                    publishedAt: "2025-05-13T19:50:41.662917Z",
                    ders: [
                      {
                        id: "1b075eb102e44a41bcf849d681c93496",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662948Z",
                        updatedAt: "2025-05-13T19:50:41.662950Z",
                        publishedAt: "2025-05-13T19:50:41.662951Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "ff646e07c4804178981412ec4c2d3105",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662962Z",
                        updatedAt: "2025-05-13T19:50:41.662963Z",
                        publishedAt: "2025-05-13T19:50:41.662965Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "488fe285f2df417a80a8326528614efc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662972Z",
                        updatedAt: "2025-05-13T19:50:41.662973Z",
                        publishedAt: "2025-05-13T19:50:41.662975Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "c49b981a54214aacb042bd412ffcb160",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662989Z",
                        updatedAt: "2025-05-13T19:50:41.662990Z",
                        publishedAt: "2025-05-13T19:50:41.662992Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "6f670103c3b14a8381be64f0604b1fb3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.662999Z",
                        updatedAt: "2025-05-13T19:50:41.663009Z",
                        publishedAt: "2025-05-13T19:50:41.663011Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "77e18676aa0441aebbf2709c5a0514b9",
                  code: "MTR-0039",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.808346,
                  longitude: -122.416599,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.663040Z",
                  updatedAt: "2025-05-13T19:50:41.663042Z",
                  publishedAt: "2025-05-13T19:50:41.663044Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "66ccb905be7d40818ae73bc8c04c0e6e",
                    name: "William Russo",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.663191Z",
                    updatedAt: "2025-05-13T19:50:41.663192Z",
                    publishedAt: "2025-05-13T19:50:41.663203Z",
                    ders: [
                      {
                        id: "8ed92fdda207472386800ce957e95ad7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663232Z",
                        updatedAt: "2025-05-13T19:50:41.663233Z",
                        publishedAt: "2025-05-13T19:50:41.663235Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "539a09cd2bda4d6e9e8ef68eac0b0045",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663242Z",
                        updatedAt: "2025-05-13T19:50:41.663243Z",
                        publishedAt: "2025-05-13T19:50:41.663245Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "8c4b4e7f57884a789b9de826df09ea89",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663252Z",
                        updatedAt: "2025-05-13T19:50:41.663253Z",
                        publishedAt: "2025-05-13T19:50:41.663255Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "3edef288abeb46f897887ac19438e057",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663261Z",
                        updatedAt: "2025-05-13T19:50:41.663263Z",
                        publishedAt: "2025-05-13T19:50:41.663264Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "7fe1511149814a58bb835232afcc8b8a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663271Z",
                        updatedAt: "2025-05-13T19:50:41.663273Z",
                        publishedAt: "2025-05-13T19:50:41.663274Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "56fb0a5753e048ccadcea0f491799a20",
              name: "Transformer_4",
              city: "San Francisco",
              state: "CA",
              latitude: 37.724858,
              longtitude: -122.361113,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.663288Z",
              updatedAt: "2025-05-13T19:50:41.663290Z",
              publishedAt: "2025-05-13T19:50:41.663291Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "f14e4848a9e442e58f8adbe23b170e93",
                  code: "MTR-0040",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.718551,
                  longitude: -122.376609,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.663301Z",
                  updatedAt: "2025-05-13T19:50:41.663303Z",
                  publishedAt: "2025-05-13T19:50:41.663304Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "7800dea7c2b2447c8c7f3be436054242",
                    name: "Misty George",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.663457Z",
                    updatedAt: "2025-05-13T19:50:41.663459Z",
                    publishedAt: "2025-05-13T19:50:41.663460Z",
                    ders: [
                      {
                        id: "58bdd83549ae4e9c84fa01883c1d997f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663483Z",
                        updatedAt: "2025-05-13T19:50:41.663484Z",
                        publishedAt: "2025-05-13T19:50:41.663486Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "1dca56643bc34fafb35d64e710c6b436",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663494Z",
                        updatedAt: "2025-05-13T19:50:41.663495Z",
                        publishedAt: "2025-05-13T19:50:41.663497Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "78700d69675d4f3abe1a84fcf75f3ea0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663503Z",
                        updatedAt: "2025-05-13T19:50:41.663504Z",
                        publishedAt: "2025-05-13T19:50:41.663506Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "76081e05fc694aa3a4e7631127f2df82",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663518Z",
                        updatedAt: "2025-05-13T19:50:41.663520Z",
                        publishedAt: "2025-05-13T19:50:41.663521Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "9bf821b095c8480182e6c1aacc6c0c39",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663602Z",
                        updatedAt: "2025-05-13T19:50:41.663609Z",
                        publishedAt: "2025-05-13T19:50:41.663610Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "c706b59136ae4023a1ccf234a95312b3",
                  code: "MTR-0041",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.748329,
                  longitude: -122.413978,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.663643Z",
                  updatedAt: "2025-05-13T19:50:41.663645Z",
                  publishedAt: "2025-05-13T19:50:41.663646Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "fea59a61d5c6424088eec2f5f8e1e2aa",
                    name: "Mary Fox",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.663878Z",
                    updatedAt: "2025-05-13T19:50:41.663880Z",
                    publishedAt: "2025-05-13T19:50:41.663882Z",
                    ders: [
                      {
                        id: "4071056c519b4167b4f6b4eeacfe354c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663921Z",
                        updatedAt: "2025-05-13T19:50:41.663922Z",
                        publishedAt: "2025-05-13T19:50:41.663924Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "a71d0004f8394519a0a394ed23684779",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663950Z",
                        updatedAt: "2025-05-13T19:50:41.663952Z",
                        publishedAt: "2025-05-13T19:50:41.663955Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "50b20bd7441648bfae9cc8df73f3c7ed",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.663967Z",
                        updatedAt: "2025-05-13T19:50:41.663970Z",
                        publishedAt: "2025-05-13T19:50:41.663972Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "a94af7c53945471fbf49f07f17af32af",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664050Z",
                        updatedAt: "2025-05-13T19:50:41.664054Z",
                        publishedAt: "2025-05-13T19:50:41.664056Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "727a72fbde1a4038bc9862e756ee1136",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664084Z",
                        updatedAt: "2025-05-13T19:50:41.664086Z",
                        publishedAt: "2025-05-13T19:50:41.664087Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "e58e6f88409e4ea0a8abbe36cc19c3ff",
                  code: "MTR-0042",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.705514,
                  longitude: -122.388145,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.664107Z",
                  updatedAt: "2025-05-13T19:50:41.664109Z",
                  publishedAt: "2025-05-13T19:50:41.664110Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "462d3fbcaba04377a6b873a7a49ef617",
                    name: "Victor Walters",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.664339Z",
                    updatedAt: "2025-05-13T19:50:41.664343Z",
                    publishedAt: "2025-05-13T19:50:41.664346Z",
                    ders: [
                      {
                        id: "c92df2ed219a4a0cbb9bb68e20bb2cc3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664428Z",
                        updatedAt: "2025-05-13T19:50:41.664432Z",
                        publishedAt: "2025-05-13T19:50:41.664433Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "0de19e13fc9d4013ad2b3e671e387434",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664457Z",
                        updatedAt: "2025-05-13T19:50:41.664459Z",
                        publishedAt: "2025-05-13T19:50:41.664460Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "036cb221829b462bb2fae24efdb1e802",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664468Z",
                        updatedAt: "2025-05-13T19:50:41.664469Z",
                        publishedAt: "2025-05-13T19:50:41.664471Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "d0909a176e4d434f998661eb79333d7f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664478Z",
                        updatedAt: "2025-05-13T19:50:41.664479Z",
                        publishedAt: "2025-05-13T19:50:41.664481Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "63666c4b306f470eab44a8bf63115fa6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664505Z",
                        updatedAt: "2025-05-13T19:50:41.664507Z",
                        publishedAt: "2025-05-13T19:50:41.664510Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "9d468e5af36a40369cbd9849584adb48",
                  code: "MTR-0043",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.721513,
                  longitude: -122.464696,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.664554Z",
                  updatedAt: "2025-05-13T19:50:41.664555Z",
                  publishedAt: "2025-05-13T19:50:41.664557Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "83c9337504e047b78f8ba497fa1bd9c5",
                    name: "Justin Freeman",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.664859Z",
                    updatedAt: "2025-05-13T19:50:41.664866Z",
                    publishedAt: "2025-05-13T19:50:41.664868Z",
                    ders: [
                      {
                        id: "f324bbfb5e9f43438e2b1a566f5252e8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664919Z",
                        updatedAt: "2025-05-13T19:50:41.664921Z",
                        publishedAt: "2025-05-13T19:50:41.664923Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "ff9851206b714551a5e150154d23b292",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664932Z",
                        updatedAt: "2025-05-13T19:50:41.664934Z",
                        publishedAt: "2025-05-13T19:50:41.664935Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "53a31137eceb471bbe98e71b29edc758",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664943Z",
                        updatedAt: "2025-05-13T19:50:41.664946Z",
                        publishedAt: "2025-05-13T19:50:41.664948Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "a6e70a58cfff48c4be2941a8e5a1596b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664958Z",
                        updatedAt: "2025-05-13T19:50:41.664961Z",
                        publishedAt: "2025-05-13T19:50:41.664964Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "acde0927f68842e08983a920d8755a9f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.664974Z",
                        updatedAt: "2025-05-13T19:50:41.664976Z",
                        publishedAt: "2025-05-13T19:50:41.664979Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "ae2943d5ddd841a2aeac07fefd9dd791",
                  code: "MTR-0044",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.731745,
                  longitude: -122.478942,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.665021Z",
                  updatedAt: "2025-05-13T19:50:41.665024Z",
                  publishedAt: "2025-05-13T19:50:41.665026Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "4ecf7fb5d55e44f396195716fecf4ea0",
                    name: "Fernando Little",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.665330Z",
                    updatedAt: "2025-05-13T19:50:41.665334Z",
                    publishedAt: "2025-05-13T19:50:41.665335Z",
                    ders: [
                      {
                        id: "13197b2f91d246b59a0183c9f6b81ce1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.665377Z",
                        updatedAt: "2025-05-13T19:50:41.665380Z",
                        publishedAt: "2025-05-13T19:50:41.665382Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "02d5d0422965459c86e251a83e2eda7a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.665415Z",
                        updatedAt: "2025-05-13T19:50:41.665419Z",
                        publishedAt: "2025-05-13T19:50:41.665421Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "77d62b2762d94818b497473103d0ac3b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.665445Z",
                        updatedAt: "2025-05-13T19:50:41.665446Z",
                        publishedAt: "2025-05-13T19:50:41.665448Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "dea69349f3744c15b13c945984aece13",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.665482Z",
                        updatedAt: "2025-05-13T19:50:41.665484Z",
                        publishedAt: "2025-05-13T19:50:41.665485Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "96b9f7bb6ce848cca9ec373df623e25a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.665494Z",
                        updatedAt: "2025-05-13T19:50:41.665496Z",
                        publishedAt: "2025-05-13T19:50:41.665497Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "2a0fb311f5ed400c84c6b7dbfd60270b",
                  code: "MTR-0045",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.722179,
                  longitude: -122.413991,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.665524Z",
                  updatedAt: "2025-05-13T19:50:41.665526Z",
                  publishedAt: "2025-05-13T19:50:41.665527Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "e3c0674fcb204a42aa13bed4f74a5820",
                    name: "Erin Murphy",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.665937Z",
                    updatedAt: "2025-05-13T19:50:41.665945Z",
                    publishedAt: "2025-05-13T19:50:41.665948Z",
                    ders: [
                      {
                        id: "ddfeae68dbd9431d83187b6309415ab3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.665990Z",
                        updatedAt: "2025-05-13T19:50:41.665992Z",
                        publishedAt: "2025-05-13T19:50:41.665995Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "24e87e2ef9d04cf39b732b5dc4f48213",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666008Z",
                        updatedAt: "2025-05-13T19:50:41.666011Z",
                        publishedAt: "2025-05-13T19:50:41.666013Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "eec89c3e5df74428a7e0116762d9f72b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666047Z",
                        updatedAt: "2025-05-13T19:50:41.666050Z",
                        publishedAt: "2025-05-13T19:50:41.666053Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "2fb1bb2d404445578da341be51643ca0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666064Z",
                        updatedAt: "2025-05-13T19:50:41.666066Z",
                        publishedAt: "2025-05-13T19:50:41.666068Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "26c09f44e06e46b0a8ee57fd937efb9b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666075Z",
                        updatedAt: "2025-05-13T19:50:41.666077Z",
                        publishedAt: "2025-05-13T19:50:41.666078Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "fb027e123f97465d9fb82c9fb5be9490",
                  code: "MTR-0046",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.725445,
                  longitude: -122.469619,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.666110Z",
                  updatedAt: "2025-05-13T19:50:41.666113Z",
                  publishedAt: "2025-05-13T19:50:41.666115Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "391ef2dc0ceb44d0a788c22ba7743ed4",
                    name: "Eric Hall",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.666407Z",
                    updatedAt: "2025-05-13T19:50:41.666412Z",
                    publishedAt: "2025-05-13T19:50:41.666413Z",
                    ders: [
                      {
                        id: "74240ed6a10b4506a7f8c1879c196546",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666444Z",
                        updatedAt: "2025-05-13T19:50:41.666446Z",
                        publishedAt: "2025-05-13T19:50:41.666447Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "3fc4402c34e4413aac45ab4a0d3d6186",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666468Z",
                        updatedAt: "2025-05-13T19:50:41.666469Z",
                        publishedAt: "2025-05-13T19:50:41.666471Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "4aa54f45896e4cfd8b6add6f3ca9bd8c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666477Z",
                        updatedAt: "2025-05-13T19:50:41.666479Z",
                        publishedAt: "2025-05-13T19:50:41.666481Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "add8415a4b4b4f93bd627327a85d19f0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666494Z",
                        updatedAt: "2025-05-13T19:50:41.666495Z",
                        publishedAt: "2025-05-13T19:50:41.666497Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "9eaaded0743e4341a71c56460be3007b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666503Z",
                        updatedAt: "2025-05-13T19:50:41.666505Z",
                        publishedAt: "2025-05-13T19:50:41.666506Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "114503cefee44875b20d034e0bf0ce59",
                  code: "MTR-0047",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.768221,
                  longitude: -122.42578,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.666526Z",
                  updatedAt: "2025-05-13T19:50:41.666529Z",
                  publishedAt: "2025-05-13T19:50:41.666531Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "d56bb65643ae41018dd31ac963077848",
                    name: "Nicole Dudley",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.666722Z",
                    updatedAt: "2025-05-13T19:50:41.666725Z",
                    publishedAt: "2025-05-13T19:50:41.666726Z",
                    ders: [
                      {
                        id: "51fb4e3065bc457184d523d92c7c6ecf",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666753Z",
                        updatedAt: "2025-05-13T19:50:41.666755Z",
                        publishedAt: "2025-05-13T19:50:41.666757Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "22eac6600fc6403dbfdee359bb0314ac",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666764Z",
                        updatedAt: "2025-05-13T19:50:41.666766Z",
                        publishedAt: "2025-05-13T19:50:41.666767Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "bccc02f73be742069c6e469d2b836876",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666774Z",
                        updatedAt: "2025-05-13T19:50:41.666776Z",
                        publishedAt: "2025-05-13T19:50:41.666777Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "ec4351c7b8f24358997eb151861f66f8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666784Z",
                        updatedAt: "2025-05-13T19:50:41.666785Z",
                        publishedAt: "2025-05-13T19:50:41.666786Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "823daa613a604273a71f1a0864ba0ad2",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.666793Z",
                        updatedAt: "2025-05-13T19:50:41.666795Z",
                        publishedAt: "2025-05-13T19:50:41.666796Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "d86e43c9558f40d7b192d56c297b86da",
                  code: "MTR-0048",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.801651,
                  longitude: -122.449077,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.666837Z",
                  updatedAt: "2025-05-13T19:50:41.666839Z",
                  publishedAt: "2025-05-13T19:50:41.666840Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "a5d896137442451bbcf05c246d94510b",
                    name: "Darrell Arellano",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.667002Z",
                    updatedAt: "2025-05-13T19:50:41.667003Z",
                    publishedAt: "2025-05-13T19:50:41.667005Z",
                    ders: [
                      {
                        id: "f24cda84b5924a4f92b88828e08da5b4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667035Z",
                        updatedAt: "2025-05-13T19:50:41.667036Z",
                        publishedAt: "2025-05-13T19:50:41.667038Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "2bc8a0876d2a4f3ab46a69dc491088f4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667045Z",
                        updatedAt: "2025-05-13T19:50:41.667047Z",
                        publishedAt: "2025-05-13T19:50:41.667048Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "63f86eaaee0f4a9d8b3e6d71be802a7a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667055Z",
                        updatedAt: "2025-05-13T19:50:41.667056Z",
                        publishedAt: "2025-05-13T19:50:41.667058Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "761081494c5640f4a5478ff356cf7d8f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667064Z",
                        updatedAt: "2025-05-13T19:50:41.667065Z",
                        publishedAt: "2025-05-13T19:50:41.667067Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "029a9049865b440aaaa7d54d33772f64",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667075Z",
                        updatedAt: "2025-05-13T19:50:41.667076Z",
                        publishedAt: "2025-05-13T19:50:41.667077Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "6bfaee3fac28457da5fbdf1d53d02580",
                  code: "MTR-0049",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.778026,
                  longitude: -122.496121,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.667119Z",
                  updatedAt: "2025-05-13T19:50:41.667121Z",
                  publishedAt: "2025-05-13T19:50:41.667122Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "be815a40ddbe41918ec530059d0c648f",
                    name: "Ann Adams",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.667293Z",
                    updatedAt: "2025-05-13T19:50:41.667295Z",
                    publishedAt: "2025-05-13T19:50:41.667297Z",
                    ders: [
                      {
                        id: "db12cf971f164044b14ec4753f93c1be",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667326Z",
                        updatedAt: "2025-05-13T19:50:41.667327Z",
                        publishedAt: "2025-05-13T19:50:41.667329Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "b1e1cd96a8a34867bdeaecc9b8d4ef6e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667358Z",
                        updatedAt: "2025-05-13T19:50:41.667360Z",
                        publishedAt: "2025-05-13T19:50:41.667361Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "4286e6b49422455081a43da9aaadba0c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667368Z",
                        updatedAt: "2025-05-13T19:50:41.667369Z",
                        publishedAt: "2025-05-13T19:50:41.667371Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "1f977b74567f4e9d8b2ab96e99d4b1f6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667377Z",
                        updatedAt: "2025-05-13T19:50:41.667379Z",
                        publishedAt: "2025-05-13T19:50:41.667380Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "4461947534eb405db2432d49fdfe99a5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667386Z",
                        updatedAt: "2025-05-13T19:50:41.667388Z",
                        publishedAt: "2025-05-13T19:50:41.667389Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
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
          id: "0140380d5217460b9de4eb62f3471ebf",
          name: "SF Sunset Substation",
          city: "San Francisco",
          state: "CA",
          latitude: 37.775348,
          longtitude: -122.369785,
          pincode: "94103",
          createdAt: "2025-05-13T19:50:41.667405Z",
          updatedAt: "2025-05-13T19:50:41.667406Z",
          publishedAt: "2025-05-13T19:50:41.667408Z",
          max_capacity_KW: 1000,
          transformers: [
            {
              id: "6b464051229548a5a8364a7169fe1788",
              name: "Transformer_5",
              city: "San Francisco",
              state: "CA",
              latitude: 37.77403,
              longtitude: -122.482047,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.667419Z",
              updatedAt: "2025-05-13T19:50:41.667421Z",
              publishedAt: "2025-05-13T19:50:41.667422Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "f227f6f5ac8844b98c2776f6606b389d",
                  code: "MTR-0050",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.729465,
                  longitude: -122.410838,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.667432Z",
                  updatedAt: "2025-05-13T19:50:41.667433Z",
                  publishedAt: "2025-05-13T19:50:41.667434Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "70c757f124e14db59078241fb2f9882b",
                    name: "Joe House",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.667581Z",
                    updatedAt: "2025-05-13T19:50:41.667583Z",
                    publishedAt: "2025-05-13T19:50:41.667584Z",
                    ders: [
                      {
                        id: "55c32735e0c046c5be51b280fb608eab",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667615Z",
                        updatedAt: "2025-05-13T19:50:41.667617Z",
                        publishedAt: "2025-05-13T19:50:41.667618Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "d8b56c622ba948c48dc0c0e544a6c19d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667626Z",
                        updatedAt: "2025-05-13T19:50:41.667627Z",
                        publishedAt: "2025-05-13T19:50:41.667630Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "0f06b37de710451ca5a4dc793316e8c8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667637Z",
                        updatedAt: "2025-05-13T19:50:41.667638Z",
                        publishedAt: "2025-05-13T19:50:41.667639Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "fa7e0f65a35a44dfba7ed3883527b742",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667646Z",
                        updatedAt: "2025-05-13T19:50:41.667648Z",
                        publishedAt: "2025-05-13T19:50:41.667649Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "08107400522f4b4e9d43eafcc5b8ca2f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667656Z",
                        updatedAt: "2025-05-13T19:50:41.667657Z",
                        publishedAt: "2025-05-13T19:50:41.667659Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "4aa691f2936b469c8a2bdfb2c91f55f9",
                  code: "MTR-0051",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.733473,
                  longitude: -122.417099,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.667669Z",
                  updatedAt: "2025-05-13T19:50:41.667671Z",
                  publishedAt: "2025-05-13T19:50:41.667672Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "fb1ddb228efb4952aa827dfcc004aa65",
                    name: "David Velazquez",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.667816Z",
                    updatedAt: "2025-05-13T19:50:41.667818Z",
                    publishedAt: "2025-05-13T19:50:41.667819Z",
                    ders: [
                      {
                        id: "42f7231a17df4b999d53bb5e20d26856",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667842Z",
                        updatedAt: "2025-05-13T19:50:41.667843Z",
                        publishedAt: "2025-05-13T19:50:41.667845Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "f0c63b0b940f4ac58960071961cadd89",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667851Z",
                        updatedAt: "2025-05-13T19:50:41.667853Z",
                        publishedAt: "2025-05-13T19:50:41.667854Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "86e61db51ff84d83b24123f2ff706e51",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667861Z",
                        updatedAt: "2025-05-13T19:50:41.667862Z",
                        publishedAt: "2025-05-13T19:50:41.667864Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "aac77f075a9043f698c4dab72bf95388",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667870Z",
                        updatedAt: "2025-05-13T19:50:41.667872Z",
                        publishedAt: "2025-05-13T19:50:41.667873Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "fe795b14a4f34ab796d5ba7656d443e8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.667880Z",
                        updatedAt: "2025-05-13T19:50:41.667881Z",
                        publishedAt: "2025-05-13T19:50:41.667883Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "50aa8a1ef4fd4bb4a74d18d51c4c3349",
                  code: "MTR-0052",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.737782,
                  longitude: -122.390672,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.667894Z",
                  updatedAt: "2025-05-13T19:50:41.667896Z",
                  publishedAt: "2025-05-13T19:50:41.667897Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "c7527b9af172453f82ec0688bb54b70b",
                    name: "Rhonda Ford",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.668056Z",
                    updatedAt: "2025-05-13T19:50:41.668058Z",
                    publishedAt: "2025-05-13T19:50:41.668059Z",
                    ders: [
                      {
                        id: "843307a0f69041da8033ec62046b50b9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668081Z",
                        updatedAt: "2025-05-13T19:50:41.668082Z",
                        publishedAt: "2025-05-13T19:50:41.668084Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "ee71a2dfc71d48818e90c25c865812af",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668093Z",
                        updatedAt: "2025-05-13T19:50:41.668095Z",
                        publishedAt: "2025-05-13T19:50:41.668096Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "39ea85fbd2364aa19c0085c954f550c5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668108Z",
                        updatedAt: "2025-05-13T19:50:41.668110Z",
                        publishedAt: "2025-05-13T19:50:41.668111Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "6b04c4c2016d4337936d8a091f18eb9e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668125Z",
                        updatedAt: "2025-05-13T19:50:41.668126Z",
                        publishedAt: "2025-05-13T19:50:41.668128Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "f657406c769142d392e797528ad5a580",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668134Z",
                        updatedAt: "2025-05-13T19:50:41.668136Z",
                        publishedAt: "2025-05-13T19:50:41.668137Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "e3ce946448754f2d97891a29a13d18a3",
                  code: "MTR-0053",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.722791,
                  longitude: -122.517429,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.668170Z",
                  updatedAt: "2025-05-13T19:50:41.668171Z",
                  publishedAt: "2025-05-13T19:50:41.668173Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "5d8bf89db8f24194b8a70e19d85997f0",
                    name: "Gabrielle Day",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.668336Z",
                    updatedAt: "2025-05-13T19:50:41.668338Z",
                    publishedAt: "2025-05-13T19:50:41.668339Z",
                    ders: [
                      {
                        id: "02729b0ec66f4964838a0b20fc560ea1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668364Z",
                        updatedAt: "2025-05-13T19:50:41.668366Z",
                        publishedAt: "2025-05-13T19:50:41.668367Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "d17b685cbc614c428cb58ac2d79855f0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668383Z",
                        updatedAt: "2025-05-13T19:50:41.668384Z",
                        publishedAt: "2025-05-13T19:50:41.668385Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "9e77ba394a0f4392941554df104d146f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668401Z",
                        updatedAt: "2025-05-13T19:50:41.668402Z",
                        publishedAt: "2025-05-13T19:50:41.668404Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "5fd30c77ab8b4c5094849689d47200ce",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668413Z",
                        updatedAt: "2025-05-13T19:50:41.668414Z",
                        publishedAt: "2025-05-13T19:50:41.668415Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "fd499fe1b3c64bd08146f02311768d26",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668425Z",
                        updatedAt: "2025-05-13T19:50:41.668426Z",
                        publishedAt: "2025-05-13T19:50:41.668427Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "2f0d42c4cf2544d1bb25372211986247",
                  code: "MTR-0054",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.711675,
                  longitude: -122.405351,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.668439Z",
                  updatedAt: "2025-05-13T19:50:41.668441Z",
                  publishedAt: "2025-05-13T19:50:41.668442Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "882b6a2fccbb48a8ab62502319c6b160",
                    name: "Maxwell Thomas",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.668585Z",
                    updatedAt: "2025-05-13T19:50:41.668586Z",
                    publishedAt: "2025-05-13T19:50:41.668588Z",
                    ders: [
                      {
                        id: "2baf615397bd48b0b87ee2b27aa74cfd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668611Z",
                        updatedAt: "2025-05-13T19:50:41.668612Z",
                        publishedAt: "2025-05-13T19:50:41.668614Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "8b6475a733fd4ab19d32bf3f92a0f745",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668620Z",
                        updatedAt: "2025-05-13T19:50:41.668622Z",
                        publishedAt: "2025-05-13T19:50:41.668623Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "c2bd334444124809b401b3f42ab0b421",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668630Z",
                        updatedAt: "2025-05-13T19:50:41.668631Z",
                        publishedAt: "2025-05-13T19:50:41.668632Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "df99c1fa14514cb59ba8a9a7d7c2359d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668639Z",
                        updatedAt: "2025-05-13T19:50:41.668640Z",
                        publishedAt: "2025-05-13T19:50:41.668642Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "78f2e507317b4cb281ec219d1c5b2dcf",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668648Z",
                        updatedAt: "2025-05-13T19:50:41.668650Z",
                        publishedAt: "2025-05-13T19:50:41.668651Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "f50bccb039a64652a62a36b0a99833fe",
                  code: "MTR-0055",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.748737,
                  longitude: -122.423554,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.668661Z",
                  updatedAt: "2025-05-13T19:50:41.668663Z",
                  publishedAt: "2025-05-13T19:50:41.668664Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "95be23ad282142048b5e8a7e6ba1016b",
                    name: "Jose Berg",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.668806Z",
                    updatedAt: "2025-05-13T19:50:41.668808Z",
                    publishedAt: "2025-05-13T19:50:41.668809Z",
                    ders: [
                      {
                        id: "2d78f79c7d4d44f685517f69927651ef",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668837Z",
                        updatedAt: "2025-05-13T19:50:41.668838Z",
                        publishedAt: "2025-05-13T19:50:41.668840Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "c914e2e006da4e1695918717fcffa554",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668847Z",
                        updatedAt: "2025-05-13T19:50:41.668848Z",
                        publishedAt: "2025-05-13T19:50:41.668850Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "6521b81eea4b4d72a373eaec008f5dee",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668856Z",
                        updatedAt: "2025-05-13T19:50:41.668857Z",
                        publishedAt: "2025-05-13T19:50:41.668859Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "f3aae1608a3c4223917de7b8abb02340",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668866Z",
                        updatedAt: "2025-05-13T19:50:41.668868Z",
                        publishedAt: "2025-05-13T19:50:41.668869Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "000365776df54ac1b424904fff5ed33d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.668877Z",
                        updatedAt: "2025-05-13T19:50:41.668878Z",
                        publishedAt: "2025-05-13T19:50:41.668880Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "a831295e342e4a5a8f876d21e41963a3",
                  code: "MTR-0056",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.707237,
                  longitude: -122.423701,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.668891Z",
                  updatedAt: "2025-05-13T19:50:41.668892Z",
                  publishedAt: "2025-05-13T19:50:41.668893Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "706a15fcb61f4a3e9f6c550d760cab7e",
                    name: "Jeffrey Holden",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.669035Z",
                    updatedAt: "2025-05-13T19:50:41.669037Z",
                    publishedAt: "2025-05-13T19:50:41.669038Z",
                    ders: [
                      {
                        id: "3bc04124b4c246c58aadf93e9f917351",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669059Z",
                        updatedAt: "2025-05-13T19:50:41.669060Z",
                        publishedAt: "2025-05-13T19:50:41.669062Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "84228c6ed0314fada41934e1a52eb42d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669073Z",
                        updatedAt: "2025-05-13T19:50:41.669074Z",
                        publishedAt: "2025-05-13T19:50:41.669076Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "06bfff013ca941bfb224b9ea6e1f5c3f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669092Z",
                        updatedAt: "2025-05-13T19:50:41.669093Z",
                        publishedAt: "2025-05-13T19:50:41.669095Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "4d6462ba94994487abd8a3a5c8ba0157",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669107Z",
                        updatedAt: "2025-05-13T19:50:41.669109Z",
                        publishedAt: "2025-05-13T19:50:41.669110Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "c218518ae93448f8ad126e70928bba40",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669116Z",
                        updatedAt: "2025-05-13T19:50:41.669118Z",
                        publishedAt: "2025-05-13T19:50:41.669119Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "5fc7bd254e344ba19df55821b17e8697",
                  code: "MTR-0057",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.766108,
                  longitude: -122.487406,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.669140Z",
                  updatedAt: "2025-05-13T19:50:41.669142Z",
                  publishedAt: "2025-05-13T19:50:41.669143Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "9c58f8209dfb45e4a4b3cdd727acd62f",
                    name: "Deborah Casey",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.669399Z",
                    updatedAt: "2025-05-13T19:50:41.669403Z",
                    publishedAt: "2025-05-13T19:50:41.669404Z",
                    ders: [
                      {
                        id: "c15e61d8b22d49a598b39f33048b4383",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669443Z",
                        updatedAt: "2025-05-13T19:50:41.669445Z",
                        publishedAt: "2025-05-13T19:50:41.669446Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "ae6b5d12f77b4847b69eb09143abc486",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669470Z",
                        updatedAt: "2025-05-13T19:50:41.669471Z",
                        publishedAt: "2025-05-13T19:50:41.669473Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "bf0e2a12c64843feb350ff3c1990bff1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669479Z",
                        updatedAt: "2025-05-13T19:50:41.669481Z",
                        publishedAt: "2025-05-13T19:50:41.669482Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "bbd573eae55e47c095e7bc7c26ca5e25",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669493Z",
                        updatedAt: "2025-05-13T19:50:41.669494Z",
                        publishedAt: "2025-05-13T19:50:41.669495Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "17e1d04b728a4431a110c439bba2239c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669503Z",
                        updatedAt: "2025-05-13T19:50:41.669504Z",
                        publishedAt: "2025-05-13T19:50:41.669506Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "aeef2ac9ff5f417f8b741effd7e64099",
                  code: "MTR-0058",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.728513,
                  longitude: -122.43442,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.669521Z",
                  updatedAt: "2025-05-13T19:50:41.669523Z",
                  publishedAt: "2025-05-13T19:50:41.669524Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "1f139fe8a0d04cd88134589e4acf0268",
                    name: "Michael Owens",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.669683Z",
                    updatedAt: "2025-05-13T19:50:41.669684Z",
                    publishedAt: "2025-05-13T19:50:41.669686Z",
                    ders: [
                      {
                        id: "c7589181a91a4024995bf9c0c73380c6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669721Z",
                        updatedAt: "2025-05-13T19:50:41.669722Z",
                        publishedAt: "2025-05-13T19:50:41.669724Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "707815b0b63c478194c93bd422532f85",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669731Z",
                        updatedAt: "2025-05-13T19:50:41.669732Z",
                        publishedAt: "2025-05-13T19:50:41.669734Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "1bceaf215f5948899cb80e1ee7ac3273",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669740Z",
                        updatedAt: "2025-05-13T19:50:41.669742Z",
                        publishedAt: "2025-05-13T19:50:41.669743Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "bb896fcc71fc44f88bffc6f11644d984",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669751Z",
                        updatedAt: "2025-05-13T19:50:41.669752Z",
                        publishedAt: "2025-05-13T19:50:41.669754Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "7c56130bf1e64fb8bf34b0053ac0746d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669761Z",
                        updatedAt: "2025-05-13T19:50:41.669762Z",
                        publishedAt: "2025-05-13T19:50:41.669763Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "e841f52b2b2a48de86498eac8fdbbc31",
                  code: "MTR-0059",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.728517,
                  longitude: -122.400901,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.669775Z",
                  updatedAt: "2025-05-13T19:50:41.669777Z",
                  publishedAt: "2025-05-13T19:50:41.669778Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "8a199a4c67904d7d931469ba10b00640",
                    name: "Brenda Ross",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.669927Z",
                    updatedAt: "2025-05-13T19:50:41.669928Z",
                    publishedAt: "2025-05-13T19:50:41.669930Z",
                    ders: [
                      {
                        id: "d1578e7867f24ef4b1e45fe4230e863c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669958Z",
                        updatedAt: "2025-05-13T19:50:41.669959Z",
                        publishedAt: "2025-05-13T19:50:41.669961Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "6aa401210ef748feaf90f9b746387988",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669968Z",
                        updatedAt: "2025-05-13T19:50:41.669970Z",
                        publishedAt: "2025-05-13T19:50:41.669971Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "5358a7142a4d40ada3a4f34598bf8655",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669978Z",
                        updatedAt: "2025-05-13T19:50:41.669979Z",
                        publishedAt: "2025-05-13T19:50:41.669980Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "c32b6f1ecd6b40c0b5f1c58624a523dc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669987Z",
                        updatedAt: "2025-05-13T19:50:41.669988Z",
                        publishedAt: "2025-05-13T19:50:41.669989Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "a9eeabdd9bff488d8424e8a0360f6b44",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.669998Z",
                        updatedAt: "2025-05-13T19:50:41.670001Z",
                        publishedAt: "2025-05-13T19:50:41.670002Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "e0bb81b14a0246a19dd97b891546dc15",
              name: "Transformer_6",
              city: "San Francisco",
              state: "CA",
              latitude: 37.759299,
              longtitude: -122.503711,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.670021Z",
              updatedAt: "2025-05-13T19:50:41.670023Z",
              publishedAt: "2025-05-13T19:50:41.670024Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "dbd43ccddc9b4c0085f2d733b4d09f11",
                  code: "MTR-0060",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.78661,
                  longitude: -122.503786,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.670034Z",
                  updatedAt: "2025-05-13T19:50:41.670036Z",
                  publishedAt: "2025-05-13T19:50:41.670038Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "e6eaf8ede9f64f3c8e02c4fbb2e59ccb",
                    name: "Spencer Perry",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.670185Z",
                    updatedAt: "2025-05-13T19:50:41.670187Z",
                    publishedAt: "2025-05-13T19:50:41.670189Z",
                    ders: [
                      {
                        id: "66968635d830437ea91614dca961c37d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670214Z",
                        updatedAt: "2025-05-13T19:50:41.670215Z",
                        publishedAt: "2025-05-13T19:50:41.670217Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "d2c4e1be1ebd4762bf1bf65cbf4a438c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670224Z",
                        updatedAt: "2025-05-13T19:50:41.670226Z",
                        publishedAt: "2025-05-13T19:50:41.670227Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "bc11bdc2b8a64d1395b0187ff1299759",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670233Z",
                        updatedAt: "2025-05-13T19:50:41.670235Z",
                        publishedAt: "2025-05-13T19:50:41.670236Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "7ba29bf2bf764f5ea74968f48a1db152",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670243Z",
                        updatedAt: "2025-05-13T19:50:41.670244Z",
                        publishedAt: "2025-05-13T19:50:41.670245Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "c24a97de4fd942dda8f82b2c5cb030cf",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670252Z",
                        updatedAt: "2025-05-13T19:50:41.670253Z",
                        publishedAt: "2025-05-13T19:50:41.670254Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "486c9bb8e88640328355f3e6445de134",
                  code: "MTR-0061",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73827,
                  longitude: -122.470045,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.670265Z",
                  updatedAt: "2025-05-13T19:50:41.670266Z",
                  publishedAt: "2025-05-13T19:50:41.670268Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "9dee252d232242e1b60bde84fd8a2cf3",
                    name: "Jacqueline Owen",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.670418Z",
                    updatedAt: "2025-05-13T19:50:41.670420Z",
                    publishedAt: "2025-05-13T19:50:41.670421Z",
                    ders: [
                      {
                        id: "6bd8c17f36f5427d87dcb418afedddae",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670457Z",
                        updatedAt: "2025-05-13T19:50:41.670459Z",
                        publishedAt: "2025-05-13T19:50:41.670460Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "7af136ca7012464ca71758ef08b583a3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670477Z",
                        updatedAt: "2025-05-13T19:50:41.670478Z",
                        publishedAt: "2025-05-13T19:50:41.670480Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "ef12a2cd261e49ab853f1ad4c8ce1352",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670486Z",
                        updatedAt: "2025-05-13T19:50:41.670488Z",
                        publishedAt: "2025-05-13T19:50:41.670489Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "3b86414945e6433fa10c82eeab3701c2",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670496Z",
                        updatedAt: "2025-05-13T19:50:41.670497Z",
                        publishedAt: "2025-05-13T19:50:41.670498Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "f157e3bace924a83b31590060842f61d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670505Z",
                        updatedAt: "2025-05-13T19:50:41.670506Z",
                        publishedAt: "2025-05-13T19:50:41.670507Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "77d886e6acdb46c093318a18961cf3ab",
                  code: "MTR-0062",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.798342,
                  longitude: -122.405677,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.670519Z",
                  updatedAt: "2025-05-13T19:50:41.670521Z",
                  publishedAt: "2025-05-13T19:50:41.670522Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "416632f4b846499faeead1b15de1e5f6",
                    name: "Holly Hall",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.670672Z",
                    updatedAt: "2025-05-13T19:50:41.670673Z",
                    publishedAt: "2025-05-13T19:50:41.670675Z",
                    ders: [
                      {
                        id: "ad593563282f4217be8d2e05f75985f7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670711Z",
                        updatedAt: "2025-05-13T19:50:41.670713Z",
                        publishedAt: "2025-05-13T19:50:41.670714Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "6c661ecf313c4765be32484d29c494c9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670722Z",
                        updatedAt: "2025-05-13T19:50:41.670723Z",
                        publishedAt: "2025-05-13T19:50:41.670725Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "1bebb8adff3b45b5ac88331d468335e6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670732Z",
                        updatedAt: "2025-05-13T19:50:41.670733Z",
                        publishedAt: "2025-05-13T19:50:41.670735Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "9d57a7da9c1145a4b122af00ffc09bc0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670745Z",
                        updatedAt: "2025-05-13T19:50:41.670746Z",
                        publishedAt: "2025-05-13T19:50:41.670747Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "4f6f6973c0954b16ba19586fdb10df1a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670754Z",
                        updatedAt: "2025-05-13T19:50:41.670756Z",
                        publishedAt: "2025-05-13T19:50:41.670757Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "c993c1a9ae63403ba14c2227a4459f19",
                  code: "MTR-0063",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.770942,
                  longitude: -122.423512,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.670768Z",
                  updatedAt: "2025-05-13T19:50:41.670769Z",
                  publishedAt: "2025-05-13T19:50:41.670770Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "b16a7b99c7ef40c293665afc32438ef1",
                    name: "Steven Lynch",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.670913Z",
                    updatedAt: "2025-05-13T19:50:41.670915Z",
                    publishedAt: "2025-05-13T19:50:41.670916Z",
                    ders: [
                      {
                        id: "8c817b24e6cf42038a1367b70ab83d56",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670962Z",
                        updatedAt: "2025-05-13T19:50:41.670964Z",
                        publishedAt: "2025-05-13T19:50:41.670965Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "e413012140804b1baccba9f80d0941a0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670987Z",
                        updatedAt: "2025-05-13T19:50:41.670989Z",
                        publishedAt: "2025-05-13T19:50:41.670990Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "1a8d1dba48ba42c4a582371c3a5d3060",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.670998Z",
                        updatedAt: "2025-05-13T19:50:41.671000Z",
                        publishedAt: "2025-05-13T19:50:41.671001Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "f07d9b4fb139489ca5b8d53d81e8831b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671008Z",
                        updatedAt: "2025-05-13T19:50:41.671010Z",
                        publishedAt: "2025-05-13T19:50:41.671011Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "f4159c8a23af4ababe1fb8202eb2a350",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671020Z",
                        updatedAt: "2025-05-13T19:50:41.671022Z",
                        publishedAt: "2025-05-13T19:50:41.671023Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "1a3481e23fcc4778a1ca396e19ada0cf",
                  code: "MTR-0064",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.706085,
                  longitude: -122.422746,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.671034Z",
                  updatedAt: "2025-05-13T19:50:41.671036Z",
                  publishedAt: "2025-05-13T19:50:41.671037Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "858d619ec83c43b69a68e5270bfd69f4",
                    name: "Brad Cook",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.671187Z",
                    updatedAt: "2025-05-13T19:50:41.671189Z",
                    publishedAt: "2025-05-13T19:50:41.671191Z",
                    ders: [
                      {
                        id: "cfe96f79edf642dd8061f7d3e839f90b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671218Z",
                        updatedAt: "2025-05-13T19:50:41.671219Z",
                        publishedAt: "2025-05-13T19:50:41.671221Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "589cba90ab514b3cb1352ec5b83857f4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671229Z",
                        updatedAt: "2025-05-13T19:50:41.671230Z",
                        publishedAt: "2025-05-13T19:50:41.671231Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "c94e88ad94224dd29060a9f754510e0b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671244Z",
                        updatedAt: "2025-05-13T19:50:41.671246Z",
                        publishedAt: "2025-05-13T19:50:41.671247Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "c62003e215be46a6a2d4651843541f1c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671255Z",
                        updatedAt: "2025-05-13T19:50:41.671256Z",
                        publishedAt: "2025-05-13T19:50:41.671258Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "235d2cca9a074d83b8b250433204f478",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671275Z",
                        updatedAt: "2025-05-13T19:50:41.671276Z",
                        publishedAt: "2025-05-13T19:50:41.671278Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "5f0186d184bb4f66bcab743c5c2a587e",
                  code: "MTR-0065",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.735404,
                  longitude: -122.464813,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.671288Z",
                  updatedAt: "2025-05-13T19:50:41.671289Z",
                  publishedAt: "2025-05-13T19:50:41.671291Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "6806dc53df67469b8c38079ad9f1f706",
                    name: "Jermaine Thompson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.671434Z",
                    updatedAt: "2025-05-13T19:50:41.671436Z",
                    publishedAt: "2025-05-13T19:50:41.671438Z",
                    ders: [
                      {
                        id: "826b7c4373494c82a85a28ea8c4c0456",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671480Z",
                        updatedAt: "2025-05-13T19:50:41.671483Z",
                        publishedAt: "2025-05-13T19:50:41.671486Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "5c2fe2bbb0c84efaa8fd5528574d4dfd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671514Z",
                        updatedAt: "2025-05-13T19:50:41.671516Z",
                        publishedAt: "2025-05-13T19:50:41.671518Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "63547069aa384870a5dd2a65ddf29191",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671531Z",
                        updatedAt: "2025-05-13T19:50:41.671534Z",
                        publishedAt: "2025-05-13T19:50:41.671536Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "400915302cb84cac8e6d38b24d103f12",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671545Z",
                        updatedAt: "2025-05-13T19:50:41.671548Z",
                        publishedAt: "2025-05-13T19:50:41.671550Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "52b800ec3fa947eead5315074808caa0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671570Z",
                        updatedAt: "2025-05-13T19:50:41.671573Z",
                        publishedAt: "2025-05-13T19:50:41.671576Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "7ff5a3b7462e4fe797128323c0c1bb98",
                  code: "MTR-0066",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.787171,
                  longitude: -122.365447,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.671595Z",
                  updatedAt: "2025-05-13T19:50:41.671597Z",
                  publishedAt: "2025-05-13T19:50:41.671600Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "15ef0990c2584514b4617070256c0f91",
                    name: "Joshua Reese",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.671794Z",
                    updatedAt: "2025-05-13T19:50:41.671797Z",
                    publishedAt: "2025-05-13T19:50:41.671799Z",
                    ders: [
                      {
                        id: "09c980af6e7e467cae28a93da4c15eed",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671835Z",
                        updatedAt: "2025-05-13T19:50:41.671839Z",
                        publishedAt: "2025-05-13T19:50:41.671841Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "b0abd80f5cf2455781d1f383c3654085",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671878Z",
                        updatedAt: "2025-05-13T19:50:41.671881Z",
                        publishedAt: "2025-05-13T19:50:41.671884Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "a9559c59b7c94d40bfc982e3d426e461",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671896Z",
                        updatedAt: "2025-05-13T19:50:41.671899Z",
                        publishedAt: "2025-05-13T19:50:41.671902Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "b02a0b5e5f96419c9276128ab5119177",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671912Z",
                        updatedAt: "2025-05-13T19:50:41.671915Z",
                        publishedAt: "2025-05-13T19:50:41.671917Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "c99a23c0e58f468180cdbcf74383210d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.671928Z",
                        updatedAt: "2025-05-13T19:50:41.671930Z",
                        publishedAt: "2025-05-13T19:50:41.671933Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "fd4e65fcef1c4085a3d8f77dea383f1e",
                  code: "MTR-0067",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.713968,
                  longitude: -122.373437,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.671964Z",
                  updatedAt: "2025-05-13T19:50:41.671967Z",
                  publishedAt: "2025-05-13T19:50:41.671970Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "31aabe36e27f4494837b36d5ea6ba64f",
                    name: "Julie Solomon",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.672171Z",
                    updatedAt: "2025-05-13T19:50:41.672174Z",
                    publishedAt: "2025-05-13T19:50:41.672176Z",
                    ders: [
                      {
                        id: "73d0b557a4c745a1933ecaf9b370bafc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672207Z",
                        updatedAt: "2025-05-13T19:50:41.672209Z",
                        publishedAt: "2025-05-13T19:50:41.672212Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "3adf09a7039f4f35bb5a9bba269bfd1e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672223Z",
                        updatedAt: "2025-05-13T19:50:41.672226Z",
                        publishedAt: "2025-05-13T19:50:41.672228Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "256ae86d2b1a4baa97dff0628dab605d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672237Z",
                        updatedAt: "2025-05-13T19:50:41.672239Z",
                        publishedAt: "2025-05-13T19:50:41.672240Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "cb96d4fe6e5045b9a7a0590b997b7255",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672250Z",
                        updatedAt: "2025-05-13T19:50:41.672252Z",
                        publishedAt: "2025-05-13T19:50:41.672253Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "159c9c74836940f79d00a08faf3958a7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672269Z",
                        updatedAt: "2025-05-13T19:50:41.672271Z",
                        publishedAt: "2025-05-13T19:50:41.672274Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "d1d106a9c14f48fa837aa90d2d413578",
                  code: "MTR-0068",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.700905,
                  longitude: -122.457206,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.672292Z",
                  updatedAt: "2025-05-13T19:50:41.672295Z",
                  publishedAt: "2025-05-13T19:50:41.672298Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "b5d19a60c7ce4c47888675a611cf3a21",
                    name: "Maureen Jackson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.672503Z",
                    updatedAt: "2025-05-13T19:50:41.672507Z",
                    publishedAt: "2025-05-13T19:50:41.672509Z",
                    ders: [
                      {
                        id: "108af72409964fdea352dbef37b0777a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672546Z",
                        updatedAt: "2025-05-13T19:50:41.672549Z",
                        publishedAt: "2025-05-13T19:50:41.672552Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "e87c4ec131cf4c7caa57720751268be6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672567Z",
                        updatedAt: "2025-05-13T19:50:41.672570Z",
                        publishedAt: "2025-05-13T19:50:41.672572Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "c936a0239060431095a884274cbd0f55",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672585Z",
                        updatedAt: "2025-05-13T19:50:41.672586Z",
                        publishedAt: "2025-05-13T19:50:41.672588Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "0669e28556ae451da5cc5e097967fe52",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672601Z",
                        updatedAt: "2025-05-13T19:50:41.672603Z",
                        publishedAt: "2025-05-13T19:50:41.672606Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "acf545ed42244dcfae82ac55d818e3a4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.672723Z",
                        updatedAt: "2025-05-13T19:50:41.672734Z",
                        publishedAt: "2025-05-13T19:50:41.672737Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "01aec2e84dc645409238b5aceed2514b",
                  code: "MTR-0069",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.743259,
                  longitude: -122.448995,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.672802Z",
                  updatedAt: "2025-05-13T19:50:41.672805Z",
                  publishedAt: "2025-05-13T19:50:41.672808Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "69a555557c2e40b691937f756607eb77",
                    name: "Stephen Lang",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.673366Z",
                    updatedAt: "2025-05-13T19:50:41.673382Z",
                    publishedAt: "2025-05-13T19:50:41.673384Z",
                    ders: [
                      {
                        id: "7a27824aef0a4a7abcd819c9fbb3d3b1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673443Z",
                        updatedAt: "2025-05-13T19:50:41.673446Z",
                        publishedAt: "2025-05-13T19:50:41.673448Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "b6ad24d80ae44806973e63f153a94798",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673471Z",
                        updatedAt: "2025-05-13T19:50:41.673472Z",
                        publishedAt: "2025-05-13T19:50:41.673474Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "a6beb4d29abb4351a0dae1b415e2f216",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673483Z",
                        updatedAt: "2025-05-13T19:50:41.673485Z",
                        publishedAt: "2025-05-13T19:50:41.673487Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "5bee291186494433b800d5334adb15e9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673495Z",
                        updatedAt: "2025-05-13T19:50:41.673497Z",
                        publishedAt: "2025-05-13T19:50:41.673499Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "86b6d9bd06d248be9237ff794c2de5ac",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673506Z",
                        updatedAt: "2025-05-13T19:50:41.673507Z",
                        publishedAt: "2025-05-13T19:50:41.673509Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "448e3ea17ba84fe6847ebf16464fb1a8",
              name: "Transformer_7",
              city: "San Francisco",
              state: "CA",
              latitude: 37.771319,
              longtitude: -122.438294,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.673554Z",
              updatedAt: "2025-05-13T19:50:41.673557Z",
              publishedAt: "2025-05-13T19:50:41.673559Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "96146aae0323452196acffd0b1f46f93",
                  code: "MTR-0070",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.756855,
                  longitude: -122.377045,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.673578Z",
                  updatedAt: "2025-05-13T19:50:41.673580Z",
                  publishedAt: "2025-05-13T19:50:41.673581Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "2d44c995075a4865a041b78382380e45",
                    name: "Emily Jordan",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.673798Z",
                    updatedAt: "2025-05-13T19:50:41.673800Z",
                    publishedAt: "2025-05-13T19:50:41.673802Z",
                    ders: [
                      {
                        id: "a621597550cb4340bd5d7c6672e201ba",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673827Z",
                        updatedAt: "2025-05-13T19:50:41.673829Z",
                        publishedAt: "2025-05-13T19:50:41.673830Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "fa07018b9c574ceda1f07bb2508279fc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673839Z",
                        updatedAt: "2025-05-13T19:50:41.673840Z",
                        publishedAt: "2025-05-13T19:50:41.673842Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "52a64d0f656149358a5755a87bf89e26",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673856Z",
                        updatedAt: "2025-05-13T19:50:41.673858Z",
                        publishedAt: "2025-05-13T19:50:41.673859Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "dfdf61ba99a54b97b10fa6c158fb489b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673865Z",
                        updatedAt: "2025-05-13T19:50:41.673867Z",
                        publishedAt: "2025-05-13T19:50:41.673868Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "4a54659d547b438ba04fa8d2022a6600",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.673885Z",
                        updatedAt: "2025-05-13T19:50:41.673887Z",
                        publishedAt: "2025-05-13T19:50:41.673888Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "27847ab4162c4dec862e94699f5f1ff6",
                  code: "MTR-0071",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.785011,
                  longitude: -122.451999,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.673931Z",
                  updatedAt: "2025-05-13T19:50:41.673932Z",
                  publishedAt: "2025-05-13T19:50:41.673934Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "054ae6f69702427796ab9b3f3eeb38d7",
                    name: "Austin Underwood",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.674105Z",
                    updatedAt: "2025-05-13T19:50:41.674107Z",
                    publishedAt: "2025-05-13T19:50:41.674109Z",
                    ders: [
                      {
                        id: "fb177e0a2b6d44ceacfaf6f4e49e597c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674137Z",
                        updatedAt: "2025-05-13T19:50:41.674140Z",
                        publishedAt: "2025-05-13T19:50:41.674142Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "67de9ec2d38b40a293429ebf894ee746",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674154Z",
                        updatedAt: "2025-05-13T19:50:41.674156Z",
                        publishedAt: "2025-05-13T19:50:41.674159Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "395959fe7c5b4e01ba8e3b338bbb63b5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674170Z",
                        updatedAt: "2025-05-13T19:50:41.674173Z",
                        publishedAt: "2025-05-13T19:50:41.674175Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "eac81ec069a8479ca7fe195246e5dd89",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674211Z",
                        updatedAt: "2025-05-13T19:50:41.674214Z",
                        publishedAt: "2025-05-13T19:50:41.674216Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "aa833720a8384dc598847d92db5ca064",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674249Z",
                        updatedAt: "2025-05-13T19:50:41.674251Z",
                        publishedAt: "2025-05-13T19:50:41.674253Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "bdf7de990dc9490d9db246cc638e9544",
                  code: "MTR-0072",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.770796,
                  longitude: -122.46474,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.674271Z",
                  updatedAt: "2025-05-13T19:50:41.674273Z",
                  publishedAt: "2025-05-13T19:50:41.674276Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "fd737215cc7a443eb6198af1cce73635",
                    name: "Lindsey Burns",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.674480Z",
                    updatedAt: "2025-05-13T19:50:41.674482Z",
                    publishedAt: "2025-05-13T19:50:41.674484Z",
                    ders: [
                      {
                        id: "54a2324f82e14b31b1628a289c3e6a20",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674514Z",
                        updatedAt: "2025-05-13T19:50:41.674517Z",
                        publishedAt: "2025-05-13T19:50:41.674520Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "edcdce5e832b4372a9009f4c94003858",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674530Z",
                        updatedAt: "2025-05-13T19:50:41.674532Z",
                        publishedAt: "2025-05-13T19:50:41.674533Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "1279afad65484ab3a0eb778ab8383aae",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674549Z",
                        updatedAt: "2025-05-13T19:50:41.674550Z",
                        publishedAt: "2025-05-13T19:50:41.674552Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "f1efbbe469c640b3a8726d04e2a20a86",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674565Z",
                        updatedAt: "2025-05-13T19:50:41.674566Z",
                        publishedAt: "2025-05-13T19:50:41.674568Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "b57c44e295a4439aad284d387344a683",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.674713Z",
                        updatedAt: "2025-05-13T19:50:41.674723Z",
                        publishedAt: "2025-05-13T19:50:41.674726Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "3e7d2a39620344c4ad41154cff5d19dc",
                  code: "MTR-0073",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.777226,
                  longitude: -122.400695,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.674865Z",
                  updatedAt: "2025-05-13T19:50:41.674869Z",
                  publishedAt: "2025-05-13T19:50:41.674872Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "419defdd44a44becb7fc09b3eef8cb3f",
                    name: "Thomas Hughes",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.675239Z",
                    updatedAt: "2025-05-13T19:50:41.675243Z",
                    publishedAt: "2025-05-13T19:50:41.675246Z",
                    ders: [
                      {
                        id: "d8293bc107264232a0674a3738303a99",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.675339Z",
                        updatedAt: "2025-05-13T19:50:41.675348Z",
                        publishedAt: "2025-05-13T19:50:41.675357Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "23c36cc06142433cbf906e095a373935",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.675392Z",
                        updatedAt: "2025-05-13T19:50:41.675395Z",
                        publishedAt: "2025-05-13T19:50:41.675398Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "d2a6c9ef13be40a399e0f76d436d261f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.675423Z",
                        updatedAt: "2025-05-13T19:50:41.675425Z",
                        publishedAt: "2025-05-13T19:50:41.675428Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "246bfc9910b54666b0d61eda9b538c3f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.675457Z",
                        updatedAt: "2025-05-13T19:50:41.675459Z",
                        publishedAt: "2025-05-13T19:50:41.675461Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "645c0a60d25b4f73be25a74b7126de81",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.675479Z",
                        updatedAt: "2025-05-13T19:50:41.675481Z",
                        publishedAt: "2025-05-13T19:50:41.675482Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "241556ec6b744cc0a9690a80f95b0d68",
                  code: "MTR-0074",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.805019,
                  longitude: -122.365244,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.675512Z",
                  updatedAt: "2025-05-13T19:50:41.675513Z",
                  publishedAt: "2025-05-13T19:50:41.675515Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "14db91062be242c28989f7710118e0b3",
                    name: "Timothy Perez",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.675745Z",
                    updatedAt: "2025-05-13T19:50:41.675749Z",
                    publishedAt: "2025-05-13T19:50:41.675758Z",
                    ders: [
                      {
                        id: "09101b7eb71f4ebdb7ba84da4b453804",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.675810Z",
                        updatedAt: "2025-05-13T19:50:41.675813Z",
                        publishedAt: "2025-05-13T19:50:41.675831Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "b7a555279dab4797bbb2e629c1fc49fa",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.675923Z",
                        updatedAt: "2025-05-13T19:50:41.675930Z",
                        publishedAt: "2025-05-13T19:50:41.675932Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "8a416acba4304408a69e7ec4bf1980a1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.675968Z",
                        updatedAt: "2025-05-13T19:50:41.675969Z",
                        publishedAt: "2025-05-13T19:50:41.675974Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "bcef7aae423b4b5480f31909a4980c0a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676015Z",
                        updatedAt: "2025-05-13T19:50:41.676017Z",
                        publishedAt: "2025-05-13T19:50:41.676019Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "533faf1e28e14212b84f2280ddbcd9d2",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676026Z",
                        updatedAt: "2025-05-13T19:50:41.676028Z",
                        publishedAt: "2025-05-13T19:50:41.676029Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "1cc428d8d84a4677b529811e95c3fec9",
                  code: "MTR-0075",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.790712,
                  longitude: -122.467504,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.676065Z",
                  updatedAt: "2025-05-13T19:50:41.676066Z",
                  publishedAt: "2025-05-13T19:50:41.676068Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "179e881b76c24424adf1e73c2f03e98a",
                    name: "Robin Hall",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.676315Z",
                    updatedAt: "2025-05-13T19:50:41.676319Z",
                    publishedAt: "2025-05-13T19:50:41.676335Z",
                    ders: [
                      {
                        id: "0c204fe087ea41cc9efb29bfae9443ed",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676379Z",
                        updatedAt: "2025-05-13T19:50:41.676381Z",
                        publishedAt: "2025-05-13T19:50:41.676383Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "d2772ca5e9834c2fbcc4b94f40a6305a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676391Z",
                        updatedAt: "2025-05-13T19:50:41.676392Z",
                        publishedAt: "2025-05-13T19:50:41.676393Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "bc5d50a168944e4183a4db219e48fa63",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676400Z",
                        updatedAt: "2025-05-13T19:50:41.676402Z",
                        publishedAt: "2025-05-13T19:50:41.676403Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "e72e38a3606e4e2398a4a99822e01a68",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676410Z",
                        updatedAt: "2025-05-13T19:50:41.676411Z",
                        publishedAt: "2025-05-13T19:50:41.676413Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "70b8626bdb8c4ebb98cc5f7924ce21bb",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676420Z",
                        updatedAt: "2025-05-13T19:50:41.676421Z",
                        publishedAt: "2025-05-13T19:50:41.676422Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "ccd5031c783e40a88e06f846164263fb",
                  code: "MTR-0076",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.780742,
                  longitude: -122.40944,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.676436Z",
                  updatedAt: "2025-05-13T19:50:41.676438Z",
                  publishedAt: "2025-05-13T19:50:41.676439Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "25c9d975c0164f8ca713ccdc7239b571",
                    name: "Frances Miranda",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.676622Z",
                    updatedAt: "2025-05-13T19:50:41.676625Z",
                    publishedAt: "2025-05-13T19:50:41.676626Z",
                    ders: [
                      {
                        id: "7aca11f5f7494b10a02d24e435d93684",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676657Z",
                        updatedAt: "2025-05-13T19:50:41.676659Z",
                        publishedAt: "2025-05-13T19:50:41.676660Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "4d90193c633d473c8ba9ea348a9345a7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676668Z",
                        updatedAt: "2025-05-13T19:50:41.676671Z",
                        publishedAt: "2025-05-13T19:50:41.676673Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "82069b21c0194426a493c81c7b8a3865",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676691Z",
                        updatedAt: "2025-05-13T19:50:41.676703Z",
                        publishedAt: "2025-05-13T19:50:41.676705Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "930b990f55b24a91b2d88b32bc2622ed",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676801Z",
                        updatedAt: "2025-05-13T19:50:41.676806Z",
                        publishedAt: "2025-05-13T19:50:41.676809Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "9fcd4c5d4a264cf689ccbfd25def9600",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.676825Z",
                        updatedAt: "2025-05-13T19:50:41.676828Z",
                        publishedAt: "2025-05-13T19:50:41.676831Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "e8d502d812dd47a2818f9f07ebf28af4",
                  code: "MTR-0077",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.726972,
                  longitude: -122.487764,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.676859Z",
                  updatedAt: "2025-05-13T19:50:41.676862Z",
                  publishedAt: "2025-05-13T19:50:41.676865Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "55428b6d49df4a4884517989272f3dd5",
                    name: "Lauren Clark",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.677298Z",
                    updatedAt: "2025-05-13T19:50:41.677303Z",
                    publishedAt: "2025-05-13T19:50:41.677306Z",
                    ders: [
                      {
                        id: "e475c450cc684cfcb07c86ad52b0ddd7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.677347Z",
                        updatedAt: "2025-05-13T19:50:41.677350Z",
                        publishedAt: "2025-05-13T19:50:41.677353Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "bb61f3128aab48bda757e0b700c2de20",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.677377Z",
                        updatedAt: "2025-05-13T19:50:41.677380Z",
                        publishedAt: "2025-05-13T19:50:41.677383Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "7ff0fba550f741998ef64ee0ded29c33",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.677406Z",
                        updatedAt: "2025-05-13T19:50:41.677409Z",
                        publishedAt: "2025-05-13T19:50:41.677412Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "3e4b535ba71246f99c382629f95314b3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.677424Z",
                        updatedAt: "2025-05-13T19:50:41.677426Z",
                        publishedAt: "2025-05-13T19:50:41.677429Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "47bb56821b044ee4ab01c089abece7a4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.677440Z",
                        updatedAt: "2025-05-13T19:50:41.677442Z",
                        publishedAt: "2025-05-13T19:50:41.677445Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "86307efc822b4e7a8f0672c6d1afc3f1",
                  code: "MTR-0078",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.794069,
                  longitude: -122.402652,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.677477Z",
                  updatedAt: "2025-05-13T19:50:41.677480Z",
                  publishedAt: "2025-05-13T19:50:41.677483Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "ad3d711d7efa4bba9b98fe016d8108b6",
                    name: "Megan Klein",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.677886Z",
                    updatedAt: "2025-05-13T19:50:41.677891Z",
                    publishedAt: "2025-05-13T19:50:41.677894Z",
                    ders: [
                      {
                        id: "9bc6260330a1402ab64ada56b020003b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.677931Z",
                        updatedAt: "2025-05-13T19:50:41.677934Z",
                        publishedAt: "2025-05-13T19:50:41.677937Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "b5ef53b186864ef7b599447612291c13",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.677968Z",
                        updatedAt: "2025-05-13T19:50:41.677971Z",
                        publishedAt: "2025-05-13T19:50:41.677974Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "34aa811a1a0c44b281e09310e0e9d487",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.677986Z",
                        updatedAt: "2025-05-13T19:50:41.677989Z",
                        publishedAt: "2025-05-13T19:50:41.677992Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "6cc38ba50f2e4b54bf4c8cbc4bacd71b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678013Z",
                        updatedAt: "2025-05-13T19:50:41.678016Z",
                        publishedAt: "2025-05-13T19:50:41.678019Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "18618acfcc49484caf3b8759caedb1ad",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678030Z",
                        updatedAt: "2025-05-13T19:50:41.678032Z",
                        publishedAt: "2025-05-13T19:50:41.678035Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "725cabff395640adad9401b141d39c37",
                  code: "MTR-0079",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.701268,
                  longitude: -122.405935,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.678070Z",
                  updatedAt: "2025-05-13T19:50:41.678073Z",
                  publishedAt: "2025-05-13T19:50:41.678076Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "d9198f75baef49ca9091a56e87563aa6",
                    name: "Eddie Williams",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.678406Z",
                    updatedAt: "2025-05-13T19:50:41.678410Z",
                    publishedAt: "2025-05-13T19:50:41.678412Z",
                    ders: [
                      {
                        id: "ad8f36e97ef74fb8a1918bb2b1ac34fc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678448Z",
                        updatedAt: "2025-05-13T19:50:41.678452Z",
                        publishedAt: "2025-05-13T19:50:41.678454Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "ebb48b81697f46649266683c5e7ef52d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678470Z",
                        updatedAt: "2025-05-13T19:50:41.678473Z",
                        publishedAt: "2025-05-13T19:50:41.678476Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "adc9d5daca64413c9400635c60a8f75a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678487Z",
                        updatedAt: "2025-05-13T19:50:41.678490Z",
                        publishedAt: "2025-05-13T19:50:41.678493Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "841a93574da24bd79a7fea1c965ea04c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678516Z",
                        updatedAt: "2025-05-13T19:50:41.678519Z",
                        publishedAt: "2025-05-13T19:50:41.678522Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "540d93a98fde49289eef91ec528b90c1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678538Z",
                        updatedAt: "2025-05-13T19:50:41.678541Z",
                        publishedAt: "2025-05-13T19:50:41.678543Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "07e5a00b5272447a89066254f9b4df00",
              name: "Transformer_8",
              city: "San Francisco",
              state: "CA",
              latitude: 37.771089,
              longtitude: -122.508851,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.678566Z",
              updatedAt: "2025-05-13T19:50:41.678569Z",
              publishedAt: "2025-05-13T19:50:41.678573Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "899e9bbcf11e4cb6ac07b50069b3399a",
                  code: "MTR-0080",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73223,
                  longitude: -122.46902,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.678589Z",
                  updatedAt: "2025-05-13T19:50:41.678592Z",
                  publishedAt: "2025-05-13T19:50:41.678595Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "835817a071b84e3a8b4c4b63a22bd1dc",
                    name: "Wayne Collins",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.678879Z",
                    updatedAt: "2025-05-13T19:50:41.678883Z",
                    publishedAt: "2025-05-13T19:50:41.678885Z",
                    ders: [
                      {
                        id: "41f63bafccdb405094d2070d4ff5820d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678914Z",
                        updatedAt: "2025-05-13T19:50:41.678918Z",
                        publishedAt: "2025-05-13T19:50:41.678921Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "a410b68614304cf8bd0bd757dfd55957",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678953Z",
                        updatedAt: "2025-05-13T19:50:41.678956Z",
                        publishedAt: "2025-05-13T19:50:41.678959Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "f105bce6bb5b4daa95c8317b2121a9c0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678972Z",
                        updatedAt: "2025-05-13T19:50:41.678975Z",
                        publishedAt: "2025-05-13T19:50:41.678977Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "f9e759eaac62482bb56022221033c165",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.678990Z",
                        updatedAt: "2025-05-13T19:50:41.678993Z",
                        publishedAt: "2025-05-13T19:50:41.678995Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "33c7f880b7d148cca65b68b67725bbd6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679007Z",
                        updatedAt: "2025-05-13T19:50:41.679009Z",
                        publishedAt: "2025-05-13T19:50:41.679012Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "c90347aa0fb44a5f8bb9238f56c37f6a",
                  code: "MTR-0081",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.712653,
                  longitude: -122.411579,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.679043Z",
                  updatedAt: "2025-05-13T19:50:41.679046Z",
                  publishedAt: "2025-05-13T19:50:41.679049Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "7ae7beff5efd450eb736ae1e7eff5446",
                    name: "Roberto Holland",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.679341Z",
                    updatedAt: "2025-05-13T19:50:41.679345Z",
                    publishedAt: "2025-05-13T19:50:41.679348Z",
                    ders: [
                      {
                        id: "246a8c61ca054b53ba56338263538ed6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679379Z",
                        updatedAt: "2025-05-13T19:50:41.679383Z",
                        publishedAt: "2025-05-13T19:50:41.679385Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "59b769d7738442c7b01a05001e52154e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679482Z",
                        updatedAt: "2025-05-13T19:50:41.679491Z",
                        publishedAt: "2025-05-13T19:50:41.679494Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "771efba176694829ab23c97a2899b9c5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679531Z",
                        updatedAt: "2025-05-13T19:50:41.679533Z",
                        publishedAt: "2025-05-13T19:50:41.679536Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "288f2e6d73cb432380cfc4909d64165d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679579Z",
                        updatedAt: "2025-05-13T19:50:41.679582Z",
                        publishedAt: "2025-05-13T19:50:41.679585Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "05447e1cade44dd5ab2850f0e120c958",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679598Z",
                        updatedAt: "2025-05-13T19:50:41.679602Z",
                        publishedAt: "2025-05-13T19:50:41.679605Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "cad03b754be84f2c88a56131fe682e76",
                  code: "MTR-0082",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.759058,
                  longitude: -122.392797,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.679647Z",
                  updatedAt: "2025-05-13T19:50:41.679650Z",
                  publishedAt: "2025-05-13T19:50:41.679657Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "d0143b2787dc47adb2e09b5c26386075",
                    name: "Thomas Rodriguez",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.679879Z",
                    updatedAt: "2025-05-13T19:50:41.679881Z",
                    publishedAt: "2025-05-13T19:50:41.679883Z",
                    ders: [
                      {
                        id: "b4707fab5e31403e93208dac5afb2b3b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679915Z",
                        updatedAt: "2025-05-13T19:50:41.679918Z",
                        publishedAt: "2025-05-13T19:50:41.679920Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "d4d4bb9f23bf48f7bdfb5167032e8885",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679932Z",
                        updatedAt: "2025-05-13T19:50:41.679934Z",
                        publishedAt: "2025-05-13T19:50:41.679936Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "0c873a5044664fb8b3d5ac5f3d2b0682",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679944Z",
                        updatedAt: "2025-05-13T19:50:41.679946Z",
                        publishedAt: "2025-05-13T19:50:41.679949Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "064e9e6c959341d68ea5e9c93c53ee66",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679957Z",
                        updatedAt: "2025-05-13T19:50:41.679959Z",
                        publishedAt: "2025-05-13T19:50:41.679960Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "a02d378c16304a13bec0046f74750efd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.679968Z",
                        updatedAt: "2025-05-13T19:50:41.679969Z",
                        publishedAt: "2025-05-13T19:50:41.679970Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "06344ed63fc04eaa81a0ebcccd0358b9",
                  code: "MTR-0083",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.796463,
                  longitude: -122.364288,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.679984Z",
                  updatedAt: "2025-05-13T19:50:41.679986Z",
                  publishedAt: "2025-05-13T19:50:41.679987Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "8bd2fae00b2648fd9b229f5b63553d9e",
                    name: "Frank Love",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.680164Z",
                    updatedAt: "2025-05-13T19:50:41.680166Z",
                    publishedAt: "2025-05-13T19:50:41.680168Z",
                    ders: [
                      {
                        id: "316aedea676c4b599a6bc8520577b813",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680195Z",
                        updatedAt: "2025-05-13T19:50:41.680198Z",
                        publishedAt: "2025-05-13T19:50:41.680200Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "041ec6ce7c914bcab4b1060b1632f0a8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680212Z",
                        updatedAt: "2025-05-13T19:50:41.680215Z",
                        publishedAt: "2025-05-13T19:50:41.680218Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "631727396ebe43bba368e44fd9755380",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680254Z",
                        updatedAt: "2025-05-13T19:50:41.680257Z",
                        publishedAt: "2025-05-13T19:50:41.680259Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "ae00bca4061644c18e67553ffded0a2e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680269Z",
                        updatedAt: "2025-05-13T19:50:41.680272Z",
                        publishedAt: "2025-05-13T19:50:41.680274Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "9f1a510d584a4e7e958ccaac257dd7df",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680284Z",
                        updatedAt: "2025-05-13T19:50:41.680287Z",
                        publishedAt: "2025-05-13T19:50:41.680294Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "2afa662d807f48fa85af2d0b3db91db8",
                  code: "MTR-0084",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.741117,
                  longitude: -122.385481,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.680323Z",
                  updatedAt: "2025-05-13T19:50:41.680325Z",
                  publishedAt: "2025-05-13T19:50:41.680326Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "3e143c9998f449aca39563c4e782ce73",
                    name: "Mary Santiago",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.680517Z",
                    updatedAt: "2025-05-13T19:50:41.680520Z",
                    publishedAt: "2025-05-13T19:50:41.680521Z",
                    ders: [
                      {
                        id: "cef54a3d47bd451aa335d432706be6e0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680555Z",
                        updatedAt: "2025-05-13T19:50:41.680557Z",
                        publishedAt: "2025-05-13T19:50:41.680560Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "ea14fc06b82042fb850ae1a52f2bcc79",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680571Z",
                        updatedAt: "2025-05-13T19:50:41.680574Z",
                        publishedAt: "2025-05-13T19:50:41.680576Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "73d43e50b0684b9d843ec9162691c4c5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680590Z",
                        updatedAt: "2025-05-13T19:50:41.680599Z",
                        publishedAt: "2025-05-13T19:50:41.680601Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "f170a4e5747d4b0fbf5ad6a2e4939cd0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680620Z",
                        updatedAt: "2025-05-13T19:50:41.680621Z",
                        publishedAt: "2025-05-13T19:50:41.680623Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "1535342b5311430188b5b1bcecd0fea0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680630Z",
                        updatedAt: "2025-05-13T19:50:41.680632Z",
                        publishedAt: "2025-05-13T19:50:41.680633Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "ccda170cd5e642a3b6d8a21fb8d34551",
                  code: "MTR-0085",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.720544,
                  longitude: -122.409092,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.680647Z",
                  updatedAt: "2025-05-13T19:50:41.680648Z",
                  publishedAt: "2025-05-13T19:50:41.680650Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "7bc13b358e1b45a3a93df149c6fcc812",
                    name: "Shannon Perez",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.680821Z",
                    updatedAt: "2025-05-13T19:50:41.680824Z",
                    publishedAt: "2025-05-13T19:50:41.680827Z",
                    ders: [
                      {
                        id: "ae0b0ef3808146d383b778ae62938d1f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680855Z",
                        updatedAt: "2025-05-13T19:50:41.680858Z",
                        publishedAt: "2025-05-13T19:50:41.680860Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "ff3fb6ddd9ea4c41924ecb53d59fbf80",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680877Z",
                        updatedAt: "2025-05-13T19:50:41.680880Z",
                        publishedAt: "2025-05-13T19:50:41.680882Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "1e25323273d14cbe966d97df269fe838",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680969Z",
                        updatedAt: "2025-05-13T19:50:41.680977Z",
                        publishedAt: "2025-05-13T19:50:41.680978Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "5c7d7bb2ebf143629787329f5c86e506",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.680992Z",
                        updatedAt: "2025-05-13T19:50:41.680994Z",
                        publishedAt: "2025-05-13T19:50:41.680995Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "29f065a037544449a7f001866d96374b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681015Z",
                        updatedAt: "2025-05-13T19:50:41.681016Z",
                        publishedAt: "2025-05-13T19:50:41.681018Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "8c54895dbb19435f984287e15965015a",
                  code: "MTR-0086",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.789635,
                  longitude: -122.490466,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.681039Z",
                  updatedAt: "2025-05-13T19:50:41.681041Z",
                  publishedAt: "2025-05-13T19:50:41.681042Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "c10f877114ff4bfcaa5fbe2c900b1b2e",
                    name: "Cynthia Owens",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.681396Z",
                    updatedAt: "2025-05-13T19:50:41.681401Z",
                    publishedAt: "2025-05-13T19:50:41.681402Z",
                    ders: [
                      {
                        id: "63f845c5fe604e2988b7ce1eee686fef",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681447Z",
                        updatedAt: "2025-05-13T19:50:41.681448Z",
                        publishedAt: "2025-05-13T19:50:41.681450Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "07342b27d428457d9df6ee76c8eb1189",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681459Z",
                        updatedAt: "2025-05-13T19:50:41.681460Z",
                        publishedAt: "2025-05-13T19:50:41.681462Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "ef6ce56d10964c50a05bac9190fd7832",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681469Z",
                        updatedAt: "2025-05-13T19:50:41.681471Z",
                        publishedAt: "2025-05-13T19:50:41.681472Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "9f9e6d0a1f8c489f852dd28049ca6e2e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681479Z",
                        updatedAt: "2025-05-13T19:50:41.681481Z",
                        publishedAt: "2025-05-13T19:50:41.681482Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "cf24b4a0f1a14b63a686ccbca35b2227",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681489Z",
                        updatedAt: "2025-05-13T19:50:41.681491Z",
                        publishedAt: "2025-05-13T19:50:41.681492Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "696f0d02e2004a339957df80bdf7180d",
                  code: "MTR-0087",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.734401,
                  longitude: -122.444708,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.681507Z",
                  updatedAt: "2025-05-13T19:50:41.681509Z",
                  publishedAt: "2025-05-13T19:50:41.681510Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "872a791e1a4c407c9239f2dfb1055721",
                    name: "Joseph Daniels",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.681707Z",
                    updatedAt: "2025-05-13T19:50:41.681709Z",
                    publishedAt: "2025-05-13T19:50:41.681711Z",
                    ders: [
                      {
                        id: "a897a9c17edb4cef980046960e3955be",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681743Z",
                        updatedAt: "2025-05-13T19:50:41.681744Z",
                        publishedAt: "2025-05-13T19:50:41.681746Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "fef51ae1f6f7461bb5c27ed22b9d64aa",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681765Z",
                        updatedAt: "2025-05-13T19:50:41.681767Z",
                        publishedAt: "2025-05-13T19:50:41.681770Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "d5000fb95ce746e0b932207f212b9382",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681805Z",
                        updatedAt: "2025-05-13T19:50:41.681808Z",
                        publishedAt: "2025-05-13T19:50:41.681811Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "588f1daebae34bec81329fd540bcf365",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681846Z",
                        updatedAt: "2025-05-13T19:50:41.681849Z",
                        publishedAt: "2025-05-13T19:50:41.681851Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "8cd35520d60b4441a839be22c400ae99",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.681862Z",
                        updatedAt: "2025-05-13T19:50:41.681865Z",
                        publishedAt: "2025-05-13T19:50:41.681867Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "0305570a24194b72a80c43de22a02c95",
                  code: "MTR-0088",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.777001,
                  longitude: -122.380712,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.681897Z",
                  updatedAt: "2025-05-13T19:50:41.681900Z",
                  publishedAt: "2025-05-13T19:50:41.681903Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "a03aff22051d4e2abccf6d7ca73c9559",
                    name: "James Maldonado",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.682095Z",
                    updatedAt: "2025-05-13T19:50:41.682097Z",
                    publishedAt: "2025-05-13T19:50:41.682098Z",
                    ders: [
                      {
                        id: "1021fe90433c45bba6cb78111aa3734e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682129Z",
                        updatedAt: "2025-05-13T19:50:41.682130Z",
                        publishedAt: "2025-05-13T19:50:41.682132Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "b6f7fe392e0e4b64800aeeb3116944ba",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682139Z",
                        updatedAt: "2025-05-13T19:50:41.682141Z",
                        publishedAt: "2025-05-13T19:50:41.682142Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "9bb6aac2d6b24f19b71b140561b9c280",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682150Z",
                        updatedAt: "2025-05-13T19:50:41.682152Z",
                        publishedAt: "2025-05-13T19:50:41.682153Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "83a8b438da9d4a518df0b348b925d8e0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682160Z",
                        updatedAt: "2025-05-13T19:50:41.682161Z",
                        publishedAt: "2025-05-13T19:50:41.682162Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "99e361cc0f7b4229bfe842a7d70f8ade",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682169Z",
                        updatedAt: "2025-05-13T19:50:41.682170Z",
                        publishedAt: "2025-05-13T19:50:41.682172Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "e7176ebfed76405184a0b19d355ef8b4",
                  code: "MTR-0089",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.740503,
                  longitude: -122.498788,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.682185Z",
                  updatedAt: "2025-05-13T19:50:41.682186Z",
                  publishedAt: "2025-05-13T19:50:41.682187Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "321fd47b874c4f238c9a801ea70ebc89",
                    name: "David Davis",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.682352Z",
                    updatedAt: "2025-05-13T19:50:41.682355Z",
                    publishedAt: "2025-05-13T19:50:41.682358Z",
                    ders: [
                      {
                        id: "d5ac3df985f44b8a859263bb2bce120a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682399Z",
                        updatedAt: "2025-05-13T19:50:41.682400Z",
                        publishedAt: "2025-05-13T19:50:41.682402Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "8a68f532e3f048f0b703d472109746e5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682409Z",
                        updatedAt: "2025-05-13T19:50:41.682410Z",
                        publishedAt: "2025-05-13T19:50:41.682412Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "bf376a5d7f724f8b97e95c6d4486720f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682418Z",
                        updatedAt: "2025-05-13T19:50:41.682420Z",
                        publishedAt: "2025-05-13T19:50:41.682421Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "d8bbacf66cff4aa3b10985fd8e84d773",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682427Z",
                        updatedAt: "2025-05-13T19:50:41.682429Z",
                        publishedAt: "2025-05-13T19:50:41.682430Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "96647d6cb55a40988fd277a546374394",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682436Z",
                        updatedAt: "2025-05-13T19:50:41.682438Z",
                        publishedAt: "2025-05-13T19:50:41.682439Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "c134b90be9354730b2604b7b8fbeb59f",
              name: "Transformer_9",
              city: "San Francisco",
              state: "CA",
              latitude: 37.764487,
              longtitude: -122.445644,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.682460Z",
              updatedAt: "2025-05-13T19:50:41.682462Z",
              publishedAt: "2025-05-13T19:50:41.682465Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "822e000a024c4117a9a93c16f0a776c5",
                  code: "MTR-0090",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.793168,
                  longitude: -122.48874,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.682575Z",
                  updatedAt: "2025-05-13T19:50:41.682585Z",
                  publishedAt: "2025-05-13T19:50:41.682588Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "ba4303bdb15b40c09a29582cef7c236d",
                    name: "Jennifer Kelly",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.682864Z",
                    updatedAt: "2025-05-13T19:50:41.682868Z",
                    publishedAt: "2025-05-13T19:50:41.682870Z",
                    ders: [
                      {
                        id: "c6ce4bc150f14455bd40bbea7d04be6f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682912Z",
                        updatedAt: "2025-05-13T19:50:41.682914Z",
                        publishedAt: "2025-05-13T19:50:41.682915Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "11ee49158bd049368988ded4eb132e19",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682931Z",
                        updatedAt: "2025-05-13T19:50:41.682933Z",
                        publishedAt: "2025-05-13T19:50:41.682934Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "0b15f613cf4c4ffeb1aef60325349126",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682942Z",
                        updatedAt: "2025-05-13T19:50:41.682945Z",
                        publishedAt: "2025-05-13T19:50:41.682947Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "4eb162ecee1248469698d14dd7782eb0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682957Z",
                        updatedAt: "2025-05-13T19:50:41.682959Z",
                        publishedAt: "2025-05-13T19:50:41.682962Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "27a4521752de467b980e7915a1713800",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.682975Z",
                        updatedAt: "2025-05-13T19:50:41.682977Z",
                        publishedAt: "2025-05-13T19:50:41.682979Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "067fa181da7f422fa62115dfd30ca35f",
                  code: "MTR-0091",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.710781,
                  longitude: -122.422443,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.683010Z",
                  updatedAt: "2025-05-13T19:50:41.683013Z",
                  publishedAt: "2025-05-13T19:50:41.683015Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "1fd79569145c435186d7eb5263c28572",
                    name: "James Rodriguez",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.683218Z",
                    updatedAt: "2025-05-13T19:50:41.683221Z",
                    publishedAt: "2025-05-13T19:50:41.683223Z",
                    ders: [
                      {
                        id: "41a1f5bdc4d3495a90108eb80262a572",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683253Z",
                        updatedAt: "2025-05-13T19:50:41.683255Z",
                        publishedAt: "2025-05-13T19:50:41.683256Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "70bcae7dc47b486ababccec8ffbcb86e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683264Z",
                        updatedAt: "2025-05-13T19:50:41.683266Z",
                        publishedAt: "2025-05-13T19:50:41.683268Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "bf2106d9272a43108e58f620e67d3a04",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683277Z",
                        updatedAt: "2025-05-13T19:50:41.683279Z",
                        publishedAt: "2025-05-13T19:50:41.683281Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "c1e89e62f609468aa87bfe1cd734c7bb",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683294Z",
                        updatedAt: "2025-05-13T19:50:41.683295Z",
                        publishedAt: "2025-05-13T19:50:41.683297Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "594751d39a82445ba87f020cb648eb06",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683390Z",
                        updatedAt: "2025-05-13T19:50:41.683399Z",
                        publishedAt: "2025-05-13T19:50:41.683402Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "f74747e81d3f4ff984f64cb985861415",
                  code: "MTR-0092",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.80586,
                  longitude: -122.516609,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.683462Z",
                  updatedAt: "2025-05-13T19:50:41.683466Z",
                  publishedAt: "2025-05-13T19:50:41.683469Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "4de185d41c7a48dd86719f048dbb8f0d",
                    name: "Robert Estes",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.683832Z",
                    updatedAt: "2025-05-13T19:50:41.683836Z",
                    publishedAt: "2025-05-13T19:50:41.683839Z",
                    ders: [
                      {
                        id: "e483d3b6377f45b9800ffb6cf8b6a314",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683881Z",
                        updatedAt: "2025-05-13T19:50:41.683884Z",
                        publishedAt: "2025-05-13T19:50:41.683887Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "f07f9080b01841e09849f3583a4087b5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683916Z",
                        updatedAt: "2025-05-13T19:50:41.683919Z",
                        publishedAt: "2025-05-13T19:50:41.683921Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "39ded81daa144b0fa551d82157ceb312",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683935Z",
                        updatedAt: "2025-05-13T19:50:41.683938Z",
                        publishedAt: "2025-05-13T19:50:41.683941Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "985534014d9842a3b0c9846aaa814ccc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683951Z",
                        updatedAt: "2025-05-13T19:50:41.683954Z",
                        publishedAt: "2025-05-13T19:50:41.683957Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "f9b7676a07ef4655b49aacd09e4312c4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.683968Z",
                        updatedAt: "2025-05-13T19:50:41.683971Z",
                        publishedAt: "2025-05-13T19:50:41.683974Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "fc090a902f7e4197ad3fa041bedeefa5",
                  code: "MTR-0093",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.801765,
                  longitude: -122.433185,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.684011Z",
                  updatedAt: "2025-05-13T19:50:41.684015Z",
                  publishedAt: "2025-05-13T19:50:41.684017Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "48d19b8261dc491fa6b47c21f082e696",
                    name: "Patrick Wilkerson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.684316Z",
                    updatedAt: "2025-05-13T19:50:41.684321Z",
                    publishedAt: "2025-05-13T19:50:41.684323Z",
                    ders: [
                      {
                        id: "b9db43df6f3241e48045a5fd17ff5461",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684356Z",
                        updatedAt: "2025-05-13T19:50:41.684359Z",
                        publishedAt: "2025-05-13T19:50:41.684361Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "fb26d06af5dc4d96be94b3b90779b310",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684373Z",
                        updatedAt: "2025-05-13T19:50:41.684376Z",
                        publishedAt: "2025-05-13T19:50:41.684379Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "e78760a462d249e0ab90a84bd603e9b8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684389Z",
                        updatedAt: "2025-05-13T19:50:41.684391Z",
                        publishedAt: "2025-05-13T19:50:41.684394Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "99c7830350aa4b3b9a35921888e45556",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684410Z",
                        updatedAt: "2025-05-13T19:50:41.684412Z",
                        publishedAt: "2025-05-13T19:50:41.684415Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "a88a894c4fd34e83a95c9cd17946e761",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684425Z",
                        updatedAt: "2025-05-13T19:50:41.684427Z",
                        publishedAt: "2025-05-13T19:50:41.684429Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "acf9442e11254967946109326a83d2da",
                  code: "MTR-0094",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.756049,
                  longitude: -122.420133,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.684448Z",
                  updatedAt: "2025-05-13T19:50:41.684451Z",
                  publishedAt: "2025-05-13T19:50:41.684453Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "3c4f06c9d59e41609759bbc84192daf0",
                    name: "Sabrina Watson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.684728Z",
                    updatedAt: "2025-05-13T19:50:41.684732Z",
                    publishedAt: "2025-05-13T19:50:41.684735Z",
                    ders: [
                      {
                        id: "f2931e72239b455399db05f17ca97f20",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684778Z",
                        updatedAt: "2025-05-13T19:50:41.684781Z",
                        publishedAt: "2025-05-13T19:50:41.684783Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "7c805b42f1d84912abea10ebfd0b6db4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684803Z",
                        updatedAt: "2025-05-13T19:50:41.684805Z",
                        publishedAt: "2025-05-13T19:50:41.684808Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "c77a9b5a41074348a2ae417bb3be3d3e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684819Z",
                        updatedAt: "2025-05-13T19:50:41.684822Z",
                        publishedAt: "2025-05-13T19:50:41.684824Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "dc629001810847b991f3a9ae0939cc48",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684834Z",
                        updatedAt: "2025-05-13T19:50:41.684836Z",
                        publishedAt: "2025-05-13T19:50:41.684838Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "981e352a2ad54e239b0ad76d6dbee426",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.684847Z",
                        updatedAt: "2025-05-13T19:50:41.684850Z",
                        publishedAt: "2025-05-13T19:50:41.684852Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "490395d903e64ad98a398961b415f379",
                  code: "MTR-0095",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.729477,
                  longitude: -122.394762,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.684880Z",
                  updatedAt: "2025-05-13T19:50:41.684883Z",
                  publishedAt: "2025-05-13T19:50:41.684885Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "f4e09e4435dd4df7a7327eb0f1b87281",
                    name: "Christopher Parks",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.685133Z",
                    updatedAt: "2025-05-13T19:50:41.685136Z",
                    publishedAt: "2025-05-13T19:50:41.685139Z",
                    ders: [
                      {
                        id: "68d1a36149a44c02977f15724e2f3ed3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685249Z",
                        updatedAt: "2025-05-13T19:50:41.685252Z",
                        publishedAt: "2025-05-13T19:50:41.685254Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "1f199bd3ea8e4c34b09cc19f5d56d993",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685282Z",
                        updatedAt: "2025-05-13T19:50:41.685285Z",
                        publishedAt: "2025-05-13T19:50:41.685287Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "a4e583d257e24ada98346700e1ba71b7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685303Z",
                        updatedAt: "2025-05-13T19:50:41.685306Z",
                        publishedAt: "2025-05-13T19:50:41.685308Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "a929d44162274ef197488bce951c4bd1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685321Z",
                        updatedAt: "2025-05-13T19:50:41.685323Z",
                        publishedAt: "2025-05-13T19:50:41.685325Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "7f7b1a77ed9841b0837f3741e078b87a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685339Z",
                        updatedAt: "2025-05-13T19:50:41.685341Z",
                        publishedAt: "2025-05-13T19:50:41.685343Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "162011a512694ea984c2a513212c9191",
                  code: "MTR-0096",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.767532,
                  longitude: -122.458649,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.685361Z",
                  updatedAt: "2025-05-13T19:50:41.685364Z",
                  publishedAt: "2025-05-13T19:50:41.685366Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "0f48d5cf93a04d67a65d56acd13e18a2",
                    name: "Kristen Hill",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.685655Z",
                    updatedAt: "2025-05-13T19:50:41.685659Z",
                    publishedAt: "2025-05-13T19:50:41.685661Z",
                    ders: [
                      {
                        id: "d0f47f8f45be4cb1836cd984cd9b28ea",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685691Z",
                        updatedAt: "2025-05-13T19:50:41.685693Z",
                        publishedAt: "2025-05-13T19:50:41.685695Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "70ded7b0f7604794b6158bbcf784bcfc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685707Z",
                        updatedAt: "2025-05-13T19:50:41.685710Z",
                        publishedAt: "2025-05-13T19:50:41.685712Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "6185e6501ffa406fa86f0e792ac82444",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685721Z",
                        updatedAt: "2025-05-13T19:50:41.685724Z",
                        publishedAt: "2025-05-13T19:50:41.685726Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "99a9bb8a9a7a462caf3081d10c4ed137",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685736Z",
                        updatedAt: "2025-05-13T19:50:41.685739Z",
                        publishedAt: "2025-05-13T19:50:41.685741Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "8aa41370602d47098d21d453b0734cfa",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.685753Z",
                        updatedAt: "2025-05-13T19:50:41.685755Z",
                        publishedAt: "2025-05-13T19:50:41.685757Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "5a71656ce5bc4ec98c1800a6e569e0b2",
                  code: "MTR-0097",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.789415,
                  longitude: -122.47886,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.685786Z",
                  updatedAt: "2025-05-13T19:50:41.685788Z",
                  publishedAt: "2025-05-13T19:50:41.685790Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "1c7aaa92473e47b2a558ba94c533ec47",
                    name: "Miss Stephanie Stevens",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.686067Z",
                    updatedAt: "2025-05-13T19:50:41.686070Z",
                    publishedAt: "2025-05-13T19:50:41.686072Z",
                    ders: [
                      {
                        id: "9e771f9ceea24486878b5509484c18e5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686109Z",
                        updatedAt: "2025-05-13T19:50:41.686111Z",
                        publishedAt: "2025-05-13T19:50:41.686114Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "0daef5d961c3469abb7b1b626aa017bc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686139Z",
                        updatedAt: "2025-05-13T19:50:41.686142Z",
                        publishedAt: "2025-05-13T19:50:41.686144Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "ac9bba71494e43c7ae9a60113a9fd18e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686156Z",
                        updatedAt: "2025-05-13T19:50:41.686158Z",
                        publishedAt: "2025-05-13T19:50:41.686161Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "3428844293e84e2fa40e04b41c73b66f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686171Z",
                        updatedAt: "2025-05-13T19:50:41.686173Z",
                        publishedAt: "2025-05-13T19:50:41.686175Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "2a3007ff04da4c9eaba7ef9115cfc76d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686184Z",
                        updatedAt: "2025-05-13T19:50:41.686186Z",
                        publishedAt: "2025-05-13T19:50:41.686189Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "e343ce1cd4f040b7beba986b58465be5",
                  code: "MTR-0098",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.718097,
                  longitude: -122.485287,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.686208Z",
                  updatedAt: "2025-05-13T19:50:41.686211Z",
                  publishedAt: "2025-05-13T19:50:41.686213Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "a57177d07fb840ecbd87d1277e5a3f41",
                    name: "Richard Petty",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.686465Z",
                    updatedAt: "2025-05-13T19:50:41.686467Z",
                    publishedAt: "2025-05-13T19:50:41.686470Z",
                    ders: [
                      {
                        id: "5ac1504132b04e1db93d2249dab16a9e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686501Z",
                        updatedAt: "2025-05-13T19:50:41.686503Z",
                        publishedAt: "2025-05-13T19:50:41.686505Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "890410daa3cb4850b403207e3c345d64",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686524Z",
                        updatedAt: "2025-05-13T19:50:41.686526Z",
                        publishedAt: "2025-05-13T19:50:41.686530Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "8a9204c0532d426cafd52bc2a70ebb89",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686556Z",
                        updatedAt: "2025-05-13T19:50:41.686558Z",
                        publishedAt: "2025-05-13T19:50:41.686561Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "19a185175b5e42a08cde5461ccbaaecc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686571Z",
                        updatedAt: "2025-05-13T19:50:41.686574Z",
                        publishedAt: "2025-05-13T19:50:41.686576Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "79d294def99a46fc97eac4bfafdd1139",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.686585Z",
                        updatedAt: "2025-05-13T19:50:41.686588Z",
                        publishedAt: "2025-05-13T19:50:41.686590Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "ef93245533ad453bba073bdb99927168",
                  code: "MTR-0099",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.778432,
                  longitude: -122.410291,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.686700Z",
                  updatedAt: "2025-05-13T19:50:41.686709Z",
                  publishedAt: "2025-05-13T19:50:41.686711Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "da7a78edf83c447c85b2d99b8a06c78d",
                    name: "Heather Davis",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.686984Z",
                    updatedAt: "2025-05-13T19:50:41.686988Z",
                    publishedAt: "2025-05-13T19:50:41.686991Z",
                    ders: [
                      {
                        id: "f74ceea6a0a247fda5b5bcd2f68229e0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687027Z",
                        updatedAt: "2025-05-13T19:50:41.687030Z",
                        publishedAt: "2025-05-13T19:50:41.687033Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "fd1adbf4148c44cba983da6a4ad687eb",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687054Z",
                        updatedAt: "2025-05-13T19:50:41.687057Z",
                        publishedAt: "2025-05-13T19:50:41.687058Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "f18b08583cfe4abca977988a37660e94",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687066Z",
                        updatedAt: "2025-05-13T19:50:41.687068Z",
                        publishedAt: "2025-05-13T19:50:41.687069Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "79138f865cc043579c2945c86b941841",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687083Z",
                        updatedAt: "2025-05-13T19:50:41.687085Z",
                        publishedAt: "2025-05-13T19:50:41.687088Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "bbeea76532e94c35a4bb44958531a445",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687099Z",
                        updatedAt: "2025-05-13T19:50:41.687102Z",
                        publishedAt: "2025-05-13T19:50:41.687104Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
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
          id: "4567d6a4116243f496a0258e43ead564",
          name: "SF Richmond Substation",
          city: "San Francisco",
          state: "CA",
          latitude: 37.711013,
          longtitude: -122.473928,
          pincode: "94103",
          createdAt: "2025-05-13T19:50:41.687140Z",
          updatedAt: "2025-05-13T19:50:41.687143Z",
          publishedAt: "2025-05-13T19:50:41.687146Z",
          max_capacity_KW: 1000,
          transformers: [
            {
              id: "1828c7a78d7c4eb1948b70e83cce10d9",
              name: "Transformer_10",
              city: "San Francisco",
              state: "CA",
              latitude: 37.790832,
              longtitude: -122.475965,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.687167Z",
              updatedAt: "2025-05-13T19:50:41.687169Z",
              publishedAt: "2025-05-13T19:50:41.687170Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "5b483f72de3d4ffab8c4164a11b4631e",
                  code: "MTR-0100",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.749709,
                  longitude: -122.458133,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.687181Z",
                  updatedAt: "2025-05-13T19:50:41.687183Z",
                  publishedAt: "2025-05-13T19:50:41.687184Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "bc07c23da1804a44b19344e7bb921006",
                    name: "Caitlin Gates",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.687438Z",
                    updatedAt: "2025-05-13T19:50:41.687444Z",
                    publishedAt: "2025-05-13T19:50:41.687446Z",
                    ders: [
                      {
                        id: "7dd5a94f97ff478081cafdf46bcaac64",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687485Z",
                        updatedAt: "2025-05-13T19:50:41.687488Z",
                        publishedAt: "2025-05-13T19:50:41.687490Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "0b2d9a151c8749708fe033d1e62c3064",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687516Z",
                        updatedAt: "2025-05-13T19:50:41.687519Z",
                        publishedAt: "2025-05-13T19:50:41.687522Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "f50b5427c60d45f699c2a67c305ad129",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687541Z",
                        updatedAt: "2025-05-13T19:50:41.687544Z",
                        publishedAt: "2025-05-13T19:50:41.687547Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "a188816085f147f6bb1bd62ac18c8ca9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687564Z",
                        updatedAt: "2025-05-13T19:50:41.687566Z",
                        publishedAt: "2025-05-13T19:50:41.687569Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "73304b0093864ec199e9463925b3ecfd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687583Z",
                        updatedAt: "2025-05-13T19:50:41.687585Z",
                        publishedAt: "2025-05-13T19:50:41.687588Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "f2cf5ce9e6864a0b9d5efe164d39fada",
                  code: "MTR-0101",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.796232,
                  longitude: -122.403396,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.687617Z",
                  updatedAt: "2025-05-13T19:50:41.687620Z",
                  publishedAt: "2025-05-13T19:50:41.687623Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "9af3d05353204028a99facc2391368f3",
                    name: "Stacey Meza",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.687846Z",
                    updatedAt: "2025-05-13T19:50:41.687849Z",
                    publishedAt: "2025-05-13T19:50:41.687851Z",
                    ders: [
                      {
                        id: "e4e8a9b12c224a4b832950267b625d7d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687878Z",
                        updatedAt: "2025-05-13T19:50:41.687879Z",
                        publishedAt: "2025-05-13T19:50:41.687881Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "50800f767b14400ba2bb74b5040440f3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687888Z",
                        updatedAt: "2025-05-13T19:50:41.687889Z",
                        publishedAt: "2025-05-13T19:50:41.687891Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "d2d6b819f05b40c2af82854b9c83f7e0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.687898Z",
                        updatedAt: "2025-05-13T19:50:41.687899Z",
                        publishedAt: "2025-05-13T19:50:41.687901Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "7e08a126576249aba5ac6a39ccee3c0d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.688006Z",
                        updatedAt: "2025-05-13T19:50:41.688012Z",
                        publishedAt: "2025-05-13T19:50:41.688014Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "4bf2752e766041268c2cdac5f1c76063",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.688049Z",
                        updatedAt: "2025-05-13T19:50:41.688052Z",
                        publishedAt: "2025-05-13T19:50:41.688055Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "f7399ca4c92146a1965c1dada83daa66",
                  code: "MTR-0102",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.720833,
                  longitude: -122.474629,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.688163Z",
                  updatedAt: "2025-05-13T19:50:41.688177Z",
                  publishedAt: "2025-05-13T19:50:41.688180Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "f5af9ae7a4094c41906efeee21107a23",
                    name: "Justin Wilkins",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.688446Z",
                    updatedAt: "2025-05-13T19:50:41.688449Z",
                    publishedAt: "2025-05-13T19:50:41.688450Z",
                    ders: [
                      {
                        id: "dd38456f5f9a4e66956b0729e48d6774",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.688488Z",
                        updatedAt: "2025-05-13T19:50:41.688490Z",
                        publishedAt: "2025-05-13T19:50:41.688491Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "c1f899f573264c10bdd64a77069581fc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.688502Z",
                        updatedAt: "2025-05-13T19:50:41.688503Z",
                        publishedAt: "2025-05-13T19:50:41.688505Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "b9e8b25c01d641d088219efbe32ce2f0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.688512Z",
                        updatedAt: "2025-05-13T19:50:41.688515Z",
                        publishedAt: "2025-05-13T19:50:41.688517Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "278048f096454fafac96b3950448acd2",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.688527Z",
                        updatedAt: "2025-05-13T19:50:41.688530Z",
                        publishedAt: "2025-05-13T19:50:41.688532Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "83cbf5ee5490489a8f693726f0c0e74e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.688546Z",
                        updatedAt: "2025-05-13T19:50:41.688548Z",
                        publishedAt: "2025-05-13T19:50:41.688551Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "b1dbf9a822eb497baafa8a75fe529c18",
                  code: "MTR-0103",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.768768,
                  longitude: -122.508102,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.688644Z",
                  updatedAt: "2025-05-13T19:50:41.688649Z",
                  publishedAt: "2025-05-13T19:50:41.688652Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "98677e57b4c74de1ade72fab5db79c8b",
                    name: "Dawn Johnson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.689005Z",
                    updatedAt: "2025-05-13T19:50:41.689009Z",
                    publishedAt: "2025-05-13T19:50:41.689012Z",
                    ders: [
                      {
                        id: "f1942aa2b8144ff6bd25552c38bf9c95",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.689045Z",
                        updatedAt: "2025-05-13T19:50:41.689048Z",
                        publishedAt: "2025-05-13T19:50:41.689051Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "89a46688ad3049e48e39c802989b5a9c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.689151Z",
                        updatedAt: "2025-05-13T19:50:41.689248Z",
                        publishedAt: "2025-05-13T19:50:41.689251Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "f00bb5cace94449b8de03f47e9674c9a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.689335Z",
                        updatedAt: "2025-05-13T19:50:41.689341Z",
                        publishedAt: "2025-05-13T19:50:41.689344Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "413378b989454207a5c8f32982dfff40",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.689378Z",
                        updatedAt: "2025-05-13T19:50:41.689381Z",
                        publishedAt: "2025-05-13T19:50:41.689383Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "04bb44c5eae84c0a8c09309b0f51cdc4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.689396Z",
                        updatedAt: "2025-05-13T19:50:41.689399Z",
                        publishedAt: "2025-05-13T19:50:41.689402Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "fc60f5ea02434f9aa893941877d733dd",
                  code: "MTR-0104",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.702332,
                  longitude: -122.425816,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.689438Z",
                  updatedAt: "2025-05-13T19:50:41.689441Z",
                  publishedAt: "2025-05-13T19:50:41.689444Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "6a87807f79214a39b8631b184f164c0d",
                    name: "Matthew Chapman",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.689767Z",
                    updatedAt: "2025-05-13T19:50:41.689771Z",
                    publishedAt: "2025-05-13T19:50:41.689774Z",
                    ders: [
                      {
                        id: "79074bf5fbf04bd9879ed596f55fb7f0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.689811Z",
                        updatedAt: "2025-05-13T19:50:41.689814Z",
                        publishedAt: "2025-05-13T19:50:41.689816Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "1dcd6c2ca1044110a85ebe93706d73fd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.689841Z",
                        updatedAt: "2025-05-13T19:50:41.689844Z",
                        publishedAt: "2025-05-13T19:50:41.689846Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "3d50acf595ce4d4dbed7868d7dbf7895",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.689859Z",
                        updatedAt: "2025-05-13T19:50:41.689861Z",
                        publishedAt: "2025-05-13T19:50:41.689864Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "b0173688d2eb4415938e597526ede4ec",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.689965Z",
                        updatedAt: "2025-05-13T19:50:41.689970Z",
                        publishedAt: "2025-05-13T19:50:41.689972Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "f93741347b204a0a801c9ecf68d73347",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690010Z",
                        updatedAt: "2025-05-13T19:50:41.690012Z",
                        publishedAt: "2025-05-13T19:50:41.690013Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "32823fa8386f45d5b6c2bf053cd5805e",
                  code: "MTR-0105",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.703923,
                  longitude: -122.452075,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.690031Z",
                  updatedAt: "2025-05-13T19:50:41.690032Z",
                  publishedAt: "2025-05-13T19:50:41.690034Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "e559c939d3df4c85801964b99d12bb9a",
                    name: "Ashley Gallegos",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.690289Z",
                    updatedAt: "2025-05-13T19:50:41.690293Z",
                    publishedAt: "2025-05-13T19:50:41.690294Z",
                    ders: [
                      {
                        id: "9250191403b94048a042f8209d78a5a8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690337Z",
                        updatedAt: "2025-05-13T19:50:41.690340Z",
                        publishedAt: "2025-05-13T19:50:41.690343Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "3c75be9e60074439b6bd89efcbeb09a0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690361Z",
                        updatedAt: "2025-05-13T19:50:41.690363Z",
                        publishedAt: "2025-05-13T19:50:41.690365Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "645cb2dd9f054576aa888b782c9cecdc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690376Z",
                        updatedAt: "2025-05-13T19:50:41.690379Z",
                        publishedAt: "2025-05-13T19:50:41.690381Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "ccc487d2b9ab40d2905851412886d01e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690391Z",
                        updatedAt: "2025-05-13T19:50:41.690393Z",
                        publishedAt: "2025-05-13T19:50:41.690394Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "23c59a40f4224e39a96968474f9ec294",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690401Z",
                        updatedAt: "2025-05-13T19:50:41.690403Z",
                        publishedAt: "2025-05-13T19:50:41.690404Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "6e06f15ec53c4d478db9a157dc41e87e",
                  code: "MTR-0106",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.766984,
                  longitude: -122.485821,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.690419Z",
                  updatedAt: "2025-05-13T19:50:41.690420Z",
                  publishedAt: "2025-05-13T19:50:41.690422Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "89817a1b8f894048a0e3b8a88807ee68",
                    name: "Christopher Cox",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.690614Z",
                    updatedAt: "2025-05-13T19:50:41.690616Z",
                    publishedAt: "2025-05-13T19:50:41.690617Z",
                    ders: [
                      {
                        id: "0615240925bc459fb6152bec9f6c8007",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690646Z",
                        updatedAt: "2025-05-13T19:50:41.690648Z",
                        publishedAt: "2025-05-13T19:50:41.690649Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "2dc838b931c74c208f72dffb26e1cb22",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690657Z",
                        updatedAt: "2025-05-13T19:50:41.690658Z",
                        publishedAt: "2025-05-13T19:50:41.690659Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "26916abd218c4fdb87e0f0356f6c0f58",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690666Z",
                        updatedAt: "2025-05-13T19:50:41.690667Z",
                        publishedAt: "2025-05-13T19:50:41.690669Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "68e6892b385b423680655ad018488c85",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690675Z",
                        updatedAt: "2025-05-13T19:50:41.690676Z",
                        publishedAt: "2025-05-13T19:50:41.690678Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "3355951943134c86b98f52ea793dd06d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690684Z",
                        updatedAt: "2025-05-13T19:50:41.690686Z",
                        publishedAt: "2025-05-13T19:50:41.690687Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "4401a1313dc5454db43ccdcbe509748f",
                  code: "MTR-0107",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.808573,
                  longitude: -122.419039,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.690700Z",
                  updatedAt: "2025-05-13T19:50:41.690702Z",
                  publishedAt: "2025-05-13T19:50:41.690704Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "afd05526fd9f4a4781e0fcb9debc111d",
                    name: "Robert Richardson",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.690872Z",
                    updatedAt: "2025-05-13T19:50:41.690874Z",
                    publishedAt: "2025-05-13T19:50:41.690875Z",
                    ders: [
                      {
                        id: "bc5cdc61b02345fe99f5e67bb1cece81",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690902Z",
                        updatedAt: "2025-05-13T19:50:41.690905Z",
                        publishedAt: "2025-05-13T19:50:41.690907Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "8a775f7c05954bd089a01558d4a58c97",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690918Z",
                        updatedAt: "2025-05-13T19:50:41.690930Z",
                        publishedAt: "2025-05-13T19:50:41.690933Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "d6c1adfee9a34d3d8e6086ba96b53bcf",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690951Z",
                        updatedAt: "2025-05-13T19:50:41.690952Z",
                        publishedAt: "2025-05-13T19:50:41.690953Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "c92b5e08ba6d44daad7b4f65882b13c3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690973Z",
                        updatedAt: "2025-05-13T19:50:41.690974Z",
                        publishedAt: "2025-05-13T19:50:41.690976Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "ce80edc97a4545839758f1d814296e06",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.690983Z",
                        updatedAt: "2025-05-13T19:50:41.690984Z",
                        publishedAt: "2025-05-13T19:50:41.690986Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "dca78823cf6d437784b518d2866d1b09",
                  code: "MTR-0108",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.786895,
                  longitude: -122.498912,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.690998Z",
                  updatedAt: "2025-05-13T19:50:41.690999Z",
                  publishedAt: "2025-05-13T19:50:41.691001Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "dbaa784505cc471fab17652078de4368",
                    name: "Rachel Smith",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.691158Z",
                    updatedAt: "2025-05-13T19:50:41.691160Z",
                    publishedAt: "2025-05-13T19:50:41.691161Z",
                    ders: [
                      {
                        id: "ab58fddd50784edb972acd733b35ae7d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691182Z",
                        updatedAt: "2025-05-13T19:50:41.691183Z",
                        publishedAt: "2025-05-13T19:50:41.691185Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "8c519806eea64bcbb0b26ed0be52a8b1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691192Z",
                        updatedAt: "2025-05-13T19:50:41.691193Z",
                        publishedAt: "2025-05-13T19:50:41.691194Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "cd7426671ddc470499a7adaf63462f44",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691201Z",
                        updatedAt: "2025-05-13T19:50:41.691202Z",
                        publishedAt: "2025-05-13T19:50:41.691204Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "babebb3c7a1d45f2885b2e6ecf2059db",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691210Z",
                        updatedAt: "2025-05-13T19:50:41.691211Z",
                        publishedAt: "2025-05-13T19:50:41.691213Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "5f7cbebe270f437eaecb7d4f246a0043",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691219Z",
                        updatedAt: "2025-05-13T19:50:41.691221Z",
                        publishedAt: "2025-05-13T19:50:41.691222Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "3b61b20f89614abd9c103798b7d10651",
                  code: "MTR-0109",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.788772,
                  longitude: -122.514587,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.691233Z",
                  updatedAt: "2025-05-13T19:50:41.691235Z",
                  publishedAt: "2025-05-13T19:50:41.691236Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "feb5fa2fc2be4c1893e1500b94ca8ede",
                    name: "Andrew Knight",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.691403Z",
                    updatedAt: "2025-05-13T19:50:41.691405Z",
                    publishedAt: "2025-05-13T19:50:41.691407Z",
                    ders: [
                      {
                        id: "813e461247d8458990dd6712031cd3c4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691432Z",
                        updatedAt: "2025-05-13T19:50:41.691434Z",
                        publishedAt: "2025-05-13T19:50:41.691437Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "4c63fc40cf144c01b9cce327e5ed383c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691470Z",
                        updatedAt: "2025-05-13T19:50:41.691472Z",
                        publishedAt: "2025-05-13T19:50:41.691473Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "75238416e73e4987a4eafee7314dd0b8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691480Z",
                        updatedAt: "2025-05-13T19:50:41.691481Z",
                        publishedAt: "2025-05-13T19:50:41.691482Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "bcd2933ee1f34d7fb6236f8b3471b329",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691489Z",
                        updatedAt: "2025-05-13T19:50:41.691491Z",
                        publishedAt: "2025-05-13T19:50:41.691492Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "34cdb4f019904c37873ae39db6aedc54",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691503Z",
                        updatedAt: "2025-05-13T19:50:41.691506Z",
                        publishedAt: "2025-05-13T19:50:41.691508Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "c4c4bb0eabe048a6a1d316afe1ae25bb",
              name: "Transformer_11",
              city: "San Francisco",
              state: "CA",
              latitude: 37.77875,
              longtitude: -122.363395,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.691540Z",
              updatedAt: "2025-05-13T19:50:41.691543Z",
              publishedAt: "2025-05-13T19:50:41.691545Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "6209f4998f9940e2a81517d7821cbad1",
                  code: "MTR-0110",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.73545,
                  longitude: -122.449899,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.691555Z",
                  updatedAt: "2025-05-13T19:50:41.691557Z",
                  publishedAt: "2025-05-13T19:50:41.691558Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "68e66d50665e488e8c73efa2a3f40042",
                    name: "Sue Curtis",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.691746Z",
                    updatedAt: "2025-05-13T19:50:41.691748Z",
                    publishedAt: "2025-05-13T19:50:41.691750Z",
                    ders: [
                      {
                        id: "da37a01641a84214aebd7a616f246c7c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691775Z",
                        updatedAt: "2025-05-13T19:50:41.691776Z",
                        publishedAt: "2025-05-13T19:50:41.691778Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "3ea3587c19f747f9a36964cc14961aad",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691785Z",
                        updatedAt: "2025-05-13T19:50:41.691787Z",
                        publishedAt: "2025-05-13T19:50:41.691790Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "06a2f925490b4aa281fc8d24abc7b6a0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691800Z",
                        updatedAt: "2025-05-13T19:50:41.691802Z",
                        publishedAt: "2025-05-13T19:50:41.691805Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "13c0baf1709d48399b08b3d4ac25ccfa",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691815Z",
                        updatedAt: "2025-05-13T19:50:41.691817Z",
                        publishedAt: "2025-05-13T19:50:41.691820Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "b91a1288a35f48bfae82636344f9c865",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.691847Z",
                        updatedAt: "2025-05-13T19:50:41.691849Z",
                        publishedAt: "2025-05-13T19:50:41.691850Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "f0afcbb0c815459eafc1866b38939998",
                  code: "MTR-0111",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.728389,
                  longitude: -122.376981,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.691886Z",
                  updatedAt: "2025-05-13T19:50:41.691889Z",
                  publishedAt: "2025-05-13T19:50:41.691891Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "1116faf833ce4b899ef7b3cf4d5a3ceb",
                    name: "Joshua Bates",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.692090Z",
                    updatedAt: "2025-05-13T19:50:41.692092Z",
                    publishedAt: "2025-05-13T19:50:41.692094Z",
                    ders: [
                      {
                        id: "f0fc8f53d7694744813e59516b48c8f1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692124Z",
                        updatedAt: "2025-05-13T19:50:41.692125Z",
                        publishedAt: "2025-05-13T19:50:41.692127Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "b3db190e829c4e639ac2c3da22c53df9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692135Z",
                        updatedAt: "2025-05-13T19:50:41.692136Z",
                        publishedAt: "2025-05-13T19:50:41.692138Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "342c545ee0cd4a2c9bee9414cc2072e8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692147Z",
                        updatedAt: "2025-05-13T19:50:41.692148Z",
                        publishedAt: "2025-05-13T19:50:41.692150Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "3a3fafc184394693901a28ad0d20b1ad",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692255Z",
                        updatedAt: "2025-05-13T19:50:41.692262Z",
                        publishedAt: "2025-05-13T19:50:41.692266Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "639d2972fd9e4e12ae308dc3b187105e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692284Z",
                        updatedAt: "2025-05-13T19:50:41.692286Z",
                        publishedAt: "2025-05-13T19:50:41.692290Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "07d9cb6de3584c05a319a6dc7ce54172",
                  code: "MTR-0112",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.730052,
                  longitude: -122.366599,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.692336Z",
                  updatedAt: "2025-05-13T19:50:41.692339Z",
                  publishedAt: "2025-05-13T19:50:41.692342Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "3ecfac32dc4846379f54fee1b5a864bf",
                    name: "Tracy Brown",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.692698Z",
                    updatedAt: "2025-05-13T19:50:41.692702Z",
                    publishedAt: "2025-05-13T19:50:41.692705Z",
                    ders: [
                      {
                        id: "18245ab1afc84287bccffdfab0a16656",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692737Z",
                        updatedAt: "2025-05-13T19:50:41.692740Z",
                        publishedAt: "2025-05-13T19:50:41.692743Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "4d9cf2ee90054b92b41882628b866fc6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692768Z",
                        updatedAt: "2025-05-13T19:50:41.692771Z",
                        publishedAt: "2025-05-13T19:50:41.692774Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "b488096c0da64d7c9abe114e711738c7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692800Z",
                        updatedAt: "2025-05-13T19:50:41.692803Z",
                        publishedAt: "2025-05-13T19:50:41.692806Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "fe1cd653955945748f9353813f8cf629",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692830Z",
                        updatedAt: "2025-05-13T19:50:41.692833Z",
                        publishedAt: "2025-05-13T19:50:41.692836Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "42c0c68e3da74589b26e9050d6a633b8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.692861Z",
                        updatedAt: "2025-05-13T19:50:41.692864Z",
                        publishedAt: "2025-05-13T19:50:41.692867Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "ef5027dc7e9b4b1ca8cee6225b600be9",
                  code: "MTR-0113",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.773395,
                  longitude: -122.474666,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.692898Z",
                  updatedAt: "2025-05-13T19:50:41.692902Z",
                  publishedAt: "2025-05-13T19:50:41.692904Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "6493d37b97b944e894bb3f9b922e02c3",
                    name: "Joseph Powell",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.693271Z",
                    updatedAt: "2025-05-13T19:50:41.693276Z",
                    publishedAt: "2025-05-13T19:50:41.693279Z",
                    ders: [
                      {
                        id: "0d8c2f5b3a2146f09fe6e462810c2e52",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693315Z",
                        updatedAt: "2025-05-13T19:50:41.693318Z",
                        publishedAt: "2025-05-13T19:50:41.693321Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "624ffb8472274aa49cc5eb2ce166fc2a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693345Z",
                        updatedAt: "2025-05-13T19:50:41.693348Z",
                        publishedAt: "2025-05-13T19:50:41.693350Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "790cdf6d78154ceea783012dd179c989",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693374Z",
                        updatedAt: "2025-05-13T19:50:41.693377Z",
                        publishedAt: "2025-05-13T19:50:41.693380Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "a847044f3f104ff69d51acd17a3629cd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693390Z",
                        updatedAt: "2025-05-13T19:50:41.693393Z",
                        publishedAt: "2025-05-13T19:50:41.693396Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "8499587677764542b2efd54422eb80da",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693408Z",
                        updatedAt: "2025-05-13T19:50:41.693411Z",
                        publishedAt: "2025-05-13T19:50:41.693413Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "887a19bf8588449d84fad549b6e294cb",
                  code: "MTR-0114",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.786481,
                  longitude: -122.406028,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.693455Z",
                  updatedAt: "2025-05-13T19:50:41.693458Z",
                  publishedAt: "2025-05-13T19:50:41.693461Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "29f24a22300d470a968f7d86c84c3b61",
                    name: "Jessica Henry",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.693758Z",
                    updatedAt: "2025-05-13T19:50:41.693761Z",
                    publishedAt: "2025-05-13T19:50:41.693764Z",
                    ders: [
                      {
                        id: "41b6dd8ba4fd41909b69ee176983dfe3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693804Z",
                        updatedAt: "2025-05-13T19:50:41.693807Z",
                        publishedAt: "2025-05-13T19:50:41.693810Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "fae2d80260f04d089aa0b9f335ae1818",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693842Z",
                        updatedAt: "2025-05-13T19:50:41.693845Z",
                        publishedAt: "2025-05-13T19:50:41.693848Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "247bf46bb8f841db9f1389642cd42e27",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693861Z",
                        updatedAt: "2025-05-13T19:50:41.693864Z",
                        publishedAt: "2025-05-13T19:50:41.693867Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "8ad68dd93d3f49c688932c6606027826",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693882Z",
                        updatedAt: "2025-05-13T19:50:41.693885Z",
                        publishedAt: "2025-05-13T19:50:41.693887Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "2f829be7732147c59da1e6972dd438b3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.693915Z",
                        updatedAt: "2025-05-13T19:50:41.693917Z",
                        publishedAt: "2025-05-13T19:50:41.693920Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "a74ba2ec15d049da9aa22ffe04eda801",
                  code: "MTR-0115",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.712298,
                  longitude: -122.422635,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.693963Z",
                  updatedAt: "2025-05-13T19:50:41.693967Z",
                  publishedAt: "2025-05-13T19:50:41.693969Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "ccf1f19255974305b3331c4156934c7a",
                    name: "Scott Parker",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.694258Z",
                    updatedAt: "2025-05-13T19:50:41.694262Z",
                    publishedAt: "2025-05-13T19:50:41.694265Z",
                    ders: [
                      {
                        id: "1fdc5b301586402f9c00e5b3e23f4aa0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694294Z",
                        updatedAt: "2025-05-13T19:50:41.694297Z",
                        publishedAt: "2025-05-13T19:50:41.694300Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "2489fdbad88e465db8a60fee90e89c64",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694395Z",
                        updatedAt: "2025-05-13T19:50:41.694403Z",
                        publishedAt: "2025-05-13T19:50:41.694406Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "fd844000b6244d9abe628bb69b4c588c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694451Z",
                        updatedAt: "2025-05-13T19:50:41.694453Z",
                        publishedAt: "2025-05-13T19:50:41.694454Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "643491bc21674e78a1ac944db486b32f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694462Z",
                        updatedAt: "2025-05-13T19:50:41.694463Z",
                        publishedAt: "2025-05-13T19:50:41.694465Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "1b1aaf30d24840b2abd9f47c522b4b6f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694472Z",
                        updatedAt: "2025-05-13T19:50:41.694473Z",
                        publishedAt: "2025-05-13T19:50:41.694475Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "2d3c1fc742764c8eaab3bd0b8e0f78ef",
                  code: "MTR-0116",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.7035,
                  longitude: -122.498764,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.694502Z",
                  updatedAt: "2025-05-13T19:50:41.694504Z",
                  publishedAt: "2025-05-13T19:50:41.694505Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "74b43fd4dfa24615a76175782ecc2e33",
                    name: "Robert Lawrence",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.694736Z",
                    updatedAt: "2025-05-13T19:50:41.694740Z",
                    publishedAt: "2025-05-13T19:50:41.694743Z",
                    ders: [
                      {
                        id: "cc04ee0164b44b3d88fe40830a6d6f1d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694776Z",
                        updatedAt: "2025-05-13T19:50:41.694780Z",
                        publishedAt: "2025-05-13T19:50:41.694782Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "ffa09f102f4b4f40a52b9e5b9b26f0b0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694805Z",
                        updatedAt: "2025-05-13T19:50:41.694808Z",
                        publishedAt: "2025-05-13T19:50:41.694811Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "1bf98643b4974fa38e6bc6bafd43408d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694821Z",
                        updatedAt: "2025-05-13T19:50:41.694838Z",
                        publishedAt: "2025-05-13T19:50:41.694840Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "b22fbe2adf7346d7924f66e1a4fdacbb",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694857Z",
                        updatedAt: "2025-05-13T19:50:41.694859Z",
                        publishedAt: "2025-05-13T19:50:41.694861Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "7bedf1b20c7742ca8c972279f871b315",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.694868Z",
                        updatedAt: "2025-05-13T19:50:41.694870Z",
                        publishedAt: "2025-05-13T19:50:41.694871Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "da62516f5a4b49b29c299c2d4bd2d831",
                  code: "MTR-0117",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.792061,
                  longitude: -122.391654,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.694894Z",
                  updatedAt: "2025-05-13T19:50:41.694895Z",
                  publishedAt: "2025-05-13T19:50:41.694897Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "7671d39601d546eca7862525df91eb1a",
                    name: "Donna Sutton",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.695095Z",
                    updatedAt: "2025-05-13T19:50:41.695098Z",
                    publishedAt: "2025-05-13T19:50:41.695099Z",
                    ders: [
                      {
                        id: "8b07247f94624795a7eba17ed48123dd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695134Z",
                        updatedAt: "2025-05-13T19:50:41.695137Z",
                        publishedAt: "2025-05-13T19:50:41.695139Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "62d06b1ef3a24a2da194437afb8a6d6e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695209Z",
                        updatedAt: "2025-05-13T19:50:41.695214Z",
                        publishedAt: "2025-05-13T19:50:41.695217Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "fbff9816e8704adaa30a0fdb3a20fecc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695233Z",
                        updatedAt: "2025-05-13T19:50:41.695236Z",
                        publishedAt: "2025-05-13T19:50:41.695239Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "853897fd057a4f98a504cee8c52e5040",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695273Z",
                        updatedAt: "2025-05-13T19:50:41.695276Z",
                        publishedAt: "2025-05-13T19:50:41.695279Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "48bbdf4ccce2414e9846cee107f73df1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695322Z",
                        updatedAt: "2025-05-13T19:50:41.695325Z",
                        publishedAt: "2025-05-13T19:50:41.695328Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "1ea3f8910ac64862a126eb75855d3b76",
                  code: "MTR-0118",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.729185,
                  longitude: -122.370139,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.695373Z",
                  updatedAt: "2025-05-13T19:50:41.695377Z",
                  publishedAt: "2025-05-13T19:50:41.695380Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "7fc076ce6e2e453dbd126d76f80a564d",
                    name: "John Ramsey",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.695709Z",
                    updatedAt: "2025-05-13T19:50:41.695713Z",
                    publishedAt: "2025-05-13T19:50:41.695715Z",
                    ders: [
                      {
                        id: "dd6253f4908e4a2f8103b49bba824e6f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695802Z",
                        updatedAt: "2025-05-13T19:50:41.695806Z",
                        publishedAt: "2025-05-13T19:50:41.695809Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "e6bcee5a44d64ac28d4e0ad8dc72d899",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695836Z",
                        updatedAt: "2025-05-13T19:50:41.695839Z",
                        publishedAt: "2025-05-13T19:50:41.695842Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "8ada12c532eb496e89ccebc917b3b3bb",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695854Z",
                        updatedAt: "2025-05-13T19:50:41.695858Z",
                        publishedAt: "2025-05-13T19:50:41.695860Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "d11a41b5656347e0a68b25572987508e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695889Z",
                        updatedAt: "2025-05-13T19:50:41.695892Z",
                        publishedAt: "2025-05-13T19:50:41.695895Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "6a3e4b37923a4e3ca63b10af3c777cd2",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.695908Z",
                        updatedAt: "2025-05-13T19:50:41.695911Z",
                        publishedAt: "2025-05-13T19:50:41.695914Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "54a399b842954067bcff7fd1d4279fc8",
                  code: "MTR-0119",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.752038,
                  longitude: -122.436771,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.695953Z",
                  updatedAt: "2025-05-13T19:50:41.695956Z",
                  publishedAt: "2025-05-13T19:50:41.695959Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "93bc8547058a47a1be9409fb927c6109",
                    name: "Jon Bowman",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.696264Z",
                    updatedAt: "2025-05-13T19:50:41.696267Z",
                    publishedAt: "2025-05-13T19:50:41.696269Z",
                    ders: [
                      {
                        id: "c00e137ba55a44998d355c507f68d62e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696358Z",
                        updatedAt: "2025-05-13T19:50:41.696364Z",
                        publishedAt: "2025-05-13T19:50:41.696366Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "518829493c5148578eea73c80e41bd40",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696392Z",
                        updatedAt: "2025-05-13T19:50:41.696394Z",
                        publishedAt: "2025-05-13T19:50:41.696395Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "931630744b854cf0be179816ace1db78",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696407Z",
                        updatedAt: "2025-05-13T19:50:41.696409Z",
                        publishedAt: "2025-05-13T19:50:41.696411Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "5494911465214dd1b1358b21276b477a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696418Z",
                        updatedAt: "2025-05-13T19:50:41.696419Z",
                        publishedAt: "2025-05-13T19:50:41.696421Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "119bf328a68a402ead8b349af0a58dd6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696428Z",
                        updatedAt: "2025-05-13T19:50:41.696429Z",
                        publishedAt: "2025-05-13T19:50:41.696431Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "07088c1de4bf41c9b4551850625fd8b9",
              name: "Transformer_12",
              city: "San Francisco",
              state: "CA",
              latitude: 37.734297,
              longtitude: -122.482955,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.696483Z",
              updatedAt: "2025-05-13T19:50:41.696486Z",
              publishedAt: "2025-05-13T19:50:41.696489Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "1192511015a24891a6ce508f1ef9918f",
                  code: "MTR-0120",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.772492,
                  longitude: -122.469669,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.696521Z",
                  updatedAt: "2025-05-13T19:50:41.696523Z",
                  publishedAt: "2025-05-13T19:50:41.696524Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "bf6f12ee80684e29995dbc2d58132cd9",
                    name: "Jessica Mathis",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.696738Z",
                    updatedAt: "2025-05-13T19:50:41.696741Z",
                    publishedAt: "2025-05-13T19:50:41.696742Z",
                    ders: [
                      {
                        id: "81960252f4cf4c9a88ea159faab8dccd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696770Z",
                        updatedAt: "2025-05-13T19:50:41.696771Z",
                        publishedAt: "2025-05-13T19:50:41.696773Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "e2cd1e12dca24642b6fd23a33866b410",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696782Z",
                        updatedAt: "2025-05-13T19:50:41.696783Z",
                        publishedAt: "2025-05-13T19:50:41.696785Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "ef6d56620951482fab59da17c65d95f8",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696792Z",
                        updatedAt: "2025-05-13T19:50:41.696793Z",
                        publishedAt: "2025-05-13T19:50:41.696795Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "3e81df51bb1240e59083044e98c9ab8b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696811Z",
                        updatedAt: "2025-05-13T19:50:41.696812Z",
                        publishedAt: "2025-05-13T19:50:41.696814Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "8a30abcec99b41a4ad0156f56db4da86",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.696837Z",
                        updatedAt: "2025-05-13T19:50:41.696840Z",
                        publishedAt: "2025-05-13T19:50:41.696842Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "a8aa346a922843668da35e60c8e89ca7",
                  code: "MTR-0121",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.808185,
                  longitude: -122.49948,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.696877Z",
                  updatedAt: "2025-05-13T19:50:41.696879Z",
                  publishedAt: "2025-05-13T19:50:41.696880Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "bb8652472a8e4ec29f6ca070e8b9100c",
                    name: "Lonnie Brooks",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.697079Z",
                    updatedAt: "2025-05-13T19:50:41.697082Z",
                    publishedAt: "2025-05-13T19:50:41.697085Z",
                    ders: [
                      {
                        id: "7eab8da5119e4e8a8231afd73a01fb56",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697120Z",
                        updatedAt: "2025-05-13T19:50:41.697121Z",
                        publishedAt: "2025-05-13T19:50:41.697123Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "7c8673b95ab74272abc0c4577820c086",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697131Z",
                        updatedAt: "2025-05-13T19:50:41.697133Z",
                        publishedAt: "2025-05-13T19:50:41.697134Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "9dd175078a714dd4b88d2785fc7a42c7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697141Z",
                        updatedAt: "2025-05-13T19:50:41.697143Z",
                        publishedAt: "2025-05-13T19:50:41.697144Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "c6b11dbca51f453390f9778e57d5952e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697151Z",
                        updatedAt: "2025-05-13T19:50:41.697238Z",
                        publishedAt: "2025-05-13T19:50:41.697241Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "ca50d7eaf9f34710b48fd6d83e541d97",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697268Z",
                        updatedAt: "2025-05-13T19:50:41.697271Z",
                        publishedAt: "2025-05-13T19:50:41.697274Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "8a06e2c58a6d4be2938ac8f4fe947a9e",
                  code: "MTR-0122",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.781888,
                  longitude: -122.509488,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.697305Z",
                  updatedAt: "2025-05-13T19:50:41.697307Z",
                  publishedAt: "2025-05-13T19:50:41.697308Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "53dc82a64d69449d83e4342f5cd61938",
                    name: "Gerald Weiss DDS",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.697516Z",
                    updatedAt: "2025-05-13T19:50:41.697518Z",
                    publishedAt: "2025-05-13T19:50:41.697519Z",
                    ders: [
                      {
                        id: "c1eceae485db4a7fab1e5e26be5e4eb2",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697549Z",
                        updatedAt: "2025-05-13T19:50:41.697550Z",
                        publishedAt: "2025-05-13T19:50:41.697553Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "a35bdcc11bee44338aa3af7f5ab6cfa5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697564Z",
                        updatedAt: "2025-05-13T19:50:41.697567Z",
                        publishedAt: "2025-05-13T19:50:41.697569Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "bfa6a7fc882a4113b156db585fe08199",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697579Z",
                        updatedAt: "2025-05-13T19:50:41.697582Z",
                        publishedAt: "2025-05-13T19:50:41.697585Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "1eee12b5f5e049569ab0f138ab7e08ec",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697593Z",
                        updatedAt: "2025-05-13T19:50:41.697594Z",
                        publishedAt: "2025-05-13T19:50:41.697596Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "c9e65cf1427440b88606fa139f851a96",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697602Z",
                        updatedAt: "2025-05-13T19:50:41.697603Z",
                        publishedAt: "2025-05-13T19:50:41.697605Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "c3d87f204e48447388ea842266ed4d9f",
                  code: "MTR-0123",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.728376,
                  longitude: -122.438687,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.697622Z",
                  updatedAt: "2025-05-13T19:50:41.697624Z",
                  publishedAt: "2025-05-13T19:50:41.697626Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "08926b68945b40ff82a971e8f9cb80fa",
                    name: "Jason Adams",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.697870Z",
                    updatedAt: "2025-05-13T19:50:41.697873Z",
                    publishedAt: "2025-05-13T19:50:41.697875Z",
                    ders: [
                      {
                        id: "f9900594892b4b61b0f827e1d284db29",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697916Z",
                        updatedAt: "2025-05-13T19:50:41.697918Z",
                        publishedAt: "2025-05-13T19:50:41.697921Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "ba8a6ae418504c3d84793568a706c49b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697938Z",
                        updatedAt: "2025-05-13T19:50:41.697942Z",
                        publishedAt: "2025-05-13T19:50:41.697945Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "07aa0afc54f2419c958a6a9d708dc279",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697956Z",
                        updatedAt: "2025-05-13T19:50:41.697958Z",
                        publishedAt: "2025-05-13T19:50:41.697959Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "67c01d1e089d436286d30de4f4f50a0d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697966Z",
                        updatedAt: "2025-05-13T19:50:41.697968Z",
                        publishedAt: "2025-05-13T19:50:41.697970Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "491dd24bbb2e4e8cb11cc00b6f5faf07",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.697980Z",
                        updatedAt: "2025-05-13T19:50:41.697983Z",
                        publishedAt: "2025-05-13T19:50:41.697985Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "bc28bc03f37b493a9a2d36d7096003ac",
                  code: "MTR-0124",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.780433,
                  longitude: -122.482677,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.698003Z",
                  updatedAt: "2025-05-13T19:50:41.698006Z",
                  publishedAt: "2025-05-13T19:50:41.698008Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "baad337f06374683ae6e3413edb8a4ee",
                    name: "Erin Cook",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.698177Z",
                    updatedAt: "2025-05-13T19:50:41.698181Z",
                    publishedAt: "2025-05-13T19:50:41.698184Z",
                    ders: [
                      {
                        id: "4b7dcacc53b84a9384bb1854b69c42da",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698220Z",
                        updatedAt: "2025-05-13T19:50:41.698222Z",
                        publishedAt: "2025-05-13T19:50:41.698223Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "a8e51188306841cdbc43f0348d38e06c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698231Z",
                        updatedAt: "2025-05-13T19:50:41.698232Z",
                        publishedAt: "2025-05-13T19:50:41.698233Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "b22b59822cc94561933c486cb1145b5d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698240Z",
                        updatedAt: "2025-05-13T19:50:41.698242Z",
                        publishedAt: "2025-05-13T19:50:41.698243Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "c8b06428808c4ae0aa8b16b321eb8b3a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698249Z",
                        updatedAt: "2025-05-13T19:50:41.698251Z",
                        publishedAt: "2025-05-13T19:50:41.698252Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "efcaa20d063141ac9a70dcd3c86c4db5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698259Z",
                        updatedAt: "2025-05-13T19:50:41.698260Z",
                        publishedAt: "2025-05-13T19:50:41.698262Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "c8d566d0cf3f476ea64c8e5e3395d2af",
                  code: "MTR-0125",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.798204,
                  longitude: -122.504178,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.698277Z",
                  updatedAt: "2025-05-13T19:50:41.698278Z",
                  publishedAt: "2025-05-13T19:50:41.698280Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "438d1d5c4e904c21a91e054a4f21c0be",
                    name: "Miguel Smith",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.698461Z",
                    updatedAt: "2025-05-13T19:50:41.698464Z",
                    publishedAt: "2025-05-13T19:50:41.698467Z",
                    ders: [
                      {
                        id: "203f44a7c8604b49ad0410c10b542b91",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698504Z",
                        updatedAt: "2025-05-13T19:50:41.698505Z",
                        publishedAt: "2025-05-13T19:50:41.698507Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "4c81b894f68d4a238deab1ed34c48a4d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698514Z",
                        updatedAt: "2025-05-13T19:50:41.698516Z",
                        publishedAt: "2025-05-13T19:50:41.698517Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "60dc23df1b5e413587e7db8190778d3a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698524Z",
                        updatedAt: "2025-05-13T19:50:41.698526Z",
                        publishedAt: "2025-05-13T19:50:41.698527Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "8a176a45d6b04014b831b7b6ecb91d8a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698534Z",
                        updatedAt: "2025-05-13T19:50:41.698535Z",
                        publishedAt: "2025-05-13T19:50:41.698536Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "e8b9288a19cd48769055dd866946e064",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698543Z",
                        updatedAt: "2025-05-13T19:50:41.698544Z",
                        publishedAt: "2025-05-13T19:50:41.698545Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "b9d0ec63eaba47f98b65b31b8fdc1cd6",
                  code: "MTR-0126",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.799386,
                  longitude: -122.394567,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.698558Z",
                  updatedAt: "2025-05-13T19:50:41.698559Z",
                  publishedAt: "2025-05-13T19:50:41.698561Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "9d1d344248724851ba90f02bfb2233c4",
                    name: "Melissa Carter",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.698734Z",
                    updatedAt: "2025-05-13T19:50:41.698736Z",
                    publishedAt: "2025-05-13T19:50:41.698738Z",
                    ders: [
                      {
                        id: "2f8161b8f6854b33b1c84f2155c0bc9e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698762Z",
                        updatedAt: "2025-05-13T19:50:41.698764Z",
                        publishedAt: "2025-05-13T19:50:41.698765Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "e21a6aa0a0734fefaf5f6413368b51ca",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698780Z",
                        updatedAt: "2025-05-13T19:50:41.698781Z",
                        publishedAt: "2025-05-13T19:50:41.698783Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "51b8b7274dc944f0842f55d4e1fa5e9e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698798Z",
                        updatedAt: "2025-05-13T19:50:41.698799Z",
                        publishedAt: "2025-05-13T19:50:41.698801Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "0b29c8c26b8d45328af85c9ac40703fd",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698807Z",
                        updatedAt: "2025-05-13T19:50:41.698809Z",
                        publishedAt: "2025-05-13T19:50:41.698810Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "482d439c314046b8b0dcc615474001b0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.698831Z",
                        updatedAt: "2025-05-13T19:50:41.698832Z",
                        publishedAt: "2025-05-13T19:50:41.698834Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "44979d42da9946aca628e3b98e413ba7",
                  code: "MTR-0127",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79474,
                  longitude: -122.471526,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.698846Z",
                  updatedAt: "2025-05-13T19:50:41.698848Z",
                  publishedAt: "2025-05-13T19:50:41.698849Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "d25d2d3b2e484be2ba0b8818208d9b3a",
                    name: "Rebecca Mitchell",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.699018Z",
                    updatedAt: "2025-05-13T19:50:41.699031Z",
                    publishedAt: "2025-05-13T19:50:41.699032Z",
                    ders: [
                      {
                        id: "d591e83184ea4a87ab9344592cacbdef",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699060Z",
                        updatedAt: "2025-05-13T19:50:41.699063Z",
                        publishedAt: "2025-05-13T19:50:41.699065Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "d64946ae1e1148fd8c977407c907afac",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699077Z",
                        updatedAt: "2025-05-13T19:50:41.699080Z",
                        publishedAt: "2025-05-13T19:50:41.699083Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "555f4719cff34224a29002433be257f4",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699091Z",
                        updatedAt: "2025-05-13T19:50:41.699092Z",
                        publishedAt: "2025-05-13T19:50:41.699094Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "51dd66151c144505b47cdae6e7baec1a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699100Z",
                        updatedAt: "2025-05-13T19:50:41.699102Z",
                        publishedAt: "2025-05-13T19:50:41.699103Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "1c0b5a8b27de427f82f3f400794b3d2f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699110Z",
                        updatedAt: "2025-05-13T19:50:41.699111Z",
                        publishedAt: "2025-05-13T19:50:41.699113Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "519056485f46470a81113e3f775ca5b3",
                  code: "MTR-0128",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.769149,
                  longitude: -122.409304,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.699124Z",
                  updatedAt: "2025-05-13T19:50:41.699126Z",
                  publishedAt: "2025-05-13T19:50:41.699127Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "784760f0ce434584b70f16d6a472db25",
                    name: "Robert Cook",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.699413Z",
                    updatedAt: "2025-05-13T19:50:41.699418Z",
                    publishedAt: "2025-05-13T19:50:41.699420Z",
                    ders: [
                      {
                        id: "cc09e395e61341c8bd6e0cb4c5bc9677",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699458Z",
                        updatedAt: "2025-05-13T19:50:41.699461Z",
                        publishedAt: "2025-05-13T19:50:41.699464Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "95398af653b441d49dcd51c8ed95304a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699480Z",
                        updatedAt: "2025-05-13T19:50:41.699482Z",
                        publishedAt: "2025-05-13T19:50:41.699483Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "a88e0154c4d14af8b5881a334a3166f9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699501Z",
                        updatedAt: "2025-05-13T19:50:41.699504Z",
                        publishedAt: "2025-05-13T19:50:41.699507Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "b11d688b9dfa4b5cafababee4b8fe6c1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699545Z",
                        updatedAt: "2025-05-13T19:50:41.699547Z",
                        publishedAt: "2025-05-13T19:50:41.699549Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "5cb3e186f3c24772af418d38c52d040b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699557Z",
                        updatedAt: "2025-05-13T19:50:41.699558Z",
                        publishedAt: "2025-05-13T19:50:41.699559Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "4625d6f57b8b4798866b617705bafd80",
                  code: "MTR-0129",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.706681,
                  longitude: -122.460886,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.699582Z",
                  updatedAt: "2025-05-13T19:50:41.699585Z",
                  publishedAt: "2025-05-13T19:50:41.699587Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "01d1636d3d6449f1af0d703c1e52e66f",
                    name: "Hunter Williams",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.699787Z",
                    updatedAt: "2025-05-13T19:50:41.699789Z",
                    publishedAt: "2025-05-13T19:50:41.699791Z",
                    ders: [
                      {
                        id: "e5bd16778bcd4f5b8d355948a1a24eff",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699815Z",
                        updatedAt: "2025-05-13T19:50:41.699817Z",
                        publishedAt: "2025-05-13T19:50:41.699818Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "57a9e061c7a44bf4a2134f64954bb44d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699827Z",
                        updatedAt: "2025-05-13T19:50:41.699828Z",
                        publishedAt: "2025-05-13T19:50:41.699830Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "3924c81cbb5449c2a38c31ce69c65832",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699836Z",
                        updatedAt: "2025-05-13T19:50:41.699838Z",
                        publishedAt: "2025-05-13T19:50:41.699839Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "c5e859b60f6b4a4588eff32e31981c1c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699846Z",
                        updatedAt: "2025-05-13T19:50:41.699847Z",
                        publishedAt: "2025-05-13T19:50:41.699849Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "66c06954713a47258332b22aeeab483f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.699855Z",
                        updatedAt: "2025-05-13T19:50:41.699857Z",
                        publishedAt: "2025-05-13T19:50:41.699858Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "2979ac963ada48c8975768b35bd11577",
              name: "Transformer_13",
              city: "San Francisco",
              state: "CA",
              latitude: 37.758112,
              longtitude: -122.477705,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.699874Z",
              updatedAt: "2025-05-13T19:50:41.699876Z",
              publishedAt: "2025-05-13T19:50:41.699877Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "1452f949077c4e668eb09bc0bfe969f6",
                  code: "MTR-0130",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.758226,
                  longitude: -122.475163,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.699887Z",
                  updatedAt: "2025-05-13T19:50:41.699888Z",
                  publishedAt: "2025-05-13T19:50:41.699890Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "d5b868f2fcce416d9ffcc12052083c35",
                    name: "Heather Davis",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.700045Z",
                    updatedAt: "2025-05-13T19:50:41.700047Z",
                    publishedAt: "2025-05-13T19:50:41.700048Z",
                    ders: [
                      {
                        id: "ef23c359611b4cd982c3a80efd88e3d2",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700073Z",
                        updatedAt: "2025-05-13T19:50:41.700075Z",
                        publishedAt: "2025-05-13T19:50:41.700078Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "a3da712fc1884680a6bad16ecd4c9575",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700090Z",
                        updatedAt: "2025-05-13T19:50:41.700093Z",
                        publishedAt: "2025-05-13T19:50:41.700095Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "667d3c04b42148149a2e73e9fe0ae79b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700105Z",
                        updatedAt: "2025-05-13T19:50:41.700107Z",
                        publishedAt: "2025-05-13T19:50:41.700108Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "aaf149820d724e4f8e44de029c2643a0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700115Z",
                        updatedAt: "2025-05-13T19:50:41.700116Z",
                        publishedAt: "2025-05-13T19:50:41.700118Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "a60a5204ff9e41f59d9e67cda3c0725b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700125Z",
                        updatedAt: "2025-05-13T19:50:41.700127Z",
                        publishedAt: "2025-05-13T19:50:41.700130Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "5e260f46d77c48d398f1633296d97957",
                  code: "MTR-0131",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.702502,
                  longitude: -122.391912,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.700150Z",
                  updatedAt: "2025-05-13T19:50:41.700152Z",
                  publishedAt: "2025-05-13T19:50:41.700154Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "71e16f97692c4d378572fd4014b77c16",
                    name: "Nicole Parker",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.700332Z",
                    updatedAt: "2025-05-13T19:50:41.700335Z",
                    publishedAt: "2025-05-13T19:50:41.700337Z",
                    ders: [
                      {
                        id: "ba2fbfe2798344eab4a74e966e1ce795",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700368Z",
                        updatedAt: "2025-05-13T19:50:41.700370Z",
                        publishedAt: "2025-05-13T19:50:41.700371Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "64bed93349194fc9943f6d810db45444",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700379Z",
                        updatedAt: "2025-05-13T19:50:41.700380Z",
                        publishedAt: "2025-05-13T19:50:41.700382Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "4b163c0a4167442eb371843f31c8551e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700389Z",
                        updatedAt: "2025-05-13T19:50:41.700390Z",
                        publishedAt: "2025-05-13T19:50:41.700392Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "bf20fd81bf4041059a563c5e9eaed74b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700399Z",
                        updatedAt: "2025-05-13T19:50:41.700400Z",
                        publishedAt: "2025-05-13T19:50:41.700402Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "9c73ac877d8240b996d93caa8c1e7029",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700409Z",
                        updatedAt: "2025-05-13T19:50:41.700410Z",
                        publishedAt: "2025-05-13T19:50:41.700411Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "97074c0e2e8d4573ab30d01c0352253e",
                  code: "MTR-0132",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.751406,
                  longitude: -122.374864,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.700423Z",
                  updatedAt: "2025-05-13T19:50:41.700425Z",
                  publishedAt: "2025-05-13T19:50:41.700426Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "df3aec556ae34a37a91afc3c76fa9479",
                    name: "Jason Nguyen",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.700628Z",
                    updatedAt: "2025-05-13T19:50:41.700633Z",
                    publishedAt: "2025-05-13T19:50:41.700635Z",
                    ders: [
                      {
                        id: "54c077d855b24faba83811f80bac6d08",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700664Z",
                        updatedAt: "2025-05-13T19:50:41.700665Z",
                        publishedAt: "2025-05-13T19:50:41.700667Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "72462380f5aa4db192a6c1060352b353",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700676Z",
                        updatedAt: "2025-05-13T19:50:41.700677Z",
                        publishedAt: "2025-05-13T19:50:41.700679Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "b22dd49437624de5b486b5be0fd0d7bb",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700687Z",
                        updatedAt: "2025-05-13T19:50:41.700689Z",
                        publishedAt: "2025-05-13T19:50:41.700690Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "66c0e4dd008a4f0098ddb3577f3ba579",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700697Z",
                        updatedAt: "2025-05-13T19:50:41.700699Z",
                        publishedAt: "2025-05-13T19:50:41.700701Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "80d1e2b7dda942f698fd7c71530d1dd3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700709Z",
                        updatedAt: "2025-05-13T19:50:41.700712Z",
                        publishedAt: "2025-05-13T19:50:41.700715Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "574ea31028514c8aa9544b3caa96115d",
                  code: "MTR-0133",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.734868,
                  longitude: -122.370777,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.700745Z",
                  updatedAt: "2025-05-13T19:50:41.700748Z",
                  publishedAt: "2025-05-13T19:50:41.700749Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "139c608e38824e17a5fc640b30e0bc87",
                    name: "Mary Vazquez",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.700927Z",
                    updatedAt: "2025-05-13T19:50:41.700930Z",
                    publishedAt: "2025-05-13T19:50:41.700931Z",
                    ders: [
                      {
                        id: "32df15c81d0c4313adc86359a17fcf3e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700958Z",
                        updatedAt: "2025-05-13T19:50:41.700960Z",
                        publishedAt: "2025-05-13T19:50:41.700961Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "b9e31fc6748c40bebad9223bdfde9a5d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700969Z",
                        updatedAt: "2025-05-13T19:50:41.700971Z",
                        publishedAt: "2025-05-13T19:50:41.700972Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "27445e024fb140b08e2acec0271138cf",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700979Z",
                        updatedAt: "2025-05-13T19:50:41.700980Z",
                        publishedAt: "2025-05-13T19:50:41.700982Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "9805cb0927e944239099c793af2a71c5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700989Z",
                        updatedAt: "2025-05-13T19:50:41.700990Z",
                        publishedAt: "2025-05-13T19:50:41.700991Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "05d0de6bf0d64647befedbc9a9643c5e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.700999Z",
                        updatedAt: "2025-05-13T19:50:41.701001Z",
                        publishedAt: "2025-05-13T19:50:41.701002Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "e6464242b42c447483c2b5d9a8651a5e",
                  code: "MTR-0134",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.77711,
                  longitude: -122.51008,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.701016Z",
                  updatedAt: "2025-05-13T19:50:41.701017Z",
                  publishedAt: "2025-05-13T19:50:41.701019Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "b7a696e29ff94630967c63016fce9dda",
                    name: "Gina Gay",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.701278Z",
                    updatedAt: "2025-05-13T19:50:41.701283Z",
                    publishedAt: "2025-05-13T19:50:41.701285Z",
                    ders: [
                      {
                        id: "fb1f785287144483a3199693d642af53",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701323Z",
                        updatedAt: "2025-05-13T19:50:41.701325Z",
                        publishedAt: "2025-05-13T19:50:41.701327Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "cdba24db13a441739cedaeffc486dcaf",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701335Z",
                        updatedAt: "2025-05-13T19:50:41.701337Z",
                        publishedAt: "2025-05-13T19:50:41.701339Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "bc8c17c816074dd0a7d593b0b183a071",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701357Z",
                        updatedAt: "2025-05-13T19:50:41.701358Z",
                        publishedAt: "2025-05-13T19:50:41.701360Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "fd3cf7d0d1c34142b3ff64bf10f2d958",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701367Z",
                        updatedAt: "2025-05-13T19:50:41.701368Z",
                        publishedAt: "2025-05-13T19:50:41.701370Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "406e14033baa40029886e236e9ac1a95",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701376Z",
                        updatedAt: "2025-05-13T19:50:41.701377Z",
                        publishedAt: "2025-05-13T19:50:41.701379Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "37e4d8b6f9db4cf497c7fa95c6b4ed98",
                  code: "MTR-0135",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.780834,
                  longitude: -122.489551,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.701392Z",
                  updatedAt: "2025-05-13T19:50:41.701394Z",
                  publishedAt: "2025-05-13T19:50:41.701396Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "ba8f88fa265c47e889e311536b844337",
                    name: "Eric Benitez",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.701593Z",
                    updatedAt: "2025-05-13T19:50:41.701596Z",
                    publishedAt: "2025-05-13T19:50:41.701597Z",
                    ders: [
                      {
                        id: "5eefcb2ebfe2469aa90e884a5989130b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701627Z",
                        updatedAt: "2025-05-13T19:50:41.701629Z",
                        publishedAt: "2025-05-13T19:50:41.701630Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "7bd4e807869a48fcbdff446a556963c1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701646Z",
                        updatedAt: "2025-05-13T19:50:41.701648Z",
                        publishedAt: "2025-05-13T19:50:41.701651Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "f0847c5ab6bd471b9df0d5614a33fd92",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701661Z",
                        updatedAt: "2025-05-13T19:50:41.701663Z",
                        publishedAt: "2025-05-13T19:50:41.701666Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "e66e155849da4d2a87f2830e6cc1f744",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701675Z",
                        updatedAt: "2025-05-13T19:50:41.701677Z",
                        publishedAt: "2025-05-13T19:50:41.701678Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "15a456346b694f479a544b5d3d01b11b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701685Z",
                        updatedAt: "2025-05-13T19:50:41.701686Z",
                        publishedAt: "2025-05-13T19:50:41.701688Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "2a1a623dafbe4df5b140758ba9dfe536",
                  code: "MTR-0136",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.759685,
                  longitude: -122.438636,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.701700Z",
                  updatedAt: "2025-05-13T19:50:41.701702Z",
                  publishedAt: "2025-05-13T19:50:41.701703Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "24a48c3d31a6492cb0fad1553f5aa644",
                    name: "Whitney Nolan",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.701893Z",
                    updatedAt: "2025-05-13T19:50:41.701897Z",
                    publishedAt: "2025-05-13T19:50:41.701903Z",
                    ders: [
                      {
                        id: "70cb2c0522694f4385eb9507a7cd9a77",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701932Z",
                        updatedAt: "2025-05-13T19:50:41.701934Z",
                        publishedAt: "2025-05-13T19:50:41.701936Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "9a48c5d44b5740ba95a51e7ebae6eb2c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701947Z",
                        updatedAt: "2025-05-13T19:50:41.701949Z",
                        publishedAt: "2025-05-13T19:50:41.701951Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "ad02bcfe91c54a94a96a4037d2f2b187",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701965Z",
                        updatedAt: "2025-05-13T19:50:41.701966Z",
                        publishedAt: "2025-05-13T19:50:41.701967Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "0694f298b9654ca68595072aceefe891",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701975Z",
                        updatedAt: "2025-05-13T19:50:41.701977Z",
                        publishedAt: "2025-05-13T19:50:41.701978Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "2b752a18bc9a4840833291ea12ca6e53",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.701985Z",
                        updatedAt: "2025-05-13T19:50:41.701986Z",
                        publishedAt: "2025-05-13T19:50:41.701988Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "d1581a73a3d747e194a02ae27c184d69",
                  code: "MTR-0137",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.79203,
                  longitude: -122.515299,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.702001Z",
                  updatedAt: "2025-05-13T19:50:41.702003Z",
                  publishedAt: "2025-05-13T19:50:41.702004Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "15ceaa0bd0074868a771167f50e66485",
                    name: "Scott Williams",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.702156Z",
                    updatedAt: "2025-05-13T19:50:41.702158Z",
                    publishedAt: "2025-05-13T19:50:41.702160Z",
                    ders: [
                      {
                        id: "5b588dcee2ad4446a4e7fe080ec0e548",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702184Z",
                        updatedAt: "2025-05-13T19:50:41.702186Z",
                        publishedAt: "2025-05-13T19:50:41.702188Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "ababf7b4ba2940dcb82c0a2d7dea3977",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702195Z",
                        updatedAt: "2025-05-13T19:50:41.702197Z",
                        publishedAt: "2025-05-13T19:50:41.702198Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "45fafee206cd40f49abf8020f30e90d5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702210Z",
                        updatedAt: "2025-05-13T19:50:41.702212Z",
                        publishedAt: "2025-05-13T19:50:41.702213Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "47ab3a2f3e6a4152829d76249786ed1d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702219Z",
                        updatedAt: "2025-05-13T19:50:41.702221Z",
                        publishedAt: "2025-05-13T19:50:41.702222Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "e573e8b44b8849b5ae29af21d3c6c6b6",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702228Z",
                        updatedAt: "2025-05-13T19:50:41.702230Z",
                        publishedAt: "2025-05-13T19:50:41.702231Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "4160769cb1644e05b702d051de5900a1",
                  code: "MTR-0138",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.712426,
                  longitude: -122.4059,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.702256Z",
                  updatedAt: "2025-05-13T19:50:41.702258Z",
                  publishedAt: "2025-05-13T19:50:41.702259Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "dd1c072645814a6cb6a58867f018f39d",
                    name: "Angelica Scott",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.702453Z",
                    updatedAt: "2025-05-13T19:50:41.702456Z",
                    publishedAt: "2025-05-13T19:50:41.702457Z",
                    ders: [
                      {
                        id: "e3a1bd1e9e12489eb589ef55e1650ba9",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702489Z",
                        updatedAt: "2025-05-13T19:50:41.702492Z",
                        publishedAt: "2025-05-13T19:50:41.702494Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "b703252da0494d428bf0185af0d6a0ec",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702505Z",
                        updatedAt: "2025-05-13T19:50:41.702507Z",
                        publishedAt: "2025-05-13T19:50:41.702508Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "32a9afc5ebc643b78397b3b0a1db5438",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702515Z",
                        updatedAt: "2025-05-13T19:50:41.702517Z",
                        publishedAt: "2025-05-13T19:50:41.702518Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "0c31525325154f12874b9358978d8d03",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702526Z",
                        updatedAt: "2025-05-13T19:50:41.702527Z",
                        publishedAt: "2025-05-13T19:50:41.702529Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "29b835700ca442dba0a4f55afeb7365e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702536Z",
                        updatedAt: "2025-05-13T19:50:41.702537Z",
                        publishedAt: "2025-05-13T19:50:41.702539Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "83298711ed9544eab66184427cef65ff",
                  code: "MTR-0139",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.720675,
                  longitude: -122.365581,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.702551Z",
                  updatedAt: "2025-05-13T19:50:41.702553Z",
                  publishedAt: "2025-05-13T19:50:41.702554Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "4b10ccd51535449c9ce6f0198ab3f6e8",
                    name: "Sonya Kim",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.702736Z",
                    updatedAt: "2025-05-13T19:50:41.702739Z",
                    publishedAt: "2025-05-13T19:50:41.702742Z",
                    ders: [
                      {
                        id: "570b9c7596624cd3a3feb21cf58d4e76",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702775Z",
                        updatedAt: "2025-05-13T19:50:41.702776Z",
                        publishedAt: "2025-05-13T19:50:41.702778Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "4758b2e2d97343bda18d55abeb180942",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702785Z",
                        updatedAt: "2025-05-13T19:50:41.702786Z",
                        publishedAt: "2025-05-13T19:50:41.702788Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "150e40ee75e0401a894e5fcec544b96d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702796Z",
                        updatedAt: "2025-05-13T19:50:41.702798Z",
                        publishedAt: "2025-05-13T19:50:41.702799Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "7fc15560ede041d4b9cbd4a3adb55376",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702806Z",
                        updatedAt: "2025-05-13T19:50:41.702807Z",
                        publishedAt: "2025-05-13T19:50:41.702809Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "ece3d9dabc26439bbb45e858d9246932",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.702818Z",
                        updatedAt: "2025-05-13T19:50:41.702820Z",
                        publishedAt: "2025-05-13T19:50:41.702822Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              id: "b1a3c0196b9c4ebdba3d920eb9cb6ee1",
              name: "Transformer_14",
              city: "San Francisco",
              state: "CA",
              latitude: 37.78561,
              longtitude: -122.506056,
              pincode: "94103",
              createdAt: "2025-05-13T19:50:41.702866Z",
              updatedAt: "2025-05-13T19:50:41.702868Z",
              publishedAt: "2025-05-13T19:50:41.702869Z",
              max_capacity_KW: 120,
              meters: [
                {
                  id: "ab43f1a91b514350a600443bd7eb3670",
                  code: "MTR-0140",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.736521,
                  longitude: -122.410341,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.702879Z",
                  updatedAt: "2025-05-13T19:50:41.702881Z",
                  publishedAt: "2025-05-13T19:50:41.702882Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "060e14a739b34e2289d5f2d8c363d6d9",
                    name: "Todd Bailey",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.703055Z",
                    updatedAt: "2025-05-13T19:50:41.703057Z",
                    publishedAt: "2025-05-13T19:50:41.703059Z",
                    ders: [
                      {
                        id: "9bccf26281f24d27acc2b21718f7c15e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703093Z",
                        updatedAt: "2025-05-13T19:50:41.703095Z",
                        publishedAt: "2025-05-13T19:50:41.703096Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "e89e47770df34946b5b79cb93e317d54",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703115Z",
                        updatedAt: "2025-05-13T19:50:41.703118Z",
                        publishedAt: "2025-05-13T19:50:41.703120Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      },
                      {
                        id: "494c697c178341568f9ac48048514292",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703136Z",
                        updatedAt: "2025-05-13T19:50:41.703145Z",
                        publishedAt: "2025-05-13T19:50:41.703148Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "14bd5b2850024d7f9efd5046e9da67c2",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703256Z",
                        updatedAt: "2025-05-13T19:50:41.703265Z",
                        publishedAt: "2025-05-13T19:50:41.703269Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "70cec91709714972944345db28ad3e7e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703304Z",
                        updatedAt: "2025-05-13T19:50:41.703307Z",
                        publishedAt: "2025-05-13T19:50:41.703310Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "67cc1956a1ae47a18f5b4cd5fe86072c",
                  code: "MTR-0141",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.750829,
                  longitude: -122.441846,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.703347Z",
                  updatedAt: "2025-05-13T19:50:41.703350Z",
                  publishedAt: "2025-05-13T19:50:41.703353Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "2a3da91f2bcc4a468aab7897b4d5da8a",
                    name: "Angela Conway",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.703722Z",
                    updatedAt: "2025-05-13T19:50:41.703727Z",
                    publishedAt: "2025-05-13T19:50:41.703730Z",
                    ders: [
                      {
                        id: "dac3156f9d164b3db0d0107901aea12e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703818Z",
                        updatedAt: "2025-05-13T19:50:41.703823Z",
                        publishedAt: "2025-05-13T19:50:41.703826Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "5188bc1022554861a96e3166b2f03b38",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703867Z",
                        updatedAt: "2025-05-13T19:50:41.703869Z",
                        publishedAt: "2025-05-13T19:50:41.703871Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "092624181fdb426ea64fd26a5a16d851",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703880Z",
                        updatedAt: "2025-05-13T19:50:41.703882Z",
                        publishedAt: "2025-05-13T19:50:41.703883Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "1786b919c9684c758099af7162d17e9e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703903Z",
                        updatedAt: "2025-05-13T19:50:41.703906Z",
                        publishedAt: "2025-05-13T19:50:41.703912Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "ded78531a3294bcbb1fa0d2d356a3db2",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.703926Z",
                        updatedAt: "2025-05-13T19:50:41.703928Z",
                        publishedAt: "2025-05-13T19:50:41.703930Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "b0858d6843d149e8afe3a2f60381076c",
                  code: "MTR-0142",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.780767,
                  longitude: -122.400441,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.703965Z",
                  updatedAt: "2025-05-13T19:50:41.703967Z",
                  publishedAt: "2025-05-13T19:50:41.703969Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "ff1ac3258dfc4faeaa3b87388ec9350c",
                    name: "Sean Smith",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.704166Z",
                    updatedAt: "2025-05-13T19:50:41.704169Z",
                    publishedAt: "2025-05-13T19:50:41.704170Z",
                    ders: [
                      {
                        id: "9a8595aee30b4157b1280d7106d9062b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704202Z",
                        updatedAt: "2025-05-13T19:50:41.704205Z",
                        publishedAt: "2025-05-13T19:50:41.704207Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "c82b5281827544329a8f8218feae498d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704220Z",
                        updatedAt: "2025-05-13T19:50:41.704222Z",
                        publishedAt: "2025-05-13T19:50:41.704224Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "56a1f821e63e49339058c0638003bc28",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704231Z",
                        updatedAt: "2025-05-13T19:50:41.704233Z",
                        publishedAt: "2025-05-13T19:50:41.704234Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "bfaa98b229f84edea103d108d3ccea4c",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704246Z",
                        updatedAt: "2025-05-13T19:50:41.704248Z",
                        publishedAt: "2025-05-13T19:50:41.704249Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "5fb40fe7d8e24d3a843948c816c24c3b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704323Z",
                        updatedAt: "2025-05-13T19:50:41.704328Z",
                        publishedAt: "2025-05-13T19:50:41.704331Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "2d0c6b36954e46299662e6fa7a417b03",
                  code: "MTR-0143",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.774421,
                  longitude: -122.375245,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.704364Z",
                  updatedAt: "2025-05-13T19:50:41.704367Z",
                  publishedAt: "2025-05-13T19:50:41.704370Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "f47d5fee64eb4d00a84dc48f9af105da",
                    name: "Misty Rubio MD",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.704714Z",
                    updatedAt: "2025-05-13T19:50:41.704718Z",
                    publishedAt: "2025-05-13T19:50:41.704721Z",
                    ders: [
                      {
                        id: "05b0dfc8909c479db811b64281460c6b",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704759Z",
                        updatedAt: "2025-05-13T19:50:41.704763Z",
                        publishedAt: "2025-05-13T19:50:41.704765Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "a4cec2248758400abee15b7a9a1115a7",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704790Z",
                        updatedAt: "2025-05-13T19:50:41.704793Z",
                        publishedAt: "2025-05-13T19:50:41.704796Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "d3d8f4892f0b415385bb92a17b17960a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704807Z",
                        updatedAt: "2025-05-13T19:50:41.704810Z",
                        publishedAt: "2025-05-13T19:50:41.704813Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "954187504e434f5d923eaa02e425c250",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704825Z",
                        updatedAt: "2025-05-13T19:50:41.704828Z",
                        publishedAt: "2025-05-13T19:50:41.704831Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "22ff08110fee44d8a2fdf01f3b851935",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.704845Z",
                        updatedAt: "2025-05-13T19:50:41.704848Z",
                        publishedAt: "2025-05-13T19:50:41.704851Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "838d782029724c9daa7e6878274f3524",
                  code: "MTR-0144",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.704065,
                  longitude: -122.464613,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.704902Z",
                  updatedAt: "2025-05-13T19:50:41.704905Z",
                  publishedAt: "2025-05-13T19:50:41.704908Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "a5440bf4ff064b0f84481dced98dcb46",
                    name: "Jordan Jennings",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.705262Z",
                    updatedAt: "2025-05-13T19:50:41.705267Z",
                    publishedAt: "2025-05-13T19:50:41.705270Z",
                    ders: [
                      {
                        id: "89c0abf326fb4b69807755b8872d4963",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705308Z",
                        updatedAt: "2025-05-13T19:50:41.705311Z",
                        publishedAt: "2025-05-13T19:50:41.705314Z",
                        appliance: {
                          id: 9,
                          name: "Room Heater",
                          powerRating: 2000,
                          baseKWh: 0.03333,
                          description: "Constant high power"
                        }
                      },
                      {
                        id: "842dba70a4774cd68aa2186f9c3c6559",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705335Z",
                        updatedAt: "2025-05-13T19:50:41.705338Z",
                        publishedAt: "2025-05-13T19:50:41.705340Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "78624d8432804d99a81fd0f709f85367",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705351Z",
                        updatedAt: "2025-05-13T19:50:41.705354Z",
                        publishedAt: "2025-05-13T19:50:41.705357Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "81efb620ce904e4da5f454799bd1c085",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705369Z",
                        updatedAt: "2025-05-13T19:50:41.705372Z",
                        publishedAt: "2025-05-13T19:50:41.705375Z",
                        appliance: {
                          id: 11,
                          name: "Water Pump",
                          powerRating: 750,
                          baseKWh: 0.0125,
                          description: "Moderate mechanical load"
                        }
                      },
                      {
                        id: "b1618f47c42b4fd9a73c159df511b551",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705387Z",
                        updatedAt: "2025-05-13T19:50:41.705389Z",
                        publishedAt: "2025-05-13T19:50:41.705392Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "d1774ab4e0804fa48a45cacad6c9701c",
                  code: "MTR-0145",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.777335,
                  longitude: -122.492596,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.705425Z",
                  updatedAt: "2025-05-13T19:50:41.705428Z",
                  publishedAt: "2025-05-13T19:50:41.705431Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "85550c7bd69a401a90b5d3256ee9ef9a",
                    name: "Ricardo Welch",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.705739Z",
                    updatedAt: "2025-05-13T19:50:41.705743Z",
                    publishedAt: "2025-05-13T19:50:41.705746Z",
                    ders: [
                      {
                        id: "f68247944df54707a4f19fce322ff250",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705776Z",
                        updatedAt: "2025-05-13T19:50:41.705779Z",
                        publishedAt: "2025-05-13T19:50:41.705782Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "fbaf8b91d2dd452f816ffc1dda97b9da",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705814Z",
                        updatedAt: "2025-05-13T19:50:41.705817Z",
                        publishedAt: "2025-05-13T19:50:41.705819Z",
                        appliance: {
                          id: 8,
                          name: "Air Conditioner (1.5 Ton)",
                          powerRating: 1500,
                          baseKWh: 0.025,
                          description: "High-power appliance"
                        }
                      },
                      {
                        id: "7b2a8bf9c488498db3d9a1b4b76c0fb1",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705833Z",
                        updatedAt: "2025-05-13T19:50:41.705836Z",
                        publishedAt: "2025-05-13T19:50:41.705839Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      },
                      {
                        id: "6612c8ff2e6e43aeb6c16e2470e3a026",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705857Z",
                        updatedAt: "2025-05-13T19:50:41.705860Z",
                        publishedAt: "2025-05-13T19:50:41.705862Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "aa9eebff5d744eeb97596d97437d7f06",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.705873Z",
                        updatedAt: "2025-05-13T19:50:41.705876Z",
                        publishedAt: "2025-05-13T19:50:41.705879Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "edd99e25d69440509616f35ad228627e",
                  code: "MTR-0146",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.745201,
                  longitude: -122.399049,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.705919Z",
                  updatedAt: "2025-05-13T19:50:41.705921Z",
                  publishedAt: "2025-05-13T19:50:41.705924Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "1cd918203b634cc3aa5793fe0a707df5",
                    name: "Samantha Norman",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.706238Z",
                    updatedAt: "2025-05-13T19:50:41.706242Z",
                    publishedAt: "2025-05-13T19:50:41.706245Z",
                    ders: [
                      {
                        id: "419bac91887a401481969bbb2752b9c5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706275Z",
                        updatedAt: "2025-05-13T19:50:41.706278Z",
                        publishedAt: "2025-05-13T19:50:41.706281Z",
                        appliance: {
                          id: 10,
                          name: "Electric Geyser",
                          powerRating: 3000,
                          baseKWh: 0.05,
                          description: "Very high-demand heating"
                        }
                      },
                      {
                        id: "2522ba3b3a734a3b81bb0928e1d25598",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706313Z",
                        updatedAt: "2025-05-13T19:50:41.706316Z",
                        publishedAt: "2025-05-13T19:50:41.706319Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "5aeb3b3f8a6248b5a31e7f21c9a14d9d",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706343Z",
                        updatedAt: "2025-05-13T19:50:41.706347Z",
                        publishedAt: "2025-05-13T19:50:41.706349Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "f1d49f1e8f654d1fa2d043f1f72d6cef",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706360Z",
                        updatedAt: "2025-05-13T19:50:41.706363Z",
                        publishedAt: "2025-05-13T19:50:41.706366Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "e250d867f38e472ab541bcd93551f366",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706376Z",
                        updatedAt: "2025-05-13T19:50:41.706379Z",
                        publishedAt: "2025-05-13T19:50:41.706382Z",
                        appliance: {
                          id: 6,
                          name: "Microwave Oven",
                          powerRating: 1000,
                          baseKWh: 0.01667,
                          description: "High-power but short usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "16c9ef5104c44666bc62ca6cfab8a582",
                  code: "MTR-0147",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.794598,
                  longitude: -122.468047,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.706412Z",
                  updatedAt: "2025-05-13T19:50:41.706415Z",
                  publishedAt: "2025-05-13T19:50:41.706417Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "3ab1ecb7b5e24818b81c2a776444949f",
                    name: "Seth Juarez",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.706700Z",
                    updatedAt: "2025-05-13T19:50:41.706703Z",
                    publishedAt: "2025-05-13T19:50:41.706706Z",
                    ders: [
                      {
                        id: "b3e1cd3d66f945608a91f532e08352a0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706736Z",
                        updatedAt: "2025-05-13T19:50:41.706739Z",
                        publishedAt: "2025-05-13T19:50:41.706741Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "0bd64335ea0541a1a1b6f1b5fddedbbc",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706761Z",
                        updatedAt: "2025-05-13T19:50:41.706763Z",
                        publishedAt: "2025-05-13T19:50:41.706766Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "759f5c91f9824005b86471c7d5db641f",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706778Z",
                        updatedAt: "2025-05-13T19:50:41.706781Z",
                        publishedAt: "2025-05-13T19:50:41.706784Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "361434c713734f9683661a50813eed49",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706796Z",
                        updatedAt: "2025-05-13T19:50:41.706799Z",
                        publishedAt: "2025-05-13T19:50:41.706802Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "61ca83e8ce1d4420b79058e6d9f2278a",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.706877Z",
                        updatedAt: "2025-05-13T19:50:41.706884Z",
                        publishedAt: "2025-05-13T19:50:41.706885Z",
                        appliance: {
                          id: 2,
                          name: "Ceiling Fan",
                          powerRating: 75,
                          baseKWh: 0.00125,
                          description: "Common residential usage"
                        }
                      }
                    ]
                  }
                },
                {
                  id: "bec766461e3b4efcbf901bd1636482d7",
                  code: "MTR-0148",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.806227,
                  longitude: -122.460468,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.706920Z",
                  updatedAt: "2025-05-13T19:50:41.706921Z",
                  publishedAt: "2025-05-13T19:50:41.706923Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "ee76336d80fd485ab885c2c1f29da6bc",
                    name: "Brian Smith",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.707168Z",
                    updatedAt: "2025-05-13T19:50:41.707171Z",
                    publishedAt: "2025-05-13T19:50:41.707172Z",
                    ders: [
                      {
                        id: "c2a2cfdd5f7940f491e03de355b87ca3",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707200Z",
                        updatedAt: "2025-05-13T19:50:41.707201Z",
                        publishedAt: "2025-05-13T19:50:41.707203Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "c18fe48776214d3b9ff78d4636cc34c0",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707214Z",
                        updatedAt: "2025-05-13T19:50:41.707215Z",
                        publishedAt: "2025-05-13T19:50:41.707217Z",
                        appliance: {
                          id: 1,
                          name: "LED Bulb (10W)",
                          powerRating: 10,
                          baseKWh: 0.00017,
                          description: "Very low-power appliance"
                        }
                      },
                      {
                        id: "9818a1f5e99f48e2899cfa4adf4ede42",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707228Z",
                        updatedAt: "2025-05-13T19:50:41.707230Z",
                        publishedAt: "2025-05-13T19:50:41.707231Z",
                        appliance: {
                          id: 7,
                          name: "Washing Machine",
                          powerRating: 500,
                          baseKWh: 0.00833,
                          description: "Motor + water heater load"
                        }
                      },
                      {
                        id: "d74ea026d5fd4251bcdc10994365753e",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707248Z",
                        updatedAt: "2025-05-13T19:50:41.707251Z",
                        publishedAt: "2025-05-13T19:50:41.707253Z",
                        appliance: {
                          id: 4,
                          name: "Refrigerator",
                          powerRating: 200,
                          baseKWh: 0.00333,
                          description: "Compressor cycles ON/OFF"
                        }
                      },
                      {
                        id: "2e53d3901d1e4170ae44234a6e7980ad",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707266Z",
                        updatedAt: "2025-05-13T19:50:41.707268Z",
                        publishedAt: "2025-05-13T19:50:41.707272Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      }
                    ]
                  }
                },
                {
                  id: "7b4b93aad2b640139bf75df566978443",
                  code: "MTR-0149",
                  consumptionLoadFactor: 1,
                  productionLoadFactor: 0,
                  type: "SMART",
                  city: "San Francisco",
                  state: "CA",
                  latitude: 37.793765,
                  longitude: -122.445893,
                  pincode: "94103",
                  createdAt: "2025-05-13T19:50:41.707288Z",
                  updatedAt: "2025-05-13T19:50:41.707290Z",
                  publishedAt: "2025-05-13T19:50:41.707291Z",
                  max_capacity_KW: 10,
                  energyResource: {
                    id: "cc2b1d26fd594162bc4558924c6ee743",
                    name: "Tiffany Brown",
                    type: "CONSUMER",
                    createdAt: "2025-05-13T19:50:41.707468Z",
                    updatedAt: "2025-05-13T19:50:41.707471Z",
                    publishedAt: "2025-05-13T19:50:41.707472Z",
                    ders: [
                      {
                        id: "30cca22b60814b47aae720d2558c7243",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707496Z",
                        updatedAt: "2025-05-13T19:50:41.707497Z",
                        publishedAt: "2025-05-13T19:50:41.707499Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "0195cc391c674b5d81b3c5e436629758",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707511Z",
                        updatedAt: "2025-05-13T19:50:41.707513Z",
                        publishedAt: "2025-05-13T19:50:41.707514Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
                        }
                      },
                      {
                        id: "3601aec7c7404b3a959c796fa92a2b18",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707524Z",
                        updatedAt: "2025-05-13T19:50:41.707526Z",
                        publishedAt: "2025-05-13T19:50:41.707527Z",
                        appliance: {
                          id: 12,
                          name: "Solar Panel (production)",
                          powerRating: 1200,
                          baseKWh: 0.02,
                          description: ""
                        }
                      },
                      {
                        id: "1e5237013f3e4903beed963e5d555835",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707543Z",
                        updatedAt: "2025-05-13T19:50:41.707545Z",
                        publishedAt: "2025-05-13T19:50:41.707546Z",
                        appliance: {
                          id: 5,
                          name: "Laptop Charger",
                          powerRating: 65,
                          baseKWh: 0.00108,
                          description: "Varies by model"
                        }
                      },
                      {
                        id: "fb7deb11eee0484ab5d1b9051f072ff5",
                        switched_on: true,
                        createdAt: "2025-05-13T19:50:41.707635Z",
                        updatedAt: "2025-05-13T19:50:41.707640Z",
                        publishedAt: "2025-05-13T19:50:41.707643Z",
                        appliance: {
                          id: 3,
                          name: "Television (LED)",
                          powerRating: 120,
                          baseKWh: 0.002,
                          description: "Entertainment"
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
