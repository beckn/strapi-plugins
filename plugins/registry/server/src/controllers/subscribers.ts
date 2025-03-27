import type { Core } from '@strapi/strapi';
import _sodium from 'libsodium-wrappers';

import { SubscribeRequest, SUBSCRIBER_STATUS } from '../types/requests/SubscribeRequest';
import { LookupRequest } from 'src/types/requests/LookupRequest';
import dedi from '../services/dedi';

export const REGISTRY_NAME = 'network-subscribers';
const DEDI_NAMESPACE = process.env.DEDI_NAMESPACE || 'fide.org.temp';

const subscribers = ({ strapi }: { strapi: Core.Strapi }) => ({
  async subscribe(ctx) {
    try {
      const body: SubscribeRequest = ctx.request.body;
      const signingPublicKey = body.signing_public_key;
      const dediService = strapi.plugin('registry').service('dediService');
      const psService = strapi.plugin('registry').service('psService');
      // Lookup for existing records in DeDi
      const recordLookup = await dediService.lookupRecordsDedi(
        `${body.subscriber_id}-${body.domain}`
      );
      console.log(recordLookup);
      if (recordLookup.found) {
        if (recordLookup?.record?.status === SUBSCRIBER_STATUS.SUBSCRIBED) {
          console.log('here');
          return ctx.send({
            status: 'SUBSCRIBED',
          });
        } else if (recordLookup?.record?.status === SUBSCRIBER_STATUS.INITIATED) {
          const challenge = Math.random()
            .toString(36)
            .substring(2, 2 + 6);
          const onSubscribeValidation = await psService.callOnSubscribe(
            body.url,
            body.subscriber_id,
            challenge,
            signingPublicKey
          );
          // const newSubscriberDediPayload = {
          //   key_id: body.key_id,
          //   created: body.created,
          //   city_code: body.location.city.code,
          //   valid_from: body.valid_from,
          //   type: body.type,
          //   nonce: body.nonce,
          //   url: body.url,
          //   country_code: body.location.country.code,
          //   signing_public_key: body.signing_public_key,
          //   subscriber_id: body.subscriber_id,
          //   valid_until: body.valid_until,
          //   domain: body.domain,
          //   encr_public_key: body.encr_public_key,
          //   updated: body.updated,
          //   status: SUBSCRIBER_STATUS.INITIATED,
          // };
          if (onSubscribeValidation.validOnSubscribe) {
            console.log('Update Record===>', {
              ...recordLookup.record,
              status: SUBSCRIBER_STATUS.SUBSCRIBED,
            });
            const subscribeResp = await dediService.updateRecordDedi(
              `${body.subscriber_id}-${body.domain}`,
              {
                ...recordLookup.record,
                status: SUBSCRIBER_STATUS.SUBSCRIBED,
              }
            );
            return ctx.send({
              status: subscribeResp.updated
                ? SUBSCRIBER_STATUS.SUBSCRIBED
                : SUBSCRIBER_STATUS.UNDER_SUBSCRIPTION,
            });
          } else {
            return ctx.send({
              status: SUBSCRIBER_STATUS.UNDER_SUBSCRIPTION,
              message: 'Invalid On Subscribe Validation',
            });
          }
        }
      } else {
        if (body.type === 'BG' || body.type === 'LREG') {
          console.log('Registering BG for payload', JSON.stringify(body));
          const createDediRecordResp = await dediService.createRecordDedi(
            body,
            SUBSCRIBER_STATUS.SUBSCRIBED
          );
          if (!createDediRecordResp.created) {
            return ctx.send({
              status: SUBSCRIBER_STATUS.SUBSCRIBED,
              message: 'Dedi record creation failed',
            });
          }
          return ctx.send({
            status: SUBSCRIBER_STATUS.INVALID_SSL,
            message: 'Dedi record creation failed',
          });
        }
        // console.log('Validating SSL for', body.url);
        // const validSSLResp = await psService.validateSSL(body.url);

        // if (!validSSLResp.success) {
        //   return ctx.send({
        //     status: SUBSCRIBER_STATUS.INVALID_SSL,
        //     message: 'SSL Validation Failed',
        //   });
        // }
        // console.log('Validating Verification.html for', body.url);
        // const validateVerifyHTMLResp = await psService.validateVerifyHTML(body);

        // if (!validateVerifyHTMLResp.success) {
        //   return ctx.send({
        //     status: SUBSCRIBER_STATUS.INVALID_SSL,
        //     message: 'Verify HTML Validation Failed',
        //   });
        // }
        // Create Entry in DeDi with status Initiated
        console.log(
          'Create Entry in Dedi for subscirber_id and domain as record name for',
          `${body.subscriber_id}-${body.domain}`
        );
        const createDediRecordResp = await dediService.createRecordDedi(
          body,
          SUBSCRIBER_STATUS.INITIATED
        );
        if (!createDediRecordResp.created) {
          return ctx.send({
            status: SUBSCRIBER_STATUS.INVALID_SSL,
            message: 'Dedi record creation failed',
          });
        }
        const challenge = Math.random()
          .toString(36)
          .substring(2, 2 + 6);
        const onSubscribeValidation = await psService.callOnSubscribe(
          body.url,
          body.subscriber_id,
          challenge,
          signingPublicKey
        );

        if (onSubscribeValidation.validOnSubscribe) {
          const recordLookup = await dediService.lookupRecordsDedi(
            `${body.subscriber_id}-${body.domain}`
          );
          console.log('Update Record===>', {
            ...recordLookup.record,
            status: SUBSCRIBER_STATUS.SUBSCRIBED,
          });
          const subscribeResp = await dediService.updateRecordDedi(
            `${body.subscriber_id}-${body.domain}`,
            {
              ...recordLookup.record,
              status: SUBSCRIBER_STATUS.SUBSCRIBED,
            }
          );
          return ctx.send({
            status: subscribeResp.updated
              ? SUBSCRIBER_STATUS.SUBSCRIBED
              : SUBSCRIBER_STATUS.UNDER_SUBSCRIPTION,
          });
        } else {
          return ctx.send({
            status: SUBSCRIBER_STATUS.UNDER_SUBSCRIPTION,
            message: 'Invalid On Subscribe Validation',
          });
        }
      }

      ctx.send({ message: 'Verification is successful' }, 200);
    } catch (error) {
      console.log(error);
      ctx.throw(400, error.message);
    }
  },

  async lookup(ctx) {
    try {
      const body: LookupRequest = ctx.request.body;
      // const response = await strapi
      //   .api('dedi')
      //   .service('dedi')
      //   .queryDirectory(DEDI_NAMESPACE, REGISTRY_NAME);
      const response = await dedi.queryDirectory(DEDI_NAMESPACE, REGISTRY_NAME, {});
      // const records = response.records.filter((record) => {
      //   if (body.type === 'BG') {
      //     return (
      //       record.details.type === body.type &&
      //       (!body.status || record.details.status === body.status)
      //     );
      //   }

      //   return (
      //     (!body.type || record.details.type === body.type) &&
      //     (!body.status || record.details.status === body.status) &&
      //     (!body.domain || record.details.domain === body.domain)
      //   );
      // });
      const filters = body;
      console.log('Filters for lookup===>', filters);
      // if (body.type === 'BG') {
      //   delete filters.domain;
      // }
      // console.log(filters);
      const records = response.records.filter((record) => {
        return Object.entries(filters).every(([key, value]) => {
          if (key === 'domain') {
            return (
              (record.details[key] === '' || record.details[key] === value) && !record?.revoked
            );
          }
          return (value === '' || record.details[key] === value) && !record?.revoked;
        });
      });

      const recs = records.map((records) => {
        return {
          status: records.details.status,
          type: records.details.type,
          domain: records.details.domain,
          signing_public_key: records.details.signing_public_key,
          subscriber_id: records.details.subscriber_id,
          unique_key_id: records.details.key_id,
          valid_until: records.details.valid_until,
          subscriber_url: records.details.url,
          created: records.details.created,
          valid_from: records.details.valid_from,
          encr_public_key: records.details.encr_public_key,
          updated: records.details.updated,
        };
      });
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
});

export default subscribers;
