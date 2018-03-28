// Import libraries for making a component
import React from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import { DrawerNavigator  } from 'react-navigation';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, imgstyle } = styles;

  return (
    <View style={viewStyle}>
    
      <TouchableHighlight 
          onPress={()=> props.navigation.navigate('DrawerToggle')}>
               <Image style={{width:40, height:40}} 
         source={require('./../media/hamburger.png')}
                  />
      </TouchableHighlight>
      
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  textStyle: {
    flex:1,
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  imgstyle:{
    flex:0.2,
    width:null,
    height:45,
    justifyContent: 'flex-start',
  }
};

export default Header;
