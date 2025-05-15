export default [
  {
    method: "GET",
    path: "/meter-datasets",
    handler: "meterDataset.get",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/meter-datasets/:id",
    handler: "meterDataset.getById",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/meter-dataset-streamed/:id",
    handler: "meterDataset.getStreamedById",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/transformer-load-streamed/:id",
    handler: "meterDataset.getTransformerLoadStreamedById",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/grid-loads",
    handler: "meterDataset.getGridLoads",
    config: {
      policies: [],
      auth: false
    }
  }
];
