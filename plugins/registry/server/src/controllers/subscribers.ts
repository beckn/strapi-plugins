import type { Core } from '@strapi/strapi';
import _sodium from 'libsodium-wrappers';

import { LookupRequest } from 'src/types/requests/LookupRequest';
import dedi from '../services/dedi';
import { getSubscribersService, getUserNetworkSubscriberService } from '../utils/service';
export const REGISTRY_NAME = process.env.DEDI_REGISTRY_NAME || 'network-subscribers';

const DEDI_NAMESPACE_ID =
  process.env.DEDI_NAMESPACE_ID ||
  'namespace:cord:tisu9rJf8zBsyrpvFCcafU393rsRrqriT3srBcG2ogksQFUvY';

const subscribers = ({ strapi }: { strapi: Core.Strapi }) => ({
  async subscribe(ctx) {
    try {
      await getSubscribersService(strapi).subscribe(ctx, DEDI_NAMESPACE_ID, REGISTRY_NAME);
    } catch (error) {
      ctx.throw(400, error.message);
    }
  },

  async lookup(ctx) {
    try {
      const body: LookupRequest = ctx.request.body || {};
      const response = await dedi.queryDirectory(DEDI_NAMESPACE_ID, REGISTRY_NAME, {});
      const filters = body;
      console.log('Filters for lookup===>', filters);

      const records = response.data.records.filter((record) => {
        if (!record?.is_revoked) {
          return Object.entries(filters).every(([key, value]) => {
            if (key === 'domain') {
              return record.details[key] === '*' || record.details[key] === value;
            }
            if (key === 'unique_key_id' || key === 'key_id') {
              return record.details['key_id'] === value;
            }
            if (key === 'subscriber_url' || key === 'url') {
              return record.details['url'] === value;
            }
            if (key === 'country') {
              return (
                record.details['country_code'] == '*' || record.details['country_code'] == value
              );
            }
            if (key === 'city' || (key === 'location' && filters[key]?.city?.code)) {
              return (
                record.details['city_code'] === '*' ||
                record.details['city_code']?.toLowerCase() ===
                  filters[key]?.city?.code?.toLowerCase()
              );
            }
            return value === '' || record.details[key] === value;
          });
        }
      });

      console.log('DeDi Lookup Records:\n', JSON.stringify(records, null, 2));
      const recs = records.map((records) => {
        return {
          status: records.details.status,
          type: records.details.type,
          domain: records.details.domain,
          signing_public_key: records.details.signing_public_key,
          subscriber_id: records.details.subscriber_id,
          unique_key_id: records.details.key_id,
          key_id: records.details.key_id,
          valid_until: records.details.valid_until,
          subscriber_url: records.details.url,
          url: records.details.url,
          created: records.details.created,
          valid_from: records.details.valid_from,
          encr_public_key: records.details.encr_public_key,
          updated: records.details.updated,
        };
      });
      console.log('Transformed DeDi Lookup Records:\n', JSON.stringify(recs, null, 2));
      ctx.send(recs, 200);
    } catch (error) {
      console.log(error);
      ctx.throw(400, error.message);
    }
  },

  async loadDomains(ctx) {
    try {
      const { registry_url = '' } = ctx.request.body;
      if (!registry_url) {
        ctx.response.status = 400;
        ctx.response.body = {
          message: 'registry_url is required',
        };
        return;
      }
      const psService = strapi.plugin('registry').service('psService');
      const domains = await psService.fetchDomains(registry_url);

      for (let i = 0; i < domains.length; i++) {
        try {
          await psService.storeDomain({
            name: domains[i].name,
            description: domains[i].name,
            schema_url: domains[i].schema_url,
          });
        } catch (error) {
          console.log(error);
          throw new Error(error.message);
        }
      }

      const domains_stored = await psService.getDomains();
      ctx.response.status = 200;
      ctx.response.body = {
        message: 'Domains Fetched',
        data: domains,
        domains_stored,
      };
      return;
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        message: error.message,
      };
      return;
    }
  },

  async getDomainController(ctx) {
    try {
      const psService = strapi.plugin('registry').service('psService');
      const domains_stored = await psService.getDomains();
      console.log('Domains Stored===>', domains_stored);
      ctx.response.status = 200;
      ctx.response.body = domains_stored;
      return;
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        message: error.message,
      };
      return;
    }
  },

  async register(ctx) {
    try {
      console.log('Register Payload===>', ctx.request.body);
      ctx.response.status = 200;
      return;
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        message: error.message,
      };
      return;
    }
  },

  async getSubscribers(ctx) {
    try {
      const records = await getSubscribersService(strapi).getSubscribers(
        ctx,
        DEDI_NAMESPACE_ID,
        REGISTRY_NAME
      );
      ctx.send(records, 200);
    } catch (error) {
      console.log(error);
      ctx.throw(400, error.message);
    }
  },

  async getSubscriber(ctx) {
    try {
      const { id } = ctx.params;
      if (!(await getSubscribersService(strapi).isUserSubscriberOwnerOrAdmin(id, ctx.state.user))) {
        ctx.unauthorized('You are not authorized to access this subscriber');
        return;
      }
      const subscriber = await getSubscribersService(strapi).getSubscriber(
        DEDI_NAMESPACE_ID,
        REGISTRY_NAME,
        id
      );
      ctx.send(subscriber, 200);
    } catch (error) {
      console.log(error);
      ctx.throw(400, error.message);
    }
  },

  async update(ctx) {
    try {
      const { id } = ctx.params;
      if (!(await getSubscribersService(strapi).isUserSubscriberOwnerOrAdmin(id, ctx.state.user))) {
        ctx.unauthorized('You are not authorized to update this subscriber');
        return;
      }
      const { data } = ctx.request.body;
      const updatedRecord = await getSubscribersService(strapi).updateSubscriber(
        DEDI_NAMESPACE_ID,
        REGISTRY_NAME,
        id,
        data
      );
      ctx.send(updatedRecord, 200);
    } catch (error) {
      console.log(error);
      ctx.throw(400, error.message);
    }
  },

  async revoke(ctx) {
    try {
      const { id } = ctx.params;
      if (!(await getSubscribersService(strapi).isUserSubscriberOwnerOrAdmin(id, ctx.state.user))) {
        ctx.unauthorized('You are not authorized to revoke this subscriber');
        return;
      }
      // Revoke subscriber from DeDi
      await getSubscribersService(strapi).revokeSubscriber(DEDI_NAMESPACE_ID, REGISTRY_NAME, id);

      // Revoke subscriber from User Network Subscriber
      const { results: userNetworkSubscribers } = await getUserNetworkSubscriberService(
        strapi
      ).find({ filters: { record_name: id } });
      for (const userNetworkSubscriber of userNetworkSubscribers) {
        await getUserNetworkSubscriberService(strapi).delete(userNetworkSubscriber.documentId);
      }
      ctx.send({ message: 'Subscriber revoked successfully' }, 200);
    } catch (error) {
      console.log(error);
      ctx.throw(400, error.message);
    }
  },
});

export default subscribers;
