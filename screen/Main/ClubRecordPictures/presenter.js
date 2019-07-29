import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Picture from '../../../components/Picture';

const ClubRecordPictures = props => (
	<>
		{props.isGetting ? (
			<ScrollView style={styles.container}>
				{/* 회색부분 */}
				{Object.values(props.getDatas).map(image => (
					<Picture key={image.createdAt} picture={image.recordPicture} text={image.recordContent} />
				))}
			</ScrollView>
		) : (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		)}
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