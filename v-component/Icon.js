import React, { Component } from 'react'
import { Platform, PixelRatio, Dimensions, } from 'react-native';
//import Icon from 'v-component/Icon'
const { width, height } = Dimensions.get('window');
const scale = width / 320;


function normalize(size){
    //px = dp * scaleFactor //formula
    if(Platform.isPad){
        return size + 3
    } else {
        const newSize = size * scale 
        if (Platform.OS === 'ios') return Math.round(PixelRatio.roundToNearestPixel(newSize))
        else return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export const CIcon = props => {
    const { IconComponent, size } = props
    return <IconComponent {...props} size={normalize(size)}/>
};