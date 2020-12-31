/*
 * app/components/FancyText
 */

import { StyleSheet } from 'react-native';

import { colors, sizes } from '../../config/styles';

export default StyleSheet.create({
  text: {
    color: colors.red,
    fontSize: sizes.text.title,
    textAlign: 'center'
  }
});
