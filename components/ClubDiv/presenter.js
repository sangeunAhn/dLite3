import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import ClubView from '../ClubView';

const { width, height } = Dimensions.get('window');

const ClubDiv = props => (
	<View style={styles.container}>
        <View style={{ paddingHorizontal: width * 0.03 }}>
          <Text style={styles.menuTitle}>{props.clubKind}</Text>
          <View style={{ alignItems: 'flex-end', marginBottom: 20, }}>
            <View style={styles.line} />
          </View>
        </View>
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
		marginBottom: 10,
	},
	menuTitle: {
		marginBottom: 0,
		paddingTop: 15,
		fontWeight:'bold',
		color: '#ADCDE9',
		fontSize: width * 0.07,
	},
	line: {
		borderBottomWidth: width*0.002,
		borderColor: '#ADCDE9',
		width: '85%',
		alignItems: 'flex-end',
	},
});


export default ClubDiv;
