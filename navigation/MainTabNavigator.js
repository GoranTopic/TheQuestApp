import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createTopTabNavigator } from 'react-navigation-tabs';
import ToDoScreen from '../screens/ToDoScreen';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
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

const ToDoStack = createStackNavigator(
  {
    Home: ToDoScreen,
  },
  {
    headerMode: 'screen',
    
  },
);

ToDoStack.navigationOptions = {
  tabBarLabel: 'To Do',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} />
  ),
};

ToDoStack.path = '';

const tabNavigator = createMaterialTopTabNavigator({
  ToDoStack, 
  SettingsStack,
});


tabNavigator.path = '';

export default tabNavigator;
