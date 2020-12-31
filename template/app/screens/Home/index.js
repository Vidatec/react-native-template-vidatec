/*
 * app/screens/Home
 */

// import react and react-native elements
import React, {useCallback} from 'react';
import {View, Text, Button, Image} from 'react-native';

import {CELLPHONE} from '../../config/images';

// import screens styles
import styles from './styles';

const Home = ({navigation}) => {
  /**
   * Open 'Detail' screen
   * @param {String} passedValue
   */
  const openDetailPage = useCallback((passedValue: string) => e => {
    navigation.navigate('Detail', {
      passedValue
    });
  }, []);

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

// export the connect function
export default Home;
