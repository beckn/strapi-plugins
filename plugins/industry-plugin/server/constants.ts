import pluginPkg from '../package.json';
export const PLUGIN: string = pluginPkg.strapi.name;
export const CONTENT_TYPE = "application/json";
export const DEFAULT_STATE = "";
export const COMPLETED_STATUS = "COMPLETED";
export const SUCCESSFUL_COMPLETION_MESSAGE = "THE ORDER IS SUCCESSFULLY COMPLETED";
export const ORDER_NOT_FOUND_MESSAGE = "Order not found";