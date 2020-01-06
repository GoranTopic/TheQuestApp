import React from 'react';
import { Text, Image, CheckBox } from 'react-native-elements'
import colors from '../constants/Colors';
import StyledIcon from '../components/StyledIcon';


import {
  TouchableOpacity,
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

  _exitEdit = () => {
    //exits the edit mode
    this.props._exitEditMode()
  }

  _edit = (newTitle) => {
    //edits a task
    this.props._editTask(newTitle, this.props._qindex, this.props._tindex);
  }

  _remove = () => {
    //removes a task from the quest
    this.props._removeTask(this.props._qindex, this.props._tindex);
  }

  _complete =  () => { 
    //fuction which marks the task as completed
    this.props._completeTask(this.props._qindex, this.props._tindex);
  }

  _select =  () => {
    //function which selects task
    this.props._selectTask(this.props._qindex, this.props._tindex)
  }

  _selectedMarker = () => {
    //fuction that changes the icon for the marker so that is displays as slected 
    return this.state.data.selected? 
      <Image style={styles.marker} source={require('../assets/images/markers/marker-selected.png')} />:
      <Image style={styles.marker} source={require('../assets/images/markers/marker.png')} /> 
  }


  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image 
          style={styles.Dummy} 
          source={require('../assets/images/markers/DummyTask.png')} 
          checked={this.state.data.done}
          onPress={this._select}
          onLongPress={this._complete}
          onIconPress={this._complete}
        />
        <TextInput
          onSubmitEditing={}
          onChangeText={}
          placeholder={"New Task"}
          style={styles.selected}
          defaultValue={this.props._questData.title}
        /> 
 
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

