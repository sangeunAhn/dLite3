import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class RecordFalse extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
            <View style={styles.button}>
                
                <Text style={styles.title}>완료</Text>
            </View>

    )
  }
}

const styles = StyleSheet.create({
  button: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height*0.01,
    borderRadius: 15,
    height: height*0.07,
    opacity: 0.3,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 2, // Android 
  },
  title: {
    fontSize: width*0.055,
    fontWeight: "700",
    color:'#fff'
  },
});