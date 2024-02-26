export default [
  {
    method: 'GET',
    path: '/health-check',
    handler: 'healthController.index',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/',
    handler: 'webhookController.index',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/ps/:action',
    handler: 'webhookController.psResponse',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'GET',
    path: '/x-input/form',
    handler: 'xInputController.getForm',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/x-input/submit',
    handler: 'xInputController.submitForm',
    config: {
      policies: [],
      auth: false
    },
  },
];
