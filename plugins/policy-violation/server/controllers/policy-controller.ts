import { Strapi } from '@strapi/strapi';
import axios from 'axios';
import { APPLICABLETO, POLICYACTIONS } from '../../contstants';

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
        url = `${process.env.STRAPI_BPP_URL}/api/pp-policies/${policyId}`;
      } else {
        url = `${process.env.STRAPI_BPP_URL}/api/pp-policies?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[applicableTo][$containsi]=${applicableTo}`;
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
      const policy = (await axios.get(`${process.env.STRAPI_BPP_URL}/api/pp-policies/${policyId}?populate=*`))?.data;
      if (!policy) {
        throw new Error("Policy not found");
      }
      const policyActionUrl = `${process.env.STRAPI_BPP_URL}/api/pp-actions`;
      let policyAction = (await axios.get(`${policyActionUrl}?filters[pp_policy][id][$eq]=${policyId}&filters[bap_id][$eq]=${bap_id}&pagination[pageSize]=1`))?.data;
      if (policyAction?.data?.length) {
        await axios.delete(`${policyActionUrl}/${policyAction?.data?.id}`);
      }
      const policyActionData = {
        data: {
          accepted_by: applicableTo.toLowerCase(),
          pp_policy: policy.data?.id,
          bap_id,
          bap_uri,
          action: action.toLowerCase()
        }
      };
      policyAction = await axios.post(policyActionUrl, policyActionData);
      ctx.body = policy;
    } catch (error) {
      ctx.badRequest(error.message);
    }
  }
});
