import React, { Component } from 'react';
import { StatusBar } from 'react-native'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Constants from 'expo-constants';

import ToDoScreen from '../screens/ToDoScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
    navigationOptions: { headerStyle: { marginTop: Expo.Constants.statusBarHeight } }
  }

);

export default createAppContainer(tabs);

 
