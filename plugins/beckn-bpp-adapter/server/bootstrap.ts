import { Strapi } from '@strapi/strapi';
import { PLUGIN } from './constants';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.eventHub.on('webhook.request', (...args) => {
    strapi
      .plugin(PLUGIN).controller('eventHandlerController')
      .index(args[0]);
  });
};
