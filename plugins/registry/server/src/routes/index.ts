import subscriberAPIRoutes from './subscribers';
import user from './user';
import auth from './auth';
import networkDomain from './network-domain';

const routes = {
  subscribers: {
    type: 'content-api',
    routes: subscriberAPIRoutes,
  },
  user: {
    type: 'content-api',
    routes: user,
  },
  auth: {
    type: 'content-api',
    routes: auth,
  },
  networkDomain: {
    type: 'content-api',
    routes: networkDomain,
  },
};

export default routes;
