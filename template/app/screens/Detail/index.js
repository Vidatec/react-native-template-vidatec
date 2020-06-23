/*
 * app/screens/Detail
 */

// import react and react-native elements
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// import redux functions to connect controller to app state
import {connect} from 'react-redux';

// import MainStack navigation controller
// import { MainStack } from 'app/navigators';

import FancyText from 'app/components/FancyText';

// import screens styles
import styles from './styles';

const Detail = ({route, navigation}) => {
  const {passedValue = 'none'} = route.params;

  /**
   * Go back to the previous page in the stack
   */
  const goBack = () => {
    navigation.goBack();
  };

  /**
   * Render component
   */
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A Detail page</Text>
      {/* <Text style={styles.text}>{passedValue}</Text> */}
      <FancyText>This is FancyText</FancyText>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};
/**
 * Map component props to redux app state
 * @param {*} state - the redux app state
 */
const mapStateToProps = state => ({});

/**
 * Bind redux actions to component
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
