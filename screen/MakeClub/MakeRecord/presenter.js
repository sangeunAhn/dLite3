import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import RecordFalse from '../../../components/Button/RecordButtonN';
import RecordTrue from '../../../components/Button/RecordButton';
import { Icon } from 'react-native-elements';
import MasonryList from 'react-native-masonry-list';

const MakeRecord = props => (
	<>
		{props.isGetting ? (
			<View style={styles.container}>
				<Icon
					raised
					reverse
					name="plus"
					type="entypo"
					color="#2eaeff"
					containerStyle={{ position: 'absolute', bottom: 100, right: 10, zIndex: 999 }}
					onPress={props.iconPress}
				/>

				{/* 사진들 들어갈 곳 */}
				<MasonryList
					imageContainerStyle={{ borderRadius: 17, right: 12 }}
					spacing={7}
					images={props.listRecords}
					onPressImage={(item, index) => {
						props.RecordRegister(item.uri);
					}}
					sorted={true}
				/>

				{/* 완료버튼 */}
				<View style={styles.footer}>
					{/* true면 <RecordTrue /> false면 <RecordFalse /> */}
					{props.count >= 1 ? <RecordTrue onPress={props.btnPress} /> : <RecordFalse />}
				</View>
			</View>
		) : (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		)}
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
		borderTopWidth: 0,
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
});

export default MakeRecord;
