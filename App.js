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
import  defaultUserData from './defaultUserData';

const initialState = defaultUserData;
  //crates the initial state for redux 
  
nextLevelFormula = (currentLevel) => { 
  nextExp= (5 * (Math.pow(currentLevel, 3))) / 4;
  //if(currentLevel < 5) nextExp = nextExp + (20 * (currentLevel + 1)) 
  return Math.round(nextExp);
}

expManager = (UserData, doneQuest) => {
  /* this fuction takes the completed quest and added it values to the user state */
  let data = {...UserData};
  data.Quests.splice(doneQuest.qindex, 1);
  data.Quests.forEach((value, index) => value.qindex = index);

  //add a quest completed
  data.stats["Total Quest Completed"]++;
  data.stats["Total Exp"] += doneQuest.exp;

  while(data.currentExp + doneQuest.exp >= data.nextLvExp){
   //check if it will level up
    data.level++; 
    doneQuest.exp = data.currentExp + doneQuest.exp - data.nextLvExp;
    data.currentExp = 0;
    //calc exp for next level
    data.nextLvExp = this.nextLevelFormula(data.level);
  }
    data.currentExp += doneQuest.exp;
  return {...data}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPLETE_QUEST': {
      return {
        UserData: this.expManager(state.UserData, action.doneQuest),
      }
    }
    case 'SET_PICTURE': {
      return {
        UserData: {
          ...state.UserData,
          profilePicSet: true,
          profilePicUri: action.profilePicUri,
        }
      }
    }
    case 'SET_QUEST': {
      return {
        UserData: {
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
