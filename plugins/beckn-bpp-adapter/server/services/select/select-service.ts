import { Strapi } from '@strapi/strapi';
import { PLUGIN } from '../../constants';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index(filter) {
        const { context, message } = filter;
        const { domain } = context;
        const commerceDomains = process.env.COMMERCE?.split(',');
        const appointmentDomains = process.env.APPOINTMENT?.split(',');
        console.log("ENTERED IN TO SELECT SERVICE")

        let workflowService;
        if (commerceDomains?.includes(domain)) {
            workflowService = strapi
                .plugin(PLUGIN)
                .service(`selectCommerceWorkflowService`);

        } else if (appointmentDomains?.includes(domain)) {
            workflowService = strapi
                .plugin(PLUGIN)
                .service(`selectAppointmentWorkflowService`);
        } else {
            return;
        }
        console.log("SERVICE SELECTED:::",workflowService)
        return await workflowService.select(message, domain);
    },
});
