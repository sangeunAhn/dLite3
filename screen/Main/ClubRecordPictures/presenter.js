import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TouchableOpacity, Dimensions } from 'react-native';
import Picture from '../../../components/Picture';
import HeaderScrollView from 'react-native-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ClubRecordPictures = props => (
	<>
		{props.isGetting ? (
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
					onPress={() => {
						props.navigation.goBack();
					}}
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
					scrollEnabled={false}
					fadeDirection="up"
					title="기록 사진"
				>
					{/* 회색부분 */}
					{Object.values(props.getDatas).map(image => (
						<Picture key={image.createdAt} picture={image.recordPicture} text={image.recordContent} />
					))}
				</HeaderScrollView>
			</View>
		) : (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		)}
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center'
	},
	header: {
		width: '100%',
		height: 40,
		backgroundColor: '#3296FF',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
	},
	title: {
		fontSize: 23,
		color: '#fff',
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
});

export default ClubRecordPictures;
