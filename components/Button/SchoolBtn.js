import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, Dimensions } from 'react-native';

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
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<View style={styles.logo}>
						{this.props.school === 'AA대학교' ? (
							<Image style={styles.logoImage} source={require('../../images/Harvard.png')} />
						) : this.props.school === 'BB대학교' ? (
							<Image style={styles.logoImage} source={require('../../images/Tokyo.jpeg')} />
						) : (
							<Image style={styles.logoImage} source={require('../../images/Yale.jpg')} />
						)}
						{/* <Image style={styles.logoImage} source={require('../../images/ulsan.jpeg')} /> */}
					</View>
					<View style={styles.title}>
						<Text style={styles.titleText}>{this.props.school}</Text>
					</View>
					<View style={styles.address}>
						{this.props.school === 'AA대학교' ? (
							<Text style={styles.addressText}>{'서울특별시 \n남구'}</Text>
						) : this.props.school === 'BB대학교' ? (
							<Text style={styles.addressText}>{'부산광역시 \n북구'}</Text>
						) : (
							<Text style={styles.addressText}>{'울산광역시 \n동구'}</Text>
						)}
						{/* <Text style={styles.addressText}>{'울산광역시 \n남구'}</Text> */}
					</View>
					<View style={[styles.symbolLine, { borderColor: this.props.lineColor }]} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	button: {
		width: width * 0.4,
		height: 260,
		backgroundColor: 'white',
		borderRadius: width * 0.38 * 0.2,
		shadowColor: '#E1E1E1', // IOS
		shadowOffset: { height: 3, width: 0 }, // IOS
		shadowOpacity: 3, // IOS
		shadowRadius: 3, //IOS
		elevation: 1.5,
	},
	logo: {
		backgroundColor: 'white',
		width: 55,
		height: 55,
		borderRadius: 27,
		marginTop: 21,
		marginLeft: 21,
		marginBottom: 50,
		elevation: 2,
		shadowColor: 'rgba(0,0,.2, .2)',
		shadowOffset: { height: 1, width: 1 },
		shadowOpacity: 1,
		shadowRadius: 1.5,
	},
	logoImage: {
		width: 55,
		height: 55,
		borderRadius: 27,

		overflow: 'hidden',
	},
	title: {
		marginLeft: 21,
	},
	titleText: {
		fontSize: width * 0.06,
		fontWeight: '600',
		color: '#3B3B3B',
	},
	address: {
		marginLeft: 21,
		marginTop: 8,
	},
	addressText: {
		fontSize: width * 0.04,
		color: '#BBBBBB',
		lineHeight: 23,
	},
	symbolLine: {
		marginTop: 20,
		marginLeft: 21,
		borderBottomWidth: 5,
		borderRadius: 10,
		width: width * 0.09,
	},
});
