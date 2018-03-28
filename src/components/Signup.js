import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import Header from './Header';

export default class Signup extends Component{
		static navigationOptions = {
    drawerLabel: 'Signup',
  };
	render(){
		return(
			<View>
				<Header headerText={'Signup'}/>
				<Text>Signup Screen</Text>
			</View>
			);
	}
}