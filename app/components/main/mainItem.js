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

const detailPageRoute = {
  type: 'push',
  route: {
    key: 'detailpage',
    title: 'DetailPage'
  }
}

let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => this.props._handleNavigate(detailPageRoute)}>
          <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        </TouchableOpacity>
      </View>
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})

const Cards = [
  {name: '1', image: 'https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/1/tokkijung.png'},
  {name: '2', image: 'https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/5/ddeok.PNG'},
  {name: '3', image: 'https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/3/2_sannakji.PNG'},
  {name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
  {name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  {name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
  {name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
  {name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
  {name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
]

const Cards2 = [
  {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

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
          renderCard={(cardData) => <Card {...cardData} _handleNavigate={this.props._handleNavigate.bind(this)}/>}
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
    borderWidth: 1,
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

const mainItem = ({mainItemImg}) => (
  <View style={styles.mainItem}>
    <Image 
      source={{uri: mainItemImg}}
      style={styles.mainItemImage}
    />
  </View>
)


