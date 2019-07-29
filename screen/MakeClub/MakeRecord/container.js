import React from 'react';
import { Platform } from 'react-native';
import * as axios from 'axios';
import MakeRecord from './presenter';

class Container extends React.Component {
	static navigationOptions = {
		title: '기록추가',
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
			count: 0,
			isGetting: false,
			imageRoom: [],
		};

		this.props.navigation.addListener('didFocus', async () => {
			await this.setState({ isGetting: false, records: [] });
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
		});
	}

	render() {
		return (
			<MakeRecord
				{...this.state}
				{...this.props}
				RecordRegister={this._RecordRegister}
                btnPress={this._btnPress}
                iconPress={this._iconPress}
			/>
		);
	}

	_getImageRoom = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var userNo = navigation.getParam('userNo', 'NO-ID');
		const t = this;
		var imageRoomArray = new Array();

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/GetImageRooms.php', {
				userNo: userNo,
			})
			.then(async result => {
				const response = result.data;
				for (room of response) {
					await imageRoomArray.push(room.imageRoom);
					await t.setState({ count: this.state.count + 1, imageRoom: imageRoomArray });
				}
			});
	};

	// 이미지들 가져오기
	_getDatas = async imageRoom => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var userNo = navigation.getParam('userNo', 'NO-ID');
		const t = this;

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/GetImages.php', {
				userNo: userNo,
				imageRoom: imageRoom,
			})
			.then(async result => {
				const response = result.data;
				var recordArray = new Array();
				await Promise.all(
					response.map(async row => {
						await recordArray.push({ uri: row.recordPicture });
						await t.setState({ count: this.state.count + 1 });
					})
				);
				await t.setState({ records: [...this.state.records, ...recordArray] });
			});
	};

	_RecordRegister = async item => {
		var t = this;
        var userNo = this.props.navigation.getParam('userNo', 'NO-ID');
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/MakeClub/GetRecordPicture.php', {
				recordPicture: item,
			})
			.then(function(response) {
				var recordNo = response.data.message.recordNo;
				t.props.navigation.navigate('MakeRecordPictures', {
					recordNo: recordNo,
					image: item,
					userNo: userNo,
					to: 'm',
				});
			});
	};

	_btnPress = () => {
		if (this.props.navigation.getParam('from', 'NO-ID') == 'm') {
			this.props.navigation.navigate('Home');
		} else {
			this.props.navigation.navigate('Main', {
				schoolName: '울대',
			});
		}
    };
    
    _iconPress = () => {
        this.props.navigation.navigate('MakeRecordPictures', {
            userNo: this.props.navigation.getParam('userNo', 'NO-ID')
        })
    }
}

export default Container;