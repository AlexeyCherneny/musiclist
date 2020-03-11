import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

export default appNavigatorMiddleware;
