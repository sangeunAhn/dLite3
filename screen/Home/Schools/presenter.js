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
				style={{ position: 'absolute', width: width * 0.2, height: height * 0.1, top: 15, left: 10, zIndex: 1 }}
				onPress={() => {
						props.navigation.goBack()
				}}
			>
				<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
			</TouchableOpacity>
			<Text style={styles.title}>학교 선택</Text>
				<View style={styles.schools}>
					<SchoolBtn
						school={'울산대학교'}
						backgroundColor={'#c7ecee'}
						textColor={'#1289A7'}
						onPress={props.ulsanUiv}
					/>
				</View>
		</View>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 10,
		paddingBottom: 10,
		backgroundColor: 'white',
	},
	title:{
		marginTop:45,
		marginLeft: 8,
		fontSize: 30,
		fontWeight: '700'
	},	
	schools: {
		flex: 1,
		padding: 40,
		paddingBottom: 120,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Schools;
