export default [
  {
    method: "POST",
    path: "/meters",
    handler: "meter.create",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "PATCH",
    path: "/meters/:id",
    handler: "meter.update",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/meters",
    handler: "meter.get",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/meters/:id",
    handler: "meter.getById",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "DELETE",
    path: "/meters/:id",
    handler: "meter.delete",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/meters/control",
    handler: "meter.control",
    config: {
      policies: [],
      auth: false,
      middlewares: ["plugin::meter-data-simulator.validateMeterControl"]
    }
  },
  {
    method: "PUT",
    path: "/meters/add-subscription",
    handler: "meter.addSubscription",
    config: {
      policies: [],
      auth: false,
      middlewares: []
    }
  },
  {
    method: "GET",
    path: "/meters/subscription/:subscriptionId",
    handler: "meter.getMeterBySubscriptionId",
    config: {
      policies: [],
      auth: false,
      middlewares: []
    }
  }
];
