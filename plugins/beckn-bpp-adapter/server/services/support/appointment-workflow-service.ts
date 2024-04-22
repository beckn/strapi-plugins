import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message }) {
    try {
      const { ref_id, callback_phone } = message.support;
      const supportDetails = await strapi.entityService.findMany(
        "api::support.support",
        {
          filters: {
            publishedAt: {
              $notNull: true,
            },
          }
        }
      );
      const supportData = {
        ...(supportDetails[0] || {}),
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
