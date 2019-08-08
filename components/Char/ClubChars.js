import React, { Component } from 'react';
import { Text } from 'react-native';

export default class ClubChars extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Text>#{this.props.chars} </Text>;
	}
}
