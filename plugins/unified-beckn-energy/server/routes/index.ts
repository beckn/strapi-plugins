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
    path: "/signup",
    handler: "authController.signup",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/verify-otp",
    handler: "authController.verifyOtp",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },

  //user-apis
  {
    method: "GET",
    path: "/cred",
    handler: "userController.getCredential",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "DELETE",
    path: "/cred/:id",
    handler: "userController.deleteCredById",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/user-profile",
    handler: "userController.getUserProfile",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/user-profile",
    handler: "userController.updateUserProfile",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/der",
    handler: "userController.createDer",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/rent-catalogue",
    handler: "userController.createRentCatalogue",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/rent-catalogue",
    handler: "userController.getRentCatalogues",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/der",
    handler: "userController.getDer",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "DELETE",
    path: "/der/:id",
    handler: "userController.deleteDerById",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/dashboard",
    handler: "userController.getDashboard",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/upload-cred",
    handler: "userController.uploadUserCred",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/wallet/balance",
    handler: "userController.getWalletBalance",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/wallet/transaction",
    handler: "userController.getWalletTransactions",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/wallet/add-fund",
    handler: "userController.addWalletFund",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/wallet/withdraw-fund",
    handler: "userController.withdrawWalletFund",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/user-pref",
    handler: "userController.getUserPreference",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/user-pref",
    handler: "userController.updateUserPreference",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  //utilities
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

  //Trade Sell Routes
  {
    method: "POST",
    path: "/sell/trade",
    handler: "tradeSellController.addTradeRequest",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/sell/trade",
    handler: "tradeSellController.getTrade",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/sell/trade/:id",
    handler: "tradeSellController.getTrade",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/sell/trade-pref",
    handler: "tradeSellController.getTradePreference",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/sell/trade-pref",
    handler: "tradeSellController.updateTradePreference",
    config: {
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },

  //Trade Buy Routes
  {
    method: "POST",
    path: "/buy/trade",
    handler: "tradeBuyController.createTrade",
    config: {
      policies: [],
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/buy/trade",
    handler: "tradeBuyController.getTrade",
    config: {
      policies: [],
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/buy/trade/:id",
    handler: "tradeBuyController.updateTradeById",
    config: {
      policies: [],
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/buy/get-pending-trades",
    handler: "tradeBuyController.getPendingTrades",
    config: {
      policies: [],
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/wallet/link",
    handler: "walletController.linkWallet",
    config: {
      policies: [],
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/wallet/unlink",
    handler: "walletController.unlinkWallet",
    config: {
      policies: [],
      middlewares: ["plugin::unified-beckn-energy.authMiddleware"],
      auth: false
    }
  }
];
