import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions, Text, Platform, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Login = props => (
	<View style={styles.container}>
		<View style={styles.block}>
			<Text>ID</Text>
			<TextInput />
            <Text>이메일</Text>
			<TextInput />
			<TouchableOpacity><Text>확인</Text></TouchableOpacity>
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
