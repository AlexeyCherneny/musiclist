import {fork} from 'redux-saga/effects';

import API from '../../services/api.js';

import librarySagas from './library';

const rootSaga = function* root() {
  const api = API.create();

  // LIBRARY ACTIONS
  yield fork(librarySagas, api);
};

export default rootSaga;
