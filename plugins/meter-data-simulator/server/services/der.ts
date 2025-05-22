import { Strapi } from "@strapi/strapi";
import {
  getDerApiService,
  getEnergyResourceApiService
} from "../utils/service.js";

export default ({ strapi }: { strapi: Strapi }) => ({
  async toggle(er_id: string, der_id: string, switched_on: boolean) {
    try {
      // 1. Fetch DER with its energy resource
      const der = await getDerApiService(strapi).findOne(der_id, {
        populate: ["energy_resource"]
      });

      if (!der) {
        throw new Error("DER not found");
      }

      // 2. Validate ER ID
      if (der.energy_resource.id !== parseInt(er_id)) {
        throw new Error("DER does not belong to this Energy Resource");
      }

      // 3. Toggle the switched_on state
      const updatedDer = await getDerApiService(strapi).update(der_id, {
        data: {
          switched_on: switched_on
        }
      });

      return {
        message: `DER ${
          updatedDer.switched_on ? "switched on" : "switched off"
        } successfully`,
        data: updatedDer
      };
    } catch (error) {
      console.error("Error toggling DER:", error);
      throw error;
    }
  },
  async switchOff(der_ids: string[]) {
    try {
      const result = await strapi.db.query("api::der.der").updateMany({
        where: { id: { $in: der_ids } },
        data: { switched_on: false }
      });
      return result;
    } catch (error) {
      console.error("Error switching off DER:", error);
      throw error;
    }
  },
  async switchOn(der_ids: string[]) {
    try {
      const result = await strapi.db.query("api::der.der").updateMany({
        where: { id: { $in: der_ids } },
        data: { switched_on: true }
      });
      return result;
    } catch (error) {
      console.error("Error switching on DER:", error);
      throw error;
    }
  }
});
