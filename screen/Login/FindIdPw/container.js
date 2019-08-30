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

				if (response === 'true') {
					console.log('있다')
				} else {
					Alert.alert('등록되지 않은 이메일입니다.')
				}
			});
  };

	_pwConfirmBtn = () => {
		
	};

	_idEmailChange = idEmail => {
		this.setState({ idEmail });
	};

	_sendIdEmail = () => {};
}

export default Container;
