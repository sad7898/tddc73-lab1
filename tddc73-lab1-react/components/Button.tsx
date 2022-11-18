import React from 'react';
import {Pressable,StyleSheet,Text } from 'react-native';

export interface ButtonProps {
    onPress?: () => void
    title: string
}
export const Button = ({onPress,title}:ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightgray',
      width: 90,
      height: 40
    },
    text: {
      fontSize: 16,
      color: 'black',
      fontWeight:"500"
    },
  });