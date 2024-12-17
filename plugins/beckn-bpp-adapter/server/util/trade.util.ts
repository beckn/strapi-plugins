export class TradeUtil {
  static addTradeLog = async ({ transactionId, event_name, description, data }) => {
    try {
      if (!transactionId) {
        throw new Error('Transaction id not provided to add trade logs');
      }
      //fetch trade details by transactionId
      const trade = await strapi.entityService.findMany
        (
          "api::trade.trade",
          {
            populate: {
              trade_events: {}
            },
            filters: {
              transaction_id: transactionId
            },
          }
        );

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
          },
        }
      );
      const eventIds = trade[0].trade_events.map((event) => event.id);
      eventIds.push(tradeEvent.id);
      await strapi.entityService.update(
        "api::trade.trade",
        tradeId,
        {
          data: {
            trade_events: eventIds,
            price: data.price
          }
        }
      );
      return tradeEvent;
    } catch (error) {
      console.log('Error while adding trade event', error?.message);
    }
  }
}
