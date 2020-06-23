/*
 * app/config/store.js
 * ---
 * Configures your redux store.
 * Adds redux-thunk as middleware, as well as registering your reducers from app/redux
 */

import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {autoRehydrate, persistReducer, persistStore} from 'redux-persist';
import appConfig from '../../app.json';

// /**
//  * Import middlewares from navigators (react-navigation)
//  */

/*
 * Combine reducers
 */
import TestData from 'app/redux/TestData';
import {AsyncStorage, Platform} from 'react-native';
import FSStorage from 'redux-persist-fs-storage';

const persistConfig = {
  key: appConfig.name,
  storage: Platform.OS === 'ios' ? AsyncStorage : FSStorage(),
};

const reducer = combineReducers({
  TestData: persistReducer(persistConfig, TestData),
  // add your reducers here
});

/*
 * Configure and create the redux store
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

let store = null;
let persistor = null;

export function configureStore(initialState: {}): {} {
  store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  persistor = persistStore(store);
}

configureStore();

export {store, persistor};
