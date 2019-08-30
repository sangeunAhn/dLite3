import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, SafeAreaView,Text, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UpdateButton from '../../../components/Button/updateClubButton/UpdateButton';
import { getStatusBarHeight,ifIphoneX  } from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window');

const UpdateClub = props => (
	<>
		<View style={{ flex: 1, backgroundColor: '#FAFAFA', }}>
			<TouchableOpacity
				style={styles.backButton}
				onPress={() => props.navigation.goBack()}
			>
				<SafeAreaView>
					<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
				</SafeAreaView>
			</TouchableOpacity>

			<Text style={styles.screenTitle}>선택</Text>

			<View style={styles.container}>
				<UpdateButton title={'계정 수정'} sub={''} press={props.gotoSignUp} />
				<View style={styles.emptyPlace} />
				<UpdateButton title={'동아리 생성/수정'} sub={''} press={props.gotoSignUp} />
				<View style={styles.emptyPlace} />
			</View>
		</View>
	</>
);

const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: 10,
		zIndex: 1,

	},
	container: {
		height: height * 0.8,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FAFAFA',
	},
	screenTitle: {
		marginTop: Platform.OS === 'ios' ? height * 0.1 : height * 0.07,
		marginLeft: width * 0.05,
		fontSize: width * 0.09,
		fontWeight: '700',
		backgroundColor: '#FAFAFA',
	},
	box1: {
		width: width * 0.9,
		height: height * 0.1,
		backgroundColor: 'white',
		borderRadius: 5,
		shadowColor: '#A8A8A8', // IOS
		shadowOffset: { height: 0, width: 0 }, // IOS
		shadowOpacity: 5, // IOS
		shadowRadius: 5, //IOS
		elevation: 2,
	},
	box2: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	box3: {
		flexDirection: 'row'
	},
	logo: {
		marginHorizontal: width * 0.03,
		justifyContent: 'center',
	},
	content: {
		flex: 1,
		flexWrap: 'wrap',
	},
	title: {
		justifyContent: 'center',
	},
	sub: {
		marginLeft: width * 0.007,
		justifyContent: 'center',
	},
	titleText: {
		fontSize: width * 0.07,
		fontWeight: 'bold',
	},
	subText: {
		fontSize: width * 0.032,
		color: '#BBBBBB',
	},
	emptyPlace: {
		width: '100%', height: height * 0.05
	}
});

export default UpdateClub;
