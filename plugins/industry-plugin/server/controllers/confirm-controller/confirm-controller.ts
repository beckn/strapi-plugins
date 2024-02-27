import { Strapi } from '@strapi/strapi';
import { PLUGIN } from '../../constants';
export default ({ }: { strapi: Strapi }) => ({
    async index(data: any) {
        try {
        
         const result=   await strapi
                .plugin(PLUGIN)
                .service('confirmService').index(data);
                data.body = {
                    ACK: result
                }
        } catch (error) {
            throw error;
        }
    },
  
});
