import { Strapi } from "@strapi/strapi";
import { PLUGIN } from "../../constants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    const trackService = strapi.plugin(PLUGIN).service("trackService");
    return trackService.track({ message, context });
  }
});
