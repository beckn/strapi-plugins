export default [
    {
      method: "POST",
      path: "/energy-resources",
      handler: "energyResource.create",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "PATCH",
      path: "/energy-resources/:id",
      handler: "energyResource.update",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/energy-resources",
      handler: "energyResource.get",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/energy-resources/:id",
      handler: "energyResource.getById",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "DELETE",
      path: "/energy-resources/:id",
      handler: "energyResource.delete",
      config: {
        policies: [],
        auth: false,
      },
    },
  ];
  