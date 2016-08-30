import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import * as foodActions from '../../actions/foodActions';  

const detailPageRoute = {
  type: 'push',
  route: {
    key: 'detailpage',
    title: 'DetailPage',
    post: {
      id: null,
      img: null,
      tag: null
    }
  }
}

class Card extends Component {
  componentDidMount() {
    console.log(this.props.itemInfo)
    this.props._updateCurrentItem(this.props.itemInfo)
  }
  render() {
    return (
      <View>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => {this.props._updateCurrentItem(this.props.itemInfo);
            this.props._handleNavigate(detailPageRoute)}}>
            <Image style={styles.thumbnail} source={{uri: this.props.itemInfo.img}} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})


const Cards2 = [
  {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]

export default React.createClass({
  getInitialState() {
    console.log(this.props.data);
    console.log("this.props");
    console.log(this.props);
    return {
      cards: this.props.data,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
    console.log(card)
  },
  handleNope (card) {
    console.log("nope")
    console.log(card)
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);
    console.log(this.state.cards[index+1])
    this.props._updateCurrentItem(this.state.cards[index+1])
    this.props._updateCurrentItemView(this.state.cards[index+1])
    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${Cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }

    }

  },
  render() {
    return (
      <View style={styles.mainItem}>
        <SwipeCards
          cards={this.state.cards}
          loop={false}
          renderCard={(cardData) => <Card itemInfo={cardData} 
                                          _handleNavigate={this.props._handleNavigate.bind(this)} 
                                          _updateCurrentItem={this.props._updateCurrentItem.bind(this)}/>}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup={true}
          showNope={true}
          containerStyle={{backgroundColor: 'transparent'}}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved}
        />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  mainItem: {
    height: 340,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'transparent',
    // borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})




