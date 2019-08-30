import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Dimensions, Text, Platform, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FindId from '../../../components/FindIdPw/FindId'
import FindPw from '../../../components/FindIdPw/FindPw'

const { width, height } = Dimensions.get('window');

const Login = props => (
	<>
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.backButton}
				onPress={() => {
					props.navigation.goBack();
				}}
			>
				<SafeAreaView>
					<Ionicons name="ios-arrow-back" size={width * 0.08} color="black" />
				</SafeAreaView>
			</TouchableOpacity>
			<Text style={styles.title}>ID/PW 찾기</Text>
			<View style={styles.container2}>
				<View style={styles.buttons}>
					<TouchableOpacity style={props.selectBtn ? styles.button1 : styles.button2} onPress={props.idBtnPress}>
						<Text style={styles.buttonText}>ID찾기</Text>
					</TouchableOpacity>
					<TouchableOpacity style={props.selectBtn ? styles.button2 : styles.button1} onPress={props.pwBtnPress}>
						<Text style={styles.buttonText}>PW찾기</Text>
					</TouchableOpacity>
				</View>
			</View>
            <View style={styles.container3}>
                {
                    props.selectBtn 
                    ?
                    <FindId />
                    :
                    <FindPw />
                }
                
            </View>
		</View>
	</>
);

const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		width: width * 0.2,
		height: height * 0.1,
		top: Platform.OS === 'ios' ? 30 : 15,
		left: 10,
		zIndex: 1,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#FAFAFA',
	},
	title: {
		marginTop: Platform.OS === 'ios' ? height * 0.1 : height * 0.07,
		marginLeft: width * 0.05,
		marginBottom: height * 0.02,
		fontSize: width * 0.09,
        fontWeight: '700',
	},
	container2: {
		flex: 1,
		backgroundColor: '#FAFAFA',
        // top: height * 0.15,
        justifyContent:'flex-end'
	},
	buttons: {
		width: '100%',
		height: height * 0.35,
		backgroundColor: '#bdc3c7',
        alignItems: 'center',
        justifyContent: 'space-around',
		flexDirection: 'row',
    },
    button1: {
        backgroundColor: '#3498db',
        width: width*0.35,
        height: width*0.15,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30
    },
    button2: {
        backgroundColor: '#81ecec',
        width: width*0.35,
        height: width*0.15,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    container3: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        top: -height*0.05
    }

});

export default Login;
