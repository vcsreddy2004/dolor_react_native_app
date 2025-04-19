import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Button, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native';
type screens = {
  bottomTab: undefined
  login: undefined,
  register: undefined,
}
export default function LandingScreen() {
  const navigator = useNavigation<NavigationProp<screens>>();
  return (
    <View style={styles.mainVIew}>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigator.navigate("login")}>
        <Text style={{color:"white",textAlign:"center"}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigator.navigate("register")}>
        <Text style={{color:"white",textAlign:"center"}}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    mainVIew: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"wheet",
    },
    loginBtn: {
        backgroundColor:"green",
        width:300,
        padding:10,
        margin:10,
    }
});