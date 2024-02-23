import pluginPkg from '../package.json';
export const PLUGIN: string = pluginPkg.strapi.name;
export const actions: string[] = ['search', 'init', 'select', 'track', 'rating', 'update'];