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
    <MainItem mainItemImg={data[0].image.image.url} 
              _handleNavigate={_handleNavigate.bind(this)} 
              data={data}
              style={{flex: 1}} />
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
