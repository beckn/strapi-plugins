import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  
  async getFinanceCatalogues(user: any) {
    try {
      const providerId = user?.agent?.provider_id?.id;
      if (!providerId) {
        throw new Error("No Provider is linked to this user to get catalogues");
      }
      const providerData = await strapi.entityService.findOne(
        "api::provider.provider",
        providerId,
        {
          populate: {
            items: {
              populate: {
                sc_retail_product: true
              }
            }
          }
        }
      );
      return providerData;
    } catch (error) {
      console.log("Failed to fetch finance catalogues: ", error);
      throw error;
    }
  },
});
