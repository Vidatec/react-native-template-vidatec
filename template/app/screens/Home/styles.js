/*
 * app/screens/Home
 */

import { StyleSheet } from 'react-native';

import { colors } from '../../config/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.primary,
    textAlign: 'center',
    marginTop: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
});
