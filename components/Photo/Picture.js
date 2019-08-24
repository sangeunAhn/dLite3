import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

const { height, width } = Dimensions.get('window');

export default class Pictures extends React.Component {
	render() {
		return (
			<>
				<View style={styles.container}>
					<View style={styles.image}>
						<AutoHeightImage
							width={width - 22}
							
							source={{ uri: this.props.picture }}
						/>
						</View>
					<View style={styles.bottom}>
						<Text style={styles.text}>{this.props.text}</Text>
					</View>
				</View>
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width-20,
		marginTop: 12,
		marginBottom: 12,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		borderRadius: 10,
		shadowColor: '#DEDEDE',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 2,
        shadowRadius: 3,
        elevation: 3,
		alignItems: 'center'
	},
	image : { 
		borderTopLeftRadius: 9, 
		borderTopRightRadius: 9 ,
		overflow: 'hidden'
	},
	top: {
		height: 40,
		backgroundColor: 'white',
	},
	bottom: {
		height: 80,
		borderRadius: 10,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
		color: '#2c3e50',
	},

	delBtn: {
		position: 'absolute',
		borderColor: 'gray',
		borderWidth: 0.3,
		backgroundColor: 'white',
		top: -7,
		right: -7,
		width: 35,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 17,
	},
});
