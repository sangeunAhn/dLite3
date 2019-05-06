import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Platform} from 'react-native';
import Picture from '../components/Picture';
import * as axios from 'axios';



export default class RecordPictures extends React.Component {
  static navigationOptions = {
    title: "세부기록",
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
      recordName:'',
      recordContent:'',
      picture: null,
    };
  }

  componentWillMount = () => {
    this._getDatas()
  }


  _getDatas = () => {
    const { navigation } = this.props;
    var picture = navigation.getParam('picture', 'NO-ID');
    const t = this;
    this.setState({picture: picture})

    // 데이터 가져오기
    axios.post('http://dkstkdvkf00.cafe24.com/GetRecordPicture.php',{
        recordPicture:picture,
      })
      .then(function (response) {
        t._setDatas(response);
      });
  }

  _setDatas = response => {
    var str = JSON.stringify(response.data.message.recordName);;
    var recordName = str.substring(1, str.length-1);
      this.setState({
        recordName: recordName
      });
    var str = JSON.stringify(response.data.message.recordContent);;
    var recordContent = str.substring(1, str.length-1);
      this.setState({
        recordContent: recordContent
      });
  }




  render() {
    const {recordContent, picture} = this.state;
    return (
      <ScrollView style={styles.container}>

          {/* 회색부분 */}
          <Picture
            picture={picture}
            text={recordContent}/>
            
      </ScrollView>
    );
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
    height:40,
    backgroundColor: '#3296FF',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:15
  },
  title: {
    fontSize: 23,
    color: '#fff'
  },
  
});