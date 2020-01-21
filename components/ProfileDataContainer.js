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
import StyledIcon from '../components/StyledIcon';



export default class MoneyAndLevelContainer extends React.Component {
  /* 
    This is a continer for the level and he money display bar, it gets passed 
    the level and the current expireince and it dispalys it ina  nice form
   */

  constructor(props) {
    super(props);
  }
  
  calcExpBar = () =>{
    /*Calcualtes the width of the exp bar, with luck, it does so accurelty*/
    let ratio = this.props.currentExp / this.props.nextLvExp    
    let maxWith = 120;
    return maxWith * ratio;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.MoneyContainer}>
          <Image
            style={styles.MoneyIcon}
            source={require('../assets/images/CoinsIcon.png')}
          />
          <Text style={styles.MoneyText} >
            {this.props.money}
            </Text>
        </TouchableOpacity>

        <View style={styles.LevelContianer}>
          <View style={styles.LevelBarContiner}>
            <ImageBackground
              style={styles.LevelBar}
              resizeMode='stretch'
              source={require('../assets/images/levelBarContainer.png')}
            >
              <View style={{ ...styles.LevelCurrent, width: this.calcExpBar(), }} />
            </ImageBackground>
            <Text style={styles.LevelRatio}>
              {this.props.currentExp}/{this.props.nextLvExp}
            </Text>
          </View>
          <Text style={styles.Level}>
            {this.props.level}
            </Text>
          <Text style={styles.LevelLabel}>
            LEVEL
            </Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop:5,
    height:50,
  },
  MoneyContainer: {
    width: '25%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  MoneyIcon:{
    height: 15, 
    width: 15, 
  },
  MoneyText: {
    fontFamily: 'helvetica-med',
    paddingRight: 7,
    fontSize: 18,
    color: 'white',
  },

  LevelContianer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '72%',
  },
  LevelBarContiner:{
    flexDirection:'column',
    paddingTop:10,
    alignItems:'flex-end',
  },
  LevelBar: {
    height: 15,
    width: 130,
    paddingLeft:4.5,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent:'center',
  },
  LevelCurrent:{
    backgroundColor:'white',
    borderRadius: 1,
    height: 10,
  },
  Level: {
    fontFamily: 'helvetica-med',
    paddingRight: 10,
    fontSize: 30,
    color: 'white',
  },
  LevelLabel: {
    fontFamily: 'helvetica-med',
    paddingRight: 5,
    fontSize: 11,
    color: '#948b75',
  },
  LevelRatio: {
    fontFamily: 'helvetica-med',
    paddingRight: 5,
    fontSize: 8,
    color: colors.unselectedQuest,
  },
});

