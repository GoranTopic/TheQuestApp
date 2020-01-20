import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import QuestContainer from '../components/QuestContainer';


export default function TodoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('../assets/images/background1.png')} >
        <QuestContainer />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1, 
  },
  container: {
    flex: 1,
  },
  
});
