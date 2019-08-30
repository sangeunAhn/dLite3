import React, { Component } from 'react';
import { Alert } from 'react-native';
import Login from './presenter';
import * as axios from 'axios';
import Mailer from 'react-native-mail';

class Container extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null,
	});

	constructor(props) {
		super(props);
		this.state = {
			selectBtn: true,
			idEmail: '',
			pwEmail: '',
			pwId: '',
		};
	}
	render() {
		return (
			<Login
				{...this.props}
				{...this.state}
				idBtnPress={this._idBtnPress}
				pwBtnPress={this._pwBtnPress}
				idConfirmBtn={this._idConfirmBtn}
				pwConfirmBtn={this._pwConfirmBtn}
				idEmailChange={this._idEmailChange}
				pwIdChange={this._pwIdChange}
				pwEmailChange={this._pwEmailChange}
			/>
		);
	}

	_idBtnPress = () => {
		this.setState({ selectBtn: true });
	};

	_pwBtnPress = () => {
		this.setState({ selectBtn: false });
	};

	_idConfirmBtn = () => {
		const { idEmail } = this.state;
		const t = this;
		axios
			.post('http://dkstkdvkf00.cafe24.com/php/FindIdPw/FindId.php', {
				email: idEmail,
			})
			.then(function(response) {
				response = response.data.message;
				// console.log(response)
				if (response === 'null') {
					Alert.alert('등록되지 않은 이메일입니다.');
				} else {
					t._sendIdEmail();
				}
			});
	};

	_pwConfirmBtn = () => {
		const { idEmail, pwId } = this.state;
		const t = this;
		axios
			.post('http://dkstkdvkf00.cafe24.com/php/FindIdPw/FindPw.php', {
				id: pwId,
				email: idEmail,
			})
			.then(function(response) {
				response = response.data.message;
				// console.log(response);
				if (response === 'null') {
					Alert.alert('ID 또는 이메일이 잘못입력되었습니다.');
				} else {
					t._sendPwEmail()
				}
			});
	};

	_idEmailChange = idEmail => {
		this.setState({ idEmail });
	};

	_pwIdChange = pwId => {
		this.setState({ pwId });
	};

	_pwEmailChange = pwEmail => {
		this.setState({ pwEmail });
	};

	_sendIdEmail = () => {
		const { idEmail } = this.state;
		const to = idEmail;
		Mailer.mail({
			recipients: to,
			subject: 'Show how to use',
			body: 'Some body right here',
		}).catch(console.error);
	};
}

export default Container;
