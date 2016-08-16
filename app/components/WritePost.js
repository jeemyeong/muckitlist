import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'

const WritePost = ({_goBack, data}) => (
    <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
      <ScrollView>
        {
          data.map((item, index) => {
            return (
              <Image
                key={`PhotoItem_${item.id}_${index}`}
                style={styles.image}
                source={{uri: item.image.image.url}}
              />
            );
          })
        }
      </ScrollView>    
    <View style={styles.container}>
      <Text style={styles.title}>WritePost</Text>
      <TouchableOpacity onPress={_goBack}>
        <Image source={{uri: "http://www.keybiscaynesoccerclub.com/imgs/Left%20arrow.jpg"}} 
               style={{width: 175,height: 175}}
               />
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  image: {
    width:400,
    height:400,
    flex: 1
  },
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
