export default [
  {
    method: "POST",
    path: '/auth/reset-link',
    handler: "authController.sendResetLink",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: '/auth/reset-password',
    handler: "authController.resetPassword",
    config: {
      policies: [],
      auth: false
    }
  },
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
    method: "GET",
    path: "/dashboard",
    handler: "policyController.getDashboardCount",
    config: {
      middlewares: ["plugin::policy-api.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/policy",
    handler: "policyController.getPolicies",
    config: {
      middlewares: ["plugin::policy-api.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/policy/:policyId",
    handler: "policyController.getPolicyById",
    config: {
      middlewares: ["plugin::policy-api.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PATCH",
    path: '/policy',
    handler: "policyController.updatePolicy",
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
