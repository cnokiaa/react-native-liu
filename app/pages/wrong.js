import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
class Wrong extends Component {
  render(){
    return(
      <ScrollView style={{flex:1,marginTop: 50}}>
        <Image source={require("./../../img/ex_wrong1.jpg")} style={{flex: 1,width:maxWidth,resizeMode: 'stretch'}}/>
      </ScrollView>
    );
  }
}

export default Wrong;
