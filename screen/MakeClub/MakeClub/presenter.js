import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from 'react-native';
import ConfirmButton from '../../../components/Button/ConfirmButton';
import ClubPicker from '../../../components/ClubPicker';
import ClubPickerM from '../../../components/ClubPickerM';
import ConfirmButtonN from '../../../components/Button/ConfirmButtonN';
import { moderateScale, verticalScale } from '../../../components/Scaling';

const MakeClub = props => (
	<>
		{props.isGetting == false && props.navigation.getParam('from', 'NO-ID') == 'm' ? (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		) : (
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.blank}>ㅁㅁㅁㅁ</Text>

					<View style={styles.block}>
						<Text
							style={[
								styles.text,
								{
									color: props.isFocused ? '#000000' : '#8d97a5',
								},
							]}
						>
							동아리 이름
						</Text>
						<TextInput
							onFocus={props.handleFocus}
							onBlur={props.clubName.length == 0 ? props.handleBlur : null}
							style={[
								styles.input,
								{
									borderColor: props.isFocused ? '#8ad1ff' : '#dbf1ff',
									borderWidth: 1,
								},
							]}
							onChangeText={props.clubNameChange}
							maxLength={20}
							value={props.clubName}
							autoCorrect={false}
						/>
					</View>
					<View style={styles.block}>
						<Text style={styles.text}>동아리 종류</Text>
						<View style={{ width: 160 }}>
							{props.navigation.getParam('from', 'NO-ID') == 'm' ? (
								<ClubPickerM clubKind={props.clubKind} setPrevClubKind={props.setPrevClubKind} />
							) : (
								<ClubPicker setPrevClubKind={props.setPrevClubKind} />
							)}
						</View>
					</View>
					<View style={styles.block}>
						<Text
							style={[
								styles.text,
								{
									color: props.isFocused1 ? '#000000' : '#8d97a5',
								},
							]}
						>
							동아리 소개
						</Text>
						<TextInput
							onFocus={props.handleFocus1}
							onBlur={props.clubIntroduce.length == 0 ? props.handleBlur1 : null}
							style={[
								styles.input,
								styles.introduce,
								{
									borderColor: props.isFocused1 ? '#8ad1ff' : '#dbf1ff',
									borderWidth: 1,
								},
							]}
							multiline={true}
							onChangeText={props.clubIntroduceChange}
							maxLength={100}
							autoCorrect={false}
							value={props.clubIntroduce}
						/>
					</View>
					<View style={styles.block}>
						<Text
							style={[
								styles.text,
								{
									color: props.isFocused2 ? '#000000' : '#8d97a5',
								},
							]}
						>
							이런 신입생 와라
						</Text>
						<TextInput
							onFocus={props.handleFocus2}
							onBlur={props.clubWellcome.length == 0 ? props.handleBlur2 : null}
							style={[
								styles.input,
								styles.introduce,
								{
									borderColor: props.isFocused2 ? '#8ad1ff' : '#dbf1ffed',
									borderWidth: 1,
								},
							]}
							multiline={true}
							onChangeText={props.clubWellcomeChange}
							value={props.clubWellcome}
							placeholder={'ex. 상큼한 새내기들 환영'}
							placeholderTextColor={'#d1d1d1'}
							maxLength={100}
							autoCorrect={false}
						/>
					</View>
					<View style={styles.block}>
						<Text
							style={[
								styles.text,
								{
									color: props.isFocused3 ? '#000000' : '#8d97a5',
								},
							]}
						>
							연락 가능 연락처
						</Text>
						<TextInput
							onFocus={props.handleFocus3}
							onBlur={props.clubPhoneNumber.length == 0 ? props.handleBlur3 : null}
							style={[
								styles.input,
								{
									borderColor: props.isFocused3 ? '#8ad1ff' : '#dbf1ffed',
									borderWidth: 1,
								},
							]}
							multiline={true}
							onChangeText={props.clubPhoneNumberChange}
							value={props.clubPhoneNumber}
							maxLength={100}
							autoCorrect={false}
						/>
					</View>
					<View style={styles.block}>
						<Text style={styles.text}>동아리 로고</Text>

						<TouchableOpacity style={{ alignItems: 'center' }} onPress={props.pickLogo}>
							{props.clubLogo == null || props.clubLogo == 'ul' || props.clubLogo == '' ? (
								<Image
									source={require('../../../images/logoEdit.png')}
									style={{
										width: 100,
										height: 100,
										alignItems: 'center',
										flex: 1,
										marginTop: 20,
									}}
								/>
							) : (
								<Image
									source={{ uri: props.clubLogo }}
									style={{
										width: 100,
										height: 100,
										alignItems: 'center',
										flex: 1,
										marginTop: 20,
										backgroundColor: 'red',
									}}
								/>
							)}
						</TouchableOpacity>
					</View>
					<View style={styles.block}>
						<Text style={styles.text}>동아리 메인사진</Text>
						<TouchableOpacity style={{ alignItems: 'center' }} onPress={props.pickMainPicture}>
							{props.clubMainPicture == null ||
							props.clubMainPicture == 'ul' ||
							props.clubMainPicture == '' ? (
								<Image
									source={require('../../../images/pictureEdit.png')}
									style={{
										width: moderateScale(210),
										height: verticalScale(160),
										marginTop: 20,
									}}
								/>
							) : (
								props.clubMainPicture && (
									<Image
										source={{ uri: props.clubMainPicture }}
										style={{
											width: moderateScale(210),
											height: verticalScale(160),
											marginTop: 20,
										}}
									/>
								)
							)}
						</TouchableOpacity>
					</View>
					<View style={styles.button}>
						{props.clubName.length == 0 &&
						props.clubWellcome.length == 0 &&
						props.clubPhoneNumber.length == 0 ? (
							<ConfirmButtonN title={'확인'} />
						) : props.isSubmitting ? (
							<ConfirmButton title={'로딩'} />
						) : (
							<ConfirmButton title={'확인'} onPress={props.btnPress} />
						)}
					</View>
				</View>
			</ScrollView>
		)}
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		backgroundColor: 'white',
	},

	input: {
		borderRadius: 8,
		width: '100%',
		padding: 7,
		borderColor: '#32B8FF',
		borderWidth: 1,
		fontSize: 17,
		marginTop: 5,
	},
	text: {
		fontSize: 13,
	},
	toDos: {
		alignItems: 'center',
	},
	block: {
		paddingBottom: 30,
	},
	introduce: {
		height: 120,
	},
	button: {
		height: 60,
		marginTop: 30,
	},
	blank: {
		fontSize: 40,
		color: 'white',
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
});

export default MakeClub;
