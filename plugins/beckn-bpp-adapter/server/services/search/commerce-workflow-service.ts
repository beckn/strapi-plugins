import { Strapi } from "@strapi/strapi";
import {
  ObjectUtil,
  FilterUtil,
  SearchUtil,
  isDegRental,
  isDegFinance
} from "../../util";
import { KeyValuePair } from ".././../types";
import { PLUGIN } from "../../constants";

export default ({ strapi }: { strapi: Strapi }) => ({
  async index({ message, context }) {
    console.log("Request====>", JSON.stringify({ message, context }));
    const { item, provider, category, fulfillment, tags } =
      message?.intent || {};
    const { domain, location } = context;
    const filters: KeyValuePair = provider
      ? FilterUtil.getProviderFilter(provider)
      : {};
    if (location?.country?.code) {
      filters.country = {
        code: location?.country?.code
      };
    }
    const populate: KeyValuePair = {
      items: {
        populate: {
          cat_attr_tag_relations: {
            filters: {
              taxanomy: {
                $in: ["TAG", "CATEGORY"]
              }
            }
          },
          image: {},
          sc_retail_product: {
            populate: {
              price_bareakup_ids: {},
              product_cancel: {
                populate: {
                  cancel_term_id: {}
                }
              }
            }
          },
          item_fulfillment_ids: {
            populate: {
              fulfilment_id: {
                populate: {
                  service: {
                    populate: {
                      location_id: {},
                      service_availabilities: {},
                      agent_id: {
                        populate: {
                          agent_profile: {}
                        }
                      }
                    }
                  }
                }
              },
              location_id: {}
            }
          }
        }
      },
      payment_methods: {},
      category_ids: {},
      location_id: {},
      fulfillments: {},
      logo: {},
      tags: {
        populate: {
          tag_group_id: {}
        }
      }
    };

    if (domain) {
      filters.domain_id = {
        DomainName: domain
      };
    }

    const itemFilter = ObjectUtil.removeEmptyObjectKeys(
      FilterUtil.getItemFilter(item)
    );
    if (Object.keys(itemFilter).length) {
      populate.items.filters = filters.items = itemFilter;
    }

    const scRetailFilter = ObjectUtil.removeEmptyObjectKeys(
      FilterUtil.getSCRetailFilter(item)
    );
    if (Object.keys(scRetailFilter).length) {
      populate.items.populate.sc_retail_product.filters = scRetailFilter;
      filters.items = {
        ...(filters.items || {}),
        sc_retail_product: scRetailFilter
      };
    }

    if (category && !isDegFinance(context)) {
      const categoryFilter = ObjectUtil.removeEmptyObjectKeys(
        FilterUtil.getCategoryFilter(category)
      );
      if (Object.keys(categoryFilter).length) {
        populate.category_ids.filters = filters.category_ids = categoryFilter;
      }
    }

    ObjectUtil.removeEmptyObjectKeys(filters);
    ObjectUtil.removeEmptyKeys(populate);
    console.log(
      "Filters=====>",
      JSON.stringify(
        {
          filters,
          populate
        },
        null,
        2
      )
    );
    let providers = await strapi.entityService.findMany(
      "api::provider.provider",
      {
        filters,
        populate
      }
    );

    console.log("providers====>", JSON.stringify(providers));

    if (
      tags?.find(
        (tag) =>
          tag?.descriptor?.code === "preFinanced" &&
          tag?.descriptor?.name === "true"
      )
    ) {
      providers.forEach((provider) => {
        provider.items.forEach((item) => {
          if (item.sc_retail_product) {
            // Update the code and price value

            if (item?.sc_retail_product?.min_price)
              item.sc_retail_product.min_price = `${
                parseInt(item.sc_retail_product.min_price) - 2
              }`;
            if (item?.sc_retail_product?.max_price)
              item.sc_retail_product.max_price = `${
                parseInt(item.sc_retail_product.max_price) - 2
              }`;
          }
        });
      });
    }

    if (fulfillment) {
      providers = SearchUtil.filterByFulfillment(
        providers,
        fulfillment,
        context
      );
    }
    console.log(
      "providers after fulfillents filteration====>",
      JSON.stringify(providers)
    );

    // Request for Cred from BPP is not required as of now
    // providers = await SearchUtil.filterTrustedSource(providers, context);

    const commonService = strapi.plugin(PLUGIN).service("commonService");
    await Promise.all(
      providers.map(async (provider) => {
        provider.tags = provider?.tags?.map((tag) => ({
          taxanomy: "TAG",
          taxanomy_id: tag
        }));
        // Filter items where sc_retail_product is not null 
        //since price filter keeps those item whose sc_retail_product 
        //is null (after applying price filter on sc_retail_product 
        //strapi make those sc_retail_product as null)

        provider.items = provider.items?.filter(
          (item) => item.sc_retail_product !== null
        );

        await Promise.all(
          await provider.items.map(async (item) => {
            await Promise.all(
              item["cat_attr_tag_relations"]?.map(async (taxanomy) => {
                if (taxanomy.taxanomy === "CATEGORY") {
                  taxanomy.taxanomy_id = await commonService.getCategoryById(
                    taxanomy.taxanomy_id,
                    {
                      parent_id: {}
                    }
                  );
                } else if (taxanomy.taxanomy === "TAG") {
                  taxanomy.taxanomy_id = await commonService.getTagById(
                    taxanomy.taxanomy_id,
                    {
                      tag_group_id: {}
                    }
                  );
                }
              })
            );
          })
        );
      })
    );

    if (isDegFinance(context)) {
      providers = providers
        .map((provider: any) => {
          const filteredItems = provider.items.filter((item: any) =>
            item.cat_attr_tag_relations.some(
              (relation: any) =>
                relation?.taxanomy_id?.value === category?.descriptor?.name &&
                relation?.taxanomy_id?.category_code ===
                  category?.descriptor?.code
            )
          );

          return {
            ...provider,
            items: filteredItems // Update provider with filtered items
          };
        })
        .filter((provider) => provider.items.length > 0); // Remove providers with no matching items
      console.log("Deg Finance Providers========>", providers);
    }

    function filterProvidersByRentalEnd(providers) {
      const currentEpochInMs = Math.floor(Date.now());

      return providers
        .map((provider) => {
          const filteredItems = provider.items.filter((item) => {
            const rentalEndFulfillment = item.item_fulfillment_ids.find(
              (fulfillment) => fulfillment.fulfilment_id.type === "RENTAL_END"
            );

            if (!rentalEndFulfillment) return false;

            const rentalEndTime = parseInt(
              rentalEndFulfillment.fulfilment_id.state_value
            );

            const rentalEndTimeInMs =
              rentalEndTime.toString().length === 10
                ? rentalEndTime * 1000
                : rentalEndTime;
            console.log('Rental time: ', rentalEndTimeInMs,'  ', currentEpochInMs);
            return rentalEndTimeInMs > currentEpochInMs;
          });

          // Return provider with filtered items
          return {
            ...provider,
            items: filteredItems
          };
        })
        .filter((provider) => provider.items.length > 0); // Only keep providers that have matching items
    }

    function filterProvidersByStartAndEndTime(providers, startTime, endTime) {

      return providers
        .map((provider) => {
          const filteredItems = provider.items.filter((item) => {
            const rentalEndFulfillment = item.item_fulfillment_ids.find(
              (fulfillment) => fulfillment.fulfilment_id.type === "RENTAL_END"
            );
            const rentalStartFulfillment = item.item_fulfillment_ids.find(
              (fulfillment) => fulfillment.fulfilment_id.type === "RENTAL_START"
            );

            if (!rentalEndFulfillment || !rentalStartFulfillment) return false;

            const rentalEndTime = parseInt(
              rentalEndFulfillment.fulfilment_id.state_value
            );

            const rentalEndTimeInMs =
              rentalEndTime.toString().length === 10
                ? rentalEndTime * 1000
                : rentalEndTime;

            const rentalStartTime = parseInt(
              rentalStartFulfillment.fulfilment_id.state_value
            );

            const rentalStartTimeInMs =
              rentalStartTime.toString().length === 10
                ? rentalStartTime * 1000
                : rentalStartTime;

            startTime = startTime.toString().length === 10 ? startTime * 1000 : startTime;
            endTime = endTime.toString().length === 10 ? endTime * 1000 : endTime;
            console.log('Rental Start time in catalog and searched startTime: ', rentalStartTimeInMs, '  ', startTime);
            console.log('Rental End time in catalog and searched endTime: ', rentalEndTimeInMs, '  ', endTime);

            return rentalEndTimeInMs >= endTime && rentalStartTimeInMs <= startTime;
          });

          // Return provider with filtered items
          return {
            ...provider,
            items: filteredItems
          };
        })
        .filter((provider) => provider.items.length > 0); // Only keep providers that have matching items
    }

    if (isDegRental(context)) {
      //fetch rental start time and end time
      const stops = fulfillment?.stops || [];

      let startTime = null;
      let endTime = null;

      for (const stop of stops) {
        if (stop.type === 'START_TIME') {
          startTime = stop.time?.duration || null;
        }
        if (stop.type === 'END_TIME') {
          endTime = stop.time?.duration || null;
        }
      }

      console.log("startTime:", startTime);
      console.log("endTime:", endTime);
      if(startTime && endTime) {
        //filter by startTime and endTime
        providers = filterProvidersByStartAndEndTime(providers, startTime, endTime);
      } else {
        providers = filterProvidersByRentalEnd(providers);
      }
      

      // sorting the provider.items[0].createdAdd in descending order
      providers = providers.sort(
        (providerA: any, providerB: any) =>
          new Date(providerB.items[0].createdAt).getTime() -
          new Date(providerA.items[0].createdAt).getTime()
      );

      console.log(
        "\n\nDeg Rental Providers========>\n\n",
        JSON.stringify(providers),
        "\n\n"
      );
    }

    if (item?.tags?.length && item?.tags[0]?.list?.length) {
      const newProviders = providers.map((provider: any) => {
        const filteredItems = provider?.items?.filter((itemFromStrapi) => {
          const isMatch = item?.tags?.[0]?.list?.some((listItem: any) => {
            return itemFromStrapi?.cat_attr_tag_relations?.some((tag: any) => {
              const result = domain === "deg:rental" && listItem?.descriptor?.code === "Renting Capacity"
                ? (tag?.taxanomy_id?.code === listItem?.descriptor?.code &&
                    Number(listItem?.descriptor?.value) <= Number(tag?.taxanomy_id?.value)) // Battery Capacity logic
                : (tag?.taxanomy_id?.code === listItem?.descriptor?.code &&
                    tag?.taxanomy_id?.value === listItem?.value);
        
              console.log(
                `[Tag Match Check] Code: ${tag?.taxanomy_id?.code}, Value: ${tag?.taxanomy_id?.value} | ` +
                `ListItem Code: ${listItem?.descriptor?.code}, Value: ${listItem?.descriptor?.value} | ` +
                `Match Result: ${result}`
              );
        
              return result;
            });
          });
        
          console.log('Is match:: ', isMatch, 'Item: ', JSON.stringify(itemFromStrapi));
        
          return isMatch;
        });
        

        // Only keep provider if any items matched
      if (filteredItems?.length) {
        return { ...provider, items: filteredItems };
      }
      return null;
    })
    .filter((provider) => provider !== null); // Remove null providers
      // if ((newProviders as any[]).every((elem: any) => elem === null)) {
      //   return providers;
      // } else {
      //   return newProviders;
      // }
      return newProviders;
    }
    return providers;
  }
});
