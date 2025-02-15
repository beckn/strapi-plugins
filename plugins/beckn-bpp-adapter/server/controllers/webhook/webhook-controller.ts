import { Strapi } from "@strapi/strapi";
import { TLService } from "../../tl/tl.service";
import WorkflowProvider from "../../factory/search/workflow-provider";

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
          try {
            const result = await strapi
              .plugin("beckn-bpp-adapter")
              .service("webhookService")
              .index(body, domain);
            ctx.body = {
              status: "SUCCESS",
              data: result,
            };
          } catch (error) {
            console.error("Error in creating catalogue:", error);
            ctx.status = error.status || 500;
            ctx.body = {
              status: "FAILED",
              message: error.message,
            };
          }
        } else {
          const transformedResult = await TLService.transform(
            { message: result, context },
            `on_${action}`
          );
          ctx.body = transformedResult;
        }
      } else {
        await strapi.eventHub.emit("webhook.request", body);
        ctx.body = {
          ack: {
            status: "ACK",
          },
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
          status: "ACK",
        },
      };
    } catch (error) {
      // throw error;
    }
  },
});
