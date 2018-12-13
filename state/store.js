import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers'
import { initialState as main } from './reducers/main';

const initialState = {
  main,
};

export function initializeStore (preloadedState = initialState) {
  let middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
  }
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)));
}
