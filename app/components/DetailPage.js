import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'

import MainNavBar from './main/mainNavBar.js'
import MainItem from './main/mainItem.js'
import MainInfo from './main/mainInfo.js'
import MainReturnButton from './main/mainReturnButton.js'
const reabout = {
  type: 'push',
  route: {
    key: 'reabout',
    title: 'ReAbout'
  }
}

const DetailPage = ({_handleNavigate, _goBack}) => (
  <View style={styles.container}>
    <MainNavBar />
    <TouchableOpacity onPress={() => _handleNavigate(reabout)}>
      <Image source={{uri: "https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/1/tokkijung.png"}} 
             style={{width: 175,height: 175}}
             />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => _goBack(reabout)}>
      <Image source={{uri: "https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/1/tokkijung.png"}} 
             style={{width: 175,height: 175}}
             />
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

export default DetailPage
