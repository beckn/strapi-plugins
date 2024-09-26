import { Strapi } from '@strapi/strapi';
import { AddEnergyEntry, Provider } from '../types/catalogue.types';

export default ({ strapi }: { strapi: Strapi }) => ({
  async catalogue(ctx) {
    try {
      // Extract the necessary fields from the request body
      const {
        provider_name,
        domain_id,
        location_id,
        short_desc,
        long_desc,
        logo,
        provider_id,
        provider_url,
        category_ids,
        agents,
        items,
        input,
        fullfillments,
        provider_rating,
        payment_methods
      } = ctx.request.body;

      // Construct providerData object from the incoming request body
      const providerData: Provider = {
        provider_name,
        domain_id,
        location_id,
        short_desc,
        long_desc,
        logo,
        provider_id,
        provider_url,
        category_ids,
        agents,
        items,
        input,
        fullfillments,
        provider_rating,
        payment_methods
      };

      // Pass all arguments including the providerData into the service method
      const result = await strapi
        .plugin('ptop-energy')
        .service('catalogueService')
        .createCatalogue(
          providerData // Pass provider data as one object
        );

      // Send response
      ctx.body = {
        status: 'SUCCESS',
        data: result
      };
    } catch (error) {
      console.error('Error in creating catalogue:', error);
      ctx.status = error.status || 500;
      ctx.body = {
        status: 'FAILED',
        message: error.message,
      };
    }
  },
  async addEntry(ctx) {
    try {
      // Extract the necessary fields from the request body
      const {
        phone,
        unit,
        start_date,
        end_date
      } = ctx.request.body;

      // Construct providerData object from the incoming request body
      const providerData: AddEnergyEntry = {
        phone,
        unit,
        start_date,
        end_date
      };

      // Pass all arguments including the providerData into the service method
      const result = await strapi
        .plugin('ptop-energy')
        .service('catalogueService')
        .createCatalogueEnergyEntry(
          providerData // Pass provider data as one object
        );

      // Send response
      ctx.body = {
        status: 'SUCCESS',
        data: result
      };
    } catch (error) {
      console.error('Error in creating catalogue:', error);
      ctx.status = error.status || 500;
      ctx.body = {
        status: 'FAILED',
        message: error.message,
      };
    }
  },
});
