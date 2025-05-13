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
    await getEntityService(strapi).deleteMany("api::utility.utility");
    await getEntityService(strapi).deleteMany("api::substation.substation");
    await getEntityService(strapi).deleteMany("api::transformer.transformer");
    await getEntityService(strapi).deleteMany("api::meter.meter");
    await getEntityService(strapi).deleteMany(
      "api::energy-resource.energy-resource"
    );
    await getEntityService(strapi).deleteMany("api::der.der");

    const utilities = getInitialStateService();
    const result = await Promise.all(
      utilities.map(async (utility) => {
        console.log("utility", utility);

        const utilityCreated = await getEntityService(strapi).create(
          "api::utility.utility",
          {
            data: {
              name: utility.name,
              city: utility.city,
              state: utility.state,
              latitude: utility.latitude,
              longtitude: utility.longtitude,
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
                  latitude: substation.latitude,
                  longtitude: substation.longtitude,
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
                    latitude: transformer.latitude,
                    longtitude: transformer.longtitude,
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
                    const meterCreated = await getEntityService(strapi).create(
                      "api::meter.meter",
                      {
                        data: {
                          code: meter.code,
                          consumptionLoadFactor: meter.consumptionLoadFactor,
                          productionLoadFactor: meter.productionLoadFactor,
                          type: meter.type,
                          city: meter.city,
                          state: meter.state,
                          latitude: meter.latitude,
                          longitude: meter.longitude,
                          pincode: meter.pincode,
                          createdAt: new Date(),
                          updatedAt: new Date(),
                          publishedAt: new Date(),
                          max_capacity_KW: meter.max_capacity_KW,
                          transformer: transformerCreated.id
                        }
                      }
                    );
                    const erCreated = await getEntityService(strapi).create(
                      "api::energy-resource.energy-resource",
                      {
                        data: {
                          name: meter.energyResource.name,
                          type: meter.energyResource.type,
                          createdAt: new Date(),
                          updatedAt: new Date(),
                          publishedAt: new Date(),
                          meter: meterCreated.id
                        }
                      }
                    );
                    await Promise.all(
                      meter.energyResource.ders.map(async (der) => {
                        const derCreated = await getEntityService(
                          strapi
                        ).create("api::der.der", {
                          data: {
                            switched_on: der.switched_on,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            publishedAt: new Date(),
                            energy_resourece: erCreated.id,
                            appliance: der.appliance.id
                          }
                        });
                      })
                    );
                  })
                );
              })
            );
          })
        );
      })
    );

    return ctx.send({ message: "Utility reset successfully", result }, 200);
  }
});
