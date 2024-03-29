import React, { Component } from 'react'
import Home from './Home'
import DetailPage from './DetailPage'
import WritePost from './WritePost'
import MyList from './MyList'
import { push, pop } from '../actions/navActions'
import {bindActionCreators} from 'redux';  
import * as foodActions from '../actions/foodActions';  

import {
  BackAndroid,
  NavigationExperimental,
  ActivityIndicator
} from 'react-native'

const {
  Reducer: NavigationTabsReducer,
  CardStack: NavigationCardStack
} = NavigationExperimental
const detailPageRoute = {
  type: 'push',
  route: {
    key: 'detailpage',
    title: 'DetailPage',

  }
}
class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
    this.state = {
      actions: bindActionCreators(foodActions, this.props.dispatch),
    }
    console.log("this is detailPageRoute start");
    console.log(detailPageRoute);
    console.log("this is detailPageRoute start");
    console.log("action constructor start");
    console.log(this.state.actions);
    console.log("action constructor end");
    console.log("constructor props start");
    console.log(this.props);
    console.log("constructor props end");
  }
  renderLoadingView() {
    return (
      <ActivityIndicator
      size="large"
      style={{flex: 1, justifyContent: 'center',}}/>
    );
  }
  componentWillMount () {
    this.state.actions.getFood();
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    console.log("rendering start")
    console.log("rendering props start")
    console.log(props);
    console.log("rendering props end")
    const { route } = props.scene
    console.log(this.props.currentItem)
    if (route.key ===  'home') {
      return <Home _handleNavigate={this._handleNavigate.bind(this)} 
                   _updateCurrentItem={this._updateCurrentItem.bind(this)} 
                   _updateMainItem={this._updateMainItem.bind(this)} 
                   data={this.props.data}
                   currentItem={this.props.currentItem}/>
    }
    if (route.key ===  'detailpage') {
      return <DetailPage _handleNavigate={this._handleNavigate.bind(this)}  
                         _goBack={this._handleBackAction.bind(this)}
                         currentItem={this.props.currentItem}/>
    }
    if (route.key === 'writepost') {
      return <WritePost _goBack={this._handleBackAction.bind(this)}
                        data={this.props.data} />
    }
    if (route.key === 'mylist') {
      return <MyList _handleNavigate={this._handleNavigate.bind(this)}  
                     _updateCurrentItem={this._updateCurrentItem.bind(this)} 
                     _goBack={this._handleBackAction.bind(this)}
                     data={this.props.data} />
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    pop(this.props.dispatch)
    return true
  }
  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        push(this.props.dispatch, action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }
  _updateCurrentItem (itemInfo) {
    console.log("itemInfo");
    console.log(itemInfo);
    this.state.actions.updateCurrentItem(itemInfo);
  }
  _updateMainItem (itemInfo) {
    console.log("itemInfo");
    console.log(itemInfo);
    this.state.actions.updateMainItem(itemInfo);
  }
  render () {
    console.log("navroot this.props");
    console.log(this.props);
    if (!this.props.loaded) {
      console.log("loading")
      return this.renderLoadingView();
    }
    console.log("this is props after loading")
    console.log(this.props)
    return (
      <NavigationCardStack
        style={{flex: 1}}
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene}
        direction={'horizontal'} />
    )
  }
}

export default NavRoot
