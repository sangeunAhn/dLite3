import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import Main from './src/Main';
import codeConfirm from './src/codeConfirm';
import PhoneNumber from './src/PhoneNumber';
import SignUp from './src/SignUp';
import CharChoice from './src/CharChoice';
import SignUpRecord from './src/SignUpRecord';
import RecordRegister from './src/RecordRegister';
import RecordRegisterM from './src/RecordRegisterM';
import RecordRegister2 from './src/RecordRegister2';
import RecordRegisterM2 from './src/RecordRegisterM2';
import FindClub from './src/FindClub';
import InputSchool from './src/InputSchool';
import ClubSearch from './src/ClubSearch';
import ClubIntroduce from './src/ClubIntroduce';
import ClubFix from './src/ClubFix';
import RecordPictures from './src/RecordPictures';
import SchoolChoice from './src/SchoolChoice';
import ClubModify from './src/ClubModify';
import ModifySignUp from './src/ModifySignUp';
import ModifyChar from './src/ModifyChar';
import ModifyRecord from './src/ModifyRecord';
import Record from './src/Record';
import SignUpRecord2 from './src/SignUpRecord2';





const RootStack = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    codeConfirm: {
      screen: codeConfirm,
    },
    PhoneNumber: {
      screen: PhoneNumber,
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
    RecordRegister2: {
      screen: RecordRegister2,
    },
    FindClub: {
      screen: FindClub,
    },
    InputSchool: {
      screen: InputSchool,
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
    ModifySignUp: {
      screen: ModifySignUp,
    },
    ModifyChar: {
      screen: ModifyChar,
    },
    ModifyRecord: {
      screen: ModifyRecord,
    },
    
    Record: {
      screen: Record,
    },
    SignUpRecord2: {
      screen: SignUpRecord2,
    },
    RecordRegisterM: {
      screen: RecordRegisterM
    },
    RecordRegisterM2: {
      screen: RecordRegisterM2
    }
  },
  {
    initialRouteName: 'CharChoice',
  },
  
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}