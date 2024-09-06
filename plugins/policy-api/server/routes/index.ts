export default [
  {
    method: "POST",
    path: "/auth",
    handler: "authController.auth",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/policy",
    handler: "policyController.createPolicy",
    config: {
      middlewares: ["plugin::policy-api.authMiddleware"],
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false,
    },
  },
];
