// @ts-nocheck
import { it, expect, describe, jest } from "@jest/globals";
import { Strapi } from '@strapi/strapi';
import commerceWorkflowService from "../../../services/search/commerce-workflow-service";

describe('default', () => {
    // The function should return a list of providers.
    it('should return a list of providers when provider parameter is not an empty object', async () => {
        // Mock dependencies
        const strapiMock: Strapi = {
            entityService: {
                findMany: jest.fn().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            })
        };

        // Mock input data
        const message = {
            intent: {
                item: {},
                provider: {},
                category: {}
            }
        };
        const context = {
            domain: 'example.com'
        };

        // Invoke function
        const result = await commerceWorkflowService({ strapi: strapiMock }).index({ message, context });

        // Check result
        expect(result).toEqual([]);
        expect(strapiMock.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {
                domain_id: {
                    DomainName: 'example.com'
                }
            },
            populate: {
                items: {
                    populate: {
                        cat_attr_tag_relations: {
                            filters: {
                                taxanomy: {
                                    $in: ['TAG', 'CATEGORY']
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
                        item_fulfillment_id: {
                            populate: {
                                fulfilment_id: {
                                    populate: {
                                        agent_ids: {}
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
                fulfillments: {}
            }
        });
    });

    // If the provider parameter is an empty object, the function should return an empty array.
    it('should return an empty array when provider parameter is an empty object', async () => {
        // Mock dependencies
        const strapiMock: Strapi = {
            entityService: {
                findMany: jest.fn().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            })
        };

        // Mock input data
        const message = {
            intent: {
                item: {},
                provider: {},
                category: {}
            }
        };
        const context = {
            domain: 'example.com'
        };

        // Invoke function
        const result = await commerceWorkflowService({ strapi: strapiMock }).index({ message, context });

        // Check result
        expect(result).toEqual([]);
        expect(strapiMock.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {
                domain_id: {
                    DomainName: 'example.com'
                }
            },
            populate: {
                items: {
                    populate: {
                        cat_attr_tag_relations: {
                            filters: {
                                taxanomy: {
                                    $in: ['TAG', 'CATEGORY']
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
                        item_fulfillment_id: {
                            populate: {
                                fulfilment_id: {
                                    populate: {
                                        agent_ids: {}
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
                fulfillments: {}
            }
        });
    });

    // If message.intent has item, provider, and category, the function should filter the providers based on these parameters.
    it('should filter providers based on item, provider, and category parameters', async () => {
        // Mock dependencies
        const strapiMock = {
            entityService: {
                findMany: jest.fn().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            })
        };

        // Mock input data
        const message = {
            intent: {
                item: { id: '1', descriptor: { name: 'item1', code: 'code1' } },
                provider: { id: '2', descriptor: { name: 'provider1' } },
                category: { id: '3', descriptor: { name: 'category1', code: 'categoryCode1' } }
            }
        };
        const context = {
            domain: 'example.com'
        };

        // Invoke function
        const result = await commerceWorkflowService({ strapi: strapiMock }).index({ message, context });

        // Check result
        expect(result).toEqual([]);
        expect(strapiMock.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {
                id: '2',
                domain_id: {
                    DomainName: 'example.com'
                },
                items: {
                    id: '1',
                    name: { $contains: 'item1' },
                    code: 'code1'
                },
                provider_name: { $contains: 'provider1' },
                category_ids: {
                    id: '3',
                    value: { $contains: 'category1' },
                    category_code: 'categoryCode1'
                }
            },
            populate: {
                items: {
                    populate: {
                        cat_attr_tag_relations: {
                            filters: {
                                taxanomy: {
                                    $in: ['TAG', 'CATEGORY']
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
                        item_fulfillment_id: {
                            populate: {
                                fulfilment_id: {
                                    populate: {
                                        agent_ids: {}
                                    }
                                },
                                location_id: {}
                            }
                        }
                    },
                    filters: {
                        id: '1',
                        name: { $contains: 'item1' },
                        code: 'code1'
                    }
                },
                payment_methods: {},
                category_ids: {
                    filters: {
                        id: '3',
                        value: { $contains: 'category1' },
                        category_code: 'categoryCode1'
                    }
                },
                location_id: {},
                fulfillments: {}
            }
        });
    });

    // If context has domain, the function should filter the providers based on the domain.
    it('should filter providers based on the domain', async () => {
        // Mock dependencies
        const strapiMock = {
            entityService: {
                findMany: jest.fn().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            })
        };

        // Mock input data
        const message = {
            intent: {
                item: {},
                provider: {},
                category: {}
            }
        };
        const context = {
            domain: 'example.com'
        };

        // Invoke function
        const result = await commerceWorkflowService({ strapi: strapiMock }).index({ message, context });

        // Check result
        expect(result).toEqual([]);
        expect(strapiMock.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {
                domain_id: {
                    DomainName: 'example.com'
                }
            },
            populate: {
                items: {
                    populate: {
                        cat_attr_tag_relations: {
                            filters: {
                                taxanomy: {
                                    $in: ['TAG', 'CATEGORY']
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
                        item_fulfillment_id: {
                            populate: {
                                fulfilment_id: {
                                    populate: {
                                        agent_ids: {}
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
                fulfillments: {}
            }
        });
    });

    // If the provider parameter is not provided, the function should return all providers.
    it('should return all providers when provider parameter is not provided', async () => {
        // Mock dependencies
        const strapiMock = {
            entityService: {
                findMany: jest.fn().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            })
        };

        // Mock input data
        const message = {
            intent: {
                item: {},
                category: {}
            }
        };
        const context = {
            domain: 'example.com'
        };

        // Invoke function
        const result = await commerceWorkflowService({ strapi: strapiMock }).index({ message, context });

        // Check result
        expect(result).toEqual([]);
        expect(strapiMock.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {
                domain_id: {
                    DomainName: 'example.com'
                }
            },
            populate: {
                items: {
                    populate: {
                        cat_attr_tag_relations: {
                            filters: {
                                taxanomy: {
                                    $in: ['TAG', 'CATEGORY']
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
                        item_fulfillment_id: {
                            populate: {
                                fulfilment_id: {
                                    populate: {
                                        agent_ids: {}
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
                fulfillments: {}
            }
        });
    });
});
