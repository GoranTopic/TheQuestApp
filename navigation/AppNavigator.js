import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import ToDoScreen from '../screens/ToDoScreen';
import ProfileScreen from '../screens/ProfileScreen';


const TopTabs = createMaterialTopTabNavigator(

  {
    Quests: { screen: ToDoScreen },
    Profile: { screen: ProfileScreen },
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