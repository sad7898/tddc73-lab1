import React from 'react';
import { View,Text } from 'react-native';

export interface HeaderBarProps {
    title: string
}
export const HeaderBar = ({title}:HeaderBarProps) => {
    return (
        <>
        <View style={{height:38,width:'100%', backgroundColor: '#074238'}} ></View>
        <View style={{height:60,width:'100%', backgroundColor: '#3f8a75',justifyContent:"center"}} >
            <Text style={{color: 'white', padding:10, fontWeight: 'bold', fontSize: 20}}>{title}</Text>
        </View>
        </>
    )
}