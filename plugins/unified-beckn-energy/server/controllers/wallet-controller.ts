import { Strapi } from "@strapi/strapi";
import {
  ATTESTERS,
  BECKN_ONE_URL,
  CRYPTO_UTIL_URL,
  WALLET_DOCUMENTS_TYPES
} from "../constant/wallet-attesters";
import axios from "axios";
export default ({ strapi }: { strapi: Strapi }) => ({
  async linkWallet(ctx: any) {
    try {
      const user = ctx.state.user;
      const {
        wallet_id,
        energy_identities_consent = false,
        energy_assets_consent = false,
        energy_transactions_consent = false
      } = ctx.request.body;

      const walletService = strapi
        .plugin("unified-beckn-energy")
        .service("walletService");

      const result = await walletService.createWallet({
        wallet_id,
        energy_identities_consent,
        energy_assets_consent,
        energy_transactions_consent,
        userId: user.id
      });
      return (ctx.body = result);
    } catch (error) {
      console.log(error);
      ctx.badRequest(error.message);
    }
  },
  async unlinkWallet(ctx: any) {
    try {
      const user = ctx.state.user;
      const { wallet_id } = ctx.request.body;

      const walletService = strapi
        .plugin("unified-beckn-energy")
        .service("walletService");

      const result = await walletService.unlinkWallet({
        wallet_id,
        userId: user.id
      });
      return (ctx.body = result);
    } catch (error) {
      ctx.badRequest(error.message);
    }
  },
  async attestDocument(ctx: any) {
    try {
      const user = ctx.state.user;
      const walletService = strapi
        .plugin("unified-beckn-energy")
        .service("walletService");

      const { wallet_doc_type, document_id } = ctx.request.body;

      const self_subjectDetails = (
        await axios.get(`${BECKN_ONE_URL}${user.deg_wallet.deg_wallet_id}`)
      ).data;
      const self_keyPair = (
        await axios.get(
          `${CRYPTO_UTIL_URL}/crypto_keys/generatepublicprivatebymessage?input=Ed25519:256&message=${user.deg_wallet.deg_wallet_id.replaceAll(
            "/subjects/",
            ""
          )}`
        )
      ).data;

      const self_verification_methods = (
        await axios.get(
          `${BECKN_ONE_URL}${user.deg_wallet.deg_wallet_id}/verification_methods`
        )
      ).data;

      const attesters_list: any[] = [
        {
          key_pair: self_keyPair,
          subject_details: {
            did: self_subjectDetails[0].did,
            verification_methods: self_verification_methods[0]
          }
        }
      ];
      if (wallet_doc_type === WALLET_DOCUMENTS_TYPES.TRANSACTION) {
        attesters_list.push(ATTESTERS.openSpark);
      } else {
        attesters_list.push(ATTESTERS.openWallet);
      }

      const successAttestList: any[] = [];
      for (let i = 0; i < attesters_list.length; i++) {
        console.log("Index===>", i);
        const attester = attesters_list[i];
        const signature = await walletService.generateSignature({
          attester: attester,
          document_id
        });

        const rawAttestationPayload = {
          document: {
            did: document_id
          },
          verification_method: {
            did: attester.subject_details.verification_methods.did
          },
          signature: signature.SIGNATURE_KEY
        };

        console.log({
          endpoint: `${document_id}/attestations`,
          method: "post",
          keyId: attester.subject_details.verification_methods.did,
          privateKey: attester.key_pair.PRIVATE_KEY,
          publicKey: attester.key_pair.PUBLIC_KEY,
          payload: rawAttestationPayload
        });
        const authHeader = (
          await axios.post(`${CRYPTO_UTIL_URL}/auth/sign`, {
            endpoint: `${document_id}/attestations`,
            method: "post",
            keyId: attester.subject_details.verification_methods.did,
            privateKey: attester.key_pair.PRIVATE_KEY,
            publicKey: attester.key_pair.PUBLIC_KEY,
            payload: rawAttestationPayload
          })
        ).data;

        const extractAuthAndHeader = (
          inputString: string
        ): { authorization: string | null; payload: any } => {
          const authMatch = inputString.match(/Authorization=(.*?),\s*payload/);
          const payloadMatch = inputString.match(/payload=(.*?})\s*}/);
          if (
            authMatch &&
            authMatch?.length > 0 &&
            payloadMatch &&
            payloadMatch?.length > 0
          ) {
            const authorization = authMatch?.[1].trim();
            const payload: any = payloadMatch?.[1];

            return { authorization: authorization!, payload: payload };
          } else {
            return { authorization: null, payload: { name: "", stream: "" } };
          }
        };
        const { authorization, payload } = extractAuthAndHeader(authHeader);

        successAttestList.push(
          (
            await axios.post(
              `${BECKN_ONE_URL}${document_id}/attestations`,
              JSON.parse(payload),
              {
                headers: {
                  Authorization: authorization
                }
              }
            )
          ).data
        );
      }

      return (ctx.body = successAttestList);
    } catch (error) {
      console.log(error.response.data);
      ctx.badRequest(error.message);
    }
  }
});
