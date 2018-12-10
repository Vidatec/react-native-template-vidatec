/*
 * app/components/FancyText/index.js
 */

// import react and react-native elements
import React, { Component } from 'react';
import { Text } from 'react-native';

// import screens styles
import styles from './styles';

class FancyText extends Component {
  /**
   * Construct component class
   * @param {object} props
   */
  constructor (props: {}) {
    super(props);

    this.state = {
      // store component state here
    }
  }

  /**
   * Render component
   */
  render () {
    return (
        <Text style={styles.text}>{this.props.children}</Text>
    );
  }
}

export default FancyText;
