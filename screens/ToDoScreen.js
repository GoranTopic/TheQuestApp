import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Button,
} from 'react-native';

import QuestContainer from '../components/QuestContainer';


export default function TodoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('../assets/images/background1.png')} >
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
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
