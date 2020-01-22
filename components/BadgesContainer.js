import React from 'react';

import { Text, Image, Badge, } from 'react-native-elements';
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
    this.state= {
      visibleOverlay: false,
      selectedBadge: {img:require('../assets/images/Badges/badge1.png'),title:"title1", des:"des1"},
      badges: this.props.badges,
      
    }
  }


  _selectBadge = (badge) => {
    //selects a Badge and displays its description
    this.setState({ selectedBadge: badge });
    this._toggleOverlay();
  }

  _toggleOverlay = () => {
    //this.props._exitEditMode();
    this.setState({visibleOverlay: !this.state.visibleOverlay});
  }

  _renderBadgeDescriptionModal = () => {
    //renders the modal overly  with the given selectd badge
    return (
      <View style={{ flexDirection: 'column', alignItems:'center' }}>
        <Image
          style={styles.modalBadgeImg}
          source={this.state.selectedBadge.img}
        />
        <View style={styles.modalText}>
          <Text style={styles.modalTitle}>
            {this.state.selectedBadge.title}
          </Text>
          <Text style={styles.modalDes}>
            {this.state.selectedBadge.des}
          </Text>
        </View>
      </View>
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.badgesContainer}>
          {
            this.state.badges.map(
              (badge, index) =>
                <StyledIcon
                  style={styles.badge}
                  size={35}
                  key={index}
                  source={this.state.badges[index].img}
                  onPress={
                    () => this._selectBadge(badge)} 
                />
            )}
        </View>
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
    paddingTop: 15,
    paddingLeft: 23,
    minHeight: 100,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    height: 45,
    width: 45,
  },
  modalBadgeImg:{
    height: 80,
    width: 80,
  },
  modalText:{
    flexDirection: 'column',
    alignItems: 'center'
  },
  modalTitle: {
    fontFamily: 'helvetica-lt',
    fontSize: 30,
    color: colors.unselectedQuest,
  },
  modalDes: {
    fontFamily: 'helvetica-lt',
    fontSize: 15,
    paddingTop:1,
    color: colors.QuestOrangyNote,
  },
});

