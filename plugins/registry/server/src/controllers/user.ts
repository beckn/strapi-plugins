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
            const user = await userService.createUser({ username: email, email, password, role: role.id });

            // Use Strapi's sanitizeEntity to remove sensitive fields
            const sanitizedUser = await strapi.contentAPI.sanitize.output(user, strapi.getModel('plugin::users-permissions.user'));
            const jwt = strapi.plugin('users-permissions').service('jwt').issue({
                id: user.id,
            });

            const response = { jwt, user: sanitizedUser };
            if (process.env.NODE_ENV === 'development') {
                response.verificationToken = user.verificationToken;
            }

            ctx.created(response);
        } catch (error) {
            ctx.badRequest(error);
        }
    }
});
