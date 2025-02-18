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
    method: "GET",
    path: "/catalogues",
    handler: "userController.getFinanceCatalogues",
    config: {
      middlewares: ["plugin::beckn-energy-finance.authMiddleware"],
      auth: false
    }
  },
];
