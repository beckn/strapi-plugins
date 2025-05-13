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
  }
];
