import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text } from 'react-native';
import SchoolBtn from '../../../components/Button/SchoolBtn';
import { Ionicons } from '@expo/vector-icons';
import HeaderScrollView from 'react-native-header-scroll-view';

const { width, height } = Dimensions.get('window');

const Schools = props => (
	<>
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.backButton}
				onPress={() => {
					props.navigation.goBack();
				}}
			>
				<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
			</TouchableOpacity>
			<Text style={styles.title}>학교 선택</Text>
			<View style={{ flexDirection: 'column' }}>
				<View style={styles.schools}>
					<SchoolBtn
						school={'울산대학교'}
						backgroundColor={'white'}
						lineColor={'#5EC598'}
						onPress={props.ulsanUiv}
					/>
				</View>
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
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'white',
	},
	title:{
		marginTop:height*0.07,
		marginLeft: width*0.05,
		marginBottom:height*0.02,
		fontSize: width * 0.09,
		fontWeight: '700'
	},	
	schools: {
		flex: 1,
		marginHorizontal: width * 0.03,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});

export default Schools;
