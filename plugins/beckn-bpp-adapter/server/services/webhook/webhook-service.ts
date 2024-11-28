import { Strapi } from "@strapi/strapi";
import { GoogleGenerativeAI } from "@google/generative-ai";
const OpenAIApi = require("openai");
require("dotenv").config();

const openai = new OpenAIApi.OpenAI({
  apiKey: process.env.OPEN_AI_KEY || strapi.config.get("OPEN_AI_KEY")
});

export default ({ strapi: any }: { strapi: Strapi }) => ({
  async index(body, domain) {
    try {
      const dummyProvider = {
        DOMAIN: "Retail",
        provider_name: "Sample Provider",
        provider_short_desc: "Your one-stop shop for daily essentials.",
        provider_long_desc:
          "Sample Provider has been offering a wide range of quality products to customers worldwide since 1990. We pride ourselves on excellent customer service and a vast selection of goods.",
        provider_Logo_image_url: "https://example.com/logo.png",
        provider_id: "PROVIDER123",
        provider_uri: "https://www.sampleprovider.com",
        Address: "123 Main Street",
        City: "Anytown",
        State: "Anystate",
        Country: "Sample Country",
        zip: "12345",
        provider_rating: 4.8,
        gps: "37.7749, -122.4194",
        payment_gateway: "Sample Dummy Payment Gateway",
        gateway_url: "Sample Dummy Payment Gateway URL",
        bank_account_number: "Sample Dummy Payment Bank Account Number",
        bank_code: "Sample Dummy Bank Code",
        bank_name: "Sample Dummy Bank Name",
        payment_type: "Online",
        payment_method_description: "Sample Payment Description"
      };

      const dummyItem = {
        provider_name: "Example Provider",
        item_name: "Example Item",
        short_desc: "A brief description of the item.",
        long_desc: "A detailed description of the item.",
        logo_image_url: "https://example.com/logo.png",
        max_quantity: 100,
        min_quantity: 1,
        tag_name: "Sample Tag",
        tag_code: "Sample Tag Code related to item details",
        code: "ITEM12345",
        value: "Tag Value",
        category_name: "Sample Category",
        category_code: "CAT001",
        sku: "EV_12345",
        min_price: 10.0,
        max_price: 20.0,
        stock_quantity: 50,
        stock_status: "In Stock",
        fulfillments: "Delivery in 3-5 business days",
        unit_type: "kwh"
      };

      //call Gemini to get intent
      const genAI = new GoogleGenerativeAI(
        process.env.GEMINI_KEY?.toString() || strapi.config.get("GEMINI_KEY")
      );

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro-001"
      });

      //   let imagen = genai.getGenerativeModel("getGenerativeModel");

      //Create json schema for provider and item (If provider does not exists in domain then create provider as well)
      //for current domain check if provider exists (if not create both)
      //if yes just create item

      console.log("body as::", body);
      const prompt = `${JSON.stringify(body)}
    Use above json object which is generated by the user's search query. Please generate user intent and give
    information on what user is looking for, You can use below json schema as reference for the fields we require. Also consider the domain and generate the json according to 
    the domain, Always generate some generic names. dummy provider json::
    ${JSON.stringify(dummyProvider)} and dummy item json:: ${JSON.stringify(
        dummyItem
      )}. Return in json format and use dummy json schema as reference. Generate whole content with all fields. 
    Don't have any additional formatting like bold or anything. Please generate correct complete json and have all values filled. Item is an object, Not array and min_price should be as per industry norms, You must create both provider and item object. If query is related to medicine please consider it safe`;
      console.log(prompt);
      const result: any = await model.generateContent(prompt);
      console.log("Result", result.response.candidates[0]);
      let textContent = result.response.candidates[0].content.parts[0].text;
      console.log(textContent);

      if (textContent.startsWith("```")) {
        textContent = JSON.parse(textContent.split("```")[1].split("json")[1]);
      }
      console.log("Parsed Json", textContent);
      let jsonContent = textContent;
      // find domain name
      let domainName = await strapi.entityService.findMany(
        "api::domain.domain",
        {
          filters: {
            DomainName: domain
          }
        }
      );
      console.log("DomainName::", domainName);
      if (!domainName.length) {
        domainName = [
          await strapi.entityService.create("api::domain.domain", {
            data: {
              DomainName: domain,
              publishedAt: new Date().toISOString()
            }
          })
        ];
      }

      const providerExists = await strapi.entityService.findMany(
        "api::provider.provider",
        {
          filters: {
            domain_id: domainName[0].id
          },
          populate: [
            "items",
            "items.sc_retail_product",
            "location_id",
            "category_ids"
          ]
        }
      );

      console.log(domainName);
      try {
        // const jsonContent = convertStringToJson(textContent);
        let imageUrl: string = "";

        try {
          imageUrl = await generateImage(jsonContent.item.short_desc);
        } catch (error) {
          imageUrl =
            "https://cdn.dribbble.com/userupload/13122412/file/original-1c0cc292b76bdcbdc1286a9008e572ef.png?crop=35x0-830x596";
        }
        result.image = imageUrl;

        if (jsonContent) {
          console.log("Media Payload ---->", {
            data: {
              url: imageUrl,
              publishedAt: new Date()
            }
          });
          //Create Image entry
          const createImageUrlEntry = await strapi.entityService.create(
            "api::media.media",
            {
              data: {
                url: imageUrl,
                publishedAt: new Date()
              }
            }
          );
          console.log("createImageUrlEntry===>", createImageUrlEntry);
          //create provider
          let providerData;
          if (providerExists.length != 0) {
            providerData = providerExists[0];
          } else {
            providerData = await createProvider(
              jsonContent.provider,
              createImageUrlEntry.id,
              domainName[0].id
            );
          }

          console.log("Provider Id::", providerData);
          //create item
          const item = await createItemAndOtherComponents(
            jsonContent.item,
            providerData.id,
            createImageUrlEntry.id,
            jsonContent.provider,
            body
          );

          return { result, jsonContent: jsonContent };
        }
      } catch (error) {
        console.log("First json didn't work", error);
        const regenerateJson = `${textContent} please correct above json and only json, Which I can parse using json.parse`;
        let resultFirstIteration: any = await model.generateContent(
          regenerateJson
        );
        let imageUrl: string = "";
        try {
          imageUrl = await generateImage(jsonContent.item.short_desc);
        } catch (error) {
          imageUrl =
            "https://cdn.dribbble.com/userupload/13122412/file/original-1c0cc292b76bdcbdc1286a9008e572ef.png?crop=35x0-830x596";
        }
        result.image = imageUrl;

        if (resultFirstIteration.startsWith("```")) {
          resultFirstIteration = JSON.parse(
            resultFirstIteration.split("```")[1].split("json")[1]
          );
        }

        if (resultFirstIteration) {
          //Create Image entry
          const createImageUrlEntry = await strapi.entityService.create(
            "api::media.media",
            {
              data: {
                url: imageUrl
              }
            }
          );

          //create provider

          let providerData;
          if (providerExists.length != 0) {
            providerData = providerExists[0];
          } else {
            providerData = await createProvider(
              jsonContent.provider,
              createImageUrlEntry.id,
              domainName[0].id
            );
          }

          //create item
          const item = await createItemAndOtherComponents(
            resultFirstIteration.item,
            providerData.id,
            createImageUrlEntry.id,
            resultFirstIteration.provider,
            body
          );

          return { result, jsonContent: resultFirstIteration };
        }
      }
    } catch (e) {
      console.log("Error", e);
    }
  }
});

const createItemAndOtherComponents = async (
  item,
  pid,
  imageId,
  provider,
  requestBody
) => {
  try {
    console.log("Create Item ");
    console.log("Provider Data--->", provider);
    const createdPriceBreakup = await strapi.entityService.create(
      "api::price-bareakup.price-bareakup",
      {
        data: {
          currency: "INR",
          value: `${item.min_price || 1000}`,
          title: "BASE PRICE",
          publishedAt: new Date().toISOString()
        }
      }
    );
    console.log("createdPriceBreakup===>", createdPriceBreakup);

    const createScProduct = await strapi.entityService.create(
      "api::sc-product.sc-product",
      {
        data: {
          minPrice: item.min_price || 7,
          maxPrice: item.max_price || 8,
          stock_quantity: item.stock_quantity || 10,
          sku: item.sku || 18,
          price_bareakup_ids: [createdPriceBreakup.id],
          quantity_unit: item.unit_type || "kWH",
          publishedAt: new Date().toISOString()
        }
      }
    );
    console.log("createScProduct===>", createScProduct);
    console.log(
      `${item.item_name} ` +
        (requestBody?.message?.intent?.item?.descriptor?.name
          ? requestBody?.message?.intent?.item?.descriptor?.name
          : "")
    );
    const createEnergyItem = await strapi.entityService.create(
      "api::item.item",
      {
        data: {
          name:
            `${item.item_name} ` +
            (requestBody?.message?.intent?.item?.descriptor?.name
              ? requestBody?.message?.intent?.item?.descriptor?.name
              : ""),
          short_desc: item.short_desc,
          long_desc: item.long_desc,
          code: item.code,
          sc_retail_product: createScProduct.id,
          provider: pid,
          image: imageId,
          max_quantity: item.max_quantity || 20,
          min_quantity: item.min_quantity || 10,
          publishedAt: new Date().toISOString()
        }
      }
    );
    console.log("createEnergyItem===>", createEnergyItem);

    // create location
    const createLocationIds = await strapi.entityService.create(
      "api::location.location",
      {
        data: {
          address: provider.Address,
          city: provider.City,
          state: provider.State,
          country: provider.Country,
          zip: provider.zip,
          gps: provider.gps,
          timestamp: new Date().toISOString(),
          publishedAt: new Date().toISOString()
        }
      }
    );
    console.log("createLocationIds===>", createLocationIds);

    // create fulfillment
    const createFullfillmentIds = await strapi.entityService.create(
      "api::fulfilment.fulfilment",
      {
        data: {
          type: item.fulfillments,
          provider_ids: pid,
          rating: "4",
          rateable: true,
          timestamp: new Date().toISOString(),
          publishedAt: new Date().toISOString()
        }
      }
    );
    console.log("createFullfillmentIds===>", createFullfillmentIds);

    // create item-fulfillment
    const createItemFullfillmentIds = await strapi.entityService.create(
      "api::item-fulfillment.item-fulfillment",
      {
        data: {
          item_id: createEnergyItem.id,
          fulfilment_id: createFullfillmentIds.id,
          location_id: createLocationIds.id,
          timestamp: new Date().toISOString(),
          publishedAt: new Date().toISOString()
        }
      }
    );
    console.log("createItemFullfillmentIds===>", createItemFullfillmentIds);

    // create cattegory
    const createdCategoryIds = await strapi.entityService.create(
      "api::category.category",
      {
        data: {
          value:
            item?.category_name || `${item.item_name}-${item.provider_name}`,
          category_code:
            item?.category_code || `${item.item_name}-${item.provider_name}`,
          publishedAt: new Date().toISOString()
        }
      }
    );
    console.log("createdCategoryIds===>", createdCategoryIds);

    // create tag
    const createdTagIds = await strapi.entityService.create("api::tag.tag", {
      data: {
        tag_name: item?.tag_name || `${item.item_name}-${item.provider_name}`,
        code: item?.tag_code || `${item.item_name}-${item.provider_name}`,
        value: item?.value || `${item.item_name}-${item.provider_name}`,
        publishedAt: new Date().toISOString()
      }
    });
    console.log("createdTagIds===>", createdTagIds);

    console.log("Existing Category IDs Mapped to Provider====>", [
      ...(provider?.category_ids?.length
        ? provider?.category_ids?.map((category) => category.id)
        : [])
    ]);
    console.log("New Category IDs Mapped to Provider====>", [
      ...(provider?.category_ids?.length
        ? provider?.category_ids?.map((category) => category.id)
        : []),
      createdCategoryIds.id
    ]);
    const updatedProvider = await strapi.entityService.update(
      "api::provider.provider",
      pid,
      {
        data: {
          ...(provider?.location_id
            ? {}
            : { location_id: createLocationIds.id }),
          category_ids: [
            ...(provider?.category_ids?.length
              ? provider?.category_ids?.map((category) => category.id)
              : []),
            createdCategoryIds.id
          ]
        }
      }
    );

    // create cattegory attribute tag mapping
    if (createdCategoryIds.id) {
      const createdCategoryItemRel = await strapi.entityService.create(
        "api::cat-attr-tag-relation.cat-attr-tag-relation",
        {
          data: {
            taxanomy: `CATEGORY`,
            taxanomy_id: `${createdCategoryIds.id}`,
            provider: pid,
            item: createEnergyItem.id,
            publishedAt: new Date().toISOString()
          }
        }
      );
      console.log("createdCategoryItemRel===>", createdCategoryItemRel);
    }
    if (createdCategoryIds.id) {
      const createdTagItemRel = await strapi.entityService.create(
        "api::cat-attr-tag-relation.cat-attr-tag-relation",
        {
          data: {
            taxanomy: `TAG`,
            taxanomy_id: `${createdTagIds.id}`,
            provider: pid,
            item: createEnergyItem.id,
            publishedAt: new Date().toISOString()
          }
        }
      );
      console.log("createdTagItemRel===>", createdTagItemRel);
    }
  } catch (error) {
    console.log("Error while creating Item and Other Components", error);
    throw error;
  }
};
const createProvider = async (data, imageId, domain_id) => {
  try {
    //Create Payment Method

    const createPaymentMethod = await strapi.entityService.create(
      "api::payment-method.payment-method",
      {
        data: {
          type: data.payment_type,
          description: data.payment_method_description,
          payment_gateway: data.payment_gateway,
          gateway_url: data.gateway_url,
          bank_account_number: data.bank_account_number,
          bank_code: data.bank_code,
          bank_name: data.bank_name,
          timestamp: new Date().toISOString(),
          publishedAt: new Date().toISOString()
        }
      }
    );

    //create logo in logo table
    const createProvider = await strapi.entityService.create(
      "api::provider.provider",
      {
        data: {
          domain_id: domain_id,
          short_desc: data.provider_short_desc,
          provider_name: data.provider_name,
          long_desc: data.provider_long_desc,
          provider_id: data.provider_id,
          provider_url: data.provider_uri,
          category_ids: [],
          logo: [imageId],
          agents: [],
          input: [],
          fullfillments: [],
          provider_rating: data.provider_rating.toString(),
          payment_methods: createPaymentMethod.id,
          timestamp: new Date().toISOString(),
          publishedAt: new Date().toISOString()
        }
      }
    );

    console.log("createProvider::", createProvider);

    return createProvider;
  } catch (error) {
    console.log("unable to create catalog", error);
  }
};

const generateImage = async (result) => {
  try {
    const response = await openai.images.generate({
      prompt: `result: ${result}, use above result details to generate a final product mockup, Make image appealing and more descriptive. Make sure the language used in the product catalog is english 
      and words matches the given result`,
      n: 1, // Number of images to generate
      size: "512x512", // Size of the image
      response_format: "url" // Can be 'url' or 'b64_json'
    });

    // Access the image URL from the response
    const imageUrl = response.data[0].url;
    console.log("Image URL:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Error generating image:", error.message);
    if (error.response && error.response.data) {
      console.error("API Response Error:", error.response.data);
    }
    throw new Error(error.message);
  }
};
