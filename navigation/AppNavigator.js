import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


import ToDoScreen from '../screens/ToDoScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MainTabNavigator from './MainTabNavigator';

const tabs = createMaterialTopTabNavigator(

  {
    Quests:  ToDoScreen,
    profile: SettingsScreen,
  },
  {
    initialRouteName: 'Quests',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }


);


export default createAppContainer(tabs);

  //createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    //Main: ToDoScreen,
    //Main: MainTabNavigator,
  //})
//);
