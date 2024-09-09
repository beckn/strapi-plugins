import { Strapi } from "@strapi/strapi";
import { PLUGIN } from "../../../contstants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createPolicy(ctx) {
    try {
      const { policy = {} } = ctx.request?.body;
      const { coverage = [] } = policy;
      // const { coverage = [] } = ctx.request?.body?.policy;
      // coverage validation
      // coverage temporal validation
      // coverage temporal range validation
      if (
        coverage.length === 1 &&
        coverage[0].temporal &&
        coverage[0].temporal.length === 1 &&
        coverage[0].temporal[0].range &&
        new Date(coverage[0].temporal[0].range.start).getTime() > 0 &&
        new Date(coverage[0].temporal[0].range.end).getTime() > 0
      ) {
        const policyService = strapi
          .plugin(PLUGIN)
          .service("policyService");
        const policyResult = await policyService.createPolicy(policy);
        ctx.body = policyResult;
      } else {
        throw new Error("Invalid coverage parameters");
      }
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async getDashboardCount(ctx) {
    try {
      const policyService = strapi
        .plugin(PLUGIN)
        .service("policyService");
      const count = await policyService.getDashboardCount();
      ctx.body = count;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
