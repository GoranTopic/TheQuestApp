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
    this.dummyInput = React.createRef();
  } 

  _summit = () => {
    this.dummyInput.current.clear();
    this.props._addTask(this.props.qindex, this.state.InputBuff);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.dummy} 
          source={require('../assets/images/DummyArrow.png')} 
        />
        <TextInput
          ref={this.dummyInput}
          style={styles.unselected}
          onSubmitEditing={this._summit}
          clearButtonMode="always"
          onChangeText={(input) => {this.setState({InputBuff: input})}}
          placeholder={'New Task'}
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
  unselected:{
    fontFamily:'helvetica-lt',
    paddingLeft:10,
    fontSize:18,
    flex:1,
    color: colors.unselectedTask,
  },
  dummy:{
    width:25,
    height:25,
  },
 
});

