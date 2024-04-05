import moment from "moment";
import { KeyValuePair } from "../types";
import { CHECK_IN, CHECK_OUT } from "../constants";
import { isHospitality, isTourism } from "./domain";
import { isInRange } from "./location";

export class FilterUtil {
    static getItemFilter = (item: KeyValuePair = {}) => {
        const filter: KeyValuePair = {
            id: "",
            name: "",
            code: ""
        };
        filter.$or = [];
        filter.code = item.descriptor?.code;
        filter.id = item?.id;
        if (item?.descriptor?.name) {
            filter.$or.push({
                name: {
                    $contains: item.descriptor?.name
                }
            });
        }

        if (item?.descriptor?.name || item?.descriptor?.short_desc) {
            filter.$or.push({
                short_desc: {
                    $contains: item.descriptor?.name || item.descriptor?.short_desc
                }
            });
        }
        if (item?.descriptor?.name || item?.descriptor?.long_desc) {
            filter.$or.push({
                long_desc: {
                    $contains: item.descriptor?.name || item.descriptor?.long_desc
                }
            });
        }

        return filter;
    };

    static getProviderFilter = (provider: KeyValuePair = {}) => {
        const filter: KeyValuePair = {
            id: "",
            provider_name: ""
        };
        filter.id = provider.id;
        filter.provider_name = {
            $contains: provider.descriptor?.name
        };
        return filter;
    };

    static getCategoryFilter = (category: KeyValuePair = {}) => {
        const filter: KeyValuePair = {
            id: "",
            value: "",
            category_code: ""
        };
        filter.id = category.id;
        filter.value = {
            $contains: category.descriptor?.name
        };
        filter.category_code = category.descriptor?.code;
        return filter;
    };

    static getItemsFilter = (items) => {
        return items.map((obj: { id: string }) => obj.id);
    };

    static filterByFulfillment = (
        providers: KeyValuePair[],
        fulfillment: KeyValuePair,
        context: KeyValuePair
    ) => {
        // TODO: Optimisation required, move common code to util - Abhishek Y

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
                providers.map((providerItem: KeyValuePair, providerIndex: number) => {
                    providerItem.items.map((item: KeyValuePair, itemIndex: number) => {
                        let checkInItem: any = null;
                        let checkOutItem: any = null;
                        item?.item_fulfillment_ids?.map((fulfillment: KeyValuePair) => {
                            if (fulfillment?.fulfilment_id?.type?.toLowerCase() === CHECK_IN) {
                                checkInItem = fulfillment;
                            } else if (fulfillment?.fulfilment_id?.type?.toLowerCase() === CHECK_OUT) {
                                checkOutItem = fulfillment;
                            }
                        });
                        const checkInGps = checkInReq?.location?.gps.split(',') || [];
                        const itemGps = checkInItem?.location_id?.gps.split(',') || [];
                        const checkInLat = checkInGps[0];
                        const checkInLong = checkInGps[1];
                        const itemLat = itemGps[0];
                        const itemLong = itemGps[1];
                        console.log(checkInReq?.time?.timestamp, checkOutReq?.time?.timestamp, checkInItem?.timestamp, checkOutItem?.timestamp, JSON.stringify(item));
                        if (
                            !checkInItem?.timestamp ||
                            !checkOutItem?.timestamp ||
                            !moment(checkInReq?.time?.timestamp).isBetween
                                (checkInItem?.timestamp, checkOutItem?.timestamp) ||
                            !moment(checkOutReq?.time?.timestamp).isBetween
                                (checkInItem?.timestamp, checkOutItem?.timestamp) ||
                            (checkInGps.length && itemGps.length && !isInRange(checkInLat, checkInLong, itemLat, itemLong))
                        ) {
                            providerItem.items.splice(itemIndex, 1);
                        }
                    });
                    if (!providerItem?.items?.length) {
                        providers.splice(providerIndex, 1);
                    }
                });
            }
        } else if (isTourism(context)) {
            let checkInReq: KeyValuePair | null = null;
            fulfillment?.stops.map((fulfillmentStop: KeyValuePair) => {
                if (fulfillmentStop?.type?.toLowerCase() === CHECK_IN) {
                    checkInReq = fulfillmentStop;
                }
            });

            if (checkInReq) {
                providers.map((providerItem: KeyValuePair, providerIndex) => {
                    providerItem.items.map((item: KeyValuePair, itemIndex) => {
                        let checkInItem: any = null;
                        item?.item_fulfillment_ids?.map((fulfillment: KeyValuePair) => {
                            if (fulfillment?.fulfilment_id?.type?.toLowerCase() === CHECK_IN) {
                                checkInItem = fulfillment;
                            }
                        });
                        const checkInGps = checkInReq?.location?.gps.split(',') || [];
                        const itemGps = checkInItem?.location_id?.gps.split(',') || [];
                        const checkInLat = checkInGps[0];
                        const checkInLong = checkInGps[1];
                        const itemLat = itemGps[0];
                        const itemLong = itemGps[1];
                        console.log(
                            moment(checkInReq?.time?.timestamp).format('YYYY-MM-DD'), moment(checkInItem?.timestamp).format('YYYY-MM-DD'),
                            (checkInGps.length && itemGps.length && !isInRange(checkInLat, checkInLong, itemLat, itemLong))
                        );
                        if (
                            moment(checkInReq?.time?.timestamp).format('YYYY-MM-DD') !== moment(checkInItem?.timestamp).format('YYYY-MM-DD') ||
                            (checkInGps.length && itemGps.length && !isInRange(checkInLat, checkInLong, itemLat, itemLong))
                        ) {
                            providerItem.items.splice(itemIndex, 1);
                        }
                    });
                    if (!providerItem?.items?.length) {
                        providers.splice(providerIndex, 1);
                    }
                });
            }
        } else {
            const gps: string = fulfillment?.stops?.find((stop: KeyValuePair) => stop?.location?.gps)?.location?.gps;
            if (gps) {
                providers.map((providerItem: KeyValuePair, providerIndex: number) => {
                    providerItem.items.map((item: KeyValuePair, itemIndex: number) => {
                        let isMatched: boolean = false;
                        item?.item_fulfillment_ids?.map((fulfillment: KeyValuePair) => {
                            const checkInGps = gps.split(',') || [];
                            const itemGps = fulfillment?.location_id?.gps.split(',') || [];
                            const checkInLat = checkInGps[0];
                            const checkInLong = checkInGps[1];
                            const itemLat = itemGps[0];
                            const itemLong = itemGps[1];
                            if ((checkInGps.length && itemGps.length && isInRange(checkInLat, checkInLong, itemLat, itemLong))) {
                                isMatched = true;
                            }
                        });
                        if (!isMatched) {
                            providerItem.items.splice(itemIndex, 1);
                        }
                    });
                    if (!providerItem?.items?.length) {
                        providers.splice(providerIndex, 1);
                    }
                });
            }
        }
    }
}
