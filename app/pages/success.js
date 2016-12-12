import React,{Component} from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import Nav from './../common/nav';
class Success extends Component {
  render(){
    return (
      <View>
        <Nav />
        <Text>没搞头了</Text>
      </View>
    );
  }
}

export default Success;
