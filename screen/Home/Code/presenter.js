import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, View, BackHandler, TouchableOpacity } from 'react-native';
import ConfirmButton from '../../../components/Button/ConfirmButton';
import ConfirmButtonN from '../../../components/Button/ConfirmButtonN';
import { TextField } from 'react-native-material-textfield';
import HeaderScrollView from 'react-native-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

const Code = props => (
	<>
		<TouchableOpacity
			style={{ position: 'absolute', width: width * 0.2, height: height * 0.1, top: 15, left: 10, zIndex: 1 }}
			onPress={() => {
				props.navigation.navigate('Home');
			}}
		>
			<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
		</TouchableOpacity>
		<View style={styles.container}>
		<HeaderScrollView
            scrollEnabled={false}
            fadeDirection="up"
            title="코드 입력">
			<View style={styles.header} />

			{/* 코드입력부분 */}
			<View style={styles.title}>
				<TextField
					title="발급받은 코드를 입력해 주세요."
					label="코드입력"
					returnKeyType={'done'}
					autoCorrect={false}
					value={props.code}
					multiline={false}
					onChangeText={props.changeText}
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
	  width: "100%",
	  textAlign: 'center',
	  //  backgroundColor: '#1ad657',
	  paddingTop: 10,
	  alignSelf: 'center',
	  backgroundColor: 'white',
	  paddingHorizontal: width * 0.03
  
	},
	input: {
	  padding: 7,
	  borderColor: "#32B8FF",
	  borderWidth: 1,
	  fontSize: 17,
	  marginTop: 7
	},
	codeInput: {
	  fontSize: 17,
	  color: "#32B8FF"
	}
  });

export default Code;
