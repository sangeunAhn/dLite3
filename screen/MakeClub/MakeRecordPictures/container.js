import React from 'react';
import { AsyncStorage, Platform } from 'react-native';
import * as axios from 'axios';
import uuidv1 from 'uuid/v1';
import MakeRecordPictures from './presenter';

export default class RecordRegister extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
		this.state = {
			images: {},
			disabled: false,
			count: 0,
			text: '',
			plds: [],
			comment: '',
			name: '',
			isSubmitting: false,
			isGetting: false,
			idCount: 0,
		};
	}

	render() {
		return (
			<MakeRecordPictures
				{...this.state}
				{...this.props}
				addImage={this._addImage}
				deleteImage={this._deleteImage}
				updateImage={this._updateImage}
				updateComment={this._updateComment}
				btnPress={this._btnPress}
			/>
		);
	}

	componentWillMount = async () => {
		if (this.props.navigation.getParam('to', 'NO-ID') == 'm') {
			await this._getDatas();
		}
	};

	_addImage = image => {
		const t = this;
		this.setState(prevState => {
			const ID = t.state.idCount.toString();
			const { count, idCount } = this.state;
			const newToDoObject = {
				[ID]: {
					id: ID,
					image: image,
					comment: '',
					createdAt: Date.now(),
				},
			};
			const newState = {
				count: count + 1,
				idCount: idCount + 1,
				images: {
					...prevState.images,
					...newToDoObject,
				},
			};
			return { ...newState };
		});
	};

	_addImageM = (image, comment, createdAt) => {
		const t = this;
		this.setState(prevState => {
			const ID = t.state.idCount.toString();
			const { count, idCount } = this.state;
			const newToDoObject = {
				[ID]: {
					id: ID,
					image: image,
					comment: comment,
					createdAt: createdAt,
				},
			};
			const newState = {
				count: count + 1,
				idCount: idCount + 1,
				images: {
					...prevState.images,
					...newToDoObject,
				},
			};
			return { ...newState };
		});
	};

	_deleteImage = id => {
		this.setState(prevState => {
			const images = prevState.images;
			const count = this.state.count;
			delete images[id];
			const newState = {
				...prevState,
				...images,
				count: count - 1,
			};
			return { ...newState };
		});
	};

	_updateImage = (id, image) => {
		this.setState(prevState => {
			const newState = {
				...prevState,
				images: {
					...prevState.images,
					[id]: { ...prevState.images[id], image: image },
				},
			};
			return { ...newState };
		});
	};

	_updateComment = async (id, comment) => {
		await this.setState(prevState => {
			const newState = {
				...prevState,
				images: {
					...prevState.images,
					[id]: { ...prevState.images[id], comment: comment },
				},
			};
			return { ...newState };
		});
	};

	_getDatas = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var recordNo = navigation.getParam('recordNo', 'NO-ID');
		const t = this;

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/GetRecordPictureM.php', {
				recordNo: recordNo,
			})
			.then(function(response) {
				t._setDatas(response);
			});

		this.setState({ isGetting: true });
	};
	_setDatas = async response => {
		// console.log(response.data)
		const t = this;
		for (item of response.data) {
			await t._addImageM(item.recordPicture, item.recordContent, item.createdAt);
		}
	};

	_btnPress = async () => {
		const { navigation } = this.props;
		console.log('썅');
		this.setState({ isSubmitting: true });
		await this._input1();
		if (navigation.getParam('to', 'NO-ID') == 'm') {
			await this._deletePrevDatas();
		}
		this.props.navigation.navigate('MakeRecord');
	};

	_deletePrevDatas = async () => {
		const { navigation } = this.props;
		const recordNo = navigation.getParam('recordNo', 'NO-ID');
		const t = this;
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/GetPrevRecords.php', {
				recordNo: recordNo,
			})
			.then(async response => {
                await t._deleteDatas(response);
			});
	};

	_deleteDatas = async response => {
		for (const item of response.data) {
			await axios.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/DeletePrevRecords.php', {
				recordPicture: item.recordPicture,
            });
		}
	};

	_input1 = async () => {
		const imageRoom = uuidv1();
		const { images } = this.state;
		const t = this;
		await Promise.all(
			Object.values(images).map(image => t._inputDatas(image.image, image.comment, image.createdAt, imageRoom))
		);
	};

	_inputDatas = async (image, comment, createdAt, imageRoom) => {
		const { navigation } = this.props;
		var userNo = navigation.getParam('userNo', 'NO-ID');

		let formData = new FormData();
		formData.append('image', { uri: image, name: 'image.png', type: 'image/png' });
		formData.append('recordContent', comment);
		formData.append('userNo', userNo);
		formData.append('imageRoom', imageRoom);
		formData.append('createdAt', createdAt);

		// 데이터베이스에 넣기
		await fetch('http://dkstkdvkf00.cafe24.com/php/MakeClub/SetRecord.php', {
			method: 'POST',
			body: formData,
			header: {
				'content-type': 'multipart/form-data',
			},
		});
	};
}