import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message }) {
    try {
      const { ref_id, callback_phone } = message.support;
      const supportDetails = await strapi.entityService.findOne(
        "api::support.support",
        1
      );
      const supportData = {
        ...supportDetails,
        ref_id,
        callback_phone,
      };

      return supportData;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  },
});
