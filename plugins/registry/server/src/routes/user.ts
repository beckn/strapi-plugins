export default [
    {
        method: "POST",
        path: "/signup",
        handler: "user.signup",
        config: {
            policies: [],
            auth: false
        }
    }
];
