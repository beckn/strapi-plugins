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
export const HOSPITALITY_DOMAINS: string[] = ["hospitality"];
export const TOURISM_DOMAINS: string[] = ["tourism"];
export const MOBILITY_DOMAINS: string[] = ["mobility:1.1.0"];
export const ENERGY_DOMAINS: string[] = ["uei:p2p-trading", "uei:p2p_trading"];
export const RETAIL_DOMAINS: string[] = ["retail:1.1.0"];

export const CHECK_IN: string = "check-in";
export const CHECK_OUT: string = "check-out";
export const START: string = "start";
export const END: string = "end";
export const RADIUS: number = 2;
export const TOLERANCE_RADIUS: number = 5000; // meter
export const MAX_DISTANCE: number = 10000; // meter

export const DEFAULT_INITIAL_STATE = [
  {
    domain: "dsep:courses",
    state: {
      state_code: "PAYMENT_RECEIVED",
      state_value: "PAYMENT_RECEIVED"
    }
  },
  {
    domain: "dsep:jobs",
    state: {
      state_code: "APPLICATION_SUBMITTED",
      state_value: "APPLICATION SUBMITTED"
    }
  },
  {
    domain: "dsep:scholarships",
    state: {
      state_code: "APPLICATION_SUBMITTED",
      state_value: "APPLICATION SUBMITTED"
    }
  },
  {
    domain: "supply-chain-services:assembly",
    state: {
      state_code: "ORDER_ACCEPTED",
      state_value: "ORDER ACCEPTED"
    }
  },
  {
    domain: "online-dispute-resolution:0.1.0",
    state: {
      state_code: "REQUEST_RECEIVED",
      state_value: "REQUEST RECEIVED"
    }
  },
  {
    domain: "mobility:1.1.0",
    state: {
      state_code: "RIDE_STATUS",
      state_value: "AWAITING_DRIVER_APPROVAL"
    }
  }
];
