import { Core } from '@strapi/strapi';
import { getUserService, getRoleService } from '../utils/service';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
    async signup(ctx: any) {
        try {
            const { email, password } = ctx.request.body;
            const role = await getRoleService(strapi).findUserRole();
            if (!role) {
                throw new Error('No user role found');
            }
            const user = await getUserService(strapi).createUser({ username: email, email, password, role: role.documentId });

            const jwt = strapi.plugin('users-permissions').service('jwt').issue({
                documentId: user.documentId,
            });

            ctx.created({ jwt, user });
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async me(ctx: any) {
        try {
            const user = await getUserService(strapi).me(ctx.state.user);
            ctx.send(user);
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async getUsers(ctx: any) {
        try {
            const users = await getUserService(strapi).getUsers();
            ctx.send(users);
        } catch (error) {
            ctx.badRequest(error);
        }
    },

    async updateMe(ctx: any) {
    }
});
