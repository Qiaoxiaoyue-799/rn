import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils';
import Button from 'react-native-button';

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    register = ()=>{
        this.setState({isloading:true})
        myFetch.post('/register',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
        console.log(res.data.tag);
            AsyncStorage.setItem('newUser',JSON.stringify(res.data))
            .then(()=>{
                this.setState({isloading:false}) 
                ToastAndroid.show('注册成功',100);
                Actions.login();
            })
        })
    } 
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
            <View
              style={{ alignItems: 'center'}}>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="user" size={20} color="red"/>
                <TextInput placeholder="请设置用户名" 
                    onChangeText={this.userhandle}
                />
              </View>
              <View
                style={{
                  width: '80%',
                  marginRight: 10,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Icon name="edit" size={20} color="red"/>
                <TextInput 
                    onChangeText={this.pwdhandle}
                    placeholder="请设置密码" 
                    secureTextEntry={true}
                />
              </View>
                <Button title="" onPress={()=>{Actions.login();console.log('已点击');}}>
                    <TouchableOpacity 
                        style={{
                            width: 280,
                            height: 40,
                            backgroundColor: '#ccc',
                            marginTop: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={this.register}>
                        <Text>点击注册</Text>
                    </TouchableOpacity>
                </Button>
            </View>
            
            {
                this.state.isloading
                ?<View><Text style={{textAlign:'center'}}>正在注册...</Text></View>
                :null
            }
          </View>
        )
    }
}
