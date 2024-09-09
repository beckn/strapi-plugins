import { Strapi } from "@strapi/strapi";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createPolicy(policyData: any) {
    try {
      const currentDate = new Date();
      const publishedAt = currentDate.toISOString();
      const {
        coverage = [],
        status,
        domain,
        descriptor = {},
        owner = {},
        media = {},
        type,
        geofences,
        rules,
        createdBy,
      } = policyData;

      const ownerName = owner.descriptor?.name;
      const ownerEmail = owner.descriptor?.contact?.email;
      if (!ownerName || !ownerEmail) {
        throw new Error("Owner details not found");
      }
      let ownerData = await strapi.entityService.findMany('api::pp-owner.pp-owner', {
        filters: { name: ownerName, email: ownerEmail },
        start: 0,
        limit: 1
      })[0];
      if (!ownerData?.length) {
        ownerData = await strapi.entityService.create('api::pp-owner.pp-owner', {
          data: {
            name: ownerName,
            email: ownerEmail,
            publishedAt
          }
        });

      }
      const insertData = {
        coverage,
        status,
        domain,
        type,
        rules,
        pp_owner: ownerData.id,
        name: descriptor.name,
        short_description: descriptor.short_desc,
        geofences,
        policyId: uuidv4(),
        mediaMimeType: media.mimetype,
        mediaUrl: media.url,
        publishedAt
        // createdByUser: createdBy ? createdBy : "system"
      };
      console.log('abhi', ownerData, insertData);
      const policy = await strapi.entityService.create('api::pp-policy.pp-policy', { data: insertData });
      return policy;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getDashboardCount() {
    try {
      const active = await strapi.entityService.count('api::pp-policy.pp-policy', {
        filters: { status: 'active' }
      });
      const inactive = await strapi.entityService.count('api::pp-policy.pp-policy', {
        filters: { status: 'inactive' }
      });
      const published = await strapi.entityService.count('api::pp-policy.pp-policy', {
        filters: { status: 'published' }
      });
      return {
        active,
        inactive,
        published
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
});
