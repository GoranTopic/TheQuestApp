import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

import {color} from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import Quest from '../components/Quest'
import { tsImportEqualsDeclaration } from '@babel/types';


export default class QuestContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
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

  _addQuest = (title) => {
    //Adds a new Quest to the list of quests
    quests = this.state.Quests;
    quests.push({
      title: title,
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
    quests = this.state.Quests; 
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
    quests = this.state.Quests;
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
    quests = this.state.Quests; 
    quests[qIndex].tasks.splice(tIndex, 1);
    this.setState({Quests: quests})
  }

  _selectTask = (qIndex, tIndex) => {
    //marks a single task as selecet from a given index quest
    quests = this.state.Quests; 
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
    quests = this.state.Quests; 
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
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            {this.state.Quests.map(this._renderQuest)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
