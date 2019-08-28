import React, { Component } from 'react';
import {
	StyleSheet,
	Dimensions,
	TouchableWithoutFeedback,
	Keyboard,
	View,
	BackHandler,
	TouchableOpacity,
	Platform,
	SafeAreaView,
} from 'react-native';
import ConfirmButton from '../../../components/Button/ConfirmButton';
import ConfirmButtonN from '../../../components/Button/ConfirmButtonN';
import { TextField } from 'react-native-material-textfield';
import HeaderScrollView from 'react-native-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight,ifIphoneX  } from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window');

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

const Code = props => (
	<>
		<TouchableOpacity
			style={{
				position: 'absolute',
				width: width * 0.2,
				height: height * 0.1,
				top: Platform.OS === 'ios' ? 30 : 15,
				left: 10,
				zIndex: 1,
			}}
			onPress={() => {
				props.navigation.navigate('Home');
			}}
		>
			<SafeAreaView>
				<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
			</SafeAreaView>
		</TouchableOpacity>
		<View style={styles.container}>
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
					// paddingTop: Platform.OS === 'ios' ? 15 : 0,
					color: '#3B3B3B',
					fontSize: width * 0.09,
				}}
				fadeDirection="up"
				title="코드 입력"
			>
				<View style={styles.header} />

				{/* 코드입력부분 */}
				<View style={styles.title}>
					<TextField
						title="발급받은 코드를 입력해 주세요."
						titleFontSize={height*0.015}
						label="코드입력"
						labelFontSize={height*0.018}
						returnKeyType={'done'}
						autoCorrect={false}
						value={props.code}
						multiline={false}
						onChangeText={props.changeText}
						fontSize={height*0.023}
					/>
				</View>

				<View style={styles.content} />
			</HeaderScrollView>

			{/* 확인 버튼 */}
			<View style={styles.footer}>
				{props.userCode.length == 0 ? (
					<ConfirmButtonN title={'확인'} />
				) : (
						<ConfirmButton title={'확인'} onPress={props.login} />
					)}
			</View>
		</View>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FAFAFA',
		paddingBottom: 10,
		// backgroundColor: 'red',
	},
	header: {
		width: '100%',
		height: height * 0.15,
		// backgroundColor: '#ff9a9a',
	},
	title: {
		paddingHorizontal: 10,
		width: '100%',
		// backgroundColor: '#9aa9ff'
	},
	content: {
		// backgroundColor: '#d6ca1a',
	},
	footer: {
		flex: 1,
		position: 'absolute',
		alignItems: 'center',
		bottom: 10,
		width: '100%',
		textAlign: 'center',
		backgroundColor: '#FAFAFA',
		paddingTop: 10,
		alignSelf: 'center',

		paddingHorizontal: width * 0.03,
	},
});

export default Code;
