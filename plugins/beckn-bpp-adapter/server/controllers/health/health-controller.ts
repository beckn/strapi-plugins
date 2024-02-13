import { Strapi } from '@strapi/strapi';
import { PLUGIN } from '../../constants';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin(PLUGIN)
      .service('healthService')
      .getHealthMessage();
  },
});
