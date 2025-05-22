export default [
  {
    method: "POST",
    path: "/toggle-der/:er_id",
    handler: "der.toggle",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "POST",
    path: "/der",
    handler: "der.create",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/der/:meterId",
    handler: "der.getDerByMeterId",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/ders/switch-off",
    handler: "der.switchOff",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "PUT",
    path: "/ders/switch-on",
    handler: "der.switchOn",
    config: {
      policies: [],
      auth: false
    }
  }
];
