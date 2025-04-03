export default (config: any, { strapi }: any) => {
    return async (ctx: any, next: any) => {
        const user = ctx.state.user;
        if (user.role.type !== 'admin') {
            return ctx.unauthorized("You are not authorized to access this resource");
        }
        await next();
    }
}
