import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  AsyncStorage,
} from 'react-native';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
			navState: '0'
		};
  }
	render() {
    var $this = this;
    AsyncStorage.getItem('navState',function(err,result){
  //    Alert.alert(result);
      if(!err) {
        $this.setState({
          navState : result == null ? '0' : result
        });
        //result == null ? $this.setState({navState:'0'}) : $this.setState({navState:result});
      }
    });
		return (
			<View style={styles.navContain}>
				<View style={styles.navcon}>
					<Text style={[styles.navconText,styles.active]}>
						申请人照片
					</Text>
					<Image
						source={require('./../../img/navArrowFill.png')}
						style={styles.navconTextAfter}
					/>
				</View>
				<View style={styles.navcon}>
					<Text style={this.state.navState == '1' ? [styles.navconText,styles.active] : [styles.navconText]}>
					个人资料
					</Text>
					<Image
						source={this.state.navState == '1' ? require('./../../img/navArrowFill.png') : require('./../../img/navArrow.png')}
						style={styles.navconTextAfter}
					/>
				</View>
				<View style={styles.navcon}>
					<Text style={this.state.navState == '2' ? [styles.navconText,styles.active] : [styles.navconText]}>
					银行卡信息
					</Text>
					<Image
						source={this.state.navState == '3' ? require('./../../img/navArrowFill.png') : require('./../../img/navArrow.png')}
						style={styles.navconTextAfter}
					/>
				</View>
				<View style={styles.navcon}>
					<Text style={this.state.navState == '3' ? [styles.navconText,styles.active] : [styles.navconText]}>
					提交申请
					</Text>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	navContain: {
		flexDirection: 'row',
    marginTop: 50,
		paddingLeft: 10,
		backgroundColor: '#fff'
	},
	navcon: {
		flex: 1,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	navconText: {
		height: 20,
		paddingLeft: 10,
		paddingRight: 10,
		borderWidth: 1,
		borderRadius: 50,
		borderStyle: 'solid',
		borderColor: '#3db3f9',
		color: '#3db3f9',
		marginRight: 21,
		fontSize: 10,
		lineHeight: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	active: {
		backgroundColor: '#3db3f9',
    	color: '#ffffff'
	},
	navconTextAfter: {
		width: 20,
		height: 10,
		position: 'absolute',
		right: 0,
		top: 20,
		overflow: 'hidden',
		resizeMode: 'stretch',
	},
});

export default Nav;
