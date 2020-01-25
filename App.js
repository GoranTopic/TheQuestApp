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
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import  defaultUserData from './defaultUserData';


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

const initialState = defaultUserData;
  //crates the initial state for redux 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPLETE_QUEST': {
      let data = { UserData: this.expManager(state.UserData, action.doneQuest), }
      return data;
    }
    case 'SET_PICTURE': {
      let data = {
        UserData: {
          ...state.UserData,
          profilePicSet: true,
          profilePicUri: action.profilePicUri,
        }
      }
      return data;
    }
    case 'SET_QUEST': {
      let data = {
        UserData: {
          ...state.UserData,
          Quests: action.newQuests,
        }
      }
      return data;
    }
  } 
  return state;
}

//config obj for persistant reducer
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

//uncomment to set the basic default data
//const store = createStore(reducer);

//Uncomment to start using peristant datain the app
//create a persistant reducer
const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer); //create store for redux 
let persistor = persistStore(store);



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
        <View style={styles.view} />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator />
          </PersistGate> 
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
    backgroundColor: 'black',
  },
  view:{
    backgroundColor:'black',
    height:Constants.statusBarHeight,
  }
});
