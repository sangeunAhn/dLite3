import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ClubView from '../components/ClubView';
import ClubDiv from '../components/ClubDiv';
import ClubView_dLite from '../components/ClubView_dLite';
import { AntDesign } from '@expo/vector-icons';


export default class FindClub extends React.Component {
  constructor(props){
    super(props);
    this.state={
      schoolName:''
    };
  }


  componentWillMount = () => {
    
    const { navigation } = this.props;
    const schoolName = navigation.getParam('schoolName', 'NO-ID');
    this.setState({schoolName : schoolName})
  };

  render() {
    let { schoolName } = this.state;
    return (
      <View style={styles.container}>
        
        {/* 전체화면 스크롤 */}
        <ScrollView style={styles.scroll}>

          {/* 맨 위 d:Lite */}
          <ClubView_dLite/>
          {/* 대학교 이름과 동아리 종류 볼수있는 아이콘 */}
          <View style={styles.div}>
              <Text style={styles.school}>울산대학교</Text>
              <TouchableOpacity>
                <AntDesign name="bars" size={25} color="#0A6EFF" />
              </TouchableOpacity>
          </View>

          {/* 종류에 따라 동아리 구분 */}
          <ClubDiv
            clubKind={'예술 공연'}
            school={schoolName}
          />
          <ClubDiv
            clubKind={'예술 교양'}
            school={schoolName}
          />
          <ClubDiv
            clubKind={'체육 구기'}
            school={schoolName}
          />
          <ClubDiv
            clubKind={'체육 생활'}
            school={schoolName}
          />
          <ClubDiv
            clubKind={'봉사'}
            school={schoolName}
          />
          <ClubDiv
            clubKind={'국제'}
            school={schoolName}
          />
          <ClubDiv
            clubKind={'종교'}
            school={schoolName}
          />
          <ClubDiv
            clubKind={'학술'}
            school={schoolName}
          />
          <ClubDiv
            clubKind={'기타'}
            school={schoolName}
          />

        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  scroll: {
    flex: 1,
    paddingTop: 10
  },
  div: {
    height:50,
    // backgroundColor:'#dcdcdc',
    paddingLeft:15,
    paddingTop:15,
    paddingRight:15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  school: {
    fontSize: 20
  }
});