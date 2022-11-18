import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from './components/Button';
import { StyleSheet, Text,SafeAreaView,Image, View,TextInput, KeyboardAvoidingView, Platform,  useWindowDimensions} from 'react-native';
import { HeaderBar } from './components/HeaderBar';

export default function App() {
  const windowHeight = useWindowDimensions().height;
  return (
    <>
    <HeaderBar title="Example"></HeaderBar>
    <SafeAreaView style={[styles.container,{minHeight: Math.round(windowHeight)}]}>
      <View style={{flex: 0.7}}>
      <Image source={{uri: "https://picsum.photos/seed/picsum/300/300"}} style={{width: 150,height:150, marginTop: 10}}></Image>
      </View>
      <View style={styles.buttonGroup}>
        <View style={styles.buttonPair}>
          <Button title = "BUTTON"></Button>
          <Button title = "BUTTON"></Button>
        </View>
        <View style={styles.buttonPair}>
          <Button title = "BUTTON"></Button>
          <Button title = "BUTTON"></Button>
        </View>
      </View>
      <View style={{flexDirection: "row", width : '100%', justifyContent : "space-around",flex: 2,alignItems:"flex-start"}}>
      <Text>Email</Text>
      <TextInput  style={{width: '60%', height: 'auto',color: "#de3c5c", borderBottomColor: '#de3c5c', borderBottomWidth: 3, marginRight: 50}}  ></TextInput>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create(
  {
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonGroup: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"center",
  },
  buttonPair:{flexDirection: "row",width : '100%', justifyContent : "space-evenly", marginBottom: 30},
  blank:{
    flex:1.5
  }
});
