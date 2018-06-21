import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

class ImageScreen extends Component {

  render() {
    const uri = this.props.navigation.getParam('uri');
  
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={{uri: uri}}
        />
      </View>
    )
  }
}

ImageScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('title'),
  headerRight: (
    <TouchableOpacity 
      style={styles.btn}
      onPress={() => WebBrowser.openBrowserAsync(navigation.getParam('uri'))}  
      >
      <MaterialIcons name="open-in-new" size={32} color="white" />
    </TouchableOpacity>
  ),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    marginVertical: 10,
    width: 200,
    height: 300,
  },
  btn: {
    margin: 5,
  }
});

export default ImageScreen;
