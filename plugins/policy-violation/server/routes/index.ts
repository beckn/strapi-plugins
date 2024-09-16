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
  }
];
