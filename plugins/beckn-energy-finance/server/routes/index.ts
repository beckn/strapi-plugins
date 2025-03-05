export default [
  //auth-apis
  {
    method: "POST",
    path: "/login",
    handler: "authController.login",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/mobile-login",
    handler: "authController.mobileLogin",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/catalogues",
    handler: "userController.getFinanceCatalogues",
    config: {
      middlewares: ["plugin::beckn-energy-finance.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/orders",
    handler: "userController.getOrders",
    config: {
      middlewares: ["plugin::beckn-energy-finance.authMiddleware"],
      auth: false
    }
  }
];
