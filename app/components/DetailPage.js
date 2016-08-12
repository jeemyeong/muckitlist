import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import Swiper from 'react-native-swiper'

import MainNavBar from './main/mainNavBar.js'
import MainItem from './main/mainItem.js'
import MainInfo from './main/mainInfo.js'
import MainReturnButton from './main/mainReturnButton.js'

const writepost = {
  type: 'push',
  route: {
    key: 'writepost',
    title: 'WritePost'
  }
}

const DetailPage = ({_handleNavigate, _goBack}) => (
  <View style={styles.container}>
    <View style={styles.detailNavBar}>
      <TouchableOpacity onPress={() => _goBack()}>
        <Image source={require('./../img/back.png')} 
               style={{width: 40,height: 40}}
               />
      </TouchableOpacity>
      <Text style={styles.title}>토끼정</Text>
      <TouchableOpacity onPress={() => _handleNavigate(writepost)}>
        <Image source={require('./../img/writeButton.png')} 
               style={{width: 50,height: 50}}
               />
      </TouchableOpacity>
    </View>
    <Swiper style={styles.wrapper} height={240} loop={true} autoplay={true}
        dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        >
      <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
        <Image style={styles.image} source={{uri: 'https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/1/tokkijung.png'}} />
      </View>
      <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
        <Image style={styles.image} source={{uri: 'https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/2/lebrun.PNG'}} />
      </View>
      <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
        <Image style={styles.image} source={{uri: 'https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/3/2_sannakji.PNG'}} />
      </View>
      <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
        <Image style={styles.image} source={{uri: 'https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/4/1_pizza.PNG'}} />
      </View>
    </Swiper>
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
    fontSize: 40,
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
