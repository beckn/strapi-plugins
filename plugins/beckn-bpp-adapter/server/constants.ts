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
export const MOBILITY_DOMAINS: string[] = ['mobility:1.1.0'];
export const CHECK_IN: string = 'check-in';
export const CHECK_OUT: string = 'check-out';
export const START: string = 'start';
export const END: string = 'end';
export const RADIUS: number = 50;
export const TOLERANCE_RADIUS: number = 5000; // meter
export const MAX_DISTANCE: number = 10000; // meter
