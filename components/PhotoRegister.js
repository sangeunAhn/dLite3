import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { scale, moderateScale, verticalScale } from '../components/Scaling';
import { ImagePicker, Constants, Permissions } from 'expo';

export default class ClubChars extends React.Component {
	constructor(props) {
		super(props);
    }
	render() {
		return (
			<View style={styles.contentBackground}>
				<TouchableOpacity onPress={this._pickImage}>
					<View style={styles.content}>
						<Image
							style={{ height: '50%', width: '55%', resizeMode: 'contain' }}
							source={require('../images/addPhoto.png')}
						/>
					</View>
				</TouchableOpacity>

				<View style={styles.commentInput}>
					<Text style={styles.text}>간단한 코멘트를 입력해주세요</Text>
				</View>
			</View>
		);
    }
    

	// 이미지피커
	_pickImage = async () => {
		const permissions = Permissions.CAMERA_ROLL;
		const { status } = await Permissions.askAsync(permissions);

		if (status === 'granted') {
			let result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				quality: 0.5,
			});

			if (!result.cancelled) {
                this.props.addImage(result.uri);
			}
        }
	};
}

const styles = StyleSheet.create({
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
	text: {
		fontSize: 20,
		color: '#bebebe',
	},
});
