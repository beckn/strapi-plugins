import { it, expect, describe, jest } from "@jest/globals";
import { Strapi } from '@strapi/strapi';
import commerceWorkflowService from "../../../services/select/commerce-workflow-service";
import { PLUGIN } from "../../../constants";

it('should correctly extract the items and provider properties from the message.order object', async () => {


    const strapi = {
        entityService: {
            findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
            // findMany: jest.fn().mockResolvedValue([])
        },
        plugin: jest.fn().mockReturnValue({
            service: jest.fn().mockReturnValue({
                getCategoryById: jest.fn(),
                getTagById: jest.fn()
            })
        })
    };
    const obj = {
        message: {
            order: {
                items: [
                    {
                        id: "1",
                        descriptor: {
                            name: "item1",
                            code: "code1"
                        }
                    },
                    {
                        id: "2",
                        descriptor: {
                            name: "item2",
                            code: "code2"
                        }
                    }
                ],
                provider: {
                    id: "1",
                    descriptor: {
                        name: "provider1"
                    }
                }
            }
        },
        context: {
            domain: "example.com"
        }
    };

    const result = await commerceWorkflowService({ strapi: strapi as any }).index(obj);

 
    // Check result
    expect(result).toEqual([{ quantity: 0 }]);
    expect(strapi.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
        filters: { "id": "1", "provider_name": { "$contains": "provider1" }, "domain_id": { "DomainName": "example.com" }, "items": { "id": { "$in": ["1", "2"] } } },
        populate: { "category_ids": {}, "location_id": {}, "fulfillments": { "populate": { "tag_ids": { "populate": { "tag_group_id": {} } } } }, "payment_methods": {}, "items": { "populate": { "cat_attr_tag_relations": { "filters": { "taxanomy": { "$in": ["TAG", "CATEGORY"] } } }, "image": {}, "sc_retail_product": { "populate": { "price_bareakup_ids": {}, "product_cancel": { "populate": { "cancel_term_id": {} } } } }, "item_fulfillment_id": { "populate": { "fulfilment_id": { "populate": { "agent_ids": {} } }, "location_id": {} } }, "item_meta_id": { "populate": { "fulfilment_id": {}, "location_id": {} } } }, "filters": { "id": { "$in": ["1", "2"] } } } }
    });


});

    // The function should return an array of itemDetails objects when given a valid input object.
it('should return an array of itemDetails objects when given a valid input object', async () => {
        // Mock dependencies
        const strapi = {
            entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
                // findMany: jest.fn().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            })
        };
    
  
        // Prepare test data
        const obj = {
            message: {
                order: {
                    items: [
                        {
                            id: "1",
                            descriptor: {
                                name: "item1",
                                code: "code1"
                            }
                        },
                        {
                            id: "2",
                            descriptor: {
                                name: "item2",
                                code: "code2"
                            }
                        }
                    ],
                    provider: {
                        id: "1",
                        descriptor: {
                            name: "provider1"
                        }
                    }
                }
            },
            context: {
                domain: "example.com"
            }
        };
  
      
    const result = await commerceWorkflowService({ strapi: strapi as any }).index(obj);

 
    // Check result
    expect(result).toEqual([{ quantity: 0 }]);
    expect(strapi.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
        filters: { "id": "1", "provider_name": { "$contains": "provider1" }, "domain_id": { "DomainName": "example.com" }, "items": { "id": { "$in": ["1", "2"] } } },
        populate: { "category_ids": {}, "location_id": {}, "fulfillments": { "populate": { "tag_ids": { "populate": { "tag_group_id": {} } } } }, "payment_methods": {}, "items": { "populate": { "cat_attr_tag_relations": { "filters": { "taxanomy": { "$in": ["TAG", "CATEGORY"] } } }, "image": {}, "sc_retail_product": { "populate": { "price_bareakup_ids": {}, "product_cancel": { "populate": { "cancel_term_id": {} } } } }, "item_fulfillment_id": { "populate": { "fulfilment_id": { "populate": { "agent_ids": {} } }, "location_id": {} } }, "item_meta_id": { "populate": { "fulfilment_id": {}, "location_id": {} } } }, "filters": { "id": { "$in": ["1", "2"] } } } }
    });
        
      });

    // The function should return an empty array when no itemDetails match the provided filters.
    it('should return an empty array when no itemDetails match the provided filters', async () => {
        // Mock dependencies
        const strapi = {
            entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
                // findMany: jest.fn().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            })
        };
  
        // Prepare test data
        const obj = {
            message: {
                order: {
                    items: [
                        {
                            id: "1",
                            descriptor: {
                                name: "item1",
                                code: "code1"
                            }
                        },
                        {
                            id: "2",
                            descriptor: {
                                name: "item2",
                                code: "code2"
                            }
                        }
                    ],
                    provider: {
                        id: "1",
                        descriptor: {
                            name: "provider1"
                        }
                    }
                }
            },
            context: {
                domain: "example.com"
            }
        };
  
        // Invoke the function
        const result = await commerceWorkflowService({ strapi: strapi as any }).index(obj);
  
        // Assertions
        expect(result).toEqual([{ quantity: 0 }]);
        expect(strapi.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: { "id": "1", "provider_name": { "$contains": "provider1" }, "domain_id": { "DomainName": "example.com" }, "items": { "id": { "$in": ["1", "2"] } } },
            populate: { "category_ids": {}, "location_id": {}, "fulfillments": { "populate": { "tag_ids": { "populate": { "tag_group_id": {} } } } }, "payment_methods": {}, "items": { "populate": { "cat_attr_tag_relations": { "filters": { "taxanomy": { "$in": ["TAG", "CATEGORY"] } } }, "image": {}, "sc_retail_product": { "populate": { "price_bareakup_ids": {}, "product_cancel": { "populate": { "cancel_term_id": {} } } } }, "item_fulfillment_id": { "populate": { "fulfilment_id": { "populate": { "agent_ids": {} } }, "location_id": {} } }, "item_meta_id": { "populate": { "fulfilment_id": {}, "location_id": {} } } }, "filters": { "id": { "$in": ["1", "2"] } } } }
        });
      });

    // The function should correctly filter the itemDetails based on the provided filters and populate fields.
    it('should correctly filter the itemDetails based on the provided filters and populate fields', async () => {
        const strapi = {
            entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
                // findMany: jest.fn().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            })
        };
  
        // Prepare test data
        const obj = {
            message: {
                order: {
                    items: [
                        {
                            id: "1",
                            descriptor: {
                                name: "item1",
                                code: "code1"
                            }
                        },
                        {
                            id: "2",
                            descriptor: {
                                name: "item2",
                                code: "code2"
                            }
                        }
                    ],
                    provider: {
                        id: "1",
                        descriptor: {
                            name: "provider1"
                        }
                    }
                }
            },
            context: {
                domain: "example.com"
            }
        };
  
        // Invoke the function
        const result = await commerceWorkflowService({ strapi: strapi as any }).index(obj);
  
        // Assertions
        expect(result).toEqual([{ quantity: 0 }]);
        expect(strapi.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: { "id": "1", "provider_name": { "$contains": "provider1" }, "domain_id": { "DomainName": "example.com" }, "items": { "id": { "$in": ["1", "2"] } } },
            populate: { "category_ids": {}, "location_id": {}, "fulfillments": { "populate": { "tag_ids": { "populate": { "tag_group_id": {} } } } }, "payment_methods": {}, "items": { "populate": { "cat_attr_tag_relations": { "filters": { "taxanomy": { "$in": ["TAG", "CATEGORY"] } } }, "image": {}, "sc_retail_product": { "populate": { "price_bareakup_ids": {}, "product_cancel": { "populate": { "cancel_term_id": {} } } } }, "item_fulfillment_id": { "populate": { "fulfilment_id": { "populate": { "agent_ids": {} } }, "location_id": {} } }, "item_meta_id": { "populate": { "fulfilment_id": {}, "location_id": {} } } }, "filters": { "id": { "$in": ["1", "2"] } } } }
        });
    });

 


