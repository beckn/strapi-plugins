import moment from "moment";
import { KeyValuePair } from "../types";
import { CHECK_IN, CHECK_OUT } from "../constants";
import { isHospitality, isTourism } from "./domain.util";
import { isInRange, findStoresAlongRouteWithinDistance } from "./location.util";

export class FilterUtil {
    static getItemFilter = (item: KeyValuePair = {}) => {
        const filter: KeyValuePair = {
            id: "",
            name: "",
            code: "",
            publishedAt: { $notNull: true }
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
}
