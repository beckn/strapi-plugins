import type { Core } from '@strapi/strapi';
import crypto from 'crypto';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async createUser(userData) {
        try {
            const existingUser = await strapi.entityService.findMany('plugin::users-permissions.user', { filters: { email: userData.email } });
            if (existingUser?.length) {
                throw new Error('User already exists');
            }

            // Generate verification token
            const verificationToken = crypto.randomBytes(32).toString('hex');

            // Create user with verification token
            const user = await strapi.entityService.create('plugin::users-permissions.user', {
                data: {
                    ...userData,
                    emailVerified: false,
                    verificationToken: verificationToken
                },
                populate: ['role']
            });

            // Send verification email in background
            strapi.plugin('email').service('email').send({
                to: userData.email,
                subject: 'Verify your email',
                text: `Please verify your email by clicking this link: ${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`,
                html: `
                    <h1>Verify your email</h1>
                    <p>Please click the link below to verify your email:</p>
                    <a href="${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}">Verify Email</a>
                `
            }).catch(error => {
                strapi.log.error('Failed to send verification email:', error);
            });

            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
});
