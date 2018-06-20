// import React from 'react';

import { createStackNavigator } from 'react-navigation';

import { StatusBar } from 'react-native';

import StartScreen from './screens/StartScreen';
import ImageScreen from './screens/ImageScreen';

const RootNavigator = createStackNavigator({
  Home: StartScreen,
  Image: ImageScreen,
},{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#388E3C'
    },
    headerTintColor: '#FFF'
  }
});

StatusBar.setBarStyle('light-content');

export default RootNavigator;
