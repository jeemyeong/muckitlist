import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'


const WritePost = ({_goBack}) => (
  <View style={styles.container}>
    <Text style={styles.title}>WritePost</Text>
    <TouchableOpacity onPress={_goBack}>
      <Image source={{uri: "http://www.keybiscaynesoccerclub.com/imgs/Left%20arrow.jpg"}} 
             style={{width: 175,height: 175}}
             />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
    flex: 1,

  }
})

export default WritePost
