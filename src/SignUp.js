import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import ClubPicker from '../components/ClubPicker';
import ConfirmButtonN from '../components/ConfirmButtonN';
import { Avatar } from 'react-native-elements';
import * as axios from 'axios';

export default class SignUp extends Component {
    static navigationOptions = {
        header : null,
      };
    constructor(props){
        super(props);
        this.state={
          clubName:'',
          clubKind:'',
          clubWellcome:'',
          clubPhoneNumber:'',
          clubIntroduce:'',
          clubLogo:'',
          clubMainPicture:'',
          userNo:'',
        };
      }


  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.blank}>ㅁㅁㅁㅁ</Text>
            <ScrollView>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 이름</Text>
                    <TextInput 
                        style={styles.input} 
                        onChangeText={(clubName) => this.setState({clubName})}
                        maxLength={20}
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 종류</Text>
                    <View style={{width:160,}}>
                        <ClubPicker />
                    </View>
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>이런 신입생 와라</Text>
                    <TextInput 
                        style={[styles.input, styles.introduce]} 
                        multiline={true}
                        onChangeText={(clubWellcome) => this.setState({clubWellcome})}
                        placeholder={"ex. 상큼한 새내기들 환영"}
                        placeholderTextColor={"#d1d1d1"}
                        maxLength={100}
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>연락 가능 연락처</Text>
                    <TextInput 
                        style={[styles.input, styles.introduce]} 
                        multiline={true}
                        onChangeText={(clubPhoneNumber) => this.setState({clubPhoneNumber})}
                        maxLength={100}
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 소개</Text>
                    <TextInput 
                        style={[styles.input, styles.introduce]} 
                        multiline={true}
                        onChangeText={(clubIntroduce) => this.setState({clubIntroduce})}
                        maxLength={100}
                    />
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 로고</Text>
                    <Avatar
                        rounded
                        containerStyle={{flex:1, marginTop:20, marginLeft:50}}
                        size="large"
                        onPress={() => console.log("Works!")}
                         icon= {{ name:'questioncircle'}}
                        
                        showEditButton
                        
                        />

                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 메인사진</Text>
                    <Avatar
                    size="large"
                    icon={{ name: 'questioncircle' }}
                    
                    containerStyle={{flex: 1, marginTop:20, width:'100%'}}
                    showEditButton
                    />
                </View>
                <View style={styles.button}>
                     {(this.state.clubName.length==0 && this.state.clubWellcome.length==0 && this.state.clubPhoneNumber.length==0)
                        ?
                        <ConfirmButtonN title={'확인'}/>
                        :
                        <ConfirmButton 
                            title={'확인'} 
                            onPress={() => this._insertRegister()}/> 
                    }
                </View>
                
            </ScrollView>
        </View>
    );
  }

  _userNo = userNo => {
    this.setState({
      userNo: userNo
    });
  };
  _insertRegister = () => {

    //userNo 가지고 오기
    const { navigation } = this.props;
    var getUserNo = navigation.getParam('userNo', 'NO-ID');
    getUserNo = getUserNo.replace(/[^0-9]/g,'');

    
    const {clubName, clubKind, clubWellcome, clubPhoneNumber, clubIntroduce, 
             clubLogo, clubMainPicture} = this.state;

    // 데이터베이스에 넣기
    axios.post('http://dkstkdvkf00.cafe24.com/UserRegister.php',{
        clubName:clubName,
        clubKind:clubKind,
        clubWellcome:clubWellcome,
        clubPhoneNumber:clubPhoneNumber,
        clubIntroduce:clubIntroduce,
        clubLogo:clubLogo,
        clubMainPicture:clubMainPicture,
        userNo:getUserNo,
      })
      .then(function (response) {
          ms = response.data.message;
      });

       this.props.navigation.navigate('CharChoice')
  }


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: 'white',
    },
    
    input: {
      width:'100%',
      padding: 7,
      borderColor: "#32B8FF",
      borderWidth: 1,
      fontSize: 17,
      marginTop: 5
    },
    text: {
        fontSize: 13
    },
    toDos: {
      alignItems: "center"
    },
    block: {
        paddingBottom: 30
    },
    introduce: {
        height: 120
    },
    button: {
        height:60,
        marginTop:30
    },
    blank: {
      fontSize: 40,
      color:'white'
    }
  });

