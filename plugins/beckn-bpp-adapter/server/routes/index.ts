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
];
