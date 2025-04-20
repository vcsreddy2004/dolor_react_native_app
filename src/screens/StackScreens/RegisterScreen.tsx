import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type Screens = {
  bottomTab:undefined,
  login:undefined,
}

export default function RegisterScreen() {
  let navigator = useNavigation<NavigationProp<Screens>>();
  let [password,setPassword] = useState({
    passwordVisibility:true,
    passwordIcon:"eye-off"
  });
  let updatePasswordVisibility = () => {
    if(password.passwordVisibility) {
      setPassword(()=>({
        passwordVisibility:false,
        passwordIcon:"eye",
      }));
    }
    else {
      setPassword(()=>({
        passwordVisibility:true,
        passwordIcon:"eye",
      }));
    }
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.registerView}>
        <View style={styles.registerHeader}>
          <Text style={[styles.defaultFontSize,{color:"white",fontWeight:800}]}>
            Register
          </Text>
        </View>
        <View style={styles.registerBody}>
          <Text style={styles.defaultFontSize}>
            First Name
          </Text>
          <TextInput style={styles.defaultTextInput}></TextInput>
          <Text style={styles.defaultFontSize}>
            Last Name
          </Text>
          <TextInput style={styles.defaultTextInput}></TextInput>
          <Text style={styles.defaultFontSize}>
            Email
          </Text>
          <TextInput style={styles.defaultTextInput}></TextInput>
          <Text style={styles.defaultFontSize}>
            Password
          </Text>
          <View style={{flexDirection:"row"}}>
            <TextInput style={[styles.defaultTextInput,{width:"100%"}]} secureTextEntry={true}></TextInput>
          </View>
          <Text style={styles.defaultFontSize}>
            Confirm Password
          </Text>
          <View style={{flexDirection:"row"}}>
            <TextInput style={[styles.defaultTextInput,{width:"90%"}]} secureTextEntry={password.passwordVisibility}></TextInput>
            <TouchableOpacity onPress={updatePasswordVisibility}>
              <Icon name={password.passwordIcon} color={"black"} size={30}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row",justifyContent:"center"}}>
            <TouchableOpacity onPress={()=>navigator.navigate("login")} style={styles.registerBtn}>
              <Text style={{textAlign:"center",color:"white"}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    mainView: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgb(255, 233, 168)",
    },
    registerBtn: {
        backgroundColor:"green",
        width:100,
        padding:10,
        margin:10,
    },
    registerView: {
        width:"70%",
        height:500,
        backgroundColor:"white",
    },
    registerHeader: {
        backgroundColor:"rgb(205, 133, 0)",
        padding:10,
    },
    registerBody: {
        padding:20,
    },
    defaultFontSize: {
        fontSize:20,
    },
    defaultTextInput: {
        borderWidth:1,
        height:30,
        color:"black",
        padding:0,
    }
});