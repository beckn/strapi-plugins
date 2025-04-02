import { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async signup(ctx) {
        try {
            const { email, password } = ctx.request.body;
            const userService = strapi.plugin("registry").service("user");
            const roleService = strapi.plugin("registry").service("role");

            const role = await roleService.findUserRole();
            if (!role) {
                throw new Error('No user role found');
            }
            const user = await userService.createUser({ username: email, email, password, role: role.documentId });

            // Use Strapi's sanitizeEntity to remove sensitive fields
            const sanitizedUser = await strapi.contentAPI.sanitize.output(user, strapi.getModel('plugin::users-permissions.user'));
            const jwt = strapi.plugin('users-permissions').service('jwt').issue({
                documentId: user.documentId,
            });

            ctx.created({ jwt, user: sanitizedUser });
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async me(ctx) {
        try {
            const userService = strapi.plugin("registry").service("user");
            const user = await userService.me(ctx.state.user);
            ctx.send(user);
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async getUsers(ctx) {
        try {
            const userService = strapi.plugin("registry").service("user");
            const users = await userService.getUsers();
            ctx.send(users);
        } catch (error) {
            ctx.badRequest(error);
        }
    }
});
