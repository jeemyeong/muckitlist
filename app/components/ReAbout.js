import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'


const ReAbout = ({_goBack}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Rebout</Text>
    <TouchableOpacity onPress={_goBack}>
      <Image source={{uri: "https://jeemyeongrails.s3.amazonaws.com/uploads/food/image/1/tokkijung.png"}} 
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
    paddingTop: 60
  }
})

export default ReAbout
