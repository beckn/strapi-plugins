export default [
  {
    method: 'POST',
    path: '/search',
    handler: 'searchController.index',
    config: {
      policies: [],
      auth: false
    },
  },
];
