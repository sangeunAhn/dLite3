import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class ConfirmButton extends Component {
	static defaultProps = {
		buttonColor: '#28E7FF',
		titleColor: '#fff',
		onPress: () => null,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				style={[styles.button, { backgroundColor: this.props.buttonColor }]}
				onPress={this.props.onPress}
			>
				<Text style={[styles.title, { color: this.props.textColor }]}>{this.props.school}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
        height: 50,
	},
	title: {
		fontSize: 20,
        fontWeight: '300',
	},
});
