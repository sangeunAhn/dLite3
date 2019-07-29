import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import ConfirmButton from '../../components/Button/ConfirmButton';
import ConfirmButtonN from '../../components/Button/ConfirmButtonN';
import { TextField } from 'react-native-material-textfield';

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

const Code = props => (
	<>
		<DismissKeyboard>
			<View style={styles.container}>
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

				{/* 확인 버튼 */}
				<View style={styles.footer}>
					{props.userCode.length == 0 ? (
						<ConfirmButtonN title={'확인'} />
					) : (
						<ConfirmButton title={'확인'} onPress={props.login} />
					)}
				</View>
			</View>
		</DismissKeyboard>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: 'white',
	},
	header: {
		width: '100%',
		height: '10%',
		// backgroundColor: '#ff9a9a',
	},
	title: {
		width: '100%',
		height: '30%',
		// backgroundColor: '#9aa9ff'
	},
	content: {
		flex: 1,
		// backgroundColor: '#d6ca1a',
	},
	footer: {
		width: '100%',
		height: 150,
		// backgroundColor: '#1ad657',
		paddingTop: 40,
		paddingBottom: 40,
	},
	input: {
		padding: 7,
		borderColor: '#32B8FF',
		borderWidth: 1,
		fontSize: 17,
		marginTop: 7,
	},
	codeInput: {
		fontSize: 17,
		color: '#32B8FF',
	},
});

export default Code;