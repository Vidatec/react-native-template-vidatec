// @flow

import { NavigationActions, StackActions } from 'react-navigation';

import { InitialScreen as MainStackInitialScreen } from 'app/navigators/MainStack/config';
import { InitialScreen as MainTabsInitialScreen } from 'app/navigators/MainTabs/config';

class Navigator {
  constructor () {
    this.nav = null;
    this.observer = null;
    this.queuedActions = [];
  }

  setObserver (observer) {
    this.observer = observer;
  }

  /**
   * Set the navigator
   * @param {*} navigator navigator to set
   */
  setNavigator (navigator) {
    this.nav = navigator;

    // now that we have a navigator, perform any actions that were queued
    if (this.nav && this.queuedActions.length > 0) {
      while (this.queuedActions.length > 0) {
        this.nav.dispatch(this.queuedActions[0]);
        this.queuedActions.shift();
      }
    }
  }

  /**
   * Dispatch an action on the navigator
   * @param {NavigationAction} action action to run on the navigator
   */
  action (action) {
    if (this.nav) {
      this.nav.dispatch(action);
    } else {
      // if no navigator, queue the action for when its set
      this.queuedActions.push(action);
    }
  }

  /**
   * Open a screen
   * @param {string} routeName screen to open
   * @param {object} params params to pass to new screen
   */
  navigate (routeName, params) {
    this.action(NavigationActions.navigate({
      routeName,
      params
    }));
  }
}

class StackNav extends Navigator {
  /**
   * Push a screen onto the navigator, even if it already exists on the stack
   * @param {string} routeName screen to open
   * @param {object} params params to pass to new screen
   */
  push (routeName, params) {
    this.action(StackActions.push({
      routeName,
      params
    }));
  }

  /**
   * Go back to previous screen
   */
  goBack () {
    this.action(StackActions.pop());
  }

  /**
   * Go back to root of navigator
   */
  goBackToRoot () {
    this.action(StackActions.popToTop());
  }
}

class TabNav extends Navigator {
  /**
   * Switch to tab
   * @param {string} routeName tab to open
   * @param {object} params params to pass to tab
   */
  goToTab (routeName, params) {
    this.action(NavigationActions.navigate({
      routeName,
      params
    }));
  }
}

class NavigationScreenTracker {
  constructor () {
    this.state = {
      MainStack: MainStackInitialScreen,
      MainTabs: MainTabsInitialScreen
    };
  }

  _getActiveRoute (state): { routeName: string, params: {} } {
    if (state && 'index' in state && 'routes' in state && state.routes[state.index]) {
      return state.routes[state.index];
    } else {
      return null;
    }
  }

  onNavigate (navigator: string, state) {
    // get the active route
    const activeRoute = this._getActiveRoute(state);

    if (activeRoute && !state.isTransitioning) {
      this.state[navigator] = activeRoute.routeName;

      let screenToReport = activeRoute.routeName;

      // if the new screen is MainTabs (our default tabrouter, we check what screen the tab controller is presenting, that is the screen the use is looking at)
      if (activeRoute.routeName === 'MainTabs') {
      // log contents of MainTabs as new screen
        screenToReport = this.state.MainTabs;
      }

      if (screenToReport) {
        console.log(`NEW SCREEN: ${screenToReport}`);
      }
    }
  }
}

// initialise navigators
export const MainStack = new StackNav();
export const MainTabs = new TabNav();

export const NavigationTracker = new NavigationScreenTracker();
