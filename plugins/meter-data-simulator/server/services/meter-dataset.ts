import { Strapi } from "@strapi/strapi";

import { getEntityService } from "../utils/service.js";
import { calculateBaseKWhByTransformer } from "../utils/service.js";

export default ({ strapi }: { strapi: Strapi }) => ({
  async get(ctx) {
    try {
      // const meters = await getMeterDatasetApiService(strapi).find(ctx.query);
      const meters = await getEntityService(strapi).findMany(
        "api::meter-dataset.meter-dataset",
        {
          filters: {},
          populate: {
            meter: {}
          }
        }
      );
      return ctx.send(
        { message: "Meter Datasets fetched successfully", data: meters },
        200
      );
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },

  async getById(ctx) {
    try {
      const id = ctx.params.id;
      if (!id) {
        return ctx.badRequest("Invalid meter dataset ID");
      }

      // const meterDataset = await getMeterDatasetApiService(strapi).findOne(
      //   id,
      //   ctx.query
      // );

      const meterDataSet = await strapi.entityService.findMany(
        "api::meter-dataset.meter-dataset",
        {
          filters: {
            meter: Number(id)
          }
        }
      );

      if (!meterDataSet) {
        return ctx.notFound("Meter Dataset not found");
      }

      return ctx.send(
        { message: "Meter Dataset fetched successfully", data: meterDataSet },
        200
      );
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getStreamedById(ctx) {
    try {
      const id = ctx.params.id;

      if (!id) {
        return ctx.badRequest("Invalid meter dataset ID");
      }
      ctx.respond = false;
      const res = ctx.res;
      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      let lastMeterDataSetSent = [];

      const sendDataInterval = setInterval(async () => {
        try {
          const meterDataSet = await getEntityService(strapi).findMany(
            "api::meter-dataset.meter-dataset",
            {
              filters: {
                meter: Number(id)
              },
              populate: {
                meter: {}
              },
              sort: ["createdAt:desc"],
              limit: 1
            }
          );

          if (!lastMeterDataSetSent.length) {
            console.log("meterDataSet====>", JSON.stringify(meterDataSet));
            lastMeterDataSetSent.push(...(meterDataSet as any));
            console.log("First Time Sent====>", JSON.stringify(meterDataSet));
            res.write(JSON.stringify(meterDataSet) + "\n");
          } else {
            const newDatasetSent = meterDataSet.filter(
              (dataset) =>
                !lastMeterDataSetSent.some(
                  (lastdataset) => lastdataset.id === dataset.id
                )
            );

            if (newDatasetSent.length) {
              console.log("newDatasetSent.length====>", newDatasetSent.length);
              res.write(JSON.stringify(meterDataSet) + "\n");
              lastMeterDataSetSent.push(...newDatasetSent);
            } else {
              console.log("No new dataset sent");
            }
          }
        } catch (error) {
          strapi.log.error("Error in sendDataInterval", error);
        }
      }, 1000);

      ctx.res.on("close", () => {
        strapi.log.info("Closing connection");
        clearInterval(sendDataInterval);
        res.end();
      });
    } catch (error) {
      strapi.log.error("Error in getStreamedById", error);
      ctx.badRequest(error.message);
    }
  },
  async getTransformerLoadStreamedById(ctx) {
    try {
      const id = ctx.params.id;

      if (!id) {
        return ctx.badRequest("Invalid Transformer ID");
      }
      ctx.respond = false;
      ctx.req.setTimeout(0);
      const res = ctx.res;
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Transfer-Encoding": "chunked", // Ensures chunked transfer (default in Node, but explicit is better)
        "Cache-Control": "no-cache", // Prevents client/proxy caching
        Connection: "keep-alive", // Keeps the connection open
        "Access-Control-Allow-Origin": "*"
      });

      let lastLoadDataSetSent = [];

      const sendDataInterval = setInterval(async () => {
        try {
          let transformerLoads = await getEntityService(strapi).findMany(
            "api::grid-load.grid-load",
            {
              filters: {
                transformer: Number(id)
              },
              populate: {
                transformer: {}
              },
              sort: ["createdAt:desc"],
              limit: 1
            }
          );

          transformerLoads = transformerLoads.map((load) => {
            return {
              ...load,
              health_status:
                load.current_transformer_load /
                  load.transformer.max_capacity_KW <=
                0.7
                  ? "Normal"
                  : load.current_transformer_load /
                      load.transformer.max_capacity_KW >
                      0.7 &&
                    load.current_transformer_load /
                      load.transformer.max_capacity_KW <=
                      0.9
                  ? "Warning"
                  : "Critical",
              load_percentage: Number(
                (
                  (load.current_transformer_load /
                    load.transformer.max_capacity_KW) *
                  100
                ).toFixed(2)
              ),
              margin_percentage: Number(
                (
                  (1 -
                    load.current_transformer_load /
                      load.transformer.max_capacity_KW) *
                  100
                ).toFixed(2)
              )
            };
          });

          if (!lastLoadDataSetSent.length) {
            console.log(
              "Transformer Load Sent====>",
              JSON.stringify(transformerLoads)
            );
            lastLoadDataSetSent.push(...(transformerLoads as any));
            console.log(
              "First Time Sent====>",
              JSON.stringify(transformerLoads)
            );
            res.write(JSON.stringify(transformerLoads) + "\n");
          } else {
            const newDatasetSent = transformerLoads.filter(
              (dataset) =>
                !lastLoadDataSetSent.some(
                  (lastdataset) => lastdataset.id === dataset.id
                )
            );

            if (newDatasetSent.length) {
              console.log("newDatasetSent.length====>", newDatasetSent.length);
              res.write(JSON.stringify(transformerLoads) + "\n");
              lastLoadDataSetSent.push(...newDatasetSent);
            } else {
              res.write(
                JSON.stringify([
                  lastLoadDataSetSent[lastLoadDataSetSent.length - 1]
                ]) + "\n"
              );
            }
          }
        } catch (error) {
          strapi.log.error("Error in sendDataInterval", error);
        }
      }, 10000);

      ctx.res.on("close", () => {
        strapi.log.info("Closing connection");
        clearInterval(sendDataInterval);
        res.end();
      });
    } catch (error) {
      strapi.log.error("Error in getStreamedById", error);
      ctx.badRequest(error.message);
    }
  },

  async getGridLoads(ctx) {
    try {
      const gridLoads = await getEntityService(strapi).findMany(
        "api::grid-load.grid-load",
        {
          filters: {},
          populate: { transformer: { populate: { substation: {} } } },
          sort: ["createdAt:desc"]
        }
      );
      return ctx.send(
        { message: "Grid Loads fetched successfully", data: gridLoads },
        200
      );
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getTransformerLoadInstantaneous(ctx) {
    try {
      const transformerId = ctx.params.id;
      if (!transformerId) {
        return ctx.badRequest("Invalid Transformer ID");
      }

      const transformerPreviousLoad = await getEntityService(strapi).findMany(
        "api::grid-load.grid-load",
        {
          filters: { transformer: Number(transformerId) },
          populate: { transformer: {} },
          sort: ["createdAt:desc"],
          limit: 1
        }
      );

      const meters = await strapi.entityService.findMany("api::meter.meter", {
        filters: {
          energyResource: {
            $null: false // This ensures energyResource exists
          },
          transformer: Number(transformerId)
        },
        populate: {
          energyResource: {
            populate: {
              ders: {
                populate: {
                  appliance: {}
                },
                filters: {
                  switched_on: true
                }
              }
            }
          },
          transformer: {}
        }
      });

      const transformerCurrentLoad = calculateBaseKWhByTransformer(meters);

      return ctx.send(
        {
          message: "Meters fetched successfully",
          data: {
            transformerPreviousLoad: transformerPreviousLoad[0],
            transformerCurrentLoad: transformerCurrentLoad[0]
          }
        },
        200
      );
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
