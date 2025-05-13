export default [
  {
    method: 'POST',
    path: '/subscribers/subscribe',
    handler: 'subscribers.subscribe',
    config: {
      middlewares: ['plugin::registry.auth'],
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
    path: '/lookup',
    handler: 'subscribers.lookup', // TODO: Remove this route after hackathon
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/subscribers/register',
    handler: 'subscribers.register',
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
  {
    method: 'GET',
    path: '/subscribers',
    handler: 'subscribers.getSubscribers',
    config: {
      middlewares: ['plugin::registry.auth'],
      auth: false,
    },
  },

  {
    method: 'GET',
    path: '/subscribers/:id',
    handler: 'subscribers.getSubscriber',
    config: {
      middlewares: ['plugin::registry.auth'],
      auth: false,
    },
  },

  {
    method: 'PUT',
    path: '/subscribers/:id',
    handler: 'subscribers.update',
    config: {
      middlewares: ['plugin::registry.auth'],
      auth: false,
    },
  },

  {
    method: 'DELETE',
    path: '/subscribers/:id',
    handler: 'subscribers.revoke',
    config: {
      middlewares: ['plugin::registry.auth', 'plugin::registry.isAdmin'],
      auth: false,
    },
  },
];
