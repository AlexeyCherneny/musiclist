import {combineReducers} from 'redux';
import {createReducer} from 'redux-act';

import {createCRUDReducer, CRUDState} from './utils';

const libraryReducer = createReducer(createCRUDReducer('library'), CRUDState);

const createRootReducer = () =>
  combineReducers({
    library: libraryReducer,
  });

export default createRootReducer;
