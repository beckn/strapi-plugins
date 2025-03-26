import { Location } from '../Location';

export enum SUBSCRIBER_STATUS {
  INITIATED = 'INITIATED',
  UNDER_SUBSCRIPTION = 'UNDER_SUBSCRIPTION',
  SUBSCRIBED = 'SUBSCRIBED',
  EXPIRED = 'EXPIRED',
  UNSUBSCRIBED = 'UNSUBSCRIBED',
  INVALID_SSL = 'INVALID_SSL',
}

export type SubscribeRequest = {
  subscriber_id: string;
  url: string;
  type: 'BAP' | 'BPP' | 'BG' | 'LREG';
  domain: string;
  location: Location;
  key_id: string;
  signing_public_key: string;
  encr_public_key: string;
  valid_from: string; // ISO date string
  valid_until: string; // ISO date string
  status: SUBSCRIBER_STATUS;
  created: string; // ISO date string
  updated: string; // ISO date string
  nonce: string;
};

export type DeDiSubsciberSchema = {
  key_id: string;
  created: string;
  city_code: string;
  valid_from: string;
  type: string;
  nonce: string;
  url: string;
  country_code: string;
  signing_public_key: string;
  subscriber_id: string;
  valid_until: string;
  domain: string;
  encr_public_key: string;
  updated: string;
  status: string;
};
