import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message }) {
    try {
      return {
        "proofs": [
          {
            "credential_purpose": {
              "purpose": {
                "name": "Verification",
                "code": "verification"
              },
              "document_examples": "document_examples"
            }
          }
        ]
      };
    } catch (e) {
      console.log("Error", e);
    }
  }
});
