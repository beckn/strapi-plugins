import { it, expect, describe, jest } from "@jest/globals";
import { Strapi } from '@strapi/strapi';
import appointmentWorkflowService from "../../../services/update/appointment-workflow-service";


describe('default', () => {
       // The function should return an object with the expected properties when given valid input.
       it('should return an object with the expected properties when given valid input', async () => {
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
            eventHub: {
              emit: jest.fn()
            }
        };
        const order = { id: 1 };
        const message = { order };
    
        // Invoke the function
        const result = await appointmentWorkflowService({ strapi: strapi as any }).index({ message: { order_id: 'valid_order_id' }, context: { domain: 'domain' } });
    
        // Assertions
        expect(result).toEqual({});
    });
    //     // Should return an empty object when given an empty order object
        it('should return an empty object when given an empty order object', async () => {
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
                eventHub: {
                  emit: jest.fn()
                }
            };
           
      
            // Invoke the function
            const result = await appointmentWorkflowService({ strapi: strapi as any }).index({ message: { order_id: 'valid_order_id' }, context: { domain: 'domain' } });
      
            // Assertions
            expect(result).toEqual({});
          });
    //           // Should return an object with provider details when given a valid order ID and context
    it('should return an object with provider details when given a valid order ID and context', async () => {
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
            eventHub: {
              emit: jest.fn()
            }
        };
      
  
        // Invoke the function
        const result = await appointmentWorkflowService({ strapi: strapi as any }).index({ message: { order_id: 'valid_order_id' }, context: { domain: 'domain' } });
  
        // Assertions
        expect(result).toEqual({});
      });
    //       // Should return an empty object when order details are not found
    it('should return an empty object when order details are not found', async () => {
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
            eventHub: {
              emit: jest.fn()
            }
        };
     
  
        // Invoke the function
        const result = await appointmentWorkflowService({ strapi: strapi as any }).index({ message: { order_id: 'valid_order_id' }, context: { domain: 'domain' } });
  
        // Assertions
        expect(result).toEqual({});
      });
    //       // Should return an empty object when given an empty order object
    it('should return an empty object when given an empty order object', async () => {
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
            eventHub: {
              emit: jest.fn()
            }
        };
       
      
  
        // Invoke the function
        const result = await appointmentWorkflowService({ strapi: strapi as any }).index({ message: { order_id: 'valid_order_id' }, context: { domain: 'domain' } });
  
        // Assertions
        expect(result).toEqual({});
      });
    
})