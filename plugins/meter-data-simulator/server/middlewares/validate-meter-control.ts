import { MeterControlLogType } from "../constant";

export default () => {
  return async (ctx, next) => {
    try {
      const {
        meter_id,
        parent_meter_id,
        appliance_type,
        pincode,
        load_factor,
        log_type
      } = ctx.request.body;

      // Validate required fields
      if (load_factor === undefined || load_factor === null) {
        return ctx.badRequest("load_factor is required");
      }

      if (typeof load_factor !== "number") {
        return ctx.badRequest("load_factor must be a number");
      }

      if (load_factor <= 0 || load_factor > 1) {
        return ctx.badRequest("load_factor must be between 0 and 1");
      }

      if (!log_type) {
        return ctx.badRequest("log_type is required");
      }

      if (!Object.values(MeterControlLogType).includes(log_type)) {
        return ctx.badRequest(
          `log_type must be one of: ${Object.values(MeterControlLogType).join(
            ", "
          )}`
        );
      }

      // Validate optional fields
      if (meter_id && typeof meter_id !== "string") {
        return ctx.badRequest("meter_id must be a string");
      }

      if (parent_meter_id && typeof parent_meter_id !== "string") {
        return ctx.badRequest("parent_meter_id must be a string");
      }

      // if (appliance_type) {
      //   if (!Array.isArray(appliance_type)) {
      //     return ctx.badRequest("appliance_type must be an array");
      //   }
      //   if (appliance_type.some((type) => typeof type !== "string")) {
      //     return ctx.badRequest("appliance_type must be an array of strings");
      //   }
      // }

      if (pincode && typeof pincode !== "string") {
        return ctx.badRequest("pincode must be a string");
      }

      await next();
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  };
};
