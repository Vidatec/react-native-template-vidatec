/*
 * app/screens/Home
 */

// import react and react-native elements
import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

// import redux functions to connect controller to app state
import {connect} from 'react-redux';

// import MainStack navigation controller
// import { MainStack } from 'app/navigators';
import {CELLPHONE} from 'app/config/images';

// import screens styles
import styles from './styles';

const Home = ({navigation, route}) => {
  /**
   * Open 'Detail' screen
   * @param {String} passedValue
   */
  const openDetailPage = (passedValue: string) => e => {
    navigation.navigate('Detail', {
      passedValue,
    });
  };

  return (
    <View testID={'home'} style={styles.container}>
      <Image source={CELLPHONE} style={styles.image} />
      <Text style={styles.text}>Welcome to React Native!</Text>
      <Button
        testID={'button'}
        title="Open Detail Page"
        onPress={openDetailPage('This is passed to detail')}
      />
    </View>
  );
};

Home.defaultProps = {};

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

// export the connect function
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
