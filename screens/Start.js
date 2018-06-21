import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../components/Button';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onPressGreyscale = this.onPressGreyscale.bind(this);
    this.onPressBlurred = this.onPressBlurred.bind(this);
  }

  onPress() {
    this.props.navigation.navigate('Image', {
      title: 'Regular Image',
      uri: 'https://picsum.photos/400/600/?random'
    });
  }

  onPressGreyscale() {
    this.props.navigation.navigate('Image', {
      title: 'Greyscale Image',
      uri: 'https://picsum.photos/g/400/600/?random'
    });
  }

  onPressBlurred() {
    this.props.navigation.navigate('Image', {
      title: 'Blurred Image',
      uri: 'https://picsum.photos/400/600/?random&blur'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.onPress} label={'View Image'}/>
        <Button onPress={this.onPressGreyscale} label={'View Greyscale Image'}/>
        <Button onPress={this.onPressBlurred} label={'View Blurred Image'}/>
      </View>
    )
  }
};

StartScreen.navigationOptions = {
  title: 'Start',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',  
  },
})

export default StartScreen;
