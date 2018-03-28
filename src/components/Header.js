// Import libraries for making a component
import React from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet, Button} from 'react-native';
//import { DrawerNavigator  } from 'react-navigation';

export default class Header extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: 'Header',
  //   drawerIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('./../media/hamburger.png')}
  //       style={[styles.icon, {tintColor: tintColor}]}
  //     />
  //   ),
  // };

  render() {
    return (
      <View>
      <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Go to notifications from header"
      />
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
