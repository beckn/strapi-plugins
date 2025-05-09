export default () => {
  return async (ctx, next) => {
    try {
      const {
        data: {
          buyer_meter_id,
          seller_meter_id,
          units_kWh,
          price_per_kWh
        }
      } = ctx.request.body;

      // Validate required fields
      if (!buyer_meter_id || buyer_meter_id === undefined || buyer_meter_id === null) {
        return ctx.badRequest("buyer_meter_id is required");
      }

      if (!seller_meter_id || seller_meter_id === undefined || seller_meter_id === null) {
        return ctx.badRequest("seller_meter_id is required");
      }

      if (buyer_meter_id && typeof buyer_meter_id !== "string") {
        return ctx.badRequest("buyer_meter_id must be a string");
      }

      if (seller_meter_id && typeof seller_meter_id !== "string") {
        return ctx.badRequest("seller_meter_id must be a string");      
      }

      if (units_kWh === undefined || units_kWh === null) {
        return ctx.badRequest("units_kWh is required");
      }

      if (typeof units_kWh !== "number") {
        return ctx.badRequest("units_kWh must be a number");
      }

      if (units_kWh <= 0.1 || units_kWh >= 1) {
        return ctx.badRequest("units_kWh must be between 0.1 and 1");
      }

      if (price_per_kWh === undefined || price_per_kWh === null) {
        return ctx.badRequest("price_per_kWh is required");
      }

      if (typeof price_per_kWh !== "number") {
        return ctx.badRequest("price_per_kWh must be a number");
      }

      if (price_per_kWh <= 0.01) {
        return ctx.badRequest("price_per_kWh must be greater than 0.01");
      }

      await next();
    } catch (error) {
      return ctx.badRequest(error.message);
    }
  };
};
