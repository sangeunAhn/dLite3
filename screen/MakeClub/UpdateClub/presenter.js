import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text, View, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const UpdateClub = props => (
	<>
		<TouchableOpacity
			style={{ position: 'absolute', width: width * 0.2, height: height * 0.1, top: 15, left: 10, zIndex: 1 }}
			onPress={() => props.navigation.goBack()}
		>
			<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
		</TouchableOpacity>

		<Text style={styles.screenTitle}>동아리 수정</Text>

		<View style={styles.container}>
			<TouchableOpacity style={{}} onPress={props.gotoSignUp}>
				<View style={styles.box}>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<View style={{ flexDirection: 'row' }}>
							<View style={styles.logo}>
								<EvilIcons name="user" size={width * 0.12} />
							</View>
							<View style={styles.content}>
								<View style={styles.title}>
									<Text style={{ fontSize: width * 0.07, fontWeight: 'bold' }}>정보 수정</Text>
								</View>
								<View style={styles.sub}>
									<Text style={{ fontSize: width * 0.032, color: '#BBBBBB' }}>우리 동아리는요!</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>

			<View style={{ width: '100%', height: height * 0.05 }} />

			<TouchableOpacity style={{}} onPress={props.gotoChar}>
				<View style={styles.box}>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<View style={{ flexDirection: 'row' }}>
							<View style={styles.logo}>
								<FontAwesome name="hashtag" size={width * 0.1} />
							</View>
							<View style={styles.content}>
								<View style={styles.title}>
									<Text style={{ fontSize: width * 0.07, fontWeight: 'bold' }}>특징 수정</Text>
								</View>
								<View style={styles.sub}>
									<Text style={{ fontSize: width * 0.032, color: '#BBBBBB' }}>
										이렇게 다양한 매력을 가졌답니다 :)
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>

			<View style={{ width: '100%', height: height * 0.05 }} />

			<TouchableOpacity onPress={props.gotoRecord}>
				<View style={styles.box}>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<View style={{ flexDirection: 'row' }}>
							<View style={styles.logo}>
								<AntDesign name="slack" size={width * 0.1} />
							</View>
							<View style={styles.content}>
								<View style={styles.title}>
									<Text style={{ fontSize: width * 0.07, fontWeight: 'bold', color: '#343434' }}>
										기록 수정
									</Text>
								</View>
								<View style={styles.sub}>
									<Text style={{ fontSize: width * 0.032, color: '#BBBBBB' }}>
										이야기 책 속의 여행처럼, 우리 함께 할래요?
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	</>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	screenTitle: {
		marginTop:height*0.07,
		marginLeft: width*0.05,
		fontSize: width * 0.09,
		fontWeight: '700'
	},
	box: {
		width: width * 0.9,
		height: height * 0.1,
		backgroundColor: 'white',
		borderRadius: 5,
		shadowColor: 'rgba(0,0,0, .4)', // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		elevation: 2,
	},
	logo: {
		marginHorizontal: width * 0.03,
		justifyContent: 'center',
	},
	content: {
		flex: 1,
		flexWrap: 'wrap',
	},
	title: {
		justifyContent: 'center',
	},
	sub: {
		marginLeft: width * 0.007,
		justifyContent: 'center',
	},
});

export default UpdateClub;
