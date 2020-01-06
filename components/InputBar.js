import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import { Overlay, Input } from 'react-native-elements'


import StyledIcon from '../components/StyledIcon';
import { color } from '../constants/Colors';

export default class InputBar extends React.Component {
  /* Bar icon which is reposnasable for the createioin of new quest,
   it also responsable for the selctio of a shild fo the quest 
   and the overly which comes with it
   */
  constructor(props) {
    super(props);
    this.state = {
      inputbuff: '',
      visibleOverlay: false,
      size: 70,
      selectedShiled: require('../assets/images/shields/COA_Novigrad_Tw3.png'),
      shileds: [
        require('../assets/images/shields/COA_Kaer_Morhen_Tw3.png'),
        require('../assets/images/shields/COA_multiple_locations_Tw3.png'),
        require('../assets/images/shields/COA_Skellige_Tw3.png'),
        require('../assets/images/shields/COA_Velen_Tw3.png'),
        require('../assets/images/shields/COA_White_Orchard_Tw3.png'),
        require('../assets/images/shields/COA_Novigrad_Tw3.png'),]
    }
  }

  _create = () => {
    this.props._createQuest(
      {
        title: this.state.inputbuff.toUpperCase(),
        shield: this.state.selectedShiled,
        selected: true,
        done: false,
        isInEditMode: false,
        tasks: [],
      }
    );
    //clear buffer
    this.setState({inputbuff: ''});
  }

  _selectShield = (shiled) => {
    //selects a default shild
    this.setState({selectedShiled: shiled});
    this._toggleOverlay();
  }

  _toggleOverlay = () => {
    this.props._exitEditMode();
    this.state.visibleOverlay = !this.state.visibleOverlay;
  }

  _addQuest

  _renderShiledPicker = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{flexDirection: 'row'}}>
          <StyledIcon onPress={() => this._selectShield(this.state.shileds[0])} style={styles.pickerShield} size={this.state.size} source={this.state.shileds[0]} />
          <StyledIcon onPress={() => this._selectShield(this.state.shileds[1])} style={styles.pickerShield} size={this.state.size} source={this.state.shileds[1]} />
          <StyledIcon onPress={() => this._selectShield(this.state.shileds[2])} style={styles.pickerShield} size={this.state.size} source={this.state.shileds[2]} />
          </View>
        <View style={{ flexDirection: 'row'}}>
          <StyledIcon onPress={() => this._selectShield(this.state.shileds[3])} style={styles.pickerShield} size={this.state.size} source={this.state.shileds[3]} />
          <StyledIcon onPress={() => this._selectShield(this.state.shileds[4])} style={styles.pickerShield} size={this.state.size} source={this.state.shileds[4]} />
          <StyledIcon onPress={() => this._selectShield(this.state.shileds[5])} style={styles.pickerShield} size={this.state.size} source={this.state.shileds[5]} />
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Overlay
          isVisible={this.state.visibleOverlay}
          windowBackgroundColor="rgba(0, 0, 0, .6)"
          overlayBackgroundColor="black"
          width="auto"
          height="auto"
          onBackdropPress={this._toggleOverlay}
        >
          {this._renderShiledPicker()}
        </Overlay>

        <StyledIcon
          style={styles.selectedShiled}
          name="bomb"
          source={this.state.selectedShiled}
          size={45}
          onPress={this._toggleOverlay}
        />
        <Input
          onChangeText={input => this.setState({ inputbuff: input })}
          onSubmitEditing={this._create}
          placeholder="New Quest..."
          style={styles.inputBar}
        />
        <StyledIcon
          source={this.state.selectedShiled}
          size={45}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 50,
    flexDirection: 'row',
  },
  inputBar: {
    fontFamily: 'helvetica-lt',
    paddingLeft: 25,
    fontSize: 20,
    color: 'white',
  },
  selectedShiled:{
    height: 20,
    width: 20, 
  },
  pickerShield: {
    padding:10,
  },
});
