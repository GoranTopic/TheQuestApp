  config
});
});
  },
const SettingsStack = createStackNavigator(
const tabNavigator = createMaterialTopTabNavigator({











    Settings: SettingsScreen,
tabNavigator.path = '';
export default tabNavigator;
  tabBarLabel: 'Settings',
};
  tabBarIcon: ({ focused }) => (
  {
import ToDoScreen from '../screens/ToDoScreen';
  todo: ToDoScreen, 
const config = Platform.select({
  ),
  web: {},
import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
import { createBottomTabNavigator, createMaterialTopTabNavigator, createTopTabNavigator } from 'react-navigation-tabs';
import LinksScreen from '../screens/LinksScreen';
import HomeScreen from '../screens/HomeScreen';
);
  SettingsStack,
SettingsStack.navigationOptions = {
SettingsStack.path = '';
import { Platform } from 'react-native';
import React from 'react';
  default: {},
import SettingsScreen from '../screens/SettingsScreen';
