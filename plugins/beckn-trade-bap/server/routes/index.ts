export default [
  {
    method: "POST",
    path: "/login",
    handler: "userController.login",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/signup",
    handler: "userController.signup",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/der",
    handler: "userController.createDER",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/der",
    handler: "userController.getDER",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/trade",
    handler: "tradeController.createTrade",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/trade",
    handler: "tradeController.getTrade",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/trade/:id",
    handler: "tradeController.updateTradeById",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/start-trade",
    handler: "tradeController.startTrade",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/upload-cred",
    handler: "userController.uploadUserCred",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/cred",
    handler: "userController.getUserCreds",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "DELETE",
    path: "/cred/:id",
    handler: "userController.deleteCredById",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "DELETE",
    path: "/der/:id",
    handler: "userController.deleteDerById",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/dashboard",
    handler: "userController.getDashboardData",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/get-pending-trades",
    handler: "tradeController.getPendingTrades",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/get-utilities",
    handler: "userController.getUtilities",
    config: {
      policies: [],
      middlewares: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/user-profile",
    handler: "userController.getUserProfile",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/user-profile",
    handler: "userController.updateUserProfile",
    config: {
      policies: [],
      middlewares: ["plugin::beckn-trade-bap.authMiddleware"],
      auth: false
    }
  },
];
