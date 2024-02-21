import healthService from './health/health-service';
import commonService from './common/common-service';
import searchCommerceWorkflowService from './search/commerce-workflow-service';
import searchAppointmentWorkflowService from './search/appointment-workflow-service';
import initCommerceWorkflowService from './init/commerce-workflow-service';
import initAppointmentWorkflowService from './init/appointment-workflow-service';
import selectCommerceWorkflowService from './select/commerce-workflow-service';
import selectAppointmentWorkflowService from './select/appointment-workflow-service';
import confirmCommerceWorkflowService from './confirm/commerce-workflow-service';
import confirmAppointmentWorkflowService from './confirm/appointment-workflow-service';

export default {
  healthService,
  commonService,
  searchCommerceWorkflowService,
  searchAppointmentWorkflowService,
  initCommerceWorkflowService,
  initAppointmentWorkflowService,
  selectCommerceWorkflowService,
  selectAppointmentWorkflowService,
  confirmCommerceWorkflowService,
  confirmAppointmentWorkflowService
};
