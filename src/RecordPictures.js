import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, ActivityIndicator } from 'react-native';
import Picture from '../components/Picture';
import * as axios from 'axios';

export default class RecordPictures extends React.Component {
	static navigationOptions = {
		title: '세부기록',
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
		this.state = {
			recordName: '',
			recordContent: '',
			picture: null,
			isGetting: false,
			getDatas: '',
		};
	}

	componentWillMount = () => {
		this._getDatas();
	};

	_getDatas = async () => {
		//userNo 가지고 오기
		const { navigation } = this.props;
		var recordNo = navigation.getParam('recordNo', 'NO-ID');
		const t = this;
		// 데이터 가져오기
		await axios
			.post('http://dkstkdvkf00.cafe24.com/GetRecordPictureM.php', {
				recordNo: recordNo,
			})
			.then(function(response) {
				t.setState({ getDatas: response.data });
			});

		this.setState({ isGetting: true });
	};

	render() {
		const { isGetting, getDatas } = this.state;
		return (
			<>
				{isGetting ? (
					<ScrollView style={styles.container}>
						{/* 회색부분 */}
						{Object.values(getDatas).map(image => (
							<Picture key={image.createdAt} picture={image.recordPicture} text={image.recordContent} />
						))}
					</ScrollView>
				) : (
					<ActivityIndicator size="large" style={styles.activityIndicator} />
				)}
			</>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: 'white',
	},
	header: {
		width: '100%',
		height: 40,
		backgroundColor: '#3296FF',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
	},
	title: {
		fontSize: 23,
		color: '#fff',
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
	},
});
