import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import * as axios from 'axios';
import SchoolChoice from './SchoolChoice';

export default class codeConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userCode: ''};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />

        {/* 코드입력부분 */}
        <View style={styles.title}>
          <Text style={styles.codeInput}>코드입력</Text>
          <TextInput
              style={styles.input}
              placeholder={"발부받은코드를 입력하세요."}
              placeholderTextColor={"#999"}
              returnKeyType={"done"}
              autoCorrect={false}
              underlineColorAndroid={"transparent"}
              onChangeText={(userCode) => this.setState({userCode})}
            />
        </View>

        <View style={styles.content}/>

        {/* 확인 버튼 */}
        <View style={styles.footer}>
          <ConfirmButton 
            title={'확인'}
            onPress={this.login}/>
        </View>
      </View>
    );
  }


 
    // 동아리 생성 되어있을 때
    _goToCodeConfirm = () => {
      const t = this;
      const {userCode} = this.state;

      axios.post('http://dkstkdvkf00.cafe24.com/GetUserNo.php',{
      userCode:userCode
    })
    .then(function (response) {
      userNo = JSON.stringify(response.data.message.userNo)
        t.props.navigation.navigate('ClubModify', {
          userNo: userNo
        })
    });
    }

    // 동아리 생성 안되어있을 때
    _goToSignUp = () => {
      const t = this;
      const {userCode} = this.state;

      axios.post('http://dkstkdvkf00.cafe24.com/GetUserNo.php',{
      userCode:userCode
    })
    .then(function (response) {
      userNo = JSON.stringify(response.data.message.userNo)
        t.props.navigation.navigate('SignUp', {
          userNo: userNo
        })
    });
      
     
    }
  
  
    // 동아리 생성 여부에 따라 가는 곳 다르게
    _getClub = userCode => {
      const t = this;
      axios.post('http://dkstkdvkf00.cafe24.com/CodeGetClub.php',{
      userCode:userCode
    })
    .then(function (response) {
        ms = response.data.message;
        {ms === 'true' ? 
          t._goToCodeConfirm()
          : 
          t._goToSignUp()
        }
    });
    }

    // 코드 있는지 여부
  _getCode = () => {
    const {userCode} = this.state;
    const t = this;
    axios.post('http://dkstkdvkf00.cafe24.com/CodeLogin.php',{
      userCode:userCode
    })
    .then(function (response) {
        login = response.data.message;

        if(login === "true"){
             t._getClub(userCode);
        }else{
          alert('코드가 잘못되었습니다.')
        }
        
    });
  }

  login = () => {

    this._getCode();


  }

  

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'10%',
    // backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'30%',
    // backgroundColor: '#9aa9ff'
  },
  content: {
    flex: 1,
    // backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:150,
    // backgroundColor: '#1ad657',
    paddingTop: 40,
    paddingBottom: 40
  },
  input: {
    padding: 7,
    borderColor: "#32B8FF",
    borderWidth: 1,
    fontSize: 17,
    marginTop:7
  },
  codeInput: {
      fontSize: 17,
      color:"#32B8FF"
  }
});