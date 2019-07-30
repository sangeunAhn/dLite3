import React, { Component } from 'react';
import { Platform } from 'react-native';
import Schools from './presenter';

class Container extends React.Component {
	static navigationOptions = {
		title: '학교선택',
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
	}
	render() {
		return <Schools ulsanUiv={this._ulsanUiv} />;
	}

	_ulsanUiv = () => {
		this.props.navigation.navigate('Main', {
			schoolName: '울산대학교',
		});
	};
}

export default Container;
