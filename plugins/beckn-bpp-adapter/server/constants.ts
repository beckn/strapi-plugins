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
  "update",
  "cred"
];
export const HOSPITALITY_DOMAINS: string[] = ["hospitality:dev"];
export const TOURISM_DOMAINS: string[] = ["tourism:dev"];
export const MOBILITY_DOMAINS: string[] = ["mobility:1.1.0:dev"];
export const ENERGY_DOMAINS: string[] = [
  "uei:p2p-trading:dev",
  "uei:p2p_trading:dev"
];
export const RETAIL_DOMAINS: string[] = ["retail:1.1.0:dev"];

export const CHECK_IN: string = "check-in";
export const CHECK_OUT: string = "check-out";
export const START: string = "start";
export const END: string = "end";
export const RADIUS: number = 2;
export const TOLERANCE_RADIUS: number = 5000; // meter
export const MAX_DISTANCE: number = 10000; // meter

export const DEFAULT_INITIAL_STATE = [
  {
    domain: "dsep:courses:dev",
    state: {
      state_code: "PAYMENT_RECEIVED",
      state_value: "PAYMENT_RECEIVED"
    }
  },
  {
    domain: "dsep:jobs:dev",
    state: {
      state_code: "APPLICATION_SUBMITTED",
      state_value: "APPLICATION SUBMITTED"
    }
  },
  {
    domain: "dsep:scholarships:dev",
    state: {
      state_code: "APPLICATION_SUBMITTED",
      state_value: "APPLICATION SUBMITTED"
    }
  },
  {
    domain: "supply-chain-services:assembly:dev",
    state: {
      state_code: "ORDER_ACCEPTED",
      state_value: "ORDER ACCEPTED"
    }
  },
  {
    domain: "online-dispute-resolution:0.1.0:dev",
    state: {
      state_code: "REQUEST_RECEIVED",
      state_value: "REQUEST RECEIVED"
    }
  },
  {
    domain: "mobility:1.1.0:dev",
    state: {
      state_code: "RIDE_STATUS",
      state_value: "AWAITING_DRIVER_APPROVAL"
    }
  },
  {
    domain: "deg:retail:dev",
    state: {
      state_code: "ORDER_DELIVERED",
      state_value: "ORDER DELIVERED"
    }
  },
  {
    domain: "deg:finance:dev",
    state: {
      state_code: "LOAN_DISBURSED",
      state_value: "LOAN DISBURSED"
    }
  }
];
