import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, ActivityIndicator, Platform } from 'react-native';
import RecordFalse from '../../../components/Button/RecordButtonN';
import RecordTrue from '../../../components/Button/RecordButton';
import { Icon } from 'react-native-elements';
import MasonryList from 'react-native-masonry-list';
import HeaderScrollView from 'react-native-header-scroll-view';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const MakeRecord = props => (
	<>
		{props.isGetting ? (
			<>
				<TouchableOpacity
					style={styles.backBtn}
					onPress={() => {
						props.navigation.navigate('Code');
					}}
				>
					<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
				</TouchableOpacity>
				<View style={styles.container}>
					<HeaderScrollView
						headerContainerStyle={{ height: height * 0.08 }}
						headlineStyle={styles.header}
						headerComponentContainerStyle={{ justifyContent: 'center', height: height * 0.08 }}
						titleStyle={{
							paddingTop: Platform.OS === 'ios' ? 15 : 0,
							color: '#3B3B3B',
							fontSize: width * 0.09,
						}}
						fadeDirection="up"
						title="기록 추가"
					>
						<Icon
							raised
							reverse
							name="plus"
							type="entypo"
							color="#2eaeff"
							containerStyle={{ right: 10, zIndex: 999 }}
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
					</HeaderScrollView>

					{/* 완료버튼 */}
					<View style={styles.footer}>
						{/* true면 <RecordTrue /> false면 <RecordFalse /> */}
						{props.count >= 1 ? <RecordTrue onPress={props.btnPress} /> : <RecordFalse />}
					</View>
				</View>
			</>
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
