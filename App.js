/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Header from './src/components/Header';
import SideMenu from './src/sidemenu/SideMenu';

const MyApp = DrawerNavigator({
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  }
},{
  contentComponent: SideMenu,
  drawerWidth: 300
});

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}
