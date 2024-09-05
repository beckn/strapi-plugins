import { Strapi } from "@strapi/strapi";
import { PLUGIN } from "../../../contstants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createPolicy(ctx) {
    try {
      console.log('Create policy logic');
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
