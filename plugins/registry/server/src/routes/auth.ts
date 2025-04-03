export default [
    {
        method: 'POST',
        path: '/auth/local',
        handler: 'auth.login',
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
    },
    {
        method: 'POST',
        path: '/auth/send-email-confirmation',
        handler: 'auth.sendEmailConfirmation',
        config: {
            policies: [],
            auth: false,
        },
    }
];
