import type { Core } from '@strapi/strapi';
import { JSDOM } from 'jsdom';
import _sodium from 'libsodium-wrappers';

import { SubscribeRequest } from '../types/requests/SubscribeRequest';

const subscribers = ({ strapi }: { strapi: Core.Strapi }) => ({
  async subscribe(ctx) {
    try {
      const body: SubscribeRequest = ctx.request.body;
      const signingPublicKey = body.signing_public_key;
      const dediService = strapi.plugin('registry').service('dediService');
      const psService = strapi.plugin('registry').service('psService');
      // Lookup for existing records in DeDi
      const recordLookup = await dediService.lookupRecordsDedi(body.subscriber_id);
      if (recordLookup.found) {
        if (recordLookup.record.status === 'SUBSCRIBED') {
          return ctx.send({ message: 'Already Subscribed' });
        } else if (recordLookup.record.status === 'INITIATED') {
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
            // Update record in dedi with Subscribed State
          } else {
            return ctx.send({ message: 'Invalid On Subscribe Validation' });
          }
        }
      }

      // const subscriberUrl = body.url;
      // const subscriberId = body.subscriber_id;
      // const metaContent = await getSiteVerificationContent(
      //   `${subscriberUrl}/public/verification.html`
      // );

      // const decryptedContent = await decryptMessage(metaContent, signingPublicKey);
      // const payload = JSON.parse(decryptedContent);

      // if (payload.subscriber_id != subscriberId) {
      //   throw new Error('Site verification failed: Subscriber id missmatched');
      // }

      // const challenge = Math.random()
      //   .toString(36)
      //   .substring(2, 2 + 6);
      // console.log({ 'generated challenge': challenge });
      // const subscriberResponse = await onSubscribe(subscriberId, subscriberUrl, challenge);
      // if (!subscriberResponse.answer) throw new Error('Subscriber answer is not received');

      // console.log({ 'onSubscribe response': subscriberResponse });

      // const decryptedChallenge = await decryptMessage(subscriberResponse.answer, signingPublicKey);
      // console.log({ decryptedChallenge });

      // if (challenge !== decryptedChallenge) {
      //   throw new Error('Challenge verification failed');
      // }
      ctx.send({ message: 'Verification is successful' }, 200);
    } catch (error) {
      console.log(error);
      ctx.throw(400, error.message);
    }
  },
});

export default subscribers;
