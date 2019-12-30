import React, { Component } from "react";

import { LinearGradient } from 'expo-linear-gradient';
//import LinearGradient from "react-native-linear-gradient";

export class GradientHelper extends Component {
  render() {
    const {
      style,
      color1,
      color2,
      start,
      end,
    } = this.props;
    return (
      <LinearGradient
        colors={[color1, color2]}
        start={start}
        end={end}
        style={style}
      />
    );
  }
}
