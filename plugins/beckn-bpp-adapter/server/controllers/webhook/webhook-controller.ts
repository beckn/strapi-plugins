import { Strapi } from "@strapi/strapi";
import { POSTLService, TLService } from "../../tl/tl.service";
import WorkflowProvider from "../../factory/search/workflow-provider";
import axios from "axios";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index(ctx) {
    try {
      const { body = {} } = ctx.request;
      const { context } = body;
      const { action, domain } = context;

      if (process.env.SYNC_RESPONSE === "true") {
        const workflowService = WorkflowProvider.get(body);
        const result = await workflowService.index(body);
        if (
          !result ||
          (Array.isArray(result) && !result.length) ||
          (typeof result === "object" &&
            result !== null &&
            !Object.keys(result).length)
        ) {
          console.log("No Data Found");
          if (process.env?.BECKN_ENV && process.env?.BECKN_ENV === "BOC") {
            console.log("ENV is ", process.env.BECKN_ENV);
            try {
              const result = await strapi
                .plugin("beckn-bpp-adapter")
                .service("webhookService")
                .index(body, domain);
              ctx.body = {
                status: "SUCCESS",
                data: result
              };
            } catch (error) {
              console.error("Error in creating catalogue:", error);
              ctx.status = error.status || 500;
              ctx.body = {
                status: "FAILED",
                message: error.message
              };
            }
          }
        } else {
          const transformedResult = await TLService.transform(
            { message: result, context },
            `on_${action}`
          );
          if (context.domain === "food:restaurant" && action === "confirm") {
            // Relay Mapped Order to POS==> 
            console.log("Relaying Order to POS====>", JSON.stringify(transformedResult, null, 2))
            try {
              const transformedOrder = await POSTLService.transform(transformedResult);
              const sendDataToPos = await axios.post(`${process.env.POS_BASE_URL}/orders/order_relay`, transformedOrder);
              console.log(sendDataToPos.data)
            } catch (error) {
              console.log("[Error] Order Relay to POS: ", error)
            }
          }
          ctx.body = transformedResult;
        }
      } else {



        // if (context.domain === "food:restaurant" && action === "confirm") {
        //   // Relay Mapped Order to POS==> 
        //   console.log("Relaying Order to POS====>", JSON.stringify(transformedResult, null, 2))
        //   try {
        //     const transformedOrder = await POSTLService.transform(transformedResult);
        //     const sendDataToPos = await axios.post(`${process.env.POS_BASE_URL}/orders/order_relay`, transformedOrder);
        //     console.log(sendDataToPos.data)
        //   } catch (error) {
        //     console.log("[Error] Order Relay to POS: ", error)
        //   }
        // }

        console.log("Response received from BPP====>", JSON.stringify({ action, body }, null, 2))

        await strapi.eventHub.emit("webhook.request", body);
        ctx.body = {
          ack: {
            status: "ACK"
          }
        };
      }
    } catch (error) {
      throw error;
    }
  },
  async psResponse(ctx) {
    try {
      const { action } = ctx.params;
      const { body = {} } = ctx.request;
      console.log(
        "Response received from BPP",
        JSON.stringify({ action, body })
      );
      ctx.body = {
        ack: {
          status: "ACK"
        }
      };
    } catch (error) {
      // throw error;
    }
  }
});
