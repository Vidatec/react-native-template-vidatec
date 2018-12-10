/*
 * app/config/store.js
 * ---
 * Configures your redux store.
 * Adds redux-thunk as middleware, as well as registering your reducers from app/redux
 */

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

// /**
//  * Import middlewares from navigators (react-navigation)
//  */

/*
 * Combine reducers
 */
import TestData from 'app/redux/TestData';

const reducer = combineReducers({
  TestData
  // add your reducers here
});

/*
 * Configure and create the redux store
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  thunk
];

export function configureStore (initialState: {}): {} {
  return createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware), autoRehydrate()));
}

export const store = configureStore();
