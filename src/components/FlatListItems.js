import React from 'react';
import { View,Text,StyleSheet,Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import UserProfileScreen from './UserProfile';
class FlatListItems extends React.Component{
    render(){
      return (
              <View style={styles.item}>
                  <Button onPress ={()=>this.props.navigator.navigate('UserProfile')}/>
                  <Text>{this.props.item.id}</Text>
                  <Text>{this.props.item.task_code}</Text>
                  <Text>{this.props.item.task_name}</Text>
                  <Text>{this.props.item.description}</Text>
                  <Text>{this.props.item.created_at}</Text>
              </View>
        )
    }
  }
  const styles = StyleSheet.create({
    item:{
      flex:1,
      height:'100%',
      borderBottomColor:'red',
      borderBottomWidth: 2
    }
  })
  const AppNavigator = createStackNavigator({
    FlatItems: FlatListItems,
    UserProfile: UserProfileScreen
  });
  export default createAppContainer (AppNavigator);