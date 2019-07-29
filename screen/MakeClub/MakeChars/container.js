import React from 'react';
import { AsyncStorage } from 'react-native';
import * as axios from 'axios';
import MakeChars from './presenter';

class Container extends React.Component {
  static navigationOptions = {
    headerLeft: null,
    gesturesEnabled: false,
    header: null
}

  constructor(props){
    super(props);
    this.state={
      clubChars:[],
      chars:[],
      count:0,
    };
  }

  render() {
    return (
        <MakeChars 
            {...this.state}
            {...this.props}
            removeChar={this._removeChar}
            addChar={this._addChar}
            ButtonPress={this._ButtonPress}
        />
    );
  }

  componentWillMount = () => {
    if(this.props.navigation.getParam('from','NO-ID')=='m'){
      this._getChars()
    }
    this.setState({
        text:'',
        chars:[],
      })
  }

  _getChars = () => {
    //userNo 가지고 오기
    const { navigation } = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    const t = this;
    // 데이터 가져오기
    axios.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/ModifyChar.php',{
        userNo: userNo,
      })
      .then((result) => {
        const response  = result.data;
        var CharArray = new Array();

        response.forEach(row => {
          CharArray.push(row.chars);
          });
        
          for(let i=0; i<CharArray.length; i++){
            this._addChar(CharArray[i]);
          }
      });
  }


  componentDidMount = () => {
    AsyncStorage.getItem("chars").then(data => {
      const chars = JSON.parse(data || '[]');
      this.setState({ chars });
    });
  };

  _removeChar = (index) => {
    let clubChars = [...this.state.clubChars];
    let chars = [...this.state.chars]
    let {count} = this.state
    chars.splice(index,1)
    clubChars.splice(index,1)
    this.setState({
      chars: chars,
      clubChars: clubChars,
      count: count-1,
    })
  }

  _addChar = (char) => {
    let {count} = this.state;
   this.setState({count: count+1})
    // 새로운 특성(char) 객체 생성
    const newChar = {
        id: Date.now(), // 등록시간
        text: char,      // 특성 내용
    }   
    // state 업데이트
    this.setState(prevState => {
      prevState.clubChars.push(char);
      prevState.chars.push(newChar);
      return prevState;
      });
      
  }



  _ButtonPress = () => {
    const { navigation } = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    if(this.props.navigation.getParam('from','NO-ID')=='m'){
      this._modifySetClubChars();
      navigation.navigate('Home')
    }else{
      this._setClubChars();
      navigation.navigate('MakeRecord', {
        userNo: userNo
      })
    }
    
  }


  _setClubChars = async () => {
    const { navigation } = this.props;
    const { clubChars } = this.state;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    for(let i=0; i<clubChars.length; i++){
        // 데이터베이스에 넣기
        await axios.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/SetClubChars.php',{
          chars: clubChars[i],
          userNo: userNo
        })
        .then(function (response) {
            ms = response.data.message;
        });
          }
  }


  _modifySetClubChars = async () => {
    const { navigation } = this.props;
    const { clubChars } = this.state;
    var userNo = navigation.getParam('userNo', 'NO-ID');

    await axios.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/DeleteClubChars.php',{
          userNo: userNo
        })
        
    for(let i=0; i<clubChars.length; i++){
        // 데이터베이스에 넣기
        await axios.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/SetClubChars.php',{
          chars: clubChars[i],
          userNo: userNo
        })
        .then(function (response) {
            ms = response.data.message;
        });
          }
  }

}

export default Container;