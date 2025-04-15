import dediService from './dedi-service';
import psService from './ps-service';
import role from './role';
import user from './user';
import auth from './auth';
import networkDomain from './network-domain';
import subscribers from './subscribers';
import dedi from './dedi';

export default {
  dediService,
  psService,
  user,
  role,
  auth,
  "network-domain": networkDomain,
  subscribers: subscribers,
  dedi: dedi,
};
