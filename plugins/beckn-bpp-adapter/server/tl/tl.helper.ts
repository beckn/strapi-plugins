import jsonata from "jsonata";
import path from "path";
import fs from "fs";
import appRootPath from "app-root-path";
import { v4 as uuid } from "uuid";
import moment from "moment";
import { KeyValuePair } from "../types";

export const context = async (data: any, action: string) => {
  const expression = jsonata(
    fs.readFileSync(
      path.join(appRootPath.toString(), `/server/mappings/context.jsonata`),
      "utf8"
    )
  );
  return await expression.evaluate(data, {
    env: process.env,
    moment,
    uuid,
    action
  });
};

export const xInput = async (context: KeyValuePair) => {
  const { action, domain } = context;
  let formId;
  if (action === "init" && domain === "dsep:scholarships") {
    formId = "dsepScholarshipDetailsForm";
  } else if (action === "init" && domain === "dsep:jobs") {
    formId = "dsepJobsApplyForm";
  } else if (action === "select" && domain === "online-dispute-resolution:0.1.0") {
    formId = "odrDisputeDetailsForm";
  } else if (action === "init" && domain === "online-dispute-resolution:0.1.0") {
    formId = "odrConsentForm";
  } else if (action === "select" && domain === "supply-chain-services:assembly") {
    formId = "industryAssemblyDetailsForm";
  }
  // } else {
  //   formId = action === "select" ? "itemDetailsForm" : "ratingForm";
  // }

  return formId ? `${process.env.BPP_ADAPTER_PLUGIN_URL}/x-input/form?form_id=${formId}` : null;
};

export const quote = async (items: KeyValuePair[]) => {
  const priceValue = items?.reduce(
    (accumulator, currentValue) =>
      accumulator + Number(currentValue?.sc_retail_product?.min_price),
    0
  );
  const breakup: KeyValuePair[] = [];
  items.map((item) => {
    item?.sc_retail_product?.price_bareakup_ids?.map(
      (price_bareakup_id: KeyValuePair) => {
        breakup.push({
          title: price_bareakup_id.title,
          price: {
            currency: price_bareakup_id.currency,
            value: price_bareakup_id.value ? price_bareakup_id.value + "" : ""
          },
          item: {
            id: price_bareakup_id.item_id
          }
        });
      }
    );
  });
  return {
    price: {
      value: priceValue + "",
      currency: items[0].sc_retail_product?.currency
    },
    breakup
  };
};

export const payments = async (
  provider: KeyValuePair,
  incomingPrice: KeyValuePair,
  transaction_id: string,
  status: string = "PAID"
) => {
  const { payment_methods = {} } = provider;
  let price: any = incomingPrice || {
    value: 0,
    currency: "INR"
  };
  if (!incomingPrice) {
    const priceValue = provider?.items.reduce(
      (accumulator: number, currentValue: KeyValuePair) =>
        accumulator + Number(currentValue?.sc_retail_product?.min_price),
      0
    );
    price.value = priceValue;
    price.currency = provider?.items[0]?.sc_retail_product?.currency;
  }

  return payment_methods.map((payment_method: any) => {
    return {
      collected_by: "BPP",
      params: {
        bank_account_name: payment_method.bank_name,
        bank_account: payment_method.bank_account_number,
        bank_code: payment_method.bank_code,
        price: price?.value + "",
        currency: price?.currency
      },
      status,
      type: "PRE-ORDER",
      transaction_id
    };
  });
};

export const price = (sc_retail_product: KeyValuePair = {}) => {
  const { min_price = 0, currency = "INR" } = sc_retail_product || {};
  return {
    value: min_price ? min_price + "" : "0",
    currency
  };
};

export const cancellationTerms = (items: KeyValuePair[]) => {
  const cancelTerms: KeyValuePair[] = [];
  items.map((item: KeyValuePair) => {
    item.sc_retail_product?.product_cancel.map((pc: KeyValuePair) => {
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
};

export const fulfillments = (fulfillments: KeyValuePair[], items: KeyValuePair[] = []) => {
  const allFulfillments = fulfillments || [];
  items.forEach((item: KeyValuePair) => {
    item?.item_fulfillment_ids?.forEach((item_fulfillment_id) => {
      allFulfillments.push(item_fulfillment_id?.fulfilment_id)
    });
  });
  return allFulfillments.map((fulfillment) => {
    const agent = fulfillment?.service?.agent_id || {};
    return {
      id: fulfillment.id + "",
      type: fulfillment.type,
      rating: fulfillment.rating ? fulfillment.rating + "" : "",
      rateable: fulfillment.rateable,
      state: {
        description: fulfillment?.state_value,
        descriptor: {
          code: fulfillment?.state_code,
          name: fulfillment?.state_value
        }
      },
      agent: {
        person: {
          id: agent?.id ? agent?.id + "" : "",
          name: agent?.first_name ? `${agent?.first_name} ${agent?.last_name}` : ""
        },
        contact: {
          phone: agent?.agent_profile?.phone_number,
          email: agent?.agent_profile?.email
        },
      },
      vehicle: {
        make: agent?.agent_profile?.vehicle_make,
        model: agent?.agent_profile?.vehicle_model,
        registration: agent?.agent_profile?.registration_no
      },
      tags: fulfillment.tag_ids?.map((tag) => {
        return {
          display: true,
          descriptor: {
            description: tag.tag_group_id?.tag_group_name
          },
          list: [
            {
              descriptor: {
                description: tag.tag_name
              },
              value: tag.code,
              display: true
            }
          ]
        };
      })
    };
  });
};

export const locations = (locations: KeyValuePair[]) => {
  const formatedLocations: KeyValuePair[] = [];
  locations.map((location) => {
    if (!formatedLocations.find((lc: KeyValuePair) => lc?.id === (location?.id + ""))) {
      formatedLocations.push({
        id: location?.id ? location?.id + "" : "",
        gps: location?.gps || null,
        address: location?.address,
        city: {
          name: location?.city
        },
        country: {
          name: location?.country
        },
        state: {
          name: location?.state
        },
        area_code: location?.zip ? location?.zip + "" : ""
      });
    }
  });
  return formatedLocations;
}
