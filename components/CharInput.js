import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import CharButtonN from '../components/CharButtonN.js';


class CharInput extends Component {

    state = {
        newChar: '',
    }
    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.state = {disabled: false};
        this.state = {newChar: ''};
      }


    addNewChar = () => {
        if(this.state.newChar) {
            this.props.addChar(this.state.newChar);
            this.setState({
                newChar: ''
            });
        }
    }
render() {
      return (
<>
            <View style={styles.selectView}>

            <TextInput
                style={styles.input} 
                placeholder={"직접입력"}
                autoCorrect={ false }
                placeholderTextColor={"#32B8FF"}
                value={this.state.newChar}
                onChangeText={(newChar) => this.setState({newChar})}
                maxLength={8}
                
            />   



            
              <View style={styles.BT}>
                <TouchableOpacity
                style={styles.AB}
                onPressOut={this.addNewChar}
                >
                
                <Text style={{color : 'white'}}>추가</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            
            </>
      )
}
}
const styles = StyleSheet.create({
 
   
    input: {
      flex:3,
      padding: 10,
      borderColor: "#32B8FF",
      borderWidth: 1,
      fontSize: 17,
      marginRight:15,
      borderRadius: 7
    },
   
    selectView:{
      flexDirection: "row",
      marginTop:20
    },
    STBT:{
      flex:1,
      paddingLeft: 50,
      marginLeft:50,
    },
    AB:{
      
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"red",
      height: 40,
      width: 50,
      borderWidth:1, 
    borderColor:'#f1b3ae', 
    borderRadius:7,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		elevation: 2, // Android 
    },
    BT:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',

    }
  });
  export default CharInput;