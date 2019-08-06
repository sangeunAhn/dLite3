import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

class Char extends Component {
	constructor(props) {
		super(props);
		this.state = {
			delBtn: this.props.delBtn,
		};
	}

	render() {
		const { removeChar, id } = this.props;
		return (
			<>
				<View>
					{this.state.delBtn == false ? (
						<TouchableOpacity style={styles.button} onPress={this._charPress}>
							<Text style={{ color: '#3B3B3B' }}>{this.props.text}</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity style={styles.button} onPress={this._charPress}>
							<Text style={{ color: 'white' }}>{this.props.text}</Text>
							<TouchableOpacity style={{ position: 'absolute' }} onPress={() => removeChar(id)}>
								<Icon reverse size={10} name="cross" type="entypo" color="#676765" />
							</TouchableOpacity>
						</TouchableOpacity>
					)}
				</View>
			</>
		);
	}

	_charPress = async () => {
		await this.state.delBtn == false ? this.setState({ delBtn: true }) : this.setState({ delBtn: false });
	};
}

const styles = StyleSheet.create({
	whole: {
		flexDirection: 'row',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		borderRadius: 15,
		height: 40,
		backgroundColor: 'white',
		paddingRight: 10,
		paddingLeft: 10,
		marginRight: 10,

		flexDirection: 'row',
		shadowColor: 'rgba(0,0,0, .4)', // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		elevation: 1, // Android
	},
});

export default Char;
