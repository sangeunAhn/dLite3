import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Text, View, TouchableWithoutFeedback } from 'react-native';
import ConfirmButton from '../../../components/Button/ConfirmButton';
import ConfirmButtonN from '../../../components/Button/ConfirmButtonN';
import CharInput from '../../../components/CharInput';
import Char from '../../../components/Char';
import CharEX from '../../../components/CharEX';
import HeaderScrollView from 'react-native-header-scroll-view';
import { scale, moderateScale } from '../../../components/Scaling';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const MakeChars = props => (
	<>
		<TouchableWithoutFeedback onPress={props.screenPress}>
			<View style={styles.container}>
				<TouchableOpacity
					style={{
						position: 'absolute', width: width * 0.2, height: height * 0.1, top: Platform.OS === 'ios' ? 30 : 15, left: 10, zIndex: 1
					}}
					onPress={() => {
						props.navigation.navigate('Home');
					}}
				>
					<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
				</TouchableOpacity>
				<HeaderScrollView
					headerContainerStyle={{ height: height * 0.08 }}
					headlineStyle={styles.header}
					headerComponentContainerStyle={{ justifyContent: 'center', height: height * 0.08 }}
					titleStyle={{
						paddingTop: Platform.OS === 'ios'
							? 15
							: 0, color: '#3B3B3B', fontSize: width * 0.09
					}}
					fadeDirection="up"
					title="특징 입력"
				>
					<View style={{ flex: 1 }}>
						{props.count >= 15 ? <View style={styles.dd} /> : <CharInput addChar={props.addChar} />}
						{/* 위에 샾버튼 클릭했을 때 생긴 샾버튼 들어가는 곳 */}
					</View>

					{/* 샾버튼 모아놓은거 */}
					{/* 위에 샾버튼 클릭했을 때 생긴 샾버튼 들어가는 곳 */}
					<View style={styles.contain}>
						{props.chars == 0 ? (
							<>
								<View style={{ flexDirection: 'column' }}>
									<Text style={{ fontSize: moderateScale(12), color: '#BBBBBB', marginBottom: 10 }}>
										{' '}
										예시)
										{'\n'}
									</Text>
									<View
										style={{
											flexDirection: 'row',
											flexWrap: 'wrap',
											justifyContent: 'space-evenly',
										}}
									>
										<CharEX title="#소규모" />
										<CharEX title="#꿀잼" />
										<CharEX title="#잘생긴놈들" />
										<CharEX title="#아싸들의 성지" />
										<CharEX title="#페북/인스타 운영" />
										<CharEX title="#친근함" />
										<CharEX title="#대규모" />
										<CharEX title="#매주 여행" />
									</View>
								</View>
							</>
						) : (

							<View
								style={{
									width: '100%',
									flexWrap: 'wrap',
									flex: 1,
									flexDirection: 'row',
									alignItems: 'flex-start',
									marginTop: 20,
								}}
							>
								{Object.values(props.chars).map((data) => (
									<Char
										key={data.id}
										text={data.char}
										removeChar={props.removeChar}
										delBtn={data.delBtn}
										{...data}
									/>
								))}
							</View>
						)}

					</View>
					<View style={{ height: 80 }} />
				</HeaderScrollView>
				{/* 완료버튼 */}
				<View style={styles.footer}>
					{props.chars == 0 ? (
						<ConfirmButtonN title={'선택완료'} />
					) : props.isSubmitting ? (
						<ConfirmButton buttonColor={'#ADCDE9'} titleColor={'#3B3B3B'} title={'로딩'} />
					) : (
								<ConfirmButton
									buttonColor={'#ADCDE9'}
									titleColor={'#3B3B3B'}
									title={'선택완료'}
									onPress={props.buttonPress}
								/>
							)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 10,
		paddingBottom: 10,
		backgroundColor: 'white',
	},
	header: {
		width: '100%',
		paddingTop: 20,
	},
	title: {
		width: '100%',
		paddingTop: scale(10),
		flexDirection: 'row',
		alignItems: 'flex-end',
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
		flex: 1,
		position: 'absolute',
		alignItems: 'center',
		bottom: 10,
		width: '100%',
		textAlign: 'center',
		// backgroundColor: '#1ad657',
		paddingTop: 10,
		alignSelf: 'center',
		backgroundColor: 'white',
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
