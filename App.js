import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import Main from './src/Main';
import codeConfirm from './src/codeConfirm';
import SignUp from './src/SignUp';
import CharChoice from './src/CharChoice';
import SignUpRecord from './src/SignUpRecord';
import RecordRegister from './src/RecordRegister';
import FindClub from './src/FindClub';
import ClubSearch from './src/ClubSearch';
import ClubIntroduce from './src/ClubIntroduce';
import ClubFix from './src/ClubFix';
import RecordPictures from './src/RecordPictures';
import SchoolChoice from './src/SchoolChoice';
import ClubModify from './src/ClubModify';
import Record from './src/Record';





const RootStack = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    codeConfirm: {
      screen: codeConfirm,
    },
    SignUp: {
      screen: SignUp,
    },
    CharChoice: {
      screen: CharChoice,
    },
    SignUpRecord: {
      screen: SignUpRecord,
    },
    RecordRegister: {
      screen: RecordRegister,
    },
    FindClub: {
      screen: FindClub,
    },
    ClubSearch: {
      screen: ClubSearch,
    },
    ClubIntroduce: {
      screen: ClubIntroduce,
    },
    ClubFix: {
      screen: ClubFix,
    },
    RecordPictures: {
      screen: RecordPictures,
    },
    SchoolChoice: {
      screen: SchoolChoice,
    },
    ClubModify: {
      screen: ClubModify,
    },
    Record: {
      screen: Record,
    },
  },
  {
    initialRouteName: 'Main',
  },
  
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <>
      <AppContainer />
      <StatusBar
      barStyle = "dark-content"
      // dark-content, light-content and default
      hidden = {false}
      //To hide statusBar
      backgroundColor = "white"
      //Background color of statusBar only works for Android
      translucent = {false}
      //allowing light, but not detailed shapes
      networkActivityIndicatorVisible = {true}
  />
  </>
      )
    }
  }