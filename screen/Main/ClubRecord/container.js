import React from 'react';
import { Platform } from 'react-native';
import * as axios from 'axios';
import ClubRecord from './presenter';

class Container extends React.Component {
	static navigationOptions = {
		title: '기록',
		style: { elevation: 0, shadowOpacity: 0 },
		headerStyle: {
			height: Platform.OS === 'ios' ? 70 : 10,
			elevation: 0,
			shadowColor: 'transparent',
			borderBottomWidth: 0,
			paddingBottom: 10,
			paddingTop: Platform.OS === 'ios' ? 40 : 5,
		},
		headerTitleStyle: {
			color: '#2eaeff',
			fontSize: Platform.OS === 'ios' ? 25 : 18,
			textAlign: 'center',
			flex: 1,
			fontWeight: 'bold',
		},
		tintColor: '#2eaeff',
	};
	constructor(props) {
		super(props);
		this.state = {
			records: [],
			listRecords: [],
			school: '',
			isGetting: false,
			imageRoom: [],
		};
	}


	render() {
		return (
			<ClubRecord 
                {...this.state}
                {...this.props}
                goToPictures={this._goToPictures}
            />
		);
	}

	componentWillMount = async () => {
		await this._getImageRoom();
		const { imageRoom } = this.state;
		const t = this;

		if (imageRoom.length !== 0) {
			for (const item of imageRoom) {
				await t._getDatas(item);
			}
		} else {
			this.setState({ isGetting: true });
		}
		await this.setState({ listRecords: this.state.records });
		this.setState({ isGetting: true });
	};

	_getImageRoom = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var clubName = navigation.getParam('clubName', 'NO-ID');
		var school = navigation.getParam('school', 'NO-ID');
		const t = this;
		var imageRoomArray = new Array();

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/Main/GetImageRooms2.php', {
				clubName: clubName,
				school: school,
			})
			.then(result => {
				const response = result.data;
				response.forEach(room => {
					imageRoomArray.push(room.imageRoom);
					t.setState({ imageRoom: imageRoomArray });
				});
			});
	};

	// 이미지들 가져오기
	_getDatas = async imageRoom => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var clubName = navigation.getParam('clubName', 'NO-ID');
		var school = navigation.getParam('school', 'NO-ID');
		const t = this;

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/Main/GetImages2.php', {
				clubName: clubName,
				school: school,
				imageRoom: imageRoom,
			})
			.then(async result => {
				const response = result.data;
				var recordArray = new Array();
				await Promise.all(
					response.map(async row => {
						await recordArray.push({ uri: row.recordPicture });
					})
				);
				await t.setState({ records: [...this.state.records, ...recordArray] });
			});
		// console.log(imageRoom)
	};

	_goToPictures = async item => {
		const t = this;
		const clubName = this.props.navigation.getParam('clubName', 'NO-ID');
		const school = this.props.navigation.getParam('school', 'NO-ID');
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/Main/GetRecordPicture.php', {
				recordPicture: item,
			})
			.then(function(response) {
				const recordNo = response.data.message.recordNo;
				t.props.navigation.navigate('RecordPictures', {
					recordNo: recordNo,
					image: item,
					clubName: clubName,
					school: school,
				});
			});
	};

}

export default Container;