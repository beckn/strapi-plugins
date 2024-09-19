import { Strapi } from "@strapi/strapi";
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
        applicableTo,
        createdBy
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
      const subscribers = coverage[0]?.subscribers?.map((subscriber) => subscriber?.type).filter((subscriber) => subscriber);
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
        applicableTo: applicableTo || (subscribers.join(',')),
        publishedAt
        // createdByUser: createdBy ? createdBy : "system"
      };
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
  },
  async getPolicies({ start, limit, status, sortBy }) {
    
    let filters;
    if (status) {
      filters = {
        status
      }
    }
    
    let sortArr = [];
    if(sortBy) {
      if(!Array.isArray(sortBy)) {       
        sortBy = [JSON.parse(sortBy)];
      }
      
      sortBy.forEach(obj => {        
        obj = typeof obj === 'string' ? JSON.parse(obj) : obj;
        const sortObj = {
          [obj.key] : obj.order ? obj.order : 'asc'
        }
        sortArr.push(sortObj);
      })
    }
    if(!sortArr.length) {
      sortArr.push({"updatedAt": "desc"});
    }
    const policies = await strapi.entityService.findMany('api::pp-policy.pp-policy', {
      filters: status ? { status } : {},
      start,
      limit,
      sort : sortArr
    });
    
    const total = await strapi.entityService.count('api::pp-policy.pp-policy', {
      filters: status ? { status } : {},
    });
    if (policies.length) {
      const allPolicies = policies.map(policy => {
        return {
          id: policy.policyId,
          status: policy.status,
          name: policy.name,
          description: policy.short_description,
          startDate: policy?.coverage[0].temporal[0].range.start,
          endDate: policy?.coverage[0].temporal[0].range.end,
          updatedAt: policy.updatedAt
        }
      })
      return {
        policies: allPolicies,
        meta: {
          start,
          limit,
          total
        }
      }
    } else {
      console.log('No policies found');
      return {
        policies: [],
        meta: {
          start,
          limit,
          total
        }
      }
    }
  },

  async getPolicyById(policyId) {
    try {
      const data = await strapi.entityService.findMany('api::pp-policy.pp-policy', {
        populate: ['pp_owner'],
        start: 0,
        limit: 1,
        filters: {
          policyId
        }
      });
      if (!data.length) {
        throw new Error('No Policy found for this id');
      }
      const result = data[0];
      const policy = {
        "id": result.policyId,
        "status": result.status,
        "domain": result.domain,
        "owner": result?.pp_owner.name,
        "descriptor": result.short_description,
        "type": result.type,
        "coverage": result.coverage,
        "geofences": result.geofences,
        "rules": result.rules,
        "name": result.name,
        "media": { url: result.mediaUrl, type: result.mediaMimeType }
      }
      return {
        policy
      }
    } catch (error) {
      throw error;
    }
  },
  async updatePolicy({ policyId = '', status = '', modifiedBy = '' }, userId) {
    try {
      if (!policyId) {
        throw new Error('No policy id provided to update');
      }
      const data = await strapi.entityService.findMany('api::pp-policy.pp-policy', {
        start: 0,
        limit: 1,
        filters: {
          policyId
        }
      });
      if (!data.length) {
        throw new Error('No Policy found for this id to update');
      }
      const policy = data[0];
      const id = policy.id;
      if (status !== "active" && status !== "inactive" && status !== "published") {
        throw new Error('Invalud status provided to update the policy');
      }
      const updateBody = {
        data: {
          policyId,
          status,
          updatedByUser: userId
        }
      }
      const updatedPolicy = await strapi.entityService.update('api::pp-policy.pp-policy', id, updateBody);
      console.log('Policy Updated', updatedPolicy);
      return {
        policy: updatedPolicy
      }

    } catch (error) {
      throw error;
    }
  }
});
