import { Strapi } from "@strapi/strapi";
import { PLUGIN } from "../../constants";
import { Object } from '../../interface/object'

export default ({ strapi }: { strapi: Strapi }) => ({
  async index(obj: Object) {
    const trackService = strapi.plugin(PLUGIN).service("trackService");
    const message=obj.message
    const context=obj.context
    return trackService.track({ message, context });
  }
});
