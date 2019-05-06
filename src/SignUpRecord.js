import React, {Component} from 'react';
import {StyleSheet,  Platform,Text, View, ScrollView, TouchableOpacity} from 'react-native';
import RecordFalse from '../components/RecordFalse';
import RecordTrue from '../components/RecordTrue';
import { Header, Icon } from 'react-native-elements';
import MasonryList from "react-native-masonry-list";
import * as axios from 'axios';


export default class SignUpRecord extends React.Component {
  static navigationOptions = {
    title: "기록추가",
    style: {elevation: 0, shadowOpacity: 0,},
    headerStyle: { height: Platform.OS === 'ios' ? 70 : 10, elevation: 0,shadowColor: 'transparent', borderBottomWidth:0, paddingBottom:10, paddingTop: Platform.OS === 'ios' ? 40 : 5},
    headerTitleStyle: { 
        color:"#2eaeff",
        fontSize:Platform.OS === 'ios' ? 25 : 18,
        textAlign:"center", 
        flex:1 ,
        fontWeight: "bold"
    },
    tintColor: "#2eaeff"
}
  constructor(props){
    super(props);
    this.state={
      records:[],
      school:'',
      count : 0,
    };

    this.props.navigation.addListener('didFocus', () => {
      this._getDatas()
    });

  }

  componentWillMount = () => {
    if(this.props.navigation.getParam('from', 'NO-ID')!='m'){
      this._getSchool();
    }
  };


  // 이미지들 가져오기
  _getDatas = async () => {
      //userNo 가지고 오기
      const { navigation } = this.props;
      const {records} = this.state;
      var userNo = navigation.getParam('userNo', 'NO-ID');
      const t = this;
  
      // 데이터 가져오기
      await axios.post('http://dkstkdvkf00.cafe24.com/GetImages.php',{
          userNo:userNo,
        })
        .then((result) => {
          const  response  = result.data;
          var recordArray = new Array();
          response.forEach(row => {
            recordArray.push({ uri : row.recordPicture});
            t.setState({count: this.state.count + 1})
            });
          t.setState({
            records: recordArray,
          });
        });
  }


  _RecordRegister = async item => {
    var t = this;
    await axios.post('http://dkstkdvkf00.cafe24.com/GetRecordPicture.php',{
           recordPicture:item,
         })
         .then(function (response) {
          var recordNo = response.data.message.recordNo
          if(t.props.navigation.getParam('from','NO-ID')=='m'){
            t.props.navigation.navigate('RecordRegister', {
              recordNo: recordNo,
              image: item,
              from: 'm',
              to: 'm'
            });
          } else {
            t.props.navigation.navigate('RecordRegister', {
              recordNo: recordNo,
              to: 'm'
              }
            );
          }
    })
  }


  _getSchool = async () => {
    const { navigation } = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    const t = this;


    // 데이터 가져오기
    await axios.post('http://dkstkdvkf00.cafe24.com/GetSchool.php',{
        userNo:userNo,
      })
      .then(function (response) {
        var str = JSON.stringify(response.data.message.school);;
        var school = str.substring(1, str.length-1);
          t.setState({
            school: school
          });
      });
  }
  
  _btnPress = () => {
    if(this.props.navigation.getParam('from','NO-ID')=='m'){
      this.props.navigation.navigate('Main')
    } else {
      this.props.navigation.navigate('FindClub',{
        schoolName : this.state.school
      })
    }
    
  }


  render() {
    const { navigation } = this.props;
    var name = navigation.getParam('recordName', 'NO-ID');
    var userNo = navigation.getParam('userNo', 'NO-ID');
    const {records} = this.state;
    return (
      <>
      <View style={styles.container}>

            <Icon
              raised
              reverse
              name='plus'
              type='entypo'
              color='#2eaeff'
              containerStyle={{ position: 'absolute', bottom:100, right: 10, zIndex:999 }}
              onPress={() => this.props.navigation.navigate('RecordRegister',{
                userNo: userNo
            })}
            />

                        {/* 사진들 들어갈 곳 */}
          <MasonryList
            imageContainerStyle={{borderRadius:17, right:12}}
            spacing={7}
            images={records}
            onPressImage = {(item, index) => {
              this._RecordRegister(item.uri)
          }}
          />

            {/* 완료버튼 */}
            <View style={styles.footer}>

            {
              this.state.count >= 1 ?
              <RecordTrue 
              onPress={
                () => this._btnPress()
              }
            />
              
              :
              <RecordFalse />
            }
                {/* true면 <RecordTrue /> false면 <RecordFalse /> */}
               
            </View>
            
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  header:{
      width:'100%',
      height:70,
      // backgroundColor:'#A0AFFF',
      flexDirection:"row",
      justifyContent: "flex-end"
  },
  content:{
    flex: 1
  },
  footer:{
    width: '100%',
    height: 70,
    // backgroundColor: '#5CEEE6',
    borderTopWidth:0
  },
  button:{
      backgroundColor: '#0064FF',
      width:50,
      height:50,
      marginTop:10,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20,
      borderRadius: 50
  },
  text:{
      fontSize: 25,
      color: '#fff'
  }
});