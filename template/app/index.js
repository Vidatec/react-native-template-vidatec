/*
 * app/index.js
 * Cross platform entry point for your app.
 */

import React from 'react';
import {View} from 'react-native';

// import redux provider to wrap whole app in
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './config/store';

import MainStack from 'app/navigators/MainStack';
import {NavigationContainer} from '@react-navigation/native';

import {enableScreens} from 'react-native-screens';

enableScreens();

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

// // register this as the root component in the app
// AppRegistry.registerComponent('HelloWorld', () => Root);

export default Root;
