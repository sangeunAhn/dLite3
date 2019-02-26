import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button, image, Image} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import ClubPicker from '../components/ClubPicker';
import ConfirmButtonN from '../components/ConfirmButtonN';
import { Avatar } from 'react-native-elements';
import * as axios from 'axios';
import { ImagePicker, Constants, Permissions } from 'expo';


export default class SignUp extends Component {
    static navigationOptions = {
        header : null,
      };
    constructor(props){
        super(props);
        this.state={
          clubName:'',
          clubKind:'예술 공연',
          clubWellcome:'',
          clubPhoneNumber:'',
          clubIntroduce:'',
          clubMainPicture:'http://file.mk.co.kr/meet/neds/2015/10/image_readtop_2015_958954_14441920852159833.png',
          userNo:'',
          clubLogo: 'http://file.mk.co.kr/meet/neds/2015/10/image_readtop_2015_958954_14441920852159833.png',
        };
      }

      myCallback = (dataFromChild) => {
        this.setState({ clubKind: dataFromChild });
    }

  render() {
    let { clubLogo, clubMainPicture } = this.state;
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
                    <ClubPicker
                        callbackFromParent={this.myCallback} />

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

                        <TouchableOpacity onPress={this._pickLogo}>
                        {
                          clubLogo &&
                            <Image source={{ uri: clubLogo }} style={{ width: 100, height: 100 }} />
                        }
                        </TouchableOpacity>
                </View>
                <View style={styles.block}>
                    <Text style={styles.text}>동아리 메인사진</Text>
                    <TouchableOpacity onPress={this._pickMainPicture}>
                        {
                          clubMainPicture &&
                            <Image source={{ uri: clubMainPicture }} style={{ width: '100%', height: 100 }} />
                        }
                    </TouchableOpacity>
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

  // 로고 가져오기
  _pickLogo = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);
    
    console.log(permissions, status);
    if(status === 'granted') {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
          });
      
          if (!result.cancelled) {
            this.setState({ clubLogo: result.uri });
          }
    }
  }

    // 메인사진 가져오기
    _pickMainPicture = async () => {
      const permissions = Permissions.CAMERA_ROLL;
      const { status } = await Permissions.askAsync(permissions);
      
      console.log(permissions, status);
      if(status === 'granted') {
          let result = await ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
              aspect: [4, 3],
            });
        
            console.log(result);
        
            if (!result.cancelled) {
              this.setState({ clubMainPicture: result.uri });
            }
      }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _userNo = userNo => {
    this.setState({
      userNo: userNo
    });
  };


  _insertRegister = () => {
    //userNo 가지고 오기
    const { navigation } = this.props;
    var getUserNo = navigation.getParam('userNo', 'NO-ID');
    var getSchool = navigation.getParam('school', 'NO-ID');
    getUserNo = getUserNo.replace(/[^0-9]/g,'');
    getSchool = getSchool.substring(1, getSchool.length-1);

    
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
        school:getSchool,
      })
      .then(function (response) {
          ms = response.data.message;
      });

       this.props.navigation.navigate('CharChoice', {
        userNo: getUserNo
      })
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

