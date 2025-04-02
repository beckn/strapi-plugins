import type { Core } from '@strapi/strapi';
import crypto from 'crypto';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async createUser(userData) {
        try {
            const existingUser = await strapi.documents('plugin::users-permissions.user').findMany({ filters: { email: userData.email } });
            if (existingUser?.length) {
                const user = existingUser[0];
                if (!user.emailVerified) {
                    // Generate new verification token
                    const verificationToken = crypto.randomBytes(32).toString('hex');

                    // Update user with new verification token and password
                    await strapi.documents('plugin::users-permissions.user').update({
                        documentId: user.documentId,
                        data: {
                            verificationToken,
                            password: userData.password
                        } as any
                    });

                    // Resend verification email
                    const authService = strapi.plugin("registry").service("auth");
                    await authService.sendEmailConfirmation(userData.email);

                    throw new Error('Email already exists. Please check your email for verification link');
                }
                throw new Error('User already exists');
            }

            // Generate verification token
            const verificationToken = crypto.randomBytes(32).toString('hex');

            // Create user with verification token
            const user = await strapi.documents('plugin::users-permissions.user').create({
                data: {
                    ...userData,
                    emailVerified: false,
                    verificationToken: verificationToken
                },
                populate: ['role']
            });

            const authService = strapi.plugin("registry").service("auth");
            // Send verification email in background
            authService.sendEmailConfirmation(userData.email);

            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
});
