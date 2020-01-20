import React from 'react';


export default function ProfileScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background}
        source={require('../assets/images/background.png')} 
      >
      </ImageBackground>
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Profile',
};
