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
  // {
  //   method: 'POST',
  //   path: '/createConsumptionLog',
  //   handler: 'logController.createConsumptionLog',
  //   config: {
  //     policies: [],
  //     auth: false
  //   },
  // },
  // {
  //   method: 'POST',
  //   path: '/createProductionLog',
  //   handler: 'logController.createProductionLog',
  //   config: {
  //     policies: [],
  //     auth: false
  //   },
  // },
];
