import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../components/Button';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.onPressGreyScale = this.onPressGreyScale.bind(this);
    this.onPressBlurred = this.onPressBlurred.bind(this);
  }

  onPress() {
    this.props.navigation.navigate('Image', {
      title: 'Regular Image'
    });
  }

  onPressGreyScale() {
    this.props.navigation.navigate('Image', {
      title: 'Greyscale Image'
    });
  }

  onPressBlurred() {
    this.props.navigation.navigate('Image', {
      title: 'Blurred Image'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.onPress} label={'View Image'}/>
        <Button onPress={this.onPressGreyScale} label={'View Greyscale Image'}/>
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
