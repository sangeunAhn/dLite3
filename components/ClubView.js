import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';
import * as axios from 'axios';
import ClubChars from './ClubChars';

export default class ClubView extends Component{

  constructor(props){
    super(props);
    this.state={
      clubChar: [],
    }
  }




componentWillMount = () => {
  this._getDatas();
};


_getDatas = () => {
  const { clubName, school } = this.props;
  const { clubChar } = this.state;
  

// 데이터 가져오기
axios.post('http://dkstkdvkf00.cafe24.com/GetClubChars.php',{
  clubName: clubName,
  school: school,
})
.then((result) => {
  const response  = result.data;
  var clubCharArray = new Array();
  
  response.forEach(row => {
    clubCharArray.push(row.chars);
    });
  
  this.setState({
    clubChar: clubChar.concat(clubCharArray),
  });
    
  
    
});

}
  





  render(){
    let {clubLogo} = this.props;
    let {clubChar} = this.state;
    return (
        <View style={styles.container}>

            <View style={styles.logo}>
              <Image
                style={styles.Image}
                source={{ uri: clubLogo }}/>
            </View>
            
            <TouchableOpacity style={styles.club}>
                <Text style={styles.clubTitle}>{this.props.clubName}</Text>
                <Text style={styles.clubChar}>
                  {clubChar.map((chars, i) => {
                        return (<ClubChars 
                                  chars={clubChar[i]}
                                  key={i}/>);
                    })}
                </Text>
            </TouchableOpacity>

        </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:70,
  //   backgroundColor:'#FAFABE',
    flexDirection:"row",
    justifyContent: "flex-start",
    padding:15,
    paddingLeft:25,
    alignItems:'center'
  },
  logo:{
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:'#fff',
    
    marginRight:25
  },
  Image:{
    height:50,
    width:50,
    resizeMode:'cover',
    backgroundColor: '#fff',
    borderRadius: 25,borderColor:'#0064FF',
    borderWidth:1,
  },
  club:{
      flex:1,
    //   backgroundColor: '#DCEBFF',
  },
  clubTitle:{
      fontSize:20,
      fontWeight: '500',
      marginBottom: 8
  },
  clubChar:{
      fontSize: 14,
      color: '#828282'
  }
});