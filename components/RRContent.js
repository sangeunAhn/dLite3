import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ImagePicker, Constants, Permissions } from 'expo';

const { width, height } = Dimensions.get("window");

export default class RRContent extends Component{

  constructor(props){
    super(props);
    this.state={
      image:null,
    }
  }

  render(){
    const {image} = this.setState
    return (
        <View>

            <View style={styles.contentBackground}>

            <TouchableOpacity onPress={this._pickImage}>
                <View style={styles.content}>
                
                        { image === null ?
                          <View></View>
                          :
                          image &&
                            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                        }
                        
                </View>
                </TouchableOpacity>
            </View>

            <View style={styles.coment}>

                <TextInput
                    style={styles.commentInput}
                    placeholder={"간단한 코멘트를 입력해주세요"}
                    placeholderTextColor={"#bebebe"}
                />

            </View>
            
        </View>
    )
  }
}


_pickImage = async () => {
  const permissions = Permissions.CAMERA_ROLL;
  const { status } = await Permissions.askAsync(permissions);
  
  console.log(permissions, status);
  if(status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        if (!result.cancelled) {
          // this.setState({ clubLogo: result.uri });
        }
  }
}

const styles = StyleSheet.create({
    contentBackground:{
        backgroundColor: '#d2d2d2',
        marginBottom: 15,
        width:'100%',
        height:height*0.57,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      content:{
        backgroundColor:'#fff',
        width:width*0.8,
        height:width*0.8,
        borderRadius: 10
      },
      coment:{
        width: '100%',
        height: height*0.12,
        // backgroundColor: '#c98cc9',
        borderTopWidth:1,
        borderColor: "#969696",
        paddingTop:10,
        paddingLeft:10
      },
      commentInput:{
        fontSize:17
    }
    });