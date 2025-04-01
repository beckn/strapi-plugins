export default [
    {
        method: 'POST',
        path: '/auth/local',
        handler: 'auth.local',
        config: {
            policies: [],
            auth: false,
        },
    },
    {
        method: 'GET',
        path: '/auth/email-confirmation',
        handler: 'auth.emailConfirmation',
        config: {
            policies: [],
            auth: false,
        },
    }
];
