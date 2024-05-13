export default [
  {
    method: "POST",
    path: "/login",
    handler: "driverProfileController.login",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/test",
    handler: "driverProfileController.create",
    config: {
      middlewares: ["plugin::driver-app.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/toggle-availability",
    handler: "driverProfileController.toggleAvailability",
    config: {
      middlewares: ["plugin::driver-app.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/update-location",
    handler: "driverProfileController.updateLocation",
    config: {
      middlewares: ["plugin::driver-app.authMiddleware"],
      auth: false
    }
  }
];
