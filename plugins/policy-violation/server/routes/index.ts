export default [
  {
    method: 'GET',
    path: '/:applicableTo/policies/:policyId?',
    handler: 'policyController.getPolicy',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'PUT',
    path: '/:applicableTo/policy/:policyId',
    handler: 'policyController.updatePolicyAction',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/:applicableTo/policy/checkViolation',
    handler: 'policyController.checkViolation',
    config: {
      policies: [],
      auth: false
    },
  }
];
