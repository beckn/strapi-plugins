export default [
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
    path: "/trade",
    handler: "adminController.getTrade",
    config: {
      policies: [],
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/start-trade",
    handler: "adminController.startTrade",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-energy-admin.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/get-pending-trades",
    handler: "adminController.getPendingTrades",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-energy-admin.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/market-status",
    handler: "adminController.updateMarketStatus",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-energy-admin.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/user-profile",
    handler: "adminController.getUserProfile",
    config: {
      middlewares: ["plugin::beckn-energy-admin.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/user-profile",
    handler: "adminController.updateUserProfile",
    config: {
      middlewares: ["plugin::beckn-energy-admin.authMiddleware"],
      auth: false
    }
  },
];
