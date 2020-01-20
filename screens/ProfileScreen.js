import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';


export default function ProfileScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background}
        source={require('../assets/images/background2.png')} 
      >
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1, 
  },
  container: {
    flex: 1,
  },
})

ProfileScreen.navigationOptions = {
  title: 'Profile',
};
