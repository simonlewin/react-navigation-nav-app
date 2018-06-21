// import React from 'react';

import { createStackNavigator } from 'react-navigation';

import { StatusBar } from 'react-native';

import StartScreen from './screens/Start';
import ImageScreen from './screens/Image';

StatusBar.setBarStyle('light-content');

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

export default RootNavigator;
