export const DHIWAY_BECKN_TRADE_BAP_CONSUMER_SCHEMA =
  "schema:cord:s32RFVbQcksXQ1ctPDp6ixTBgdx3WWFwFLAkYBPk1qUMY4apr";

export const DHIWAY_BECKN_TRADE_BAP_DER_SCHEMA =
  "schema:cord:s32WKVYVDsmnDZoXihnMQLM5stuRNwzs5xHH3vpigQ8TfuBAg";

export enum ETradeStatus {
  RECEIVED = "RECEIVED",
  IN_PROGRESS = "IN PROGRESS",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}

export enum ETradeType {
  BUY = "BUY",
  SELL = "SELL"
}

export const TRADE_EVENTS = {
  buy_request: {
    event_name: "buy_request",
    description: "Buy request received"
  },
  beckn_search: {
    event_name: "beckn_search",
    description: "Searching for energy"
  },
  beckn_on_search: {
    event_name: "beckn_on_search",
    description: "Energy Catalogue found"
  },
  request_beckn_json: {
    event_name: "verify_beckn_json",
    description: "Requesting BPP Platform Trusted Source Certificate"
  },
  beckn_cred_bap: {
    event_name: "beckn_cred_bap",
    description: "Requested for Green warrier certificate"
  },
  beckn_on_cred_bap: {
    event_name: "beckn_on_cred_bap",
    description: "Received credential from BAP"
  },
  verifying_cred: {
    event_name: "verifying_cred",
    description: "Credential Verification successful"
  },
  beckn_init: {
    event_name: "beckn_init",
    description: "Purchase Order sent"
  },
  beckn_cred_bpp: {
    event_name: "beckn_cred_bpp",
    description: "Address proof & Ownership cert request received"
  },
  beckn_on_cred_bpp: {
    event_name: "beckn_on_cred_bpp",
    description: "Certificate shared"
  },
  beckn_on_init: {
    event_name: "beckn_on_init",
    description: "Received Draft Order"
  },
  beckn_confirm: {
    event_name: "beckn_confirm",
    description: "Order confirmation sent"
  },
  beckn_on_confirm: {
    event_name: "beckn_on_confirm",
    description: "Received Order Confirmation"
  },
  beckn_on_status: {
    event_name: "beckn_on_status",
    description: "Energy transmission started"
  },
  trade_cancelled: {
    event_name: "trade_cancelled",
    description: "Trade is cancelled"
  }
};

export const domain = {
  UEI_P2P_TRADING: "uei:p2p_trading"
};

export interface ITrade {
  id: number;
  unit: string;
  item_name: string;
  trusted_source: boolean;
  cred_required: boolean;
  recurring: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  domain: string;
  status: string;
  type: string;
  quantity: number;
  profile: any;
}

export const walletTxnType = {
  ADD: 'ADD_FUND',
  WITHDRAW: 'WITHDRAW_FUND',
  SELLORDER: 'SELLORDER',
  BUYORDER: 'BUYORDER'
}
