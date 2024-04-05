import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  getHealthMessage() {
    return 'Welcome to Beckn BPP Adapter 🚀 - Debog mode';
  },
});
