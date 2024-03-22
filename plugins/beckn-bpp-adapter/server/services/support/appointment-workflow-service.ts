import { Strapi } from "@strapi/strapi";
import { Object } from '../../interface/object'

export default ({ strapi }: { strapi: Strapi }) => ({
  async index(obj: Object) {
    try {
      const { ref_id, callback_phone } = obj.message.support;
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
