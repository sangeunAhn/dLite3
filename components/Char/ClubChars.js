import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { moderateScale } from '../Scaling';

export default class ClubChars extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Text style={styles.text}>#{this.props.chars}{'  '} </Text>;
	}
}


const styles = StyleSheet.create({
	text: {
		fontSize: moderateScale(10),
		textAlignVertical: "center",
		color: '#BBBBBB',
	},
});