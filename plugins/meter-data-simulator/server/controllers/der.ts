import { Strapi } from '@strapi/strapi';
import { getDerPluginService } from '../utils/service.js';

export default ({ strapi }: { strapi: Strapi }) => ({
  async toggle(ctx) {
    const { er_id } = ctx.params;
    const { der_id } = ctx.request.body;
    const { switched_on } = ctx.request.body;
    
    try {
      const result = await getDerPluginService(strapi).toggle(er_id, der_id, switched_on);
      return result;
    } catch (error) {
      ctx.throw(400, error.message);
    }
  }
}); 