import React from 'react';
  config
tabNavigator.path = '';
const tabNavigator = createMaterialTopTabNavigator({
const SettingsStack = createStackNavigator(
  SettingsStack,
  {
import HomeScreen from '../screens/HomeScreen';
export default tabNavigator;
  tabBarLabel: 'Settings',
    Settings: SettingsScreen,
import ToDoScreen from '../screens/ToDoScreen';
  ),
import LinksScreen from '../screens/LinksScreen';
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
import TabBarIcon from '../components/TabBarIcon';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createTopTabNavigator } from 'react-navigation-tabs';
  tabBarIcon: ({ focused }) => (
import SettingsScreen from '../screens/SettingsScreen';
  web: {},
SettingsStack.navigationOptions = {











};
});
});
  default: {},
const config = Platform.select({
import { createStackNavigator } from 'react-navigation-stack';
  todo: ToDoScreen, 
import { Platform } from 'react-native';
SettingsStack.path = '';
);
  },
