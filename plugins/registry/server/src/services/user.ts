import type { Core } from '@strapi/strapi';
import crypto from 'crypto';
import { getAuthService } from '../utils/service';
import { sanitizeUser, sanitizeUsers } from '../utils/user';
export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async createUser(userData) {
        try {
            const existingUser = await strapi.documents('plugin::users-permissions.user').findMany({ filters: { email: userData.email } });
            if (existingUser?.length) {
                const user = existingUser[0];
                if (!user.emailVerified) {
                    // Generate new verification token
                    const verificationToken = crypto.randomBytes(32).toString('hex');

                    // Update user with new verification token
                    await strapi.documents('plugin::users-permissions.user').update({
                        documentId: user.documentId,
                        data: { verificationToken } as any
                    });

                    // Resend verification email
                    await getAuthService(strapi).sendEmailConfirmation(userData.email);

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

            // Send verification email in background
            getAuthService(strapi).sendEmailConfirmation(userData.email);

            return sanitizeUser(user);

        } catch (error) {
            throw new Error(error);
        }
    },

    async me(user) {
        const fetchedUser = await strapi.documents('plugin::users-permissions.user').findOne({ documentId: user.documentId, populate: 'role' });
        return await sanitizeUser(fetchedUser);
    },

    async getUsers() {
        const users = await strapi.documents('plugin::users-permissions.user').findMany({ populate: ['role'] });
        return await sanitizeUsers(users);
    }
});
