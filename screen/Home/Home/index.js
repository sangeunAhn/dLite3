import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView,TouchableOpacity, Dimensions, Alert} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../../components/Snap/SliderEntry.style';
import SliderEntry from '../../../components/Snap/SliderEntry';
import styles, { colors } from '../../../components/Snap/index.style';
import { ENTRIES1, ENTRIES2 } from '../../../components/Snap/entries';
import MainButton from '../../../components/Button/MainButton';

const { width, height } = Dimensions.get('window');

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

export default class example extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: SLIDER_1_FIRST_ITEM
		};
	}

	_renderItem({ item, index }) {
		return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
	}

	_renderItemWithParallax({ item, index }, parallaxProps) {
		return (
			<SliderEntry
				data={item}
				even={(index + 1) % 2 === 0}
				parallax={true}
				parallaxProps={parallaxProps}
			/>
		);
	}


	mainExample(number, title) {
		const { slider1ActiveSlide } = this.state;

		return (
			<View style={styles.exampleContainer}>

				<Carousel
					ref={c => this._slider1Ref = c}
					data={ENTRIES1}
					renderItem={this._renderItemWithParallax}
					sliderWidth={sliderWidth}
					itemWidth={itemWidth}
					hasParallaxImages={true}
					firstItem={SLIDER_1_FIRST_ITEM}
					inactiveSlideScale={0.80}
					inactiveSlideOpacity={0.7}
					// inactiveSlideShift={20}
					containerCustomStyle={styles.slider}
					contentContainerCustomStyle={styles.sliderContentContainer}
					loop={true}
					loopClonesPerSide={2}
					autoplay={true}
					autoplayDelay={3000}
					autoplayInterval={10000}
					onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
				/>

			</View>
		);
	}

	render() {
		const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
		return (

			<View style={styles.container}>
				<View style={{marginTop:Platform.OS === 'ios' ? 30 : 15 , width:width, height:height*0.1, justifyContent:'flex-end',alignItems:'center'}}>
					<Text style={{color:'#3B3B3B',fontSize:width*0.08,letterSpacing:0.05, fontWeight:'900'}}>내 손 안의 동아리 '동방'</Text>
				</View>
				{this.gradient}
				<ScrollView
					style={styles.scrollview}
					scrollEventThrottle={200}
					directionalLockEnabled={true}
				>
					{example1}

				</ScrollView>
				<View style={{flex:1,justifyContent:'flex-start', alignItems:'center'}}>
				<MainButton
                // buttonColor={'#D7E8F7'}
                title={'들어가기'}
                titleColor={'#3B3B3B'}
                onPress={() => this.props.navigation.navigate('Schools')}/>
				<TouchableOpacity style={{marginTop:height*0.01, padding:10}}onPress={() => this.props.navigation.navigate('Code')}>
					<Text style={{fontSize:width*0.038, color:'#3B3B3B' }}> 동아리 생성 / 수정 </Text>
				</TouchableOpacity>
				
				</View>
				<View style={{alignItems:'flex-start', height: height*0.07}}>
					<TouchableOpacity style={{ padding:10}} onPress={() => Alert.alert('', '[문의사항] \n \n leejjun28@gmail.com \n 010 4372 0440 \n \n 문의 가능 시간 : 09:00 ~ 18:00 ')}>
						<Text style={{color:'#888888'}}>문의하기</Text>
					</TouchableOpacity>
				</View>
				
			</View>

		);
	}
}