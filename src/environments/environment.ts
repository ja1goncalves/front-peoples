import { config} from '../config';

export const environment = {
  production: config.production,
  NODE_ENV: config.NODE_ENV,
  API_URL: config.API_URL,
  NOTIFY_URL: config.NOTIFY_URL,
  USERNAME : config.USERNAME,
  PASSWORD : config.PASSWORD,
};
