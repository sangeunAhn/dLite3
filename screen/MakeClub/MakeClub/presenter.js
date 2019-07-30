import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	Image,
	ActivityIndicator,
	Platform,
} from 'react-native';
import ConfirmButton from '../../../components/Button/ConfirmButton';
import ClubPicker from '../../../components/ClubPicker';
import ClubPickerM from '../../../components/ClubPickerM';
import ConfirmButtonN from '../../../components/Button/ConfirmButtonN';
import { Ionicons } from '@expo/vector-icons';
import HeaderScrollView from 'react-native-header-scroll-view';

const { width, height } = Dimensions.get('window');

const MakeClub = props => (
	<>
		{props.isGetting == false && props.navigation.getParam('from', 'NO-ID') == 'm' ? (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		) : (
			<View style={styles.container}>
				<TouchableOpacity
					style={{
						position: 'absolute',
						width: width * 0.2,
						height: height * 0.1,
						top: 15,
						left: 10,
						zIndex: 1,
					}}
					onPress={() =>
						props.navigation.goBack()
					}
				>
					<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
				</TouchableOpacity>

				<HeaderScrollView
					headerContainerStyle={{ height: height * 0.08 }}
					headlineStyle={{
						paddingTop: 23,
						textAlign: 'center',
						justifyContent: 'center',
						alignItems: 'center',
						alignSelf: 'center',
						fontSize: width * 0.05,
					}}
					headerComponentContainerStyle={{ justifyContent: 'center', height: height * 0.08 }}
					titleStyle={{ fontSize: width * 0.08 }}
					fadeDirection="up"
					title="동아리 소개"
				>
					<Text style={styles.blank}>ㅁㅁㅁㅁ</Text>

					<Text style={styles.text1}>동아리 로고, 메인 사진</Text>

					<TouchableOpacity
						style={{ alignItems: 'center', marginTop: 5, marginHorizontal: width * 0.05 }}
						onPress={props.pickMainPicture}
					>
						<Image
							style={{
								width: width * 0.1,
								height: width * 0.1,
								position: 'absolute',
								zIndex: 1,
								right: -15,
								bottom: -15,
							}}
							source={require('../../../images/pAdd.png')}
						/>
						{props.clubMainPicture == null ||
						props.clubMainPicture == 'ul' ||
						props.clubMainPicture == '' ? (
							<View
								style={{
									marginTop: 5,
									width: width * 0.9,
									height: height * 0.23,
									borderRadius: 15,
									backgroundColor: '#CEE1F2',
								}}
							/>
						) : (
							props.clubMainPicture && (
								<Image
									style={{
										marginTop: 5,
										width: width * 0.9,
										height: height * 0.23,
										borderRadius: 15,
										backgroundColor: '#CEE1F2',
									}}
									source={{ uri: props.clubMainPicture }}
								/>
							)
						)}
					</TouchableOpacity>

					<View style={{ alignItems: 'center', top: -width * 0.07, zIndex: 1 }}>
						{props.clubLogo == null || props.clubLogo == 'ul' || props.clubLogo == '' ? (
							<TouchableOpacity
								onPress={props.pickLogo}
								style={{
									width: width * 0.27,
									height: width * 0.27,
									top: -width * 0.07,
									zIndex: 1,
									backgroundColor: '#ADCDE9',
									borderRadius: width * 0.27 * 0.5,
								}}
							>
								<Image
									style={{
										width: width * 0.1,
										height: width * 0.1,
										position: 'absolute',
										zIndex: 1,
										right: -5,
										bottom: -5,
									}}
									source={require('../../../images/pAdd.png')}
								/>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								onPress={props.pickLogo}
								style={{
									width: width * 0.27,
									height: width * 0.27,
									top: -width * 0.07,
									zIndex: 1,
									borderRadius: width * 0.27 * 0.5,
								}}
							>
								<Image
									style={{
										width: width * 0.27,
										height: width * 0.27,
										borderRadius: width * 0.27 * 0.5,
									}}
									source={{ uri: props.clubLogo }}
								/>
								<Image
									style={{
										width: width * 0.1,
										height: width * 0.1,
										position: 'absolute',
										zIndex: 1,
										right: -5,
										bottom: -5,
									}}
									source={require('../../../images/pAdd.png')}
								/>
							</TouchableOpacity>
						)}
					</View>

					<View style={{ paddingHorizontal: width * 0.05 }}>
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
										borderColor: props.isFocused
											? Platform.OS === 'ios'
												? 'white'
												: 'transparent'
											: '#DCDCDC',
										borderWidth: 1,
										shadowColor: props.isFocused ? 'rgba(0,0,0, .2)' : null, // IOS
										shadowOffset: props.isFocused ? { height: 1, width: 1 } : null, // IOS
										shadowOpacity: props.isFocused ? 1 : null, // IOS
										shadowRadius: props.isFocused ? 1 : null, // IOS
										elevation: props.isFocused ? 2 : null, // IOS
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
										borderColor: props.isFocused
											? Platform.OS === 'ios'
												? 'white'
												: 'transparent'
											: '#DCDCDC',
										borderWidth: 1,
										shadowColor: props.isFocused ? 'rgba(0,0,0, .2)' : null, // IOS
										shadowOffset: props.isFocused ? { height: 1, width: 1 } : null, // IOS
										shadowOpacity: props.isFocused ? 1 : null, // IOS
										shadowRadius: props.isFocused ? 1 : null, // IOS
										elevation: props.isFocused ? 2 : null, // IOS
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
										borderColor: props.isFocused
											? Platform.OS === 'ios'
												? 'white'
												: 'transparent'
											: '#DCDCDC',
										borderWidth: 1,
										shadowColor: props.isFocused ? 'rgba(0,0,0, .2)' : null, // IOS
										shadowOffset: props.isFocused ? { height: 1, width: 1 } : null, // IOS
										shadowOpacity: props.isFocused ? 1 : null, // IOS
										shadowRadius: props.isFocused ? 1 : null, // IOS
										elevation: props.isFocused ? 2 : null, // IOS
									},
								]}
								multiline={true}
								onChangeText={props.clubPhoneNumberChange}
								value={props.clubPhoneNumber}
								maxLength={100}
								autoCorrect={false}
							/>
						</View>
					</View>

					<View style={styles.button}>
						{props.clubName.length == 0 &&
						props.clubWellcome.length == 0 &&
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
	container: {
		flex: 1,
		backgroundColor: 'white',
	},

	input: {
		borderRadius: 8,
		width: '100%',
		padding: 7,
		borderColor: '#32B8FF',
		borderWidth: 1,
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
	title: {
		width: width,
		height: height * 0.6,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#F2F2F2',
		paddingTop: 25,
	},
	clubImage: {
		width: '90%',
		height: '65%',
		resizeMode: 'cover',
		backgroundColor: '#323232',
		borderRadius: 15,
	},
	logo: {
		height: 70,
		width: 70,
		resizeMode: 'cover',
		backgroundColor: '#fff',
		borderRadius: 35,
		top: -30,

		zIndex: 1,
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