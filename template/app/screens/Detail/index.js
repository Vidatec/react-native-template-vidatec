/*
 * app/screens/Detail
 */

// import react and react-native elements
import React, {useCallback} from 'react';
import {View, Text, Button} from 'react-native';

import FancyText from '../../components/FancyText';

// import screens styles
import styles from './styles';

const Detail = ({route, navigation}) => {
  const {passedValue = 'none'} = route.params;

  /**
   * Go back to the previous page in the stack
   */
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  /**
   * Render component
   */
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A Detail page</Text>
      <Text style={styles.text}>{passedValue}</Text>
      <FancyText>This is FancyText</FancyText>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default Detail;
