import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import ClubChars from '../ClubChars';

const ClubView = props => (
	<View style={styles.container}>
		<TouchableOpacity onPress={props.showOverlay.bind(this)}>
			<View style={styles.logo}>
				{props.clubLogo === null || props.clubLogo == '' ? (
					<Image style={styles.Image} source={require('../../images/momo.jpg')} />
				) : (
					<Image style={styles.Image} source={{ uri: props.clubLogo }} />
				)}
			</View>
		</TouchableOpacity>
		<TouchableOpacity onPress={props.showOverlay.bind(this)} style={styles.club}>
			<Text style={styles.clubTitle}>{props.clubName}</Text>
			<Text style={styles.clubChar}>
				{props.clubChar.map((chars, i) => {
					return <ClubChars chars={props.clubChar[i]} key={i} />;
				})}
			</Text>
		</TouchableOpacity>

		<Overlay
			visible={props.modalVisible}
			onClose={props.onClose}
			closeOnTouchOutside
			animationType="zoomIn"
			animationDuration={200}
			childrenWrapperStyle={{ width: '100%', backgroundColor: 'white', borderRadius: 15 }}
			containerStyle={{ backgroundColor: 'rgba(50, 50, 50, 0.78)' }}
		>
			<View style={{ flexDriection: 'column' }}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.logo}>
						{props.clubLogo === null || props.clubLogo == '' ? (
							<Image source={require('../../images/momo.jpg')} style={styles.Image} />
						) : (
							<Image source={{ uri: props.clubLogo }} style={styles.Image} />
						)}
					</View>
					<View style={{ marginBottom: 30, flex: 1 }}>
						<Text style={styles.clubTitle}>{props.clubName}</Text>
						<Text style={styles.clubChar}>
							{props.clubChar.map((chars, i) => {
								return <ClubChars chars={props.clubChar[i]} key={i} />;
							})}
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
					<TouchableOpacity style={styles.button} onPress={props.gotoClubIntroduce}>
						<Image style={styles.ImageR} source={require('../../images/introduce.png')} />
						<Text style={{ textAlign: 'center', fontSize: 15 }}>소개</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={props.gotoRecord}>
						<Image style={styles.ImageR} source={require('../../images/record.png')} />
						<Text style={{ textAlign: 'center', fontSize: 15 }}>기록</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Overlay>
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 70,
		//   backgroundColor:'#FAFABE',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 15,
		paddingLeft: 25,
		alignItems: 'center',
	},
	logo: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: '#fff',
		borderColor: '#6a85a0',
		marginRight: 25,
	},

	Image: {
		height: 50,
		width: 50,
		resizeMode: 'cover',
		backgroundColor: '#fff',
		borderRadius: 25,
		borderColor: '#0064FF',
		borderWidth: 1,
	},
	ImageR: {
		left: -5,
		height: 60,
		width: 60,
		resizeMode: 'contain',
	},
	club: {
		flex: 1,
		//   backgroundColor: '#DCEBFF',
	},
	clubTitle: {
		fontSize: 20,
		fontWeight: '500',
		marginBottom: 8,
	},
	clubChar: {
		fontSize: 14,
		color: '#828282',
	},
	button: {
		top: -40,
		margin: 30,
		height: 70,
		width: 50,
		zIndex: 999,
		// backgroundColor:'red'
	},
});


export default ClubView;
