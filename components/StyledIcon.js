import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

export default class StyledIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icons:{
        bomb: require('../assets/images/delete-icon.png'),
        reward: require('../assets/images/delete-icon.png')
      },
    }
  }

  _getImage = () => {
    //if a source props is passed it return it, while it it is not and a name is passed 
    if( this.props.source == null){
      if(this.props.name == null){
        //return icon not ser icon
        return this.state.icons.bomb;
      }else{  
        //if icon name is passed
        if(this.props.name == "bomb") return this.state.icons.bomb;
        else if(this.props.name == "reward") return this.state.icons.reward;
      }
    }else{
      //if address is passed
      return this.props.source;
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={this.props.style}
        >
          <Image
            style={{ height: this.props.size, width: this.props.size }}
            source={this._getImage()}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
});


