import React, { Component } from 'react';
import { Platform } from 'react-native';
import * as axios from 'axios';
import ClubRecordPictures from './presenter';

class Container extends React.Component {
	static navigationOptions = {
		title: '세부기록',
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
			recordName: '',
			recordContent: '',
			picture: null,
			isGetting: false,
			getDatas: '',
		};
	}

	render() {
		return <ClubRecordPictures {...this.state} {...this.props} />;
	}

	componentWillMount = () => {
		this._getDatas();
	};

	_getDatas = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var recordNo = navigation.getParam('recordNo', 'NO-ID');
		const t = this;
		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/Main/GetRecordPictureM.php', {
				recordNo: recordNo,
			})
			.then(function(response) {
				t.setState({ getDatas: response.data });
			});

		this.setState({ isGetting: true });
	};
}

export default Container;
