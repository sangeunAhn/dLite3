import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Dimensions,
	Image,
	ActivityIndicator,
	Platform,
	SafeAreaView,
} from 'react-native';
import ConfirmButton from '../../../components/Button/ConfirmButton';
import ClubPicker from '../../../components/MakeClub/ClubPicker';
import ClubPickerM from '../../../components/MakeClub/ClubPickerM';
import ConfirmButtonN from '../../../components/Button/ConfirmButtonN';
import { Ionicons } from '@expo/vector-icons';
import HeaderScrollView from 'react-native-header-scroll-view';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window');

const MakeClub = props => (
	<>
		{props.isGetting == false && props.navigation.getParam('from', 'NO-ID') == 'm' ? (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		) : (
				<View style={styles.container}>
					<TouchableOpacity
						style={styles.backBtn}
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
							justifyContent: 'center', alignItems: 'center', height: Platform.OS === 'ios'
								? height * 0.1
								: height * 0.08
						}}
						headlineStyle={{
							height: height * 0.1, textAlign: 'center', justifyContent: 'center', alignItems: 'center',
							alignSelf: 'center', fontSize: width * 0.05,
							paddingTop: Platform.OS === 'ios' ? height * 0.055 : height * 0.048
						}}
						headerComponentContainerStyle={{ justifyContent: 'center', alignItems: 'center', height: height * 0.08 }}
						titleStyle={{
							// paddingTop: Platform.OS === 'ios' ? 15 : 0,
							color: '#3B3B3B',
							fontSize: width * 0.09,
						}}
						fadeDirection="up"
						title="동아리 소개"
					>
						<View style={{ width: '100%', height: 10 }} />

						<Text style={styles.text1}>동아리 로고, 메인 사진</Text>

						<TouchableOpacity style={styles.MainPictureClick} onPress={props.pickMainPicture}>
							<Image style={styles.PhotoAddMainPicture} source={require('../../../images/photoAdd.png')} />
							{props.clubMainPicture == null ||
								props.clubMainPicture == 'ul' ||
								props.clubMainPicture == '' ? (
									<View style={styles.MainPictureImage} />
								) : (
									props.clubMainPicture && (
										<Image style={styles.MainPictureImage} source={{ uri: props.clubMainPicture }} />
									)
								)}
						</TouchableOpacity>

						<View style={styles.logo}>
							{props.clubLogo == null || props.clubLogo == 'ul' || props.clubLogo == '' ? (
								<TouchableOpacity onPress={props.pickLogo} style={styles.logoClick}>
									<Image style={styles.photoAddLogo} source={require('../../../images/photoAdd.png')} />
								</TouchableOpacity>
							) : (
									<TouchableOpacity onPress={props.pickLogo} style={styles.logoClick}>
										<Image style={styles.logoImage} source={{ uri: props.clubLogo }} />
										<Image style={styles.photoAddLogo} source={require('../../../images/photoAdd.png')} />
									</TouchableOpacity>
								)}
						</View>

						<View style={styles.containerFromClubName}>
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
											borderColor: props.isFocused ? '#DCDCDC' : null,
											shadowColor: props.isFocused ? '#E1E1E1' : null, // IOS
											shadowOffset: props.isFocused ? { height: 1.5, width: 0 } : null, // IOS
											shadowOpacity: props.isFocused ? 5 : null, // IOS
											shadowRadius: props.isFocused ? 3 : null, // IOS
											elevation: props.isFocused ? 1.5 : null, // IOS
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
										{
											height: 120,
											borderColor: props.isFocused1 ? '#DCDCDC' : null,
											shadowColor: props.isFocused1 ? '#E1E1E1' : null, // IOS
											shadowOffset: props.isFocused1 ? { height: 1.5, width: 0 } : null, // IOS
											shadowOpacity: props.isFocused1 ? 5 : null, // IOS
											shadowRadius: props.isFocused1 ? 3 : null, // IOS
											elevation: props.isFocused1 ? 1.5 : null, // IOS
										},
									]}
									multiline={true}
									onChangeText={props.clubIntroduceChange}
									maxLength={1000}
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
									연락 가능 연락처
							</Text>
								<TextInput
									onFocus={props.handleFocus2}
									onBlur={props.clubPhoneNumber.length == 0 ? props.handleBlur2 : null}
									style={[
										styles.input,
										{

											borderColor: props.isFocused2 ? '#DCDCDC' : null,
											shadowColor: props.isFocused2 ? '#E1E1E1' : null, // IOS
											shadowOffset: props.isFocused2 ? { height: 1.5, width: 0 } : null, // IOS
											shadowOpacity: props.isFocused2 ? 5 : null, // IOS
											shadowRadius: props.isFocused2 ? 3 : null, // IOS
											elevation: props.isFocused2 ? 1.5 : null, // IOS
										},
									]}
									onChangeText={props.clubPhoneNumberChange}
									value={props.clubPhoneNumber}
									maxLength={1000}
									multiline={true}
									autoCorrect={false}
								/>
							</View>
						</View>

						<View style={styles.button}>
							{props.clubName.length == 0 &&
								props.clubPhoneNumber.length == 0 ? (
									<ConfirmButtonN buttonColor={'#CEE1F2'} titleColor={'#BBBBBB'} title={'확인'} />
								) : props.isSubmitting ? (
									<ConfirmButton buttonColor={'#ADCDE9'} titleColor={'#3B3B3B'} title={'로딩'} />
								) : (
										<ConfirmButton
											buttonColor={'#ADCDE9'}
											titleColor={'#3B3B3B'}
											title={'확인'}
											onPress={props.btnPress}
										/>
									)}
						</View>
					</HeaderScrollView>
				</View>
			)}
	</>
);

const styles = StyleSheet.create({
	backBtn: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? getStatusBarHeight() : 15,
		left: 10,
		zIndex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: '#FAFAFA',
	},
	header: {
		height: height * 0.1,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		fontSize: width * 0.05,
	},
	MainPictureClick: {
		alignItems: 'center',
		marginTop: 5,
		marginHorizontal: width * 0.05,
	},
	PhotoAddMainPicture: {
		width: width * 0.1,
		height: width * 0.1,
		position: 'absolute',
		zIndex: 1,
		right: -15,
		bottom: -15,
	},
	MainPictureImage: {
		marginTop: 5,
		width: width * 0.9,
		height: height * 0.23,
		borderRadius: 15,
		backgroundColor: '#CEE1F2',
	},
	logo: {
		alignItems: 'center',
		top: -width * 0.07,
		zIndex: 1,
	},
	logoClick: {
		width: width * 0.27,
		height: width * 0.27,
		top: -width * 0.07,
		zIndex: 1,
		backgroundColor: '#ADCDE9',
		borderRadius: width * 0.27 * 0.5,
	},
	photoAddLogo: {
		width: width * 0.1,
		height: width * 0.1,
		position: 'absolute',
		zIndex: 1,
		right: -5,
		bottom: -5,
	},
	logoImage: {
		width: width * 0.27,
		height: width * 0.27,
		borderRadius: width * 0.27 * 0.5,
	},
	containerFromClubName: {
		paddingHorizontal: width * 0.05,
	},
	input: {
		borderRadius: 8,
		width: '100%',
		padding: 7,
		backgroundColor: 'white',
		fontSize: width * 0.04,
		marginTop: 5,
	},
	text: {
		fontSize: width * 0.04,
	},
	text1: {
		fontSize: width * 0.04,
		paddingHorizontal: width * 0.05,
	},
	block: {
		paddingBottom: 30,
	},
	button: {
		height: height * 0.09,
		marginTop: 30,
		paddingHorizontal: width * 0.03,
	},
	blank: {
		fontSize: 25,
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
