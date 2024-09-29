import { DateTime } from "@strapi/strapi/lib/types/core/attributes";

export type Provider = {
    provider_name: string;
    domain_id: any;
    location_id: any;
    short_desc: string;
    long_desc: string;
    logo: string;
    provider_id: string;
    provider_url: string;
    category_ids: any;
    agents: any;
    items: any;
    input: any;
    fullfillments: any;
    provider_rating: number;
    payment_methods: any;
  };

  export type AddEnergyEntry = {
    phone: string,
    unit: number,
    start_date: DateTime,
    end_date: DateTime
  }