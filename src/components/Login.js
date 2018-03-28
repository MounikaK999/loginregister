import React, { Component } from 'react';
import Header from './Header';
import {
  Text, View, StyleSheet, ScrollView, TextInput, Button
} from 'react-native';
import axios from 'axios';

export default class Login extends Component{

	static navigationOptions = {
    drawerLabel: 'Login',
  };

  constructor (props){
  	super(props);
		this.state ={
			loginInfo :{
				username:'',
				password:''
			}
		}
	this.onSubmit = this.onSubmit.bind(this);
    }




	render(){
		return(
			<View >
				<Header headerText={'Login'}/>
				<Text>Login Screen</Text>
				<ScrollView style={{padding: 20}}>
	                <Text 
	                    style={{fontSize: 27}}>
	                    Login
	                </Text>
	                <TextInput placeholder='Username' onChangeText = {(text) => this.setState({loginInfo :{username : text}}) }/>
	                <TextInput placeholder='Password' onChangeText = {(text) => this.setState({loginInfo :{password : text}}) }/>
	                <Button 
	                       onPress={this.onSubmit}
	                        title="Submit"
	                    />
             	</ScrollView>
            </View>


			);
	}
}

const Styles = {
// iconblock:{

// }
// textBlock:{

// }
};