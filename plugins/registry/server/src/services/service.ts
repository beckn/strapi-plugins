import type { Core } from '@strapi/strapi';

const subscriberService = ({ strapi }: { strapi: Core.Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
});

export default subscriberService;
