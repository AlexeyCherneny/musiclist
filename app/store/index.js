import {createStore, applyMiddleware, compose} from 'redux';

import sagaMiddleware from './middlewares/sagas';
import navigationMiddleware from './middlewares/navigation';

import createRootReducer from './reducers';
import rootSaga from './sagas';

const middleWares = applyMiddleware(sagaMiddleware, navigationMiddleware);

const enhancers = compose(
  middleWares,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
);

const configureStore = () => {
  const rootReducer = createRootReducer();

  let store = createStore(rootReducer, enhancers);
  sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureStore();

export {store};
