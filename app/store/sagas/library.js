import {all, takeLatest, call, put} from 'redux-saga/effects';

import actions from '../actions';

function* fetchLibrary(api, action) {
  try {
    const response = yield call(api.fetchLibraries);

    if (response.status === 200) {
      yield put(actions.librariesSuccess(response.data.data));
    } else {
      throw response;
    }
  } catch (error) {
    const errorMessage = 'Error while fetching libraries';
    console.log(errorMessage, error);
  }
}

export default function*(api) {
  yield all([takeLatest(actions.librariesRequest, fetchLibrary, api)]);
}
