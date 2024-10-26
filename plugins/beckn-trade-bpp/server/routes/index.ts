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
  
];
