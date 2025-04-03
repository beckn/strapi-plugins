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
            middlewares: ["plugin::registry.auth"],
        }
    },
    {
        method: "GET",
        path: "/users",
        handler: "user.getUsers",
        config: {
            auth: false,
            middlewares: ["plugin::registry.auth"],
        }
    },
    {
        method: "PUT",
        path: "/users/me",
        handler: "user.updateMe",
        config: {
            auth: false,
            middlewares: ["plugin::registry.auth"],
        }
    },
    {
        method: "PUT",
        path: "/users/:documentId",
        handler: "user.update",
        config: {
            auth: false,
            middlewares: ["plugin::registry.auth", "plugin::registry.isAdmin"],
        }
    }
];
