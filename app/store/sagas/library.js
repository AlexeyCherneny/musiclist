import {all, takeLatest} from 'redux-saga/effects';

import actions from '../actions';

function* fetchLibrary(api, action) {
  try {
  } catch (error) {}
}

export default function*(api) {
  yield all([takeLatest(actions.librariesRequest, fetchLibrary, api)]);
}
