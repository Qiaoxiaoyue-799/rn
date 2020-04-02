import React, { Component } from 'react'
import {View,Text,ScrollView,StyleSheet,FlatList,Image, AsyncStorage,ToastAndroid} from 'react-native'
// import {Icon} from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const user1 = [
    {
        title: '账户管理',
        name:'settings'
    },
    {
        title: '收货地址',
        name:'navigation'
    },
    {
        title: '我的信息',
        name:'server'
    },
    {
        title: '我的订单',
        name:'box'
    },
    {
        title: '我的二维码',
        name:'cpu'
    },
    {
        title: '我的积分',
        name:'briefcase'
    },
    {
        title: '我的收藏',
        name:'star'
    }
];
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class UserInFor extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:''
        }
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
              var source = { uri: response.uri };
              console.log(source);
              this.setState({
                imageUrl: source,
              });
              source=JSON.stringify(source);
              AsyncStorage.setItem('path',source,()=>{
                  console.log('path!');
              })
            }
          });
    }
    componentDidMount() {
        ToastAndroid.show('正在加载中',100);
        // console.log('加载中')
    }
    render() {
        return (
            <View>
                <ScrollView>
                    {/* 头部开始 */}
                    <View style={styles.top}>
                        <Button title="" onPress={()=>{this.takephoto()}} >
                            <Image style={{width:100,height:100,borderRadius:50,marginTop:20,borderWidth:1,borderColor:'#fff'}} source={this.state.imageUrl} />
                        </Button>
                        <Text style={styles.top2}>BINNU DHILLON</Text>
                    </View>
                    {/* 头部结束 */}
                    {/* 个人中心开始 */}
                    <View style={styles.center1}>
                        <View style={styles.center11}>
                            <Icon size={30} color="#aeaeae" name="github" style={{padding:12}}/>
                            <Text style={styles.tit}>我的个人中心</Text>
                        </View>
                        <View style={styles.center12}>
                            <FlatList 
                                style={{backgroundColor: '#fff'}}
                                data={user1}
                                numColumns={3}
                                renderItem={({item})=>(
                                    <View style={styles.list1}>
                                        <Icon size={35} color="#aeaeae" style={styles.icon1} name={item.name} />
                                        <Text style={{fontSize:16,paddingTop:5,textAlign:'center'}}>{item.title}</Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                    {/* 个人中心结束 */}
                    {/* E族活动开始 */}
                    <View style={styles.center2}>
                        <View style={styles.center11}>
                            <Icon size={30} color="#aeaeae" name="users" style={{padding:8}}/>
                            <Text style={styles.tit}>E族活动</Text>
                        </View>
                        <View style={styles.center12}>
                            <View style={styles.list1}>
                                <Icon size={30} color="#aeaeae" style={styles.icon1} name='archive' />
                                <Text style={{fontSize:16,paddingTop:5,textAlign:'center'}}>居家维修保养</Text>
                            </View>
                            <View style={styles.list1}>
                                <Icon size={30} color="#aeaeae" style={styles.icon1} name='sunrise' />
                                <Text style={{fontSize:16,paddingTop:5,textAlign:'center'}}>出行接送</Text>
                            </View>
                            <View style={styles.list1}>
                                <Icon size={30} color="#aeaeae" style={styles.icon1} name='cast' />
                                <Text style={{fontSize:16,paddingTop:5,textAlign:'center'}}>我的受赠人</Text>
                            </View>
                            <View style={styles.list1}>
                                <Icon size={30} color="#aeaeae" style={styles.icon1} name='home' />
                                <Text style={{fontSize:16,paddingTop:5,textAlign:'center'}}>我的住宿优惠</Text>
                            </View>
                            <View style={styles.list1}>
                                <Icon size={30} color="#aeaeae" style={styles.icon1} name='flag' />
                                <Text style={{fontSize:16,paddingTop:5,textAlign:'center'}}>我的活动</Text>
                            </View>
                            <View style={styles.list1}>
                                <Icon size={30} color="#aeaeae" style={styles.icon1} name='loader' />
                                <Button style={styles.btn} title="" onPress={()=>{Actions.publish();console.log('已点击');}}>
                                    <Text style={{fontSize:16,paddingTop:5,textAlign:'center'}}>我的发布</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                    {/* E族活动结束 */}
                    {/* 版权 */}
                    <View style={styles.bottom}>
                        <Button title="" onPress={()=>{Actions.login();AsyncStorage.clear();}}>
                            <Text style={{textAlign:'center',color:'gray'}}>BINNU DHILLON | 退出登录</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    top:{
        width:'100%',
        height:200,
        backgroundColor:'#f23030',
        alignItems: 'center',
    },
    // top1:{
    //     marginTop:20,
    //     backgroundColor:'black',
    //     width:100,
    //     height:100
    // },
    top2:{
        position:'absolute',
        top:150,
        textAlign:'center',
        fontSize:20,
        color:'white'
    },
    center1:{
        width:'100%',
        height:340,
        marginBottom:13
    },
    center11:{
        width:'100%',
        height:50,
        marginBottom:2,
        backgroundColor:'white'
    },
    center12:{
        width:'100%',
        height:300,
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'wrap',
        backgroundColor:'white'
    },
    tit:{
        position:'absolute',
        top:15,
        left:50,
        fontSize:18
    },
    list1:{
        width:'33.3%',
        height:100,
        // backgroundColor:'pink'
    },
    icon1:{
        paddingLeft:65,
        paddingTop:20,
        paddingBottom:10
    },
    center2:{
        width:'100%',
        height:210,
        marginBottom:15
    },
    bottom:{
        width:'100%',
        height:90,
        marginTop:30,
        paddingTop:30,
        backgroundColor:'#eee'
    },
    btn:{
        width: 20,
        height: 40,
        color: '#fff',
        textAlignVertical: 'center',
        borderRadius: 20,
        // backgroundColor: 'red'
    }
})