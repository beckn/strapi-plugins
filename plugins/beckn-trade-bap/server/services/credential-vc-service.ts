import { Strapi } from "@strapi/strapi";
import axios from "axios";
export default ({ strapi }: { strapi: Strapi }) => ({
  async issueCertificate(
    schemaId: string,
    properties: {
      [key: string]: any;
    }
  ) {
    try {
      const vc = await axios.post(
        `${process.env.DHIWAY_ISSUER_URL}/api/v1/cred`,
        {
          schemaId,
          properties
        }
      );
      return vc.data.vc;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async verifyCertificate(vc: any) {
    try {
      // const verificationResp = await axios.post(
      //   `${process.env.DHIWAY_VERIFIER_URL}/api/v1/verify/credentials/verify`,
      //   vc
      // );
      // if (verificationResp.data.error && verificationResp.data.error.length) {
      //   return {
      //     isVerified: false,
      //     vc
      //   };
      // }
      return { isVerified: true, vc };
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  async getBecknJson(bpp_uri: string) {
    try {
      const becknJsonVC = await axios.get(`${bpp_uri}/public/beckn.json`);
      if (becknJsonVC.status === 200) {
        return { success: true, vc: becknJsonVC.data };
      } else {
        return { success: false, vc: {} };
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
});
