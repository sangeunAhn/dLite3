import React, { Component } from 'react';
import Login from './presenter';

class Container extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		header: null
	  });

	constructor(props) {
		super(props);
		this.state = { 
            selectBtn: true
         };
	}
	render() {
		return <Login {...this.props} {...this.state} idBtnPress={this._idBtnPress} pwBtnPress={this._pwBtnPress} />;
    }
    
    _idBtnPress = () => {
        this.setState({selectBtn: true})
    }

    _pwBtnPress = () => {
        this.setState({selectBtn: false})
    }

}

export default Container;
