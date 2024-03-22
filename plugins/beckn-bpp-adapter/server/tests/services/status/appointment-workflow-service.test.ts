import { it, expect, describe, jest } from "@jest/globals";
import { Strapi } from '@strapi/strapi';
import appointmentWorkflowService from "../../../services/status/appointment-workflow-service";


describe('default', () => {
    // The function should return an array of order details when given a valid order ID and context.
    it('should return an array of order details when given a valid order ID and context', async () => {
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
        expect(result).toEqual([]);
        expect(strapi.entityService.findMany).toHaveBeenCalledWith(
          "api::order-fulfillment.order-fulfillment",
          {
            filters: { order_id: 'valid_order_id' },
            populate: {"order_id":{"filters":{"domain":{"$eq":"domain"}},"populate":{"items":{"populate":{"sc_retail_product":{"populate":{"price_bareakup_ids":{},"product_cancel":{"populate":{"cancel_term_id":{}}}}},"cat_attr_tag_relations":{"filters":{"taxanomy":{"$in":["TAG","CATEGORY"]}}},"image":{},"item_fulfillment_id":{"populate":{"fulfilment_id":{"populate":{"agent_ids":{}}},"location_id":{}}},"item_meta_id":{"populate":{"fulfilment_id":{},"location_id":{}}},"provider":{"populate":{"logo":{},"location_id":{},"category_ids":{},"fulfillments":{},"payment_methods":{}}},"service":{}}},"order_address":{}}},"fulfilment_id":{},"customer_id":{},"agent_id":{},"order_fulfillment_location_id":{}}
          }
        );
        
         
      });

          // should populate order details with items, cat_attr_tag_relations, image, item_fulfillment_id, item_meta_id, sc_retail_product, provider, service, and order_address
    it('should populate order details with items, cat_attr_tag_relations, image, item_fulfillment_id, item_meta_id, sc_retail_product, provider, service, and order_address when given a valid order ID and context', async () => {
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
        eventHub: {
          emit: jest.fn()
        }
      };

      // Invoke the function
      const result = await appointmentWorkflowService({ strapi: strapi as any }).index({ message: { order_id: 'valid_order_id' }, context: { domain: 'domain' } });

      // Assertions
      expect(result).toEqual([]);
      expect(strapi.entityService.findMany).toHaveBeenCalledWith(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: { order_id: 'valid_order_id' },
          populate: {"order_id":{"filters":{"domain":{"$eq":"domain"}},"populate":{"items":{"populate":{"sc_retail_product":{"populate":{"price_bareakup_ids":{},"product_cancel":{"populate":{"cancel_term_id":{}}}}},"cat_attr_tag_relations":{"filters":{"taxanomy":{"$in":["TAG","CATEGORY"]}}},"image":{},"item_fulfillment_id":{"populate":{"fulfilment_id":{"populate":{"agent_ids":{}}},"location_id":{}}},"item_meta_id":{"populate":{"fulfilment_id":{},"location_id":{}}},"provider":{"populate":{"logo":{},"location_id":{},"category_ids":{},"fulfillments":{},"payment_methods":{}}},"service":{}}},"order_address":{}}},"fulfilment_id":{},"customer_id":{},"agent_id":{},"order_fulfillment_location_id":{}}
        }
      );
    });

    //     // should populate cat_attr_tag_relations with taxanomy_id for CATEGORY and TAG
        it('should populate cat_attr_tag_relations with taxanomy_id for CATEGORY and TAG when given a valid order ID and context', async () => {
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
            eventHub: {
              emit: jest.fn()
            }
          };
    
          // Invoke the function
          const result = await appointmentWorkflowService({ strapi: strapi as any }).index({ message: { order_id: 'valid_order_id' }, context: { domain: 'domain' } });
    
          // Assertions
          expect(result).toEqual([]);
          expect(strapi.entityService.findMany).toHaveBeenCalledWith(
            "api::order-fulfillment.order-fulfillment",
            {
              filters: { order_id: 'valid_order_id' },
              populate: {"order_id":{"filters":{"domain":{"$eq":"domain"}},"populate":{"items":{"populate":{"sc_retail_product":{"populate":{"price_bareakup_ids":{},"product_cancel":{"populate":{"cancel_term_id":{}}}}},"cat_attr_tag_relations":{"filters":{"taxanomy":{"$in":["TAG","CATEGORY"]}}},"image":{},"item_fulfillment_id":{"populate":{"fulfilment_id":{"populate":{"agent_ids":{}}},"location_id":{}}},"item_meta_id":{"populate":{"fulfilment_id":{},"location_id":{}}},"provider":{"populate":{"logo":{},"location_id":{},"category_ids":{},"fulfillments":{},"payment_methods":{}}},"service":{}}},"order_address":{}}},"fulfilment_id":{},"customer_id":{},"agent_id":{},"order_fulfillment_location_id":{}}
            }
          );
        });
    //         // should handle empty orderDetails array
    it('should return an empty array when orderDetails is empty', async () => {
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
        eventHub: {
          emit: jest.fn()
        }
      };

      // Invoke the function
      const result = await appointmentWorkflowService({ strapi: strapi as any }).index({ message: { order_id: 'valid_order_id' }, context: { domain: 'domain' } });

      // Assertions
      expect(result).toEqual([]);
      expect(strapi.entityService.findMany).toHaveBeenCalledWith(
        "api::order-fulfillment.order-fulfillment",
        {
          filters: { order_id: 'valid_order_id' },
          populate: {"order_id":{"filters":{"domain":{"$eq":"domain"}},"populate":{"items":{"populate":{"sc_retail_product":{"populate":{"price_bareakup_ids":{},"product_cancel":{"populate":{"cancel_term_id":{}}}}},"cat_attr_tag_relations":{"filters":{"taxanomy":{"$in":["TAG","CATEGORY"]}}},"image":{},"item_fulfillment_id":{"populate":{"fulfilment_id":{"populate":{"agent_ids":{}}},"location_id":{}}},"item_meta_id":{"populate":{"fulfilment_id":{},"location_id":{}}},"provider":{"populate":{"logo":{},"location_id":{},"category_ids":{},"fulfillments":{},"payment_methods":{}}},"service":{}}},"order_address":{}}},"fulfilment_id":{},"customer_id":{},"agent_id":{},"order_fulfillment_location_id":{}}
        }
      );
    });

    //     // should handle missing order_id in filters
        it('should handle missing order_id in filters when given a valid order ID and context', async () => {
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
            eventHub: {
              emit: jest.fn()
            }
          };
    
          // Invoke the function
          const result = await appointmentWorkflowService({ strapi: strapi as any }).index({ message: { order_id: 'valid_order_id' }, context: { domain: 'domain' } });
    
          // Assertions
          expect(result).toEqual([]);
          expect(strapi.entityService.findMany).toHaveBeenCalledWith(
            "api::order-fulfillment.order-fulfillment",
            {
              filters: { order_id: 'valid_order_id' },
              populate: {"order_id":{"filters":{"domain":{"$eq":"domain"}},"populate":{"items":{"populate":{"sc_retail_product":{"populate":{"price_bareakup_ids":{},"product_cancel":{"populate":{"cancel_term_id":{}}}}},"cat_attr_tag_relations":{"filters":{"taxanomy":{"$in":["TAG","CATEGORY"]}}},"image":{},"item_fulfillment_id":{"populate":{"fulfilment_id":{"populate":{"agent_ids":{}}},"location_id":{}}},"item_meta_id":{"populate":{"fulfilment_id":{},"location_id":{}}},"provider":{"populate":{"logo":{},"location_id":{},"category_ids":{},"fulfillments":{},"payment_methods":{}}},"service":{}}},"order_address":{}}},"fulfilment_id":{},"customer_id":{},"agent_id":{},"order_fulfillment_location_id":{}}
            }
          );
        });
    })