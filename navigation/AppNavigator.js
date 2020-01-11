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
    activeColor: '#5f3f21',
    inactiveColor: '#5f3f21',
    barStyle: { backgroundColor: 'black' },
  }

);

export default createAppContainer(tabs);

 
