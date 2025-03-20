import type { Core } from '@strapi/strapi';
import axios from 'axios';
import { decryptMessage } from 'src/utils';

const psService = ({ strapi }: { strapi: Core.Strapi }) => ({
  async callOnSubscribe(
    subscriber_url: string,
    subscriber_id: string,
    challenge: string,
    signingPublicKey: string
  ) {
    try {
      console.log('Preparing request to subscriber:', subscriber_url);
      console.log('Request URL:', `${subscriber_url}/on_subscribe`);
      console.log(
        'Request Payload:',
        JSON.stringify(
          {
            subscriber_id,
            challenge,
          },
          null,
          2
        )
      );
      const onSubscribeResp = await axios.post(`${subscriber_url}/on_subscribe`, {
        subscriber_id,
        challenge,
      });
      console.log('Response Status:', onSubscribeResp.status);
      console.log('Response:', onSubscribeResp.data);

      const matchChallenge =
        (await decryptMessage(onSubscribeResp.data.answer, signingPublicKey)) === challenge;

      return { validOnSubscribe: matchChallenge };
    } catch (error) {
      return { validOnSubscribe: false };
    }
  },
});

export default psService;
