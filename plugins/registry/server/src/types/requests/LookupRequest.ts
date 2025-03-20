import { Location } from "../Location";

export type LookupRequest = {
    subscriber_id: string;
    url: string;
    type: "BAP" | "BPP" | "BG"; // Assuming only BAP or BPP
    domain: string;
    location: Location
    key_id: string;
    signing_public_key: string;
    encr_public_key: string;
    valid_from: string; // ISO date string
    valid_until: string; // ISO date string
    status: "INITIATED" | "UNDER_SUBSCRIPTION" | "SUBSCRIBED" | "EXPIRED" | "UNSUBSCRIBED" | "INVALID_SSL";
    created: string; // ISO date string
    updated: string; // ISO date string
};
