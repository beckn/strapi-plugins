import { PLUGIN, actions } from "../../constants";

class WorkflowProvider {
    static get(filter) {
        const { context } = filter;
        const { domain, action } = context;
        if (!actions.includes(action)) {
            console.log(`No action matched, action name ${action}`);
            // throw new Error(`No action matched, action name ${action}`);
            return;
        }
        const commerceDomains = process.env.COMMERCE?.split(',');
        const appointmentDomains = process.env.APPOINTMENT?.split(',');

        let workflowService;
        if (commerceDomains?.includes(domain)) {
            workflowService = strapi
                .plugin(PLUGIN)
                .service(`${action}CommerceWorkflowService`);

        } else if (appointmentDomains?.includes(domain)) {
            workflowService = strapi
                .plugin(PLUGIN)
                .service(`${action}AppointmentWorkflowService`);
        } else {
            throw new Error(`No domain matched, domain name ${domain}`);
        }
        return workflowService;
    }
}

export default WorkflowProvider;