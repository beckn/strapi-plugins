import subscriberAPIRoutes from './subscribers';
import user from './user';
import auth from './auth';

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
};

export default routes;
