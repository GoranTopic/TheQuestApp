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
        >
          <Image
            style={styles.icon}
            source={require('../assets/images/delete-icon.png')} />

        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  icon:{
    height: 45,
    width: 45,
  },
});


