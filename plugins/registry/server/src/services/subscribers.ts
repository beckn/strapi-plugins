import type { Core } from '@strapi/strapi';
import { getDeDiService, getPSService } from '../utils/service';
import { SUBSCRIBER_STATUS } from '../types/requests/SubscribeRequest';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async getSubscribers(namespace: string, registryName: string) {
        const response = await getDeDiService(strapi).queryDirectory(namespace, registryName, {});
        return response?.data?.records?.map((records) => ({
            id: records.record_id,
            name: records.record_name,
            status: records.details.status,
            type: records.details.type,
            domain: records.details.domain,
            signing_public_key: records.details.signing_public_key,
            subscriber_id: records.details.subscriber_id,
            subscriber_url: records.details.url,
            unique_key_id: records.details.key_id,
            valid_from: records.details.valid_from,
            valid_until: records.details.valid_until,
            created: records.details.created,
            encr_public_key: records.details.encr_public_key,
            city_code: records.details.city_code,
            country_code: records.details.country_code,
            updated: records.details.updated,
        }));
    },

    async updateSubscriber(namespace: string, registryName: string, recordName: string, record: any) {
        const { data: existingRecordData } = await getDeDiService(strapi).getRecordDetails(namespace, registryName, recordName);
        if (!existingRecordData) {
            throw new Error("Record not found");
        }
        const recordData = {
            details: {
                signing_public_key: record.signing_public_key,
                encr_public_key: record.encr_public_key,
                valid_from: record.valid_from,
                valid_until: record.valid_until,
                url: record.subscriber_url,
                status: SUBSCRIBER_STATUS.INITIATED
            }
        }
        const existingRecord = existingRecordData.details;
        try {
            if (record.signing_public_key != existingRecord.signing_public_key ||
                record.encr_public_key != existingRecord.encr_public_key ||
                record.subscriber_url != existingRecord.subscriber_url) {
                const isSubscriberValid = await this.isSubscriberValid(record.subscriber_url, record.subscriber_id, record.signing_public_key);
                if (isSubscriberValid) {
                    recordData.details.status = SUBSCRIBER_STATUS.SUBSCRIBED;
                } else {
                    throw new Error("Subscriber is not valid");
                }
            }
        } catch (error) {
            throw error;
        } finally {
            await getDeDiService(strapi).updateRecord(namespace, registryName, recordName, recordData);
        }
    },

    async isSubscriberValid(subscriberUrl: string, subscriberId: string, signingPublicKey: string) {
        const challenge = Math.random().toString(36).substring(2, 2 + 6);
        const onSubscribeValidation = await getPSService(strapi)
            .callOnSubscribe(subscriberUrl, subscriberId, challenge, signingPublicKey);
        return onSubscribeValidation.validOnSubscribe;
    }
})
