export default [
  {
    method: "POST",
    path: "/driver-login",
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
      middlewares: ['plugin::driver-app.authMiddleware'],
      auth: false
    }
  }
];
