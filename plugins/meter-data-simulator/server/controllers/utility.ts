import { Strapi } from "@strapi/strapi";
import { getEntityService } from "../utils/service";
import { getInitialStateService } from "../utils/service";

export default ({ strapi }: { strapi: Strapi }) => ({
  async getUtilityDetailed(ctx) {
    const utilities = await getEntityService(strapi).findMany(
      "api::utility.utility",
      {
        populate: {
          substations: {
            populate: {
              transformers: {
                populate: {
                  meters: {
                    populate: {
                      energyResource: {
                        populate: {
                          ders: {
                            populate: {
                              appliance: {}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    );
    return ctx.send({ utilities }, 200);
  },
  async resetUtility(ctx) {
    await getEntityService(strapi).deleteMany("api::utility.utility", {});
    await getEntityService(strapi).deleteMany("api::substation.substation", {});
    await getEntityService(strapi).deleteMany(
      "api::transformer.transformer",
      {}
    );
    await getEntityService(strapi).deleteMany("api::meter.meter", {});
    await getEntityService(strapi).deleteMany(
      "api::energy-resource.energy-resource",
      {}
    );
    await getEntityService(strapi).deleteMany("api::der.der", {});

    await getEntityService(strapi).deleteMany(
      "api::meter-dataset.meter-dataset",
      {}
    );

    await getEntityService(strapi).deleteMany("api::grid-load.grid-load", {});

    const utilities = getInitialStateService();
    const result = await Promise.all(
      utilities.map(async (utility) => {
        try {
          const utilityCreated = await getEntityService(strapi).create(
            "api::utility.utility",
            {
              data: {
                name: utility.name,
                city: utility.city,
                state: utility.state,
                latitude:
                  typeof utility.latitude === "number"
                    ? `${utility.latitude}`
                    : utility.latitude,
                longtitude:
                  typeof utility.longtitude === "number"
                    ? `${utility.longtitude}`
                    : utility.longtitude,
                pincode: utility.pincode,
                createdAt: new Date(),
                updatedAt: new Date(),
                publishedAt: new Date()
              }
            }
          );

          await Promise.all(
            utility.substations.map(async (substation) => {
              const substationCreated = await getEntityService(strapi).create(
                "api::substation.substation",
                {
                  data: {
                    name: substation.name,
                    city: substation.city,
                    state: substation.state,
                    latitude:
                      typeof substation.latitude === "number"
                        ? `${substation.latitude}`
                        : substation.latitude,
                    longtitude:
                      typeof substation.longtitude === "number"
                        ? `${substation.longtitude}`
                        : substation.longtitude,
                    pincode: substation.pincode,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    publishedAt: new Date(),
                    max_capacity_KW: substation.max_capacity_KW,
                    utility: utilityCreated.id
                  }
                }
              );
              await Promise.all(
                substation.transformers.map(async (transformer) => {
                  const transformerCreated = await getEntityService(
                    strapi
                  ).create("api::transformer.transformer", {
                    data: {
                      name: transformer.name,
                      city: transformer.city,
                      state: transformer.state,
                      latitude:
                        typeof transformer.latitude === "number"
                          ? `${transformer.latitude}`
                          : transformer.latitude,
                      longtitude:
                        typeof transformer.longtitude === "number"
                          ? `${transformer.longtitude}`
                          : transformer.longtitude,
                      pincode: transformer.pincode,
                      createdAt: new Date(),
                      updatedAt: new Date(),
                      publishedAt: new Date(),
                      max_capacity_KW: transformer.max_capacity_KW,
                      substation: substationCreated.id
                    }
                  });
                  await Promise.all(
                    transformer.meters.map(async (meter) => {
                      const meterCreated = await getEntityService(
                        strapi
                      ).create("api::meter.meter", {
                        data: {
                          code: meter.code,
                          consumptionLoadFactor: meter.consumptionLoadFactor,
                          productionLoadFactor: meter.productionLoadFactor,
                          type: meter.type,
                          city: meter.city,
                          state: meter.state,
                          latitude:
                            typeof meter.latitude === "number"
                              ? `${meter.latitude}`
                              : meter.latitude,
                          longitude:
                            typeof meter.longitude === "number"
                              ? `${meter.longitude}`
                              : meter.longitude,
                          pincode: meter.pincode,
                          createdAt: new Date(),
                          updatedAt: new Date(),
                          publishedAt: new Date(),
                          max_capacity_KW: meter.max_capacity_KW,
                          transformer: transformerCreated.id
                        }
                      });

                      console.log("Creating energy resource", {
                        name: meter.energyResource.name,
                        type: meter.energyResource.type,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        publishedAt: new Date(),
                        meter: meterCreated.id
                      });
                      const erPayload = {
                        name: meter.energyResource.name,
                        type: meter.energyResource.type,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        publishedAt: new Date(),
                        meter: meterCreated.id
                      };
                      const MAX_RETRIES = 3;
                      let retryCount = 0;
                      let success = false;

                      while (!success && retryCount < MAX_RETRIES) {
                        try {
                          await strapi.db.transaction(async ({ trx }) => {
                            const erCreated = await strapi.entityService.create(
                              "api::energy-resource.energy-resource",
                              { data: erPayload, trx }
                            );

                            for (const der of meter.energyResource.ders) {
                              await strapi.entityService.create(
                                "api::der.der",
                                {
                                  data: {
                                    switched_on: der.switched_on,
                                    createdAt: new Date(),
                                    updatedAt: new Date(),
                                    publishedAt: new Date(),
                                    energy_resource: erCreated.id,
                                    appliance: der.appliance.id
                                  },
                                  trx
                                }
                              );
                            }
                          });
                          success = true;
                        } catch (error) {
                          retryCount++;
                          if (
                            error.code === "ER_LOCK_DEADLOCK" &&
                            retryCount < MAX_RETRIES
                          ) {
                            // Wait for a random time between 100ms and 1000ms before retrying
                            await new Promise((resolve) =>
                              setTimeout(resolve, Math.random() * 900 + 100)
                            );
                            continue;
                          }
                          console.log(
                            "Error creating energy resource",
                            error,
                            erPayload,
                            meterCreated
                          );
                          process.exit(1);
                        }
                      }
                    })
                  );
                })
              );
            })
          );
        } catch (error) {
          console.log(error);
        }
      })
    );

    return ctx.send({ message: "Utility reset successfully", result }, 200);
  },
  async getAppliance(ctx) {
    const appliances = await getEntityService(strapi).findMany(
      "api::appliance.appliance",
      {}
    );
    return ctx.send({ appliances }, 200);
  }
});
