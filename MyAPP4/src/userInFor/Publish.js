import React, { Component } from 'react'
import {
    View,
    Text,
    AsyncStorage,
    ScrollView,
    Image,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import Button from 'react-native-button';

//本地存储
var page=1;
export default class Publish extends Component {
    constructor(){
        super();
        this.state={ 
            data:[],
            arr:['未回复','已回复']
        }
    }
    componentDidMount(){
        fetch(`https://cnodejs.org/api/v1/topics?page=`+page+`&limit=12`)
        .then(res=>res.json())
        .then(res=>{
            this.setState({data:res.data})
        })
    }
    addPage=()=>{
        page=page+1;
        console.log('page'+page);
        fetch(`https://cnodejs.org/api/v1/topics?page=`+page+`&limit=12`)
        .then(res=>res.json())
        .then(res=>{
            this.setState({data:res.data})
        })
    }
    reducePage=()=>{
        if(page>1){
            page=page-1;
            console.log('page'+page);
            fetch(`https://cnodejs.org/api/v1/topics?page=`+page+`&limit=12`)
            .then(res=>res.json())
            .then(res=>{
                this.setState({data:res.data})
            })
        }
        else{
            ToastAndroid.showWithGravity('已经是第一页了哦！', ToastAndroid.SHORT,ToastAndroid.CENTER)
        }
    }
    render() {
        return (
            <View style={{paddingTop:3}}>
                <ScrollView>
                    {
                        this.state.data.map((item)=>{
                            const randomNum = Math.round((Math.random()));
                            console.log(randomNum);
                            if(randomNum==1){
                                return(
                                    <View style={styles.content}>
                                        <Text style={styles.txt1}>
                                            {item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}
                                        </Text>
                                        <Text style={styles.txt2}>
                                            {item.create_at ? (item.create_at.length > 10 ? item.create_at.substr(0, 10) : item.create_at) : ""}
                                        </Text>
                                        <Text style={styles.txt3}>
                                            {this.state.arr[randomNum]}
                                        </Text>
                                    </View>
                                )
                            }
                            else{
                                return(
                                    <View style={styles.content}>
                                        <Text style={styles.txt1}>
                                            {item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}
                                        </Text>
                                        <Text style={styles.txt2}>
                                            {item.create_at ? (item.create_at.length > 10 ? item.create_at.substr(0, 10) : item.create_at) : ""}
                                        </Text>
                                        <Text style={styles.txt5}>
                                            {this.state.arr[randomNum]}
                                        </Text>
                                    </View>
                                )
                            }
                            }
                        )
                    }
                    <View style={styles.box}>
                        <Button style={styles.btn} onPress={this.reducePage}>上一页</Button>
                        <Text style={styles.txt4}>第{page}页</Text>
                        {/* <Button style={styles.btn2} onPress={this.addPage}>下一页</Button> */}
                        <Button style={styles.btn} onPress={this.addPage}>下一页</Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        // width:"100%",
        height:50,
        backgroundColor:'#fff',
        paddingLeft:15,
        paddingTop:15,
        marginBottom:1
    },
    txt1:{
        fontSize:16,
    },
    txt2:{
        fontSize:16,
        position:'absolute',
        left:290,
        top:10,
        paddingTop:5
    },
    txt3:{
        position:'absolute',
        right:10,
        fontSize:16,
        right:8,
        top:10,
        paddingTop:5,
        color:'red'
    },
    txt5:{
        position:'absolute',
        right:10,
        fontSize:16,
        right:8,
        top:10,
        paddingTop:5,
    },
    txt4:{
        fontSize:20,
        position:'absolute',
        left:215,
        top:40
    },
    box: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor :'#fff',
        height:100
    },
    btn: {
        width: 120,
        height: 35,
        backgroundColor: '#f23030',
        color: 'white',
        borderRadius: 15,
        lineHeight: 35,
    }

})