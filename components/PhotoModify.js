import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { scale, moderateScale, verticalScale } from '../components/Scaling';
import { ImagePicker, Constants, Permissions } from 'expo';
import PropTypes from 'prop-types';

export default class PhotoModify extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			commentValue: '',
		};
	}
	static propTypes = {
		id: PropTypes.string.isRequired,
		deleteImage: PropTypes.func.isRequired,
		image: PropTypes.string.isRequired,
		comment: PropTypes.string.isRequired,
	};

	componentWillMount = async () => {
		const { comment } = this.props;
		this.setState({ commentValue: comment})
	};

	render() {
		const { id, deleteImage, image } = this.props;
		return (
			<View style={styles.contentBackground}>
				<TouchableOpacity onPress={this._pickImage}>
					<View style={styles.content}>
						<Image style={{ height: '100%', width: '100%', resizeMode: 'cover' }} source={{ uri: image }} />
					</View>
				</TouchableOpacity>

				<TextInput
					style={styles.commentInput}
					placeholder={'간단한 코멘트를 입력해주세요'}
					placeholderTextColor={'#bebebe'}
					multiline={false}
					onChangeText={comment => this._updateComment(comment)}
					value={this.state.commentValue}
					autoCorrect={false}
				/>
                <TouchableOpacity style={styles.delBtn} onPressOut={() => deleteImage(id)} >
                    <View>
                        <Text>❌</Text>
                    </View>
                </TouchableOpacity>
                
			</View>
		);
	}

	_updateComment = comment => {
		this.setState({ commentValue: comment })
		const { id, updateComment } = this.props;
		updateComment(id, comment);
	}

	// 이미지피커
	_pickImage = async () => {
		const permissions = Permissions.CAMERA_ROLL;
		const { status } = await Permissions.askAsync(permissions);
		const { id, updateImage } = this.props;

		if (status === 'granted') {
			let result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				quality: 0.5,
			});

			if (!result.cancelled) {
				this.setState({ image: result.uri });
				updateImage(id, result.uri);
			}
		}
	};

}

const styles = StyleSheet.create({
	contentBackground: {
        position: 'relative',
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
    delBtn: {
        position: 'absolute',
        backgroundColor: '#bdc3c7',
        top: -7,
        right: -7,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 17
    }
});
