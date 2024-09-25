import moment from "moment";
import { KeyValuePair } from "../types";
import { CHECK_IN, CHECK_OUT, START, END } from "../constants";
import { isHospitality, isMobility, isTourism, isEnergy } from "./domain.util";
import { isInRange, findStoresAlongRouteWithinDistance } from "./location.util";

export class SearchUtil {
  static filterByFulfillment = (
    providers: KeyValuePair[],
    fulfillment: KeyValuePair,
    context: KeyValuePair
  ): KeyValuePair[] => {
    let filteredProviders: KeyValuePair[] = providers;
    if (isHospitality(context)) {
      let checkInReq: KeyValuePair | null = null;
      let checkOutReq: KeyValuePair | null = null;
      fulfillment?.stops.map((fulfillmentStop: KeyValuePair) => {
        if (fulfillmentStop?.type?.toLowerCase() === CHECK_IN) {
          checkInReq = fulfillmentStop;
        } else if (fulfillmentStop?.type?.toLowerCase() === CHECK_OUT) {
          checkOutReq = fulfillmentStop;
        }
      });
      if (checkInReq && checkOutReq) {
        filteredProviders = providers.filter((providerItem: KeyValuePair) => {
          providerItem.items = providerItem.items.filter(
            (item: KeyValuePair) => {
              let checkInItem: any = null;
              let checkOutItem: any = null;
              item?.item_fulfillment_ids?.forEach(
                (fulfillment: KeyValuePair) => {
                  if (
                    fulfillment?.fulfilment_id?.type?.toLowerCase() === CHECK_IN
                  ) {
                    checkInItem = fulfillment;
                  } else if (
                    fulfillment?.fulfilment_id?.type?.toLowerCase() ===
                    CHECK_OUT
                  ) {
                    checkOutItem = fulfillment;
                  }
                }
              );
              const checkInGps = checkInReq?.location?.gps.split(",") || [];
              const itemGps = checkInItem?.location_id?.gps.split(",") || [];
              const checkInLat = checkInGps[0];
              const checkInLong = checkInGps[1];
              const itemLat = itemGps[0];
              const itemLong = itemGps[1];
              console.log(
                checkInReq?.time?.timestamp,
                checkOutReq?.time?.timestamp,
                checkInItem?.timestamp,
                checkOutItem?.timestamp,
                JSON.stringify(item)
              );
              console.log(
                !checkInItem?.timestamp,
                !checkOutItem?.timestamp,
                !moment(checkInReq?.time?.timestamp).isBetween(
                  checkInItem?.timestamp,
                  checkOutItem?.timestamp
                ),
                !moment(checkOutReq?.time?.timestamp).isBetween(
                  checkInItem?.timestamp,
                  checkOutItem?.timestamp
                ),
                checkInGps.length,
                itemGps.length,
                !isInRange(checkInLat, checkInLong, itemLat, itemLong)
              );
              if (
                !checkInItem?.timestamp ||
                !checkOutItem?.timestamp ||
                !moment(checkInReq?.time?.timestamp).isBetween(
                  checkInItem?.timestamp,
                  checkOutItem?.timestamp
                ) ||
                !moment(checkOutReq?.time?.timestamp).isBetween(
                  checkInItem?.timestamp,
                  checkOutItem?.timestamp
                ) ||
                (checkInGps.length &&
                  itemGps.length &&
                  !isInRange(checkInLat, checkInLong, itemLat, itemLong))
              ) {
                return false;
              }
              return true;
            }
          );
          return providerItem.items.length > 0;
        });
      } else {
        filteredProviders = [];
      }
    } else if (isTourism(context)) {
      let checkInReq: KeyValuePair | null = null;
      fulfillment?.stops.map((fulfillmentStop: KeyValuePair) => {
        if (fulfillmentStop?.type?.toLowerCase() === CHECK_IN) {
          checkInReq = fulfillmentStop;
        }
      });
      if (checkInReq) {
        filteredProviders = providers.filter((providerItem: KeyValuePair) => {
          providerItem.items = providerItem.items.filter(
            (item: KeyValuePair) => {
              let checkInItem: any = null;
              item?.item_fulfillment_ids?.forEach(
                (fulfillment: KeyValuePair) => {
                  if (
                    fulfillment?.fulfilment_id?.type?.toLowerCase() === CHECK_IN
                  ) {
                    checkInItem = fulfillment;
                  }
                }
              );
              const checkInGps = checkInReq?.location?.gps.split(",") || [];
              const itemGps = checkInItem?.location_id?.gps.split(",") || [];
              const checkInLat = checkInGps[0];
              const checkInLong = checkInGps[1];
              const itemLat = itemGps[0];
              const itemLong = itemGps[1];
              console.log(
                moment(checkInReq?.time?.timestamp).format("YYYY-MM-DD"),
                moment(checkInItem?.timestamp).format("YYYY-MM-DD"),
                checkInGps.length &&
                itemGps.length &&
                !isInRange(checkInLat, checkInLong, itemLat, itemLong)
              );
              if (
                moment(checkInReq?.time?.timestamp).format("YYYY-MM-DD") !==
                moment(checkInItem?.timestamp).format("YYYY-MM-DD") ||
                (checkInGps.length &&
                  itemGps.length &&
                  !isInRange(checkInLat, checkInLong, itemLat, itemLong))
              ) {
                return false;
              }
              return true;
            }
          );
          return providerItem.items.length > 0;
        });
      } else {
        filteredProviders = [];
      }
    } else if (isMobility(context)) {
      let customerLocation: KeyValuePair | null = null;
      fulfillment?.stops.map((fulfillmentStop: KeyValuePair) => {
        if (fulfillmentStop?.type?.toLowerCase() === START) {
          customerLocation = fulfillmentStop;
        }
      });
      if (customerLocation) {
        const customerGps =
          (customerLocation as KeyValuePair).location?.gps.split(",") || [];
        const customerLat = customerGps[0].trim();
        const customerLong = customerGps[1].trim();
        filteredProviders = providers.filter((providerItem: KeyValuePair) => {
          providerItem.items = providerItem.items.filter(
            (item: KeyValuePair) => {
              item.item_fulfillment_ids = item?.item_fulfillment_ids.filter(
                (item_fulfillment_id: KeyValuePair) => {
                  const { service } = item_fulfillment_id.fulfilment_id;
                  const itemGps = service?.location_id?.gps.split(",") || [];
                  const itemLat = itemGps[0]?.trim();
                  const itemLong = itemGps[1]?.trim();
                  console.log(
                    item_fulfillment_id.fulfilment_id.service
                      .service_availabilities
                  );
                  console.log(
                    "Driver search:: ",
                    customerGps.length,
                    itemGps.length,
                    isInRange(customerLat, customerLong, itemLat, itemLong)
                  );
                  if (
                    customerGps.length &&
                    itemGps.length &&
                    isInRange(customerLat, customerLong, itemLat, itemLong) &&
                    service.service_availabilities?.[0]?.is_available
                  ) {
                    return true;
                  }
                  return false;
                }
              );
              return item.item_fulfillment_ids.length > 0;
            }
          );
          return providerItem.items.length > 0;
        });
      } else {
        filteredProviders = [];
      }
    } else if (isEnergy(context)) {
      const timeRange = fulfillment?.stops[0]?.time.range || {};
      const startReq = timeRange.start;
      const endReq = timeRange.end;
      if (startReq && endReq) {
        filteredProviders = providers.filter((providerItem: KeyValuePair) => {
          providerItem.items = providerItem.items.filter(
            (item: KeyValuePair) => {
              let startItem: any = null;
              let endItem: any = null;
              item?.item_fulfillment_ids?.forEach(
                (fulfillment: KeyValuePair) => {
                  if (
                    fulfillment?.fulfilment_id?.type?.toLowerCase() === START
                  ) {
                    startItem = fulfillment;
                  } else if (
                    fulfillment?.fulfilment_id?.type?.toLowerCase() ===
                    END
                  ) {
                    endItem = fulfillment;
                  }
                }
              );
              console.log({
                startReq,
                endReq,
                startItem,
                endItem
              });
              console.log(
                !startItem,
                !endItem,
                !moment(startReq).isBetween(
                  startItem?.timestamp,
                  endItem?.timestamp
                ),
                !moment(endReq).isBetween(
                  startItem?.timestamp,
                  endItem?.timestamp
                )
              );
              if (
                !startItem ||
                !endItem ||
                !moment(startReq).isBetween(
                  startItem?.timestamp,
                  endItem?.timestamp
                ) ||
                !moment(endReq).isBetween(
                  startItem?.timestamp,
                  endItem?.timestamp
                )
              ) {
                return false;
              }
              return true;
            }
          );
          return providerItem.items.length > 0;
        });
      } else {
        filteredProviders = [];
      }
    } else {
      const stop =
        fulfillment?.stops?.find((stop: KeyValuePair) => stop?.location?.gps) ||
        {};
      const { polygon, gps } = stop.location || {};
      if (gps && !polygon) {
        filteredProviders = providers.filter((providerItem: KeyValuePair) => {
          providerItem.items = providerItem.items.filter(
            (item: KeyValuePair) => {
              let isMatched: boolean = false;
              item?.item_fulfillment_ids?.forEach(
                (fulfillment: KeyValuePair) => {
                  const checkInGps = gps.split(",") || [];
                  const itemGps =
                    fulfillment?.location_id?.gps.split(",") || [];
                  const checkInLat = checkInGps[0];
                  const checkInLong = checkInGps[1];
                  const itemLat = itemGps[0];
                  const itemLong = itemGps[1];
                  console.log(
                    checkInGps.length,
                    itemGps.length,
                    isInRange(checkInLat, checkInLong, itemLat, itemLong),
                    JSON.stringify(item)
                  );
                  if (
                    checkInGps.length &&
                    itemGps.length &&
                    isInRange(checkInLat, checkInLong, itemLat, itemLong)
                  ) {
                    isMatched = true;
                  }
                }
              );
              return isMatched;
            }
          );
          return providerItem.items.length > 0;
        });
      } else {
        filteredProviders = [];
      }
    }
    const stop =
      fulfillment?.stops?.find(
        (stop: KeyValuePair) => stop?.location?.polygon
      ) || {};
    const { polygon, circle } = stop.location || {};
    if (polygon) {
      // Polygon based search
      const stores = this.filterItemsWithLocation(providers);
      const gps = circle?.gps.split(",") || [];
      const location = gps.length
        ? { latitude: gps[0], longitude: gps[1] }
        : undefined;
      const fliteredStores = findStoresAlongRouteWithinDistance(
        polygon,
        stores,
        location,
        circle?.radius?.value
      );
      const itemIds =
        fliteredStores.map(
          (fliteredStore: KeyValuePair) => fliteredStore.item_id
        ) || [];
      console.log("Filter Item IDs", itemIds);
      filteredProviders = providers.filter((providerItem: KeyValuePair) => {
        providerItem.items = providerItem.items.filter((item: KeyValuePair) => {
          return itemIds.includes(item.id);
        });
        return providerItem.items.length > 0;
      });
    }
    return filteredProviders;
  };

  private static filterItemsWithLocation = (providers: KeyValuePair[]) => {
    const stores: KeyValuePair[] = [];
    providers.forEach((provider: KeyValuePair) => {
      provider.items?.forEach((item: KeyValuePair) => {
        item.item_fulfillment_ids.forEach(
          (item_fulfillment_id: KeyValuePair) => {
            const gps = item_fulfillment_id.location_id?.gps?.split(",") || [];
            if (gps.length) {
              stores.push({
                item_id: item.id,
                lat: gps[0],
                lng: gps[1]
              });
            }
          }
        );
      });
    });
    return stores;
  };
}
