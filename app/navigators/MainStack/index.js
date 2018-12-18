/*
 * app/navigators/MainStack/index.js
 * Defines MainStack and connects it to the singleton classes used to trigger updates
 */

import React, { Component } from 'react';
import { BackHandler } from 'react-native';

import { MainStack as MainStackGlobal, NavigationTracker } from 'app/navigators';

import { MainStack } from './config';

export default class Stack extends Component {
  constructor (props) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  backAction = () => MainStackGlobal.goBack();

  render () {
    return (
      <MainStack
        onNavigationStateChange={(prevState, currentState) => {
          NavigationTracker.onNavigate('MainStack', currentState);
        }}
        ref={ref => {
          this.navigator = ref;
          MainStackGlobal.setNavigator(ref);
        }}
      />
    );
  }
}
