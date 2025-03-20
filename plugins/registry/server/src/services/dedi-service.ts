import type { Core } from '@strapi/strapi';
import axios from 'axios';
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
      //   `${process.env.DEDI_URL}/dedi/lookup/${process.env.NAMESPACE}/${process.env.REGISTRY_NAME}/${subscriber_id}`
      // );
      console.log(
        'Looking up for url=>',
        `${process.env.DEDI_URL}/dedi/query/${process.env.NAMESPACE}/${process.env.REGISTRY_NAME}?name=${subscriber_id}`
      );
      // const dediLookupResp = await axios.get(
      //   `${process.env.DEDI_URL}/dedi/lookup/${process.env.NAMESPACE}/${process.env.REGISTRY_NAME}/${subscriber_id}`
      // );
      const dediLookupResp = await axios.get(
        `${process.env.DEDI_URL}/dedi/query/${process.env.NAMESPACE}/${process.env.REGISTRY_NAME}?name=${subscriber_id}`
      );
      const matchFound = dediLookupResp?.data?.records?.find(
        (record: any) => record?.record_name === subscriber_id
      );
      // return { record: dediLookupResp.data.details, found: true };
      if (matchFound) {
        console.log({ record: matchFound?.details || {}, found: true });
        return { record: matchFound?.details || {}, found: true };
      }
      return { record: {}, found: false };
    } catch (error) {
      return { record: {}, found: false };
    }
  },
  async updateRecordDedi(subscriber_id: string, updatedRecord: any) {
    try {
      const dediUpdateResp = await axios.post(
        `${process.env.DEDI_URL}/dedi/${process.env.NAMESPACE}/${process.env.REGISTRY_NAME}/${subscriber_id}/update-record`,
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
  async createRecordDedi(payload: SubscribeRequest) {
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
        status: SUBSCRIBER_STATUS.INITIATED,
      };
      const dediUpdateResp = await axios.post(
        `${process.env.DEDI_URL}/dedi/${process.env.NAMESPACE}/${process.env.REGISTRY_NAME}/add-record`,
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
