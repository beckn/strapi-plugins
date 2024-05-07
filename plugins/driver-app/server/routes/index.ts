export default [
  {
    method: "POST",
    path: "/driver-login",
    handler: "driverProfileController.login",
    config: {
      policies: []
    }
  }
];
