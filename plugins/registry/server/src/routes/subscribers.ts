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
];
