/**
 * app/config/styles
 * ---
 * Store global styles and style related helpers here.
 */

import {Dimensions, Platform} from 'react-native';
import {hasNotch} from 'react-native-device-info';

let d = Dimensions.get('window');
const {height, width} = d;

export const screenWidth = width;
export const screenHeight = height;

export const isIphoneWithNotch =
  Platform.OS === 'ios' &&
  hasNotch();

export const colors = {
  primary: '#320E3B',
  background: '#F9E2FF',
  headerText: '#F9E2FF',
  bodyText: '#110414',
  red: '#FF0000'
};

export const sizes = {
  margin: {
    regular: 16,
    small: 8
  },
  text: {
    h1: 34,
    h2: 28,
    h3: 22,
    title: 20,
    headline: 17,
    subtitle: 16,
    body: 16,
    caption: 12
  },
  navbar: {
    iconHeight: 20,
    height: Platform.OS === 'ios' ? 40 : 56,
    heightTotal: Platform.OS === 'ios' ? (isIphoneWithNotch ? 84 : 6) : 56
  }
};

export const fonts = {};

export const fullFlexContainer = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: colors.background
};

export const centerChildren = {
  justifyContent: 'center',
  alignItems: 'center'
};
