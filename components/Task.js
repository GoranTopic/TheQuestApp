import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text, Image, CheckBox } from 'react-native-elements'

import {
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { tsImportEqualsDeclaration } from '@babel/types';

export default class Task extends React.Component{ 
  /* 
  The Task class is a a single To Do Elment in the quest. A quest is made up of smaller tasks
   which when they are all completed the ques is done
   a task as a internal state of completed or not completed
   it can also be set to selected, 
   // and in teh future a task might even come with a geo location which the user must go to.
   It takes props of the title of the task. 
  */


  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      completed: false,
      selected: false,
      };
  } 



  //fuction which marks the task as completed
  _check_ =  () => { 
    alertcheck();
    this.setState({ completed: !this.state.completed })
  }


  //fuctcioin which selects task
  _select_ =  () => this.setState({selected: !this.state.selected})

  //fuction that changes the icon for the marker so that is displays as slected 
  _selectedMarker_ = ()=> {
    return this.state.selected? 
      <Image style={styles.marker} source={require('../assets/images/markers/marker-selected.png')} />:
      <Image style={styles.marker} source={require('../assets/images/markers/marker.png')} /> 
  }


  render() {
    return (
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            title={<Text style={styles.whiteText}> {this.state.title} </Text>}
            containerStyle={styles.container}
            uncheckedIcon={this._selectedMarker_()} 
            checkedIcon={<Image style={styles.marker} source={require('../assets/images/markers/marker-done.png')} />}
            checked={this.state.completed}
            onPress={this._select_}
            onLongPress={this._check_}
          />

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
  },
  whiteText:{
    color:'white',
    fontFamily:'helvetica-lt',
    paddingLeft:10,
    fontSize:18,
    flex:1,
  
  },
  marker:{
    width:25,
    height:25,
  },
});

