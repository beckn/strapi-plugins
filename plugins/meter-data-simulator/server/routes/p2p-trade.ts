export default [
  {
    method: "POST",
    path: "/p2p-trades",
    handler: "p2pTrade.create",
    config: {
      policies: [],
      auth: false,
      middlewares: ['plugin::meter-data-simulator.validateP2PTrade'],
    },
  },
  {
    method: "GET",
    path: "/p2p-trades",
    handler: "p2pTrade.get",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/p2p-trades/:id",
    handler: "p2pTrade.getById",
    config: {
      policies: [],
      auth: false,
    },
  },
];
