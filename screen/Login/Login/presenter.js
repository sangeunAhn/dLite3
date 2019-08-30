import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions, Text, Platform, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextField } from 'react-native-material-textfield';
import MainButton from '../../../components/Button/MainButton';
import LoginButton from '../../../components/Button/LoginButton';
import LoginButtonN from '../../../components/Button/LoginButtonN';
import HeaderScrollView from 'react-native-header-scroll-view';
import { getStatusBarHeight,ifIphoneX  } from 'react-native-iphone-x-helper'


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
			<HeaderScrollView
				headerContainerStyle={{
					justifyContent: 'center', alignItems: 'center', ...ifIphoneX({ paddingTop: 18 }, { paddingTop: 0 }), height: Platform.OS === 'ios'
						? height * 0.1
						: height * 0.08
				}}
				headlineStyle={{
					height: height * 0.1,
					textAlign: 'center',
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'center',
					fontSize: width * 0.05,
					paddingTop: Platform.OS === 'ios' ? height * 0.055 : height * 0.048,
				}}
				headerComponentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
					height: height * 0.08,
				}}
				titleStyle={{
					color: '#3B3B3B',
					fontSize: width * 0.09,
				}}
				fadeDirection="up"
				title="로그인"
			>
			<View style={styles.container2}>
					<TextField
						titleFontSize={height*0.015}
						label="아이디"
						labelFontSize={height*0.018}
						returnKeyType={'done'}
						autoCorrect={false}
						value={props.id}
						multiline={false}
						onChangeText={props.idChange}
						fontSize={height*0.023}
					/>
					<TextField
						titleFontSize={height*0.015}
						label="비밀번호"
						labelFontSize={height*0.018}
						returnKeyType={'done'}
						autoCorrect={false}
						value={props.pw}
						multiline={false}
						onChangeText={props.pwChange}
						fontSize={height*0.023}
					/>
					<View style={styles.loginButton}>
							<LoginButton title={'로그인'} onPress={props.login} />
				</View>
				<View style={styles.password}>
						<TouchableOpacity style={styles.button} onPress={props.idPwFind}>
						<Text style={styles.passwordFont}>아이디/비밀번호를 잊으셨나요?</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.and}>
						<View style={styles.andLineLeft}/><Text>또는</Text>
						<View style={styles.andLineRight}/>
						</View>
						<TouchableOpacity style={styles.signUpButton} onPress={props.signUp}>
						<View style={styles.signUpButton}>
						<Text style={styles.signUpText}>동아리회장 계정 만들기</Text>
						</View>
						</TouchableOpacity>
			</View>
</HeaderScrollView>
			</View>
			
	</>
);

const styles = StyleSheet.create({
	backButton : {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: 10,
		zIndex: 1,
	},
	container : {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FAFAFA',
	},
	container2 : {
		paddingHorizontal:'7%', 
		paddingTop:'28%'
		},
loginButton : {
	marginTop:20
	},
password : {
	alignItems:'center',
	marginTop:height*0.02
	},
passwordFont : {
	fontSize: width * 0.04, 
	color:'#B7B9BC'
	},
and : { 
	marginVertical:height*0.065, 
	height: 20, 
	alignItems: 'center', 
	flexDirection: 'row'
	},
andLineLeft : {
	flex:1,width:'100%', 
	backgroundColor:'#CCCFD2', 
	height:1, 
	marginRight:4
	},
andLineRight : {
	flex:1,
	width:'100%', 
	backgroundColor:'#CCCFD2', 
	height:1, 
	marginLeft:4
	},
	signUpButton : {
		backgroundColor:'#00A400', 
		height:height*0.07, 
		marginHorizontal:width*0.1,
		borderRadius:15, 
		alignItems:'center', 
		justifyContent:'center'
		},
		signUpText : {
			color:'white', 
			fontSize: width * 0.04
			}
});

export default Login;