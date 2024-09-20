import { Strapi } from '@strapi/strapi';
import axios from 'axios';
import { APPLICABLETO, POLICYACTIONS } from '../../contstants';
import { isInsidePolygon } from '../util';

export default ({ strapi }: { strapi: Strapi }) => ({
  async getPolicy(ctx) {
    try {
      const { applicableTo, policyId } = ctx.request?.params;
      const { page = 1, pageSize = 20 } = ctx.request.query;
      if (!APPLICABLETO.includes(applicableTo.toLowerCase())) {
        throw new Error("Invalid applicableto param");
      }
      let url = '';
      if (policyId) {
        url = `${process.env.STRAPI_BPP_URL}/api/pp-policies?filters[policyId][$eq]=${policyId}&populate[0]=pp_actions`;
      } else {
        url = `${process.env.STRAPI_BPP_URL}/api/pp-policies?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[applicableTo][$containsi]=${applicableTo}&populate[0]=pp_actions`;
      }
      const response = await axios.get(url);
      const policies = response?.data;
      ctx.body = policies;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async updatePolicyAction(ctx) {
    try {
      const { applicableTo, policyId } = ctx.request?.params;
      const { action, bap_id, bap_uri } = ctx.request.body;
      if (!APPLICABLETO.includes(applicableTo.toLowerCase())) {
        throw new Error("Invalid applicableto param");
      }
      if (
        !POLICYACTIONS.includes(action.toLowerCase()) ||
        !bap_id ||
        !bap_uri
      ) {
        throw new Error("Invalid params");
      }
      const policy = (await axios.get(`${process.env.STRAPI_BPP_URL}/api/pp-policies?filters[policyId][$eq]=${policyId}&populate=*`))?.data;
      
      if (!policy?.data.length) {
        throw new Error("Policy not found");
      }
      const policyActionUrl = `${process.env.STRAPI_BPP_URL}/api/pp-actions`;
      let policyAction = (await axios.get(`${policyActionUrl}?filters[pp_policy][policyId][$eq]=${policyId}&filters[bap_id][$eq]=${bap_id}&pagination[pageSize]=1`))?.data;
      if (policyAction?.data?.length) {
        await axios.delete(`${policyActionUrl}/${policyAction?.data?.[0]?.id}`);
      }
      const policyActionData = {
        data: {
          accepted_by: applicableTo.toLowerCase(),
          pp_policy: policy.data?.[0]?.id,
          bap_id,
          bap_uri,
          action: action.toLowerCase()
        }
      };
      policyAction = await axios.post(policyActionUrl, policyActionData);
      policy.data[0].attributes.pp_actions = policyAction.data;
      ctx.body = policy;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async checkViolation(ctx) {
    const { applicableTo } = ctx.request?.params;
    const { locations = [], bap_id } = ctx.request.body;
    if (!locations.length || !bap_id) {
      throw new Error("Locations and BAP ID are required ");
    }
    const policyCheckResult = [];
    const applicablePolicies = (await axios.get(`${process.env.STRAPI_BPP_URL}/api/pp-actions?filters[bap_id][$eq]=${bap_id}&populate=*`))?.data?.data;
    for (let i = 0; i < locations.length; i++) {
      if (!applicablePolicies.length) {
        policyCheckResult.push({
          "location": locations[i],
          "violation": false,
          "violatedPolicies": []
        });
      } else {
        for (let j = 0; j < applicablePolicies.length; j++) {
          const applicablePolicy = applicablePolicies[j];
          const location = locations[i]?.replace(/\s/g, "").split(",");
          const point: [number, number] = [parseFloat(location[0]), parseFloat(location[1])];
          const policy = applicablePolicy?.attributes?.pp_policy?.data || {};
          const geofence = policy?.attributes?.geofences?.[0]?.polygon || [];
          const polygon = geofence.map((fence) => {
            const pointArr = fence?.replace(/\s/g, "").split(",");
            return [parseFloat(pointArr[0]), parseFloat(pointArr[1])];
          });
          policyCheckResult.push({
            "location": locations[i],
            "violation": isInsidePolygon(point, polygon),
            "violatedPolicies": [
              {
                id: policy?.attributes?.policyId,
                name: policy?.attributes?.name
              }
            ]
          });
        }
      }
    }
    ctx.body = {
      policyCheckResult
    }
  }
});
