import { it, expect, describe, jest } from "@jest/globals";
import { Strapi } from '@strapi/strapi';
import commerceWorkflowService from "../../../services/cancel/commerce-workflow-service";



describe('default', () => {

    // Creates media entries and connects them to return-cancellation entity
    it('should create media entries and connect them to return-cancellation entity', async () => {
        const strapi = {
            entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
                create:jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
                update:jest.fn<() => Promise<any[]>>().mockResolvedValue([])
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
        const obj = {
            message: {
                order_id: "123",
                cancellation_reason_id: "456",
                descriptor: {
                    media: [],
                    images: [],
                    short_desc: "Cancellation reason",
                },
            },
            context: {
                domain: "example.com",
                bap_id: "789",
            },
        };

        const createMediaEntriesMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([])
        const entityServiceCreateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([])
        const entityServiceFindManyMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([])
        const entityServiceUpdateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([])

        strapi.entityService.create = entityServiceCreateMock;
        strapi.entityService.findMany = entityServiceFindManyMock;
        strapi.entityService.update = entityServiceUpdateMock;

        jest.mock("../../../services/cancel/commerce-workflow-service", () => ({
            createMediaEntries: createMediaEntriesMock,
        }));

        await commerceWorkflowService({ strapi: strapi as any  }).index(obj);

        expect(createMediaEntriesMock).toHaveBeenCalledWith([]);
        expect(entityServiceCreateMock).toHaveBeenCalledWith("api::return-cancellation.return-cancellation", {
            data: {
                reason_id: "456",
                reason: "Cancellation reason",
                action_date_time: expect.any(String),
                done_by: "789",
                media: {
                    connect: [],
                },
                publishedAt: expect.any(String),
            },
        });
    });


    // Deletes media and images from descriptor object
    it('should delete media and images from descriptor object', async () => {
      const strapi = {
        entityService: {
          findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
          create: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
          update: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
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
          order_id: "123",
          cancellation_reason_id: "456",
          descriptor: {
            media: [],
            images: [],
            short_desc: "Cancellation reason"
          }
        },
        context: {
          domain: "example.com",
          bap_id: "789"
        }
      };

      const createMediaEntriesMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
      const entityServiceCreateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
      const entityServiceFindManyMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
      const entityServiceUpdateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);

      strapi.entityService.create = entityServiceCreateMock;
      strapi.entityService.findMany = entityServiceFindManyMock;
      strapi.entityService.update = entityServiceUpdateMock;

      jest.mock("../../../services/cancel/commerce-workflow-service", () => ({
        createMediaEntries: createMediaEntriesMock
      }));

      await commerceWorkflowService({ strapi: strapi as any }).index(obj);

      expect(createMediaEntriesMock).toHaveBeenCalledWith([]);
      expect(entityServiceCreateMock).toHaveBeenCalledWith("api::return-cancellation.return-cancellation", {
        data: {
          reason_id: "456",
          reason: "Cancellation reason",
          action_date_time: expect.any(String),
          done_by: "789",
          media: {
            connect: []
          },
          publishedAt: expect.any(String)
        }
      });
    });

    // Creates a return-cancellation entity with given data
    it('should create a return-cancellation entity with the given data', async () => {
      const strapi = {
        entityService: {
          findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
          create: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
          update: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
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
          order_id: "123",
          cancellation_reason_id: "456",
          descriptor: {
            media: [],
            images: [],
            short_desc: "Cancellation reason"
          }
        },
        context: {
          domain: "example.com",
          bap_id: "789"
        }
      };

      const createMediaEntriesMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
      const entityServiceCreateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
      const entityServiceFindManyMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
      const entityServiceUpdateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);

      strapi.entityService.create = entityServiceCreateMock;
      strapi.entityService.findMany = entityServiceFindManyMock;
      strapi.entityService.update = entityServiceUpdateMock;

     

      await commerceWorkflowService({ strapi: strapi as any }).index(obj);

      expect(createMediaEntriesMock).toHaveBeenCalledWith([]);
      expect(entityServiceCreateMock).toHaveBeenCalledWith("api::return-cancellation.return-cancellation", {
        data: {
          reason_id: "456",
          reason: "Cancellation reason",
          action_date_time: expect.any(String),
          done_by: "789",
          media: {
            connect: []
          },
          publishedAt: expect.any(String)
        }
      });
    });

        // Creates a return-cancellation entity with given data
        it('should create a return-cancellation entity with the given data', async () => {
            const strapi = {
              entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
                create: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
                update: jest.fn<() => Promise<any[]>>().mockResolvedValue([])
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
                order_id: "123",
                cancellation_reason_id: "456",
                descriptor: {
                  media: [],
                  images: [],
                  short_desc: "Cancellation reason"
                }
              },
              context: {
                domain: "example.com",
                bap_id: "789"
              }
            };
      
            const createMediaEntriesMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
            const entityServiceCreateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
            const entityServiceFindManyMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
            const entityServiceUpdateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([]);
      
            strapi.entityService.create = entityServiceCreateMock;
            strapi.entityService.findMany = entityServiceFindManyMock;
            strapi.entityService.update = entityServiceUpdateMock;
      
            jest.mock("../../../services/cancel/commerce-workflow-service", () => ({
              createMediaEntries: createMediaEntriesMock
            }));
      
            await commerceWorkflowService({ strapi: strapi as any }).index(obj);
      
            expect(createMediaEntriesMock).toHaveBeenCalledWith([]);
            expect(entityServiceCreateMock).toHaveBeenCalledWith("api::return-cancellation.return-cancellation", {
              data: {
                reason_id: "456",
                reason: "Cancellation reason",
                action_date_time: expect.any(String),
                done_by: "789",
                media: {
                  connect: []
                },
                publishedAt: expect.any(String)
              }
            });
          });
              // No media items provided, returns empty array
    it('should return empty array when no media items provided', async () => {
        const strapi = {
            entityService: {
                findMany: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
                create:jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
                update:jest.fn<() => Promise<any[]>>().mockResolvedValue([])
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
        const obj = {
            message: {
                order_id: "123",
                cancellation_reason_id: "456",
                descriptor: {
                    media: [],
                    images: [],
                    short_desc: "Cancellation reason",
                },
            },
            context: {
                domain: "example.com",
                bap_id: "789",
            },
        };

        const createMediaEntriesMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([])
        const entityServiceCreateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([])
        const entityServiceFindManyMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([])
        const entityServiceUpdateMock = jest.fn<() => Promise<any[]>>().mockResolvedValue([])

        strapi.entityService.create = entityServiceCreateMock;
        strapi.entityService.findMany = entityServiceFindManyMock;
        strapi.entityService.update = entityServiceUpdateMock;

        jest.mock("../../../services/cancel/commerce-workflow-service", () => ({
            createMediaEntries: createMediaEntriesMock,
        }));

        const result = await commerceWorkflowService({ strapi: strapi as any  }).index(obj);

        expect(createMediaEntriesMock).toHaveBeenCalledWith([]);
        expect(entityServiceCreateMock).not.toHaveBeenCalled();
        expect(result).toEqual([]);
    });
});




   

 


    
