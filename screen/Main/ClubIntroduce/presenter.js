import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import ClubChars from '../../../components/ClubChars';

const { width, height } = Dimensions.get('window');

const ClubIntroduce = props => (
	<>
		{props.isGetting1 && props.isGetting2 ? (
			<ScrollView style={styles.container}>
				{/* 회색부분 */}
				<View style={styles.title}>
					{/* 동아리 대표 이미지 */}
					{props.clubMainPicture === null || props.clubMainPicture == '' ? (
						<Image source={require('../../../images/momo.jpg')} style={styles.clubImage} />
					) : (
						<Image source={{ uri: props.clubMainPicture }} style={styles.clubImage} />
					)}

					{/* 로고 이미지 */}
					{props.clubLogo === null || props.clubLogo == '' ? (
						<Image source={require('../../../images/momo.jpg')} style={styles.logo} />
					) : (
						<Image source={{ uri: props.clubLogo }} style={styles.logo} />
					)}

					<Text style={styles.clubTitle}>{props.clubName}</Text>

					<Text style={styles.clubChar}>
						{props.clubChar.map((chars, i) => {
							return <ClubChars chars={props.clubChar[i]} key={i} />;
						})}
					</Text>
				</View>

				<View style={styles.content}>
					<Text style={styles.text}>소개</Text>
					<Text style={styles.clubExplain}>{props.clubIntroduce}</Text>
				</View>
				<View style={styles.content}>
					<Text style={styles.text}>환영하는 신입생</Text>
					<Text style={styles.clubExplain}>{props.clubWellcome}</Text>
				</View>
				<View style={styles.content}>
					<Text style={styles.text}>전화번호</Text>
					<Text style={styles.clubExplain}>{props.clubPhoneNumber}</Text>
				</View>
			</ScrollView>
		) : (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		)}
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},

	title: {
		width: width,
		height: height * 0.6,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#F2F2F2',
		paddingTop: 25,
	},
	content: {
		padding: 10,
	},
	text: {
		fontSize: 15,
		color: '#727070',
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
	},
	clubTitle: {
		fontSize: 25,
		top: -15,
	},
	clubChar: {
		fontSize: 15,
		color: '#828282',
		top: -10,
	},
	clubExplain: {
		padding: 20,
		fontSize: 20,
		alignItems: 'center',
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
});

export default ClubIntroduce;
