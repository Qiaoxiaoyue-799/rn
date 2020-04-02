import React, { Component } from 'react'
import {View,Image,StyleSheet} from 'react-native';

export default class ImageBg extends Component {
    render() {
        let {style,source} = this.props;
        return (
            <View style={style}>
                <Image style={[style,styles.absoluteImg]} 
                source={source}/>
            </View>
        )
    }
}

//在rn中，每个组件都默认设置了position:relative
const styles = StyleSheet.create({
    absoluteImg:{
        position:'absolute',
        left:370,
        top:0
    }
})