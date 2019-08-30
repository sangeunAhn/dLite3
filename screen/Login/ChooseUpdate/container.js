import React, { Component } from 'react';
import ChooseUpdate from './presenter';

class Container extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null
	  });

	constructor(props) {
		super(props);
		this.state = { userCode: '' };
	}
	render() {
		return <ChooseUpdate {...this.props} login={this._login} idPwFind={this._idPwFind} signUp={this._signUp} />;
    }
    
    _login = () => {

    }

    _idPwFind = () => {

    }

    _signUp = () => {
        
    }

}

export default Container;
