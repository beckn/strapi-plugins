import { Strapi } from "@strapi/strapi";
export const initiateCharging = async (
  orderFulfillment: any,
  strapi: Strapi
) => {
  try {
    const timer = setInterval(async () => {
      const orderFulfilmentRes = await strapi.entityService.findOne(
        "api::order-fulfillment.order-fulfillment",
        orderFulfillment.id
      );

      if (orderFulfilmentRes.state_value === "100") {
        clearInterval(timer);
      } else {
        console.log("Updating=====>", {
          state_value: Number(orderFulfilmentRes.state_value) + 20 + ""
        });
        await strapi.entityService.update(
          "api::order-fulfillment.order-fulfillment",
          orderFulfilmentRes.id,
          {
            data: {
              state_value: Number(orderFulfilmentRes.state_value) + 20 + ""
            }
          }
        );
      }
    }, 3000);
  } catch (error) {
    // clearInterval(timer)
  }
};
