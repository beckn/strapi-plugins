import { Strapi } from "@strapi/strapi";
import {
  getMeterDatasetApiService,
  getMeterApiService,
  getEnergyResourceApiService
} from "../utils/service";
import { getEntityService } from "../utils/service";

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

      const meterDataSet = await getEntityService(strapi).findMany(
        "api::meter-dataset.meter-dataset",
        {
          filters: {
            meter: Number(id)
          },
          populate: {
            meter: {}
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
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Transfer-Encoding", "chunked");
      res.setHeader("Connection", "keep-alive");

      let lastMeterDataSetSent = [];

      const sendDataInterval = setInterval(async () => {
        try {
          const meterDataSet = await getEntityService(strapi).findMany(
            "api::meter-dataset.meter-dataset",
            {
              filters: {
                meter: id
              },
              populate: {
                meter: {}
              }
            }
          );
          console.log("meterDataSet====>", JSON.stringify(meterDataSet));
          if (!lastMeterDataSetSent.length) {
            lastMeterDataSetSent.push(...(meterDataSet as any));
            console.log("First Time Sent====>", JSON.stringify(meterDataSet));
            res.write(JSON.stringify(meterDataSet), null, 2);
          } else {
            const newDatasetSent = meterDataSet.filter(
              (dataset) =>
                !lastMeterDataSetSent.some(
                  (lastdataset) => lastdataset.id === dataset.id
                )
            );

            if (newDatasetSent.length) {
              console.log("newDatasetSent.length====>", newDatasetSent.length);
              res.write(JSON.stringify(newDatasetSent as any, null, 2));
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
  }
});
