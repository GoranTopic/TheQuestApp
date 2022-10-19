import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createTopTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ToDoScreen from '../screens/ToDoScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: {},
  default: {},
});

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';



const tabNavigator = createMaterialTopTabNavigator({
  todo: ToDoScreen, 
  SettingsStack,
});


tabNavigator.path = '';

export default tabNavigator;
