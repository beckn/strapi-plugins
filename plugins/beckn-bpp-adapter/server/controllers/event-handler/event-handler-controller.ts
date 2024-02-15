import { Strapi } from '@strapi/strapi';
import { PLUGIN, actions } from '../../constants';
import { TLService } from '../../tl/tl.service';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index(args: any) {
        try {
            const { context = {}, message = {} } = args;
            const { action } = context;
            if (!actions.includes(action)) {
                throw new Error(`No action matched, action name ${action}`);
            }

            const actionService = strapi
                .plugin(PLUGIN)
                .service(`${action}Service`);
            const result = await actionService.index({ context, message });
            const transformedResult = await TLService.transform({ message: result }, `on_${context.action}`)
            console.log('Result from service:', transformedResult);
        } catch (error) {
            // throw error;
        }
    }
});
