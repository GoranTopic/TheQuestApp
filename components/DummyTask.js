import React from 'react';
import { Image, Input} from 'react-native-elements'
import colors from '../constants/Colors';


import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class DummyTask extends React.Component{ 
  /* 
  The Dummy Task class is a  
  */

  constructor(props){
    super(props);
    this.state = {
      InputBuff: '',
    }
  } 

  _summit = () => {
    this.props._addTask(this.props._qindex, this.state.InputBuff);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.dummy} 
          source={require('../assets/images/DummyArrow.png')} 
        />
        <Input
          onSubmitEditing={this._summit}
          onChangeText={(input) => {this.setState({InputBuff: input})}}
          placeholder={'New Task'}
          style={styles.selected}
        /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 28,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  selected:{
    fontFamily:'helvetica-lt',
    paddingLeft:10,
    fontSize:18,
    flex:1,
    color: 'white',
  },
  dummy:{
    width:25,
    height:25,
  },
 
});

