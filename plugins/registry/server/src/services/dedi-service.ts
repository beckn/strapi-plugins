import type { Core } from '@strapi/strapi';
import axios from 'axios';
import { REGISTRY_NAME } from '../controllers/subscribers';
import {
  DeDiSubsciberSchema,
  SubscribeRequest,
  SUBSCRIBER_STATUS,
} from '../types/requests/SubscribeRequest';

const subscriberService = ({ strapi }: { strapi: Core.Strapi }) => ({
  async lookupRecordsDedi(subscriber_id: string) {
    try {
      // console.log(
      //   'Looking up for url=>',
      //   `${process.env.process.env.DEDI_BASE_URL}/dedi/lookup/${process.env.DEDI_NAMESPACE}/${REGISTRY_NAME}/${subscriber_id}`
      // );
      console.log(
        'Looking up for url=>',
        `${process.env.DEDI_BASE_URL}/dedi/query/${process.env.DEDI_NAMESPACE}/${REGISTRY_NAME}?name=${subscriber_id}`
      );
      // const dediLookupResp = await axios.get(
      //   `${process.env.DEDI_BASE_URL}/dedi/lookup/${process.env.DEDI_NAMESPACE}/${REGISTRY_NAME}/${subscriber_id}`
      // );
      const dediLookupResp = await axios.get(
        `${process.env.DEDI_BASE_URL}/dedi/query/${process.env.DEDI_NAMESPACE}/${REGISTRY_NAME}`
      );
      console.log('dediLookupResp---->', JSON.stringify(dediLookupResp.data));
      const matchFound = dediLookupResp?.data?.records?.find(
        (record: any) => record?.record_name === subscriber_id
      );

      // return { record: dediLookupResp.data.details, found: true };
      if (matchFound) {
        console.log('Lookup Match Found===>', { record: matchFound?.details || {}, found: true });
        return { record: matchFound?.details || {}, found: true };
      }
      return { record: {}, found: false };
    } catch (error) {
      console.log(error);
      return { record: {}, found: false };
    }
  },
  async updateRecordDedi(subscriber_id: string, updatedRecord: any) {
    try {
      const dediUpdateResp = await axios.post(
        `${process.env.DEDI_BASE_URL}/dedi/${process.env.DEDI_NAMESPACE}/${REGISTRY_NAME}/${subscriber_id}/update-record`,
        { record_name: subscriber_id, description: subscriber_id, details: updatedRecord }
      );
      return {
        record: dediUpdateResp.data.messaage === 'updated' ? updatedRecord : {},
        updated: true,
      };
    } catch (error) {
      return { record: {}, updated: false };
    }
  },
  async createRecordDedi(payload: SubscribeRequest, status: SUBSCRIBER_STATUS) {
    try {
      const newSubscriberDediPayload: DeDiSubsciberSchema = {
        key_id: payload.key_id,
        created: payload.created,
        city_code: payload.location.city.code,
        valid_from: payload.valid_from,
        type: payload.type,
        nonce: payload.nonce,
        url: payload.url,
        country_code: payload.location.country.code,
        signing_public_key: payload.signing_public_key,
        subscriber_id: payload.subscriber_id,
        valid_until: payload.valid_until,
        domain: payload.domain,
        encr_public_key: payload.encr_public_key,
        updated: payload.updated,
        status: status,
      };
      const dediUpdateResp = await axios.post(
        `${process.env.DEDI_BASE_URL}/dedi/${process.env.DEDI_NAMESPACE}/${REGISTRY_NAME}/add-record`,
        {
          record_name: `${newSubscriberDediPayload.subscriber_id}-${newSubscriberDediPayload.domain}`,
          description: `${newSubscriberDediPayload.subscriber_id}-${newSubscriberDediPayload.domain}`,
          details: {
            ...newSubscriberDediPayload,
          },
        }
      );
      return {
        record: newSubscriberDediPayload,
        created: true,
      };
    } catch (error) {
      console.log(error);
      return { record: {}, created: false };
    }
  },
});

export default subscriberService;
