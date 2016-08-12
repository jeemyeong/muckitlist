import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import MainNavBar from './mainNavBar.js'
import MainItem from './mainItem.js'
import MainInfo from './mainInfo.js'
import MainReturnButton from './mainReturnButton.js'

export default class mainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: this.props.mainFoodsData,
    };
  }
  render() {
    return(
      <View style={styles.container}>
        <MainNavBar />
        <MainItem mainItemImg={this.state.foods[1].image.image.url}/>
        <MainInfo 
          mainItemTitle = {this.state.foods[1].restaurant}
          mainItemCategory = {this.state.foods[1].category}
          mainItemLocation = {this.state.foods[1].loca_simple}
          mainItemRating = "3.8"
        />
        <MainReturnButton />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
});
