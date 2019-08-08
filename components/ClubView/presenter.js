import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import ClubChars from '../ClubChars';
import { moderateScale } from '../Scaling';
import TouchMainPicture from '../TouchMainPicture';

const { width, height } = Dimensions.get('window');

const ClubView = props => (
	<View style={styles.container}>
		<View style={styles.clubViewTop}>
			
				<View style={styles.logo}>
					{props.clubLogo === null || props.clubLogo == '' ? (
						<View style={styles.Image} backgroundColor={'#ADCDE9'} />
					) : (
						<Image style={styles.Image} source={{ uri: props.clubLogo }} />
					)}
				</View>

				<View style={styles.club}>
					<Text style={styles.clubTitle}>{props.clubName}</Text>
					<Text style={styles.clubChar}>
						{props.clubChar.map((chars, i) => {
							return <ClubChars chars={props.clubChar[i]} key={i} />;
						})}
					</Text>
				</View>
			
		</View>

		{props.disabled == true ? (
			<TouchableOpacity onPress={props.press}>
				{props.clubMainPicture === null || props.clubMainPicture === 'ul' || props.clubMainPicture == '' ? (
					<View style={styles.picture} backgroundColor={'#CEE1F2'} />
				) : (
					<Image style={styles.picture} source={{ uri: props.clubMainPicture }} />
				)}
			</TouchableOpacity>
		) : (
			<TouchableOpacity onPress={props.press}>
				{props.clubMainPicture === null || props.clubMainPicture === 'ul' || props.clubMainPicture == '' ? (
					<>
						{props.clubLogo === null || props.clubLogo === 'ul' || props.clubLogo == '' ? (
							<TouchMainPicture
								gotoClubIntroduce={props.gotoClubIntroduce}
								gotoRecord={props.gotoRecord}
								clubMainPicture={null}
								clubLogo={null}
							/>
						) : (
							<TouchMainPicture
								gotoClubIntroduce={props.gotoClubIntroduce}
								gotoRecord={props.gotoRecord}
								clubMainPicture={null}
								clubLogo={props.clubLogo}
							/>
						)}
					</>
				) : (
					<>
						{props.clubLogo === null || props.clubLogo === 'ul' || props.clubLogo == '' ? (
							<TouchMainPicture
								gotoClubIntroduce={props.gotoClubIntroduce}
								gotoRecord={props.gotoRecord}
								clubMainPicture={props.clubMainPicture}
								clubLogo={null}
							/>
						) : (
							<TouchMainPicture
								gotoClubIntroduce={props.gotoClubIntroduce}
								gotoRecord={props.gotoRecord}
								clubMainPicture={props.clubMainPicture}
								clubLogo={props.clubLogo}
							/>
						)}
					</>
				)}
			</TouchableOpacity>
		)}
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: height * 0.35,
		// backgroundColor:'#FAFABE',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		paddingHorizontal: width * 0.05,
		alignItems: 'center',
		marginBottom: height * 0.04,
	},
	clubViewTop : { 
		flex: 1, 
		flexDirection: 'row', 
		alignItems: 'center' 
	},
	logo: {
		width: width * 0.16,
		height: width * 0.16,
		overflow: 'hidden',
		shadowColor: 'gray', // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 5, //IOS
		elevation: 5, // Android
		borderRadius: width * 0.16 * 0.5,
		borderWidth: 3,
		borderColor: 'white',
		marginRight: 25,
	},
	logo2: {
		margin: width * 0.05,
		width: width * 0.1,
		height: width * 0.1,
		overflow: 'hidden',
		borderRadius: width * 0.1 * 0.5,
		borderWidth: 2,
		borderColor: 'white',
		shadowColor: 'gray', // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 5, //IOS
		elevation: 5, // Android
	},

	Image: {
		width: width * 0.15,
		height: width * 0.15,

		backgroundColor: '#fff',
		borderRadius: width * 0.15 * 0.5,
	},
	club: {
		flex: 1,
		textAlignVertical: 'center',
		flexWrap: 'wrap',
		// backgroundColor: '#DCEBFF',
	},
	clubTitle: {
		flex: 1,
		marginTop: 3,
		textAlignVertical: 'center',
		fontSize: moderateScale(20),
		fontWeight: '100',
		color:'#3B3B3B'
		// backgroundColor: 'red',
	},
	clubChar: {
		flex: 1.5,
		textAlignVertical: "center",
		fontSize: moderateScale(10),
		color: '#BBBBBB',
		paddingBottom:5,
		marginBottom: -5,
		lineHeight: 12,
		// backgroundColor: 'green',
	  },
	button: {
		top: -40,
		margin: 30,
		height: 70,
		width: 50,
		zIndex: 999,
	},
	picture: {
		zIndex: 0,
		// alignItems:'flex-start',
		// justifyContent:'flex-start',
		marginTop: 10,
		borderRadius: 13,

		width: width * 0.9,
		height: height * 0.23,
	},
});

export default ClubView;
