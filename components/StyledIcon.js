import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

export default class StyledIcon extends React.Component {

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={this.props.style}
        >
          <Image
            style={{...styles.icon, height: this.props.size, width: this.props.size}}
            source={require('../assets/images/delete-icon.png')} />

        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  icon:{
    right: 0,
  },
});


