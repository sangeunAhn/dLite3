import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default class CharEX extends Component {
	static defaultProps = {
		title: 'untitled',
		buttonColor: '#28E7FF',
		onPress: () => null,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.button}>
				<Text style={[styles.title]}>#{this.props.char}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		borderRadius: 20,
		height: 37,
		backgroundColor: '#FFF1ED',
		paddingRight: 18,
		paddingLeft: 18,
		marginRight: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 1,
		elevation: 2,
		alignItems: 'center'
	},
	title: {
		fontSize: 13,
		color: '#505050',
	},
});
