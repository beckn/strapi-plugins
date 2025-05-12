import type { Core } from '@strapi/strapi';
import { getDeDiService, getPSService, getUserNetworkSubscriberService } from '../utils/service';
import { SUBSCRIBER_STATUS } from '../types/requests/SubscribeRequest';
import { nanoid } from '../utils';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async subscribe(ctx, namespace: string, registryName: string) {
    const {
      subscriber_id: subscriberId,
      url: subscriberUrl,
      signing_public_key: signingPublicKey,
    } = ctx.request.body;

    let existingSubscriber = await this.getBySubscriberId(namespace, registryName, subscriberId);
    if (!existingSubscriber) {
      // Build the subscriber payload
      const newSubscriberData = await this.buildSubscriberPayload(ctx.request.body);

      // Add the subscriber to the directory
      await getDeDiService(strapi).addRecord(namespace, registryName, newSubscriberData);

      // Get the subscriber details
      existingSubscriber = await this.getBySubscriberId(namespace, registryName, subscriberId);

      // Assign the subscriber to the user
      await getUserNetworkSubscriberService(strapi).create({
        data: {
          user: ctx.state.user.id,
          record_id: existingSubscriber.record_id,
          record_name: existingSubscriber.record_name,
        },
      });
    }

    // Validate the subscriber
    if (existingSubscriber && existingSubscriber.details.status == SUBSCRIBER_STATUS.INITIATED) {
      const isSubscriberValid = await this.isSubscriberValid(
        subscriberUrl,
        subscriberId,
        signingPublicKey
      );
      if (isSubscriberValid) {
        existingSubscriber.details.status = SUBSCRIBER_STATUS.SUBSCRIBED;
        await getDeDiService(strapi).updateRecord(
          namespace,
          registryName,
          existingSubscriber.record_name,
          existingSubscriber
        );
        return ctx.send({ status: SUBSCRIBER_STATUS.SUBSCRIBED });
      } else {
        return ctx.send({ status: SUBSCRIBER_STATUS.INITIATED });
      }
    } else if (
      existingSubscriber &&
      existingSubscriber.details.status == SUBSCRIBER_STATUS.SUBSCRIBED
    ) {
      return ctx.send({ status: SUBSCRIBER_STATUS.SUBSCRIBED });
    }
  },

  transformSubscriberRecord(record: any) {
    return {
      id: record.record_id,
      name: record.record_name,
      status: record.details.status,
      type: record.details.type,
      domain: record.details.domain,
      signing_public_key: record.details.signing_public_key,
      subscriber_id: record.details.subscriber_id,
      subscriber_url: record.details.url,
      unique_key_id: record.details.key_id,
      valid_from: record.details.valid_from,
      valid_until: record.details.valid_until,
      created: record.details.created,
      encr_public_key: record.details.encr_public_key,
      city_code: record.details.city_code,
      country_code: record.details.country_code,
      updated: record.details.updated,
    };
  },

  async getSubscribers(ctx, namespace: string, registryName: string) {
    const { page = 1, pageSize = 10 } = ctx.query.paginations || {};
    const response = await getDeDiService(strapi).queryDirectory(namespace, registryName, {
      page,
      page_size: pageSize,
      name: ctx.query.name || '',
    });
    const records = response?.data?.records?.map((record) =>
      this.transformSubscriberRecord(record)
    );
    return {
      results: records,
      pagination: {
        page: response?.data?.page_number,
        pageSize: response?.data?.page_size,
        pageCount: response?.data?.total_pages,
      },
    };
  },

  async getSubscriber(namespace: string, registryName: string, recordName: string) {
    const response = await getDeDiService(strapi).getRecordDetails(
      namespace,
      registryName,
      recordName
    );
    if (!response?.data) {
      throw new Error('Record not found');
    }
    return this.transformSubscriberRecord(response?.data);
  },

  async updateSubscriber(namespace: string, registryName: string, recordName: string, record: any) {
    const { data: existingRecordData } = await getDeDiService(strapi).getRecordDetails(
      namespace,
      registryName,
      recordName
    );
    if (!existingRecordData) {
      throw new Error('Record not found');
    }
    const recordData = {
      details: {
        signing_public_key: record.signing_public_key,
        encr_public_key: record.encr_public_key,
        valid_from: record.valid_from,
        valid_until: record.valid_until,
        url: record.subscriber_url,
        status: SUBSCRIBER_STATUS.INITIATED,
      },
    };
    const existingRecord = existingRecordData.details;
    try {
      if (
        record.signing_public_key != existingRecord.signing_public_key ||
        record.encr_public_key != existingRecord.encr_public_key ||
        record.subscriber_url != existingRecord.subscriber_url
      ) {
        const isSubscriberValid = await this.isSubscriberValid(
          record.subscriber_url,
          record.subscriber_id,
          record.signing_public_key
        );
        if (isSubscriberValid) {
          recordData.details.status = SUBSCRIBER_STATUS.SUBSCRIBED;
        } else {
          throw new Error('Subscriber is not valid');
        }
      } else {
        recordData.details.status = SUBSCRIBER_STATUS.INITIATED;
      }
    } catch (error) {
      throw error;
    } finally {
      await getDeDiService(strapi).updateRecord(namespace, registryName, recordName, recordData);
    }
  },

  async revokeSubscriber(namespace: string, registryName: string, recordName: string) {
    await getDeDiService(strapi).revokeRecord(namespace, registryName, recordName);
  },

  async isSubscriberValid(subscriberUrl: string, subscriberId: string, signingPublicKey: string) {
    const challenge = Math.random()
      .toString(36)
      .substring(2, 2 + 6);
    const onSubscribeValidation = await getPSService(strapi).callOnSubscribe(
      subscriberUrl,
      subscriberId,
      challenge,
      signingPublicKey
    );
    return onSubscribeValidation.validOnSubscribe;
  },

  async getBySubscriberId(namespace: string, registryName: string, subscriberId: string) {
    const result = await getDeDiService(strapi).queryDirectory(namespace, registryName, {
      name: subscriberId,
    });
    const existingRecord = result.data.records?.find(
      (record) => record.details.subscriber_id == subscriberId
    );
    return existingRecord;
  },

  async subscriberExists(namespace: string, registryName: string, subscriberId: string) {
    return (await this.getBySubscriberId(namespace, registryName, subscriberId)) ? true : false;
  },

  async buildSubscriberPayload(data: any) {
    return {
      record_name: nanoid(),
      description: `${data.subscriber_id} - ${data.domain} - ${data.url}`,
      details: {
        domain: data.domain,
        url: data.url,
        type: data.type,
        signing_public_key: data.signing_public_key,
        encr_public_key: data.encr_public_key,
        subscriber_id: data.subscriber_id,
        key_id: data.key_id,
        valid_from: data.valid_from,
        valid_until: data.valid_until,
        status:
          data.type == 'LREG' || data.type == 'BG'
            ? SUBSCRIBER_STATUS.SUBSCRIBED
            : SUBSCRIBER_STATUS.INITIATED,
        country_code: data.location.country.code,
        city_code: data.location.city.code,
        created: new Date(),
        updated: new Date(),
      },
    };
  },

  async isUserSubscriberOwnerOrAdmin(recordName: string, user: any) {
    try {
      if (user.role.type == 'admin') {
        return true;
      }
      const userNetworkSubscriber = await getUserNetworkSubscriberService(strapi).find({
        filters: {
          record_name: recordName,
          user: user.id,
        },
      });
      return userNetworkSubscriber?.results?.length > 0 ? true : false;
    } catch (error) {
      console.log('Error checking if user is subscriber owner: ', error);
      return false;
    }
  },
});
