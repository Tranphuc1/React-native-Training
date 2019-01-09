/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {View,Text,Button} from 'react-native';
import HomeScreenDetail from './src/components/Home';
export default class App extends React.Component{
  render() {
    return <AppContainer/>
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
render() {
  return (
    <View style={{flex: 1, paddingTop:20}}>
    <Text>Home</Text>
    <Button
          title="Go to HomeDetails"
          onPress={() => this.props.navigation.navigate('HomeDetail')}
        />
    </View>
  );
}
}
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  HomeDetail: HomeScreenDetail
});
const AppContainer = createAppContainer(AppNavigator);
