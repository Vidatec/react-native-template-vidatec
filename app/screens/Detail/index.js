/*
 * app/screens/Detail
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// import redux functions to connect controller to app state
import { connect } from 'react-redux';

// import MainStack navigation controller
import { MainStack } from 'app/navigators';

import FancyText from 'app/components/FancyText';

// import screens styles
import styles from './styles';

class Detail extends Component {
  static propTypes = {};

  /**
   * Construct component class
   * @param {object} props
   */
  constructor (props: {}) {
    super(props);

    this.state = {
      timestamp: new Date().getTime()
    };

    this.navState = this.props.navigation.state;
  }

  /**
   * Set a timestamp in the component state
   */
  setTime = () => {
    this.setState({
      timestamp: new Date().getTime()
    });
  }

  /**
   * Go back to the previous page in the stack
   */
  goBack = () => {
    MainStack.goBack();
  }

  /**
   * Render component
   */
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.timestamp}</Text>
        <Text style={styles.text}>{this.navState.params.passedValue}</Text>
        <FancyText>This is FancyText</FancyText>
        <Button title="Set Timestamp" onPress={this.setTime} />
        <Button title="Go Back" onPress={this.goBack} />
      </View>
    );
  }
}

Detail.defaultProps = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
