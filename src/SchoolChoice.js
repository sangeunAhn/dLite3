import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MainButton from '../components/MainButton';

export default class SchoolChoice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
            <MainButton
                buttonColor={'#444'}
                title={'동의대학교'}
                onPress={() => this.props.navigation.navigate('FindClub')}/>
            <View style={{width:"100%",height:10}} />
            <MainButton
                buttonColor={'#023e73'}
                title={'고려대학교'}
                onPress={() => this.props.navigation.navigate('FindClub')}/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent : 'center'
  },
  
});