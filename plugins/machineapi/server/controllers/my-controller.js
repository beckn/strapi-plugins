'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('machineapi')
      .service('machineApi')
      .getWelcomeMessage();
  },
});
