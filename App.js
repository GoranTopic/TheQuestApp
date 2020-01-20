import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component, } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

import ToDoScreen from './screens/ToDoScreen';
import Constants from 'expo-constants';
import { AsyncStorage } from 'react-native';

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
        <AppNavigator/>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),

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
    backgroundColor: '#fff',
  },
  view:{
    backgroundColor:'#4d351d',
    height:Constants.statusBarHeight,
  }
});
