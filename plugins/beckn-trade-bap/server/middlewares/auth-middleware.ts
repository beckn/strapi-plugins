module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    try {
      //Extract token from request
      const token = ctx.request.header.authorization;
      if (!token || !token.startsWith("Bearer ")) {
        return ctx.unauthorized("Invalid Token");
      }
      const jwtToken = token.split(" ")[1];
      //validate token
      const jwtService = strapi.plugins["users-permissions"].services.jwt;
      const res = await jwtService.verify(jwtToken);

      //extract userid
      const id = res.id;
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { id },
          populate: {
            role: true
          }
        });
      if (!user) {
        return ctx.unauthorized("User Not Found!");
      }
      delete user.password;
      ctx.state.user = user;
      await next();
    } catch (error) {
      console.log("Auth Middleware error: ", error);

      return ctx.unauthorized(error.message);
    }
  };
};
