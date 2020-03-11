import {combineReducers} from 'redux';
import {createReducer} from 'redux-act';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

import Navigation from '../../navigation/index';
import {createCRUDReducer, CRUDState} from './utils';

const libraryReducer = createReducer(createCRUDReducer('library'), CRUDState);

const navigationReducer = createNavigationReducer(Navigation);

const createRootReducer = () =>
  combineReducers({
    navigation: navigationReducer,

    library: libraryReducer,
  });

export default createRootReducer;
