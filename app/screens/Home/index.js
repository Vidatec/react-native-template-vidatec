/*
 * app/screens/Home
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import PropTypes from 'prop-types';

// import redux functions to connect controller to app state
import { connect } from 'react-redux';

// import MainStack navigation controller
import { MainStack } from 'app/navigators';
import { CELLPHONE } from 'app/config/images';

// import screens styles
import styles from './styles';

class Home extends Component {
  // Define tab options
  static navigationOptions = () => {
    return {
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => {
        return <Text style={{ color: tintColor }}>Tab1</Text>;
      }
    };
  };

  static propTypes = {
    MainStackActions: PropTypes.object
  };

  constructor (props: {}) {
    super(props);

    this.state = {
      test: 'hi'
    };
  }

  // Setting up a listener to show that the tab has come into focus
  async _viewWillAppear () {
    console.log('Home');
  }

  async componentDidMount () {
    this._willAppear = this.props.navigation.addListener('didFocus', this._viewWillAppear.bind(this));
  }

  componentWillUnmount () {
    this._willAppear.remove();
  }

  /**
   * Open 'Detail' screen
   * @param {String} passedValue
   */
  openDetailPage = (passedValue: string) => e => {
    MainStack.navigate('Detail', {
      passedValue
    });
  }

  render () {
    return (
      <View
        testID={'home'}
        style={styles.container}
      >
        <Image source={CELLPHONE} style={styles.image} />
        <Text style={styles.text}>Welcome to React Native!</Text>
        <Button
          testID={'button'}
          title="Open Detail Page"
          onPress={this.openDetailPage('This is passed to detail')} />
      </View>
    );
  }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(Home);