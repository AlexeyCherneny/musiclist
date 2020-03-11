import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export default appNavigatorMiddleware;
