export default [
  {
    method: "GET",
    path: "/health-check",
    handler: "healthController.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/",
    handler: "webhookController.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/search",
    handler: "webhookController.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/select",
    handler: "webhookController.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/init",
    handler: "webhookController.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/confirm",
    handler: "webhookController.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/status",
    handler: "webhookController.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/cancel",
    handler: "webhookController.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/update",
    handler: "webhookController.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/ps/:action",
    handler: "webhookController.psResponse",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/x-input/form",
    handler: "xInputController.getForm",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/x-input/submit",
    handler: "xInputController.submitForm",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/v1/menu/add",
    handler: "catalogController.uploadCatalogFromPayload",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/v1/order/confirm",
    handler: "orderController.updateOrderStatus",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/updateOrderStatus",
    handler: "orderController.updateOrderStatus",
    config: {
      policies: [],
      auth: false
    }
  }
];
