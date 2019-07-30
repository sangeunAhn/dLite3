import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ConfirmButton extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity style={{}} onPress={() => this._gotoSignUp()}>
				<View style={styles.box}>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<View style={{ flexDirection: 'row' }}>
							<View style={styles.logo}>
								<EvilIcons name="user" size={width * 0.12} />
							</View>
							<View style={styles.content}>
								<View style={styles.title}>
									<Text style={{ fontSize: width * 0.07, fontWeight: 'bold' }}>정보 수정</Text>
								</View>
								<View style={styles.sub}>
									<Text style={{ fontSize: width * 0.032, color: '#BBBBBB' }}>우리 동아리는요!</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		borderRadius: 15,
		height: height * 0.07,
		shadowColor: 'rgba(0,0,0, .4)', // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		elevation: 2, // Android
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
	},
});
