/*
 * app/navigators/MainStack/config.js
 * Config file for MainStack.
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Detail from 'app/screens/Detail';
import MainTabs from 'app/navigators/MainTabs';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen
        name="Detail"
        component={Detail}
        initialParams={{passedValue: 'defaust from MainStack'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
