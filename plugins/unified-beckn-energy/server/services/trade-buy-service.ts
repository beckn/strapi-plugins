import { Strapi } from "@strapi/strapi";
import { ETradeStatus, ETradeType, ITrade, TRADE_EVENTS } from "../constant";
import gclService from "./gcl-service";

export default ({ strapi }: { strapi: Strapi }) => ({
  async createTrade(
    user, {
    quantity,
    unit,
    item_name,
    trusted_source,
    cred_required,
    recurring,
    userId,
    domain,
    price
  }: {
    quantity: number;
    unit: string;
    item_name: string;
    trusted_source: boolean;
    cred_required: boolean;
    recurring: boolean;
    userId: number;
    domain: string;
    price: number
  }) {
    try {
      if (quantity <= 0) {
        throw new Error("Trade Quantity must be greater than 0");
      }
      let newTrade: any = {};
      await strapi.db.transaction(async ({ trx }) => {
        try {
          const agent = user.agent;
          const agent_profile = user.agent.agent_profile;
          if (!agent || !agent_profile) {
            throw new Error("No Profile Found");
          }
          newTrade = await strapi.entityService.create("api::trade-bap.trade-bap", {
            data: {
              quantity,
              unit,
              item_name,
              trusted_source,
              cred_required,
              recurring,
              agent: agent.id,
              domain,
              status: ETradeStatus.RECEIVED,
              type: ETradeType.BUY,
              price,
              publishedAt: new Date()
            }
          });
          const newTradeEvent = await strapi.entityService.create(
            "api::trade-event-bap.trade-event-bap",
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
  async getTrade(tradeId: number | null, user: any) {
    try {    
      if (!user.agent || !user.agent.agent_profile.length) {
        throw new Error("No Profile Found");
      }
      let filterAndPopulate: any = {
        filters: {
          agent: user.agent.id
        },
        populate: {
          order: true
        },
        sort: { updatedAt: 'desc' }
      };
      if (tradeId) {
        filterAndPopulate = {
          filters: {
            agent: user.agent.id,
            id: tradeId
          },
          populate: {
            trade_events: true,
            order: true
          }
        };
      }
      const trades = await strapi.entityService.findMany("api::trade-bap.trade-bap", {
        ...filterAndPopulate
      });
      return tradeId ? (trades && trades.length ? trades[0] : []) : trades;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  
  async updateTradeEventAndStatus(order_id: string | number, on_status: any) {
    try {
      const trade = await strapi.entityService.findMany("api::trade-bap.trade-bap", {
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
        "api::trade-event-bap.trade-event-bap",
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
  async getPendingTrades(user: any) {
    try {
      const trades = await strapi.entityService.findMany("api::trade-bap.trade-bap", {
        filters: {
          status: ETradeStatus.RECEIVED,
          agent: user.agent.id
        },
        populate: {
          agent: {
            populate: {
              agent_profile: true
            }
          }
        }
      });
      return trades;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  async updateTradeById(user: any, tradeId: number, tradeDto: any) {
    try {
      const { agent } = user;
      const { unit, quantity, trusted_source, cred_required, recurring, price } = tradeDto;
      
      if (!agent || !agent.agent_profile) {
        throw new Error("No Profile Found");
      }
      let filterAndPopulate: any = {
        filters: {
          agent: user.agent.id
        }
      };
      if (tradeId) {
        filterAndPopulate = {
          filters: {
            agent: user.agent.id,
            id: tradeId
          },
          populate: {
            trade_events: true
          }
        };
      } else {
        throw new Error('No trade Id provided to update');
      }
      const trades = await strapi.entityService.findMany("api::trade-bap.trade-bap", {
        ...filterAndPopulate
      });
      if(trades && trades.length) {
        if(trades[0].status !== 'RECEIVED') {
          throw new Error('Trade cutoff time has passed, you cannot update it!');
        }
        const updateData = {
          ...(unit && { unit }),
          ...(quantity && { quantity }),
          trusted_source,
          cred_required,
          recurring,
          ...(price && { price }),
        };
        console.log('Update body: ', updateData);
        return {
          updatedTrade: await strapi.entityService.update("api::trade-bap.trade-bap", tradeId, {
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
