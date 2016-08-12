import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const mainItem = ({mainItemImg}) => (
  <View style={styles.mainItem}>
    <Image 
      source={{uri: mainItemImg}}
      style={styles.mainItemImage}
    />
  </View>
)

const styles = StyleSheet.create({
  mainItem: {
    height: 340,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainItemImage: {
    width: 330,
    height: 330,
    borderRadius: 20,
  },
})

export default mainItem
