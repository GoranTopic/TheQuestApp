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
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';


import {color} from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import Quest from '../components/Quest'
import StyledIcon from '../components/StyledIcon';
import { tsImportEqualsDeclaration } from '@babel/types';
import { HitTestResultTypes } from 'expo/build/AR';


export default class QuestContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      inputbuff: '',
      questInput: '',
      newTask: '',
      dummyTask:'',
      isWritingTasks: false,
      Quests: [
        {
          title: "IN CIRI'S FOOTSTEPS",
          shield: "/path/To/Img",
          selected: false,
          done: false,
          isInEditMode: false,
          tasks: [
            {
              title: "Go To Velen",
              selected: false,
              done: false,
            }, {
              title: "Find Yennifer",
              selected: false,
              done: false,
            }, {
              title: "Have Sex with Yennifer",
              selected: false,
              done: false,
            }
          ]
        }, {
          title: "GWENT: VELEN PLAYERS",
          shield: "/path/To/Img",
          selected: false,
          done: false,
          isInEditMode: false,
          tasks: [
            {
              title: "Win a unique card from the baron",
              selected: false,
              done: false,
            }, {
              title: "Win a unique card from the man in Oreton",
              selected: false,
              done: false,
            }, {
              title: "Win a unique card from Haddy of Midcopse",
              selected: false,
              done: false,
            }, {
              title: "Win a unique card from the soothsayer",
              selected: false,
              done: false,
            }]
        }, {
          title: "SCAVENGER HUNT: CAT SCHOOL GEAR UPGRADE DIAGRAMS",
          shield: "/path/To/Img",
          selected: false,
          done: false,
          isInEditMode: false,
          tasks: [
            {
              title: "Find boot Diagram using your Witcher senses",
              selected: false,
              done: false,
            }, {
              title: "Find the silver sword ugrade diagram using your Witcher Senses",
              selected: false,
              done: false,
            }, {
              title: "Find the armor upgrade diagram using your Witcher Senses",
              selected: false,
              done: false,
            }, {
              title: "Win a unique card from the soothsayer",
              selected: false,
              done: false,
            }]
        },  
      ]
    }
  }

  _handlekeyboradInput = () =>{
    this._exitEditMode();
    //handles the adding of a new quest from the text input
    if(this.state.isWritingTasks){
      //if it is writting the tasks
      this._addTask(this.state.Quests.length - 1, this.state.inputbuff); 

    }else{
      //if first quest is not yet written
      this._addQuest(this.state.inputbuff);
      this.setState({ inputbuff: '', isWritingTasks: true });
      this._addTask(this.state.Quests.length - 1, " ");
      this._selectQuest(this.state.Quests.length - 1);
    }
  }


  _addQuest = (newtitle) => {
    //Adds a new Quest to the list of quests
    this._exitEditMode();
    var quests = this.state.Quests;
    quests.push({
      title: newtitle,
      shield: "N/A",
      selected: false,
      done: false,
      isInEditMode: false,
      tasks:[],
    })
    this.setState({Quests: quests})
  }

  _changeQuestShiled = (index) => {
    //changes the shild in shown in the quest
    //coming soon near you...
  }

  _removeQuest = (index) => {
    //removes a quest in the quest array
    this._exitEditMode();
    var quests = this.state.Quests; 
    quests.splice(index, 1);
    this.setState({Quests: quests})
  }

  _exitEditMode = () => {
    //set all exit Modes all the quest as false
    var quests = this.state.Quests;
    quests.forEach( value => value.isInEditMode = false );
    this.setState({Quests: quests});
  }
  
  _selectQuest = (qIndex) => {
    //marks a single quest as selected
    this._exitEditMode();
    var quests = this.state.Quests;
    quests.forEach(
      (value,index) => {
        if(index == qIndex){
          value.selected = !value.selected;
          //comment out this line to make quest selecte exclusible to one quest
          //else value.selected = false;
        }
      }
    )
    this.setState({Quests: quests});
  }

  _editQuest = (newTitle, qIndex) => {
    //edit the selected quest
    var quests = this.state.Quests;
    quests.forEach(
      (value, index) => { if(index == qIndex) value.title = newTitle }
      
    )
    this.setState({ Quests: quests });
  }


  _setEditModeQuest = (qIndex) => {
    //change the mode as a deletable on the quest
    this._exitEditMode();
    var quests = this.state.Quests;
    quests.forEach(
      (value, index) => {
        if (index == qIndex){
          value.isInEditMode = !value.isInEditMode;
          value.selected = true;
        }
        else{ 
          value.isInEditMode = false;
          value.selected = false;
        }
      }
    )
    this.setState({ Quests: quests });
  }

  _completeQuest = (qIndex) => {
    //marks a single quest as done
    this._exitEditMode();
    var quests = this.state.Quests;
    quests.forEach(
      (value,index) => { if(index === qIndex) value.done = true;}
    )
    this.setState({Quests: quests})
  }

  _editTask = (newTitle, qIndex, tIndex) => {
    //marks a single task as selecet from a given index quest
    var quests = this.state.Quests; 
    quests[qIndex].tasks.forEach(
      (value, index) => {
        if(index == tIndex) value.title = newTitle;
      }
    )
    this.setState({Quests: quests})
  }

  _addTask = (qIndex, title) => {
    //adds a task to the given index quest
    this._exitEditMode();
    var quests = this.state.Quests;
    quests[qIndex].tasks.push(
      {
        title: title,
        selected: false,
        done: false,
      }
    )
    this.setState({Quests: quests})
  }

  _addDummyTask = (qIndex, title) => {
    //adds a task to the given index quest
    var quests = this.state.Quests;
    quests[qIndex].tasks.push(
      {
        title: title,
        selected: false,
        done: false,
      }
    )
    this.setState({Quests: quests})
  }


  _removeTask = (qIndex, tIndex) => {
    //removes a single task from a quest of the given index
    var quests = this.state.Quests; 
    quests[qIndex].tasks.splice(tIndex, 1);
    this.setState({Quests: quests})
  }

  _selectTask = (qIndex, tIndex) => {
    //marks a single task as selecet from a given index quest
    this._exitEditMode();
    var quests = this.state.Quests; 
    quests[qIndex].tasks.forEach(
      (value, index) => {
        if(index == tIndex) value.selected = !value.selected;
        else value.selected = false;
      }
    )
    this.setState({Quests: quests})
  }

  _completeTask = (qIndex, tIndex) => {
    //marks a single task as selecet from a given index quest
    this._exitEditMode();
    var quests = this.state.Quests; 
    quests[qIndex].tasks.forEach(
      (value, index) => {
        if(index == tIndex){ 
          value.selected = false;
          value.done = !value.done;
        }
      }
    )
    this.setState({Quests: quests})
  }

  _renderQuest = (value, index)=>{
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

      _qindex={index}
      key={index}
    />
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollable} >
          {this.state.Quests.map(this._renderQuest)}
        </ScrollView>
        <KeyboardAvoidingView
          style={styles.avoidingView}
          behavior='padding'
          enabled
        >
          <View style={styles.inputBar}>
            <Picker
              selectedValue={this.state.newShield}
              style={{ height: 50, width: 100 }}
              onValueChange={
                (itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Swift" value="swift" />
            </Picker>
            <TextInput
              value={this.state.inputbuff}
              onChangeText={input => this.setState({ inputbuff: input })}
              onSubmitEditing={this._handlekeyboradInput}
              placeholder="New Quest..."
              style={styles.input}
            />
            <Button title={this.state.isWritingTasks? "Task": "Quest"} onPress={() => {
              var quests = this.state.Quests;
              quests.push({
                title: "new quest",
                shield: "N/A",
                selected: false,
                done: false,
                tasks: [],
              })
              this.setState({ Quests: quests })
            }} />
              
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
  },
  scrollable:{

  },
  avoidingView:{
  },
  textinput:{
    color:'black',
  },
  inputBar:{
    height: 50,
    backgroundColor:'lightgrey',
    flexDirection: 'row',
    
  },
});
