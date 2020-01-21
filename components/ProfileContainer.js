import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  BackHandler,
} from 'react-native';

import { AsyncStorage } from 'react-native';
import MoneyAndLevelContainer from '../components/MoneyAndLevelConatainer';
import ProfileDataContainer from '../components/ProfileDataContainer';

export default class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount(){
    //this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  //componentWillUnmount(){
    //this.backHandler.remove();
  //}

   _retrieveProfile = async () => {
    try {
      const storedQuests = JSON.parse(await AsyncStorage.getItem('@QuestData:key'));
      if (storedQuests !== null) {
        // We got the data, now set it to state!!
        this.setState({
          QCount: storedQuests.length,
          Quests: storedQuests,
        })
        console.log("Quest Retrived Successfully.")
      }
    } catch (error) {
      console.error('AsyncStorage#setItem error: ' + error.message);
      console.log("Error: could not retrive Quest")
      console.log("Setting Deafult Quest Data")
      // Error retrieving data
    }
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
            money={12}
            level={1}
            currentExp={30}
            nextLvExp={100}
          />
          <ProfileDataContainer
            username={"Goran Topic"}
            usermotto={"Chicken Chaiser"}
            userpicture={require('../assets/images/icon.png')}
          />
      
          <View style={styles.testing2}/> 
          <View style={styles.testing3}/> 
        </ScrollView>
      </View>
    );
  }
}



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
