import { Strapi } from "@strapi/strapi";
import { getDerPluginService, getEntityService } from "../utils/service.js";

export default ({ strapi }: { strapi: Strapi }) => ({
  async toggle(ctx) {
    const { er_id } = ctx.params;
    const { der_id } = ctx.request.body;
    const { switched_on } = ctx.request.body;

    try {
      const result = await getDerPluginService(strapi).toggle(
        er_id,
        der_id,
        switched_on
      );
      return result;
    } catch (error) {
      ctx.throw(400, error.message);
    }
  },
  async create(ctx) {
    const { energy_resource } = ctx.request.body;
    const { appliance } = ctx.request.body;

    try {
      const result = await getEntityService(strapi).create("api::der.der", {
        data: {
          energy_resource,
          appliance
        }
      });
      return result;
    } catch (error) {
      ctx.throw(400, error.message);
    }
  }
});
