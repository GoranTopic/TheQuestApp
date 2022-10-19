);
  },
};
const SettingsStack = createStackNavigator(
import SettingsScreen from '../screens/SettingsScreen';
import React from 'react';
import ToDoScreen from '../screens/ToDoScreen';
  ),











import TabBarIcon from '../components/TabBarIcon';
  {
import { Platform } from 'react-native';
export default tabNavigator;
import { createBottomTabNavigator, createMaterialTopTabNavigator, createTopTabNavigator } from 'react-navigation-tabs';
  todo: ToDoScreen, 
  web: {},
    Settings: SettingsScreen,
  SettingsStack,
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
const tabNavigator = createMaterialTopTabNavigator({
import LinksScreen from '../screens/LinksScreen';
  default: {},
import { createStackNavigator } from 'react-navigation-stack';
const config = Platform.select({
SettingsStack.path = '';
  config
tabNavigator.path = '';
import HomeScreen from '../screens/HomeScreen';
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
SettingsStack.navigationOptions = {
});
});
