import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const mainReturnButton = () => (
  <View style={styles.returnView}>
    <Image 
      source={require('../../img/navReturn.png')} 
      style={styles.mainReturnButton}
    />
  </View>
)


const styles = StyleSheet.create({
  returnView: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    marginLeft: 30,
    marginTop: 30,
  },
  mainReturnButton: {
    width: 80,
    height: 80,
  },
})

export default mainReturnButton
