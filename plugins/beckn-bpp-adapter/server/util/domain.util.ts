import {
  HOSPITALITY_DOMAINS,
  TOURISM_DOMAINS,
  MOBILITY_DOMAINS
} from "../constants";

export const isHospitality = (context: any) =>
  HOSPITALITY_DOMAINS.includes(context?.domain);
export const isTourism = (context: any) =>
  TOURISM_DOMAINS.includes(context?.domain);
export const isMobility = (context: any) =>
  MOBILITY_DOMAINS.includes(context?.domain);
