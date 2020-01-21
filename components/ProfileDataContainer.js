import React from 'react';

import { Text, Image, } from 'react-native-elements';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import colors from '../constants/Colors';

export default class ProfileDataContainer extends React.Component {
  /* 
    This is a continer for the profile picture of the user
   */

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity  
          style={styles.ProfilePictureContiner}
          >
          <Image 
            style={styles.ProfilePicture}
            source={require('../assets/images/icon.png')}
          />
        </TouchableOpacity>

        <View style={styles.TitleContianer}>
          <Text style={styles.Username}>
            Goran Topic
        </Text>
          <Text style={styles.MottoLabel}>
            Killer of Killer
            </Text>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop:15,
    height:130,
  },
  ProfilePictureContiner:{
    paddingLeft:"3%",
  },
  ProfilePicture:{
    flex:1,
    height: 100,
    width: 100,
  },
  TitleContianer: {
    flexDirection:'column',
    paddingLeft: 20,
    paddingTop:15,
  },
  Username: {
    fontFamily: 'helvetica-med',
    fontSize: 30,
    color: 'white',
  },
  MottoLabel: {
    fontFamily: 'helvetica-med',
    fontSize: 11,
    paddingTop:1,
    paddingLeft:20,
    color: colors.unselectedQuestNote,
  },
});

