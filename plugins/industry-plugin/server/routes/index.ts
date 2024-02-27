export default [
  {
    method: 'GET',
    path: '/',
    handler: 'HealthController.index',
    config: {
      policies: [],
    },
  },
];
