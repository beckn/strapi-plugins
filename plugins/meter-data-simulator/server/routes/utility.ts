export default [
  {
    method: "GET",
    path: "/utility/detailed",
    handler: "utility.getUtilityDetailed",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/utility/reset",
    handler: "utility.resetUtility",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/appliance",
    handler: "utility.getAppliance",
    config: {
      policies: [],
      auth: false
    }
  }
];
