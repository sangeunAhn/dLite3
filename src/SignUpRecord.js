import React from 'react';
import { StyleSheet, Platform, View, ActivityIndicator } from 'react-native';
import RecordFalse from '../components/RecordFalse';
import RecordTrue from '../components/RecordTrue';
import { Header, Icon } from 'react-native-elements';
import MasonryList from 'react-native-masonry-list';
import * as axios from 'axios';

export default class SignUpRecord extends React.Component {
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

	_getImageRoom = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var userNo = navigation.getParam('userNo', 'NO-ID');
		const t = this;
		var imageRoomArray = new Array();

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/getImageRooms.php', {
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
			.post('http://dkstkdvkf00.cafe24.com/GetImages.php', {
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
			.post('http://dkstkdvkf00.cafe24.com/GetRecordPicture.php', {
				recordPicture: item,
			})
			.then(function(response) {
				var recordNo = response.data.message.recordNo;
				t.props.navigation.navigate('RecordRegister', {
					recordNo: recordNo,
					image: item,
					userNo: userNo,
					to: 'm',
				});
			});
	};

	_btnPress = () => {
		if (this.props.navigation.getParam('from', 'NO-ID') == 'm') {
			this.props.navigation.navigate('Main');
		} else {
			this.props.navigation.navigate('FindClub', {
				schoolName: '울대',
			});
		}
	};

	render() {
		const { navigation } = this.props;
		var name = navigation.getParam('recordName', 'NO-ID');
		var userNo = navigation.getParam('userNo', 'NO-ID');
		const { listRecords, isGetting } = this.state;
		return (
			<>
				{isGetting ? (
					<View style={styles.container}>
						<Icon
							raised
							reverse
							name="plus"
							type="entypo"
							color="#2eaeff"
							containerStyle={{ position: 'absolute', bottom: 100, right: 10, zIndex: 999 }}
							onPress={() =>
								this.props.navigation.navigate('RecordRegister', {
									userNo: userNo,
								})
							}
						/>

						{/* 사진들 들어갈 곳 */}
						<MasonryList
							imageContainerStyle={{ borderRadius: 17, right: 12 }}
							spacing={7}
							images={listRecords}
							onPressImage={(item, index) => {
								this._RecordRegister(item.uri);
							}}
							sorted={true}
						/>

						{/* 완료버튼 */}
						<View style={styles.footer}>
							{this.state.count >= 1 ? <RecordTrue onPress={() => this._btnPress()} /> : <RecordFalse />}
							{/* true면 <RecordTrue /> false면 <RecordFalse /> */}
						</View>
					</View>
				) : (
					<ActivityIndicator size="large" style={styles.activityIndicator} />
				)}
			</>
		);
	}
}

const styles = StyleSheet.create({
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
