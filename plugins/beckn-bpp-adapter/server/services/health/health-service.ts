import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  getHealthMessage() {
    return 'Added support for Mobility 🚀';
  },
});
