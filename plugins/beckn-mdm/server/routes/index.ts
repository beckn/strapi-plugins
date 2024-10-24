export default [
  {
    method: 'GET',
    path: '/',
    handler: 'customerController.customer',
    config: {
      policies: [],
    },
  },
];
