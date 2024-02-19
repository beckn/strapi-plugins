import { Strapi } from '@strapi/strapi';
import { PLUGIN } from './constants';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.eventHub.on('webhook.request', (...args) => {
    console.log("ENTERED IN TO CONTROLLER")
    strapi
      .plugin(PLUGIN).controller('eventHandlerController')
      .index(args[0]);
  });
};
