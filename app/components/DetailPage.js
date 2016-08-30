import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import Swiper from 'react-native-swiper'

import MainItem from './main/mainItem.js'

const writepost = {
  type: 'push',
  route: {
    key: 'writepost',
    title: 'WritePost'
  }
}

const DetailPage = ({_handleNavigate, _goBack, post}) => (
  <View style={styles.container}>
    <View style={styles.detailNavBar}>
      <TouchableOpacity onPress={() => _goBack()}>
        <Image source={require('./../img/back.png')} 
               style={{width: 40,height: 40}}
               />
      </TouchableOpacity>
      <Text style={styles.title}>DetailPage</Text>
      <TouchableOpacity onPress={() => _handleNavigate(writepost)}>
        <Image source={require('./../img/writeButton.png')} 
               style={{width: 50,height: 50}}
               />
      </TouchableOpacity>
    </View>
    <Swiper style={styles.wrapper} height={240} loop={true} autoplay={true}
        dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        >
      <View style={styles.slide} >
        <Image style={styles.image} source={{uri: post.img}} />
      </View>
      <View style={styles.slide} >
        <Image style={styles.image} source={{uri: 'https://www.interbus.nu/lcms2/RESIZE/w270-h160-c270x160/img/no-img.jpg'}} />
      </View>
      <View style={styles.slide} >
        <Image style={styles.image} source={{uri: 'https://www.interbus.nu/lcms2/RESIZE/w270-h160-c270x160/img/no-img.jpg'}} />
      </View>
      <View style={styles.slide} >
        <Image style={styles.image} source={{uri: 'https://www.interbus.nu/lcms2/RESIZE/w270-h160-c270x160/img/no-img.jpg'}} />
      </View>
    </Swiper>
    <Text>{post.tag}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  detailNavBar: {
    justifyContent: 'space-between',
    paddingTop: 10,
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    color: "#fc2b31",
    fontSize: 35,
  },
    wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    flex: 1,
  }
})

export default DetailPage
