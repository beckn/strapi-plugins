import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  getPolicy() {
    return 'Welcome to Strapi 🚀';
  },
});
