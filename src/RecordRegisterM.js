import React, {Component,Fragment} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Dimensions,KeyboardAvoidingView, Platform, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { ImagePicker, Constants, Permissions } from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as axios from 'axios';
import RegisterButton from '../components/RegisterButton';
import RegisterButtonN from '../components/RegisterButtonN';
import { scale, moderateScale, verticalScale} from '../components/Scaling';

const { width, height } = Dimensions.get("window");

export default class RecordRegister extends React.Component {

  static navigationOptions = {
    title: "기록생성",
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
      image:null,
      disabled: false,
      count:0,
      text: '',  
      plds: [],
      comment:'',
      name:'',
    };
  }

  componentWillMount = () => {
    this._getDatas();
    this.setState({ image: this.props.recordPicture})
  };

  _getDatas = () => {
       //userNo 가지고 오기
       const { navigation } = this.props;
       var recordNo = navigation.getParam('recordNo', 'NO-ID');
       const t = this;
   
       // 데이터 가져오기
       axios.post('http://dkstkdvkf00.cafe24.com/GetRecordPictureM.php',{
        recordNo: recordNo,
         })
         .then(function (response) {
           t._setDatas(response);
           
         });
  }
  _setDatas = response => {
    var str = JSON.stringify(response.data.message.recordName);;
    var recordName = str.substring(1, str.length-1);
      this.setState({
        name: recordName
      });

      var str = JSON.stringify(response.data.message.recordPicture);;
      var recordPicture = str.substring(1, str.length-1);
        this.setState({
          image: recordPicture
        });

      var str = JSON.stringify(response.data.message.recordContent);;
    var recordContent = str.substring(1, str.length-1);
      this.setState({
        comment: recordContent
      });

      
}



_pickImage = async () => {
  const permissions = Permissions.CAMERA_ROLL;
  const { status } = await Permissions.askAsync(permissions);
  
  console.log(permissions, status);
  if(status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        base64: true,
        quality: 0.5
        });
    
        if (!result.cancelled) {
          // this.setState({ clubMainPicture: 'data:image/jpg;charset=utf-8;base64,'+resultEncode });
          this.setState({ image: `data:image/jpg;base64,` + result.base64 });
          // this.setState({ clubMainPicture: result.uri });
        }
  }
}


  _ButtonPress = async () => {
    await this._input()
    
    this.setState({image: null})
    this.props.navigation.navigate('SignUpRecord')
}

_input = () => {
  const { name, image, comment } = this.state;
  const { navigation } = this.props;
  var recordNo = navigation.getParam('recordNo', 'NO-ID');

  // console.log(userNo)
  // for(let i=0; i<images.length; i++){
    
    // 데이터베이스에 넣기
      axios.post('http://dkstkdvkf00.cafe24.com/UpdateRecord.php',{
      recordName: name,
      recordPicture: image,
      recordContent: comment,
      recordNo: recordNo
    })
    .then(function (response) {
        ms = response.data.message;
    });
}

  componentDidMount = () => {
    AsyncStorage.getItem("plds").then(data => {
      const plds = JSON.parse(data || '[]');
      this.setState({ plds });
    });
  };

  removePld = (index) => {
    let plds = [...this.state.plds]
    plds.splice(index,1)
    this.setState({
      plds: plds,
    })
  }

  addPld = (pld) => {
     
    // 새로운 특성(char) 객체 생성
    const newPld = {
        id: Date.now(), // 등록시간
        text: pld,      // 특성 내용
    }   
    // state 업데이트
    this.setState(prevState => {
      prevState.plds.push(newPld);
      return prevState;
      });
      
    // 콘솔창에 출력해보자~
    console.log(this.state.plds);
  }
  componentWillMount(){
    this.setState({
      text:'',
      plds:[],
    })
  }
  
  state={
    count:0
  }
  
  _updateCount = () => {
    this.setState({
      count:this.state.count+1
    });
  };
  render() {
    const {image} = this.state;
    console.log(this.state.image)
    return (
     <>
   
     
        

   <ScrollView>

        <View style={styles.container}>
        
        <KeyboardAvoidingView
      behavior="padding"
      
      keyboardVerticalOffset={Platform.OS=== 'ios' ? '200' : '10'}
      >
            {/* 밑에 완료버튼 빼고 나머지 화면 스크롤 */}
            
                {/* 맨 위 활동 내용 적는 곳 */}
               
                
                
                {/* 사진 넣는 곳 */}
                 <View style={styles.contentBackground}>
           
                <TouchableOpacity onPress={this._pickImage}>
                  <View style={styles.content}>
                    { image === null ?
                      <Image
                        style={{height:'50%',width:'55%',resizeMode:'contain'}}
                        source={require('../images/addPhoto.png')}/>
                      :
                      <Image
                      style={{height:'100%',width:'100%',resizeMode:'cover'}}
                      source={{ uri : image}}/>
                      
                  }
                  
                  </View>

                </TouchableOpacity>

                <TextInput
                    style={styles.commentInput}
                    placeholder={"간단한 코멘트를 입력해주세요"}
                    placeholderTextColor={"#bebebe"}
                    multiline={false}
                    onChangeText={(comment) => this.setState({comment})}
                    value={this.state.comment}
                />
            </View>

            <View style={styles.coment}>
            </View>
                
              
                
             </KeyboardAvoidingView>
            {/* 완료버튼 */}
            </View>
            </ScrollView>
            <View style={styles.footer}>
              
              {this.state.comment.length==0 && this.state.image==null
                  ?
                    <RegisterButtonN title={'사진과 코멘트를 모두 입력해 주세요.'}/>
                  :
                  this.state.comment.length==0?
                  <RegisterButtonN title={'확인'}/>
                :
                this.state.image==null?
                    <RegisterButtonN title={'사진과 코멘트를 모두 입력해 주세요.'}/>
                    :
                    <TouchableOpacity onPress={this._ButtonPress}>
                      <RegisterButton title={'확인'}/>
                    </TouchableOpacity>
                }
                
                </View>
              
        </>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    padding:20,
    justifyContent:'center',
    alignItems:'center'
  },
  scroll:{
    flex:1,
    padding:10
  },
  header:{
    width: moderateScale(300),
      height:50,
      backgroundColor:'#32AAFF',
      justifyContent: "center",
      alignItems:'center',
      borderRadius: 10,
      marginBottom: 40,
      textAlign:'center'
  },
  footer:{
    width: '100%',
    height: 70,
  },
  button:{
      flex:1,
      backgroundColor: '#50C8FF',
      alignItems: 'center',
      justifyContent: 'center'
  },
  text:{
      fontSize: 20,
      color: '#fff'
  },
  titleInput:{
      color: '#fff',
    //   backgroundColor: '#32AAFF',
      fontSize: 20,
      textAlign:'center'
  },
  buttonStyle: { 
    width: 150,
    height: 75,
    backgroundColor: 'ivory',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
   }, 
   contentBackground:{
     marginTop:scale(50),
    backgroundColor: '#f2f2f2',
    marginBottom: 15,
    width: moderateScale(310),
    height: verticalScale(360),
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    //그림자효과
    shadowColor: "#dbdbdb",
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
      width: 5
    },
    elevation: 3,
  },
  content:{
    backgroundColor:'#fff',
    width: moderateScale(270),
    height:moderateScale(280),
    borderRadius: 10,
    alignItems: "center",
    justifyContent:"center",
    marginTop:10
  },
  coment:{
    width: '100%',
    height: height*0.01,
    // backgroundColor: '#c98cc9',
   
    paddingTop:10,
    paddingLeft:10
  },
  commentInput:{
    fontSize:21,
    textAlign: 'center',
    paddingTop:30,
    paddingBottom:5
}
});