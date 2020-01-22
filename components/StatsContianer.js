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

export default class StatsContainer extends React.Component {
  /* 
    This is a continer for the profile picture of the user
   */

  constructor(props) {
    super(props);
  }

  _renderRow = (value, index) => {
      return (
        <View style={ index%2 === 0? styles.evenRow : styles.oddRow} key={index}>
          <Text style={styles.key}>
            {Object.keys(value)[0] + " :    "}
          </Text>
          <Text style={styles.value}>
            {value[Object.keys(value)[0]]}
          </Text>
        </View>
      )
    }


  render() {
    return (
      <View style={styles.container}>
        {this.props.stats.map(this._renderRow)}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop:20,
  },
  evenRow:{
    backgroundColor:'rgba(0,0,0, 0.1)',
    flexDirection:'row',
    height:20,
  },
  oddRow:{
    backgroundColor:'rgba(80,80,80, 0.1)',
    flexDirection:'row',
    height:20,
  },
  key: {
    fontFamily: 'helvetica-lt',
    fontSize: 12,
    color: colors.selectedQuestNote,
    paddingLeft:10,
  },
  value: {
    fontFamily: 'helvetica-lt',
    fontSize: 12,
    color: colors.selectedQuestNote,
    marginLeft: 'auto',
    paddingRight: 35,
  },
});

