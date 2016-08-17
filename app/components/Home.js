import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import MainItem from './main/mainItem.js'

const myListRoute = {
  type: 'push',
  route: {
    key: 'mylist',
    title: 'MyList'
  }
}

const Home = ({_handleNavigate, data}) => (
  <View style={styles.container}>
    <View style={styles.navBar}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={require('../img/navSearchThumb.png')} style={styles.navSearch}/>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={require('../img/navRandomThumb.png')} style={styles.navRandomThumb}/>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => _handleNavigate(myListRoute)}>
          <Image source={require('../img/navMyListThumb.png')} style={styles.navMyList}/>
        </TouchableOpacity>    
      </View>
    </View>
    <MainItem mainItemImg={data[0].image.image.url} 
              _handleNavigate={_handleNavigate.bind(this)} 
              data={data}
              style={{flex: 1}} />
    <View style={styles.mainInfo}>
      <View style={{flex: 1}}>
        <Text style={styles.titleText}>{data[0].restaurant}</Text>
        <Text style={styles.subTitleText}>{data[0].category} / {data[0].loca_simple}</Text>
      </View>
      <Text style={styles.rating}>4.3</Text>
    </View>
    <View style={styles.returnView}>
      <Image 
        source={require('../img/navReturn.png')} 
        style={styles.mainReturnButton}
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  navBar: {
    height: 60,
    backgroundColor: 'transparent',
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
  mainInfo: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    flexDirection: 'row',
    flex: -1,
    backgroundColor: 'transparent',
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
    returnView: {
    height: 100,
    width: 100,
    backgroundColor: 'transparent',
    marginLeft: 30,
    marginTop: 30,
  },
  mainReturnButton: {
    width: 80,
    height: 80,
  },
})

export default Home
