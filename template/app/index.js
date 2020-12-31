/*
 * app/index.js
 * Cross platform entry point for your app.
 */

import React, { useCallback, useRef, useState } from 'react';

// import redux provider to wrap whole app in
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './config/store';

import MainStack from './navigators/MainStack';
import {NavigationContainer} from '@react-navigation/native';

import {enableScreens} from 'react-native-screens';

enableScreens();

const Root = () => {
  const navContainer = useRef(null);
  const [previousRoute, setPreviousRoute] = useState(null);

  /**
   * Listen to state changes of any navigators
   * Very useful for screen tracking etc
   */
  const onStateChange = useCallback(() => {
    const previousRouteValue = previousRoute || {};
    const previousRouteName = previousRouteValue.name;

    const currentRouteValue = navContainer.current.getCurrentRoute() || {};
    const currentRouteName = currentRouteValue.name;

    if (previousRouteName !== currentRouteName) {
      console.log(`[app/index] NEW SCREEN: ${currentRouteName}`);
    }

    setPreviousRoute(currentRouteValue);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          ref={navContainer}
          onStateChange={onStateChange}
        >
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

// // register this as the root component in the app
// AppRegistry.registerComponent('HelloWorld', () => Root);

export default Root;
