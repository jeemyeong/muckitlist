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

const route = {
  type: 'push',
  route: {
    key: 'detailpage',
    title: 'DetailPage'
  }
}

const Home = ({_handleNavigate}) => (
  <View style={styles.container}>
    <MainNavBar />
    <TouchableOpacity onPress={() => _handleNavigate(route)}>
      <MainItem mainItemImg="https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/1/tokkijung.png"/>
    </TouchableOpacity>
    <MainInfo 
      mainItemTitle = {"토끼정"}
      mainItemCategory = {"일식"}
      mainItemLocation = {"강남"}
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
