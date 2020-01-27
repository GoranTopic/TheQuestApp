import React from 'react';
import { Text, Image, CheckBox } from 'react-native-elements'
import colors from '../constants/Colors';
import StyledIcon from '../components/StyledIcon';
import { NoFlickerImage } from 'react-native-no-flicker-image';


import {
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
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
      ...this.props,
    };
  } 
  _exitEdit = ()=>{
    //exits the edit mode
    this.props._exitEditMode()
  }

  _edit = (newTitle) => {
    //edits a task
    this.props._editTask(newTitle, this.props.qindex, this.props.data.tindex);
  }
  _remove = () => {
    //removes a task from the quest
    this.props._removeTask(this.props.qindex, this.props.data.tindex);
  }

  _complete =  () => { 
    //fuction which marks the task as completed
    this.props._completeTask(this.props.qindex, this.props.data.tindex);
  }

  _select =  () => {
    //function which selects task
    this.props._selectTask(this.props.qindex, this.props.data.tindex)
  }

  _selectedMarker = () => {
    //fuction that changes the icon for the marker so that is displays as slected 
    return this.state.data.selected? 
      <NoFlickerImage style={styles.marker} source={require('../assets/images/markers/marker-selected.png')} />:
      <NoFlickerImage style={styles.marker} source={require('../assets/images/markers/marker.png')} /> 
  }


  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <CheckBox
          title={
            this.props.isInEditMode ?
              <TextInput style={styles.selected}
                onSubmitEditing={this._exitEdit}
                onChangeText={this._edit}
                defaultValue={this.state.data.title} /> :
              <Text
                style={this.state.data.done ?
                styles.done : this.state.data.selected ?
                  styles.selected : styles.unselected}>
                {this.state.data.title}
              </Text>
          }
          containerStyle={styles.container}
          uncheckedIcon={this._selectedMarker()}
          checkedIcon={<NoFlickerImage style={styles.marker} source={require('../assets/images/markers/marker-done.png')} />}
          checked={this.state.data.done}
          onPress={this._select}
          onLongPress={this._complete}
          onIconPress={this._complete}
        />
        {this.props.isInEditMode ?
          <StyledIcon
            style={styles.bombIcon}
            size={30}
            onPress={this._remove}
          />
          : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 18,
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderColor: 'rgba(52, 52, 52, 0)'
  },
  white:{
    color:'white',
  },
  done:{
    fontFamily:'helvetica-lt',
    paddingLeft:10,
    fontSize:18,
    flex:1,
    color: colors.doneTask,
    textDecorationLine: 'line-through',
  },
  selected:{
    fontFamily:'helvetica-lt',
    paddingLeft:10,
    fontSize:18,
    flex:1,
    color: colors.selectedTask,
  },
  unselected:{
    fontFamily:'helvetica-lt',
    paddingLeft:10,
    fontSize:18,
    flex:1,
    color: colors.unselectedTask,
  },
  marker:{
    width:25,
    height:25,
  },
  bombIcon:{
    paddingRight:5,
    paddingTop:10, 
  },
});

