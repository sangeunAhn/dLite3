import React, { Component } from 'react';
import { Alert } from 'react-native';
import * as axios from 'axios';
import Login from './presenter';

class Container extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null
	  });

	constructor(props) {
		super(props);
		this.state = { userCode: '' };
	}
	render() {
		return <Login {...this.props} login={this._login} idPwFind={this._idPwFind} signUp={this._signUp} />;
    }
    
    _login = () => {

    }

    _idPwFind = () => {

    }

    _signUp = () => {
        
    }

}

export default Container;
