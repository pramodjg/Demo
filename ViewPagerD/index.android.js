/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

var ViewPagerAndroidExample = require('./ViewPagerAndroidExample');

class ViewPagerD extends Component {
  render() {
    return (
          <Navigator
              initialRoute={{id: 'ViewPagerAndroidExample', name: 'Index'}}
              renderScene={this.renderScene.bind(this)}
              configureScene={(route) => {
                if (route.sceneConfig) {
                  return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
              }} />
        );
  }

renderScene(route, navigator) {
   var routeId = route.id;
   if (routeId === 'ViewPagerAndroidExample') {
     return (
       <ViewPagerAndroidExample
         navigator={navigator} />
     );
   }

   // if (routeId === 'MainPage') {
   //   return (
   //     <MainPage
   //         navigator={navigator} />
   //   );
   // }
   // if (routeId === 'PersonPage') {
   //   return (
   //     <PersonPage
   //       navigator={navigator} />
   //   );
   // }
   // if (routeId === 'NoNavigatorPage') {
   //   return (
   //     <NoNavigatorPage
   //         navigator={navigator} />
   //   );
   // }
   return this.noRoute(navigator);

 }
 noRoute(navigator) {
   return (
     <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
       <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
           onPress={() => navigator.pop()}>
         <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
       </TouchableOpacity>
     </View>
   );
 }
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ViewPagerD', () => ViewPagerD);
