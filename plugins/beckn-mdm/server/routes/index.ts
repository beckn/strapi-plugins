export default [
  {
    method: 'POST',
    path: '/createUtilities',
    handler: 'customerController.createUtilities',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/getCustomer',
    handler: 'customerController.getCustomer',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/getStatistics',
    handler: 'customerController.getStatistics',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/getEnergyLog',
    handler: 'customerController.getEnergyData',
    config: {
      policies: [],
      auth: false
    },
  },
];
