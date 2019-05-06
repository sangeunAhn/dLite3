import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

export default class RegisterButton extends Component{
  static defaultProps = {
    buttonColor: '#28E7FF',
    titleColor: '#fff',
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View 
      style={[styles.button,{backgroundColor: this.props.buttonColor}]}
     >
        {this.props.title=='로딩'
          ?
          <ActivityIndicator color="white" />
          :
          <Text style={[styles.title, {color: this.props.titleColor}]}>
            {this.props.title}
          </Text>
        }
        

      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  title: {
    fontSize: 20,
    fontWeight: "700"
  },
});