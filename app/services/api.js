import apisauce from 'apisauce';

const DEVELOPMENT_URL = '/';
const PRODUCTION_URL = '/';

let hostURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  hostURL = DEVELOPMENT_URL;
} else {
  hostURL = PRODUCTION_URL;
}

const create = (baseURL = `${hostURL}api/`) => {
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
  };
};

export default {
  create,
  hostURL,
};
