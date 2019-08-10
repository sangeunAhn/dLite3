import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, ActivityIndicator, Platform, Text } from 'react-native';
import RecordButtonN from '../../../components/Button/RecordButtonN';
import RecordButton from '../../../components/Button/RecordButton';
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
						props.navigation.getParam('from', 'NO-ID') == 'm'
							? props.navigation.goBack()
							: props.navigation.navigate('Code');
					}}
				>
					<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.addBtn}
					onPress={props.iconPress}
				>
					<Text style={{fontSize: width*0.04, color: '#3B3B3B', fontWeight: '600'}}>추가</Text>
				</TouchableOpacity>
				<View style={styles.container}>
				<HeaderScrollView
						headerContainerStyle={{
							justifyContent: 'center', alignItems: 'center', height: Platform.OS === 'ios'
								? height * 0.1
								: height * 0.08
						}}
						headlineStyle={{
							height: height * 0.1, textAlign: 'center', justifyContent: 'center', alignItems: 'center',
							alignSelf: 'center', fontSize: width * 0.05,
							paddingTop: Platform.OS === 'ios' ? height * 0.055 : height * 0.048
						}}
						headerComponentContainerStyle={{ justifyContent: 'center', alignItems: 'center', height: height * 0.08 }}
						titleStyle={{
							paddingTop: Platform.OS === 'ios' ? 15 : 0,
							color: '#3B3B3B',
							fontSize: width * 0.09,
						}}
						fadeDirection="up"
						title="기록 생성"
					>
					{props.count >= 1 ?
						<>
						<MasonryList
							imageContainerStyle={{ borderRadius: 17, right: 12 }}
							spacing={7}
							images={props.listRecords}
							onPressImage={(item, index) => {
								props.RecordRegister(item.uri);
							}}
							sorted={true}
						/>
						</>
						:
						<>
						<View style={{width:width, paddingTop:height*0.01,height: height*0.6, justifyContent:'center', alignContent:'center'}}>
							<Text style={{fontSize:width*0.05, color:'#BBBBBB',textAlign: 'center', alignSelf: 'center',}}>최소 1개 이상 기록해야 합니다.</Text>
						</View>
						</>
					}
					</HeaderScrollView>

					{/* 완료버튼 */}
					<View style={styles.footer}>
						{/* true면 <RecordTrue /> false면 <RecordFalse /> */}
						{props.count >= 1 ? <RecordButton onPress={props.btnPress} /> : <RecordButtonN />}
					</View>
				</View>
			</>
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
	backBtn: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: 10,
		zIndex: 1,
	},
	addBtn: {
		position: 'absolute',
		width: width * 0.1,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		right: 10,
		zIndex: 1,
		fontSize: width * 0.05
	},
	header: {
		paddingTop: 23,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		fontSize: width * 0.05,
	},
	content: {
		flex: 1,
	},
	footer: {
		height: height*0.09,
		marginTop: 30,
		paddingHorizontal: width * 0.03,
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
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default MakeRecord;
