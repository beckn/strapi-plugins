export default [
  {
    method: "POST",
    path: "/login",
    handler: "energyController.login",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/signup",
    handler: "energyController.signup",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/cred",
    handler: "energyController.getCredential",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "DELETE",
    path: "/cred/:id",
    handler: "energyController.deleteCredById",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/user-profile",
    handler: "energyController.getUserProfile",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/user-profile",
    handler: "energyController.updateUserProfile",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/der",
    handler: "energyController.createDer",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/profile",
    handler: "energyController.addProfile",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/trade",
    handler: "energyController.addTradeRequest",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/der",
    handler: "energyController.getDer",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "DELETE",
    path: "/der/:id",
    handler: "energyController.deleteDerById",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/dashboard",
    handler: "energyController.getDashboard",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/trade",
    handler: "energyController.getTrade",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/trade/:id",
    handler: "energyController.getTrade",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/upload-cred",
    handler: "energyController.uploadUserCred",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/trade-pref",
    handler: "energyController.getTradePreference",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/trade-pref",
    handler: "energyController.updateTradePreference",
    config: {
      middlewares: ["plugin::beckn-trade-bpp.authMiddleware"],
      auth: false
    }
  },
];
