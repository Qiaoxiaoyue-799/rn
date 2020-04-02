import React, { Component } from 'react'
import {View,Text,TextInput,StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
export default class Home extends Component {
    render() {
        return (
            <View>
                {/* 搜索框开始 */}
                <View style={{
                    paddingTop:10,
                    paddingBottom:10,
                    height:55,
                    flexDirection:'row',
                    justifyContent:'center',
                    flexWrap:'wrap',
                    backgroundColor:'red'
                }}>
                    <View style={{
                        width:'85%',
                        height:40,
                        backgroundColor:'#eeeeee',
                        opacity:0.7,
                        alignItems:'center',
                        flexDirection:'row',
                        borderRadius:30
                    }}>
                        <TextInput
                            placeholder='请输入您要搜索的关键词'
                            placeholderTextColor='white'
                            style={{
                                position:"absolute",
                                left:15,
                                height:35,
                                width:"80%",
                                padding:0,
                                fontSize:18,
                                paddingLeft:20
                            }}
                        />
                        <Icon size={25} color="white" name="search" style={{padding:10}}/>
                    </View>
                    <Icon size={28} color="white" name="shopping-cart" style={{padding:5}}/>
                </View>
                {/* 搜索框结束 */}
                {/* 轮播图开始 */}
                <View style={{width:'100%',height:200}}>
                    <Swiper
                        // style={styles.container}
                        //未选中的圆点样式
                        dot={<View style={{ 
                            backgroundColor: 'white',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 15
                          
                          }}/>}
                        //选中的圆点样式
                        activeDot={<View style={{    //选中的圆点样式
                            backgroundColor: 'red',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 15
                          }}/>}          
                        showsButtons = {true}
                        autoplay={true}
                        paginationStyle={{bottom: 10}}
                    >
                        <Image style={styles.img} source={require('../../assets/demo2/lun1.jpg')}/>
                        <Image style={styles.img} source={require('../../assets/demo2/lun2.jpg')}/>
                        <Image style={styles.img} source={require('../../assets/demo2/lun1.jpg')}/>
                    </Swiper>
                </View>
                {/* 轮播图结束 */}
                {/* 列表开始 */}
                <View style={{width:'100%',height:380}}>
                    <View style={styles.list}>
                        <Image style={styles.img1} source={require('../../assets/demo2/b1.jpg')}/>
                        <View style={styles.word}>
                            <Text style={{fontSize:16}}>居家维修保养</Text>
                        </View>
                        <Icon size={25} color="gray" name="chevron-right" style={styles.ic}/>
                    </View>
                    <View style={styles.list}>
                        <Image style={styles.img1} source={require('../../assets/demo2/b2.jpg')}/>
                        <View style={styles.word}>
                            <Text style={{fontSize:16}}>住宿优惠</Text>
                        </View>
                        <Icon size={25} color="gray" name="chevron-right" style={styles.ic}/>
                    </View>
                    <View style={styles.list}>
                        <Image style={styles.img1} source={require('../../assets/demo2/b3.jpg')}/>
                        <View style={styles.word}>
                            <Text style={{fontSize:16}}>出行接送</Text>
                        </View>
                        <Icon size={25} color="gray" name="chevron-right" style={styles.ic}/>
                    </View>
                    <View style={styles.list}>
                        <Image style={styles.img1} source={require('../../assets/demo2/b4.jpg')}/>
                        <View style={styles.word}>
                            <Text style={{fontSize:16}}>E族活动</Text>
                        </View>
                        <Icon size={25} color="gray" name="chevron-right" style={styles.ic}/>
                    </View>
                </View>
                {/* 列表结束 */}
                {/* 发布需求按钮 */}
                <View style={styles.btnBox}>
                    <Text style={styles.btn}>发布需求</Text>
                </View>
                {/* 版权 */}
                <View style={styles.bottom}>
                    <Text style={{textAlign:'center',color:'gray'}}>©E族之家 版权所有</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img: {
        width:'100%',
        height:200,
    },
    list:{
        height:80,
        width:'100%',
        backgroundColor:'white',
        paddingTop:10,
        paddingLeft:20,
        marginTop:10
    },
    img1: {
        width:60,
        height:60
    },
    word:{
        position:'absolute',
        left:135,
        width:200,
        height:100,
        paddingTop:30
    },
    ic:{
        position:'absolute',
        right:30,
        top:30
    },
    btnBox:{
        width:'100%',
        height:50,
        paddingTop:5,
        paddingLeft:'10%'
    },
    btn:{
        height:45,
        width:'90%',
        borderRadius:5,
        fontSize:20,
        color:'white',
        backgroundColor:'red',
        paddingTop:8,
        paddingLeft:150
    },
    bottom:{
        width:'100%',
        height:20,
        marginTop:30
    }
  });