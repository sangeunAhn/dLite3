import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { scale, moderateScale, verticalScale} from '../../components/Scaling';
import { LinearGradient } from 'expo';

const  {width, height} = Dimensions.get("window");


export default class MainButton extends Component{
  static defaultProps = {
    title: 'untitled',
    buttonColor: '#f0f0f0',
    titleColor: '#4d4d4d',
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity
      onPress={this.props.onPress}>
      <LinearGradient colors={['#ECF6FF','#E0EDF9', '#CCDEEE','#B9CFE3']} style={styles.button}>
        <Text style={[styles.title,{color: this.props.titleColor, fontSize: moderateScale(20),}]}>
          {this.props.title}
        </Text>
      </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: width*0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height*0.01,
    borderRadius: width*0.9*0.5,
    height:height*0.08,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      elevation: 2, // Android
  },
  title: {
    fontSize: 18,
  },
});