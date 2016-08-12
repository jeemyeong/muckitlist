import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const mainNavBar = () => (
  <View style={styles.navBar}>
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={require('../../img/navSearchThumb.png')} style={styles.navSearch}/>
    </View>
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={require('../../img/navRandomThumb.png')} style={styles.navRandomThumb}/>
    </View>
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={require('../../img/navMyListThumb.png')} style={styles.navMyList}/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    flexDirection: 'row',
    marginTop: 10,

  },
  navSearch: {
    width: 44,
    height: 44,
  },
  navRandomThumb: {
    width: 175,
    height: 44,
  },
  navMyList: {
    width: 44,
    height: 44,
  },
});

export default mainNavBar
