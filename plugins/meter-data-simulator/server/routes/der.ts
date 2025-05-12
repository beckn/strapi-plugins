export default [
  {
    method: "POST",
    path: "/toggle-der/:er_id",
    handler: "der.toggle",
    config: {
      policies: [],
      auth: false,
    },
  }
]; 