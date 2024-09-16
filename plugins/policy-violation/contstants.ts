import pluginPkg from "./package.json";
export const PLUGIN: string = pluginPkg.strapi.name;
export const POLICYACTIONS: string[] = ['accept', 'reject'];
export const APPLICABLETO: string[] = ['bap', 'bpp'];