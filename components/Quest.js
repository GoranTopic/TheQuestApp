import React from 'react';
import colors from '../constants/Colors';

import { Text, Image, CheckBox } from 'react-native-elements';
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Task from './Task';

import { AnimatedGradient } from "../AnimatedGradient";



export default class Quest extends React.Component {
  /* 
     The Quest class is an expandable view, with a shield which expands to into a series of check tasks.
     onece every checkbox is filled it is makerd as competed and it is move to te completed screen.
     only one quest can be selected at the time.
     every quest grand the user some expirience points once completed.
   */

  selectGradiant = ["#4a3106", "transparent"];
  unselectGradiant = ["transparent", "transparent"];

  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      data: this.props._questData,
      layoutHeight: 0,
    };

  }

  _select = () => { this.state._selectQuest(this.state._qindex); }

  //function to change into task title
  _renderTask = (value, index) => {
    return (
      <Task
        data={value}
        _selectTask={this.props._selectTask}
        _completeTask={this.props._completeTask}
        _removeTask={this.props._removeTask}
        _tindex={index}
        _qindex={this.props._qindex}
        key={index}
      />)
  }

  //push to state array

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.gradientContainer}>
          <AnimatedGradient
            colors={ this.state.data.selected? 
              this.selectGradiant : this.unselectGradiant}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
        <TouchableOpacity 
          style={styles.questContainer}
          onPress={this._select}
        >
          <Image source={require('../assets/images/shields/COA_Novigrad_Tw3.png')}
            style={styles.shield} />
          <Text style={this.state.data.selected ? styles.selected : styles.unselected}>
            {this.props._questData.title}
          </Text>
        </TouchableOpacity>
        <View style={{ height: this.state.data.selected ? null : 0, overflow: 'hidden', }}>
          {this.props._questData.tasks.map(this._renderTask)}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingBottom: 30,
  },
  gradientContainer:{
    position: 'absolute',
    height: 45, 
    width: 300,
    paddingLeft: 15,
  },
  questContainer: {
    flexDirection: 'row',
  },
  done: {
    fontFamily: 'helvetica-lt',
    paddingLeft: 15,
    fontSize: 30,
    flex: 1,
    color: colors.doneTask,
    textDecorationLine: 'line-through',
  },
  selected: {
    fontFamily: 'helvetica-lt',
    paddingLeft: 15,
    fontSize: 30,
    flex: 1,
    color: colors.selectedQuest,
  },
  unselected: {
    fontFamily: 'helvetica-lt',
    paddingLeft: 15,
    fontSize: 30,
    flex: 1,
    color: colors.unselectedQuest,
  },

  shield: {
    width: 45,
    height: 45,
  },
});

