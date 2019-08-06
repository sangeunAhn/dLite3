import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions, } from 'react-native';

const { width, height } = Dimensions.get('window');

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
		console.log(this.props.lineColor)
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.button}
					onPress={this.props.onPress}
				>
					<View style={styles.logo}>
						<Image style={styles.logoImage} source={require('../../images/ulsan.jpeg')} />
					</View>
					<View style={styles.title}>
						<Text style={styles.titleText}>{this.props.school}</Text>
					</View>
					<View style={styles.address}>
						<Text style={styles.addressText}>{'울산광역시 \n남구'}</Text>
					</View>
					<View style={[styles.symbolLine, { borderColor : this.props.lineColor }]}></View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	
	},
	button: {
		width: width * 0.38,
		height: height * 0.34,
		backgroundColor: 'white',
		elevation: 3,
		borderRadius: 30,
		shadowColor: 'rgba(0,0,.2, .2)',
		shadowOffset: { height: 1, width: 1 },
		shadowOpacity: 1,
		shadowRadius: 1.5,
	},
	logo: {
		backgroundColor: 'white',
		width: width * 0.11,
		height: width * 0.11,
		borderRadius: width * 0.11 * 0.5,
		marginTop: width * 0.052,
		marginLeft: width * 0.052,
		marginBottom: height * 0.08,
		elevation: 2,
		shadowColor: 'rgba(0,0,.2, .2)',
		shadowOffset: { height: 1, width: 1 },
		shadowOpacity: 1,
		shadowRadius: 1.5,
	},
	logoImage: {
		width: width * 0.11,
		height: width * 0.11,
		borderRadius: width * 0.11 * 0.5,

		overflow: 'hidden'
	},
	title: {
		marginLeft: width * 0.04
	},
	titleText: {
		fontSize: width * 0.05,
		fontWeight: '700',
		color:'#505050'
	},
	address:{
		marginLeft: width * 0.04,
		marginTop: height*0.01
	},
	addressText:{
		fontSize: width *0.035,
		color:'#BBBBBB',
		lineHeight:17
	},
	symbolLine:{
		marginTop:height*0.03,
		marginLeft: width * 0.05,
		borderBottomWidth:4,
		borderRadius:10,
		
		width:width*0.09
	}
});
