import React from 'react';
import { StyleSheet, Dimensions, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import RegisterButton from '../../../components/Button/RegisterButton';
import RegisterButtonN from '../../../components/Button/RegisterButtonN';
import { scale, moderateScale, verticalScale } from '../../../components/Scaling';
import PhotoRegister from '../../../components/PhotoRegister';
import PhotoModify from '../../../components/PhotoModify';
import { Ionicons } from '@expo/vector-icons';
import HeaderScrollView from 'react-native-header-scroll-view';

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
				<View style={styles.footer}>
					{props.count === 0 ? (
						<>
							{props.navigation.getParam('to', 'NO-ID') == 'm' ? (
								<View style={{ width: '100%' }}>
									{props.isSubmitting ? (
										<RegisterButton title={'로딩'} />
									) : (
										<TouchableOpacity onPress={props.btnDeleteAll}>
											<RegisterButton title={'기록 삭제'} />
										</TouchableOpacity>
									)}
								</View>
							) : (
								<View style={{ width: '100%' }}>
									<RegisterButtonN title={'사진을 넣어주세요.'} />
								</View>
							)}
						</>
					) : (
						<View style={{ width: '100%' }}>
							{props.isSubmitting ? (
								<RegisterButton title={'로딩'} />
							) : (
								<TouchableOpacity onPress={props.btnPress}>
									<RegisterButton title={'확인'} />
								</TouchableOpacity>
							)}
						</View>
					)}
				</View>
			</>
		)}
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	scroll: {
		flex: 1,
		padding: 10,
	},
	header: {
		width: moderateScale(300),
		height: 50,
		backgroundColor: '#32AAFF',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginBottom: 40,
		textAlign: 'center',
	},
	footer: {
		flex: 1,
		position: 'absolute',
		alignItems: 'center',
		bottom: 0,
		width: '100%',
		textAlign: 'center',
		// backgroundColor: '#1ad657',
		paddingBottom: height * 0.01,
		alignSelf: 'center',
		backgroundColor: 'white',
		paddingHorizontal: width * 0.03,
	},
	button: {
		flex: 1,
		backgroundColor: '#50C8FF',
		alignItems: 'center',
		justifyContent: 'center',
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
