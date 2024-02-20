import { Strapi } from '@strapi/strapi';
import { TLService } from '../../tl/tl.service';
import WorkflowProvider from '../../factory/search/workflow-provider';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index(ctx) {
        try {
            const { body = {} } = ctx.request;
            const { context } = body;
            const { action } = context;

            if (process.env.SYNC_RESPONSE === 'true') {
                const workflowService = WorkflowProvider.get(body);
                const result = await workflowService.index(body);
                const transformedResult = await TLService.transform({ message: result }, `on_${action}`);
                ctx.body = transformedResult;
            } else {
                await strapi.eventHub.emit('webhook.request', body);
                ctx.body = {
                    ACK: true
                }
            }
        } catch (error) {
            throw error;
        }
    },
    async psResponse(ctx) {
        try {
            const { action } = ctx.params;
            const { body = {} } = ctx.request;
            console.log('Response received from BPP', JSON.stringify({ action, body }));
            ctx.body = {
                ACK: true
            }
        } catch (error) {
            // throw error;
        }
    }
});
