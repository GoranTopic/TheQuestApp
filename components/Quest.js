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
       tasks: [],
       selected: false,
       completed: false,
      };
    
    this.pushTask("Talk to Yennfer");
    this.pushTask("Go to Velven");
    this.pushTask("Have sex with Yennfer");
  } 

  componentDidMount(){
  }

  _addTask = (taskTitle) => this.state.tasks.push(taskTitle);
  


  //function to change into task title
  _toTaskTag = (value, index)=> <Task title={value} key={index}/>
  
  //push to state array
  pushTask = (taskTitle) => this.state.tasks.push(taskTitle);

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.taskContainer}>
          <Image source={require('../assets/images/shields/COA_Novigrad_Tw3.png')}
            style={styles.shield}
          />
          <Text style={styles.whiteText}>IN CIRI'S FOOTSTEPS</Text>
        </View>
        {this.state.tasks.map(this.toTaskTag)}
      </View>

    )
  }

}


const styles = StyleSheet.create({
 container:{ 
    flexDirection: 'column',
    paddingLeft: 20,
    paddingTop: 20
  },
  taskContainer:{
    flexDirection: 'row', 
  },  
  whiteText:{
    fontFamily:'helvetica-lt',
    color:'white',
    paddingLeft: 15,
    fontSize:30,
    flex:1,
  
  },
 shield:{
    width: 45,
    height: 45,
 },
});

