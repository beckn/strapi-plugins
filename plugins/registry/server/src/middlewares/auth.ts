export default (config: any, { strapi }: any) => {
    return async (ctx: any, next: any) => {
        try {
            // Extract token from request
            const token = ctx.request.header.authorization;
            if (!token || !token.startsWith("Bearer ")) {
                return ctx.unauthorized("Invalid Token");
            }
            const jwtToken = token.split(" ")[1];


            // Validate token
            const payload = await strapi.plugins["users-permissions"].service('jwt').verify(jwtToken);

            // Extract user documentId and find user
            const documentId = payload.documentId;
            const user = await strapi.query("plugin::users-permissions.user").findOne({ where: { documentId }, populate: { role: true } });

            if (!user) {
                return ctx.unauthorized("User Not Found!");
            }

            // Check if email is verified
            if (!user.emailVerified) {
                return ctx.unauthorized("Please verify your email before accessing this resource");
            }

            // Check if user is blocked
            if (user.blocked) {
                return ctx.unauthorized("Your account has been blocked. Please contact support.");
            }

            // Check if account is active
            if (user.accountStatus !== 'ACTIVE') {
                return ctx.unauthorized("Your account is not active. Please contact support.");
            }

            // Remove sensitive data and attach user to context
            delete user.password;
            ctx.state.user = user;

            await next();
        } catch (error) {
            console.log("Auth Middleware error: ", error);
            return ctx.unauthorized(error);
        }
    };
};
