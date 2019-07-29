import React from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import RegisterButton from '../../../components/Button/RegisterButton';
import RegisterButtonN from '../../../components/Button/RegisterButtonN';
import { scale, moderateScale, verticalScale } from '../../../components/Scaling';
import PhotoRegister from '../../../components/PhotoRegister';
import PhotoModify from '../../../components/PhotoModify';


const MakeRecordPictures = props => (
	<>
		{props.isGetting == false && props.navigation.getParam('to', 'NO-ID') == 'm' ? (
			<ActivityIndicator size="large" style={styles.activityIndicator} />
		) : (
			<>
				<ScrollView>
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
				</ScrollView>
				<View style={styles.footer}>
					{props.count === 0 ? (
						<RegisterButtonN title={'사진을 넣어주세요.'} />
					) : (
						<TouchableOpacity onPress={props.btnPress}>
							{props.isSubmitting ? (
								<RegisterButton title={'로딩'} />
							) : (
								<RegisterButton title={'확인'} />
							)}
						</TouchableOpacity>
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
		padding: 20,
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
		width: '100%',
		height: 70,
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