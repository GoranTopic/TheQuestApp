import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Button,
  Picker,
  BackHandler,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';


import { color } from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import Quest from './Quest';
import inputBar from './InputBar';
import StyledIcon from '../components/StyledIcon';
import { tsImportEqualsDeclaration } from '@babel/types';
import { HitTestResultTypes } from 'expo/build/AR';
import InputBar from './InputBar';


export default class QuestContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      QCount: 3,
      Quests: [
        {
          qindex: 0,
          title: "IN CIRI'S FOOTSTEPS",
          shield: require('../assets/images/shields/COA_multiple_locations_Tw3.png'),
          exp: 10,
          selected: false,
          done: false,
          isInEditMode: false,
          isActiveDummyTask: false,
          tCount: 4,
          tasks: [
            {
              title: "Go To Velen",
              tindex: 0,
              selected: false,
              done: false,
            }, {
              title: "Find Yennifer",
              tindex: 1,
              selected: false,
              done: false,
            }, {
              title: "Have Sex with Yennifer",
              tindex: 2,
              selected: false,
              done: false,
            }
          ]
        }, {
          qindex: 1,
          title: "GWENT: VELEN PLAYERS",
          shield: require('../assets/images/shields/COA_Velen_Tw3.png'),
          exp: 20,
          selected: false,
          done: false,
          isInEditMode: false,
          isActiveDummyTask: false,
          tCount: 4,
          tasks: [
            {
              title: "Win a unique card from the baron",
              tindex: 0,
              selected: false,
              done: false,
            }, {
              title: "Win a unique card from the man in Oreton",
              tindex: 1,
              selected: false,
              done: false,
            }, {
              title: "Win a unique card from Haddy of Midcopse",
              tindex: 2,
              selected: false,
              done: false,
            }, {
              title: "Win a unique card from the soothsayer",
              tindex: 3,
              selected: false,
              done: false,
            }]
        }, {
          qindex: 2,
          title: "SCAVENGER HUNT: CAT SCHOOL GEAR UPGRADE DIAGRAMS",
          shield: require('../assets/images/shields/COA_Novigrad_Tw3.png'),
          exp: 15,
          selected: false,
          done: false,
          isInEditMode: false,
          isActiveDummyTask: false,
          tCount: 4,
          tasks: [
            {
              title: "Find boot Diagram using your Witcher senses",
              tindex: 0,
              selected: false,
              done: false,
            }, {
              title: "Find the silver sword ugrade diagram using your Witcher Senses",
              tindex: 1,
              selected: false,
              done: false,
            }, {
              title: "Find the armor upgrade diagram using your Witcher Senses",
              tindex: 2,
              selected: false,
              done: false,
            }, {
              title: "Win a unique card from the soothsayer",
              tindex: 3,
              selected: false,
              done: false,
            }]
        },
      ]
    }
  }

  componentDidMount(){
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount(){
    this.backHandler.remove();
  }
 
  handleBackButtonClick = () => {
    //Allegedly, handles back button press
    var quests = [...this.state.Quests];
    var isChange = false;
    quests.forEach(value => {
      if(value.isInEditMode){
        value.isInEditMode = false;
        isChange = true;
      }else if(value.isActiveDummyTask){
        value.isActiveDummyTask = false;
        isChange = true;
      }else if(value.selected){
        value.selected = false;
        isChange = true;
      }
    });
    this.setState({ Quests: quests });
    return isChange;
  }

  _createQuest = (newQuest) => {
    //creates a new quest which is passed
    this._exitModes(); //if was in editting mode
    var quests = [...this.state.Quests];
    newQuest.qindex = this.state.QCount;
    quests.push(newQuest);
    this.setState({ 
      Quests: quests, 
      QCount: this.state.QCount + 1
    }) //update count
  }

  _checkQuestIsDone = (qindex) => {
    //checks wheather a quest has completed all it task, if so the mark it as complete
    var quests = [...this.state.Quests];
    var areAllDone = true;
    quests[qindex].tasks.forEach(
      (task) => {
        if (!task.done) areAllDone = false;
      }
    )
    quests[qindex].done = areAllDone;
    this.setState({ Quests: quests })
    return true;
  }

   _removeQuest = (qindex) => {
     this._exitModes();
    //removes a quest in the quest array
    var quests = [...this.state.Quests];
    var questCount = 0;
    //remove element
    quests.splice(qindex, 1);
    //update the index of every quest
    quests.forEach(
      (value, index) => {
        value.qindex = index;
        questCount++;
      }
    )
    this.setState({ 
      Quests: quests,
      QCount: questCount,
    });
  }

  _selectQuest = (qindex) => {
    //marks a single quest as selected
    this._exitModes();
    var quests = [...this.state.Quests];
    quests[qindex].selected = !quests[qindex].selected;
    this.setState({ Quests: quests });
  }

  _exitModes = () => {
    //extis all mode on the Quest
    var quests = [...this.state.Quests];
    quests.forEach(value => {
      value.isInEditMode = false
      value.isActiveDummyTask = false;
    });
    this.setState({ Quests: quests });
  }

  _exitEditMode = () => {
    //set all exit Modes all the quest as false
    var quests = [...this.state.Quests];
    quests.forEach(value => { value.isInEditMode = false });
    this.setState({ Quests: quests });
  }

  _exitDummyMode = () => {
    //exits the dummy mode when adding tasks
    var quests = [...this.state.Quests];
    quests.forEach(value => { value.isActiveDummyTask = false; });
    this.setState({ Quests: quests });
  }

  _editQuest = (newTitle, qindex) => {
    //edit the selected quest
    var quests = [...this.state.Quests];
    quests[qindex].title = newTitle;
    this.setState({ Quests: quests });
  }

  _setEditModeQuest = (qindex) => {
    //change the mode as a deletable on the quest
    this._exitModes();
    var quests = [...this.state.Quests];
    quests.forEach(
      (value, index) => {
        if (index === qindex) {
          value.isInEditMode = !value.isInEditMode;
          value.selected = true;
        }
        else {
          //set de select all other quest
          value.isInEditMode = false;
          value.selected = false;
        }
      }
    )
    this.setState({ Quests: quests });
  }

  _completeQuest = (qindex) => {
    //marks a single quest as done
    this._exitModes();
    var quests = [...this.state.Quests];
    quests[qindex].done = true;
    this.setState({ Quests: quests })
  }

  _editTask = (newTitle, qindex, tindex) => {
    //marks a single task as selecet from a given index quest
    var quests = [...this.state.Quests];
    quests[qindex].tasks[tindex].selected = newTitle; 
    this.setState({ Quests: quests })
  }

  _addTask = (qindex, title) => {
    //adds a task to the given index quest
    this._exitEditMode();
    var quests = [...this.state.Quests];
    quests[qindex].tasks.push(
      {
        title: title,
        tindex: quests[qindex].tCount,
        selected: false,
        done: false,
      }
    )
    quests[qindex].tCount = quests[qindex].tCount + 1;
    console.log("created task index: " + quests[qindex].tCount)
    this._checkQuestIsDone(qindex);
    this.setState({ Quests: quests })
  }


  _removeTask = (qindex, tindex) => {
    //removes a single task from a quest of the given index
    var quests = [...this.state.Quests];
    //remove task
    quests[qindex].tasks.splice(tindex, 1);
    //update task indexes
    quests[qindex].tasks.forEach(
      (value, index) => value.tindex = index
    )
    quests[qindex].tCount--;
    this._checkQuestIsDone(qindex);
    this.setState({ Quests: quests })
  }

  _selectTask = (qindex, tindex) => {
    //marks a single task as selecet from a given index quest
    this._exitModes();
    console.log("qindex: "+ qindex + " tindex: "+ tindex);
    var quests = [...this.state.Quests];
    quests[qindex].tasks.forEach( (value) => {
      if(value.tindex === tindex) value.selected = !value.selected; 
      else value.selected = false;
    })
    this.setState({ Quests: quests })
  }

  _completeTask = (qindex, tindex) => {
    //marks a single task as selecet from a given index quest
    this._exitModes();
    var quests = [...this.state.Quests];
    quests[qindex].tasks[tindex].selected = false; 
    quests[qindex].tasks[tindex].done = !quests[qindex].tasks[tindex].done; 
    
    this._checkQuestIsDone(qindex);
    this.setState({ Quests: quests })
  }

  _renderQuest = (value, index) => {
    //render and pass function props into the Quest component
    return <Quest
      _questData={value}
      _selectQuest={this._selectQuest}
      _completeQuest={this._completeQuest}
      _removeQuest={this._removeQuest}
      _editQuest={this._editQuest}
      _setEditModeQuest={this._setEditModeQuest}
      _exitEditMode={this._exitEditMode}
      _selectTask={this._selectTask}
      _completeTask={this._completeTask}
      _removeTask={this._removeTask}
      _editTask={this._editTask}
      _addTask={this._addTask}
      key={JSON.stringify(value)}
    />
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollable} >
          {this.state.Quests.map(this._renderQuest)}
          <View style={styles.emptyspace}/>
        </ScrollView>
        <KeyboardAvoidingView
          style={styles.avoidingView}
          behavior='padding'
          keyboardVerticalOffset={50 + Expo.Constants.statusBarHeight}
          enabled
        >
          <InputBar
            _changeQuestShiled={this._changeQuestShiled}
            _createQuest={this._createQuest}
            _exitEditMode={this._exitEditMode}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  scrollable: {

  },
  avoidingView: {
  },
  textinput: {
    color: 'black',
  },
  inputBar: {
    height: 50,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
  },
  emptyspace:{
    backgroundColor: 'transparent',
    width: null,
    height: 250,
  }
});
