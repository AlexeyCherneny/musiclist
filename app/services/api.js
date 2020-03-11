import apisauce from 'apisauce';

const DEVELOPMENT_URL = 'https://iawake-backend-devel.dokku.f17y.com/api';
const PRODUCTION_URL = 'https://iawake-backend-devel.dokku.f17y.com/api';

let hostURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  hostURL = DEVELOPMENT_URL;
} else {
  hostURL = PRODUCTION_URL;
}

const create = (baseURL = `${hostURL}/`) => {
  const api = apisauce.create({
    baseURL,

    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
    },

    timeout: 10000,
  });

  return {
    data: api,

    fetchLibraries: () => api.get('v1/programs/free'),
  };
};

export default {
  create,
  hostURL,
};
