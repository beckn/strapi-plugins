
import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async local(ctx) {
        try {
            const { identifier, password } = ctx.request.body;

            // Validate required fields
            if (!identifier || !password) {
                return ctx.badRequest('Identifier and password are required');
            }

            // Find the user by email or username
            const user = await strapi.entityService.findMany('plugin::users-permissions.user', {
                filters: {
                    $or: [
                        { email: identifier },
                        { username: identifier }
                    ]
                },
                populate: ['role']
            });
            if (!user?.length) {
                return ctx.badRequest('Invalid identifier or password');
            }

            const validPassword = await strapi.plugin('users-permissions').service('user').validatePassword(
                password,
                user[0].password
            );
            if (!validPassword) {
                return ctx.badRequest('Invalid identifier or password');
            }

            if (!user[0].email_verified) {
                return ctx.badRequest('Please verify your email before logging in');
            }

            if (user[0].blocked) {
                return ctx.badRequest('Your account has been blocked. Please contact support.');
            }

            if (user[0].account_status !== 'ACTIVE') {
                return ctx.badRequest('Your account is not active. Please contact support.');
            }

            // Generate JWT token
            const jwt = strapi.plugin('users-permissions').service('jwt').issue({
                id: user[0].id,
            });

            // Sanitize user data
            const sanitizedUser = await strapi.contentAPI.sanitize.output(user[0], strapi.getModel('plugin::users-permissions.user'));

            ctx.send({ jwt, user: sanitizedUser });
        } catch (error) {
            ctx.badRequest(error);
        }
    }
})
