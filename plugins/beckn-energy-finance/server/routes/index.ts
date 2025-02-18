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
    path: "/rent-catalogue",
    handler: "userController.getRentCatalogues",
    config: {
      middlewares: ["plugin::beckn-energy-finance.authMiddleware"],
      auth: false
    }
  },
];
