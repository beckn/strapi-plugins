import type { Core } from '@strapi/strapi';
import crypto from 'crypto';
import { getAuthService, getRoleService } from '../utils/service';
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

    async add(ctx: any) {
        const userData = ctx.request.body;

        // Check if user already exists
        const existingUser = await strapi.documents('plugin::users-permissions.user').findMany({ filters: { email: userData.email } });
        if (existingUser?.length) {
            throw new Error('User already exists');
        }

        // Set username to email
        userData.username = userData.email;

        // Set email verified to true
        userData.emailVerified = true;

        // Set role to user
        const role = await getRoleService(strapi).findUserRole();
        userData.role = role.documentId;

        // Create user
        const user = await strapi.documents('plugin::users-permissions.user').create({
            data: userData,
            populate: ['role']
        });

        // sanitize user and return
        return sanitizeUser(user);
    },

    async me(user) {
        const fetchedUser = await strapi.documents('plugin::users-permissions.user').findOne({ documentId: user.documentId, populate: 'role' });
        return await sanitizeUser(fetchedUser);
    },

    async getUsers(ctx: any) {
        const page = ctx.query.pagination.page || 1;
        const pageSize = ctx.query.pagination.pageSize || 10;

        const total = await strapi.db.query('plugin::users-permissions.user').count({
            filters: ctx.query.filters
        });

        const pageCount = Math.ceil(total / pageSize);

        const limit = pageSize;
        const start = page ? (page - 1) * limit : 0;

        const userList = await strapi.plugin('users-permissions').service('user').fetchAll({
            ...(ctx.query || {}),
            start: start,
            limit: limit
        });
        const users = await sanitizeUsers(userList);
        return { results: users, pagination: { page, pageSize, pageCount, total } };
    },

    async getUser(ctx: any) {
        const { documentId } = ctx.params;
        const user = await strapi.documents('plugin::users-permissions.user').findOne({ documentId, populate: 'role' });
        if (!user) {
            throw new Error('User not found');
        }
        return await sanitizeUser(user);
    },

    async updateMe(ctx: any) {
        const { documentId } = ctx.state.user;
        const { fullName, phoneNumber, alternatePhoneNumber } = ctx.request.body;
        const updatedUser = await strapi.documents('plugin::users-permissions.user').update({
            documentId,
            data: { fullName, phoneNumber, alternatePhoneNumber } as any,
            populate: ['role']
        })
        return await sanitizeUser(updatedUser);
    },

    async update(ctx: any) {
        const { documentId } = ctx.params;
        const { fullName, phoneNumber, alternatePhoneNumber, isAdmin, email, blocked, accountStatus } = ctx.request.body;

        const newPayload: any = { fullName, phoneNumber, alternatePhoneNumber, email, username: email, blocked, accountStatus }
        if (isAdmin) {
            const adminRole = await getRoleService(strapi).findAdminRole();
            newPayload.role = adminRole.documentId;
        } else {
            const userRole = await getRoleService(strapi).findUserRole();
            newPayload.role = userRole.documentId;
        }
        console.log("newPayload", newPayload, documentId);
        const updatedUser = await strapi.documents('plugin::users-permissions.user').update({
            documentId: documentId,
            data: newPayload,
            populate: ['role']
        });

        console.log("updatedUser", updatedUser);
        return await sanitizeUser(updatedUser);
    },

    async delete(ctx: any) {
        const { documentId } = ctx.params;
        await strapi.documents('plugin::users-permissions.user').delete({ documentId });
    }
});
