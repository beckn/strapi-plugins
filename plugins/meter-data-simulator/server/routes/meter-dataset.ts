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
  }
];
