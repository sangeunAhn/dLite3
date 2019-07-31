import React, { Component } from 'react';
import Schools from './presenter';

class Container extends React.Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
	}
	render() {
		return <Schools {...this.props} ulsanUiv={this._ulsanUiv} />;
	}

	_ulsanUiv = () => {
		this.props.navigation.navigate('Main', {
			schoolName: '울산대학교',
		});
	};
}

export default Container;
