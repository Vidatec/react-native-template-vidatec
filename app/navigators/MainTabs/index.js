/*
 * app/navigators/MainTabs/index.js
 * Defines MainTabs and connects it to the singleton classes used to trigger updates
 */

import React, { Component } from 'react';

import { MainTabs as MainTabsGlobal, NavigationTracker } from 'app/navigators';

import { MainTabs } from './config';

export default class Tabs extends Component {
  static router = MainTabs.router;

  render () {
    return (
      <MainTabs
        onNavigationStateChange={(prevState, currentState) => {
          NavigationTracker.onNavigate('MainTabs', currentState);
        }}
        ref={ref => {
          this.navigator = ref;
          MainTabsGlobal.setNavigator(ref);
        }}
        // navigation={this.props.navigation}
      />
    );
  }
}
