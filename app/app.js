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
  View,
  ScrollView,
  Navigator,
  TouchableOpacity,
  BackAndroid,
} from 'react-native';

//import Nav from './common/nav';
import Info from './pages/info';
import UpImagesB from './pages/upImages';
/*
const Root = () => (
  <Text style={styles.container}>
    Welcome!
  </Text>
);*/  //写法1

/**写法2**/
/*
class Root extends Component {
  render() {
    return (
    <Text style={styles.container}>
      Hi!
    </Text>
    );
  }
}*/

class Root extends Component {
//  BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
/*
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  }
  onBackAndroid = () => {
    const nav = this.props.navigator;
    const routers = nav.getCurrentRoutes();
    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    alert(1);
    return false;
  };
  */
  /**
	 * 使用动态页面加载
	 * @param route 路由
	 * @param navigator 导航器
	 * @returns {XML} 页面
	 */
	renderScene(route, navigator) {
		return <route.component navigator={navigator}  {...route.passProps} />;
	}
	/**
	 * 配置场景动画
	 * @param route 路由
	 * @param routeStack 路由栈
	 * @returns {*} 动画
	 */
	configureScene(route, routeStack) {
		if (route.type == 'Modal') {
			return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
		}
		return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
	}

  _renderNavBar() {
    const styles = {
      title: {
        flex:1,height:50, marginRight:80 ,alignSelf: 'center',alignItems: 'center', justifyContent: 'center',
      },
      button: {
        width: 50,height:50, alignItems: 'center', justifyContent: 'center',
      },
      buttonText: {
        fontSize: 18, color: '#333', fontWeight: '400',hegiht:50,alignItems: 'center',justifyContent: 'center'
      }
    }

    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if(index > 0) {
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>返回</Text>
            </TouchableOpacity>
          );
        } else {
          return null;
        }
      },
      RightButton(route, navigator, index, navState) {
        if(index > 0 && route.rightButton) {
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>12</Text>
            </TouchableOpacity>
          );
        } else {
          return null
        }

      },
      Title(route, navigator, index, navState) {
        return (
          <View style={styles.title}>
            <Text style={styles.buttonText}>{route.title ? route.title : '易分期'}</Text>
          </View>
        );
      }
    };

    return (
      <Navigator.NavigationBar
        style={{
          flexDirection: 'row',
          height:50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderBottomStyle: 'solid',
          borderBottomColor: '#e5e5e5',
          borderBottomWidth: 1,
          shadowOffset:{
              width: 1,
              height: 0.5,
          },
          shadowColor: '#55ACEE',
          shadowOpacity: 0.8,
          }}
        routeMapper={routeMapper}
      />
    );
  }


  render() {
    return (
      /*<ScrollView style={{flex:1,backgroundColor:'#eceff6'}}>
        <Nav />*/
        <Navigator
  				style={{flex:1}}
  				initialRoute={{component:UpImagesB,index:0,name:'uploadImages'}}      //初始化路由
  				renderScene={this.renderScene}              //渲染场景
  				configureScene={this.configureScene}        //配置场景动画
          navigationBar={this._renderNavBar()}        //导航栏配置
  			/>
        /*<UpImagesB />
      </ScrollView>*/
    );
  }
}

const styles = StyleSheet.create({

});

//AppRegistry.registerComponent('itryProject', () => itryProject);
export default Root;
