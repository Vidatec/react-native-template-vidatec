/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// uncomment below import for app
import Root from './app/index';

// uncomment below import for storybook
// import Root from './storybook';

AppRegistry.registerComponent(appName, () => Root);
