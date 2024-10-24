export default [
  {
    method: 'POST',
    path: '/getCustomer',
    handler: 'customerController.getCustomer',
    config: {
      policies: [],
      auth: false
    },
  },
];
