import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import MasonryList from 'react-native-masonry-list';

const ClubRecord = props => (
	<>
		<View style={styles.container}>
			{props.isGetting ? (
				<MasonryList
					imageContainerStyle={{ borderRadius: 17, right: 12 }}
					spacing={7}
					images={props.listRecords}
					onPressImage={(item, index) => {
						props.goToPictures(item.uri);
					}}
					sorted={true}
				/>
			) : (
				<ActivityIndicator size="large" style={styles.activityIndicator} />
			)}
		</View>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		width: '100%',
		height: 70,
		// backgroundColor:'#A0AFFF',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	content: {
		flex: 1,
	},
	footer: {
		width: '100%',
		height: 70,
		// backgroundColor: '#5CEEE6',
		borderTopWidth: 1,
	},
	button: {
		backgroundColor: '#0064FF',
		width: 50,
		height: 50,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 20,
		borderRadius: 50,
	},
	text: {
		fontSize: 25,
		color: '#fff',
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
});

export default ClubRecord;