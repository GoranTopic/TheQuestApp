import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';

import Quest from './Quest';
import InputBar from './InputBar';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

class QuestContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount(){
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    //this._storeQuestState(); //uncomment to use default quest data again
    //this._retrieveQuestState(); //if first time it should fail to retive anything   

  }

  componentWillUnmount(){
    this.backHandler.remove();
  }

  _storeQuestState = async () => {
    /*stores the data from the quest in persistant memeory, with some luck...*/
    try {
      await AsyncStorage.setItem('@QuestData:key', JSON.stringify([...this.state.Quests]) );
      console.log("Quests Saved successfully") 
    } catch (error) {
      console.error('AsyncStorage#setItem error: ' + error.message);
      console.log("Error while Saving Data")
      // Error saving data
    }
  };

  _retrieveQuestState = async () => {
    try {
      const storedQuests = JSON.parse(await AsyncStorage.getItem('@QuestData:key'));
      if (storedQuests !== null) {
        // We got the data, now set it to state!!
        this.setState({
          QCount: storedQuests.length,
          Quests: storedQuests,
        })
        console.log("Quest Retrived Successfully.")
      }
    } catch (error) {
      console.error('AsyncStorage#setItem error: ' + error.message);
      console.log("Error: could not retrieve Quest")
      console.log("Setting Deafult Quest Data")
      // Error retrieving data
    }
  };
  
  handleBackButtonClick = () => {
    /*Allegedly, handles back button press*/
    var quests = [...this.props.Quests];
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
    this.props.setReduxQuestState(quests);
    //set to local state as it is not viale change
    return isChange;
  }

  _createQuest = (newQuest) => {
    /*creates a new quest which is passed*/
    this._exitModes(); //if was in editting mode
    var quests = [...this.props.Quests];
    newQuest.qindex = quests.length;
    quests.push(newQuest);

    //set state
    //this.setState({ 
      //Quests: quests, 
      //QCount: this.state.QCount + 1 //update count
    //})
    // save Data to memory
    //this._storeQuestState();
    this.props.setReduxQuestState(quests);
  }
  _checkQuestIsDone = (qindex) => {
    /*checks wheather a quest has completed all it task, if so the mark it as complete*/
    var quests = [...this.props.Quests];
    var areAllDone = true;
    quests[qindex].tasks.forEach(
      (task) => {
        if (!task.done) areAllDone = false;
      }
    )
    quests[qindex].done = areAllDone;
    this.props.setReduxQuestState(quests);
    return true;
  }
  _removeQuest = (qindex) => {
    /*removes a quest in the quest array*/
    this._exitModes();
    var quests = [...this.props.Quests];
    //remove element
    quests.splice(qindex, 1);
    //update the index of every quest
    quests.forEach(
      (value, index) => {
        value.qindex = index;
      }
    )
    // set state
    //this.setState({ 
      //Quests: quests,
      //QCount: questCount,
    //});
    //this._storeQuestState(); // save Data to memory
    this.props.setReduxQuestState(quests);
  }

  _selectQuest = (qindex) => {
    /*marks a single quest as selected*/
    this._exitModes();
    var quests = [...this.props.Quests];
    quests[qindex].selected = !quests[qindex].selected;
    this.props.setReduxQuestState( quests );
  }

  _exitModes = () => {
    /*extis all mode on the Quest*/
    var quests = [...this.props.Quests];
    quests.forEach(value => {
      value.isInEditMode = false
      value.isActiveDummyTask = false;
    });
    //local state 
    this.props.setReduxQuestState(quests);
  }

  _exitEditMode = () => {
    /*set all exit Modes all the quest as false*/
    var quests = [...this.props.Quests];
    quests.forEach(value => { value.isInEditMode = false });
    this.props.setReduxQuestState( quests );
  }

  _exitDummyMode = () => {
    /*exits the dummy mode when adding tasks*/
    var quests = [...this.props.Quests];
    quests.forEach(value => { value.isActiveDummyTask = false; });
    //local state only
    this.props.setReduxQuestState(quests);
  }
  _editQuest = (newTitle, qindex) => {
    /*edit the selected quest*/
    var quests = [...this.state.Quests];
    quests[qindex].title = newTitle;
    //this.setState({ Quests: quests });
    this.props.setReduxQuestState(quests);
  }

  _setEditModeQuest = (qindex) => {
    /*change the mode as a deletable on the quest*/
    this._exitModes();
    var quests = [...this.props.Quests];
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
    //this.setState({ Quests: quests }); 
    //local state
    this.props.setReduxQuestState(quests);
  }
  _completeQuest = (qindex) => {
    /*marks a single quest as done*/
    this._exitModes();
    var quests = [...this.props.Quests];
    
    //update the index of every quest
    //complete a quest
    this.props.completeQuest(quests[qindex]);
  }

  _editTask = (newTitle, qindex, tindex) => {
    /*marks a single task as selecet from a given index quest*/
    var quests = [...this.props.Quests];
    quests[qindex].tasks[tindex].selected = newTitle; 
    //this.setState({ Quests: quests })
    //this._storeQuestState(); // save Data to memory
    this.props.setReduxQuestState(quests);
  }

  _addTask = (qindex, title) => {
    /*adds a task to the given index quest*/
    this._exitEditMode();
    var quests = [...this.props.Quests];
    quests[qindex].tasks.push(
      {
        title: title,
        tindex: quests[qindex].tCount,
        selected: false,
        done: false,
      }
    )
    quests[qindex].tCount = quests[qindex].tCount + 1;
    this._checkQuestIsDone(qindex);
    //this.setState({ Quests: quests })
    //this._storeQuestState(); // save Data to memory
    this.props.setReduxQuestState(quests);
  }

  _removeTask = (qindex, tindex) => {
    /*removes a single task from a quest of the given index*/
    var quests = [...this.props.Quests];
    //remove task
    quests[qindex].tasks.splice(tindex, 1);
    //update task indexes
    quests[qindex].tasks.forEach(
      (value, index) => value.tindex = index
    )
    quests[qindex].tCount--;
    this._checkQuestIsDone(qindex);
    this.props.setReduxQuestState(quests);
    //this._storeQuestState(); // save Data to memory
  }

  _selectTask = (qindex, tindex) => {
    /*marks a single task as selecet from a given index quest*/
    this._exitModes();
    var quests = [...this.props.Quests];
    quests[qindex].tasks.forEach( (value) => {
      if(value.tindex === tindex) value.selected = !value.selected; 
      else value.selected = false;
    })
    this.props.setReduxQuestState(quests)
  }

  _completeTask = (qindex, tindex) => {
    /*marks a single task as selecet from a given index quest*/
    this._exitModes();
    var quests = [...this.props.Quests];
    quests[qindex].tasks[tindex].selected = false; 
    quests[qindex].tasks[tindex].done = !quests[qindex].tasks[tindex].done; 
    
    this._checkQuestIsDone(qindex);
    this.props.setReduxQuestState(quests);
    //this.setState({ Quests: quests })
    //this._storeQuestState(); // save Data to memory
  }

  _renderQuest = (value) => {
    /*render and pass function props into the Quest component*/
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
          {this.props.Quests.map(this._renderQuest)}
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

function mapStateToProps(state){
  return{
    Quests: state.UserData.Quests,
  }
}

function mapDispatchTopProps(dispatch){
  return{
    completeQuest: (doneQuest) => dispatch({ type: 'COMPLETE_QUEST', doneQuest: doneQuest }),
    setReduxQuestState: (newQuests) => dispatch({ type: 'SET_QUEST', newQuests: newQuests })
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(QuestContainer);


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
