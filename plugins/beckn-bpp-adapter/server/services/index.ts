import healthService from './health/health-service';
import searchService from './search/search-service';
import selectService from './select/select-service';
import initService from './init/init-service';
import commerceWorkflowService from './search/commerce-workflow-service';
import appointmentWorkflowService from './search/appointment-workflow-service';
import selectCommerceWorkflowService from './select/select-commerce-workflow-service';
import selectAppointmentWorkflowService from './select/select-appointment-workflow-service';
import initCommerceWorkflowService from './init/init-commerce-workflow-service';
import initAppointmentWorkflowService from './init/init-appointment-workflow-service';

export default {
  healthService,
  searchService,
  commerceWorkflowService,
  appointmentWorkflowService,
  selectService,
  selectCommerceWorkflowService,
  selectAppointmentWorkflowService,
  initCommerceWorkflowService,
  initAppointmentWorkflowService,
  initService
};
