import subscriberAPIRoutes from './subscribers';
const routes = {
  subscribers: {
    type: 'content-api',
    routes: subscriberAPIRoutes,
  },
};

export default routes;
