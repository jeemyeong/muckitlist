import React, { Component } from 'react';
import { View,
  ActivityIndicator, 
} from 'react-native';  
import {bindActionCreators} from 'redux';  
import * as searchActions from '../actions/searchActions';  
import { connect } from 'react-redux';  

class SearchApp extends Component {  
  constructor(props){
    super(props);
    this.state = {
      actions: bindActionCreators(searchActions, this.props.dispatch),
    }
  }
  componentDidMount() {
    this.state.actions.searchPhotoAction();
  }
  renderLoadingView() {
    return (
      <ActivityIndicator
      size="large"
      style={{flex: 1, justifyContent: 'center',}}/>
    );
  }

  render() {
    if (!this.props.loaded) {
      return this.renderLoadingView();
    }
    return (
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <PhotoList data={this.props.data}/>        
      </View>
    );
  }
}
function mapStateToProps (state) {
  console.log(state)
  return {
    data: state.foodReducer.data,
    status: state.foodReducer.status,
    loaded: state.foodReducer.loaded
  }
}
export default connect(
  mapStateToProps,

)(SearchApp);

