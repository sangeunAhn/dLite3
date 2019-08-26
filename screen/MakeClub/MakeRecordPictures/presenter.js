import React from 'react';
import {
	StyleSheet,
	Dimensions,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
	Platform,
	SafeAreaView,
} from 'react-native';
import { scale, moderateScale, verticalScale } from '../../../components/Scaling';
import PhotoRegister from '../../../components/Photo/PhotoRegister';
import PhotoModify from '../../../components/Photo/PhotoModify';
import { Ionicons } from '@expo/vector-icons';
import HeaderScrollView from 'react-native-header-scroll-view';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper'


const { width, height } = Dimensions.get('window');

const MakeRecordPictures = props => (
	<>
		{props.isGetting == false && props.navigation.getParam('to', 'NO-ID') == 'm' ? (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		) : (
				<>
					<TouchableOpacity
						style={{
							position: 'absolute',
							width: width * 0.2,
							height: height * 0.1,
							top: Platform.OS === 'ios' ? 30 : 15,
							left: 10,
							zIndex: 1,
						}}
						onPress={() => {
							props.navigation.goBack();
						}}
					>
						<SafeAreaView>
							<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
						</SafeAreaView>
					</TouchableOpacity>

					{props.count === 0 ? (
						<>
							{props.navigation.getParam('to', 'NO-ID') == 'm' ? (
								<TouchableOpacity style={styles.addBtn} onPress={props.btnDeleteAll}>
									<SafeAreaView>
										<Text style={styles.btnText}>기록 제거</Text>
									</SafeAreaView>
								</TouchableOpacity>
							) : (
									<View style={styles.addBtn}>
										<SafeAreaView>
											<Text style={[styles.btnText, { color: '#bdc3c7' }]} >
												게시
								</Text>
										</SafeAreaView>
									</View>
								)}
						</>
					) : (
							<>
								{props.isSubmitting ? (
									<TouchableOpacity style={styles.addBtn}>
										<View style={styles.btnText} right={10}>
											<ActivityIndicator color="black" />
										</View>
									</TouchableOpacity>
								) : (
										<TouchableOpacity style={styles.addBtn} onPress={props.btnPress}>
											<SafeAreaView>
												<Text style={styles.btnText}>게시</Text>
											</SafeAreaView>
										</TouchableOpacity>
									)}
							</>
						)}

					<HeaderScrollView
						containerStyle={{ backgroundColor: '#FAFAFA' }}
						headerContainerStyle={{
							backgroundColor: '#FAFAFA',
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
						title="기록 생성"
					>
						<View style={styles.container}>
							{/* 사진 넣는 곳 */}
							{Object.values(props.images).map(image => (
								<PhotoModify
									key={image.id}
									deleteImage={props.deleteImage}
									updateImage={props.updateImage}
									updateComment={props.updateComment}
									{...image}
								/>
							))}
							<PhotoRegister addImage={props.addImage} />
						</View>
						<View style={{ height: 80 }} />
					</HeaderScrollView>
				</>
			)}
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FAFAFA',
		paddingTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scroll: {
		flex: 1,
		padding: 10,
	},
	backBtn: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.07,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: 10,
		zIndex: 1,
		//   backgroundColor: 'blue'
	},
	addBtn: {
		position: 'absolute',
		width: width * 0.25,
		height: height * 0.07,
		top: Platform.OS === 'ios' ? 32 : 15,
		right: 10,
		zIndex: 1,
		fontSize: width * 0.053,
		alignItems: 'flex-end',
		// backgroundColor: 'blue'
	},
	btnText: {
		fontSize: width * 0.053,
		color: '#3B3B3B',
		fontWeight: '600',
		...ifIphoneX({ paddingTop: 2 }, { paddingTop: 0 })

	},
	header: {
		paddingTop: 23,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		fontSize: width * 0.05,
	},
	button: {
		height: height * 0.09,

		paddingHorizontal: width * 0.03,
		backgroundColor: '#FAFAFA',
	},
	text: {
		fontSize: 20,
		color: '#fff',
	},
	titleInput: {
		color: '#fff',
		//   backgroundColor: '#32AAFF',
		fontSize: 20,
		textAlign: 'center',
	},
	buttonStyle: {
		width: 150,
		height: 75,
		backgroundColor: 'ivory',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 15,
	},
	contentBackground: {
		marginTop: scale(50),
		backgroundColor: '#f2f2f2',
		marginBottom: 15,
		width: moderateScale(310),
		height: verticalScale(360),
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		//그림자효과
		shadowColor: '#dbdbdb',
		shadowOpacity: 0.8,
		shadowRadius: 5,
		shadowOffset: {
			height: 5,
			width: 5,
		},
		elevation: 3,
	},
	content: {
		backgroundColor: '#fff',
		width: moderateScale(270),
		height: moderateScale(280),
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
	},
	commentInput: {
		fontSize: 21,
		textAlign: 'center',
		paddingTop: 30,
		paddingBottom: 5,
	},
});

export default MakeRecordPictures;
