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

export default class InputBar extends React.Component {
  /* Bar icon which is reposnasable for the createioin of new quest,
   it also responsable for the selctio of a shild fo the quest 
   and the overly which comes with it
   */

  
  constructor(props) {
    super(props);
    this.state = {
      isVisibleBar: true,
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
    this.mainInput = React.createRef();
  }

  _create = () => {
    //clear buffer
    this.setState({inputbuff: ''});
    this.mainInput.current.clear();
    var randomExp = Math.floor(Math.random() * 50 + 1);
    this.props._createQuest(
      {
        title: this.state.inputbuff.toUpperCase(),
        shield: this.state.selectedShiled,
        exp: randomExp,
        selected: true,
        done: false,
        isInEditMode: false,
        isActiveDummyTask: true,
        tasks: [],
      }
    );
  }

  _selectShield = (shiled) => {
    //selects a default shild
    this.setState({selectedShiled: shiled});
    this._toggleOverlay();
    this.mainInput.current.focus();
  }

  _toggleOverlay = () => {
    this.props._exitEditMode();
    this.state.visibleOverlay = !this.state.visibleOverlay;
  }

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
      this.state.isVisibleBar ?
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
            size={40}
            onPress={this._toggleOverlay}
          />
           <Input
             ref={this.mainInput}
             onChangeText={input => this.setState({ inputbuff: input })}
             onSubmitEditing={this._create}
             clearButtonMode="always"
             placeholder="New Quest..."
             inputStyle={styles.inputBar}
             inputContainerStyle={styles.inputContainer}
           />
        </View>
        : null
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: 50,
    paddingLeft: 18,
    flexDirection: 'row',
  },
  inputContainer:{
    borderBottomColor: "#845426",
    maxWidth: 300,
    width: null,
    paddingRight: 100,
  },
  inputBar: {
    fontFamily: 'helvetica-lt',
    paddingLeft:10,
    paddingRight: 10,
    maxWidth: 300,
    fontSize: 20,
    width: 100,
    color: 'white',
  },
  selectedShiled:{
    height: null,
    width: null, 
  },
  pickerShield:{
    padding:10,
  },
  picker:{

  },
});
