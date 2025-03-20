export default [
  {
    method: 'POST',
    path: '/subscribe',
    handler: 'subscribers.subscribe',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/lookup',
    handler: 'subscribers.lookup',
    config: {
      policies: [],
      auth: false,
    },
  },
];
