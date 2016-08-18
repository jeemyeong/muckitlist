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

class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
    this.state = {
      actions: bindActionCreators(foodActions, this.props.dispatch),
    }
  }
  renderLoadingView() {
    return (
      <ActivityIndicator
      size="large"
      style={{flex: 1, justifyContent: 'center',}}/>
    );
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
    this.state.actions.getFood();
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    const { route } = props.scene
    if (route.key ===  'home') {
      return <Home _handleNavigate={this._handleNavigate.bind(this)} 
                   data={this.props.data} />
    }
    if (route.key ===  'detailpage') {
      return <DetailPage _handleNavigate={this._handleNavigate.bind(this)}  
                         _goBack={this._handleBackAction.bind(this)}/>
    }
    if (route.key === 'writepost') {
      return <WritePost _goBack={this._handleBackAction.bind(this)}
                        data={this.props.data} />
    }
    if (route.key === 'mylist') {
      return <MyList _handleNavigate={this._handleNavigate.bind(this)}  
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
  render () {
    if (!this.props.loaded) {
      return this.renderLoadingView();
    }
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
