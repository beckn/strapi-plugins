import pluginPkg from "../package.json";
import dotenv from "dotenv";

dotenv.config();
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
  "update",
  "cred"
];

export const HOSPITALITY_DOMAINS: string[] =
  process.env.HOSPITALITY_DOMAINS?.split(",") || [];
export const TOURISM_DOMAINS: string[] =
  process.env.TOURISM_DOMAINS?.split(",") || [];
export const MOBILITY_DOMAINS: string[] =
  process.env.MOBILITY_DOMAIN?.split(",") || [];
export const ENERGY_DOMAINS: string[] =
  process.env.ENERGY_DOMAINS?.split(",") || [];
export const RETAIL_DOMAINS: string[] =
  process.env.RETAIL_DOMAINS?.split(",") || [];

export const CHECK_IN: string = "check-in";
export const CHECK_OUT: string = "check-out";
export const START: string = "start";
export const END: string = "end";
export const RADIUS: number = 2;
export const TOLERANCE_RADIUS: number = 5000; // meter
export const MAX_DISTANCE: number = 10000; // meter

export const DEFAULT_INITIAL_STATE = [
  {
    domain: process.env.DSEP_COURSES_DOMAIN!,
    state: {
      state_code: "PAYMENT_RECEIVED",
      state_value: "PAYMENT_RECEIVED"
    }
  },
  {
    domain: process.env.DSEP_JOBS_DOMAIN!,
    state: {
      state_code: "APPLICATION_SUBMITTED",
      state_value: "APPLICATION SUBMITTED"
    }
  },
  {
    domain: process.env.DSEP_SCHOLARSHIPS_DOMAIN!,
    state: {
      state_code: "APPLICATION_SUBMITTED",
      state_value: "APPLICATION SUBMITTED"
    }
  },
  {
    domain: process.env.SUPPLY_CHAIN_DOMAIN!,
    state: {
      state_code: "ORDER_ACCEPTED",
      state_value: "ORDER ACCEPTED"
    }
  },
  {
    domain: process.env.ODR_DOMAIN!,
    state: {
      state_code: "REQUEST_RECEIVED",
      state_value: "REQUEST RECEIVED"
    }
  },
  {
    domain: process.env.MOBILITY_DOMAIN!,
    state: {
      state_code: "RIDE_STATUS",
      state_value: "AWAITING_DRIVER_APPROVAL"
    }
  },
  {
    domain: process.env.DEG_RETAIL_DOMAIN!,
    state: {
      state_code: "ORDER_DELIVERED",
      state_value: "ORDER DELIVERED"
    }
  },
  {
    domain: process.env.DEG_FINANCE_DOMAIN!,
    state: {
      state_code: "LOAN_DISBURSED",
      state_value: "LOAN DISBURSED"
    }
  }
];