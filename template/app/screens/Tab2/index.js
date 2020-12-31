/*
 * app/screens/Tab2
 */

// import react and react-native elements
import React, { useCallback, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

// import redux functions to connect controller to app state
import { useDispatch, useSelector } from 'react-redux';
import * as TestDataActions from '../../redux/TestData';

// import screens styles
import styles from './styles';

const Tab2 = () => {
  const dispatch = useDispatch();
  const peopleList = useSelector(state => state.TestData.peopleList);

  const peopleListAsString = useMemo(() => {
    return peopleList.length === 0 ? 'Empty list.' : peopleList.map(person => person.name).join(', ');
  }, [peopleList]);

  const updatePeopleList = useCallback(() => {
    dispatch(TestDataActions.updatePeople());
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is tab 2.</Text>
      <Text style={styles.text}>People List includes: {peopleListAsString}</Text>
      <Button title="Update People List" onPress={updatePeopleList} />
    </View>
  );
};

// export the connect function
export default Tab2;
