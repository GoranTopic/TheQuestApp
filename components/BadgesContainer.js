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

export default class BadgesContainer extends React.Component {
  /* 
   A container for all teh badges one can achive
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
            source={this.props.userpicture}
          />
        </TouchableOpacity>

        <View style={styles.TitleContianer}>
          <Text style={styles.Username}>
            {this.props.username}
        </Text>
          <Text style={styles.MottoLabel}>
           {this.props.usermotto}
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
    paddingLeft:"5%",
  },
  ProfilePicture:{
    height: 100,
    width: 100,
  },
  TitleContianer: {
    flexDirection:'column',
    paddingLeft: 15,
    paddingTop:17,
  },
  Username: {
    fontFamily: 'helvetica-med',
    fontSize: 30,
    color: 'white',
  },
  MottoLabel: {
    fontFamily: 'helvetica-med',
    fontSize: 15,
    paddingTop:1,
    paddingLeft:10,
    color: colors.unselectedQuestNote,
  },
});

