import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import RecordFalse from '../components/RecordFalse';
import RecordTrue from '../components/RecordTrue';
import { Header, Icon } from 'react-native-elements';
import MasonryList from "react-native-masonry-list";
import * as axios from 'axios';


export default class SignUpRecord extends React.Component {

  constructor(props){
    super(props);
    this.state={
      records:[],
      school:'',
    };

    this.props.navigation.addListener('didFocus', async () => {
       await this._getDatas()
    });

  }

  componentWillMount = () => {
    // this._getSchool();
    
  };


  // 이미지들 가져오기
  _getDatas = () => {
    
      //userNo 가지고 오기
      const { navigation } = this.props;
      const {records} = this.state;
      var userNo = navigation.getParam('userNo', 'NO-ID');
      // console.log(userNo);
      // var userNo = 26;
      const t = this;
  
      // 데이터 가져오기
      axios.post('http://dkstkdvkf00.cafe24.com/GetImages.php',{
          userNo:userNo,
        })
        .then((result) => {
          // t._setDatas(response);
          const  response  = result.data;
          var recordArray = new Array();
          response.forEach(row => {
            recordArray.push({ uri : row.recordPicture});
            });
          t.setState({
            records: recordArray,
          });
        });
  }


  _RecordRegister = item => {
    var t = this;
    axios.post('http://dkstkdvkf00.cafe24.com/GetRecordPicture.php',{
           recordPicture:item,
         })
         .then(function (response) {
          var str = JSON.stringify(response.data.message.recordNo);;
          var recordNo = response.data.message.recordNo
          t.props.navigation.navigate('RecordRegisterM2', {
            recordNo: recordNo,
            image: item
         });
   
    })
  }


  _getSchool = () => {
    const { navigation } = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    // var userNo = 26;
    const t = this;


    // 데이터 가져오기
    axios.post('http://dkstkdvkf00.cafe24.com/GetSchool.php',{
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


  render() {
    const { navigation } = this.props;
    var name = navigation.getParam('recordName', 'NO-ID');
    var userNo = navigation.getParam('userNo', 'NO-ID');
    const {records} = this.state;
    console.log(records)
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
              onPress={() => this.props.navigation.navigate('RecordRegister2',{
                userNo: userNo
            })}
            />

                        {/* 사진들 들어갈 곳 */}
          <MasonryList
            imageContainerStyle={{borderRadius:17, right:12}}
            spacing={7}
            images={records}
            onPressImage = {(item, index) => {
              // alert(index)
              this._RecordRegister(item.uri)
          }}
          />

            {/* 완료버튼 */}
            <View style={styles.footer}>
                {/* true면 <RecordTrue /> false면 <RecordFalse /> */}
                <RecordTrue 
                  onPress={
                    () => this.props.navigation.navigate('Main',{
                      schoolName : this.state.school
                    })
                    // () => console.log(records)
                  }
                />
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
    borderTopWidth:1
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