import type { Core } from '@strapi/strapi';
import axios from 'axios';

const subscriberService = ({ strapi }: { strapi: Core.Strapi }) => ({
  async lookupRecordsDedi(subscriber_id: string) {
    try {
      const dediLookupResp = await axios.get(
        `${process.env.DEDI_URL}/dedi/lookup/${process.env.NAMESPACE}/${process.env.REGISTRY_NAME}/${subscriber_id}`
      );
      return { record: dediLookupResp.data.details, found: true };
    } catch (error) {
      return { record: {}, found: false };
    }
  },
});

export default subscriberService;
