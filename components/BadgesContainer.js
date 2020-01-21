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
    this.state = {
      badges: [
        require('../assets/images/Badges/badge1.png'),
        require('../assets/images/Badges/badge2.png'),
        require('../assets/images/Badges/badge3.png'),
        require('../assets/images/Badges/badge4.png'),
        require('../assets/images/Badges/badge5.png'),
        require('../assets/images/Badges/badge6.png'),
        require('../assets/images/Badges/badge7.png'),
        require('../assets/images/Badges/badge8.png'),
        require('../assets/images/Badges/badge9.png'),
        require('../assets/images/Badges/badge10.png'),
        require('../assets/images/Badges/badge11.png'),
        require('../assets/images/Badges/badge12.png'),
        require('../assets/images/Badges/badge13.png'),
        require('../assets/images/Badges/badge14.png'),
        require('../assets/images/Badges/badge15.png'),
      ]
    }
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

