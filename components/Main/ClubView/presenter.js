import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import ClubChars from '../../Char/ClubChars';
import { moderateScale } from '../../Scaling';
import TouchMainPicture from '../TouchMainPicture';

const { width, height } = Dimensions.get('window');

const ClubView = props => (
   <View style={styles.container}>
      <View style={styles.clubViewTop}>
         
            <View elevation={5} style={styles.logo}>
               {props.clubLogo === null || props.clubLogo == '' ? (
                  <View style={styles.Image} backgroundColor={'#ADCDE9'} />
               ) : (
                  <Image style={styles.Image} source={{ uri: props.clubLogo }} />
               )}
            </View>

            <View style={styles.club}>
               <Text style={styles.clubTitle}>{props.clubName}</Text>
               <Text style={styles.clubChar}>
                  {props.clubChar.map((char, i) => {
                     return <ClubChars chars={char} key={i} />;
                  })}
               </Text>
            </View>
         
      </View>

      {props.disabled == true ? (
         <TouchableOpacity onPress={props.press}>
            {props.clubMainPicture === null || props.clubMainPicture === 'ul' || props.clubMainPicture == '' ? (
               <View style={styles.picture} backgroundColor={'#CEE1F2'} />
            ) : (
            <View style={styles.picture}>
               <Image style={styles.picture2} source={{ uri: props.clubMainPicture }} />
               </View>
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
      borderRadius: width * 0.16 * 0.5,
      marginRight: 25,
      shadowColor: '#888888', // IOS
      shadowOffset: { height:0 , width: 0 }, // IOS
      shadowOpacity: 15, // IOS
      shadowRadius: 5, //IOS
      elevation: 10, // Android
   },
   Image: {
      width: width * 0.16,
      height: width * 0.16,
      borderRadius: width * 0.16 * 0.5,
	  
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
      fontWeight: '300',
      color:'#3B3B3B'
      // backgroundColor: 'red',
   },
   clubChar: {
      flex: 1.7,
      textAlignVertical: "center",
      fontSize: moderateScale(10),
      color: '#BBBBBB',
      paddingBottom:5,
      marginBottom: -5,
      lineHeight: 14,
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
      shadowColor: '#B8B8B8', // IOS
      shadowOffset: { height: 5, width: 1 }, // IOS
      shadowOpacity: 7, // IOS
      shadowRadius: 4, //IOS
      elevation: 5, // Android
   
   },
   picture2: {
      zIndex: 0,
      // alignItems:'flex-start',
      // justifyContent:'flex-start',
      borderRadius: 13,
      width: width * 0.9,
      height: height * 0.23,   
   },
});

export default ClubView;