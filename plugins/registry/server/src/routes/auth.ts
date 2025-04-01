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
];
