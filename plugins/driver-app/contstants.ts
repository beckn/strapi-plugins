import pluginPkg from "./package.json";
import dotenv from "dotenv";
export const PLUGIN: string = pluginPkg.strapi.name;

export const MOBILITY_DOMAIN = `mobility:1.1.0${
  process.env.BECKN_ENV ? `:${process.env.BECKN_ENV}` : ""
}`;
export enum RIDE_STATUS_CODE {
  AWAITING_DRIVER_APPROVAL = "AWAITING_DRIVER_APPROVAL",
  RIDE_ACCEPTED = "RIDE_ACCEPTED",
  CAB_REACHED_PICKUP_LOCATION = "CAB_REACHED_PICKUP_LOCATION",
  RIDE_STARTED = "RIDE_STARTED",
  RIDE_COMPLETED = "RIDE_COMPLETED",
  RIDE_DECLINED = "RIDE_DECLINED"
}
