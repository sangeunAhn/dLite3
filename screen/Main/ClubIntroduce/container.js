import React, { Component } from 'react';
import * as axios from 'axios';
import { Platform } from 'react-native';
import ClubIntroduce from './presenter';

class Container extends Component {
	static navigationOptions = {
		title: '동아리 소개',
		style: { elevation: 0, shadowOpacity: 0 },
		headerStyle: {
			height: Platform.OS === 'ios' ? 40 : 5,
			elevation: 0,
			shadowColor: 'transparent',
			borderBottomWidth: 0,
			paddingBottom: 20,
		},
		headerTitleStyle: {
			color: '#2eaeff',
			fontSize: 18,
			textAlign: 'center',
			flex: 1,
			fontWeight: 'bold',
		},
		tintColor: '#2eaeff',
	};

	constructor(props) {
		super(props);
		this.state = {
			clubName: '',
			clubWellcome: '',
			clubPhoneNumber: '',
			clubIntroduce: '',
			clubLogo: null,
			clubMainPicture: null,
			clubChar: [],
			isGetting1: false,
			isGetting2: false,
		};
	}

	render() {
		return <ClubIntroduce {...this.state} {...this.props} />;
	}

	componentWillMount = () => {
		this._getDatas();
		this._getChars();

		const { navigation } = this.props;
		var clubLogo = navigation.getParam('clubLogo', 'NO-ID');
		var clubMainPicture = navigation.getParam('clubMainPicture', 'NO-ID');
		this.setState({
			clubLogo: clubLogo,
			clubMainPicture: clubMainPicture,
		});
	};

	_getDatas = async () => {
		const t = this;
		const { navigation } = this.props;
		var clubName = navigation.getParam('clubName', 'NO-ID');
		var school = navigation.getParam('school', 'NO-ID');

		this.setState({ clubName: clubName });

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/Main/GetClubIntroduce.php', {
				clubName: clubName,
				school: school,
			})
			.then(function(response) {
				t._setDatas(response);
			});

		this.setState({ isGetting1: true });
	};

	_setDatas = response => {
		var str = JSON.stringify(response.data.message.clubWellcome);
		var clubWellcome = str.substring(1, str.length - 1);
		this.setState({
			clubWellcome: clubWellcome,
		});

		var str = JSON.stringify(response.data.message.clubPhoneNumber);
		var clubPhoneNumber = str.substring(1, str.length - 1);
		this.setState({
			clubPhoneNumber: clubPhoneNumber,
		});

		var str = JSON.stringify(response.data.message.clubIntroduce);
		var clubIntroduce = str.substring(1, str.length - 1);
		this.setState({
			clubIntroduce: clubIntroduce,
		});
	};

	//특성 가져오기
	_getChars = async () => {
		const t = this;
		const { navigation } = this.props;
		const { clubChar } = this.state;
		var clubName = navigation.getParam('clubName', 'NO-ID');
		var school = navigation.getParam('school', 'NO-ID');

		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/php/Main/GetClubChars.php', {
				clubName: clubName,
				school: school,
			})
			.then(result => {
				const response = result.data;
				var clubCharArray = new Array();

				response.forEach(row => {
					clubCharArray.push(row.chars);
				});

				this.setState({
					clubChar: clubChar.concat(clubCharArray),
					isGetting2: true,
				});
			});
	};
}

export default Container;
