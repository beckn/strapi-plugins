import { KeyValuePair } from "../types";
import { isEnergy } from "./domain.util";
import { TradeUtil } from "./trade.util";

export class InitUtil {
  static createTrade = async (
    context: KeyValuePair,
    order: KeyValuePair,
    provider: KeyValuePair
  ) => {
    if (isEnergy(context)) {
      console.log('abhi', order);
      for (const item of provider.items) {
        const selectedItem = order.items.filter((i) => i.id == item.id)[0] || {};
        const scRetailProduct = item.sc_retail_product || {};
        const tradeData = {
          quantity: selectedItem?.quantity?.selected?.count || 0,
          unit: scRetailProduct.quantity_unit,
          item_name: item.name,
          trusted_source: scRetailProduct.trusted_source,
          cred_required: scRetailProduct.cred_required,
          recurring: scRetailProduct.recurring,
          agent: provider.agents[0].id,
          transaction_id: context.transaction_id,
          publishedAt: new Date().toISOString()
        };
        await strapi.entityService.create(
          "api::trade.trade",
          { data: tradeData }
        );
        await TradeUtil.addTradeLog({
          transactionId: context.transaction_id,
          event_name: 'beckn_init',
          description: 'Received purchase order',
          data: tradeData
        });
      }
    }
  };
}
