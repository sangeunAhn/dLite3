import React, { Component } from 'react';
import {
	StyleSheet,
	Platform,
	Text,
	View,
	Image,
	Dimensions,
	ScrollView,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';
import IntroduceChars from '../../../components/Char/IntroduceChars';
import HeaderScrollView from 'react-native-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ClubIntroduce = props => (
	<>
		{props.isGetting1 && props.isGetting2 ? (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.backBtn}
					onPress={() => {
						props.navigation.goBack();
					}}
				>
					<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
				</TouchableOpacity>
				<HeaderScrollView
					headerContainerStyle={{
						justifyContent: 'center',
						alignItems: 'center',
						height: Platform.OS === 'ios' ? height * 0.1 : height * 0.08,
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
					title="동아리 소개"
				>
					<Text style={styles.blank}>ㅁㅁㅁㅁ</Text>
					<Text style={styles.text1}>동아리 로고, 메인 사진</Text>

					<View style={styles.MainPictureView}>
						{props.clubMainPicture === null || props.clubMainPicture == '' ? (
							<View style={styles.clubMainPicture} />
						) : (
							<Image style={styles.clubMainPicture} source={{ uri: props.clubMainPicture }} />
						)}
					</View>

					<View style={styles.logoView1}>
						{
							<View style={styles.logoView2}>
								{props.clubLogo === null || props.clubLogo == '' ? (
									<Image style={styles.clubLogo} />
								) : (
									<Image style={styles.clubLogo} source={{ uri: props.clubLogo }} />
								)}
							</View>
						}
					</View>

					<View style={{ paddingHorizontal: width * 0.05 }}>
						<View style={styles.block}>
							<Text style={styles.text}>동아리 이름</Text>

							<View style={styles.input}>
								<Text style={styles.textIn}>{props.clubName}</Text>
							</View>
						</View>

						<View style={styles.block}>
							<View style={styles.chars}>
								{props.clubChar.map((char, index) => (
									<IntroduceChars key={index} char={char} />
								))}
							</View>
						</View>

						<View style={styles.block}>
							<Text style={styles.text}>동아리 소개</Text>
							<View style={styles.input}>
								<Text style={styles.textIn}>
									{props.clubIntroduce} 
								</Text>
							</View>
						</View>

						<View style={styles.block}>
							<Text style={styles.text}>연락처</Text>
							<View style={styles.input}>
								<Text style={styles.textIn}>{props.clubPhoneNumber}</Text>
							</View>
						</View>
					</View>
				</HeaderScrollView>
			</View>
		) : (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		)}
	</>
);

const styles = StyleSheet.create({
	backBtn: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: 10,
		zIndex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: '#FAFAFA',
	},
	header: {
		paddingTop: 23,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		fontSize: width * 0.05,
	},
	chars: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		alignItems: 'center',
	},
	blank: {
		fontSize: 25,
		color: 'white',
	},
	MainPictureView: {
		alignItems: 'center',
		marginTop: 5,
		marginHorizontal: width * 0.05,
	},
	logoView1: {
		alignItems: 'center',
		top: -width * 0.07,
		zIndex: 1,
	},
	logoView2: {
		width: width * 0.27,
		height: width * 0.27,
		top: -width * 0.07,
		zIndex: 1,
		borderRadius: width * 0.27 * 0.5,
	},
	clubLogo: {
		backgroundColor: '#ADCDE9',
		width: width * 0.27,
		height: width * 0.27,
		borderRadius: width * 0.27 * 0.5,
	},
	input: {
		borderRadius: 8,
		width: '100%',
		padding: 7,
		backgroundColor:'white',
		shadowColor: '#E1E1E1',
		shadowOffset: { height: 1.5, width: 0 },
		shadowOpacity: 5,
		shadowRadius: 3,
		elevation: 1.5,
		marginTop: 5,
	},
	text: {
		color: '#ADCDE9',
		fontSize: width * 0.06,
		fontWeight: 'bold',
	},
	text1: {
		color: '#ADCDE9',
		fontSize: width * 0.06,
		fontWeight: 'bold',
		paddingHorizontal: width * 0.05,
	},
	textIn: {
		fontSize: width * 0.04,
	},
	block: {
		paddingBottom: 30,
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
	clubMainPicture: {
		marginTop: 5,
		width: width * 0.9,
		height: height * 0.23,
		borderRadius: 15,
		backgroundColor: '#CEE1F2',
	},
});

export default ClubIntroduce;
