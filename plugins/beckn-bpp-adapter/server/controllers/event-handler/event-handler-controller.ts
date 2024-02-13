import { Strapi } from '@strapi/strapi';
import { PLUGIN, actions } from '../../constants';

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
            console.log('Result from service:', result);
        } catch (error) {
            // throw error;
        }
    }
});
