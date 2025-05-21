import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async getCountries() {
    try {
      const countriesList = await strapi.entityService.findMany(
        "api::country.country",
        {
          filters: {}
        }
      );
      return countriesList;
    } catch (error) {
      console.log("Error Occured:: ", error.message);

      throw new Error(error.message);
    }
  },
  async getCompanies(payload: any) {
    try {
      const companies = await strapi.entityService.findMany(
        "api::utility-company.utility-company",
        {
          filters: {
            country: {
              code: payload.country_code
            }
          },
          populate: {
            country: {}
          }
        }
      );
      return companies;
    } catch (error) {
      console.log("Error Occured:: ", error.message);

      throw new Error(error.message);
    }
  },
  async mitigationActivate(ctx) {
    try {
      const matchedOrders = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            order_id: {
              items: {
                id: ctx.request.body.itemId
              }
            }
          },
          populate: {
            order_id: {
              populate: {
                items: {}
              }
            }
          }
        }
      );

      const response = await Promise.all(
        matchedOrders.map(async (order) => {
          await strapi.entityService.update(
            "api::order.order",
            order.order_id.id,
            {
              data: {
                bap_id: "bap2-ps-network-deg.becknprotocol.io",
                bap_uri: "https://bap2-ps-network-deg.becknprotocol.io"
              }
            }
          );
          return await strapi.entityService.update(
            "api::order-fulfillment.order-fulfillment",
            order.id,
            {
              data: {
                state_code: "Reduce Load By 30%",
                state_value: "ACTIVATED"
              },
              populate: {
                order_id: {}
              }
            }
          );
        })
      );

      return response;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  async mitigationAcceptReject(ctx) {
    try {
      const { meter_id, dfp_accept = true, order_id } = ctx.request.body;
      const transformerLoads = await (
        await fetch(
          `${process.env.WORLD_ENGINE_URL}/transformer-load/instantaneous/${meter_id}`
        )
      ).json();

      const createAuditTrail = await strapi.entityService.create(
        "api::audit-trail.audit-trail",
        {
          data: {
            meter_id,
            order: order_id,
            dfp_accepted: dfp_accept,
            current_consumption_kwh: Number(
              Number(
                transformerLoads.data.transformerCurrentLoad.totalBaseKWh
              ).toFixed(2)
            ),
            consumption_change_percentage:
              ((Number(
                Number(
                  transformerLoads.data.transformerPreviousLoad
                    .current_transformer_load
                ).toFixed(2)
              ) -
                Number(
                  Number(
                    transformerLoads.data.transformerCurrentLoad.totalBaseKWh
                  ).toFixed(2)
                )) /
                Number(
                  Number(
                    transformerLoads.data.transformerPreviousLoad
                      .current_transformer_load
                  ).toFixed(2)
                )) *
              100
          }
        }
      );

      ctx.status = 201;
      ctx.body = {
        orders: createAuditTrail
      };
      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: error.message };
      return;
    }
  },
  async getAuditTrail() {
    try {
      const auditTrail = await strapi.entityService.findMany(
        "api::audit-trail.audit-trail",
        {
          filters: {},
          sort: ["createdAt:desc"]
        }
      );
      return auditTrail;
    } catch (error) {
      throw new Error(error.message);
    }
  }
});
