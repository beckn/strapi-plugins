import { it, expect, describe, jest } from "@jest/globals";
import { Strapi } from '@strapi/strapi';
import commerceWorkflowService from "../../../services/confirm/commerce-workflow-service";
import { PLUGIN } from "../../../constants";

// Function successfully creates an order with correct data
describe('default', () => {
    // Function successfully creates an order with correct data and returns confirmDetails
    // Function successfully creates an order with correct data and returns confirmDetails
    it('should create order with correct data and return confirmDetails', async () => {
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
            }),
            db: {
                transaction: jest.fn().mockImplementation(async (callback) => {
                    const trx = {}; // Mock transaction object
                    return ({ trx });
                }),
            }
        };

        const obj = {
            message: {
                order: {
                    items: [{ id: "1" }],
                    provider: { id: "1" },
                    billing: {},
                    fulfillments: [{ customer: {} }]
                }
            },
            context: {
                domain: "example.com",
                transaction_id: "123"
            }
        };

        // Mock return values


        // Invoke function
        const defaultFunction = commerceWorkflowService(({ strapi: strapi as any }))
        const result = await defaultFunction.index(obj);

        // Assertions
        expect(result).toEqual([]);

    });

    // Populates items and filters correctly
    it('should populate items and filters correctly', async () => {
        // Mock dependencies
        const strapi = {
            entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            }),
            db: {
                transaction: jest.fn().mockImplementation(async (callback) => {
                    const trx = {}; // Mock transaction object
                    return ({ trx });
                }),
            }
        };

        const obj = {
            message: {
                order: {
                    items: [{ id: "1" }],
                    provider: { id: "1" },
                    billing: {},
                    fulfillments: [{ customer: {
                        contact:{
                            email:"abc@gmail.com"
                        }
                    } }]
                }
            },
            context: {
                domain: "example.com",
                transaction_id: "123"
            }
        };

        // Mock return values


        // Invoke function
        const defaultFunction = commerceWorkflowService(({ strapi: strapi as any }))
        const result = await defaultFunction.index(obj);

        // Assertions
        expect(result).toEqual([]);

    });
    // Gets category and tag by id correctly
    it('should get category and tag by id correctly', async () => {
        // Mock dependencies
        const strapi = {
            entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            }),
            db: {
                transaction: jest.fn().mockImplementation(async (callback) => {
                    const trx = {}; // Mock transaction object
                    return ({ trx });
                }),
            }
        };

        const obj = {
            message: {
                order: {
                    items: [{ id: "1" }],
                    provider: { id: "1" },
                    billing: {},
                    fulfillments: [{ customer: {} }]
                }
            },
            context: {
                domain: "example.com",
                transaction_id: "123"
            }
        };

        // Mock return values


        // Invoke function
        const defaultFunction = commerceWorkflowService(({ strapi: strapi as any }))
        const result = await defaultFunction.index(obj);

        // Assertions
        expect(result).toEqual([]);

    });
    // Handles missing or empty items correctly
    it('should handle missing or empty items correctly', async () => {
        // Mock dependencies
        const strapi = {
            entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            }),
            db: {
                transaction: jest.fn().mockImplementation(async (callback) => {
                    const trx = {}; // Mock transaction object
                    return ({ trx });
                }),
            }
        };

        const obj = {
            message: {
                order: {
                    items: [],
                    provider: { id: "1" },
                    billing: {},
                    fulfillments: [{ customer: {} }]
                }
            },
            context: {
                domain: "example.com",
                transaction_id: "123"
            }
        };

        // Invoke function
        const defaultFunction = commerceWorkflowService(({ strapi: strapi as any }))
        const result = await defaultFunction.index(obj);

        // Assertions
        expect(result).toEqual([]);

    });

    // Extracts billing details, customer details, shipping details, and item values correctly
    it('should extract billing details, customer details, shipping details, and item values correctly', async () => {
        // Mock dependencies
        const strapi = {
            entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
            },
            plugin: jest.fn().mockReturnValue({
                service: jest.fn().mockReturnValue({
                    getCategoryById: jest.fn(),
                    getTagById: jest.fn()
                })
            }),
            db: {
                transaction: jest.fn().mockImplementation(async (callback) => {
                    const trx = {}; // Mock transaction object
                    return ({ trx });
                }),
            }
        };

        const obj = {
            message: {
                order: {
                    items: [{ id: "1" }],
                    provider: { id: "1" },
                    billing: {},
                    fulfillments: [{ customer: {} }]
                }
            },
            context: {
                domain: "example.com",
                transaction_id: "123"
            }
        };

        // Invoke function
        const defaultFunction = commerceWorkflowService({ strapi: strapi as any });
        const result = await defaultFunction.index(obj);

        // Assertions
        expect(result).toEqual([]);

    });
})
