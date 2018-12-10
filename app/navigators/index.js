// @flow

import { NavigationActions, StackActions } from 'react-navigation';

import { InitialScreen as MainStackInitialScreen } from 'app/navigators/MainStack/config';
import { InitialScreen as MainTabsInitialScreen } from 'app/navigators/MainTabs/config';

class Navigator {
  constructor () {
    this.nav = null;
  }

  /**
   * Set the navigator
   * @param {*} navigator navigator to set
   */
  setNavigator (navigator) {
    this.nav = navigator;
  }

  /**
   * Open a screen
   * @param {string} routeName screen to open
   * @param {object} params params to pass to new screen
   */
  navigate (routeName, params) {
    this.nav.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  }
}

class StackNav extends Navigator {
  /**
   * Go back to previous screen
   */
  goBack () {
    this.nav.dispatch(
      StackActions.pop()
    );
  }

  goBackToRoot () {
    this.nav.dispatch(
      StackActions.popToTop()
    );
  }
}

class TabNav extends Navigator {
  goToTab (routeName, params) {
    this.nav.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
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
