/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {FlatList,StyleSheet, View,Text,Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import UserProfileScreen from './UserProfile';
  class FlatListItems extends React.Component{
    render(){
      return (
              <View style={styles.item}>
              <Button
                    title="Go to UserProfile"
                    onPress={() =>this.props.navigation.navigate('UserProfile')}
                  />
                  <Text>{this.props.item.id}</Text>
                  <Text>{this.props.item.task_code}</Text>
                  <Text>{this.props.item.task_name}</Text>
                  <Text>{this.props.item.description}</Text>
                  <Text>{this.props.item.created_at}</Text>
              </View>
        )
    }
  }
class HomeScreenDetail extends React.Component {
    static navigationOptions = {
    title: 'HomeScreenDetail',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props){
    super(props);
    this.state={
      data: [],
      page:1,
      refreshing: false
    }
  }
  componentWillMount(){
    this.loadMoreData();
  }
  loadMoreData=()=>{
  const {page} = this.state;
    return fetch(`https://smap-moma-staging.herokuapp.com/api/tasks/getTaskNotCompleted?page=${page}&limit=20&task_name=&from_date=2018/12/1&to_date=2018/12/30&task_type=0&task_status=0`)
    .then ((response)=> response.json())
    .then((responseJson)=>{
        this.setState({
          data:[...this.state.data,...responseJson.data],
          refreshing:false
        });        
    })
    .catch((error)=>{
      console.log(error)
      this.setState({
        refreshing:false
      })
    })
  }
  handleLoadMore =() =>{
    this.setState({
      page:this.state.page + 1
    },
    ()=>{
      this.loadMoreData()
    }
    );
  }
  _onRefresh = () => {
    this.setState({
      refreshing: true,
      page:1,
      data:[]
    },
      ()=>{
        this.loadMoreData()
      }
      );
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
        data={this.state.data}
        renderItem={({item,index}) => 
          // {
          //   return (<FlatListItems item={item} index={index}>
          //   </FlatListItems>
          //     );
          // }
          <Text>{item.task_code},{item.task_name},{item.description}</Text>
        }
        keyExtractor={(item) => item.id}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item:{
    flex:1,
    height:'100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 2
  }
})
const AppNavigator = createStackNavigator({
  HomeDetail: HomeScreenDetail,
  Flat: FlatListItems,
  UserProfile: UserProfileScreen
});
export default createAppContainer (AppNavigator);