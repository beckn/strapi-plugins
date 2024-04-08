import pluginPkg from "../package.json";
export const PLUGIN: string = pluginPkg.strapi.name;
export const actions: string[] = [
  "search",
  "init",
  "select",
  "confirm",
  "status",
  "support",
  "cancel",
  "track",
  "rating",
  "update"
];
export const HOSPITALITY_DOMAINS: string[] = ['hospitality'];
export const TOURISM_DOMAINS: string[] = ['tourism'];
export const CHECK_IN: string = 'check-in';
export const CHECK_OUT: string = 'check-out';
export const RADIUS: number = 50;
export const TOLERANCE_RADIUS: number = 500; // meter
export const MAX_DISTANCE: number = 10000; // meter
