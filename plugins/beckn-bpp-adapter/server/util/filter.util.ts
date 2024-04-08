import moment from "moment";
import { KeyValuePair } from "../types";
import { CHECK_IN, CHECK_OUT, TOLERANCE_RADIUS } from "../constants";
import { isHospitality, isTourism } from "./domain";
import { isInRange, findStoresAlongRouteWithinDistance } from "./location";

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
    ): KeyValuePair[] => {
        // TODO: Optimisation required, move common code to util - Abhishek Y
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
                    providerItem.items = providerItem.items.filter((item: KeyValuePair) => {
                        let checkInItem: any = null;
                        let checkOutItem: any = null;
                        item?.item_fulfillment_ids?.forEach((fulfillment: KeyValuePair) => {
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
                        console.log(
                            !checkInItem?.timestamp,
                            !checkOutItem?.timestamp,
                            !moment(checkInReq?.time?.timestamp).isBetween
                                (checkInItem?.timestamp, checkOutItem?.timestamp),
                            !moment(checkOutReq?.time?.timestamp).isBetween
                                (checkInItem?.timestamp, checkOutItem?.timestamp),
                            checkInGps.length,
                            itemGps.length,
                            !isInRange(checkInLat, checkInLong, itemLat, itemLong)
                        );
                        if (
                            !checkInItem?.timestamp ||
                            !checkOutItem?.timestamp ||
                            !moment(checkInReq?.time?.timestamp).isBetween
                                (checkInItem?.timestamp, checkOutItem?.timestamp) ||
                            !moment(checkOutReq?.time?.timestamp).isBetween
                                (checkInItem?.timestamp, checkOutItem?.timestamp) ||
                            (checkInGps.length && itemGps.length && !isInRange(checkInLat, checkInLong, itemLat, itemLong))
                        ) {
                            return false;
                        }
                        return true;
                    });
                    return providerItem.items.length > 0;
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
                filteredProviders = providers.filter((providerItem: KeyValuePair) => {
                    providerItem.items = providerItem.items.filter((item: KeyValuePair) => {
                        let checkInItem: any = null;
                        item?.item_fulfillment_ids?.forEach((fulfillment: KeyValuePair) => {
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
                            return false;
                        }
                        return true;
                    });
                    return providerItem.items.length > 0;
                });
            }
        } else {
            const gps: string = fulfillment?.stops?.find((stop: KeyValuePair) => stop?.location?.gps)?.location?.gps;
            if (gps) {
                filteredProviders = providers.filter((providerItem: KeyValuePair) => {
                    providerItem.items = providerItem.items.filter((item: KeyValuePair) => {
                        let isMatched: boolean = false;
                        item?.item_fulfillment_ids?.forEach((fulfillment: KeyValuePair) => {
                            const checkInGps = gps.split(',') || [];
                            const itemGps = fulfillment?.location_id?.gps.split(',') || [];
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
                            if ((checkInGps.length && itemGps.length && isInRange(checkInLat, checkInLong, itemLat, itemLong))) {
                                isMatched = true;
                            }
                        });
                        return isMatched;
                    });
                    return providerItem.items.length > 0;
                });
            }
        }
        const stop = fulfillment?.stops?.find((stop: KeyValuePair) => stop?.location?.polygon) || {};
        const { polygon, circle } = stop.location || {};
        // const polygon2 = 'yrpqF`|x_SoFxgCwfApWyeBqkCa`Cq\_pHk`@qiLji@iuUo|@qoZaHwiRdFmgS|g@_dQn^eoXzy@ynO}AicKao@swPwjCo}U{vGofLceCwsEwzAuhFmdF{tNqoAg`PoKgoVngEgzLrm@}`FppB_mJgGsqD_zAanK{hDiyDshAqaEqdAwzBrf@izHao@ksAmjEikCeQmzHh_JocFnwEefDjeGswFtuCk|Tz~AavDllBosEfiAefInk@sfOd`FqlDhv@{yGwFivKuMmwM{{A}tEE{jF|m@guNpbTqoEncKibGpyIkqCh~K}hAhiKul@buAa`Bd`BwlBl~BsLz`JiwAlpTmoBnkOcu@h}N{oBb}YsNv}x@o~A`}VecAnrArf@zyImoDfnMacCtsGoyJpw^}nEjsGcwCxpIs^dzM|u@haQi}AjcP{vA|cNuiCdz_@ahGzyMwbCpjPpHh}b@gmCh}Ocn@d_R{aDthRwnCjrHsQl}IeyAlaPo|C|a@i{B`iAouFtJgjGuz@urAfdBwnEtiG{mBxLswEic@swBcFa`BmbA}dAxiAut@trAwcA}r@alB`eAm}@`rBeuD`t@sfI|o@{K{w@_o@`OjC|aBnc@jxB_o@`rAawBfr@{bDnpHamG`dNc{E`zJihJjr@i_Dm^}qCpk@swD`bCcdExjI}fHteM}vC`jIg|D|uDusIbuLefDvsFoqDdwH_y@`mBk_EsX_jFc`GcyAfd@eu@xyCctDhiEg_FrcHseFdxC{uEdeBiiBjqC_tDts@srLroAct@b{AcThpAiiBt]sx@viAkjHznHcjEjfDgpJ|bIs_F~_C}jBl`@|qAb{Ajy@zzI{w@zl@hHxy@az@o@r\le@n_@h|AWxzAeeA~`Eg`Dji@toAv[ay@~Pl^pGmi@vn@q^tFnc@duBqvAeXcIfw@uUbb@ayA}@}hC`~Bg_CdoCk{BjuDafAxcC`~@jaDlm@`eDyNr}Cyr@j{E}_CpoAqfDdxCw`CpcFqiCfhLasE~uJaaEdaD{hBtkDjQlmDjwBdoMb@|{Hv`MlqFfwDnoEdsEh~IeJftD{fDdzEksBpmHxAx}EnVlhIgz@f`DbZfwA|p@kmAfsB_`BpbAmc@~}AzmAoUdtAtjAl[xyAbqC~gA~eAxnBsHzfBuDldBnwAlk@kOfj@v{@pqAxzBrbEzdBhxBdYhmGmhGlhDm}BzaCo_G|[krBp_DuWp~DjgFreC~yBdrAquBpqE`_CxlAlpDd{AhtE_mCpcD~YdkDh_Cbx@~cC~`C';
        if (polygon) {
            // Polygon based search
            const stores = this.filterItemsWithLocation(providers);
            const gps = circle?.gps.split(',') || [];
            const location = gps.length ? { latitude: gps[0], longitude: gps[1] } : undefined;
            const fliteredStores = findStoresAlongRouteWithinDistance(polygon, stores, location, circle?.radius?.value);
            const itemIds = fliteredStores.map((fliteredStore: KeyValuePair) => fliteredStore.item_id) || [];
            console.log('Filter Item IDs', itemIds);
            filteredProviders = providers.filter((providerItem: KeyValuePair) => {
                providerItem.items = providerItem.items.filter((item: KeyValuePair) => {
                    return itemIds.includes(item.id);
                });
                return providerItem.items.length > 0;
            });
        }
        return filteredProviders;
    }

    private static filterItemsWithLocation = (providers: KeyValuePair[]) => {
        const stores: KeyValuePair[] = [];
        providers.forEach((provider: KeyValuePair) => {
            provider.items?.forEach((item: KeyValuePair) => {
                item.item_fulfillment_ids.forEach((item_fulfillment_id: KeyValuePair) => {
                    const gps = item_fulfillment_id.location_id?.gps?.split(',') || [];
                    if (gps.length) {
                        stores.push({
                            item_id: item.id,
                            lat: gps[0],
                            lng: gps[1]
                        })
                    }
                });
            });
        });
        return stores;
    }
}
