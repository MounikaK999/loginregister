import React, { Component } from 'react';
import Header from './Header';
import {
  Text, View, StyleSheet, Image, TouchableHighlight
} from 'react-native';
export default class Login extends Component{
		static navigationOptions = {
    drawerLabel: 'Login',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../media/hamburger.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
	render(){
		return(
			<View>
				<Header headerText={'Login'} navigation={this.props.navigation}/>
				<Text>Login Screen</Text>
				<TouchableHighlight 
          onPress={()=> this.props.navigation.navigate('DrawerToggle')}>
               <Image style={{width:40, height:40}} 
         source={require('./../media/hamburger.png')}
                  />
      </TouchableHighlight>
			</View>
			);
	}
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});