module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth:false
    },
  },
  {
    method: 'POST',
    path: '/status',
    handler: 'statusController.index',
    config: {
      policies: [],
      auth:false
    },
  },
];
