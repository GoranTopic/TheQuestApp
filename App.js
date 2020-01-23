import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component, } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import Constants from 'expo-constants';
import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  //crates the initial state for redux 
  UserData: {
    username: 'Goran Topic',
    usermotto: 'Chicken Chaiser',
    money: 1042,
    level: 13,
    currentExp: 400,
    nextLvExp: 1000,
    profilePicSet: false,
    profilePicUri: null,
    badges: [
      { img: require('./assets/images/Badges/badge0.png'), title: "Adventurer", des: "Start Questing" },
      { img: require('./assets/images/Badges/badge1.png'), title: "Samaritan", des: "Help a freind with a quest" },
      { img: require('./assets/images/Badges/badge2.png'), title: "Powerful One", des: "Finish a strength Quest" },
      { img: require('./assets/images/Badges/badge3.png'), title: "Really Powerful One", des: "Finish a second strength Quest" },
      { img: require('./assets/images/Badges/badge4.png'), title: "title4", des: "des4" },
      { img: require('./assets/images/Badges/badge5.png'), title: "title5", des: "des5" },
      { img: require('./assets/images/Badges/badge6.png'), title: "title6", des: "des6" },
      { img: require('./assets/images/Badges/badge7.png'), title: "title7", des: "des7" },
      { img: require('./assets/images/Badges/badge8.png'), title: "title8", des: "des8" },
      { img: require('./assets/images/Badges/badge9.png'), title: "title9", des: "des9" },
      { img: require('./assets/images/Badges/badge10.png'), title: "title10", des: "des10" },
      { img: require('./assets/images/Badges/badge11.png'), title: "title11", des: "des11" },
      { img: require('./assets/images/Badges/badge12.png'), title: "title12", des: "des12" },
      { img: require('./assets/images/Badges/badge13.png'), title: "title13", des: "des13" },
    ],
    stats: [
      { "Total Quest Completed": 3, },
      { "Stregth": 23 },
      { "Speed": 23 },
      { "Inteligence": 23 },
      { "Endurance": 23 },
      { "Alquemy": 23 },
      { "Badges Unlocked": 3 },
      { "Total Exp": 207 },
    ],
    Quests: [
      {
        qindex: 0,
        title: "IN CIRI'S FOOTSTEPS",
        shield: require('./assets/images/shields/COA_multiple_locations_Tw3.png'),
        exp: 10,
        selected: false,
        done: false,
        isInEditMode: false,
        isActiveDummyTask: false,
        tCount: 4,
        tasks: [
          {
            title: "Go To Velen",
            tindex: 0,
            selected: false,
            done: false,
          }, {
            title: "Find Yennifer",
            tindex: 1,
            selected: false,
            done: false,
          }, {
            title: "Have Sex with Yennifer",
            tindex: 2,
            selected: false,
            done: false,
          }
        ]
      }, {
        qindex: 1,
        title: "GWENT: VELEN PLAYERS",
        shield: require('./assets/images/shields/COA_Velen_Tw3.png'),
        exp: 20,
        selected: false,
        done: false,
        isInEditMode: false,
        isActiveDummyTask: false,
        tCount: 4,
        tasks: [
          {
            title: "Win a unique card from the baron",
            tindex: 0,
            selected: false,
            done: false,
          }, {
            title: "Win a unique card from the man in Oreton",
            tindex: 1,
            selected: false,
            done: false,
          }, {
            title: "Win a unique card from Haddy of Midcopse",
            tindex: 2,
            selected: false,
            done: false,
          }, {
            title: "Win a unique card from the soothsayer",
            tindex: 3,
            selected: false,
            done: false,
          }]
      }, {
        qindex: 2,
        title: "SCAVENGER HUNT: CAT SCHOOL GEAR UPGRADE DIAGRAMS",
        shield: require('./assets/images/shields/COA_Novigrad_Tw3.png'),
        exp: 15,
        selected: false,
        done: false,
        isInEditMode: false,
        isActiveDummyTask: false,
        tCount: 4,
        tasks: [
          {
            title: "Find boot Diagram using your Witcher senses",
            tindex: 0,
            selected: false,
            done: false,
          }, {
            title: "Find the silver sword ugrade diagram using your Witcher Senses",
            tindex: 1,
            selected: false,
            done: false,
          }, {
            title: "Find the armor upgrade diagram using your Witcher Senses",
            tindex: 2,
            selected: false,
            done: false,
          }, {
            title: "Win a unique card from the soothsayer",
            tindex: 3,
            selected: false,
            done: false,
          }
        ],
      },
    ]
  }
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPLETE_QUEST': {
      return {
        UserData: {
          ...state.UserData,
          currentExp: state.UserData.currentExp + action.doneQuest.exp ,
          Quests: action.newQuests,
        }
      }
    }
    case 'SET_QUEST': {
      return {
        UserData:{
          ...state.UserData,
          Quests: action.newQuests,
        }
      }
    }
  }
  return state;
  
}

const store = createStore(reducer) //create store for redux 


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' &&
          <StatusBar barStyle="default" />}
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
        <View style={styles.view}/>
        <Provider store={store}> 
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
      //background images
      require('./assets/images/background1.png'),
      require('./assets/images/background2.png'),
      //shiled images
      require('./assets/images/shields/COA_Kaer_Morhen_Tw3.png'),
      require('./assets/images/shields/COA_multiple_locations_Tw3.png'),
      require('./assets/images/shields/COA_Skellige_Tw3.png'),
      require('./assets/images/shields/COA_Velen_Tw3.png'),
      require('./assets/images/shields/COA_White_Orchard_Tw3.png'),
      require('./assets/images/shields/COA_Novigrad_Tw3.png'),
      //badges
      require('./assets/images/Badges/badge1.png'),
      require('./assets/images/Badges/badge2.png'),
      require('./assets/images/Badges/badge3.png'),
      require('./assets/images/Badges/badge4.png'),
      require('./assets/images/Badges/badge5.png'),
      require('./assets/images/Badges/badge6.png'),
      require('./assets/images/Badges/badge7.png'),
      require('./assets/images/Badges/badge8.png'),
      require('./assets/images/Badges/badge9.png'),
      require('./assets/images/Badges/badge10.png'),
      require('./assets/images/Badges/badge11.png'),
      require('./assets/images/Badges/badge12.png'),
      require('./assets/images/Badges/badge13.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include Font because we use I like them very much
      'helvetica-bold': require('./assets/fonts/Helvetica_Neu_Bold.ttf'),
      'helvetica-bd': require('./assets/fonts/HelveticaNeueBd.ttf'),
      'helvetica-blackcond': require('./assets/fonts/HelveticaNeue_BlackCond.ttf'),
      'helvetica-hv': require('./assets/fonts/HelveticaNeueHv.ttf'),
      'helvetica-it': require('./assets/fonts/HelveticaNeueIt.ttf'),
      'helvetica-light': require('./assets/fonts/HelveticaNeue_Light.ttf'),
      'helvetica-lt': require('./assets/fonts/HelveticaNeueLt.ttf'),
      'helvetica-medium': require('./assets/fonts/HelveticaNeue_Medium.ttf'),
      'helvetica-med': require('./assets/fonts/HelveticaNeueMed.ttf'),
      'helvetica-thin': require('./assets/fonts/HelveticaNeue_Thin.ttf'),
      'helvetica': require('./assets/fonts/HelveticaNeue.ttf'),
    }),
  ]);
}



checkUserData = async () => {
    try {
      const storedData = JSON.parse(await AsyncStorage.getItem('@UserData:key'));
      if (storedData !== null) {
        console.log("User Data Retrived Successfully.")
      }
    } catch (error) {
      console.error('AsyncStorage#setItem error: ' + error.message);
      console.log("Error: could not User Data")
      console.log("Setting Deafult User Data")
      // Error retrieving data
    }
  };


function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view:{
    backgroundColor:'#4d351d',
    height:Constants.statusBarHeight,
  }
});
