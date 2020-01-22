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
import BadgesContainer from '../components/BadgesContainer';
import StatsContainer from '../components/StatsContianer';

export default class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      badges: [
        {img:require('../assets/images/Badges/badge0.png'),title:"Adventurer", des:"Start Questing"},
        {img:require('../assets/images/Badges/badge1.png'),title:"Samaritan", des:"Help a freind with a quest"},
        {img:require('../assets/images/Badges/badge2.png'),title:"Powerful One", des:"Finish a strength Quest"},
        {img:require('../assets/images/Badges/badge3.png'),title:"Really Powerful One", des:"Finish a second strength Quest"},
        {img:require('../assets/images/Badges/badge4.png'),title:"title4", des:"des4"},
        {img:require('../assets/images/Badges/badge5.png'),title:"title5", des:"des5"},
        {img:require('../assets/images/Badges/badge6.png'),title:"title6", des:"des6"},
        {img:require('../assets/images/Badges/badge7.png'),title:"title7", des:"des7"},
        {img:require('../assets/images/Badges/badge8.png'),title:"title8", des:"des8"},
        {img:require('../assets/images/Badges/badge9.png'),title:"title9", des:"des9"},
        {img:require('../assets/images/Badges/badge10.png'),title:"title10", des:"des10"},
        {img:require('../assets/images/Badges/badge11.png'),title:"title11", des:"des11"},
        {img:require('../assets/images/Badges/badge12.png'),title:"title12", des:"des12"},
        {img:require('../assets/images/Badges/badge13.png'),title:"title13", des:"des13"},
      ],
      stats: [
        {"Total Quest Completed": 3,},
        {"Stregth": 23},
        {"Speed": 23},
        {"Inteligence": 23},
        {"Endurance": 23},
        {"Alquemy": 23},
        {"Badges Unlocked": 3},
        
        {"Total Quest Completed": 3,},
        {"Stregth": 23},
        {"Speed": 23},
        {"Inteligence": 23},
        {"Endurance": 23},
        {"Alquemy": 23},
        {"Badges Unlocked": 3},
        {"Total Quest Completed": 3,},
      ],
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
          <BadgesContainer 
            badges={this.state.badges} 
          />
          <StatsContainer
            stats={this.state.stats}
          />
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
