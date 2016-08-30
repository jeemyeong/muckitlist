import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  NavigationExperimental,
  ActivityIndicator
} from 'react-native'

import MainItem from './main/mainItem.js'

const myListRoute = {
  type: 'push',
  route: {
    key: 'mylist',
    title: 'MyList'
  }
}
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentItem: this.props.currentItem
    }
  }

  _updateCurrentItemView(itemInfo){
    this.state.currentItem = itemInfo;
    console.log("itemInfo");
    console.log(itemInfo);
    console.log("this.state");
    console.log(this.state);
  }

  render () {
    console.log(this.props.currentItem);
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image source={require('../img/navSearchThumb.png')} style={styles.navSearch}/>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image source={require('../img/navRandomThumb.png')} style={styles.navRandomThumb}/>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props._handleNavigate(myListRoute)}>
              <Image source={require('../img/navMyListThumb.png')} style={styles.navMyList}/>
            </TouchableOpacity>    
          </View>
        </View>
        <MainItem _handleNavigate={this.props._handleNavigate.bind(this)} 
                  _updateCurrentItem={this.props._updateCurrentItem.bind(this)} 
                  _updateCurrentItemView={this._updateCurrentItemView.bind(this)} 
                  data={this.props.data}
                  style={{flex: 1}} />
        <View style={styles.mainInfo}>
          <View style={{flex: 1}}>
            <TextInput value={this.state.currentItem.tag}
                       style={styles.titleText}/>
          </View>
          <Text style={styles.rating}>4.3</Text>
        </View>
        <View style={styles.returnView}>
          <TouchableOpacity onPress={() => _handleNavigate(myListRoute)}>
          <Image 
            source={require('../img/kakaolink_btn_medium/kakaolink_btn_medium.png')} 
            style={styles.mainReturnButton}
          />
          </TouchableOpacity>    
          <Image 
            source={require('../img/navReturn.png')} 
            style={styles.mainReturnButton}
          />
        </View>
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
    height: 50,
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
