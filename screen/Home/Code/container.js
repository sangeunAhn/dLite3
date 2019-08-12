import React, { Component } from 'react';
import * as axios from 'axios';
import Code from './presenter';

class Container extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({

		header: null
	
	  });

	constructor(props) {
		super(props);
		this.state = { userCode: '' };
	}
	render() {
		return <Code {...this.state} {...this.props} login={this._login} changeText={this._changeText} />;
	}

	// 동아리 생성 되어있을 때
	_goToCodeConfirm = () => {
		const t = this;
		const { userCode } = this.state;

		axios
			.post('http://dkstkdvkf00.cafe24.com/php/Code/GetUserNo.php', {
				userCode: userCode,
			})
			.then(function(response) {
				userNo = JSON.stringify(response.data.message.userNo);
				t.props.navigation.navigate('UpdateClub', {
					userNo: userNo,
				});
			});
	};

	// 동아리 생성 안되어있을 때
	_goToSignUp = () => {
		const t = this;
		const { userCode } = this.state;

		axios
			.post('http://dkstkdvkf00.cafe24.com/php/Code/GetUserNo.php', {
				userCode: userCode,
			})
			.then(function(response) {
				userNo = JSON.stringify(response.data.message.userNo);
				school = JSON.stringify(response.data.message.school);
				setTimeout(() => {
					t.props.navigation.navigate(
						'MakeClub',
						{
							userNo: userNo,
							school: school,
						},
						1000
					);
				});
			});
	};

	// 동아리 생성 여부에 따라 가는 곳 다르게
	_getClub = userCode => {
		const t = this;
		axios
			.post('http://dkstkdvkf00.cafe24.com/php/Code/CodeGetClub.php', {
				userCode: userCode,
			})
			.then(function(response) {
				ms = response.data.message;
				{
					ms === 'true' ? t._goToCodeConfirm() : t._goToSignUp();
				}
			});
	};

	// 코드 있는지 여부
	_getCode = () => {
		const { userCode } = this.state;
		const t = this;
		axios
			.post('http://dkstkdvkf00.cafe24.com/php/Code/CodeLogin.php', {
				userCode: userCode,
			})
			.then(function(response) {
				login = response.data.message;

				if (login === 'true') {
					t._getClub(userCode);
				} else {
					alert('코드가 잘못되었습니다.');
				}
			});
	};

	_login = () => {
		this._getCode();
	};

	_changeText = userCode => {
		this.setState({userCode});
	};
}

export default Container;
