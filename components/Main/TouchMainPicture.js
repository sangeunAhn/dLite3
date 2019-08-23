import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, Image, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class TouchMainPicture extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<View style={{ zIndex: 0 }}>
					{this.props.clubMainPicture === null ? (
						<View style={styles.picture} backgroundColor={'#CEE1F2'} />
					) : (
						<View style={styles.picture}>
						<Image blurRadius={5} style={styles.picture2} source={{ uri: this.props.clubMainPicture }} />
						</View>
					)}
				</View>
				<View style={styles.popup}>
					<View style={styles.inPopup}>
						<View style={styles.logo}>
							{this.props.clubLogo === null ? (
								<View style={styles.Image} backgroundColor={'#ADCDE9'} />
							) : (
								<Image style={styles.Image} source={{ uri: this.props.clubLogo }} />
							)}
						</View>

						<TouchableOpacity onPress={this.props.gotoClubIntroduce} style={{ flex: 1 }}>
							<View style={styles.clickArea}>
								<Text style={styles.text}>소개</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.props.gotoRecord} style={{ flex: 1 }}>
							<View style={styles.clickArea}>
								<Text style={styles.text}>기록</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</>
		);
	}
}

const styles = StyleSheet.create({
	popup: {
		position: 'absolute',
		top: 10,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 20,
	},
	inPopup: {
		width: width * 0.5,
		height: height * 0.085,
		backgroundColor: 'white',
		borderRadius: 50,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	logo: {
		margin: width * 0.05,
		width: width * 0.1,
		height: width * 0.1,
		borderRadius: width * 0.1 * 0.5,
		shadowColor: '#888888', // IOS
		shadowOffset: { height:0 , width: 0 }, // IOS
		shadowOpacity: 15, // IOS
		shadowRadius: 5, //IOS
	
	},
	clickArea: {
		height: height * 0.1,
		justifyContent: 'center',
	},
	Image: {
		width: width * 0.1,
		height: width * 0.1,
		borderRadius: width * 0.1 * 0.5,
		
	},
	picture: {
		zIndex: 0,
		
		borderRadius: 13,
		width: width * 0.9,
		height: height * 0.245,
		
	},
	picture2: {
		zIndex: 0,
		borderRadius: 13,
		width: width * 0.9,
		height: height * 0.245,
	},
	text: {
		fontSize: width * 0.037,
		fontWeight:'400'
	},
});
