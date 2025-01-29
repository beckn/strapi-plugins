import { Strapi } from "@strapi/strapi";
const fs = require("fs").promises;
import axios from "axios";
const bcrypt = require('bcryptjs');

type AddTradeDto = {
  quantity: number;
  unit: string;
  item_name: string;
  trusted_source: boolean;
  cred_required: boolean;
  recurring: boolean;
  price: number;
};

export default ({ strapi }: { strapi: Strapi }) => ({
    async addTradeRequest(tradeDto: AddTradeDto, { providerId, userId }) {
        try {
          if (!providerId) {
            throw new Error("Provider not found to add trade");
          }
          const provider = await strapi.entityService.findOne(
            "api::provider.provider",
            providerId,
            {
              populate: ["items", "items.sc_retail_product"]
            }
          );
          if (!provider) {
            throw new Error("Provider not found");
          }
          console.log("provider::", provider);
          console.log(
            "provider.items.sc_retail_product.sku::",
            JSON.stringify(provider.items[0])
          );
    
          if (provider.items.length > 0) {
            let id = provider.items[0].sc_retail_product.id;
            const {
              quantity,
              unit,
              item_name,
              price,
              trusted_source = false,
              cred_required = false,
              recurring = false
            } = tradeDto;
            if(quantity < 0) {
                throw new Error('Quantity must be greater than 0');
            }
            const updateScProduct = await strapi.entityService.update(
              "api::sc-product.sc-product",
              id,
              {
                data: {
                  stock_quantity:
                    Number(provider.items[0].sc_retail_product.stock_quantity) +
                    Number(quantity),
                  min_price: price.toString(),
                  quantity_unit: unit,
                  trusted_source,
                  cred_required,
                  recurring,
                  publishedAt: new Date()
                }
              }
            );
            if (provider.items[0].name !== item_name) {
              //update item name
              const updatedItem = await strapi.entityService.update(
                "api::item.item",
                id,
                {
                  data: {
                    name: item_name,
                    publishedAt: new Date()
                  }
                }
              );
            }
            return { "sc-product": updateScProduct, provider };
          }
        } catch (error) {
          throw new Error(`Unable to add trade data', ${error}`);
        }
      },
      async getTrade({ tradeId, agentId }) {
        try {
          let trades = await strapi.entityService.findMany("api::trade.trade", {
            filters: {
              ...(tradeId && {
                id: tradeId
              }),
              agent: {
                id: agentId
              }
            },
            populate: {
              trade_events: true
            },
            sort: { updatedAt: 'desc' }
          });
          console.log("Trade:, ", trades);
    
          if (!trades || !trades.length) {
            console.log('No trades found for this user');
            if (tradeId) {
              throw new Error('No trade details found for this trade id');
            }
            return [];
          }
          const updatedTrades = trades.map(trade => ({
            ...trade,
            status: 'SUCCESS'
          }));
          return tradeId ? (updatedTrades && updatedTrades.length ? updatedTrades[0] : []) : updatedTrades;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      async addTradeLog({ transactionId, event_name, description, data = {} }) {
        try {
          if (!transactionId) {
            throw new Error("Transaction id not provided to add trade logs");
          }
          //fetch trade details by transactionId
          const trade = await strapi.entityService.findMany("api::trade.trade", {
            filters: {
              transaction_id: transactionId
            }
          });
    
          if (!trade || !trade.length) {
            throw new Error("Trade not found");
          }
          const tradeId = trade[0].id;
          const tradeEvent = await strapi.entityService.create(
            "api::trade-event.trade-event",
            {
              data: {
                event_name,
                description,
                data,
                trade: tradeId,
                publishedAt: new Date()
              }
            }
          );
          return tradeEvent;
        } catch (error) {
          throw new Error(error.message);
        }
      },
      async getTradePreference(user) {
        try {
          const provider = user?.agent?.provider_id;
          if(!provider) {
            throw new Error('No Provider found');
          }
          const providerId = provider.id;
          const providerData = await strapi.entityService.findOne(
            "api::provider.provider",
            providerId,
            {
              populate: ["items", "items.sc_retail_product"]
            }
          );
          if(providerData.items.length > 0) {
            const prefData = providerData.items[0].sc_retail_product;
            if(!prefData) {
              throw new Error('No preference found');
            }
            return {
              prefId: prefData.id,
              price: prefData.min_price,
              quantity: prefData.stock_quantity,
              unit: prefData.quantity_unit,
              trusted_source: prefData.trusted_source,
              cred_required: prefData.cred_required,
              recurring: prefData.recurring
            } 
          }
          throw new Error('No preference found');
        } catch(error) {
          console.log('Get Trade Pref Error: ', error.message);
          throw new Error(error.message);
        }
      },
      async updateTradePreference({ quantity, price, unit, trusted_source, cred_required, recurring }, user) {
        try {
          const provider = user?.agent?.provider_id;
          if(!provider) {
            throw new Error('No Provider found');
          }
          const providerId = provider.id;
          const providerData = await strapi.entityService.findOne(
            "api::provider.provider",
            providerId,
            {
              populate: ["items", "items.sc_retail_product"]
            }
          );
          if(providerData.items.length > 0) {
            const prefData = providerData.items[0].sc_retail_product;
            if(!prefData) {
              throw new Error('No preference found');
            }
            const updatedTradePreference = await strapi.entityService.update(
              "api::sc-product.sc-product", 
              prefData.id,
              {
                data: {
                  ...(quantity && { stock_quantity: Number(quantity) }),
                  ...(price && { min_price: price.toString() }),
                  ...(unit && { quantity_unit: unit }),
                  trusted_source,
                  cred_required,
                  recurring,
                  publishedAt: new Date()
                }
              }
            )
            return {
              prefId: updatedTradePreference.id,
              price: updatedTradePreference.min_price,
              quantity: updatedTradePreference.stock_quantity,
              unit: updatedTradePreference.quantity_unit,
              trusted_source: updatedTradePreference.trusted_source,
              cred_required: updatedTradePreference.cred_required,
              recurring: updatedTradePreference.recurring
            } 
          }
          throw new Error('No preference found');
        } catch(error) {
          console.log('Update Trade Pref Error: ', error.message);
          throw new Error(error.message);
        }
      },
});
