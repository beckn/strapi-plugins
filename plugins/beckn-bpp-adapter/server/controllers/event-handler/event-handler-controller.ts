import { Strapi } from '@strapi/strapi';
import { TLService } from '../../tl/tl.service';
import WorkflowProvider from '../../factory/search/workflow-provider';
import axiosInstance from "axios";
import https from "https";

export default ({ strapi }: { strapi: Strapi }) => ({
    async index(filter: any) {
        try {
            const { context } = filter;
            const { action } = context;
            const workflowService = WorkflowProvider.get(filter);
            const result = await workflowService.index(filter);
            const transformedResult = await TLService.transform({ message: result }, `on_${action}`);
            console.log('Result from service:', transformedResult);
            this.webhookCall(transformedResult, action);
        } catch (error) {
            throw error;
        }
    },
    async webhookCall(data: any, action: string): Promise<any> {
        const url = `${process.env?.PROTOCOL_SERVER_URL}/${action}`;
        try {
            const axios = axiosInstance.create({
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false,
                }),
            });
            const bppHeaders = {
                "Content-Type": "application/json",
            };
            const res = await axios.post(url, data, { headers: bppHeaders });
        } catch (error) {
            console.log('Error', JSON.stringify(error));
            // throw error;
        }
    }
});
