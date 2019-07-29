import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ClubView from '../ClubView';

const ClubDiv = props => (
	<View style={styles.container}>
		<Text style={styles.menuTitle}>{props.clubKind}</Text>
		{props.clubName.map((name, i) => {
			return (
				<ClubView
					clubName={props.clubName[i]}
					clubLogo={props.clubLogo[i]}
					clubMainPicture={props.clubMainPicture[i]}
					school={props.school}
					key={i}
					navigation={props.navigation}
				/>
			);
		})}
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		borderTopWidth: 1,
		borderColor: '#bebebe',
		marginBottom: 10,
	},
	menuTitle: {
		marginBottom: 7,
		paddingTop: 15,
		paddingLeft: 25,
		color: '#828282',
		fontSize: 15,
	},
});

export default ClubDiv;
