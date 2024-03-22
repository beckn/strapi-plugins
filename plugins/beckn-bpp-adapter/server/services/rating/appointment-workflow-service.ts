import { Strapi } from '@strapi/strapi';
import { PLUGIN } from '../../constants';
import { Object } from '../../interface/object'

export default ({ strapi }: { strapi: Strapi }) => ({
  async index(obj: Object) {
    const ratingService = strapi
      .plugin(PLUGIN)
      .service('ratingService');
      const message=obj.message
      const context=obj.context
    return ratingService.rating({ message, context });
  }
});
