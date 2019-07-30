import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SchoolBtn from '../../../components/Button/SchoolBtn';

const Schools = props => (
	<>
		<View style={styles.container}>
			<SchoolBtn
				school={'울산대학교'}
				backgroundColor={'#c7ecee'}
				textColor={'#1289A7'}
				onPress={props.ulsanUiv}
			/>
		</View>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
		paddingBottom: 120,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Schools;
