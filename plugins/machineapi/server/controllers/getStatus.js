"use strict";
module.exports = ({ strapi }) => ({
  async index(ctx) {
    try {
      const req_body = ctx.request.body;
      const params = {
        id: req_body.order_id,
        status: req_body.status,
      };
      const response = await strapi
        .plugin("machineapi")
        .service("apiService")
        .callMachineApi(params);

      ctx.body = response;
    } catch (error) {
      ctx.status = error.statusCode || 500;
      ctx.body = {
        message:
          error.message || "An error occurred during processing your request.",
      };
    }
  },
});
