import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MainButton from '../../../components/Button/MainButton';

const UpdateClub = props => (
	<View style={styles.container}>
		<MainButton buttonColor={'#CEF6CE'} title={'정보 수정'} onPress={props.gotoSignUp} />
		<View style={{ width: '100%', height: 20 }} />
		<MainButton buttonColor={'#CEE3F6'} title={'특성 수정'} onPress={props.gotoChar} />
		<View style={{ width: '100%', height: 20 }} />
		<MainButton buttonColor={'#E6E6E6'} title={'기록 수정'} onPress={props.gotoRecord} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default UpdateClub;