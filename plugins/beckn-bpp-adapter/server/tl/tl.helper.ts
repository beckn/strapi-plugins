import jsonata from "jsonata";
import path from 'path';
import fs from 'fs';
import appRootPath from 'app-root-path';
import { v4 as uuid } from 'uuid';
import moment from "moment";
import { KeyValuePair } from "../types";

export const context = async (data: any, action: string) => {
    const expression = jsonata(fs.readFileSync(path.join(appRootPath.toString(), `/server/mappings/context.jsonata`), "utf8"));
    return await expression.evaluate(data, { env: process.env, moment, uuid, action });
}

export const xInput = async (action: string) => {
    const formId = action === 'on_select' ? 'itemDetailsForm' : 'ratingForm';
    return `${process.env.BPP_ADAPTER_PLUGIN_URL}/x-input/form?form_id=${formId}`;
}

export const quote = async (items: KeyValuePair[]) => {
    const priceValue = items.reduce((accumulator, currentValue) => accumulator + Number(currentValue?.sc_retail_product.min_price), 0);
    const breakup: KeyValuePair[] = [];
    items.map((item) => {
        item?.sc_retail_product?.price_bareakup_ids?.map((price_bareakup_id) => {
            breakup.push({
                title: price_bareakup_id.title,
                price: {
                    currency: price_bareakup_id.currency,
                    value: price_bareakup_id.value + ''
                },
                item: {
                    id: price_bareakup_id.item_id
                }
            });
        });
    })
    return {
        price: {
            value: priceValue + '',
            currency: items[0].sc_retail_product.currency
        },
        breakup
    };
};

export const payments = async (
    provider: KeyValuePair,
    incomingPrice: KeyValuePair,
    transaction_id: string,
    status: string = 'PAID'
) => {
    const { payment_methods = {} } = provider;
    let price: any = incomingPrice || {
        value: 0,
        currency: 'INR'
    };
    if (!incomingPrice) {
        const priceValue = provider?.items.reduce((accumulator, currentValue) => accumulator + Number(currentValue?.sc_retail_product.min_price), 0);
        price.value = priceValue;
        price.currency = provider?.items[0]?.sc_retail_product?.currency;
    }

    return payment_methods.map((payment_method) => {
        return {
            collected_by: "BPP",
            params: {
                bank_account_name: payment_method.bank_name,
                bank_account: payment_method.bank_account_number,
                bank_code: payment_method.bank_code,
                price: price?.value + '',
                currency: price?.currency
            },
            status,
            type: "PRE-ORDER",
            transaction_id
        }
    });
}

export const price = (sc_retail_product: KeyValuePair) => {
    const { min_price = 0, currency = "INR" } = sc_retail_product;
    return {
        value: min_price + '',
        currency
    }
}

export const cancellationTerms = (items: KeyValuePair[]) => {
    const cancelTerms: KeyValuePair[] = []
    items.map((item: KeyValuePair) => {
        item.sc_retail_product?.product_cancel.map((pc) => {
            cancelTerms.push({
                state: pc.state,
                cancellation_fee: {
                    amount: {
                        currency: item.sc_retail_product?.currency,
                        value: pc.cancel_term_id.cancellation_fee
                    }
                }
            });
        });
    });
    return cancelTerms;
}

export const fulfillments = (fulfillments: KeyValuePair[]) => {
    return fulfillments.map((fulfillment) => {
        const agent = fulfillment.agent_ids ? fulfillment.agent_ids[0] : {};
        return {
            id: fulfillment.id + '',
            type: fulfillment.type,
            rating: fulfillment.rating + '',
            rateable: fulfillment.rateable,
            agent: {
                person: {
                    id: agent?.id + '',
                    name: agent?.first_name + agent?.last_name
                }
            }
        }
    });
}