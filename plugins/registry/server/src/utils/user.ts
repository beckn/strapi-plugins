export const sanitizeUsers = async (users: any[]) => {
    return await Promise.all(users.map(user => sanitizeUser(user)));
}

export const sanitizeUser = async (user: any) => {
    return await strapi.contentAPI.sanitize.output(user, strapi.getModel('plugin::users-permissions.user'));
}
