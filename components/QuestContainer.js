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
import { tsImportEqualsDeclaration } from '@babel/types';
import { HitTestResultTypes } from 'expo/build/AR';


export default class QuestContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      textInput: '',
      newTask: '',
      Quests: [
        {
          title: "IN CIRI'S FOOTSTEPS",
          shield: "/path/To/Img",
          selected: false,
          done: false,
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

  _addQuestTextInput = () =>{
    //handles the adding of a new quest from the text input
    this._addQuest(this.state.textInput);        
    this.state.textInput = '';
  }


  _addQuest = (newtitle) => {
    //Adds a new Quest to the list of quests
    var quests = this.state.Quests;
    quests.push({
      title: newtitle,
      shield: "N/A",
      selected: false,
      done: false,
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
    var quests = this.state.Quests; 
    quests.splice(index, 1);
    this.setState({Quests: quests})
  }

  _selectQuest = (qIndex) => {
    //marks a single quest as selected
    var quests = this.state.Quests;
    quests.forEach(
      (value,index) => {
        if(index == qIndex) value.selected = !value.selected;
        //else value.selected = false;
      }
    )
    this.setState({Quests: quests})
  }
  
  _completeQuest = (qIndex) => {
    //marks a single quest as done
    var quests = this.state.Quests;
    quests.forEach(
      (value,index) => { if(index === qIndex) value.done = true;}
    )
    this.setState({Quests: quests})
  }

  _addTask = (qIndex, title) => {
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
    return <Quest
      _questData={value}
      _selectQuest={this._selectQuest}
      _completeQuest={this._completeQuest}
      _removeQuest={this._removeQuest}
      _selectTask={this._selectTask}
      _completeTask={this._completeTask}
      _removeTask={this._removeTask}
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
            </Picker>
            <Button title="Shield" onPress={() => {
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
            <TextInput
              value={this.state.textInput}
              onChangeText={input => this.setState({ textInput: input })}
              onSubmitEditing={this._addQuestTextInput}
              placeholder="New Quest..."
              style={styles.input}
            />
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
    color:'white',
  },
  inputBar:{
    height: 50,
    width:'100%',
    backgroundColor:'lightgrey',
    flexDirection: 'row',
    
  },
});
