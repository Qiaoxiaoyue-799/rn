import React, { Component } from 'react'
import {View,Text,ScrollView,StyleSheet,TextInput,FlatList,Image, AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import Imaget from '../../components/Imaget'

export default class UserInFor extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    {/* 搜索框开始 */}
                    <View style={{
                        paddingTop:10,
                        paddingBottom:10,
                        height:50,
                        flexDirection:'row',
                        justifyContent:'center',
                        flexWrap:'wrap',
                        backgroundColor:'white'
                    }}>
                        <View style={{
                            width:'85%',
                            height:36,
                            backgroundColor:'#eeeeee',
                            alignItems:'center',
                            flexDirection:'row'
                            }}>
                            <TextInput
                                placeholder='请输入商品名称'
                                placeholderTextColor='#8d8989'
                                style={{
                                    position:"absolute",
                                    left:15,
                                    height:33,
                                    padding:0
                                }}
                            />
                            <Imaget
                                source={require('../../sea.jpg')}
                                style={{height:30,width:22}}
                                >
                            </Imaget>
                        </View>
                    </View>
                    {/* 搜索框结束 */}
                    {/* 导航栏开始 */}
                    <View style={{
                        flexDirection:'row',
                        height:40,
                        marginTop:2,
                        backgroundColor:'white',
                        paddingLeft:'5%',
                        paddingTop:10
                    }}>
                        <View style={styles.na}>
                        <Text style={styles.txt4}>综合</Text>
                        </View>
                        <View style={styles.na}>
                        <Text style={styles.txt3}>销量</Text>
                        </View>
                        <View style={styles.na}>
                        <Text style={styles.txt3}>新品</Text>
                        </View>
                        <View style={styles.na}>
                        <Text style={styles.txt3}>价格</Text>
                        </View>
                        <View style={styles.na}>
                        <Text style={styles.txt3}>信用</Text>
                        </View>
                    </View>
                    {/* 导航栏结束 */}
                    {/* 内容开始 */}
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-around',
                        flexWrap:'wrap',
                        backgroundColor:'#f4f4f4'
                    }}>
                        <View style={styles.box}>
                            <View style={styles.tu}>
                                <Image source={require('../../good.jpg')} style={styles.img}/>
                            </View> 
                            <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.txt2}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.tu}>
                                <Image source={require('../../han.jpg')} style={styles.img}/>
                            </View> 
                            <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.txt2}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.tu}>
                                <Image source={require('../../good.jpg')} style={styles.img}/>
                            </View> 
                            <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.txt2}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.tu}>
                                <Image source={require('../../han.jpg')} style={styles.img}/>
                            </View> 
                            <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.txt2}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.tu}>
                                <Image source={require('../../good.jpg')} style={styles.img}/>
                            </View> 
                            <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.txt2}>36.00</Text>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.tu}>
                                <Image source={require('../../han.jpg')} style={styles.img}/>
                            </View> 
                            <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                            <Text style={styles.txt2}>36.00</Text>
                        </View>
                    </View>
                    {/* 内容结束 */}
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
      width:'45%',
      height:310,
      margin:10,
      padding:10,
      backgroundColor:'#fff'
    },
    img:{
      height:200,
      width:160,
      marginLeft:'10%'
    },
    tu:{
      height:200,
      width:'100%'
    },
    txt1:{
      color:'#808080',
      fontSize:16,
      paddingTop:20
    },
    txt2:{
      color:'#f23030',
      fontSize:15,
      paddingTop:8
    },
    na:{
      width:'18%'
    },
    txt3:{
      fontSize:15,
      textAlign:'center'
    },
    txt4:{
      fontSize:15,
      textAlign:'center',
      color:'red'
    }
  });