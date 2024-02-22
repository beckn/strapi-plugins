import { Strapi } from '@strapi/strapi';
import { PLUGIN } from '../../constants';

export default ({ strapi }: { strapi: Strapi }) => ({
    async index({ message, context }) {
        const ratingService = strapi
            .plugin(PLUGIN)
            .service('ratingService');
        return ratingService.rating({ message, context });
    }
});
