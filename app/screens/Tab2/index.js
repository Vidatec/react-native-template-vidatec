/*
 * app/screens/Tab2
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

// import redux functions to connect controller to app state
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TestDataActions from 'app/redux/TestData';

// import screens styles
import styles from './styles';

class Tab2 extends Component {
  // Define tab options
  static navigationOptions = () => {
    return {
      title: 'Tab 2',
      tabBarLabel: 'Tab 2',
      tabBarIcon: ({ tintColor, focused }) => {
        return <Text style={{ color: tintColor }}>icon2</Text>;
      }
    };
  };

  static propTypes = {
    TestDataActions: PropTypes.object,
    peopleList: PropTypes.arrayOf(PropTypes.object)
  };

  // Setting up a listener to show that the tab has come into focus
  async _viewWillAppear () {
    console.log('Tab2');
  }

  async componentDidMount () {
    this._willAppear = this.props.navigation.addListener('didFocus', this._viewWillAppear.bind(this));
  }

  componentWillUnmount () {
    this._willAppear.remove();
  }

  updatePeopleList = () => {
    this.props.TestDataActions.updatePeople();
  }

  render () {
    let peopleString = this.props.peopleList.map(p => p.name).join(', ');

    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is tab 2.</Text>
        <Text style={styles.text}>People List includes: {peopleString}</Text>
        <Button title="Update People List" onPress={this.updatePeopleList} />
      </View>
    );
  }
}

Tab2.defaultProps = {};

/**
 * Map component props to redux app state
 * @param {*} state - the redux app state
 */
const mapStateToProps = state => ({
  peopleList: state.TestData.peopleList
});

/**
 * Bind redux actions to component
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
  TestDataActions: bindActionCreators(TestDataActions, dispatch)
});

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)(Tab2);
