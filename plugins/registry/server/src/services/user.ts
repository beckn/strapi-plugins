import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async createUser(userData) {
        try {
            const existingUser = await strapi.entityService.findMany('plugin::users-permissions.user', { filters: { email: userData.email } });
            if (existingUser?.length) {
                throw new Error('User already exists');
            }
            const user = await strapi.entityService.create('plugin::users-permissions.user', {
                data: userData,
                populate: ['role']
            });

            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
});
