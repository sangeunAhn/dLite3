import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';

export default class ClubView_dLite extends Component{

  constructor(props){
    super(props);
    this.state={
      clubChar: [],
    }
  }


  render(){
    let {clubLogo} = this.props;
    return (
        <View style={styles.container}>

            <View style={styles.logo}>
              <Image
                style={styles.Image}
                source={require('../images/momo.jpg')}/>
            </View>
            
            <TouchableOpacity style={styles.club}>
                <Text style={styles.clubTitle}>d:Lite</Text>
                <Text style={styles.clubChar}>#동아리 플랫폼</Text>
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