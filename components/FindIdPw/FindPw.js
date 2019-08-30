import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions, Text, Platform, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Login = props => (
	<View style={styles.container}>
		<View style={styles.block}>
			<Text>ID</Text>
			<TextInput onChangeText={props.pwIdChange} value={props.pwId} />
			<Text>이메일</Text>
			<TextInput onChangeText={props.pwEmailChange} value={props.pwEmail} />
			<TouchableOpacity onPress={props.pwConfirmBtn}>
				<Text>확인</Text>
			</TouchableOpacity>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
});

export default Login;
