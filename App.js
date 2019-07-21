import React from 'react';
import {View, StatusBar} from 'react-native'
import About from './compenents/About'
import Search from './compenents/Search'
import {TabNavigator} from 'react-navigation'

const Tabs = TabNavigator({
  Search:{screen : Search},
  About:{screen : About}
},{
  tabBarPosition: 'bottom',
  tabBarOption:{
    showIcon: true,
    showLabel: false,
    indicatorStyle:{
      height:2,
      backgroundColor:'#fff'
    },
    style:{


      backgroundColor: "#a2273C",
      borderTopWidth: 1,
      borderColor: "#3f101c"
    }
  },


}
)

export default class App extends React.Component {
  render() {
  return (
    <View style={{flex:1}}>
    <StatusBar hidden={true} />
    <Tabs />
    </View>
  );
}
}

