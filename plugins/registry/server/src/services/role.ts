import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async findUserRole() {
        try {
            const role = await strapi.documents('plugin::users-permissions.role').findMany({
                filters: { type: 'user' }
            });
            return role?.[0];
        } catch (error) {
            throw new Error(error);
        }
    },

    async findAdminRole() {
        try {
            const role = await strapi.documents('plugin::users-permissions.role').findMany({
                filters: { type: 'admin' }
            });
            return role?.[0];
        } catch (error) {
            throw new Error(error);
        }
    }
}); 
