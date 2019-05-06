import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import MainButton from '../components/MainButton';

export default class ClubModify extends React.Component {
  static navigationOptions = {
    
    style: {elevation: 0, shadowOpacity: 0,},
    headerStyle: { height: Platform.OS === 'ios' ? 70 : 10, elevation: 0,shadowColor: 'transparent', borderBottomWidth:0, paddingBottom:10, paddingTop: Platform.OS === 'ios' ? 40 : 5},
    
}
  render() {
    
    return (
      <View style={styles.container}>
       
            <MainButton
                buttonColor={'#CEF6CE'}
                title={'정보 수정'}
                onPress={() => this._gotoSignUp()}/>
            <View style={{width:"100%",height:20}} />
            <MainButton
                buttonColor={'#CEE3F6'}
                title={'특성 수정'}
                onPress={() => this._gotoChar()}/>
            <View style={{width:"100%",height:20}} />
            <MainButton
                buttonColor={'#E6E6E6'}
                title={'기록 수정'}
                onPress={() => this._gotoRecord()}/>
       
      </View>
    );
  }

  _gotoSignUp = () => {
    const { navigation } = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    userNo = userNo.replace(/[^0-9]/g,'');

    this.props.navigation.navigate('SignUp', {
        userNo : userNo,
        from: 'm'
    })
  }

  _gotoChar = () => {
    const { navigation } = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    userNo = userNo.replace(/[^0-9]/g,'');

    this.props.navigation.navigate('CharChoice', {
        userNo : userNo,
        from: 'm'
    })
  }

  _gotoRecord = () => {
    const { navigation } = this.props;
    var userNo = navigation.getParam('userNo', 'NO-ID');
    userNo = userNo.replace(/[^0-9]/g,'');

    this.props.navigation.navigate('SignUpRecord', {
        userNo : userNo,
        from: 'm'
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent : 'center',
    alignItems:'center'
  },
  
});