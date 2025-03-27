import type { Core } from '@strapi/strapi';
import axios, { AxiosResponse } from 'axios';
import { decryptMessage, getSiteVerificationContent } from '../utils';
import https from 'https';
import { SubscribeRequest } from 'src/types/requests/SubscribeRequest';

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
      console.log(error);
      return { validOnSubscribe: false };
    }
  },

  async validateSSL(subscriber_url: string) {
    try {
      console.log(`Validating SSL for https://${subscriber_url.split('//')[1]}`);
      const agent = new https.Agent({
        rejectUnauthorized: false,
      });
      let response: AxiosResponse<any, any>;
      try {
        response = await axios.get(`https://${subscriber_url.split('//')[1]}`, {
          httpsAgent: agent,
        });
      } catch (error) {
        if (error.response.status === 404 || error.response.status === 200) {
          return { success: true };
        }
      }
      const cert = response.request.socket.getPeerCertificate();

      if (!cert || Object.keys(cert).length === 0) {
        return { success: false };
      }
      console.log('Certificate Found', JSON.stringify(cert));
      const expiryDate = new Date(cert.valid_to);
      const currentDate = new Date();
      if (expiryDate > currentDate) {
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.log('Error in validating SSL', error);
      return { success: false };
    }
  },
  async validateVerifyHTML(requestPayload: SubscribeRequest) {
    try {
      console.log(
        `Validating Verify for https://${requestPayload.url.split('//')[1]}/public/verification.html`
      );
      const siteContent = await getSiteVerificationContent(
        ` https://${requestPayload.url.split('//')[1]}/public/verification.html`
      );
      const decryptedContent = await decryptMessage(siteContent, requestPayload.signing_public_key);
      const payload = JSON.parse(decryptedContent);
      if (
        payload?.subscriber_id !== requestPayload.subscriber_id ||
        payload?.url !== requestPayload.url ||
        payload?.domain !== requestPayload.domain ||
        payload?.signing_public_key !== requestPayload.signing_public_key
      ) {
        return { success: false, message: 'Verification HTML failed' };
      }
      return { success: true };
    } catch (error) {
      console.log('Error in validating verfication HTML=>', error);
      return { success: false };
    }
  },

  async fetchDomains(registry_url: string) {
    try {
      console.log(`Fetching Domains from ${registry_url}/network_domains`);
      const domains = await axios.get(`${registry_url}/network_domains`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return domains.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  },

  async storeDomain({
    name,
    description,
    schema_url = '',
  }: {
    name: string;
    description: string;
    schema_url: string;
  }) {
    try {
      const domains = await (strapi.documents('api::domain.domain') as any).create({
        data: {
          name,
          description,
          schema_url,
          publishedAt: new Date(),
        },
        status: 'published',
      });

      return domains;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  },

  async getDomains() {
    try {
      const domains = await strapi.documents('api::domain.domain').findMany();
      return domains;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  },
});

export default psService;
