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
        }]
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
        if(index === qIndex) value.selected = true;
        else value.selected = false;
      }
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
    quests[qIndex].tasks.splice(tindex, 1);
    this.setState({Quests: quests})
  }

  _selectTask = (qIndex, tIndex) => {
    //marks a single task as selecet from a given index quest
    quests = this.state.Quests; 
    quests[qIndex].tasks.forEach(
      (value, index) => {
        if(index === tIndex) value.selected = true;
        else value.selected = false;
      }
    )
    this.setState({Quests: quests})
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <Quest />
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  background:{
    height: '100%',
    width: '100%' 
  },
  container: {
    flex: 1,
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
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
