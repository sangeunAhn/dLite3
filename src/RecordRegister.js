import React, {Component,Fragment} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, AsyncStorage, Dimensions,KeyboardAvoidingView, Platform} from 'react-native';
import RRContent from '../components/RRContent';
import { Header, Icon, Overlay } from 'react-native-elements';
import CSButton from '../components/CSButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class RecordRegister extends React.Component {

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
  constructor(props){
    super(props);
    this.state = {
      disabled: false,
      count:0,
      text: '',  
      plds: []
    }
  }
  _updateCount = () => {
    this.setState({
      count:this.state.count+1
    });
  };
  render() {
    return (
     <>
   
     
        


        <View style={styles.container}>
        <View
                  style={styles.header}>
                    <TextInput 
                        style={styles.titleInput}
                        placeholder={"활동 내용을 입력하세요."}
                        placeholderTextColor={"#fff"}
                    />           
               
                </View>
                <KeyboardAwareScrollView
                enableOnAndroid
                enableAutomaticScroll
                keyboardOpeningTime={0}
                extraScrollHeight={150}
                
              >
            {/* 밑에 완료버튼 빼고 나머지 화면 스크롤 */}
            <ScrollView style={styles.scroll}>
            
                {/* 맨 위 활동 내용 적는 곳 */}
               
                
                
                {/* 사진 넣는 곳 */}
                <RRContent />
                
              
                
            </ScrollView>
             </KeyboardAwareScrollView>
            {/* 완료버튼 */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>완료</Text>
                </TouchableOpacity>
            </View>
            <CSButton
        style={{ zIndex: 999 }}
            onPress={()=>this._updateCount()}/>
        </View>
        
        </>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    padding:5,
    
  },
  scroll:{
    flex:1,
    padding:10
  },
  header:{
      width:'100%',
      height:50,
      backgroundColor:'#32AAFF',
     
      justifyContent: "center",
      borderRadius: 10,
      marginBottom: 20,
     
      textAlign:'center'
  },
  footer:{
    width: '100%',
    height: 70,
    backgroundColor: '#5CEEE6'
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
});