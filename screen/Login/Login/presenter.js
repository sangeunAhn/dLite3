import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions, Text, Platform, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Login = props => (
	<>
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.backButton}
				onPress={() => {
					props.navigation.goBack();
				}}
			>
				<SafeAreaView>
					<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
				</SafeAreaView>
			</TouchableOpacity>
			<Text style={styles.title}>로그인</Text>
			<View style={styles.container2}>
				<View style={styles.login}>
					<Text style={styles.loginText}>로그인</Text>
					<View style={styles.idPw}>
						<Text style={styles.idPwText}>ID</Text>
						<TextInput
							style={[
								styles.input,
								{
									borderColor: props.isFocused ? '#DCDCDC' : null,
									shadowColor: props.isFocused ? '#E1E1E1' : null, // IOS
									shadowOffset: props.isFocused ? { height: 1.5, width: 0 } : null, // IOS
									shadowOpacity: props.isFocused ? 5 : null, // IOS
									shadowRadius: props.isFocused ? 3 : null, // IOS
									elevation: props.isFocused ? 1.5 : null, // IOS
								},
							]}
							onChangeText={props.idChange}
							value={props.id}
							maxLength={20}
							autoCorrect={false}
						/>
					</View>
					<View style={styles.idPw}>
						<Text style={styles.idPwText}>패스워드</Text>
						<TextInput
							style={[
								styles.input,
								{
									borderColor: props.isFocused ? '#DCDCDC' : null,
									shadowColor: props.isFocused ? '#E1E1E1' : null, // IOS
									shadowOffset: props.isFocused ? { height: 1.5, width: 0 } : null, // IOS
									shadowOpacity: props.isFocused ? 5 : null, // IOS
									shadowRadius: props.isFocused ? 3 : null, // IOS
									elevation: props.isFocused ? 1.5 : null, // IOS
								},
							]}
							onChangeText={props.pwChange}
							value={props.pw}
							maxLength={20}
							autoCorrect={false}
						/>
					</View>
					<TouchableOpacity style={styles.loginButton} onPress={props.login}>
						<Text>로그인</Text>
					</TouchableOpacity>
					<View style={styles.buttons}>
						<TouchableOpacity style={styles.button} onPress={props.idPwFind}>
							<Text>ID/PW 찾기</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={props.signUp}>
							<Text>회원가입</Text>
						</TouchableOpacity>
					</View>
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
		backgroundColor: '#FAFAFA',
	},
	title: {
		marginTop: Platform.OS === 'ios' ? height * 0.1 : height * 0.07,
		marginLeft: width * 0.05,
		marginBottom: height * 0.02,
		fontSize: width * 0.09,
		fontWeight: '700',
	},
	container2: {
		flex: 1,
		backgroundColor: '#FAFAFA',
		justifyContent: 'center',
	},
	login: {
		width: '100%',
		height: height * 0.3,
		top: -height * 0.08,
		backgroundColor: '#bdc3c7',
		alignItems: 'center',
		paddingTop: height * 0.04,
	},
	loginText: {
		fontSize: 20,
	},
	idPw: {
		width: '60%',
		flexDirection: 'row',
		alignItems: 'center',
		// backgroundColor: 'green',
	},
	idPwText: {
		fontSize: 15,
		width: '30%',
		textAlign: 'center',
		// backgroundColor: 'blue',
	},
	input: {
		borderRadius: height * 0.01,
		padding: height * 0.009,
		backgroundColor: 'white',
		fontSize: height * 0.021,
		marginTop: height * 0.007,
		width: '70%',
	},
	loginButton: {
		marginTop: height * 0.03,
		width: width * 0.5,
		height: width * 0.1,
		backgroundColor: '#3498db',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttons: {
		width: '100%',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-around',
	},
	button: {
		backgroundColor: '#3498db',
		width: '30%',
		height: height * 0.03,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Login;
