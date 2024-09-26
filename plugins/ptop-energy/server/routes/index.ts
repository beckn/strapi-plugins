export default [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/catalogue',
    handler: 'catalogueController.catalogue',
    config: {
      policies: [],
      auth: false
    },
  },
  {
    method: 'POST',
    path: '/catalogue/add-entry',
    handler: 'catalogueController.addEntry',
    config: {
      policies: [],
      auth: false
    },
  },
];
