import { HOSPITALITY_DOMAINS, TOURISM_DOMAINS, MOBILITY_DOMAINS, ENERGY_DOMAINS } from "../constants"

export const isHospitality = (context) => HOSPITALITY_DOMAINS.includes(context?.domain);
export const isTourism = (context) => TOURISM_DOMAINS.includes(context?.domain);
export const isMobility = (context) => MOBILITY_DOMAINS.includes(context?.domain);
export const isEnergy = (context) => ENERGY_DOMAINS.includes(context?.domain);