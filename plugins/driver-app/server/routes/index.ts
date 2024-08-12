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
    handler: "driverProfileController.index",
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
  },
  {
    method: "POST",
    path: "/show-rides",
    handler: "rideController.showAvailableRides",
    config: {
      middlewares: ["plugin::driver-app.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/ride-summary",
    handler: "rideController.showRideSummary",
    config: {
      middlewares: ["plugin::driver-app.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/rides",
    handler: "rideController.updateRide",
    config: {
      middlewares: ["plugin::driver-app.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/me",
    handler: "driverProfileController.myProfile",
    config: {
      middlewares: ["plugin::driver-app.authMiddleware"],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/my-rides",
    handler: "rideController.myRides",
    config: {
      middlewares: ["plugin::driver-app.authMiddleware"],
      auth: false
    }
  }
];
