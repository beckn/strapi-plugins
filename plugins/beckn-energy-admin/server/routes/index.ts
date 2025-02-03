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
    handler: "tradeController.getTrade",
    config: {
      policies: [],
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/start-trade",
    handler: "tradeController.startTrade",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-energy-admin.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/get-pending-trades",
    handler: "tradeController.getPendingTrades",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-energy-admin.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/market-status",
    handler: "tradeController.updateMarketStatus",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-energy-admin.authMiddleware"],
      auth: false
    }
  },
];
