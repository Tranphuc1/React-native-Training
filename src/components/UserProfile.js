import React, { Component } from "react";
import {View,Text} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
class UserProfileScreen extends Component {
  render() {
    return (
        <View>
          <Text>UserProfile</Text>
        </View>
    );
  }
}
const AppNavigator = createStackNavigator({
  UserProfile: UserProfileScreen
});
export default createAppContainer (AppNavigator);