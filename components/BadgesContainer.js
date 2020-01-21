import React from 'react';

import { Text, Image, } from 'react-native-elements';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import colors from '../constants/Colors';
import StyledIcon from '../components/StyledIcon';
import { Overlay,} from 'react-native-elements'

export default class BadgesContainer extends React.Component {
  /* 
   A container for all teh badges one can achive
   */

  constructor(props) {
    super(props);
    this.state = {
      selectedBadge: require('../assets/images/Badges/badge1.png'),
      selectedDes: "none selected",
      visibleOverlay: false,
      badges: [
        require('../assets/images/Badges/badge1.png'),
        require('../assets/images/Badges/badge2.png'),
        require('../assets/images/Badges/badge3.png'),
        require('../assets/images/Badges/badge4.png'),
        require('../assets/images/Badges/badge5.png'),
        require('../assets/images/Badges/badge6.png'),
        require('../assets/images/Badges/badge7.png'),
        require('../assets/images/Badges/badge8.png'),
        require('../assets/images/Badges/badge9.png'),
        require('../assets/images/Badges/badge10.png'),
        require('../assets/images/Badges/badge11.png'),
        require('../assets/images/Badges/badge12.png'),
        require('../assets/images/Badges/badge13.png'),
        require('../assets/images/Badges/badge14.png'),
        require('../assets/images/Badges/badge15.png'),
      ],
      descriptions: [
        "badge 1",
        "badge 2",
        "badge 3",
        "badge 4",
        "badge 5",
        "badge 6",
        "badge 7",
        "badge 8",
        "badge 9",
        "badge 10",
        "badge 11",
        "badge 12",
        "badge 13",
        "badge 14",
        "badge 15",
      ]
    }
  }


  _selectBadge = (badge, des) => {
    //selects a Badge and displays its description
    this.setState({
      selectedDes: des,
      selectedBadge: badge
    });
    this._toggleOverlay();
  }

  _toggleOverlay = () => {
    //this.props._exitEditMode();
    this.setState({visibleOverlay: !this.state.visibleOverlay});
  }

  _renderBadgeDescriptionModal = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <Image
          style={styles.badgeDes}
          source={this.state.selectedBadge}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text>
            {this.state.selectedDes}
          </Text>
        </View>
      </View>
    )
  }

  _renderBadges = () => {
    /* 
      This ia an ugly soclution and I am so terribly ashamed to admit I wrote it. 
      I'm trully sorry for you reader, find it in your heart to forgive me  one day =(
      Anyways, it renders the badges
      */

    return (
      <View>
        {
          this.state.badges.forEach((badge, index) =>
            <StyledIcon
              style={styles.badge}
              size={50}
              source={this.state.badges[badge]}
              onPress={() => this._selectBadge(badge, this.state.descriptions[index])} />
          )
        }
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
            <StyledIcon
              style={styles.badge}
              size={50}
              source={this.state.badges[1]}
              onPress={() => this._selectBadge(this.state.badges[1], this.state.descriptions[1])} />
        {this.state.badges.forEach((badge, index) =>
            <StyledIcon
              style={styles.badge}
              size={50}
              source={this.state.badges[index]}
              onPress={() => this._selectBadge(this.state.badges[index], this.state.descriptions[index])} />
          )}
        <Overlay
          isVisible={this.state.visibleOverlay}
          windowBackgroundColor="rgba(0, 0, 0, .6)"
          overlayBackgroundColor="black"
          width="auto"
          height="auto"
          onBackdropPress={this._toggleOverlay}
        >
          {this._renderBadgeDescriptionModal()}
        </Overlay>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop:15,
    height:130,
  },
  badgeDes:{
    height: 45,
    width: 45,
  },
 });

