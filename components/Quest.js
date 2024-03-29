import React from 'react';

import { Text, Image, Icon } from 'react-native-elements';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

import Task from './Task';
import colors from '../constants/Colors';
import { AnimatedGradient } from '../AnimatedGradient';
import StyledIcon from '../components/StyledIcon';
import DummyTask from './DummyTask';
import { NoFlickerImage } from 'react-native-no-flicker-image';



export default class Quest extends React.Component {
  /*
     The Quest class is an expandable view, with a shield which expands to into a series of check tasks.
     onece every checkbox is filled it is makerd as competed and it is move to te completed screen.
     only one quest can be selected at the time.
     every quest grand the user some expirience points once completed.
   */
  completedGradient = "13300c"; //green 
  selectedGradiant = "4a3106"; //yellow
  editModeGradiant = "8d0b0b"; //red

  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      data: this.props._questData,
      layoutHeight: 0,
    };
  }
    
  _gradientColorMixer = () =>{
    //mixes the colors of the difrent possible gradients
    var c1 = this.state.data.done ? this.completedGradient : "0";
    var c2 = this.state.data.isInEditMode? this.editModeGradiant: "0";
    var c3 = this.state.data.selected? this.state.data.isInEditMode? "0" : this.selectedGradiant: "0";
    var hexStr = (parseInt(c1, 16) + parseInt(c2, 16) + parseInt(c3, 16) ).toString(16);
    while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
    return ["#" + hexStr, "transparent"]
  } 
  //exits edditing more
  _exitEdit = () => {this.state._exitEditMode()}

  //mark the quest as completed
  _complete = () => {this.state._completeQuest(this.state.data.qindex)}

  //mark this quest as slected
  _select = () => {
    this.state._selectQuest(this.state.data.qindex);
  }

  //make an edit on the Quest title
  _edit = (newTitle) => {this.state._editQuest(newTitle, this.state.data.qindex)}

  //set the quest as a editable Mode
  _setEditMode = () => { this.state._setEditModeQuest(this.state.data.qindex);}

  //remove quest 
  _remove = () => {this.state._removeQuest(this.state.data.qindex)}

  //function to change into task title
  _renderTask = (value, index) => {
    return (
      <Task
        data={value}
        _selectTask={this.props._selectTask}
        _completeTask={this.props._completeTask}
        _removeTask={this.props._removeTask}
        _editTask={this.props._editTask}
        _exitEditMode={this.props._exitEditMode}
        qindex={this.state.data.qindex}
        isInEditMode = {this.state.data.isInEditMode}
        key={JSON.stringify(value)}
      />)
  }
  //push to state array
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.gradientContainer}>
            <AnimatedGradient
              colors={this._gradientColorMixer()}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
          <ImageBackground 
            style={styles.bgContainer}
            resizeMode='stretch'
            source={require('../assets/images/Boarder-container-orange-grad.png')}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={styles.questContainer}
              onPress={this._select}
              onLongPress={this._setEditMode}
            >
              <NoFlickerImage source={this.state.data.shield}
                style={styles.shield} />
                <View style={{ flexDirection: 'column' }}>
                {this.state.data.isInEditMode ?
                  <TextInput
                    onSubmitEditing={this._exitEdit}
                    onChangeText={this._edit}
                    style={styles.editQuestTitle}
                    defaultValue={this.props._questData.title}
                  /> :
                  <Text style={this.state.data.selected ? styles.selected : styles.unselected}>
                    {this.props._questData.title}
                  </Text>
                }
                <Text style={styles.exp}>EXP: {this.state.data.exp}</Text>
              </View>
              {this.state.data.isInEditMode ?
              //if it is in edit mode
                <StyledIcon
                  style={styles.bombIcon}
                  name="bomb"
                  size={45}
                  onPress={this._remove}
                />
                : this.state.data.done ?
                //if Quest is done
                  <StyledIcon
                    style={styles.rewardIcon}
                    name="reward"
                    size={38}
                    onPress={this._complete}
                  /> : null}
            </TouchableOpacity>
          </ImageBackground>
        </View>
        {/* Container for the tasks */}
        <View style={{ height: this.state.data.selected ? null : 0, overflow: 'hidden', }}>
          {this.props._questData.tasks.map(this._renderTask)}
          {this.state.data.isActiveDummyTask || this.state.data.isInEditMode? 
            <DummyTask 
              _addTask={this.props._addTask}
              qindex={this.state.data.qindex}
            /> : null}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  titleContainer: {
    flex: 1,
  },
  bgContainer: {
    flex: 1,
    height: null,
    width: null,
  },
  gradientContainer: {
    flex:1,
    position:'absolute',
    height: '100%',
    width: 180,
    paddingBottom: 5, 
    paddingLeft: 9,
    paddingTop: 4,
  },
  questContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  done: {
    fontFamily: 'helvetica-lt',
    paddingLeft: 15,
    fontSize: 20,
    flex: 1,
    color: colors.doneTask,
    textDecorationLine: 'line-through',
  },
  selected: {
    fontFamily: 'helvetica-lt',
    paddingLeft: 15,
    fontSize: 20,
    flex: 1,
    paddingTop: 20,
    paddingBottom: 0,
    color: colors.selectedQuest,
  },
  editQuestTitle: {
    fontFamily: 'helvetica-lt',
    paddingLeft: 15,
    fontSize: 20,
    paddingTop: 20,
    maxWidth : "70%",
    paddingBottom: 0,
    color: colors.selectedQuest,
  },
  unselected: {
    fontFamily: 'helvetica-lt',
    paddingLeft: 15,
    fontSize: 20,
    flex: 1,
    paddingTop: 20,
    color: colors.unselectedQuest,
  },
  exp:{
    fontFamily: 'helvetica-lt',
    paddingLeft: 25,
    fontSize: 12,
    flex: 1,
    paddingBottom: 20,
    color: colors.unselectedQuestNote,
  },
  bombIcon:{
    paddingRight:10,
    marginLeft: 'auto',
  },
  rewardIcon:{
    marginLeft: 'auto',
    paddingRight:10,
  },
  shield: {
    width: 40,
    height: 40,
  },
});

