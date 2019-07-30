import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import { Container, Content, Card, CardItem, Left, Body } from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';

const { width, height } = Dimensions.get('window');

export default class Picture extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<Container style={{ padding: 10 }}>
					<Content>
						<Card>
							<CardItem>
								<Left>
									<Body>
										<Text> </Text>
									</Body>
								</Left>
							</CardItem>
							<CardItem cardBody>
								<AutoHeightImage
									width={width - 80}
									style={{ flex: 1 }}
									source={{ uri: this.props.picture }}
								/>
							</CardItem>
							<CardItem>
								<Body style={{ paddingVertical: 10 }}>
									<Text style={{ fontSize: 25 }}>{this.props.text}</Text>
								</Body>
							</CardItem>
						</Card>
					</Content>
				</Container>
			</>
		);
	}
}
