import axios from "axios";
import { domain, ITrade } from "../constant";

const search = async (trade: ITrade) => {
  try {
    const payload = {
      context: {
        domain: domain.UEI_P2P_TRADING
      },
      location: "12.423423,77.325647",
      quantity: {
        available: {
          measure: {
            value: `${trade.quantity}`,
            unit: trade.unit
          }
        }
      },
      fulfulfillment: {
        stops: [
          {
            time: {
              range: {
                start: "2024-10-04T10:00:00",
                end: "2024-10-04T18:00:00"
              }
            }
          }
        ]
      }
    };
    console.log(
      `\nSearch Payload For Trade ID:${trade.id} ====>`,
      JSON.stringify(payload),
      "\n"
    );
    const resp = await axios.post(`${process.env.GCL_URL}/search`, payload);
    return resp.data;
  } catch (error: any) {
    console.log(error.response.data.error);
    throw new Error(error.message);
  }
};

const cred = async (
  bpp_id: string,
  bpp_uri: string,
  transaction_id: string,
  trade: ITrade,
  providerId: string
) => {
  try {
    const payload = {
      context: {
        domain: domain.UEI_P2P_TRADING,
        bpp_id,
        bpp_uri,
        transaction_id
      },
      message: {
        asset: {
          type: "provider", // change as per dynamic value
          id: providerId // change as per dynamic value
        },
        requested_proofs: [
          {
            descriptor: {
              name: "some name",
              code: "some code",
              short_desc: "some short desc"
            }
          }
        ]
      }
    };
    console.log(
      `\nCred Payload For Trade ID:${trade.id} ====>`,
      JSON.stringify(payload),
      "\n"
    );
    const resp = await axios.post(`${process.env.GCL_URL}/cred`, payload);
    return resp.data;
  } catch (error: any) {
    console.log("Error in Calling Cred ===>", error);
    throw new Error(error.message);
  }
};
const init = async (
  bpp_id: string,
  bpp_uri: string,
  transaction_id: string,
  trade: ITrade,
  provider: any
) => {
  try {
    const payload = {
      data: [
        {
          context: {
            domain: domain.UEI_P2P_TRADING,
            bpp_id,
            bpp_uri,
            transaction_id
          },
          message: {
            orders: [
              {
                provider: {
                  id: provider.id
                },
                items: [
                  {
                    id: provider.items[0].id,
                    quantity: {
                      selected: {
                        count: trade.quantity
                      }
                    }
                  }
                ],
                fulfillments: provider.items[0].fulfillments,

                billing: {
                  phone: trade.profile.phone,
                  name: trade.profile.name,
                  email: trade.profile.user.email
                }
              }
            ]
          }
        }
      ]
    };
    console.log(
      `\nInit Payload For Trade ID:${trade.id} ====>`,
      JSON.stringify(payload),
      "\n"
    );
    const resp = await axios.post(`${process.env.GCL_URL}/init`, payload);
    return resp.data;
  } catch (error: any) {
    console.log(error.response.data.error);
    throw new Error(error.message);
  }
};

const confirm = async (
  bpp_id: string,
  bpp_uri: string,
  transaction_id: string,
  trade: ITrade,
  provider: any,
  on_init_message: any
) => {
  try {
    const payload = {
      data: [
        {
          context: {
            domain: domain.UEI_P2P_TRADING,
            bpp_id,
            bpp_uri,
            transaction_id
          },
          message: {
            orders: [
              {
                provider: {
                  id: provider.id
                },
                items: [
                  {
                    id: provider.items[0].id,
                    quantity: {
                      selected: {
                        count: trade.quantity
                      }
                    }
                  }
                ],
                fulfillments: provider.items[0].fulfillments,
                billing: {
                  phone: trade.profile.phone,
                  name: trade.profile.name,
                  email: trade.profile.user.email
                },
                payments: [
                  {
                    id: `payment-id-${transaction_id}`,
                    collected_by: "BPP",
                    params: {
                      amount: `${
                        Number(on_init_message.order.quote.price.value) *
                        trade.quantity
                      }`,
                      currency:
                        on_init_message?.order?.quote?.price?.currency ?? "INR",
                      bank_account_number: "1234002341",
                      bank_code: "INB0004321",
                      bank_account_name: provider?.name
                    },
                    status: "PAID",
                    type: "PRE-ORDER"
                  }
                ]
              }
            ]
          }
        }
      ]
    };
    console.log(
      `\nConfirm Payload For Trade ID:${trade.id} ====>`,
      JSON.stringify(payload),
      "\n"
    );
    const resp = await axios.post(`${process.env.GCL_URL}/confirm`, payload);
    return resp.data;
  } catch (error: any) {
    console.log(error.response.data.error);
    throw new Error(error.message);
  }
};

export default { search, cred, init, confirm };
