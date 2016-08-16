import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import MainNavBar from './main/mainNavBar.js'
import MainItem from './main/mainItem.js'
import MainInfo from './main/mainInfo.js'
import MainReturnButton from './main/mainReturnButton.js'
import Tinder from './main/Tinder.js'
const detailPage = {
  type: 'push',
  route: {
    key: 'detailpage',
    title: 'DetailPage'
  }
}

const Home = ({_handleNavigate, data}) => (
  <View style={styles.container}>
    <MainNavBar />
    <Tinder style={{flex: 1}} />
    <TouchableOpacity onPress={() => _handleNavigate(detailPage)}>
      <MainItem mainItemImg={data[0].image.image.url} style={{flex: 1}} />
    </TouchableOpacity>
    <MainInfo 
      mainItemTitle = {data[0].restaurant}
      mainItemCategory = {data[0].category}
      mainItemLocation = {data[0].loca_simple}
      mainItemRating = "3.8"
    />
    <MainReturnButton />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
})

export default Home
