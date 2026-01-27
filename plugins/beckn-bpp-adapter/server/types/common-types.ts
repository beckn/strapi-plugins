export interface KeyValuePair {
  [key: string]: any;
}

export interface CatalogPayload {
  outletId: string;
  charges: {
    slug: string;
    vendorEntityId: string;
    multiItem: boolean;
    chargeValue: number;
    applicableOnItem: boolean;
  }[];
  menu: {
    categories: [
      {
        vendorEntityId: string;
        name: string;
        subCategories: {
          vendorEntityId: string;
          name: string;
          entities: {
            entityType: string;
            vendorEntityId: string;
          }[];
        }[];
      }
    ];
    catalogues: {
      vendorEntityId: string;
      name: string;
      description: string;
      kind: string;
      inStock: boolean;
      shelfLife: {
        value: number;
        unit: "hours" | "days";
      };
      nutritionInfo: {
        calorieCount: number;
        healthyInfo: {
          proteinCount: {
            value: number;
            unit: "grams" | "mg";
          };
          fatCount: {
            value: number;
            unit: "grams" | "mg";
          };
          fiberCount: {
            value: number;
            unit: "grams" | "mg";
          };
          carbohydrateCount: {
            value: number;
            unit: "grams" | "mg";
          };
        };
      };
      allergenTypes: string[];
      properties: {
        vendorEntityId: string;
        name: string;
        propertyValues: {
          vendorEntityId: string;
          value: string;
        }[];
      }[];
      variants: {
        vendorEntityId: string;
        inStock: boolean;
        propertyValues: [
          {
            vendorEntityId: string;
          }
        ];
        prices: [
          {
            service: string;
            price: number;
            inStorePrice: number;
          }
        ];
        modifierGroups: [
          {
            vendorEntityId: string;
          }
        ];
      }[];
      tags: string[];
      taxGroups: [
        {
          slug: string;
        }
      ];
      media: {
        url: string;
        usageType: string;
      }[];
    }[];
    modifierGroups: {
      vendorEntityId: string;
      displayName: string;
      name: string;
      min: number;
      max: number;
      maxSelectionsPerItem: number;
      variants: {
        vendorEntityId: string;
      }[];
    }[];
  };
}
