export default [
    {
        method: "GET",
        path: "/network-domains/:documentId",
        handler: "network-domain.getNetworkDomain",
        config: {
            auth: false,
            middlewares: ["plugin::registry.auth"],
        }
    },
    {
        method: "GET",
        path: "/network-domains",
        handler: "network-domain.getNetworkDomains",
        config: {
            auth: false,
            middlewares: ["plugin::registry.auth"],
        }
    },
    {
        method: "POST",
        path: "/network-domains",
        handler: "network-domain.createNetworkDomain",
        config: {
            auth: false,
            middlewares: ["plugin::registry.auth", "plugin::registry.isAdmin"],
        }
    },
    {
        method: "PUT",
        path: "/network-domains/:documentId",
        handler: "network-domain.updateNetworkDomain",
        config: {
            auth: false,
            middlewares: ["plugin::registry.auth", "plugin::registry.isAdmin"],
        }
    },
    {
        method: "DELETE",
        path: "/network-domains/:documentId",
        handler: "network-domain.deleteNetworkDomain",
        config: {
            auth: false,
            middlewares: ["plugin::registry.auth", "plugin::registry.isAdmin"],
        }
    }
]
