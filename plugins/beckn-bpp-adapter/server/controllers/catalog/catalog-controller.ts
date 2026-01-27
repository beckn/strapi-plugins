import { Strapi } from "@strapi/strapi";
import { generateCatalogs } from "../../util/strapi-catalog-utility/src/index";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { CatalogPayload } from "../../types";

export default ({ strapi }: { strapi: Strapi }) => ({
  async uploadCatalog(ctx) {
    let tempDir: string | null = null;
    let itemsPath: string | null = null;
    let providersPath: string | null = null;

    try {
      const files = (ctx.request as any).files || {};

      if (!files.items || !files.providers) {
        ctx.status = 400;
        ctx.body = {
          error:
            'Both items.csv and providers.csv files are required. Please upload files with field names "items" and "providers"'
        };
        return;
      }

      const itemsFile = Array.isArray(files.items)
        ? files.items[0]
        : files.items;
      const providersFile = Array.isArray(files.providers)
        ? files.providers[0]
        : files.providers;

      // Validate file types
      const itemsFileName =
        itemsFile.name ||
        itemsFile.originalFilename ||
        itemsFile.originalname ||
        "";
      const providersFileName =
        providersFile.name ||
        providersFile.originalFilename ||
        providersFile.originalname ||
        "";

      if (!itemsFileName.endsWith(".csv")) {
        ctx.status = 400;
        ctx.body = {
          error: "Items file must be a CSV file"
        };
        return;
      }

      if (!providersFileName.endsWith(".csv")) {
        ctx.status = 400;
        ctx.body = {
          error: "Providers file must be a CSV file"
        };
        return;
      }

      // Create temporary directory for uploaded files
      tempDir = path.join(os.tmpdir(), `catalog-upload-${Date.now()}`);
      fs.mkdirSync(tempDir, { recursive: true });

      itemsPath = path.join(tempDir, "items.csv");
      providersPath = path.join(tempDir, "providers.csv");

      const itemsFilePath = itemsFile.path || itemsFile.filepath;
      const providersFilePath = providersFile.path || providersFile.filepath;

      if (itemsFilePath) {
        fs.copyFileSync(itemsFilePath, itemsPath);
      } else {
        throw new Error("Unable to process items file - file path not found");
      }

      if (providersFilePath) {
        fs.copyFileSync(providersFilePath, providersPath);
      } else {
        throw new Error(
          "Unable to process providers file - file path not found"
        );
      }

      // Call generateCatalogs function
      await generateCatalogs(providersPath, itemsPath);

      // Clean up temporary files
      if (itemsPath && fs.existsSync(itemsPath)) fs.unlinkSync(itemsPath);
      if (providersPath && fs.existsSync(providersPath))
        fs.unlinkSync(providersPath);
      if (tempDir && fs.existsSync(tempDir)) fs.rmdirSync(tempDir);

      // Clean up original uploaded files if they exist
      if (itemsFilePath && fs.existsSync(itemsFilePath)) {
        try {
          fs.unlinkSync(itemsFilePath);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
      if (providersFilePath && fs.existsSync(providersFilePath)) {
        try {
          fs.unlinkSync(providersFilePath);
        } catch (e) {
          // Ignore cleanup errors
        }
      }

      ctx.status = 200;
      ctx.body = {
        message: "Catalog uploaded and processed successfully"
      };
    } catch (error: any) {
      // Clean up temporary files in case of error
      if (itemsPath && fs.existsSync(itemsPath)) {
        try {
          fs.unlinkSync(itemsPath);
        } catch (e) {
          // Ignore
        }
      }
      if (providersPath && fs.existsSync(providersPath)) {
        try {
          fs.unlinkSync(providersPath);
        } catch (e) {
          // Ignore
        }
      }
      if (tempDir && fs.existsSync(tempDir)) {
        try {
          fs.rmdirSync(tempDir);
        } catch (e) {
          // Ignore
        }
      }

      ctx.status = 500;
      ctx.body = {
        error: "Failed to process catalog upload",
        message: error.message || "Unknown error"
      };
    }
  },
  async uploadCatalogFromPayload(ctx) {
    try {
      const payload: CatalogPayload = ctx.request.body;
      if (!payload.outletId || !payload.charges || !payload.menu) {
        ctx.status = 400;
        ctx.body = {
          error: "Invalid payload"
        };
        return;
      }
      const provider_id = payload.outletId;
      await strapi.db.transaction(async ({ trx }) => {
        try {
          let createdCategories = [];
          let createdTags = [];

          console.log("provider_id", provider_id);
          const provider = await strapi.entityService.findMany(
            "api::provider.provider",
            {
              filters: {
                id: provider_id
              },
              populate: ["location_id"]
            }
          );
          console.log("172");
          for (const charge of payload.charges) {
            const createdChargeTagGroup = await strapi.entityService.create(
              "api::tag-group.tag-group",
              {
                data: {
                  tag_group_name: charge.slug,
                  code: charge.slug.toLowerCase().replace(/ /g, "_"),
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }
            );
            console.log("184");
            const createdChargeTags = await Promise.all([
              strapi.entityService.create("api::tag.tag", {
                data: {
                  value: `${charge.multiItem}`,
                  code: "multiItem".toLowerCase().replace(/ /g, "_"),
                  tag_group_id: createdChargeTagGroup.id,
                  tag_name: "Multi Item",
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }),
              strapi.entityService.create("api::tag.tag", {
                data: {
                  value: `${charge.chargeValue}`,
                  code: "chargeValue".toLowerCase().replace(/ /g, "_"),
                  tag_group_id: createdChargeTagGroup.id,
                  tag_name: "Charge Value",
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }),
              strapi.entityService.create("api::tag.tag", {
                data: {
                  value: `${charge.applicableOnItem}`,
                  code: "applicableOnItem".toLowerCase().replace(/ /g, "_"),
                  tag_group_id: createdChargeTagGroup.id,
                  tag_name: "Applicable On Item",
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              })
            ]);

            console.log("218");
            createdTags.push(...createdChargeTags.map((tag) => tag.id));
            console.log("220");
          }

          for (const category of payload.menu.categories) {
            console.log("224");
            const createdCategory = await strapi.entityService.create(
              "api::category.category",
              {
                data: {
                  value: category.name,
                  code: category.name.toLowerCase().replace(/ /g, "_"),
                  publishedAt: new Date().toISOString()
                }
              }
            );
            console.log("236");
            console.log("createdCategory", createdCategory);
            // Create Sub Categories
            const subCategories = await Promise.all(
              category.subCategories.map(async (subCategory) => {
                console.log("subCategory", {
                  value: subCategory.name,
                  code: subCategory.name.toLowerCase().replace(/ /g, "_"),
                  parent_id: createdCategory.id
                });
                console.log("245");
                return await strapi.entityService.create(
                  "api::category.category",
                  {
                    data: {
                      value: subCategory.name,
                      code: subCategory.name.toLowerCase().replace(/ /g, "_"),
                      parent_id: createdCategory.id,
                      publishedAt: new Date().toISOString()
                    }
                  }
                );
              })
            );
            console.log("251");
            createdCategories.push(
              createdCategory.id,
              ...subCategories.map((subCategory) => subCategory.id)
            );
          }
          console.log("258");
          for (const catalogue of payload.menu.catalogues) {
            const createdItemTags = [];
            // create shelfLife Tags and tag group
            console.log("261");
            const createdShelfLifeTagGroup = await strapi.entityService.create(
              "api::tag-group.tag-group",
              {
                data: {
                  tag_group_name: "Shelf Life",
                  code: "shelfLife".toLowerCase().replace(/ /g, "_"),
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }
            );
            console.log("264");
            const createShelfLifeTag = await strapi.entityService.create(
              "api::tag.tag",
              {
                data: {
                  value: `${catalogue.shelfLife.value}`,
                  code: catalogue.shelfLife.unit
                    .toLowerCase()
                    .replace(/ /g, "_"),
                  tag_group_id: createdShelfLifeTagGroup.id,
                  tag_name: catalogue.shelfLife.unit,
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }
            );
            createdItemTags.push(createShelfLifeTag.id);

            // create nutritionInfo Tags and tag group
            const createdNutritionInfoTagGroup =
              await strapi.entityService.create("api::tag-group.tag-group", {
                data: {
                  tag_group_name: "Nutrition Info",
                  code: "nutritionInfo".toLowerCase().replace(/ /g, "_"),
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              });
            const createdNutritionInfoTags = await Promise.all([
              strapi.entityService.create("api::tag.tag", {
                data: {
                  value: `${catalogue.nutritionInfo.calorieCount}`,
                  code: "calorieCount".toLowerCase().replace(/ /g, "_"),
                  tag_group_id: createdNutritionInfoTagGroup.id,
                  tag_name: "Calorie Count",
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }),
              strapi.entityService.create("api::tag.tag", {
                data: {
                  value: `${catalogue.nutritionInfo.healthyInfo.proteinCount.value} ${catalogue.nutritionInfo.healthyInfo.proteinCount.unit}`,
                  code: "proteinCount".toLowerCase().replace(/ /g, "_"),
                  tag_group_id: createdNutritionInfoTagGroup.id,
                  tag_name: "Protein Count",
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }),
              strapi.entityService.create("api::tag.tag", {
                data: {
                  value: `${catalogue.nutritionInfo.healthyInfo.fatCount.value} ${catalogue.nutritionInfo.healthyInfo.fatCount.unit}`,
                  code: "fatCount".toLowerCase().replace(/ /g, "_"),
                  tag_group_id: createdNutritionInfoTagGroup.id,
                  tag_name: "Fat Count",
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }),
              strapi.entityService.create("api::tag.tag", {
                data: {
                  value: `${catalogue.nutritionInfo.healthyInfo.fiberCount.value} ${catalogue.nutritionInfo.healthyInfo.fiberCount.unit}`,
                  code: "fiberCount".toLowerCase().replace(/ /g, "_"),
                  tag_group_id: createdNutritionInfoTagGroup.id,
                  tag_name: "Fiber Count",
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }),
              strapi.entityService.create("api::tag.tag", {
                data: {
                  value: `${catalogue.nutritionInfo.healthyInfo.carbohydrateCount.value} ${catalogue.nutritionInfo.healthyInfo.carbohydrateCount.unit}`,
                  code: "carbohydrateCount".toLowerCase().replace(/ /g, "_"),
                  tag_group_id: createdNutritionInfoTagGroup.id,
                  tag_name: "Carbohydrate Count",
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              })
            ]);

            createdItemTags.push(
              ...createdNutritionInfoTags.map((tag) => tag.id)
            );

            // create allergenTypes Tags and tag group
            const createdAllergenTypesTagGroup =
              await strapi.entityService.create("api::tag-group.tag-group", {
                data: {
                  tag_group_name: "Allergen Types",
                  code: "allergenTypes".toLowerCase().replace(/ /g, "_"),
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              });

            const createdAllergenTypesTags = await Promise.all(
              catalogue.allergenTypes.map(async (allergenType) => {
                return await strapi.entityService.create("api::tag.tag", {
                  data: {
                    value: allergenType,
                    code: allergenType.toLowerCase().replace(/ /g, "_"),
                    tag_group_id: createdAllergenTypesTagGroup.id,
                    tag_name: allergenType,
                    display: true,
                    publishedAt: new Date().toISOString()
                  }
                });
              })
            );
            createdItemTags.push(
              ...createdAllergenTypesTags.map((tag) => tag.id)
            );

            // create properties Tags and tag group
            for (const property of catalogue.properties) {
              const createdPropertyTagGroup = await strapi.entityService.create(
                "api::tag-group.tag-group",
                {
                  data: {
                    tag_group_name: property.name,
                    code: property.name.toLowerCase().replace(/ /g, "_"),
                    display: true,
                    publishedAt: new Date().toISOString()
                  }
                }
              );
              const createdPropertyTags = await Promise.all(
                property.propertyValues.map(async (propertyValue) => {
                  return await strapi.entityService.create("api::tag.tag", {
                    data: {
                      value: propertyValue.value,
                      code: propertyValue.value
                        .toLowerCase()
                        .replace(/ /g, "_"),
                      tag_group_id: createdPropertyTagGroup.id,
                      tag_name: propertyValue.value,
                      display: true,
                      publishedAt: new Date().toISOString()
                    }
                  });
                })
              );
              createdItemTags.push(...createdPropertyTags.map((tag) => tag.id));
            }
            // create tags Tags and tag group
            const createdTagsTagGroup = await strapi.entityService.create(
              "api::tag-group.tag-group",
              {
                data: {
                  tag_group_name: "Tags",
                  code: "tags".toLowerCase().replace(/ /g, "_"),
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }
            );
            const createdTagsTags = await Promise.all(
              catalogue.tags.map(async (tag) => {
                return await strapi.entityService.create("api::tag.tag", {
                  data: {
                    value: tag,
                    code: tag.toLowerCase().replace(/ /g, "_"),
                    tag_group_id: createdTagsTagGroup.id,
                    tag_name: tag.toUpperCase().replace(/ /g, "_"),
                    display: true,
                    publishedAt: new Date().toISOString()
                  }
                });
              })
            );
            createdItemTags.push(...createdTagsTags.map((tag) => tag.id));

            // create taxGroups Tags and tag group
            const createdTaxGroupsTagGroup = await strapi.entityService.create(
              "api::tag-group.tag-group",
              {
                data: {
                  tag_group_name: "Tax Groups",
                  code: "taxGroups".toLowerCase().replace(/ /g, "_"),
                  display: true,
                  publishedAt: new Date().toISOString()
                }
              }
            );
            const createdTaxGroupsTags = await Promise.all(
              catalogue.taxGroups.map(async (taxGroup) => {
                return await strapi.entityService.create("api::tag.tag", {
                  data: {
                    value: taxGroup.slug,
                    code: taxGroup.slug.toLowerCase().replace(/ /g, "_"),
                    tag_group_id: createdTaxGroupsTagGroup.id,
                    tag_name: taxGroup.slug.toUpperCase().replace(/ /g, "_"),
                    display: true,
                    publishedAt: new Date().toISOString()
                  }
                });
              })
            );
            createdItemTags.push(...createdTaxGroupsTags.map((tag) => tag.id));

            // create Media
            const createdMedia = await strapi.entityService.create(
              "api::media.media",
              {
                data: {
                  url: catalogue.media[0].url,
                  size_type: "sm",
                  publishedAt: new Date().toISOString()
                }
              }
            );

            // create items for each variant

            for (const variant of catalogue.variants) {
              const createdItemSKU = await strapi.entityService.create(
                "api::sc-product.sc-product",
                {
                  data: {
                    sku: `${catalogue.vendorEntityId}-${variant.vendorEntityId}`,
                    downloadable: true,
                    min_price: variant.prices[0].price,
                    max_price: variant.prices[0].price,
                    on_sale: false,
                    stock_quantity: variant.inStock ? 100 : 0,
                    stock_status: variant.inStock ? "in_stock" : "out_of_stock",
                    rating_count: 1500,
                    average_rating: 4,
                    tax_status: "taxable",
                    tax_class: "taxable",
                    virtual: false,
                    currency: "INR",
                    additional_fee: "0",
                    base_fee: `${(variant.prices[0].price / 1.05).toFixed(2)}`,
                    quantity_unit: "pcs",
                    trusted_source: true,
                    cred_required: false,
                    recurring: false,
                    publishedAt: new Date().toISOString()
                  }
                }
              );

              // create cat_att_tag_relations
              const createdCatAttTagRelationsForTags = await Promise.all(
                [...createdItemTags, ...createdTags].map(async (tag) => {
                  return await strapi.entityService.create(
                    "api::cat-attr-tag-relation.cat-attr-tag-relation",
                    {
                      data: {
                        taxanomy: "TAG",
                        taxanomy_id: `${tag}`,
                        provider: provider_id,
                        publishedAt: new Date().toISOString()
                      }
                    }
                  );
                })
              );

              // create item

              const createItem = await strapi.entityService.create(
                "api::item.item",
                {
                  data: {
                    name: `${catalogue.name}`,
                    short_desc: `${catalogue.description} - ${variant.vendorEntityId}`,
                    code: `${catalogue.vendorEntityId}-${variant.vendorEntityId}`,
                    long_desc: `${catalogue.description}`,
                    image: createdMedia.id,
                    cat_attr_tag_relations:
                      createdCatAttTagRelationsForTags.map(
                        (relation) => relation.id
                      ),
                    sc_retail_product: createdItemSKU.id,
                    provider: provider_id,
                    max_quantity: variant.inStock ? 100 : 0,
                    min_quantity: variant.inStock ? 1 : 0,
                    publishedAt: new Date().toISOString()
                  }
                }
              );

              //create item-fulfillment
              const createdItemFulfillment = await strapi.entityService.create(
                "api::item-fulfillment.item-fulfillment",
                {
                  data: {
                    item_id: createItem.id,
                    fulfilment_id: 1,
                    location_id: provider[0]?.location_id?.id || 7,
                    timestamp: new Date().toISOString(),
                    publishedAt: new Date().toISOString()
                  }
                }
              );
              console.log("createdItemFulfillment===>", createdItemFulfillment);

              const priceBreakup = await strapi.entityService.create(
                "api::price-bareakup.price-bareakup",
                {
                  data: {
                    title: "GST",
                    currency: "INR",
                    is_item_qty_dependent: true,
                    sc_product: createdItemSKU.id,
                    price_breakup_category: 1,
                    publishedAt: new Date().toISOString()
                  }
                }
              );
            }
          }

          trx.commit();
        } catch (err) {
          console.log("Error in uploadCatalogFromPayload", err);
          trx.rollback();
        }
      });

      ctx.status = 200;
      ctx.body = {
        message: "Catalog uploaded and processed successfully"
      };
    } catch (error: any) {
      // Clean up temporary files in case of error

      console.log(error);
      ctx.status = 500;
      ctx.body = {
        error: "Failed to process catalog upload",
        message: error.message || "Unknown error"
      };
    }
  }
});
