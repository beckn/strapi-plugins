// @ts-nocheck
import { it, expect, describe, jest } from "@jest/globals";
import { Strapi } from '@strapi/strapi';
import appointmentWorkflowService from "../../../services/search/appointment-workflow-service";

describe('default', () => {
    // The function should return a list of providers.
    it('should return a list of providers when the function is invoked', () => {
        // Mock dependencies
        const strapi: Strapi = {
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

        // Invoke the function
        const result = appointmentWorkflowService({ strapi }).index({ message: { intent: {} }, context: {} });
        // Check the result
        expect(result).resolves.toEqual([]);
        expect(strapi.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {},
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
                        service: {},
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

    // The function should filter providers based on the given provider object.
    it('should filter providers based on the given provider object when the function is invoked', () => {
        // Mock dependencies
        const strapi = {
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

        // Invoke the function
        const result = appointmentWorkflowService({ strapi }).index({ message: { intent: { provider: { id: '123' } } }, context: {} });

        // Check the result
        expect(result).resolves.toEqual([]);
        expect(strapi.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {
                id: '123'
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
                        service: {},
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

    // The message object may not have an intent property.
    it('should handle the case when the message object does not have an intent property', () => {
        // Mock dependencies
        const strapi = {
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

        // Invoke the function
        const result = appointmentWorkflowService({ strapi }).index({ message: {}, context: {} });

        // Check the result
        expect(result).resolves.toEqual([]);
        expect(strapi.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {},
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
                        service: {},
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

    // The context object may not have a domain property.
    it('should handle the case when the context object does not have a domain property', () => {
        // Mock dependencies
        const strapi = {
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

        // Invoke the function
        const result = appointmentWorkflowService({ strapi }).index({ message: { intent: {} }, context: {} });

        // Check the result
        expect(result).resolves.toEqual([]);
        expect(strapi.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {},
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
                        service: {},
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

    // The provider, item, and category objects may not have all the required properties.
    it.only('should handle the case when the provider, item, and category objects do not have all the required properties', () => {
        // Mock dependencies
        const strapi = {
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

        // Invoke the function
        const result = appointmentWorkflowService({ strapi }).index({ message: { intent: { provider: {}, item: {}, category: {} } }, context: {} });

        // Check the result
        expect(result).resolves.toEqual([]);
        expect(strapi.entityService.findMany).toHaveBeenCalledWith('api::provider.provider', {
            filters: {
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
                        service: {},
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

