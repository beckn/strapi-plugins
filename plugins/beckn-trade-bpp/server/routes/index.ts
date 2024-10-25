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
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/der",
    handler: "energyController.createDer",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/der",
    handler: "energyController.getDer",
    config: {
      policies: [],
      auth: false
    }
  }
];
