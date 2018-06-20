import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class ImageScreen extends Component {
  render() {
    const title = this.props.navigation.getParam('title');

    let uri = 'https://picsum.photos/400/600/?random';
  
    if (title === 'Greyscale Image') {
      uri = 'https://picsum.photos/g/400/600/?random';
    } else if (title === 'Blurred Image') {
      uri = 'https://picsum.photos/400/600/?random&blur';
    }
  
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
  title: navigation.getParam('title')
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
  }
});

export default ImageScreen