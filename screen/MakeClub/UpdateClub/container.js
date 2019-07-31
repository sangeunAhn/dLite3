import React, { Component } from 'react';
import { Platform } from 'react-native';
import UpdateClub from './presenter';

export default class ClubModify extends React.Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<UpdateClub
				{...this.props}
				gotoSignUp={this._gotoSignUp}
				gotoChar={this._gotoChar}
				gotoRecord={this._gotoRecord}
			/>
		);
	}

	_gotoSignUp = () => {
		const { navigation } = this.props;
		var userNo = navigation.getParam('userNo', 'NO-ID');
		userNo = userNo.replace(/[^0-9]/g, '');

		this.props.navigation.navigate('MakeClub', {
			userNo: userNo,
			from: 'm',
		});
	};

	_gotoChar = () => {
		const { navigation } = this.props;
		var userNo = navigation.getParam('userNo', 'NO-ID');
		userNo = userNo.replace(/[^0-9]/g, '');

		this.props.navigation.navigate('MakeChars', {
			userNo: userNo,
			from: 'm',
		});
	};

	_gotoRecord = () => {
		const { navigation } = this.props;
		var userNo = navigation.getParam('userNo', 'NO-ID');
		userNo = userNo.replace(/[^0-9]/g, '');

		this.props.navigation.navigate('MakeRecord', {
			userNo: userNo,
			from: 'm',
		});
	};
}
