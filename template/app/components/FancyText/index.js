/*
 * app/components/FancyText/index.js
 */

// import react and react-native elements
import React from 'react';
import { Text } from 'react-native';

// import screens styles
import styles from './styles';

const FancyText = ({children}) => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
};

export default FancyText;
