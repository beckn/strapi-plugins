import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async uploadFile(file: any) {
    try {
      const fileUploadResp = await strapi.plugins[
        "upload"
      ].services.upload.upload({
        data: {}, // Optional metadata
        files: {
          path: file.path,
          name: file.name,
          type: file.type,
          size: file.size
        }
      });

      return fileUploadResp;
    } catch (error: any) {
      console.log(error.response.data.error);
      throw new Error(error.message);
    }
  }
});
