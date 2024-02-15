import { Strapi } from '@strapi/strapi';
import { PLUGIN } from '../../constants';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index(filter) {
        const { context, message } = filter;
        const { domain } = context;
        const commerceDomains = process.env.COMMERCE?.split(',');
        const appointmentDomains = process.env.APPOINTMENT?.split(',');

        let workflowService;
        if (commerceDomains?.includes(domain)) {
            workflowService = strapi
                .plugin(PLUGIN)
                .service(`commerceWorkflowService`);

        } else if (appointmentDomains?.includes(domain)) {
            workflowService = strapi
                .plugin(PLUGIN)
                .service(`appointmentWorkflowService`);
        } else {
            return;
        }
        return await workflowService.search(message, domain);
    },
});
