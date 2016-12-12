import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  AsyncStorage,
  StyleSheet,
  Alert,
  TextInput,
  TouchableHighlight,
  Modal,
  Dimensions
} from 'react-native';

import Nav from './../common/nav';
import Success from './../pages/success';
const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const name1 = '',name2 = '', name3 = '';
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shen: {"status":"success","errcode":"0000","errmsg":"成功","data":{"provinces":[{"provincecn":"黑龙江省","provinceid":"230000"},{"provincecn":"湖南省","provinceid":"430000"},{"provincecn":"四川省","provinceid":"510000"},{"provincecn":"辽宁省","provinceid":"210000"},{"provincecn":"安徽省","provinceid":"340000"},{"provincecn":"福建省","provinceid":"350000"},{"provincecn":"天津市","provinceid":"120000"},{"provincecn":"宁夏回族自治区","provinceid":"640000"},{"provincecn":"重庆市","provinceid":"500000"},{"provincecn":"河南省","provinceid":"410000"},{"provincecn":"江西省","provinceid":"360000"},{"provincecn":"吉林省","provinceid":"220000"},{"provincecn":"内蒙古自治区","provinceid":"150000"},{"provincecn":"江苏省","provinceid":"320000"},{"provincecn":"山西省","provinceid":"140000"},{"provincecn":"云南省","provinceid":"530000"},{"provincecn":"海南省","provinceid":"460000"},{"provincecn":"西藏自治区","provinceid":"540000"},{"provincecn":"上海市","provinceid":"310000"},{"provincecn":"青海省","provinceid":"630000"},{"provincecn":"广西壮族自治区","provinceid":"450000"},{"provincecn":"湖北省","provinceid":"420000"},{"provincecn":"新疆维吾尔自治区","provinceid":"650000"},{"provincecn":"北京市","provinceid":"110000"},{"provincecn":"广东省","provinceid":"440000"},{"provincecn":"浙江省","provinceid":"330000"},{"provincecn":"陕西省","provinceid":"610000"},{"provincecn":"河北省","provinceid":"130000"},{"provincecn":"甘肃省","provinceid":"620000"},{"provincecn":"贵州省","provinceid":"520000"},{"provincecn":"山东省","provinceid":"370000"}]}},
    	qu: {"status":"success","errcode":"0000","errmsg":"成功","data":{"areas":[{"areacn":"长安区","areaid":"130102"},{"areacn":"桥东区","areaid":"130103"},{"areacn":"桥西区","areaid":"130104"},{"areacn":"新华区","areaid":"130105"},{"areacn":"井陉矿区","areaid":"130107"},{"areacn":"裕华区","areaid":"130108"},{"areacn":"井陉县","areaid":"130121"},{"areacn":"正定县","areaid":"130123"},{"areacn":"栾城县","areaid":"130124"},{"areacn":"行唐县","areaid":"130125"},{"areacn":"灵寿县","areaid":"130126"},{"areacn":"高邑县","areaid":"130127"},{"areacn":"深泽县","areaid":"130128"},{"areacn":"赞皇县","areaid":"130129"},{"areacn":"无极县","areaid":"130130"},{"areacn":"平山县","areaid":"130131"},{"areacn":"元氏县","areaid":"130132"},{"areacn":"赵　县","areaid":"130133"},{"areacn":"辛集市","areaid":"130181"},{"areacn":"藁城市","areaid":"130182"},{"areacn":"晋州市","areaid":"130183"},{"areacn":"新乐市","areaid":"130184"},{"areacn":"鹿泉市","areaid":"130185"}]}},
    	shi: {"status":"success","errcode":"0000","errmsg":"成功","data":{"citys":[{"citycn":"秦皇岛市","cityid":"130300"},{"citycn":"张家口市","cityid":"130700"},{"citycn":"承德市","cityid":"130800"},{"citycn":"邢台市","cityid":"130500"},{"citycn":"廊坊市","cityid":"131000"},{"citycn":"保定市","cityid":"130600"},{"citycn":"石家庄市","cityid":"130100"},{"citycn":"邯郸市","cityid":"130400"},{"citycn":"沧州市","cityid":"130900"},{"citycn":"唐山市","cityid":"130200"},{"citycn":"衡水市","cityid":"131100"}]}},
      svData: [],
      svIndex: 0,
      svType: false,
      svSelectName: null,
		};
  }
  componentWillMount() {

  }
  renderLoad() {
    var svDataL = [];
    for(var key of Object.keys(this.state.shen.data.provinces)) {
      var index = this.state.shen.data.provinces[key].provinceid;
      svDataL[key] = this.state.shen.data.provinces[key];
      /*
      svDataL.push(
        <TouchableHighlight onPress={this._tapScrollView.bind(this,index)} style={styles.scrollMain}>
          <Text>{this.state.shen.data.provinces[key].provincecn}{index}</Text>
        </TouchableHighlight>
      );*/
      //this.setState({svData:svData});
    }
    this.setState({svData:svDataL});
  }
  renderItem(item,i) {
    var sname,sid;
    switch(this.state.svIndex){
      case 0:
        sname = item.provincecn;
        sid = item.provinceid;
      break;
      case 1:
        sname = item.areacn;
        sid = item.areaid;
      break;
      case 2:
        sname = item.citycn;
        sid = item.cityid;
      break;
    }
    return (
      <TouchableHighlight onPress={this._tapScrollView.bind(this,sid,sname)} style={styles.scrollMain}>
        <Text>{sname}</Text>
      </TouchableHighlight>
    );
  }
  _selectCity() {
    this.renderLoad();
    this.setState({svIndex:0,svType:true});
  }
  _tapScrollView(i,name) {
    var svDataL = [];
    switch(this.state.svIndex){
      case 0:
        name1 = name;
        for(var key of Object.keys(this.state.qu.data.areas)) {
          svDataL[key] = this.state.qu.data.areas[key];
        }
        this.setState({svData:svDataL,svIndex:1});
      break;
      case 1:
        name2 = name;
        for(var key of Object.keys(this.state.shi.data.citys)) {
          svDataL[key] = this.state.shi.data.citys[key];
        }
        this.setState({svData:svDataL,svIndex:2});
      break;
      case 2:
        name3 = name1 + '|' + name2 + '|' +name;
        this.setState({svIndex:0,svType:false,svSelectName:name3});
      break;
    }
  }
  _navigate(title, name, type) {
		this.props.navigator.push({
			title: title,
			component: name,
			type: type,
		})
	}
  _submitForm() {
    AsyncStorage.setItem('navState','1');
		this._navigate('完成',Success,'Modal');
  }
  render() {

    return (
      <ScrollView style={{flex:1}}>
        <Nav/>
        <View style={styles.textH}>
          <Text>请填写您的其他信息</Text>
        </View>
        <View style={styles.partCon}>
					<View style={styles.inputCon}>
						<Text style={styles.labelText}>
							电子邮箱
						</Text>
						<TextInput style={styles.textInput}
							placeholder="请填写电子邮箱"
							maxLength={64}
              keyboardType="email-address"
							placeholderTextColor="#999999"
          		underlineColorAndroid="transparent"
							onChangeText={(email) => this.setState({email})}
    					value={this.state.email}
						/>
					</View>
					<View style={styles.inputCon}>
						<Text style={styles.labelText}>
							居住城市
						</Text>
            <TouchableHighlight onPress={() => this._selectCity()} style={{flex:1}} underlayColor="#fff">
						<Text style={[styles.textInput,styles.textInputInfo ]}>
            { this.state.svSelectName === null ? '选择您居住城市' : this.state.svSelectName}
            </Text>
            </TouchableHighlight>
					</View>
				</View>
        <TouchableHighlight style={styles.btView} onPress={() => this._submitForm()}>
					<Text style={{color:'#fff',fontSize:16}}>立即申请</Text>
				</TouchableHighlight>
        <Modal
					animationType='fade'
          transparent= {true}
          visible={this.state.svType}
				>
          <View style={{backgroundColor:'rgba(0, 0, 0, 0.5)',flex: 1}}>
						<View style={{width:maxWidth,height:200,backgroundColor: '#fff',position:'absolute',left:0,bottom:0}}>
              <ScrollView style={{flex:1,height:200}}>
                {
                  this.state.svData.map((item,i)=>this.renderItem(item,i))
                }
              </ScrollView>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  textH:{
    flex:1,
    paddingLeft: 10,
    backgroundColor: '#efeff4',
    height: 30,
    justifyContent: 'center',
  },
  partCon: {
		backgroundColor: '#fff',
		paddingLeft: 10,
	},
	inputCon: {
		height: 45,
		borderTopWidth: 1,
		borderStyle: 'solid',
		borderTopColor: '#e2e2e6',
	},
	labelText: {
		position: 'absolute',
		left: 0,
		top: 12,
	},
	textInput: {
		height: 45,
		marginLeft: 60,
		paddingLeft: 10,
		borderWidth: 0,
		position: 'relative',
		textAlignVertical: 'bottom'
	},
  textInputInfo: {
    color: '#999',
    textAlignVertical: 'center',
  },
  scrollMain: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#e5e5e5'
  },
  btView: {
		backgroundColor: '#3db3f9',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		marginTop: 10,
		borderRadius: 8,
	},
});
export default Info;
