import { Strapi } from "@strapi/strapi";
import { KeyValuePair } from "../../types";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message }) {
    try {
      const {
        asset: { type, id },
        requested_proofs
      } = message;
      let credData: KeyValuePair = {};
      switch (type.toLowerCase()) {
        case "provider":
          credData = await this.getProviderCred(id);
          break;

        default:
          credData = {};
          break;
      }
      const proofs = {
        requested: requested_proofs,
        attachments: [
          {
            verifiableCredential: {
              ...(credData?.agents[0]?.agent_profile?.credentials?.[0]?.vc || {})
            }
          }
        ]
      };
      console.log('abhi', JSON.stringify(credData));
      return {
        asset: {
          type,
          id
        },
        proofs
      };
    } catch (e) {
      console.log("Error", e);
    }
  },
  async getProviderCred(id: string) {
    const provider = await strapi.entityService.findOne(
      "api::provider.provider",
      id,
      {
        populate: {
          agents: {
            populate: {
              agent_profile: {
                populate: {
                  credentials: {}
                }
              }
            }
          }
        }
      }
    );
    return provider;
  }
});
