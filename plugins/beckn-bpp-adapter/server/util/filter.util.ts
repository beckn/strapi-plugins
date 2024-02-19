import { KeyValuePair } from "../types";

export class FilterUtil {
    static getItemFilter = (item: KeyValuePair = {}) => {
        const filter = {
            id: '',
            name: '',
            code: ''
        };
        filter.id = item.id;
        filter.name = item.descriptor?.name;
        filter.code = item.descriptor?.code;
        return filter;
    }

    static getProviderFilter = (provider: KeyValuePair = {}) => {
        const filter = {
            id: '',
            provider_name: ''
        };
        filter.id = provider.id;
        filter.provider_name = provider.descriptor?.name;
        return filter;
    }

    static getCategoryFilter = (category: KeyValuePair = {}) => {
        const filter = {
            id: '',
            value: '',
            category_code: '',
        };
        filter.id = category.id;
        filter.value = category.descriptor?.name;
        filter.category_code = category.descriptor?.code
        return filter;
    }
}