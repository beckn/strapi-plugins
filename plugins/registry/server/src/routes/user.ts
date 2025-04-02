export default [
    {
        method: "POST",
        path: "/signup",
        handler: "user.signup",
        config: {
            policies: [],
            auth: false
        }
    },
    {
        method: "GET",
        path: "/users/me",
        handler: "user.me",
        config: {
            auth: false,
            middlewares: ["plugin::registry.authMiddleware"],
        }
    },
    {
        method: "GET",
        path: "/users",
        handler: "user.getUsers",
        config: {
            auth: false,
            middlewares: ["plugin::registry.authMiddleware"],
        }
    }
];
