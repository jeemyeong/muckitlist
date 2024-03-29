import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ListView,
} from 'react-native'
import Swiper from 'react-native-swiper'
import ScrollableTabView, {DefaultTabBar, }  from 'react-native-scrollable-tab-view';

const writepost = {
  type: 'push',
  route: {
    key: 'writepost',
    title: 'WritePost'
  }
}

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

const ImageInListView = ({_handleNavigate, _updateCurrentItem, rowData}) => (
  <View style={styles.itemView}>  
    <TouchableOpacity onPress={() => {_updateCurrentItem(rowData);
                                      _handleNavigate(detailPageRoute)}}>
      <Image style={styles.item} 
             source={{uri: rowData.img}}/>
    </TouchableOpacity>
  </View>
)

const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

const MyList = ({_handleNavigate, _updateCurrentItem, _goBack, data}) => (
  <View style={styles.container}>
    <View style={styles.detailNavBar}>
      <TouchableOpacity onPress={() => _goBack()}>
        <Image source={require('./../img/back.png')} 
               style={{width: 40,height: 40}}
               />
      </TouchableOpacity>
      <Text style={styles.title}>My List</Text>
      <TouchableOpacity onPress={() => _handleNavigate(writepost)}>
        <Image source={require('./../img/writeButton.png')} 
               style={{width: 50,height: 50}}
               />
      </TouchableOpacity>
    </View>
    <ScrollableTabView style={{marginTop: 20, }}
                       renderTabBar={() => <DefaultTabBar />}
                       tabBarUnderlineColor='#fc2b31'
                       tabBarActiveTextColor='#fc2b31'
                       tabBarInactiveTextColor='#ccc'>
      <View tabLabel='지역별' style={{flex: 1}}>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={dataSource.cloneWithRows(data)}
          renderRow={(rowData) => <ImageInListView _handleNavigate={_handleNavigate}
                                                   _updateCurrentItem={_updateCurrentItem}
                                                   rowData={rowData}/>}
        />
      </View>
      <View tabLabel='북마크'>
      </View>
    </ScrollableTabView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  detailNavBar: {
    justifyContent: 'space-between',
    paddingTop: 10,
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    color: "#fc2b31",
    fontSize: 35,
  },
  list: {
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  itemView: {
      backgroundColor: 'transparent',
      margin: 10,
      width: 100,
      height: 100,
      borderColor: 'transparent',
      borderWidth: 1,
      borderRadius: 20,
  },
  item: {
      width: 100,
      height: 100,
      borderRadius: 20,
  },
})

export default MyList
