import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const mainInfo = ({mainItemTitle, mainItemCategory, mainItemLocation, mainItemRating}) => (
  <View style={styles.mainInfo}>
    <View style={{flex: 1}}>
      <Text style={styles.titleText}>{mainItemTitle}</Text>
      <Text style={styles.subTitleText}>{mainItemCategory} / {mainItemLocation}</Text>
    </View>
    <Text style={styles.rating}>{mainItemRating}</Text>
  </View>
)

const styles = StyleSheet.create({
  mainInfo: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    flexDirection: 'row',
    flex: -1,
  },
  titleText: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
  },
  subTitleText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '100',
  },
  rating: {
    fontSize: 40,
    color: 'black',
    fontWeight: '100',
  },
})

export default mainInfo
