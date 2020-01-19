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
        height:2,
        backgroundColor: '#845426',
      },
      style: {
        backgroundColor: '#0e0e0e',
      },
    },

  }

);

export default createAppContainer(TopTabs);

 
