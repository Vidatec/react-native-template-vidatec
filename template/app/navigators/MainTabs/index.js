/*
 * app/navigators/MainTabs/config.js
 * Config file for MainTabs.
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import Tab2 from '../../screens/Tab2';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator backBehavior="none">
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Tab #2" component={Tab2} />
    </Tabs.Navigator>
  );
};

export default MainTabs;
