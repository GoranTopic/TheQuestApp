import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

import {color} from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import Quest from '../components/Quest';
import QuestContainer from '../components/QuestContainer';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('../assets/images/background.png')} >
          <QuestContainer/>
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
