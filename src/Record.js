import React from 'react';
import {StyleSheet,Platform, View, ActivityIndicator} from 'react-native';
import MasonryList from "react-native-masonry-list";
import * as axios from 'axios';


export default class Record extends React.Component {
  static navigationOptions = {
    title: "기록",
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
      isGetting: false,
    };

    this.props.navigation.addListener('didFocus', async () => {
      // await this._getDatas()
    });

  }

  componentWillMount = () => {
    this._getDatas()
    
  };


  // 이미지들 가져오기
  _getDatas = async () => {
      //userNo 가지고 오기
      const { navigation } = this.props;
      var clubName = navigation.getParam('clubName', 'NO-ID');
      var school = navigation.getParam('school', 'NO-ID');
      const t = this;
  
      // 데이터 가져오기
      await axios.post('http://dkstkdvkf00.cafe24.com/GetImages2.php',{
        clubName:clubName,
        school:school,
        })
        .then((result) => {
          const  response  = result.data;
          var recordArray = new Array();
          response.forEach(row => {
            recordArray.push({ uri : row.recordPicture});
            });
          t.setState({
            records: recordArray,
          });
        });
      
        this.setState({isGetting: true})
  }


  _RecordRegister = item => {
    this.props.navigation.navigate('RecordPictures', {
      picture: item,
    })
  }



  render() {
    const { navigation } = this.props;
    var name = navigation.getParam('recordName', 'NO-ID');
    var userNo = navigation.getParam('userNo', 'NO-ID');
    const {records, isGetting} = this.state;
    return (
      <>
      <View style={styles.container}>

           {
             isGetting 
              ?
                <MasonryList
                imageContainerStyle={{borderRadius:17, right:12}}
                spacing={7}
                images={records}
                onPressImage = {(item, index) => {
                  this._RecordRegister(item.uri)
                }}
                />
              :
                <ActivityIndicator size="large" style={styles.activityIndicator}/>
           }
          
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
  },
  activityIndicator: {
    flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
  }
});