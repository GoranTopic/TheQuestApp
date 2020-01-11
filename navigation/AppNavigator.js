import React, { Component } from 'react';
import { StatusBar } from 'react-native'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Constants from 'expo-constants';

import ToDoScreen from '../screens/ToDoScreen';
import SettingsScreen from '../screens/SettingsScreen';


const TopTabs = createMaterialTopTabNavigator(

  {
    Quests:  ToDoScreen,
    profile: SettingsScreen,
  },
  {
    initialRouteName: 'Quests',
    activeColor: '#5f3f21',
    inactiveColor: '#5f3f21',
    barStyle: { backgroundColor: 'black' },
    tabBarOptions: {
      labelStyle: {
        fontSize: 15,
        fontFamily: 'helvetica-med',
      },
      tabStyle: {
      },
      activeTintColor: 'white',
      //inactiveTintColor: 'white',
      indicatorStyle:{
        backgroundColor: '#5f3f21',
      },
      style: {
        backgroundColor: '#0e0e0e',
      },
    },

  }

);

export default createAppContainer(TopTabs);

 
