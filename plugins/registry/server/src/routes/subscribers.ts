export default [
  {
    method: 'POST',
    path: '/subscribers/subscribe',
    handler: 'subscribers.subscribe',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/subscribers/lookup',
    handler: 'subscribers.lookup',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/load-domains',
    handler: 'subscribers.loadDomains',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/network_domains',
    handler: 'subscribers.getDomainController',
    config: {
      policies: [],
      auth: false,
    },
  },
];
