
import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async login(ctx: any) {
        try {
            const { identifier, password } = ctx.request.body;

            // Validate required fields
            if (!identifier || !password) {
                return ctx.badRequest('Identifier and password are required');
            }

            // Find the user by email or username
            const user = await strapi.documents('plugin::users-permissions.user').findMany({
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

            if (!user[0].emailVerified) {
                return ctx.badRequest('Please verify your email before logging in');
            }

            if (user[0].blocked) {
                return ctx.badRequest('Your account has been blocked. Please contact support.');
            }

            if (user[0].accountStatus !== 'ACTIVE') {
                return ctx.badRequest('Your account is not active. Please contact support.');
            }

            // Generate JWT token
            const jwt = strapi.plugin('users-permissions').service('jwt').issue({ documentId: user[0].documentId, });

            // Sanitize user data
            const sanitizedUser = await strapi.contentAPI.sanitize.output(user[0], strapi.getModel('plugin::users-permissions.user'));

            ctx.send({ jwt, user: sanitizedUser });
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async sendEmailConfirmation(email: string) {
        try {
            const users = await strapi.documents('plugin::users-permissions.user').findMany({
                filters: { email }
            });
            if (!users?.length) {
                throw new Error('Email not found');
            }
            const user = users[0];
            const emailService = strapi.plugin('email').service('email');
            const FRONTEND_URL = strapi.config.get('server.frontendUrl', 'http://localhost:3000'); // Set frontend URL

            const confirmationLink = `${FRONTEND_URL}/email-confirmation?token=${user.verificationToken}`;

            const emailTemplate = `
      <p>Hello ${user.username},</p>
      <p>Thank you for signing up. Please confirm your email by clicking the link below:</p>
      <p><a href="${confirmationLink}">Confirm Email</a></p>
      <p>If you did not sign up, please ignore this email.</p>
    `;

            return await emailService.send({
                to: user.email,
                subject: 'Confirm Your Email Address',
                html: emailTemplate,
            });
        } catch (error) {
            throw error;
        }
    },

    async emailConfirmation(ctx: any) {
        try {
            const { confirmation } = ctx.request.query;
            const user = await strapi.documents('plugin::users-permissions.user').findMany({
                filters: { verificationToken: confirmation }
            });

            if (!user?.length) {
                throw new Error('Invalid verification token');
            }

            await strapi.documents('plugin::users-permissions.user').update({
                documentId: user[0].documentId,
                data: {
                    emailVerified: true,
                    verificationToken: null
                } as any
            });

            return { message: 'Your account has been confirmed' };
        } catch (error) {
            throw error;
        }
    }
})
