import { Strapi } from "@strapi/strapi";
import { TLService } from "../../tl/tl.service";
import WorkflowProvider from "../../factory/search/workflow-provider";
import axiosInstance from "axios";
import https from "https";

export default ({}: { strapi: Strapi }) => ({
  async index(filter: any) {
    try {
      const { context } = filter;
      const { action } = context;
      const resAction = `on_${action}`;
      const workflowService = WorkflowProvider.get(filter);
      if (workflowService) {
        const result = await workflowService.index(filter);
        console.log('Result---->', result)
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
                .index(filter, context.domain);

              return;
            } catch (error) {
              console.error("Error in creating catalogue:", error);
              throw error;
            }
          }
        } else {
          const transformedResult = await TLService.transform(
            { message: result, context },
            resAction
          );

          await this.webhookCall(transformedResult, resAction);
        }
      }
    } catch (error) {
      throw error;
    }
  },
  async webhookCall(data: any, action: string): Promise<any> {
    const url = `${process.env?.PROTOCOL_SERVER_URL}/${action}`;

    try {
      console.log("Data sent to Protocol server:", JSON.stringify(data));
      const axios = axiosInstance.create({
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      });
      const bppHeaders = {
        "Content-Type": "application/json"
      };
      await axios.post(url, data, { headers: bppHeaders });
    } catch (error) {
      console.log("Error Data:", JSON.stringify(error?.response?.data));
      // throw error;
    }
  }
});
