import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text, Image, CheckBox } from 'react-native-elements'

import {
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Task from './Task';

export default class Quest extends React.Component{ 
  /* 
  The Quest class is an expandable view, with a shield which expands to into a series of check tasks.
  onece every checkbox is filled it is makerd as competed and it is move to te completed screen.
  only one quest can be selected at the time.
  every quest grand the user some expirience points once completed.
  */


  constructor(props){
    super(props);
    this.state = {
       ...this.props.Quest,
       selected: false,
       completed: false,
      };
  } 

  render() {
    return (
      <View style={{ flexDirection:'column', paddingLeft: 20, paddingTop: 20 }}>

        <View style={{ flexDirection: 'row' }}>

          <Image source={require('../assets/images/shields/COA_Novigrad_Tw3.png')}
            style={{ width: 45, height: 45 }}
          />
          <Text style={styles.whiteText}> CIRI'S FOOTSTEPS</Text>
        </View>

        <Task title='Go to Velven'/>
        <Task title='Talk to the bloddy Barron'/>
        <Task title='Find Yennifer'/>


      </View>

    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderColor: 'rgba(52, 52, 52, 0)'

  },
  white:{
    color:'white',
    paddingLeft:10,
  },
  whiteText:{
    fontFamily:'SpaceMono-Regular',
    color:'white',
    fontSize:30,
    flex:1,
  
  },
  marker:{
    width:20,
    height:20,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
});

