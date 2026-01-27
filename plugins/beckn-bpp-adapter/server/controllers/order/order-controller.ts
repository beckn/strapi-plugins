import { Strapi } from "@strapi/strapi";
export default ({}: { strapi: Strapi }) => ({
  async updateOrderStatus(ctx: any) {
    try {
      const { order_id = "" }: { order_id: string; status: string } =
        ctx.request.body;

      if (!order_id) {
        ctx.status = 400;
        ctx.body = {
          message: "Order ID is required"
        };
        return;
      }

      const orderFulfillment = await strapi.entityService.findMany(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: {
            order_id: order_id
          },
          populate: {
            order_id: {}
          }
        }
      );
      if (orderFulfillment.length === 0) {
        ctx.status = 404;
        ctx.body = {
          message: "Order fulfillment not found"
        };
        return;
      }
      const updateOrderFulfillment = await strapi.entityService.update(
        "api::order-fulfillment.order-fulfillment",
        orderFulfillment[0].id,
        {
          data: {
            state_code: "ACCEPTED".toUpperCase().replace(/ /g, "_"),
            state_value: "ACCEPTED".toUpperCase().replace(/_/g, " ")
          }
        }
      );

      ctx.status = 200;
      ctx.body = {
        code: 200,
        status: "success",
        message: "Order status updated successfully"
      };
      return;
    } catch (error) {
      ctx.status = 500;
      ctx.body = {
        code: 500,
        status: "failed",
        message: "Order status updated successfully",
        error: [error.message]
      };
      return;
    }
  }
});
