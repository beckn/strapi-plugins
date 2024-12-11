import { Strapi } from "@strapi/strapi";
import { ETradeStatus, ETradeType, ITrade, TRADE_EVENTS } from "../constant";
import gclService from "./gcl-service";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createTrade({
    quantity,
    unit,
    item_name,
    trusted_source,
    cred_required,
    recurring,
    userId,
    domain
  }: {
    quantity: number;
    unit: string;
    item_name: string;
    trusted_source: boolean;
    cred_required: boolean;
    recurring: boolean;
    userId: number;
    domain: string;
  }) {
    try {
      if (quantity <= 0) {
        throw new Error("Trade Quantity must be greater than 0");
      }
      let newTrade: any = {};
      await strapi.db.transaction(async ({ trx }) => {
        try {
          const profile = await strapi.entityService.findMany(
            "api::profile.profile",
            {
              filters: {
                user: userId
              }
            }
          );
          if (!profile || !profile.length) {
            throw new Error("No Profile Found");
          }

          newTrade = await strapi.entityService.create("api::trade.trade", {
            data: {
              quantity,
              unit,
              item_name,
              trusted_source,
              cred_required,
              recurring,
              profile: profile[0].id,
              domain,
              status: ETradeStatus.RECEIVED,
              type: ETradeType.BUY,
              publishedAt: new Date()
            }
          });
          const newTradeEvent = await strapi.entityService.create(
            "api::trade-event.trade-event",
            {
              data: {
                trade: newTrade.id,
                event_name: TRADE_EVENTS.buy_request.event_name,
                description: TRADE_EVENTS.buy_request.description,
                data: {},
                publishedAt: new Date()
              }
            }
          );
          trx.commit();
        } catch (error) {
          console.log(error);
          trx.rollback();
          throw new Error(error.message);
        }
        return newTrade;
      });
      return newTrade;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  async getTrade(tradeId: number | null, userId: number) {
    try {
      const profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: userId
          }
        }
      );
      if (!profile || !profile.length) {
        throw new Error("No Profile Found");
      }
      let filterAndPopulate: any = {
        filters: {
          profile: profile[0].id
        }
      };
      if (tradeId) {
        filterAndPopulate = {
          filters: {
            profile: profile[0].id,
            id: tradeId
          },
          populate: {
            trade_events: true
          }
        };
      }
      const trades = await strapi.entityService.findMany("api::trade.trade", {
        ...filterAndPopulate
      });
      return tradeId ? (trades && trades.length ? trades[0] : []) : trades;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  async startTrade() {
    try {
      const trades = await strapi.entityService.findMany("api::trade.trade", {
        filters: {
          status: ETradeStatus.RECEIVED
        },
        populate: {
          profile: {
            populate: {
              user: true
            }
          }
        }
      });
      if (!trades || !trades.length) {
        return { message: "No Trade Found", success: false, data: {} };
      }
      const credentialVcService = strapi
        .plugin("beckn-trade-bap")
        .service("credentialVcService");

      await Promise.all(
        trades.map(async (trade: ITrade) => {
          await strapi.db.transaction(async ({ trx }) => {
            try {
              const becknTradeInprogressStatus =
                await strapi.entityService.update(
                  "api::trade-event.trade-event",
                  trade.id,
                  {
                    data: {
                      status: ETradeStatus.IN_PROGRESS
                    }
                  }
                );

              // Search Catalog
              const becknSearchTradeEvent = await strapi.entityService.create(
                "api::trade-event.trade-event",
                {
                  data: {
                    trade: trade.id,
                    event_name: TRADE_EVENTS.beckn_search.event_name,
                    description: TRADE_EVENTS.beckn_search.description,
                    data: {},
                    publishedAt: new Date()
                  }
                }
              );
              const searchResp = await gclService.search(trade);
              const trasaction_id = searchResp.data[0].context.transaction_id;
              console.log(
                `\ntransaction_id for TradeId:${trade.id} ===>`,
                searchResp.data[0].context.transaction_id,
                "\n"
              );
              console.log(
                `\nTradeId:${trade.id} Search Resp===>`,
                JSON.stringify(searchResp),
                "\n"
              );
              const becknOnSearchTradeEvent = await strapi.entityService.create(
                "api::trade-event.trade-event",
                {
                  data: {
                    trade: trade.id,
                    event_name: TRADE_EVENTS.beckn_on_search.event_name,
                    description: TRADE_EVENTS.beckn_on_search.description,
                    data: searchResp,
                    publishedAt: new Date()
                  }
                }
              );

              if (!Object.keys(searchResp).length || !searchResp.data.length) {
                throw new Error("No Catalog Found");
              }
              let required_bpps: any[] = [];

              // Check trusted source for BPPs
              if (trade.trusted_source) {
                for (let i = 0; i < searchResp.data.length; i++) {
                  const requestBecknJson = await strapi.entityService.create(
                    "api::trade-event.trade-event",
                    {
                      data: {
                        trade: trade.id,
                        event_name: TRADE_EVENTS.request_beckn_json.event_name,
                        description:
                          TRADE_EVENTS.request_beckn_json.description,
                        data: searchResp,
                        publishedAt: new Date()
                      }
                    }
                  );
                  const bpp = searchResp.data[i];
                  const vc = await credentialVcService.getBecknJson(
                    bpp.context.bpp_uri
                  );
                  console.log(
                    `\n\nGot Beckn Json from `,
                    bpp.context.bpp_uri,
                    JSON.stringify(vc),
                    `Trade ID: ${trade.id}`
                  );
                  if (vc.success) {
                    const verifyVCResp =
                      await credentialVcService.verifyCertificate(vc.vc);
                    console.log("\nVerify VC Resp====>", verifyVCResp);
                    if (verifyVCResp.isVerified) {
                      required_bpps.push(bpp);
                      continue;
                    } else continue;
                  } else continue;
                }
              } else {
                required_bpps = JSON.parse(JSON.stringify(searchResp.data));
              }
              let required_providers: any[] = [];

              // Check Cred Required
              if (trade.cred_required) {
                console.log(
                  `\nNeed to Check and Verify Creds for Trade Id: ${trade.id}\n`
                );
                console.log(
                  `\nRequired Bpps:===>`,
                  JSON.stringify(required_bpps)
                );
                for (let i = 0; i < required_bpps.length; i++) {
                  const bpp = required_bpps[i];
                  for (let j = 0; j < bpp.message.providers.length; j++) {
                    try {
                      const provider = bpp.message.providers[j];

                      const becknCredBapEvent =
                        await strapi.entityService.create(
                          "api::trade-event.trade-event",
                          {
                            data: {
                              trade: trade.id,
                              event_name:
                                TRADE_EVENTS.beckn_cred_bap.event_name,
                              description:
                                TRADE_EVENTS.beckn_cred_bap.description,
                              data: provider,
                              publishedAt: new Date()
                            }
                          }
                        );

                      console.log(
                        `\nSending cred request for Trade Id: ${trade.id} to ${bpp.context.bpp_uri}\n`
                      );

                      const on_credResp = await gclService.cred(
                        bpp.context.bpp_id,
                        bpp.context.bpp_uri,
                        trasaction_id,
                        trade,
                        provider.id
                      );

                      console.log(
                        `\nTradeId:${trade.id} On Cred Resp===>`,
                        JSON.stringify(on_credResp),
                        "\n"
                      );

                      const becknOnCredBapEvent =
                        await strapi.entityService.create(
                          "api::trade-event.trade-event",
                          {
                            data: {
                              trade: trade.id,
                              event_name:
                                TRADE_EVENTS.beckn_on_cred_bap.event_name,
                              description:
                                TRADE_EVENTS.beckn_on_cred_bap.description,
                              data: { provider, on_credResp },
                              publishedAt: new Date()
                            }
                          }
                        );

                      console.log(
                        `\nVerifying cred for Trade Id: ${trade.id}\n`
                      );
                      const verifyVCResp =
                        await credentialVcService.verifyCertificate(
                          on_credResp.data[0].message.proofs.attachments[0]
                            .verifiableCredential
                        );
                      if (verifyVCResp.isVerified) {
                        required_providers.push({
                          context: bpp.context,
                          message: {
                            name: bpp?.message?.name || "BPP 1",
                            providers: [provider]
                          }
                        });
                        continue;
                      } else continue;
                    } catch (error) {
                      continue;
                    }
                  }
                }
              } else {
                required_providers = JSON.parse(JSON.stringify(required_bpps));
              }

              // Start Init Call

              const becknInitEvent = await strapi.entityService.create(
                "api::trade-event.trade-event",
                {
                  data: {
                    trade: trade.id,
                    event_name: TRADE_EVENTS.beckn_init.event_name,
                    description: TRADE_EVENTS.beckn_init.description,
                    data: { target_bpp: required_providers[0] },
                    publishedAt: new Date()
                  }
                }
              );
              if (!required_providers.length) {
                throw new Error("No Provider Matched");
              }
              console.log(
                `\nSending Init request for Trade Id: ${trade.id} to ${required_providers[0].context.bpp_uri}\n`
              );
              const on_init_resp = await gclService.init(
                required_providers[0].context.bpp_id,
                required_providers[0].context.bpp_uri,
                trasaction_id,
                trade,
                required_providers[0].message.providers[0]
              );

              console.log(
                `\nOn_Init response for Trade Id: ${trade.id} from ${
                  required_providers[0].context.bpp_uri
                } : ${JSON.stringify(on_init_resp)}\n`
              );

              const becknOnInitEvent = await strapi.entityService.create(
                "api::trade-event.trade-event",
                {
                  data: {
                    trade: trade.id,
                    event_name: TRADE_EVENTS.beckn_on_init.event_name,
                    description: TRADE_EVENTS.beckn_on_init.description,
                    data: {
                      provider: required_providers[0],
                      on_init: on_init_resp
                    },
                    publishedAt: new Date()
                  }
                }
              );

              // Start Confirm Call

              const becknConfirmEvent = await strapi.entityService.create(
                "api::trade-event.trade-event",
                {
                  data: {
                    trade: trade.id,
                    event_name: TRADE_EVENTS.beckn_confirm.event_name,
                    description: TRADE_EVENTS.beckn_confirm.description,
                    data: { target_bpp: required_providers[0] },
                    publishedAt: new Date()
                  }
                }
              );

              const on_confirm_resp = await gclService.confirm(
                required_providers[0].context.bpp_id,
                required_providers[0].context.bpp_uri,
                trasaction_id,
                trade,
                required_providers[0].message.providers[0],
                on_init_resp.data[0].message
              );

              console.log(
                `\nOn_Confirm response for Trade Id: ${trade.id} from ${
                  required_providers[0].context.bpp_uri
                } : ${JSON.stringify(on_confirm_resp)}\n`
              );

              const becknOnConfirmEvent = await strapi.entityService.create(
                "api::trade-event.trade-event",
                {
                  data: {
                    trade: trade.id,
                    event_name: TRADE_EVENTS.beckn_on_confirm.event_name,
                    description: TRADE_EVENTS.beckn_on_confirm.description,
                    data: {
                      provider: required_providers[0],
                      on_confirm: on_confirm_resp
                    },
                    publishedAt: new Date()
                  }
                }
              );

              // Call BAP-Orders API for creating order
              const orderService: any = strapi.service("api::order.order");
              const modified_on_confirm_message = {
                order: {
                  ...on_confirm_resp.data[0].message,
                  id: on_confirm_resp.data[0].message.orderId
                }
              };
              const createOrderPayload = orderService.buildData({
                context: on_confirm_resp.data[0].context,
                message: modified_on_confirm_message,
                user: trade.profile.user.id
              });
              const createOrder = await strapi.entityService.create(
                "api::order.order",
                {
                  data: { ...createOrderPayload, publishedAt: new Date() }
                }
              );
              const updateTrade = await strapi.entityService.update(
                "api::trade.trade",
                trade.id,
                {
                  data: {
                    status: ETradeStatus.SUCCESS,
                    order: createOrder.id
                  }
                }
              );
              console.log(
                `\nUpdate trade for Trade Id: ${trade.id} with ORDER_ID : ${
                  createOrder.id
                } from ${
                  required_providers[0].context.bpp_uri
                } : ${JSON.stringify(on_confirm_resp)}\n`
              );

              trx.commit();
            } catch (error: any) {
              console.log(
                `Error in Start Transaction for TradeId : ${trade.id}==>\n`,
                error
              );
              trx.rollback();
              const updateTrade = await strapi.entityService.update(
                "api::trade.trade",
                trade.id,
                {
                  data: {
                    status: ETradeStatus.FAILED
                  }
                }
              );
              throw new Error(error.message);
            }
          });
        })
      );

      return { message: "Trade Found", success: true, data: { trades } };
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  async updateTradeEventAndStatus(order_id: string | number, on_status: any) {
    try {
      const trade = await strapi.entityService.findMany("api::trade.trade", {
        filters: {
          order: order_id
        }
      });
      if (!trade || !trade.length) {
        throw new Error(`No Trade Found with order Id ${order_id}`);
      }
      console.log(
        `\nOn_Status response for Trade Id: ${trade[0].id} from ${
          on_status.context.bpp_uri
        } : ${JSON.stringify(on_status)}\n`
      );
      const becknOnStatusEvent = await strapi.entityService.create(
        "api::trade-event.trade-event",
        {
          data: {
            trade: trade[0].id,
            event_name: TRADE_EVENTS.beckn_on_status.event_name,
            description:
              on_status?.message?.order?.fulfillments?.[0]?.state?.descriptor
                ?.short_desc ?? TRADE_EVENTS.beckn_on_status.description,
            data: {
              on_status: on_status
            },
            publishedAt: new Date()
          }
        }
      );
      return becknOnStatusEvent || {};
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  async getPendingTrades() {
    try {
      const trades = await strapi.entityService.findMany("api::trade.trade", {
        filters: {
          status: ETradeStatus.RECEIVED
        },
        populate: {
          profile: true
        }
      });
      return trades;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  async updateTradeById(userId: number, tradeId: number, tradeDto: any) {
    try {
      const { unit, quantity, trusted_source, cred_required, recurring } = tradeDto;
      const profile = await strapi.entityService.findMany(
        "api::profile.profile",
        {
          filters: {
            user: userId
          }
        }
      );
      if (!profile || !profile.length) {
        throw new Error("No Profile Found");
      }
      let filterAndPopulate: any = {
        filters: {
          profile: profile[0].id
        }
      };
      if (tradeId) {
        filterAndPopulate = {
          filters: {
            profile: profile[0].id,
            id: tradeId
          },
          populate: {
            trade_events: true
          }
        };
      } else {
        throw new Error('No trade Id provided to update');
      }
      const trades = await strapi.entityService.findMany("api::trade.trade", {
        ...filterAndPopulate
      });
      if(trades && trades.length) {
        if(trades[0].status !== 'RECEIVED') {
          throw new Error('Trade cutoff time has passed, you cannot update it!');
        }
        const updateData = {
          ...(unit && { unit }),
          ...(quantity && { quantity }),
          ...(trusted_source && { trusted_source }),
          ...(cred_required && { cred_required }),
          ...(recurring && { recurring }),
        };
        console.log('Update body: ', updateData);
        return {
          updatedTrade: await strapi.entityService.update("api::trade.trade", tradeId, {
            data: updateData
          })
        }
      }
      throw new Error('Trade does not exist or not linked to your profile');
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
});
