import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Image, TouchableHighlight
} from 'react-native';
import Header from './Header';

export default class Signup extends Component{
		static navigationOptions = {
    drawerLabel: 'Signup',
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
				<Header headerText={'Signup'} navigation={this.props.navigation}/>
				<Text>Signup Screen</Text>
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