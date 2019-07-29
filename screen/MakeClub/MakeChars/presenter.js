import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
} from 'react-native';
import ConfirmButton from '../../../components/Button/ConfirmButton';
import ConfirmButtonN from '../../../components/Button/ConfirmButtonN';
import CharInput from '../../../components/CharInput';
import CharGoal from '../../../components/CharGoal';
import { scale, moderateScale } from '../../../components/Scaling';

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

const MakeChars = props => (
	<>
		<DismissKeyboard>
			<View style={styles.container}>
				<View style={styles.header}>
					{/* 제목 */}
					<View style={styles.title}>
						<Text style={styles.text_1}>특징선택</Text>
						<Text style={styles.text_2}>중복 선택 가능</Text>
					</View>
				</View>

				{/* 샾버튼 모아놓은거 */}
				<KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? '200' : '50'}>
					{/* 위에 샾버튼 클릭했을 때 생긴 샾버튼 들어가는 곳 */}
					<View style={styles.contain}>
						<CharGoal chars={props.chars} removeChar={props.removeChar} />
					</View>

					{props.count >= 10 ? <View style={styles.dd} /> : <CharInput addChar={props.addChar} />}

					{/* 완료버튼 */}
					<View style={styles.footer}>
						{props.chars == 0 ? (
							<ConfirmButtonN title={'선택완료'} />
						) : (
							<ConfirmButton title={'선택완료'} onPress={props.ButtonPress} />
						)}
					</View>
				</KeyboardAvoidingView>
			</View>
		</DismissKeyboard>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		paddingTop: 10,
		padding: 10,
		paddingBottom: 10,
		backgroundColor: 'white',
	},
	header: {
		width: '100%',
		height: '50%',
		paddingTop: 20,
		// backgroundColor: '#ff9a9a',
	},
	title: {
		width: '100%',
		paddingTop: scale(10),
		flexDirection: 'row',
		alignItems: 'flex-end',
		// backgroundColor: '#9aa9ff',
		paddingLeft: 15,
	},
	dd: {
		height: '5%',
	},
	content: {
		// backgroundColor: '#d6ca1a',
		padding: 15,
		paddingTop: 30,
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingBottom: 50,
	},
	inputView: {
		width: '100%',
		height: 110,
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginTop: 30,
	},
	footer: {
		width: '100%',
		// backgroundColor: '#1ad657',
		paddingTop: 10,
	},

	text_1: {
		fontSize: moderateScale(25),
		color: '#0A6EFF',
		marginRight: 3,
	},
	text_2: {
		fontSize: moderateScale(12),
		color: '#aaaaaa',
	},
	selectView: {
		flexDirection: 'row',
	},
	STBT: {
		paddingLeft: 50,
		marginLeft: 50,
	},
	AB: {
		backgroundColor: 'red',
	},
	contain: {
		height: '25%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-end',
	},
});

export default MakeChars;