import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { AsyncStorage } from 'react-native';
import MoneyAndLevelContainer from '../components/MoneyAndLevelConatainer';
import ProfileDataContainer from '../components/ProfileDataContainer';
import BadgesContainer from '../components/BadgesContainer';
import StatsContainer from '../components/StatsContianer';
import ArchivedQuesContainer from '../components/ArchivedQuestContainer';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';


class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //get the state from redux global state
      localUri: this.props.UserData.profilePicUri,
    }
  }
  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }
    //save picture to state
    this.setState({ localUri: pickerResult.uri });
  };
  
  handleBackButtonClick = () => {
    /*Allegedly, handles back button press*/
    var quests = [...this.state.Quests];
    var isChange = false;
    quests.forEach(value => {
      if (value.isInEditMode) {
        value.isInEditMode = false;
        isChange = true;
      } else if (value.isActiveDummyTask) {
        value.isActiveDummyTask = false;
        isChange = true;
      } else if (value.selected) {
        value.selected = false;
        isChange = true;
      }
    });
    this.setState({ Quests: quests });
    return isChange;
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollable} >
          <MoneyAndLevelContainer
            money={this.props.UserData.money}
            level={this.props.UserData.level}
            currentExp={this.props.UserData.currentExp}
            nextLvExp={this.props.UserData.nextLvExp}
          />
          <ProfileDataContainer
            username={this.props.UserData.username}
            usermotto={this.props.UserData.usermotto}
            userpicture={
              this.state.localUri === null ?
                require('../assets/images/icon.png') : //default userPicture
                { uri: this.state.localUri }
            }
            onPress={this.openImagePickerAsync}
          />
          <BadgesContainer
            badges={this.props.UserData.badges}
          />
          <StatsContainer
            stats={this.props.UserData.stats}
          />
          {/*<ArchivedQuesContainer/>*/}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    UserData: state.UserData,
  }
}


export default connect(mapStateToProps)(ProfileContainer);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 5,
  },
  scrollable: {
    flex:1,
  },
  testing: {
    borderWidth: 5,
    borderColor: 'white',
    paddingTop: 100,
    width: '30%',
    backgroundColor: 'red',
  },
  testing2: {
    borderWidth: 5,
    borderColor: 'white',
    paddingTop: 100,
    flex:1,
    backgroundColor: 'blue',
  },
  testing3: {
    borderWidth: 5,
    borderColor: 'white',
    paddingTop: 100,
    height: null,
    backgroundColor: 'green',
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
  emptyspace: {
    backgroundColor: 'transparent',
    width: null,
    height: 250,
  }
});
