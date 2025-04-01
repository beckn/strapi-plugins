import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async findUserRole() {
        try {
            const role = await strapi.entityService.findMany('plugin::users-permissions.role', {
                filters: { type: 'user' }
            });
            return role?.[0];
        } catch (error) {
            throw new Error(error);
        }
    },

    async findAdminRole() {
        try {
            const role = await strapi.entityService.findMany('plugin::users-permissions.role', {
                filters: { type: 'admin' }
            });
            return role?.[0];
        } catch (error) {
            throw new Error(error);
        }
    },

    async findRoleById(id: number) {
        try {
            const role = await strapi.entityService.findOne('plugin::users-permissions.role', id);
            return role;
        } catch (error) {
            throw new Error(error);
        }
    }
}); 
